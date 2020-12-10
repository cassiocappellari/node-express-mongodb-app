module.exports = (req, res, next) => { // o parâmetro next é chamado somente se o usuário tiver autorização para ir ao próximo passo, que é o controller
    const authHeader = req.headers.authorization // busca o header de autorização na requisição e armazena na variável 'authHeader'

    if (!authHeader) {
        return res.status(401).send({error: 'no token provided'})
    } // verifica se o token foi informado

    const parts = authHeader.split(' ') // divide o token em duas partes a partir do espaço, para verificar a palavra 'Bearer' de um lado, e o token de outro
    
    // verifica se o token está no formato correto, que no JWT é, por exemplo, 'Bearer + hash'
} // intercepa os usuaŕios para verificar se há autorização de prosseguir pela aplicação