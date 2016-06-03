(function() {
  'use strict';

  describe('NumberService', function() {
    var NumberService;
    var toPhrase;

    beforeEach(module('numberPhrase'));
    beforeEach(inject(function(_NumberService_) {
      NumberService = _NumberService_;
      toPhrase = NumberService.toPhrase;
    }));

    describe('toPhrase', function() {
      it('should return a string for every input between 0 and 9999', function() {
        var min = 0;
        var max = 9999;

        for (var i = min; i <= max; i++) {
          expect(toPhrase(i)).toEqual(jasmine.any(String));
        }
      });

      it('should return undefined for inputs lower than 0', function() {
        expect(toPhrase(-1)).toEqual(undefined);
      });

      it('should return undefined for inputs greater than 9999', function() {
        expect(toPhrase(10000)).toEqual(undefined);
      });

      it('should convert numbers from 0 to 19 properly', function() {
        var inputMin = 0;
        var inputMax = 19;
        var outputs = [
          'zero', 'one', 'two', 'three', 'four', 'five',
          'six', 'seven', 'eight', 'nine', 'ten',
          'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
          'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];

        for (var i = inputMin; i <= inputMax; i++) {
          expect(toPhrase(i)).toEqual(outputs[i]);
        }
      });

      it('should convert tens properly', function() {
        var outputs = [
          '', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];

        for (var i = 1; i < 10; i++) {
          expect(toPhrase(i * 10)).toEqual(outputs[i]);
        }
      });

      it('should convert hundreds properly', function() {
        for (var i = 1; i < 10; i++) {
          expect(toPhrase(i * 100)).toEqual(toPhrase(i) + ' hundred');
        }
      });

      it('should convert thousands properly', function() {
        for (var i = 1; i < 10; i++) {
          expect(toPhrase(i * 1000)).toEqual(toPhrase(i) + ' thousand');
        }
      });

      it('should mix tens and ones properly', function() {
        for (var tens = 2; tens <= 9; tens++) {
          for(var ones = 1; ones <= 9; ones++) {
            expect(toPhrase(tens*10+ones)).toEqual(toPhrase(tens*10) + '-' + toPhrase(ones));
          }
        }
      });

      it('should convert numbers between 101 and 999 properly', function() {
        for (var hundreds = 1; hundreds <= 9; hundreds++) {
          for(var rest = 1; rest <= 99; rest++) {
            expect(toPhrase(hundreds*100+rest)).toEqual(toPhrase(hundreds*100) + ' and ' + toPhrase(rest));
          }
        }
      });

      it('should convert numbers between X001 and X099 properly', function() {
        for (var thousands = 1; thousands <= 9; thousands++) {
          for(var rest = 1; rest <= 99; rest++) {
            expect(toPhrase(thousands*1000+rest)).toEqual(toPhrase(thousands*1000) + ' and ' + toPhrase(rest));
          }
        }
      });

      it('should convert numbers between X100 and X999 properly', function() {
        for (var thousands = 1; thousands <= 9; thousands++) {
          for(var rest = 100; rest <= 999; rest++) {
            expect(toPhrase(thousands*1000+rest)).toEqual(toPhrase(thousands*1000) + ' ' + toPhrase(rest));
          }
        }
      });

    });
  });
})();
