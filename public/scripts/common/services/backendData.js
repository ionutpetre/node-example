angular
    .module('demo')
    .factory('$backendData', backendData);

function backendData($http) {

    function authUser(username, password) {
        return $http.post("api/user/auth", {
            'username': username,
            'password': password
        });
    }

    function getUserById(userId) {
        return $http.get("api/user/" + userId);
    }

    function getActivities() {
        return $http.get("api/activity");
    }

    function getActivityById(activityId) {
        return $http.get("api/activity/" + activityId);
    }

    function createActivity(activity) {
        return $http.post("api/activity", activity);
    }

    return {
        authUser: authUser,
        getUserById: getUserById,
        getActivities: getActivities,
        getActivityById: getActivityById,
        createActivity: createActivity
    };
}

backendData.$inject = ['$http'];
