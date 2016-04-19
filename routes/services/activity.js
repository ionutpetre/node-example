var db = require('./mockDb');
var activity = {};

activity.getAll = function(callback) {
    db.getAllActivities(function(err, docs) {
        if (err) {
            callback(err);
            return;
        }
        callback(undefined, docs);
    });
}

activity.getById = function(id, callback) {
    db.getActivityById(id, function(err, doc) {
        if (err) {
            callback(err);
            return;
        }
        callback(undefined, doc);
    });
}

module.exports = activity;
