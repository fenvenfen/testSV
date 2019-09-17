angular.module('workDirective', [])

    .directive('workExperience', [ function () {
        return {
            controller: ['$scope', 'personInfo', function ($scope, personInfo) {
                console.log($scope)
            }],
            template: function () {
                return `
                <ul>
                    <li ng-repeat="exp in experience | orderBy:$index:true">{{exp.title}} <span class="badge badge-secondary">{{exp.position}}</span>
                        <div>
                            <p class="badge badge-secondary">{{exp.date}}</p>
                            <p>{{exp.about}}</p>
                        </div>
                    </li>
                </ul>`
            }
        }      
    }])