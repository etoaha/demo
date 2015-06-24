/**
 * Created by
 */
angular.module('NodeWebBase')
    .controller('userTabController',['$scope', '$rootScope', '$http', function ($scope, $rootScope,$http) {
        var watchRemoval = $scope.$watch($rootScope.isAppConfigured ,function(newVal,oldVal) {
            if( newVal ){ // Don't do anything if Undefined.
                $scope.getUsers();
                watchRemoval();
            }
        })

        $scope.users = [];
        $scope.teams = [];

        $scope.getUsers = function() {
            if (!$rootScope.isAppConfigured())
                return;

            $http({
                method: "GET",
                url: "/datawakeusers"
            }).success(function (response) {
                $scope.users = response;
            }).error($rootScope.showError);
        }

        $scope.getTeams = function() {
            if (!$rootScope.isAppConfigured())
                return;

            $http({
                method: "GET",
                url: "/teams"
            }).success(function (response) {
                $scope.teams = response;
            }).error($rootScope.showError);
        }

        $scope.addUser = function () {
            $http.post("/datawakeusers", $scope.data)
                .success(function (res) {
                    $window.location.href = '/';
                })
                .error(function (error) {
                    $scope.authenticationError = error;
                    ngDialog.openConfirm({
                        template: '/views/partials/error',
                        controller: ['$scope', function ($scope) {
                            $scope.message1 = 'hello!!!!';
                            $scope.logout = function () {
                                $scope.closeThisDialog(null);
                                window.location.href = '/';
                            }
                        }]
                    });
                });
        }
    }]);

