/**
 * Created by
 */
angular.module('NodeWebBase')
    .controller('teamTabController', function ($scope, $rootScope,$http) {
        var watchRemoval = $scope.$watch($rootScope.isAppConfigured ,function(newVal,oldVal) {
            if( newVal ){ // Don't do anything if Undefined.
                $scope.getTeams();
                watchRemoval();
            }
        })

        $scope.teams = [];
        /**/$scope.$watchCollection('teams',function(newVal,oldVal){});

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

        $scope.addTeam = function () {
            $http.post("/teams", $scope.data)
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
    });
