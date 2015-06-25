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
        $scope.ddSelectSelected = {text: 'Please Select Report'};
        $scope.unitSelectSelected = {text: 'Please Select a Unit'};
        $scope.filterBySelectSelected = {text: 'Sort By'};
        $scope.tableSelectSelected = {text: 'Please Select a Table'};
        $scope.columnSelectSelected = {text: 'Please Select a Column'};


        $scope.tSelectOptions = [
            {
                text: 'Chassis',
                value: 'a value'
            },
            {
                text: 'Locations',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: 'Unit POCs',
                value: 'another value',
                someprop: 'somevalue'
            }, {
                text: 'Units',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: 'Systems',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: 'Equipment',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: 'Baselines',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: 'Software',
                value: 'another value',
                someprop: 'somevalue'
            }
        ];

        $scope.cSelectOptions = [
            {
                text: 'Shelter ID',
                value: 'a value'
            },
            {
                text: 'Equipment Type ID',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: 'Baseline ID',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: 'Equipment Identifier',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: 'Decommission Date',
                value: 'another value',
                someprop: 'somevalue'
            }
        ];
        $scope.unitSelectOptions = [
            {
                text: '401st',
                value: 'a value'
            },
            {
                text: '402nd',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: '403rd',
                value: 'another value',
                someprop: 'somevalue'
            }, {
                text: '404th',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: '405th',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: '406th',
                value: 'another value',
                someprop: 'somevalue'
            },{
                text: '407th',
                value: 'another value',
                someprop: 'somevalue'
            }


        ];


        $scope.filterBySelectOptions = [
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
        $scope.tables = [
            {
                text: 'Chasis',
                value: 'Chasis'
            },
            {
                text: 'System',
                value: 'System'
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

