// get the environment variable
var environment = process.env.NODE_ENV;

console.log('environment: ' + environment);

var Mongoose = require('mongoose');

var Express = require('express');

var mongoOptions = {};

Mongoose.connect('mongodb://localhost:27017/MY_DATABASE_NAME', mongoOptions, function(error) {
    
    if (error) {
        
        console.log('mongodb connection failed, error: ' + error);
        
    } else {
        
        console.log('mongodb connection established successfully');
        
    }
    
});

var app = Express();

app.post('/article/create', function(request, response) {

	var ArticleModel = require('models/Article');
	
	
  
	response.json({
	
		statusMessage: 'success'
	
	});
  
});

app.listen(3000);