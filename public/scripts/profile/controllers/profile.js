angular
    .module('demo.profile')
    .controller('ProfileController', ProfileController);

function ProfileController($scope, $state, $backendData) {
    $scope.user = {};
    $scope.isProfileLoaded = false;
    getProfileData();

    function getProfileData() {
        $backendData.getUserById($state.params.id)
            .then(function(userRes) {
                $scope.user = userRes.data;
                $scope.isProfileLoaded = true;
            });
    }
}

ProfileController.$inject = ['$scope', '$state', '$backendData'];
