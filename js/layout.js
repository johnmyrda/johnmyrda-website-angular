/**
 * Created by John on 8/20/2015.
 */
(function(){

    var app = angular.module('layout', []);

    app.directive("mainContent", function(){
        return {
            restrict: 'E',
            templateUrl: "html/main-content.html",
            transclude: true,
            replace: true
        }
    });

    app.directive("header", function(){
        return {
            restrict: 'E',
            templateUrl: "html/header.html",
            replace: true
        }
    });


    app.directive("footer", function(){
        return {
            restrict: 'E',
            templateUrl: "html/footer.html",
            replace: true
        }
    });

})();