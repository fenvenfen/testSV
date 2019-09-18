angular.module('summaryDataDirective', [
    'workDirective'
])

    .directive('summaryData', [ function () {
        return {
            scope: {},
            controller: ['$scope',  'personInfo', function ($scope, personInfo) {
                let data = personInfo.getOriginaInfoData();
                $scope.sum = data.sv.summary;
                $scope.edu = data.sv.education;
                $scope.experience = data.sv.experience;
            }],
            template: function () {
                return `<div class="container">
                <h2>Profile</h2>
                <div><p>{{sum.mainInfo}}</p></div>
                <h6>Education</h6>
                <ul>
                    <li ng-repeat="education in edu">{{education}}</li>
                </ul>
                <h6>Work experience</h6>
                <work-experience></work-experience></div>`
            }
        }      
    }])