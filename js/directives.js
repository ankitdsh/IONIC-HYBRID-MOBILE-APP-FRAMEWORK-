angular.module('app.directives.homeAssetCard', [])
marketApp.directive('homeAssetCard', function() {
    return {
        restrict: 'EA',
        scope: {
            assetData: '=assetItem'
        },
        transclude: true,
        replace: true, //replace:true,   this will make sure that the browser renders a root element i.e <div> instead of the custom-element in this case <home-asset-card > 
        link: function(scope, element, attrs) {
            console.log(scope, element, attrs);
        },
        controller: function($scope) {
            console.log($scope.assetData)
        },
        templateUrl: 'templates/directives/homeAssetCard.html'
    }
});