var db = require('./myDb');
var user = {};

user.auth = function(user, callback) {
    validateUser({
        'username': user.username,
        'password': user.password
    }, function(err, doc) {
        callback(err, doc);
    });
}

user.getById = function(id, callback) {
    db.getUserById(id, function(err, doc) {
        if (err) {
            callback(err);
            return;
        }
        callback(undefined, doc);
    });
}

user.check = function(req, res, next) {
    if (req.cookies.user_id) {
        validateUser({
            'id': req.cookies.user_id
        }, function(err, doc) {
            if (doc) {
                next();
            } else {
                res.status(403).send(err);
                //res.redirect('http://localhost:3000/#/login');
            }
        });
    } else {
        res.status(403).send('Unauthenticated user');
        //res.redirect('http://localhost:3000/#/login');
    }
};

function validateUser(user, callback) {
    if (user.username && user.password) {
        db.getUserByUsernameAndPassword(
            user.username, user.password,
            function(err, doc) {
                callback(err, doc);
            }
        );
    } else {
        db.getUserById(user.id,
            function(err, doc) {
                callback(err, doc);
            }
        );
    }
}

module.exports = user;
