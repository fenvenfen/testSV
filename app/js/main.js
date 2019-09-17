var cropperApp = angular.module('svApp', [
    'ngRoute',
    'dataService',
    'personalInfoDirective',
    'summaryDataDirective'
])

cropperApp.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/layout/home.html"
    })

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true)
    
});

cropperApp.controller('MainCtrl', ['$scope', '$http', 'personInfo', function ($scope, $http, personInfo) {
    console.log("MAIN CONTORLLER")
    $scope.titleOfMainPage = "My Personal Page";
    //Get main data from json and send to save in service
    $http.get('../data.json').then(function (response) {
        personInfo.setInfoData(angular.copy(response.data))
    });
}]);
