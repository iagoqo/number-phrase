(function() {
  'use strict';

  angular
    .module('numberPhrase')
    .service('NumberService', NumberService);

  /** @ngInject */
  function NumberService() {

    this.toPhrase = toPhrase;

    /////

    function toPhrase(number) {
      var ones = ones2Text(number);
      var tens = tens2Text(number);
      var teens = teens2Text(number);
      var hundreds = hundreds2Text(number);
      var thousands = thousands2Text(number);

      var and = (thousands || hundreds) && (tens || ones) && ' and ';
      var dash = tens && ones && '-';

      var phrase = thousands + ' ' + hundreds + and + (teens || (tens + dash + ones));

      return phrase.trim() || 'zero';
    }

    function ones2Text(number) {
      var ones = number % 10;
      var onesList = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

      return onesList[ones];
    }

    function teens2Text(number) {
      var twoDigits = number % 100;
      var isTeen = twoDigits > 10 && twoDigits < 20;
      var ones = number%10;
      var teensList = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

      return isTeen && teensList[ones];
    }

    function tens2Text(number) {
      var tens = Math.floor(number / 10) % 10;
      var tensList = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

      return tensList[tens] || '';
    }

    function hundreds2Text(number) {
      var hundreds = Math.floor(number / 100) % 10;

      if (hundreds) {
        return ones2Text(hundreds) + ' hundred';
      } else {
        return '';
      }
    }

    function thousands2Text(number) {
      var thousands = Math.floor(number / 1000) % 10;

      if (thousands) {
        return ones2Text(thousands) + ' thousand';
      } else {
        return '';
      }
    }
  }
})();
