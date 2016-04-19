angular
    .module('demo')
    .directive('logoutBtn', logoutBtn);

function logoutBtn() {
    return {
        restrict: 'E',
        templateUrl: 'views/common/logoutBtn.html',
        controller: ['$scope', '$state', '$session', function($scope, $state, $session) {
            $scope.logout = function() {
                $session.deleteUserId();
                $state.go('login');
            }
        }]
    };
}
