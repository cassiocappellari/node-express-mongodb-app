const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => { // o parâmetro next é chamado somente se o usuário tiver autorização para ir ao próximo passo, que é o controller
    const authHeader = req.headers.authorization // busca o header de autorização na requisição e armazena na variável 'authHeader'

    if (!authHeader) {
        return res.status(401).send({error: 'no token provided'})
    } // verifica se o token foi informado

    const parts = authHeader.split(' ') // divide o token em duas partes ('parts' se transforma em um array) a partir do espaço, para verificar a palavra 'Bearer' de um lado, e o token de outro
    
    if (!parts.lenght === 2) {
        return res.status(401).send({error: 'invalid token'})
    } // verifica se o token está no formato correto (em duas partes), que no JWT é, por exemplo, 'Bearer + hash'

    const [scheme, token] = parts // desestrutura o array 'parts' parar verificar tanto a palavra 'Bearer' quanto o próprio token

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({error: 'invalid token'})
    } // verifica, através de regex, se o 'scheme' tem a palavra Bearer escrito

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({error: 'invalid token'})

    }) // verificação final para ver se o token da aplicação bate com o token do usuário que fez a requisição
} // intercepa os usuaŕios para verificar se há autorização de prosseguir pela aplicação