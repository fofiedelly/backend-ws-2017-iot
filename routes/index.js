var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var servers = require('../datas/servers');
var router = express.Router();


router.get('/', function(req, res, next) {
    if (!req.user) {
        res.redirect("/login");
    } else {
        res.render('index', {
            roomServers: servers,
            user: req.user
        });
    }
});

router.get('/register', function(req, res) {
    res.render('register', {});
});

/**
 *  Register new User
 */
router.post('/register', function(req, res) {
    Account.register(new Account({
        username: req.body.username
    }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', {
                account: account
            });
        }

        passport.authenticate('local')(req, res, function() {
            res.redirect('/');
        });
    });
});

/**
 **  Login form
 **/
router.get('/login', function(req, res) {
    res.render('login', {
        user: req.user
    });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res) {
    res.status(200).send("pong!");
});

module.exports = router;
