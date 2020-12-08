const express = require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcryptjs')

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

    const user = await User.findOne({email}).select('+password') // busca o email no banco de dados para ver se o usuário existe; 'select('+password')' seleciona e traz o campo password no banco de dados para validação de usuário

    if (!user) {
        return res.status(400).send({error: 'user not found'})
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({error: 'invalid password'})
    } // verificação de senha, se a senha do login está de acordo com a senha de cadastro; '(!await bcrypt.compare(password, user.password)' faz a comparação entre a senha do login e a senha do banco de dados

    user.password = undefined

    res.send({user})
}) // rota de autenticação

module.exports = app => app.use('/auth', router)