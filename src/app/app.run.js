(function() {
  'use strict';

  angular
    .module('numberPhrase')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
