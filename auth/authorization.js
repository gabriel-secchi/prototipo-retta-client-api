var jwt = require('jsonwebtoken');

module.exports = function(request, response, next){
    let token = request.headers['x-access-token'];

    console.log(request.headers);
    
    if (!token) {
        return response.status(401).send({ auth: false, message: 'Token não enviado' });
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
        if (error) {
            return response.status(401).send({ auth: false, message: 'Falha na autenticidade do token' });
        }

        // se tudo estiver ok, salva no request para uso posterior
        request.userId = decoded.id;
        next();
    });
}
