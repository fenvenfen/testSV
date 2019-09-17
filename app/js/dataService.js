angular.module('dataService', [])
    .service('personInfo', function(){
        // Service data
        let originalData = [];

        this.setInfoData = function(data){
            originalData = data;
        }
        this.getOriginaInfoData = function(){
            return originalData;
        }
    })