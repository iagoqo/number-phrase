!function(){"use strict";angular.module("numberPhrase",[])}(),function(){"use strict";function e(e){function n(){r(t.number)}function r(n){t.phrase=e.toPhrase(n)}var t=this;t.number=0,t.phrase="",t.transform=r,n()}e.$inject=["NumberService"],angular.module("numberPhrase").controller("MainController",e)}(),function(){"use strict";function e(){function e(e){if(0>e||e>9999)return void 0;var i=n(e),a=t(e),f=r(e),c=u(e),s=o(e),l=(s||c)&&(a||i)&&" and ",h=a&&i&&"-",v=s&&c&&" ",m=s+v+c+l+(f||a+h+i);return m.trim()||"zero"}function n(e){var n=Math.floor(e)%10,r=["","one","two","three","four","five","six","seven","eight","nine"];return r[n]}function r(e){var n=Math.floor(e)%100,r=n>10&&20>n,t=e%10,u=["","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];return r&&u[t]}function t(e){var n=Math.floor(e/10)%10,r=["","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];return r[n]||""}function u(e){var r=Math.floor(e/100)%10;return r?n(r)+" hundred":""}function o(e){var r=Math.floor(e/1e3)%10;return r?n(r)+" thousand":""}this.toPhrase=e}angular.module("numberPhrase").service("NumberService",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("numberPhrase").run(e)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("numberPhrase").config(e)}();
//# sourceMappingURL=../maps/scripts/app-0f0b9f4907.js.map
