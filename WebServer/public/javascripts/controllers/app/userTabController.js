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
        $scope.ddSelectOptions = [
            {
                text: 'Report1',
                value: 'a value'
            },
            {
                text: 'Report2',
                value: 'another value',
                someprop: 'somevalue'
            },
            {
                // Any option with divider set to true will be a divider
                // in the menu and cannot be selected.
                divider: false
            },
            {
                // Any divider option with a 'text' property will
                // behave similarly to a divider and cannot be selected.
                divider: false,
                text: 'divider label'
            },
            {
                // Example of an option with the 'href' property
                text: 'Option4',
                href: '#option4'
            }
        ];

        $scope.ddSelectSelected = {}; // Must be an object
    }]);

