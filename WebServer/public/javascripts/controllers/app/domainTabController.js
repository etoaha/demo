/**
 * Created by
 */
angular.module('NodeWebBase')
    .controller('domainTabController',['$scope', '$rootScope', '$http','Upload', function ($scope, $rootScope,$http,Upload) {
        var watchRemoval = $scope.$watch($rootScope.isAppConfigured ,function(newVal,oldVal) {
            if( newVal ){ // Don't do anything if Undefined.
                $scope.getDomains();
                watchRemoval();
            }
        })
        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        })

        $scope.domains = [];
        $scope.files = [];

        $scope.getDomains = function() {
            if (!$rootScope.isAppConfigured())
                return;

            $http({
                method: "GET",
                url: "/domains",
            }).success(function (response) {
                $scope.domains = response;
            }).error($rootScope.showError);
        };

        $scope.upload = function (files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    Upload.upload({
                        url: '/upload',
                        fields: {
                            'username': $scope.username
                        },
                        file: file
                    }).progress(function (evt) {
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        $scope.log = 'progress: ' + progressPercentage + '% ' +
                            evt.config.file.name + '\n' + $scope.log;
                    }).success(function (data, status, headers, config) {
                        $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                        $scope.$apply();
                    });
                }
            }
        };



    }]);
