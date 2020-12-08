const express = require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    const {email} = req.body

    try {

        if (await User.findOne({email})) {
            return res.status(400).send({error: 'user already exists'})
        }

        const user = await User.create(req.body)

        user.password = undefined

        return res.send({user})
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

    const token = jwt.sign({id: user.id})

    res.send({user})
})

module.exports = app => app.use('/auth', router)