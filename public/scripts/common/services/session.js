angular
    .module('demo')
    .factory('$session', sessionService);

function sessionService($cookies) {

    function setUserId(id) {
        $cookies.put('user_id', id);
    }

    function getUserId() {
        return $cookies.get('user_id');
    }

    function deleteUserId() {
        $cookies.remove('user_id');
    }

    return {
        setUserId: setUserId,
        getUserId: getUserId,
        deleteUserId: deleteUserId
    };
}

sessionService.$inject = ['$cookies'];
