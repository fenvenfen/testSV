angular.module('personalInfoDirective', [])

    .directive('personalInfo', [ function () {
        var directive = {};

        directive.scope = {
            ghInfo: '='
        };

        directive.controller = ['$scope', 'personInfo', function ($scope, personInfo) {
            // Get data from service
            $scope.data = personInfo.getOriginaInfoData();
        }];

        directive.template = function() {
            return  `<h1 class="center">{{ghInfo}}<span class="badge badge-secondary">Test</span></h1>
                <div ng-repeat="(key, value) in data.sv.info">
                    <h5>{{key}}<span>  {{value}} </span></h5>
                </div>
            `
        }
        return directive
    }])