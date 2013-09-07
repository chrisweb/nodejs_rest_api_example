// get the environment variable
var environment = process.env.NODE_ENV;

console.log('environment: ' + environment);

var Mongoose = require('mongoose');

var Express = require('express');

var app = Express();

app.get('/', function(request, response) {
    
    console.log('root route got called');
    
    response.writeHead(200, { 'Content-Type': 'text/plain' });
  
	response.write('hello world');
    
    response.end();
  
});

app.all('/api/v1/articles/:id?*', function(request, response) {

	console.log('articles API route got called, using the "' + request.route.method.toUpperCase() + '" method, with the optional parameter set to: ' + request.params['id']);

    response.writeHead(200, { 'Content-Type': 'application/json' });

	var articlesCollection = [];
	
	articlesCollection.push({
		id: 1,
		title: 'foo'
	});
	
	articlesCollection.push({
		id: 2,
		title: 'bar'
	});

	response.write(
        JSON.stringify(
            {
                articles: articlesCollection
            }
        )
    );
    
    response.end();
  
});

app.listen(3000);

var mongoOptions = {};

Mongoose.connect('mongodb://localhost:27017/MY_DATABASE_NAME', mongoOptions, function(error) {
    
    if (error) {
        
        console.log('mongodb connection failed, error: ' + error);
        
    } else {
        
        console.log('mongodb connection established successfully');
        
    }
    
});
