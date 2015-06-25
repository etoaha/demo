angular.module('NodeWebBase')
    .controller('adhocReportController', function ($scope, $rootScope,$modal,$http, $log) {

        $scope.items = ['Report1', 'Report2', 'Report3'];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function (open) {
            $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };

        $scope.animationsEnabled = true;

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '/views/app/myModalContent.jade',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

        $scope.ddSelectOptions = [
            {
                text: 'DCGS-A',
                value: 'a value'
            },
            {
                text: 'BLK II',
                value: 'another value',
                someprop: 'somevalue'
            },
        ];


        $scope.tSelectOptions = [
            {
                text: 'Units',
                value: 'a value'
            },
            {
                text: 'Equipment',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: 'Baselines',
                value: 'another value',
                someprop: 'somevalue'
            }

        ];
        $scope.cSelectOptions = [
            {
                text: 'ID',
                value: 'a value'
            },
            {
                text: 'Unit Name',
                value: 'another value',
                someprop: 'somevalue'
            }

        ];

        $scope.ddSelectSelected = {text: 'Please Select View'}; // Must be an object
        $scope.tSelectSelected = {text: 'Please Select Table'};
        $scope.cSelectSelected = {text: 'Please Select Column'};


        $scope.filterItems = [
            {

                region: 'Region : Kandahar AFG'
            },
            {
                region: 'Software Version : DCGS v3.1.7.3'
            },
            {
                region: 'add new filter (+)'
            }
        ];

        $scope.columnTabs = [
            {
                region: 'Location'
            },
            {
                region: 'Unit'
            },
            {
                region: 'System'
            },
            {
                region: 'Software Version'
            },
            {
                region: 'Hardware Type'
            },


        ]
    });

