var jwt = require('jsonwebtoken');

module.exports = function(application){
	application.post('/login', (request, response) => {
        if(request.body.user === 'luiz' && request.body.pwd === '123'){
            //auth ok
            const id = 1; //esse id viria do banco de dados
            var token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
            response.status(200).send({ auth: true, token: token });
        }
        else {
            response.status(401).send({ auth: false, message: "Login inválido" });
        }
	});
}
