angular.module('NodeWebBase')
    .controller('adhocModalController', function ($scope, $rootScope,$modal,$http, $log) {

        $scope.rowId=0;
        $scope.addRow = function (){
            //add new div
            var item1 = {text: 'newly added'};
            $scope.rows.push(item1);
            //increment row id
            $scope.rowId += 1;
        };

        $scope.removeRow = function (obj) {
            var dataValue = obj.currentTarget.attributes.data.value;
            if(dataValue > -1)
                $scope.rows.splice(dataValue,1);
            $scope.rowId -= 1;
        }

        $scope.rows=[
            {
                text:"Systems"
            },
        ];
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
            }
        ];
        $scope.ddSelectSelected = {text: 'Please Select View'};
        $scope.tables = [
            {
                text: 'Chasis',
                value: 'Chasis'
            },
            {
                text: 'System',
                value: 'System',
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

        $scope.tableSelected = { text: 'Please select a table'}; // Must be an object

        $scope.columns = [
            {
                text: 'Column1',
                value: 'Column1'
            },
            {
                text: 'Column2',
                value: 'Column2',
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

        $scope.columnSelected = { text: 'Please select a column'}; // Must be an object




    });

