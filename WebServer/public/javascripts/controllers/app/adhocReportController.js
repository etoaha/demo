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
        };

        $scope.openMainView = function (size) {

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
        $scope.openNewFilter = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '/views/app/filterModal.jade',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };
        $scope.openNewTab = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '/views/app/tabModal.jade',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };
        $scope.openNewColumn = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '/views/app/newColumnModal.jade',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };

        $scope.openEditColumn = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '/views/app/columnModal.jade',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
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



        $scope.reports=[
            {
                region:'401st',
                location:'Bagram AFG',
                unit:'3ID',
                system:'IFS',
                softwareVersion:'DCGS v3.1.7.3',
                hardwareType:'other',
            },
            {
                region:'401st',
                location:'Bagram AFG',
                unit:'PM DCGS',
                system:'IFS',
                softwareVersion:'DCGS v3.1.7.3',
                hardwareType:'other',

            },
            {
                region:'401st',
                location:'Kandahar AFG',
                unit:'109th MI BN',
                system:'P-MFWS',
                softwareVersion:'DCGS v3.1.7.3',
                hardwareType:'Dell M6500',
            },
            {
                region:'401st',
                location:'Kandahar AFG',
                unit:'1CD',
                system:'P-MFWS',
                softwareVersion:'DCGS v3.1.7.3',
                hardwareType:'Dell M6500',
            }


        ];
        $scope.ddSelectSelected = {text: 'Please Select Report'}; // Must be an object
        $scope.tSelectSelected = {text: 'Please Select Table'};
        $scope.cSelectSelected = {text: 'Please Select Column'};


        $scope.filterItems = [
            {

                region: 'Region : 401st'
            },
            {
                region: 'Software Version : DCGS v3.1.7.3'
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
            }


        ]
    });

