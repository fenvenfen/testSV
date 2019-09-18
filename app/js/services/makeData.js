angular.module('makeDataService', [])
    .service('makeDataToCharts', ['$q', 'personInfo', function($q, personInfo){
        
        let dataFactory = function(title){
            this.makeData = function(){            
                var deferred = $q.defer();
                let data = personInfo.getOriginaInfoData();

                changeData(data.sv.skills, title).then(res => {
                    deferred.resolve(res)
                })

                return deferred.promise;
            };
            function changeData(data, title){
                var deferred = $q.defer();
                let arrayDatatitle = []; 
                arrayDatatitle.push(title);
                for(skill in data){
                    let tempArray = [];
                    tempArray.push(data[skill].titel, Number(data[skill].level))
                    arrayDatatitle.push(tempArray)
                }

                deferred.resolve(makeArrayToGoogleCharts(arrayDatatitle))

                return deferred.promise;
            }
            function makeArrayToGoogleCharts(res){
                // Make call to google charts if we nead some functional of charts in service
                google.charts.load('current', {packages: ['corechart']});
                
                return google.charts.setOnLoadCallback(() =>{
                    let data = new google.visualization.arrayToDataTable(res);
                    // Same code (groupe, join, etc.)
                    return data;
                  })

            }
        }

        return dataFactory
    }])