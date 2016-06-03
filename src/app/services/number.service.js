(function() {
  'use strict';

  angular
    .module('numberPhrase')
    .service('NumberService', NumberService);

  /** @ngInject */
  function NumberService() {

    this.toPhrase = toPhrase;

    /////

    /**
     * Returns the string representation of a number
     * @param  {Number} number Number to convert
     * @return {String}        Textual representation of the parameter
     */
    function toPhrase(number) {
      //Return undefined if number is out of range
      if (number < 0 || number > 9999) return undefined;

      var ones = onesToText(number);
      var tens = tensToText(number);
      var teens = teensToText(number);
      var hundreds = hundredsToText(number);
      var thousands = thousandsToText(number);

      // Will be ' and ' for numbers greater than 100 that have a digit greater than 0 in either
      // of the two rightmost positions. False otherwise.
      var and = (thousands || hundreds) && (tens || ones) && ' and ';

      // Will be '-' for numbers that have digits on the tens and ones positions. False otherwise.
      var dash = tens && ones && '-';

      // Will be ' ' for numbers that have digits on the thousands and hundreds positions
      var space = thousands && hundreds && ' ';

      // Construct the phrase representation concatenating the pieces
      var phrase = thousands + space + hundreds + and + (teens || (tens + dash + ones));

      // Delete extra spaces or return 'zero' if the string ends up being empty
      return phrase.trim() || 'zero';
    }

    /**
     * Returns the string representation of the ones digit of a number.
     * If the ones is 0 it returns an empty string.
     * @param  {Number} number Number to evaluate
     * @return {String}        String representation of the ones digit, empty if 0
     */
    function onesToText(number) {
      var ones = Math.floor(number) % 10;
      var onesList = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

      return onesList[ones];
    }

    /**
     * Returns the string representation of the lower two digits if they are between 10 and 20,
     * which don't follow the same rule. Returns false if the number is not in that range.
     * @param  {Number} number Number to evaluate
     * @return {String}        String representation if the number is a teen, empty otherwise
     */
    function teensToText(number) {
      // Get the last two digits
      var twoDigits = Math.floor(number) % 100;

      // The number is a teen if 10 < last-two-digits < 20
      var isTeen = twoDigits > 10 && twoDigits < 20;

      var ones = number % 10;
      var teensList = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

      return isTeen && teensList[ones];
    }

    /**
     * Returns the string representation of the tens digit of a number.
     * If it's 0, returns an empty string.
     * @param  {Number} number Number to evaluate
     * @return {String}        String representation of the tens digit, empty if 0
     */
    function tensToText(number) {
      var tens = Math.floor(number / 10) % 10;
      var tensList = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

      return tensList[tens] || '';
    }

    /**
     * Returns the string representation of the hundreds digit of a number. If the number is lower
     * than 100, returns an empty string.
     * @param  {Number} number Number to evaluate
     * @return {String}        String representation, empty if number < 100
     */
    function hundredsToText(number) {
      var hundreds = Math.floor(number / 100) % 10;

      if (hundreds) {
        // The representation is the same as the ones + ' hundred'
        return onesToText(hundreds) + ' hundred';
      } else {
        return '';
      }
    }

    /**
     * Returns the string representation of the thousands digit of a number. If the number is lower
     * than 1000, returns an empty string.
     * @param  {Number} number Number to evaluate
     * @return {String}        String representation, empty if number < 1000
     */
    function thousandsToText(number) {
      var thousands = Math.floor(number / 1000) % 10;

      if (thousands) {
        // The representation is the same as the ones + ' thousand'
        return onesToText(thousands) + ' thousand';
      } else {
        return '';
      }
    }
  }
})();
