angular
    .module('demo.activity')
    .controller('CreateActivityController', CreateActivityController);

function CreateActivityController($scope, $log, $session, $backendData) {
    $scope.user = {};
    $scope.activity = {};
    $scope.isDashboardLoaded = false;
    $scope.createActivity = createActivity;
    getDashboardData();

    function getDashboardData() {
        $backendData.getUserById($session.getUserId())
            .then(function(userRes) {
                $scope.user = userRes.data;
            });
    }

    function createActivity() {
        $backendData.createActivity($scope.activity).then(
            function() {
                $log.debug('Create activity OK!');
                $scope.activity = {};
            },
            function() {
                $log.debug('Create activity failed!');
            });
    }
}

CreateActivityController.$inject = ['$scope', '$log', '$session', '$backendData'];
