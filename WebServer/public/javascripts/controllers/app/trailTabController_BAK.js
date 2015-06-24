/**
 * Created by
 */
angular.module('NodeWebBase')
    .controller('trailTabController',['$scope', '$rootScope','$http', 'Upload', function ($scope, $rootScope,$http,Upload) {
        var watchRemoval = $scope.$watch($rootScope.isAppConfigured ,function(newVal,oldVal) {
            if( newVal ){ // Don't do anything if Undefined.
                $scope.getTrails();
                watchRemoval();
            }
        })

        $scope.trails = [];

        //Table sorting vars
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchName   = '';     // set the default search/filter term

        $scope.getTrails = function() {
            if (!$rootScope.isAppConfigured())
                return;

            $http({
                method: "GET",
                url: "/trails"
            }).success(function (response) {
                $scope.trails = response;
            }).error($rootScope.showError);
        }



    }]);
