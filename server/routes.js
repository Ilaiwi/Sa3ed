/**
 * Created by ahmadilaiwi on 7/4/15.
 */
var home = require('../controllers/home'),
    image = require('../controllers/image'),
    express = require('express'),
    auth=require('../controllers/auth');


module.exports.initialize = function(app, router) {
    //var router = express.Router();
    router.get('/', home.index);
    router.get('/images/:image_id', image.index);
    router.get('/login',auth.login);
    router.get('/logout',auth.logout);
    router.get('/signup',auth.signup);
    router.post('/images', image.create);
    router.post('/images/:image_id/like', image.like);
    router.post('/images/:image_id/comment', image.comment);

    app.use('/', router);
};
