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
      var ones = onesToText(number);
      var tens = tensToText(number);
      var teens = teensToText(number);
      var hundreds = hundredsToText(number);
      var thousands = thousandsToText(number);

      var and = (thousands || hundreds) && (tens || ones) && ' and ';
      var dash = tens && ones && '-';

      var phrase = thousands + ' ' + hundreds + and + (teens || (tens + dash + ones));

      return phrase.trim() || 'zero';
    }

    function onesToText(number) {
      var ones = number % 10;
      var onesList = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

      return onesList[ones];
    }

    function teensToText(number) {
      var twoDigits = number % 100;
      var isTeen = twoDigits > 10 && twoDigits < 20;
      var ones = number%10;
      var teensList = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

      return isTeen && teensList[ones];
    }

    function tensToText(number) {
      var tens = Math.floor(number / 10) % 10;
      var tensList = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

      return tensList[tens] || '';
    }

    function hundredsToText(number) {
      var hundreds = Math.floor(number / 100) % 10;

      if (hundreds) {
        return onesToText(hundreds) + ' hundred';
      } else {
        return '';
      }
    }

    function thousandsToText(number) {
      var thousands = Math.floor(number / 1000) % 10;

      if (thousands) {
        return onesToText(thousands) + ' thousand';
      } else {
        return '';
      }
    }
  }
})();
