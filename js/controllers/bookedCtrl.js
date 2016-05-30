angular.module('devmtnTravel').controller('bookedCtrl', function(mainSrv, $state){
var vm = this;
vm.getId = $state.params;

vm.serviceInfo = mainSrv.travelInfo;

for(var i = 0; i < vm.serviceInfo.length; i++){
  if(vm.getId.id == vm.serviceInfo[i].id) vm.booked = vm.serviceInfo[i];
}

})
