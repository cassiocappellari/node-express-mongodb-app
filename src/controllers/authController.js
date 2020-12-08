const express = require('express')
const User = require('../models/user')
const router = express.Router()

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

module.exports = app => app.use('/auth', router)