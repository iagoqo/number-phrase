(function() {
  'use strict';

  angular
    .module('numberPhrase')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
