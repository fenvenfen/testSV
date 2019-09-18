angular.module('chartsDirective', [
    'workDirective',
    'makeDataService'
])

    .directive('charts', [ function () {
        return {
            scope: {},
            controller: ['$scope', '$element', 'makeDataToCharts', '$compile', function ($scope, $element, makeDataToCharts, $compile) {
                // Load the Visualization API and the corechart package.
                // google.charts.load('current', {'packages':['corechart']});
                google.charts.load('current', {packages: ['corechart', 'bar']});
                // make title for charts
                let title = ['Skill', 'Stars']
                let dataFactoru = new makeDataToCharts(title);

                dataFactoru.makeData().then(responce => {
                     google.charts.setOnLoadCallback(function(){drawMultSeries(responce)});
                });

                function drawMultSeries(res) {
                    let chartsType = ['LineChart', 'BarChart', 'ColumnChart', 'PieChart'];
                    let option = {
                        // 'chartType':'LineChart',
                         'options': {'title':'Default charts title', 'legend':'none','width': '100%','height': '100%'}
                        }
                    if(res){
                        option.dataTable = res;
                    }else{
                      // Default Option if some was wrong 
                        option.dataSourceUrl = 'http://spreadsheets.google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1';
                    }
                    // Different charts
                    chartsType.forEach(type => {
                        let wrap = null;
                        let div = '<div id=' + type + ' style="width: 300px; height: 300px; display: inline-block;"></div>';
                        let el = $compile(angular.element(div))($scope);
                        $element.append(el);

                        option.chartType = type;
                        option.options.title = "Chart " + type
                        wrap = new google.visualization.ChartWrapper(option);
                        wrap.draw($element[0].querySelector('#'+ type + ''));
                    })
                  }
            }],
            template: function () {
                return `<h2>Charts</h2>`
            }
        }      
    }])