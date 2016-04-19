var mockDb = {};

var userDocs = [{
    id: 1,
    username: 'ionut.petre@ro.ibm.com',
    fullName: 'Ionut Petre',
    password: '123',
    imgUrl: 'http://icons.iconarchive.com/icons/designbolts/free-male-avatars/128/Male-Avatar-icon.png'
}, {
    id: 2,
    username: 'john.doe@ro.ibm.com',
    fullName: 'John Doe',
    password: '123',
    imgUrl: 'http://icons.iconarchive.com/icons/designbolts/free-male-avatars/128/Male-Avatar-Cool-Cap-icon.png'
}];

var activityDocs = [{
    id: 1,
    title: 'First activity title',
    description: 'First activity description',
    date: 1459101098,
    seen: false,
    user: userDocs[0]
}, {
    id: 2,
    title: 'Second activity title',
    description: 'Second activity description',
    date: 1459102029,
    seen: false,
    user: userDocs[0]
}, {
    id: 3,
    title: 'Third activity title',
    description: 'Third activity description',
    date: 1459102112,
    seen: false,
    user: userDocs[1]
}];

mockDb.getUserByUsernameAndPassword = function(username, password, callback) {
    //Simulates a db select user by username and password
    for (idx in userDocs) {
        if (userDocs[idx].username === username &&
            userDocs[idx].password === password) {
            callback(undefined, userDocs[idx]);
            return;
        }
    }
    callback('No user found with this credentials!', null);
}

mockDb.getUserById = function(id, callback) {
    //Simulates a db select user by id
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

mockDb.getAllActivities = function(callback) {
    //Simulates a db select all activities
    //If error then callback(err);
    callback(undefined, activityDocs);
}

mockDb.getActivityById = function(id, callback) {
    //Simulates a db select activity by id
    for (idx in activityDocs) {
        if (activityDocs[idx].id == id) {
            callback(undefined, activityDocs[idx]);
            return;
        }
    }
    callback('No activity found with this id!', null);
}

module.exports = mockDb;
