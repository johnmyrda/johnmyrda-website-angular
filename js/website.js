/**
 * Created by John on 8/16/2015.
 */
(function() {
var website = angular.module('website', ['ui.bootstrap', 'layout', 'ngAnimate']);

website.controller("ProjectLinksController", ['$http', function($http){
    var linkController = this;
    this.projects = [];
    $http.get("js/data/project-links.json").success(function(data){
        linkController.projects = data;
    });
}]);

    website.controller('NavCollapseCtrl', function ($scope) {
        $scope.isCollapsed = false;
    });
})();