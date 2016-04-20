angular.module('demo', [
    'ui.router',
    'ngCookies',
    'demo.login',
    'demo.dashboard',
    'demo.profile',
    'demo.activity'
]);

angular.module('demo.login', []);
angular.module('demo.dashboard', []);
angular.module('demo.profile', []);
angular.module('demo.activity', []);