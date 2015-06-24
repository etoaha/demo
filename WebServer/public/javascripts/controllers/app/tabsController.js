angular.module('NodeWebBase')
    .controller('tabsController', function ($scope, $rootScope, $http) {
        $scope.tabs = [
        //added bogus until comments
            {
               title: 'Data Entry',
                url: 'one.tpl.html'
            },{
                title: 'Reports',
                url: 'two.tpl.html'
            }
            //{
            //    title: 'Ad Hoc',
            //    url: 'three.tpl.html'
            //}
        //{
        //    title: 'Users',
        //    url: 'one.tpl.html'
        //}, {
        //    title: 'Teams',
        //    url: 'two.tpl.html'
        //}, {
        //    title: 'Domains',
        //    url: 'three.tpl.html'
        //},
        //{
        //    title: 'Trails',
        //    url: 'four.tpl.html'
        //}, {
        //    title: 'Paged',
        //    url: 'five.tpl.html'
       // }
        ];


        $scope.currentTab = 'one.tpl.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        };

        $scope.isActiveTab = function(tabUrl) {
            return tabUrl == $scope.currentTab;
        };


    });
