angular.module('demo', [
    'ui.router',
    'ngCookies',
    'demo.login',
    'demo.dashboard',
    'demo.profile'
]);

angular.module('demo.login', []);
angular.module('demo.dashboard', []);
angular.module('demo.profile', []);