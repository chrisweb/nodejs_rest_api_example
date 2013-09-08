/**
 * 
 * get the environment variable
 * 
 */
var environment = process.env.NODE_ENV;

console.log('environment: ' + environment);

/**
 * 
 * loading vendor modules
 * 
 */
var Mongoose = require('mongoose');

var Express = require('express');

/**
 * 
 * setup a server using expressjs
 * 
 */
var app = Express();

// compress (gzip) static files
app.use(Express.compress());

// deliver static files from the "desktop_client_dev" folder
app.use(Express.static(__dirname + '/../desktop_client_dev'));

var fs = require('fs');

app.get('/', function(request, response, next) {

    response.setHeader('Content-Type', 'text/html');

    response.send(fs.readFileSync('./application/views/layouts/default.html', 'utf8'));

});

app.all('/api/v1/articles/:id?*', function(request, response) {

	console.log('articles API route got called, using the "' + request.route.method.toUpperCase() + '" method, with the optional parameter set to: ' + request.params['id']);
    
    var articleModel = require('./models/Article');

    articleModel.find(function(error, articlesCollection) {

        if (error) {

            response.writeHead(500, { 'Content-Type': 'text/plain' });
            
            response.write('Error: ' + error);

        } else {

            response.writeHead(200, { 'Content-Type': 'application/json' });
            
            response.write(
                JSON.stringify(
                    {
                        articles: articlesCollection
                    }
                )
            );

        }

    });
    
    response.end();
  
});

app.listen(3000);

/**
 * 
 * connect to mongodb using mongoose
 * 
 */
var mongoOptions = {};

Mongoose.connect('mongodb://localhost:27017/MY_DATABASE_NAME', mongoOptions, function(error) {
    
    if (error) {
        
        console.log('mongodb connection failed, error: ' + error);
        
    } else {
        
        console.log('mongodb connection established successfully');
        
    }
    
});

/**
 * 
 * share the utilities file with the client
 * 
 */
app.get('/javascripts/library/utilities.js', function(request, response, next) {

    response.setHeader('Content-Type', 'application/javascript');

    response.send(fs.readFileSync('./application/library/utilities.js', 'utf8'));

});