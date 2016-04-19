angular
    .module('demo')
    .directive('loadingImg', loadingImg);

function loadingImg() {
    return {
        restrict: 'E',
        templateUrl: 'views/common/loadingImg.html'
    };
}
