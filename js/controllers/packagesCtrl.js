angular.module('devmtnTravel').controller('packagesCtrl', function(mainSrv, $state){
var vm = this;


  vm.getId = $state.params;

  vm.getPackages = mainSrv.travelInfo;

  for(var i = 0; i < vm.getPackages.length; i++){
    if(vm.getId.id == vm.getPackages[i].id) vm.packageBooked = vm.getPackages[i];
  }


})
