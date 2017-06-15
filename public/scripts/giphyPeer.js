var myApp = angular.module ('myApp', []);

myApp.controller('GiphyController', function( GiphyService ){
  var vm = this;
  vm.showGif = true;

  vm.getRandom = function(){
    console.log('in getRandom');

    GiphyService.getRandom().then(function(response){
      console.log('back in controller');
      vm.showGif=true;
    vm.gifArray = response;
    }); // end getRandom function
  }; // end getRandom

  vm.getGiphy = function(search){
    if (search === '') {
        alert('You must search for something!!');
    } else {
    GiphyService.getGiphy(search).then(function(response){
      console.log('back in controller:', response);
      vm.showGif= false;
      vm.gifSearchArray = response;
    });
  }
  };
}); // end controller
