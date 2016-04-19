angular
    .module('demo.login')
    .controller('LoginController', LoginController);

function LoginController($scope, $state, $session, $backendData) {
    $scope.login = login;

    function login() {
        $backendData.authUser($scope.username, $scope.password)
            .then(function(res) {
                $state.go('dashboard');
            });
    }
}

LoginController.$inject = ['$scope', '$state', '$session', '$backendData'];
