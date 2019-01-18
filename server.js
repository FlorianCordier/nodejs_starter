const config = require('./config/config');
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let twig = require('twig');


/***** VIEW CONFIGURATION *****/
app.set('views', __dirname + '/ressources/views');
app.set('view engine', 'twig');

if(config.app.mode == 'dev')
    twig.cache(false);
/*****************************/


/***** ROUTES *****/
app.use(express.static(__dirname + '/public'));
require('./routes/routes')(app);
/*******************/

/***** SERVER RUN /*****/
server.listen(config.app.port, () => {
    console.log(`Server run on port ${config.app.port}`);
});
/*******************/