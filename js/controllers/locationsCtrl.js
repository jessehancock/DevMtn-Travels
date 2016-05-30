angular.module('devmtnTravel').controller('locationsCtrl', function(mainSrv){
var vm = this;

  vm.getLocation = mainSrv.travelInfo;


})
