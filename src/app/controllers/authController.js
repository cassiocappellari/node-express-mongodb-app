const express = require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const mailer = require('../../modules/mailer')

const authConfig = require('../../config/auth.json')

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

router.post('/register', async (req, res) => {
    const {email} = req.body

    try {

        if (await User.findOne({email})) {
            return res.status(400).send({error: 'user already exists'})
        }

        const user = await User.create(req.body)

        user.password = undefined

        return res.send({
            user,
            token: generateToken({id: user.id})
        })
    } catch (err) {
        return res.status(400).send({error: 'registration failed'})
    }
})

router.post('/authenticate', async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email}).select('+password')

    if (!user) {
        return res.status(400).send({error: 'user not found'})
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({error: 'invalid password'})
    }

    user.password = undefined

    res.send({
        user, 
        token: generateToken({id: user.id})
    })
})

router.post('/forgot_password', async (req, res) => {
    const {email} = req.body

    try {
        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).send({error: 'user not found'})
        }

        const token = crypto.randomBytes(20).toString('hex')

        const now = new Date()
        now.setHours(now.getHours() + 1)

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now
            }
        })

        mailer.sendMail({
            to: email,
            from: 'cassiocappellari@gmail.com',
            template: 'auth/forgot_password',
            context: {token}
        }, (err) => {
            if (err) {
                return res.status(400).send({error: 'cannot send forgot password email'})
            }

            return res.status(200).send({success: 'email successfully sended'})
        })

    } catch (err) {
        res.status(400).send({error: 'error on forgot password, please try again'})
    }
})

module.exports = app => app.use('/auth', router)