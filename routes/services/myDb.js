var fs = require('fs');
var myDb = {};

myDb.getUserByUsernameAndPassword = function(username, password, callback) {
    myDb.getDocs('users', function(err, userDocs) {
        if (err) {
            callback(err, null);
            return;
        } else {
            for (idx in userDocs) {
                if (userDocs[idx].username === username &&
                    userDocs[idx].password === password) {
                    callback(undefined, userDocs[idx]);
                    return;
                }
            }
            callback('No user found with this credentials!', null);
        }
    });
}

myDb.getUserById = function(id, callback) {
    myDb.getDocs('users', function(err, userDocs) {
        if (err) {
            callback(err, null);
            return;
        } else {
            for (idx in userDocs) {
                for (idx in userDocs) {
                    if (userDocs[idx].id == id) {
                        callback(undefined, userDocs[idx]);
                        return;
                    }
                }
            }
            callback('No user found with this id!', null);
        }
    });
}

myDb.getAllActivities = function(callback) {
    myDb.getDocs('activities', function(err, activityDocs) {
        if (err) {
            callback(err, null);
            return;
        } else {
            callback(undefined, activityDocs);
        }
    });
}

myDb.getActivityById = function(id, callback) {
    myDb.getDocs('activities', function(err, activityDocs) {
        if (err) {
            callback(err, null);
            return;
        } else {
            for (idx in activityDocs) {
                if (activityDocs[idx].id == id) {
                    callback(undefined, activityDocs[idx]);
                    return;
                }
            }
            callback('No activity found with this id!', null);
        }
    });
}

myDb.createActivity = function(activity, callback) {
    myDb.getDocs('activities', function(err, activityDocs) {
        if (err) {
            console.log(err);
            return;
        } else {
            activity.id = activityDocs.length + 1;
            activityDocs.push(activity);
            myDb.saveDocs('activities', JSON.stringify(activityDocs),
                function(err) {
                    if (err) {
                        callback(err);
                        return;
                    }
                }
            );
        }
    });
}

myDb.updateActivity = function(activity, callback) {
    myDb.getDocs('activities', function(err, activityDocs) {
        if (err) {
            callback(err);
            return;
        } else {
            for (idx in activityDocs) {
                if (activityDocs[idx].id == activity.id) {
                    activityDocs[idx] = activity;
                    myDb.saveDocs('activities', JSON.stringify(activityDocs),
                        function(err) {
                            if (err) {
                                callback(err);
                                return;
                            }
                        }
                    );
                    return;
                }
            }
            callback('No activity found with this id!');
        }
    });
}

myDb.saveDocs = function(name, docs, callback) {
    fs.writeFile('./database/' + name + '.txt', docs,
        function(err) {
            if (err) {
                callback(err);
                return;
            }
        }
    );
}

myDb.getDocs = function(name, callback) {
    fs.readFile('./database/' + name + '.txt', function(err, docs) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(undefined, JSON.parse(docs.toString()));
    });
}

module.exports = myDb;
