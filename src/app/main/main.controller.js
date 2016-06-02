(function() {
  'use strict';

  angular
    .module('numberPhrase')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(NumberService) {
    var vm = this;

    vm.number = 0;
    vm.phrase = '';

    vm.transform = transform;

    activate();

    /////

    function activate() {
      transform(vm.number);
    }

    function transform(number) {
      vm.phrase = NumberService.toPhrase(number);
    }
  }
})();
