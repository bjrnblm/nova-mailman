!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){Nova.booting(function(t,e){e.addRoutes([{name:"nova-mailman",path:"/nova-mailman",component:r(2)}])})},function(t,e,r){var n=r(8)(r(9),r(13),!1,function(t){r(3)},null,null);t.exports=n.exports},function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(6)("99fc4b8c",n,!0,{})},function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=r(7),i={},a=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,f=function(){},l=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t){for(var e=0;e<t.length;e++){var r=t[e],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(m(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(m(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,r,n=document.querySelector("style["+p+'~="'+t.id+'"]');if(n){if(u)return f;n.parentNode.removeChild(n)}if(h){var o=c++;n=s||(s=v()),e=x.bind(null,n,o,!1),r=x.bind(null,n,o,!0)}else n=v(),e=function(t,e){var r=e.css,n=e.media,o=e.sourceMap;n&&t.setAttribute("media",n);l.ssrId&&t.setAttribute(p,e.id);o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}t.exports=function(t,e,r,n){u=r,l=n||{};var a=o(t,e);return d(a),function(e){for(var r=[],n=0;n<a.length;n++){var s=a[n];(c=i[s.id]).refs--,r.push(c)}e?d(a=o(t,e)):a=[];for(n=0;n<r.length;n++){var c;if(0===(c=r[n]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var y,g=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t,e){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}},function(t,e){t.exports=function(t,e,r,n,o,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u,f="function"==typeof s?s.options:s;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId=o),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=u):n&&(u=n),u){var l=f.functional,p=l?f.render:f.beforeCreate;l?(f._injectStyles=u,f.render=function(t,e){return u.call(e),p(t,e)}):f.beforeCreate=p?[].concat(p,u):[u]}return{esModule:a,exports:s,options:f}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(10),o=r.n(n);e.default={components:{},data:function(){return{loaded:!1,currentMessage:null,messages:[{to:"john@example.com",subject:"Foo subject",timestamp:1539733755,content:"http://nova-demo.test"},{to:"jane@example.com",subject:"Bar subject",timestamp:1539733200,content:"http://import.dev-cobiro.test"},{to:"mailman@example.com",subject:"OMG subject",timestamp:1529733755,content:"http://api.dev-cobiro.test"}]}},created:function(){var t,e=(t=o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,i){try{var a=e[o](i),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}(),methods:{getMessages:function(){},setCurrentMessage:function(t){this.currentMessage=t},formatTimestamp:function(t){return window.moment.unix(t).calendar()},startPolling:function(){var t=window.setInterval(function(){},1e3);this.$once("hook:beforeDestroy",function(){window.clearInterval(t)})}}}},function(t,e,r){t.exports=r(11)},function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(12),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"==typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{(f=e.regeneratorRuntime=u?t.exports:{}).wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},m={};m[a]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(M([])));g&&g!==n&&o.call(g,a)&&(m=g);var x=C.prototype=_.prototype=Object.create(m);j.prototype=x.constructor=C,C.constructor=j,C[c]=j.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},f.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[s]=function(){return this},f.AsyncIterator=E,f.async=function(t,e,r,n){var o=new E(b(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=M,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=w(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function j(){}function C(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var s=w(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("heading",{staticClass:"mb-6"},[t._v("Mailman")]),t._v(" "),r("div",{staticClass:"flex"},[r("card",{staticClass:"w-1/3 mr-2"},t._l(t.messages,function(e){return r("div",{key:e.timestamp,staticClass:"border-b border-primary-10% cursor-pointer",attrs:{role:"alert"}},[r("div",{staticClass:"p-4 border-l-2 border-transparent hover:border-primary",on:{click:function(r){t.setCurrentMessage(e)}}},[r("p",{staticClass:"flex justify-between"},[r("span",{staticClass:"font-bold"},[t._v(t._s(e.subject))]),t._v(" "),r("span",{staticClass:"text-80 text-sm"},[t._v(t._s(t.formatTimestamp(e.timestamp)))])]),t._v(" "),r("p",[t._v(t._s(e.to))])])])})),t._v(" "),r("card",{staticClass:"w-2/3",staticStyle:{height:"650px"}},[t.currentMessage?r("iframe",{staticClass:"w-full h-full",attrs:{src:t.currentMessage.content}}):r("heading",{staticClass:"mt-6 text-center"},[t._v("Select an email")])],1)],1)],1)},staticRenderFns:[]}}]);