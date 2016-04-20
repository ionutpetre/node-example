var db = require('./myDb');
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

activity.create = function(activity, callback) {
    db.createActivity(activity, function(err) {
        if (err) {
            callback(err);
            return;
        }
    });
}

activity.update = function(activity, callback) {
    db.updateActivity(activity, function(err) {
        if (err) {
            callback(err);
            return;
        }
    });
}

module.exports = activity;
