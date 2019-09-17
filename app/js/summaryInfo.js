angular.module('summaryDataDirective', [
    'workDirective'
])

    .directive('summaryData', [ function () {
        return {
            scope: {},
            controller: ['$scope',  'personInfo', function ($scope, personInfo) {
                let data = personInfo.getOriginaInfoData();
                console.log(data)
                $scope.sum = data.sv.summary;
                $scope.edu = data.sv.education;
                $scope.experience = data.sv.experience;
            }],
            template: function () {
                return `<div>{{sum.mainInfo}}</div>
                <ul>
                    <li ng-repeat="education in edu">{{education}}</li>
                </ul>
                <work-experience></work-experience>`
            }
        }      
    }])