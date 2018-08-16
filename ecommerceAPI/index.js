const express = require('express');
const http = require('http');
const appConfig = require('./config/appConfig');
const fs = require('fs');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalErrorMiddleWare = require('./middlewares/appErrorHandler');
const routeLoggerMiddleWare = require('./middlewares/routeLogger');
const helmet = require('helmet');
const logger = require('./libs/loggerLib');

// declaring an instance or creating an application instance
const app = express();

//middleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(globalErrorMiddleWare.globalErrorHandler);
app.use(routeLoggerMiddleWare.logIp);
app.use(helmet());

//apidoc -i routes/ -o apidoc command to generate API

// boostrap models
let modelsPath = './models';
fs.readdirSync(modelsPath).forEach(function (file){
    if(-file.indexOf('.js'))
    {
        console.log(file);        
        require(modelsPath+'/'+file);
    }
});
// end bootstrap models


// start Boostraping Routes
// app.get('/', (req,res) => res.send('Hello World funny!'));

let routesPath = './routes';
fs.readdirSync(routesPath).forEach(function (file) {
    if(-file.indexOf('.js'))
    {
        console.log("Including the following file");
        console.log(routesPath+'/'+file);

        let route = require(routesPath+'/'+file);
        route.setRouter(app);
    }
});// end bootstraping the routes


// calling global 404 handler after route
app.use(globalErrorMiddleWare.globalNotFoundHandler);
// end global 404 handler


// listening to the server - creating a local server
// app.listen(appConfig.port, () => {
//     console.log('App listening on port 3000');

//     // creating the mongo db connection here
//     // let db = mongoose.connect(appConfig.db.uri, { useMongoClient: true });

//     // In mongoose 5 no need of { useMongoClient: true }
//     let db = mongoose.connect(appConfig.db.uri);

// });

// create http server   
const server = http.createServer(app);
// start listening to http server
console.log(appConfig);
server.listen(appConfig.port);
server.on('error', onError);
server.on('listening', onListening);
// end server listening code


function onError(error)
{
    if(error.syscall != 'listen')
    {
        logger.error(error.code + ' not equal listen', 'ServerOnErrorHandler', 10);
        throw error;
    }

    // handle specific listen errors with friendly messages
    switch(error.code)
    {
        case 'EACCES':
        logger.error(error.code + ':elavated privileges required', 'ServerOnErrorHandler', 10);
        process.exit(1);
        break;

        case 'EADDRINUSE':
        logger.error(error.code + ':port is already in use', 'ServerOnErrorHandler', 10);
        process.exit(1);
        break;

        default:
        logger.error(error.code + ':some unknown error occured', 'ServerOnErrorHandler', 10);
        throw error;
    }
}

// Event listening  for HTTP Server "listening" Event.
function onListening()
{
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    logger.information('Server listening on port '+ addr.port, 'serverOnListeningHandler',10);
    let db = mongoose.connect(appConfig.db.uri, {useNewUrlParser: true});
}

process.on('unhandledRejection', (requestAnimationFrame, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
})

// handling mongoose connection error
mongoose.connection.on('error', function(err){
    console.log('Database connection error');
    console.log(err);
}); // end mongoose connection error


// handling mongoose success event
mongoose.connection.on('open', function(err){
    if(err)
    {
        console.log('Database error');
        console.log(err);
    }
    else
    {
        console.log('Database connection open success');
    }
});// end mongoose connection success event