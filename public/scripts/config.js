angular
    .module('demo')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'views/login/index.html'
        })
        .state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardController',
            templateUrl: 'views/dashboard/index.html'
        })
        .state('profile', {
            url: '/profile/:id',
            controller: 'ProfileController',
            templateUrl: 'views/profile/index.html'
        })
        .state('activityCreate', {
            url: '/activity/create',
            controller: 'CreateActivityController',
            templateUrl: 'views/activity/create.html'
        })
    $urlRouterProvider.otherwise('/login');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
