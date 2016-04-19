angular
    .module('demo.dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $session, $backendData) {
    $scope.user = {};
    $scope.activities = [];
    $scope.isDashboardLoaded = false;
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
}

DashboardController.$inject = ['$scope', '$session', '$backendData'];
