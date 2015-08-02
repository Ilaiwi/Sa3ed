var path = require('path'),
    routes = require('./routes'),
    exphbs = require('express3-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler');
var flash = require('connect-flash');
var passport = require('passport');
var expressSession = require('express-session');

module.exports = function(app) {
    app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials']
    }).engine);
    app.set('view engine', 'handlebars');

    //app.use(connect.logger('dev'));
    app.use(morgan('dev'));
    // app.use(connect.bodyParser({
    //     uploadDir:path.join(__dirname, 'public/upload/temp')
    // }));
    // app.use(connect.json());
    // app.use(connect.urlencoded());




    //app.use(bodyParser.urlencoded({ extended: false }));
    //app.use(bodyParser.json({uploadDir:path.join(__dirname, '../public/upload/temp')}));


    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));


    //app.use(bodyParser({
    //    uploadDir:path.join(__dirname, '../public/upload/temp')
    //}));
    // app.use(connect.methodOverride());
    app.use(methodOverride());
    // app.use(connect.cookieParser('some-secret-value-here'));
    app.use(cookieParser('some-secret-value-here'));
    // app.use(app.router);
    routes.initialize(app, new express.Router());

    // app.use('/public/', connect.static(path.join(__dirname, '../public')));
    app.use('/public/', express.static(path.join(__dirname, '../public')));
    app.use(expressSession({secret: 'mySecretKey'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    //var initPassport = require('./passport/init');
    //initPassport(passport);
    if ('development' === app.get('env')) {
        // app.use(connect.errorHandler());
        app.use(errorHandler());
    }

    return app;
};