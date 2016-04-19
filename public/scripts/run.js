angular
    .module('demo')
    .run(run);

function run($rootScope, $state, $session, $log) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        $log.debug('State: ' + toState.name);
        if (!$session.getUserId()) {
            $log.debug('User not logged');
            if (toState.name != 'login') {
                event.preventDefault();
                $state.go('login');
            }
        } else {
            $log.debug('User logged');
            if (toState.name == 'login') {
                event.preventDefault();
                $state.go('dashboard');
            }
        }
    });
}

run.$inject = ['$rootScope', '$state', '$session', '$log'];
