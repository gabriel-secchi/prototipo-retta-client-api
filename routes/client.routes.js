module.exports = function(application){
	application.get('/client', function(request, response){
		response.send('asd');
	});
}
