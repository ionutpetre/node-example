var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),

    userService = require('./routes/services/user'),
    userApi = require('./routes/api/user'),
    activityApi = require('./routes/api/activity'),
    dbService = require('./routes/services/myDb');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/api/user', userApi);
app.use('/api/activity', userService.check, activityApi);

var server = app.listen(process.env.PORT, function() {
    console.log('Server started on ' + process.env.PORT);
});
