angular
    .module('demo.dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $state, $session, $backendData) {
    $scope.user = {};
    $scope.activities = [];
    $scope.isDashboardLoaded = false;
    $scope.goToCreateActivity = goToCreateActivity;
    getDashboardData();

    function getDashboardData() {
        $backendData.getUserById($session.getUserId())
            .then(function(userRes) {
                $scope.user = userRes.data;
                $backendData.getActivities()
                    .then(function(activitiesRes) {
                        $scope.activities = activitiesRes.data;
                        $scope.isDashboardLoaded = true;
                    });
            });
    }

    function goToCreateActivity() {
        $state.go('activityCreate');
    }
}

DashboardController.$inject = ['$scope', '$state', '$session', '$backendData'];
