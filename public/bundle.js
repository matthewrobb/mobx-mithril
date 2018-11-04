!function(){"use strict";var m=function(e){return e instanceof Date},d=36e5,h=6e4,v=/[T ]/,D=/:/,M=/^(\d{2})$/,p=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],T=/^(\d{4})/,y=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],S=/^-(\d{2})$/,Y=/^-?(\d{3})$/,x=/^-?(\d{2})-?(\d{2})$/,w=/^-?W(\d{2})$/,b=/^-?W(\d{2})-?(\d{1})$/,F=/^(\d{2}([.,]\d*)?)$/,H=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,I=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,$=/([Z+-].*)$/,W=/^(Z)$/,G=/^([+-])(\d{2})$/,O=/^([+-])(\d{2}):?(\d{2})$/;function z(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}var s=function(e,t){if(m(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=(t||{}).additionalDigits;n=null==n?2:Number(n);var r=function(e){var t,n={},r=e.split(v);if(t=D.test(r[0])?(n.date=null,r[0]):(n.date=r[0],r[1])){var a=$.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e),a=function(e,t){var n,r=p[t],a=y[t];if(n=T.exec(e)||a.exec(e)){var u=n[1];return{year:parseInt(u,10),restDateString:e.slice(u.length)}}if(n=M.exec(e)||r.exec(e)){var o=n[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}return{year:null}}(r.date,n),u=a.year,o=function(e,t){if(null===t)return null;var n,r,a,u;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=S.exec(e))return r=new Date(0),a=parseInt(n[1],10)-1,r.setUTCFullYear(t,a),r;if(n=Y.exec(e)){r=new Date(0);var o=parseInt(n[1],10);return r.setUTCFullYear(t,0,o),r}if(n=x.exec(e)){r=new Date(0),a=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(t,a,i),r}if(n=w.exec(e))return u=parseInt(n[1],10)-1,z(t,u);if(n=b.exec(e)){u=parseInt(n[1],10)-1;var s=parseInt(n[2],10)-1;return z(t,u,s)}return null}(a.restDateString,u);if(o){var i,s=o.getTime(),c=0;return r.time&&(c=function(e){var t,n,r;if(t=F.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*d;if(t=H.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*d+r*h;if(t=I.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return n%24*d+r*h+1e3*a}return null}(r.time)),i=r.timezone?(f=r.timezone,(l=W.exec(f))?0:(l=G.exec(f))?(g=60*parseInt(l[2],10),"+"===l[1]?-g:g):(l=O.exec(f))?(g=60*parseInt(l[2],10)+parseInt(l[3],10),"+"===l[1]?-g:g):0):(i=new Date(s+c).getTimezoneOffset(),new Date(s+c+i*h).getTimezoneOffset()),new Date(s+c+i*h)}var f,l,g;return new Date(e)};var n=function(e){var t=s(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n};var o=function(e){var t=s(e);return t.setHours(0,0,0,0),t};var r=function(e,t){var n=o(e),r=o(t),a=n.getTime()-6e4*n.getTimezoneOffset(),u=r.getTime()-6e4*r.getTimezoneOffset();return Math.round((a-u)/864e5)};var t=function(e){var t=s(e);return r(t,n(t))+1};var a=function(e,t){var n=t&&Number(t.weekStartsOn)||0,r=s(e),a=r.getDay(),u=(a<n?7:0)+a-n;return r.setDate(r.getDate()-u),r.setHours(0,0,0,0),r};var i=function(e){return a(e,{weekStartsOn:1})};var u=function(e){var t=s(e),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var a=i(r),u=new Date(0);u.setFullYear(n,0,4),u.setHours(0,0,0,0);var o=i(u);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1};var c=function(e){var t=u(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),i(n)};var f=function(e){var t=s(e),n=i(t).getTime()-c(t).getTime();return Math.round(n/6048e5)+1};var l=function(e){if(m(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")};var g=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];var C=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var r=g.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")};var e=function(){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=["Su","Mo","Tu","We","Th","Fr","Sa"],a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],e={MMM:function(e){return t[e.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return a[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return 1<=e.getHours()/12?o[1]:o[0]},a:function(e){return 1<=e.getHours()/12?i[1]:i[0]},aa:function(e){return 1<=e.getHours()/12?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(n){e[n+"o"]=function(e,t){return function(e){var t=e%100;if(20<t||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(t[n](e))}}),{formatters:e,formattingTokensRegExp:C(e)}},E={distanceInWords:function(){var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?0<n.comparison?"in "+r:r+" ago":r}}}(),format:e()};var X={M:function(e){return e.getMonth()+1},MM:function(e){return U(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return U(e.getDate(),2)},DDD:function(e){return t(e)},DDDD:function(e){return U(t(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return f(e)},WW:function(e){return U(f(e),2)},YY:function(e){return U(e.getFullYear(),4).substr(2)},YYYY:function(e){return U(e.getFullYear(),4)},GG:function(e){return String(u(e)).substr(2)},GGGG:function(e){return u(e)},H:function(e){return e.getHours()},HH:function(e){return U(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:12<t?t%12:t},hh:function(e){return U(X.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return U(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return U(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return U(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return U(e.getMilliseconds(),3)},Z:function(e){return Z(e.getTimezoneOffset(),":")},ZZ:function(e){return Z(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function Z(e,t){t=t||"";var n=0<e?"-":"+",r=Math.abs(e),a=r%60;return n+U(Math.floor(r/60),2)+t+U(a,2)}function U(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}var k=function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",a=(n||{}).locale,u=E.format.formatters,o=E.format.formattingTokensRegExp;a&&a.format&&a.format.formatters&&(u=a.format.formatters,a.format.formattingTokensRegExp&&(o=a.format.formattingTokensRegExp));var i=s(e);return l(i)?function(e,t,n){var r,a,u,o=e.match(n),i=o.length;for(r=0;r<i;r++)a=t[o[r]]||X[o[r]],o[r]=a||((u=o[r]).match(/\[[\s\S]/)?u.replace(/^\[|]$/g,""):u.replace(/\\/g,""));return function(e){for(var t="",n=0;n<i;n++)o[n]instanceof Function?t+=o[n](e,X):t+=o[n];return t}}(r,u,o)(i):"Invalid Date"},A=document.querySelector("#time-now");console.log("if you have sourcemaps enabled in your devtools, click on main.js:5 --\x3e"),function e(){A.textContent=k(new Date,"h:mm:ssa"),setTimeout(e,1e3)}()}();
//# sourceMappingURL=bundle.js.map
