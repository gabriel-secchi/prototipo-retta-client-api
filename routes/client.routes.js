var jtwValidate = require('../auth/authorization');

module.exports = function(application){
	application.get('/client', jtwValidate, (request, response, next) => {
		response.send('asd');
	});
}
