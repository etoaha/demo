angular.module('NodeWebBase')
    .controller('adhocReportController', function ($scope, $rootScope,$modal,$http, $log) {

        $scope.items = ['Report1', 'Report2', 'Report3'];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
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
            //{
                // Any option with divider set to true will be a divider
                // in the menu and cannot be selected.
             //   divider: false
            //},
           // {
                // Any divider option with a 'text' property will
                // behave similarly to a divider and cannot be selected.
            //    divider: false,
            //    text: 'divider label'
            //},
            //{
                // Example of an option with the 'href' property
            //    text: 'Option4',
            //    href: '#option4'
            //}
        ];

        $scope.ddSelectSelected = { text: 'Please Select Report'}; // Must be an object





    });

angular.module('NodeWebBase').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});
