var express = require('express');
var router = express.Router();
var servers = require('../datas/servers');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect("/");
});

router.get('/:id/:server', function(req, res, next) {
    if (!req.user) {
        res.redirect("/login");
    } else {
        var id = Number(req.params.id);
        var server = servers[id - 1];
        var servername = req.params.server;

        res.render('server', {
            user: req.user,
            id: id,
            servername: servername,
            server: server
        });
    }
});

router.get('/:id/:server/:moduleid/:modulename', function(req, res, next) {

});

module.exports = router;
