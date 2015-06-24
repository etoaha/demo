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

        $scope.trails=[
            {
                id:1111,
                name:'Report1',
                description:'List of available equipments',
                created:'01/15/2015',
                createdBy:'JohnK',
                view:'pdf,html,excel,word'
            }

        ];
        //Table sorting vars
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchName   = '';     // set the default search/filter term

        $scope.getTrails = function() {
        }



    }]);
