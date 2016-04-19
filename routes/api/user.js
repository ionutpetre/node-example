var express = require('express'),
    userService = require('../services/user');
var router = express.Router();

/* AUTH user on POST req */
router.post('/auth', function(req, res) {
    if (req.body.username && req.body.password) {
        userService.auth(req.body, function(err, doc) {
            if (doc) {
                res.cookie('user_id', doc.id);
                res.status(200).send(doc);
            } else {
                res.status(401).send('Unauthorized user');
            }
        });
    } else {
        res.status(400).send('Bad request!');
    }
});

/* GET user document by id */
router.get('/:id', userService.check, function(req, res) {
    if (req.params.id) {
        userService.getById(req.params.id, function(err, doc) {
            if (err) {
                res.status(405).send(err);
                return;
            }
            res.status(200).send(doc);
        });
    } else {
        res.status(400).send('Bad request!');
    }
});

module.exports = router;
