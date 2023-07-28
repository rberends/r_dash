/*! NS Digital Data Queue v1.0.0 - License information can be found in scripts/ddq.bundle.js.LICENSE */
!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e,r){"use strict";var r=r(2),n="object"==typeof self&&self&&self.Object===Object&&self,r=r.a||n||Function("return this")();e.a=r},function(t,i,a){"use strict";!function(t){var e=a(2),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,n=r&&"object"==typeof t&&t&&!t.nodeType&&t,o=n&&n.exports===r&&e.a.process,t=function(){try{var t=n&&n.require&&n.require("util").types;return t?t:o&&o.binding&&o.binding("util")}catch(t){}}();i.a=t}.call(this,a(4)(t))},function(t,e,r){"use strict";!function(t){t="object"==typeof t&&t&&t.Object===Object&&t;e.a=t}.call(this,r(10))},function(t,o,i){"use strict";!function(t){var e=i(0),r=i(7),n="object"==typeof exports&&exports&&!exports.nodeType&&exports,t=n&&"object"==typeof t&&t&&!t.nodeType&&t,t=t&&t.exports===n?e.a.Buffer:void 0,n=(t?t.isBuffer:void 0)||r.a;o.a=n}.call(this,i(4)(t))},function(t,e){t.exports=function(t){var e;return t.webpackPolyfill||((e=Object.create(t)).children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1),e}},function(t,e){function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function")}var e,r,n;return e=t,(r=[{key:"transformHandler",value:function(){if(void 0!==_st.util&&void 0!==_st.util.ddqTransform)return _st.util.ddqTransform}},{key:"eventHandler",value:function(t,e,r){var n,o="environment";void 0!==e.event&&("page"===e.event?"function"==typeof _st&&(_st("resetTags"),void 0!==(n=e.page_structure)&&_st.apply(this,[].concat("setPageStructure",n)),void 0!==e[o]&&_st("setEnvironment",e[o]),_st("addTagProperties",e),_st("loadTags"),void 0!==_st.debug&&_st.debug.log('digital-data-queue: Event : "'+e.event+'" to loadTags()')):"function"==typeof _st&&(_st("publishEvent","ddq",e.event,e),void 0!==_st.debug&&_st.debug.log('digital-data-queue: Event : "'+e.event+'" to event.publish()')))}}])&&o(e.prototype,r),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=new r},function(t,e,r){var n,o;void 0!==(r="function"==typeof(n=o=function(){function c(){for(var t=0,e={};t<arguments.length;t++){var r,n=arguments[t];for(r in n)e[r]=n[r]}return e}function s(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(u){function a(){}function r(t,e,r){if("undefined"!=typeof document){"number"==typeof(r=c({path:"/"},a.defaults,r)).expires&&(r.expires=new Date(+new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var n=JSON.stringify(e);/^[\{\[]/.test(n)&&(e=n)}catch(t){}e=u.write?u.write(e,t):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var o,i="";for(o in r)r[o]&&(i+="; "+o,!0!==r[o]&&(i+="="+r[o].split(";")[0]));return document.cookie=t+"="+e+i}}function e(t,e){if("undefined"!=typeof document){for(var r={},n=document.cookie?document.cookie.split("; "):[],o=0;o<n.length;o++){var i=n[o].split("="),a=i.slice(1).join("=");e||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var c=s(i[0]),a=(u.read||u)(a,c)||s(a);if(e)try{a=JSON.parse(a)}catch(t){}if(r[c]=a,t===c)break}catch(t){}}return t?r[t]:r}}return a.set=r,a.get=function(t){return e(t,!1)},a.getJSON=function(t){return e(t,!0)},a.remove=function(t,e){r(t,"",c(e,{expires:-1}))},a.defaults={},a.withConverter=t,a}(function(){})})?n.call(e,r,e,t):n)&&(t.exports=r),t.exports=o()},function(t,e,r){"use strict";e.a=function(){return!1}},function(t,o,i){"use strict";!function(t){var e=i(0),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,t=r&&"object"==typeof t&&t&&!t.nodeType&&t,t=t&&t.exports===r?e.a.Buffer:void 0,n=t?t.allocUnsafe:void 0;o.a=function(t,e){return e?t.slice():(e=t.length,e=n?n(e):new t.constructor(e),t.copy(e),e)}}.call(this,i(4)(t))},function(t,e,r){t.exports=r(11)},function(t,e){var r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(F,t,e){"use strict";e.r(t);var M=function(t,e){return t===e||t!=t&&e!=e};var o=function(t,e){for(var r=t.length;r--;)if(M(t[r][0],e))return r;return-1},q=Array.prototype.splice;function B(t){var e=this.__data__;return!((t=o(e,t))<0)&&(t==e.length-1?e.pop():q.call(e,t,1),--this.size,!0)}function R(t){var e=this.__data__;return(t=o(e,t))<0?void 0:e[t][1]}function N(t){return-1<o(this.__data__,t)}function $(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function r(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}r.prototype.clear=function(){this.__data__=[],this.size=0},r.prototype.delete=B,r.prototype.get=R,r.prototype.has=N,r.prototype.set=$;var i=r;function H(){this.__data__=new i,this.size=0}function V(t){var e=this.__data__,t=e.delete(t);return this.size=e.size,t}function Q(t){return this.__data__.get(t)}function L(t){return this.__data__.has(t)}var t=e(0),n=t.a.Symbol,a=Object.prototype,W=a.hasOwnProperty,G=a.toString,c=n?n.toStringTag:void 0;var J=function(t){var e=W.call(t,c),r=t[c];try{var n=!(t[c]=void 0)}catch(t){}var o=G.call(t);return n&&(e?t[c]=r:delete t[c]),o},Z=Object.prototype.toString;var K=function(t){return Z.call(t)},X=n?n.toStringTag:void 0;var u=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":(X&&X in Object(t)?J:K)(t)};var b=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var Y=function(t){return!!b(t)&&("[object Function]"==(t=u(t))||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)},a=t.a["__core-js_shared__"],tt=(a=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"";var et=function(t){return!!tt&&tt in t},rt=Function.prototype.toString;var s=function(t){if(null!=t){try{return rt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},nt=/^\[object .+?Constructor\]$/,a=Function.prototype,f=Object.prototype,a=a.toString,f=f.hasOwnProperty,ot=RegExp("^"+a.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var it=function(t){return!(!b(t)||et(t))&&(Y(t)?ot:nt).test(s(t))};var at=function(t,e){return null==t?void 0:t[e]};var l=function(t,e){return t=at(t,e),it(t)?t:void 0},p=l(t.a,"Map"),y=l(Object,"create");function ct(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t}var ut=Object.prototype.hasOwnProperty;function st(t){var e,r=this.__data__;return y?"__lodash_hash_undefined__"===(e=r[t])?void 0:e:ut.call(r,t)?r[t]:void 0}var ft=Object.prototype.hasOwnProperty;function lt(t){var e=this.__data__;return y?void 0!==e[t]:ft.call(e,t)}function pt(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=y&&void 0===e?"__lodash_hash_undefined__":e,this}function v(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}v.prototype.clear=function(){this.__data__=y?y(null):{},this.size=0},v.prototype.delete=ct,v.prototype.get=st,v.prototype.has=lt,v.prototype.set=pt;var yt=v;var bt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var d=function(t,e){return t=t.__data__,bt(e)?t["string"==typeof e?"string":"hash"]:t.map};function vt(t){return t=d(this,t).delete(t),this.size-=t?1:0,t}function dt(t){return d(this,t).get(t)}function ht(t){return d(this,t).has(t)}function jt(t,e){var r=d(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function h(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}h.prototype.clear=function(){this.size=0,this.__data__={hash:new yt,map:new(p||i),string:new yt}},h.prototype.delete=vt,h.prototype.get=dt,h.prototype.has=ht,h.prototype.set=jt;var gt=h;function _t(t,e){var r=this.__data__;if(r instanceof i){var n=r.__data__;if(!p||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new gt(n)}return r.set(t,e),this.size=r.size,this}function j(t){t=this.__data__=new i(t);this.size=t.size}j.prototype.clear=H,j.prototype.delete=V,j.prototype.get=Q,j.prototype.has=L,j.prototype.set=_t;var mt=j;var wt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},Ot=function(){try{var t=l(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var At=function(t,e,r){"__proto__"==e&&Ot?Ot(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},St=Object.prototype.hasOwnProperty;var xt=function(t,e,r){var n=t[e];St.call(t,e)&&M(n,r)&&(void 0!==r||e in t)||At(t,e,r)};var g=function(t,e,r,n){for(var o=!r,i=(r=r||{},-1),a=e.length;++i<a;){var c=e[i],u=n?n(r[c],t[c],c,r,t):void 0;void 0===u&&(u=t[c]),(o?At:xt)(r,c,u)}return r};var Pt=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var _=function(t){return null!=t&&"object"==typeof t};var a=function(t){return _(t)&&"[object Arguments]"==u(t)},f=Object.prototype,Et=f.hasOwnProperty,Tt=f.propertyIsEnumerable,kt=a(function(){return arguments}())?a:function(t){return _(t)&&Et.call(t,"callee")&&!Tt.call(t,"callee")},m=Array.isArray,Dt=e(3),It=/^(?:0|[1-9]\d*)$/;var Ct=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&It.test(t))&&-1<t&&t%1==0&&t<e};var Ut=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991},w={};w["[object Float32Array]"]=w["[object Float64Array]"]=w["[object Int8Array]"]=w["[object Int16Array]"]=w["[object Int32Array]"]=w["[object Uint8Array]"]=w["[object Uint8ClampedArray]"]=w["[object Uint16Array]"]=w["[object Uint32Array]"]=!0,w["[object Arguments]"]=w["[object Array]"]=w["[object ArrayBuffer]"]=w["[object Boolean]"]=w["[object DataView]"]=w["[object Date]"]=w["[object Error]"]=w["[object Function]"]=w["[object Map]"]=w["[object Number]"]=w["[object Object]"]=w["[object RegExp]"]=w["[object Set]"]=w["[object String]"]=w["[object WeakMap]"]=!1;function zt(t){return _(t)&&Ut(t.length)&&!!w[u(t)]}var f=function(e){return function(t){return e(t)}},a=e(1),O=a.a&&a.a.isTypedArray,Ft=O?f(O):zt,Mt=Object.prototype.hasOwnProperty;var qt=function(t,e){var r,n=m(t),o=!n&&kt(t),i=!n&&!o&&Object(Dt.a)(t),a=!n&&!o&&!i&&Ft(t),c=n||o||i||a,u=c?Pt(t.length,String):[],s=u.length;for(r in t)!e&&!Mt.call(t,r)||c&&("length"==r||i&&("offset"==r||"parent"==r)||a&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Ct(r,s))||u.push(r);return u},Bt=Object.prototype;var A=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Bt)};var O=function(e,r){return function(t){return e(r(t))}},Rt=O(Object.keys,Object),Nt=Object.prototype.hasOwnProperty;var $t=function(t){if(!A(t))return Rt(t);var e,r=[];for(e in Object(t))Nt.call(t,e)&&"constructor"!=e&&r.push(e);return r};var Ht=function(t){return null!=t&&Ut(t.length)&&!Y(t)};var S=function(t){return(Ht(t)?qt:$t)(t)};var Vt=function(t,e){return t&&g(e,S(e),t)};var Qt=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},Lt=Object.prototype.hasOwnProperty;var Wt=function(t){if(!b(t))return Qt(t);var e,r=A(t),n=[];for(e in t)("constructor"!=e||!r&&Lt.call(t,e))&&n.push(e);return n};var x=function(t){return Ht(t)?qt(t,!0):Wt(t)};var Gt=function(t,e){return t&&g(e,x(e),t)},Jt=e(8);var Zt=function(t,e){var r=-1,n=t.length;for(e=e||Array(n);++r<n;)e[r]=t[r];return e};var Kt=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i};function Xt(){return[]}var Yt=Object.prototype.propertyIsEnumerable,te=Object.getOwnPropertySymbols,P=te?function(e){return null==e?[]:(e=Object(e),Kt(te(e),function(t){return Yt.call(e,t)}))}:Xt;var ee=function(t,e){return g(t,P(t),e)};var re=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},ne=O(Object.getPrototypeOf,Object),oe=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)re(e,P(t)),t=ne(t);return e}:Xt;var ie=function(t,e){return g(t,oe(t),e)};var ae=function(t,e,r){return e=e(t),m(t)?e:re(e,r(t))};function ce(t){return ae(t,S,P)}function ue(t){return ae(t,x,oe)}var O=l(t.a,"DataView"),E=l(t.a,"Promise"),T=l(t.a,"Set"),k=l(t.a,"WeakMap"),se="[object Map]",fe="[object Promise]",le="[object Set]",pe="[object WeakMap]",ye="[object DataView]",be=s(O),ve=s(p),de=s(E),he=s(T),je=s(k),D=u,ge=D=O&&D(new O(new ArrayBuffer(1)))!=ye||p&&D(new p)!=se||E&&D(E.resolve())!=fe||T&&D(new T)!=le||k&&D(new k)!=pe?function(t){var e=u(t),t="[object Object]"==e?t.constructor:void 0,t=t?s(t):"";if(t)switch(t){case be:return ye;case ve:return se;case de:return fe;case he:return le;case je:return pe}return e}:D,_e=Object.prototype.hasOwnProperty;var me=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&_e.call(t,"index")&&(r.index=t.index,r.input=t.input),r},we=t.a.Uint8Array;var Oe=function(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e};var Ae=function(t,e){return e=e?Oe(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength)},Se=/\w*$/;var xe=function(t){var e=new t.constructor(t.source,Se.exec(t));return e.lastIndex=t.lastIndex,e},O=n?n.prototype:void 0,Pe=O?O.valueOf:void 0;var Ee=function(t){return Pe?Object(Pe.call(t)):{}};var Te=function(t,e){return e=e?Oe(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.length)};var ke=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return Oe(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return Ae(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Te(t,r);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return xe(t);case"[object Set]":return new n;case"[object Symbol]":return Ee(t)}},De=Object.create;function Ie(){}var Ce=function(t){if(!b(t))return{};if(De)return De(t);Ie.prototype=t;t=new Ie;return Ie.prototype=void 0,t};var Ue=function(t){return"function"!=typeof t.constructor||A(t)?{}:Ce(ne(t))};function ze(t){return _(t)&&"[object Map]"==ge(t)}var E=a.a&&a.a.isMap,Fe=E?f(E):ze;function Me(t){return _(t)&&"[object Set]"==ge(t)}var T=a.a&&a.a.isSet,qe=T?f(T):Me,Be="[object Arguments]",Re="[object Function]",Ne="[object Object]",I={};I[Be]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object DataView]"]=I["[object Boolean]"]=I["[object Date]"]=I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Map]"]=I["[object Number]"]=I[Ne]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object Symbol]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Error]"]=I[Re]=I["[object WeakMap]"]=!1;var $e=function r(n,o,i,t,e,a){var c,u=1&o,s=2&o,f=4&o;if(void 0!==(c=i?e?i(n,t,e,a):i(n):c))return c;if(!b(n))return n;t=m(n);if(t){if(c=me(n),!u)return Zt(n,c)}else{var l=ge(n),p=l==Re||"[object GeneratorFunction]"==l;if(Object(Dt.a)(n))return Object(Jt.a)(n,u);if(l==Ne||l==Be||p&&!e){if(c=s||p?{}:Ue(n),!u)return s?ie(n,Gt(c,n)):ee(n,Vt(c,n))}else{if(!I[l])return e?n:{};c=ke(n,l,u)}}p=(a=a||new mt).get(n);if(p)return p;a.set(n,c),qe(n)?n.forEach(function(t){c.add(r(t,o,i,t,n,a))}):Fe(n)&&n.forEach(function(t,e){c.set(e,r(t,o,i,e,n,a))});var y=t?void 0:(f?s?ue:ce:s?x:S)(n);return wt(y||n,function(t,e){y&&(t=n[e=t]),xt(c,e,r(t,o,i,e,n,a))}),c};var He=function(t){return $e(t,5)};function Ve(t){return(Ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Qe(t){return function(t){if(Array.isArray(t))return We(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Le(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Le(t,e){if(t){if("string"==typeof t)return We(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?We(t,e):void 0}}function We(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Ge(t,e){if("string"==typeof(n=t[0])||"[object String]"===Ze(n)){var r,n=t[0].split("."),o=n.pop(),t=t.slice(1),i=e,a=function(t,e){var r,n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Le(t))||e&&t&&"number"==typeof t.length)return n&&(t=n),r=0,{s:e=function(){},n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}(n);try{for(a.s();!(r=a.n()).done;){var c=r.value;if(void 0===i[c])return;i=i[c]}}catch(t){a.e(t)}finally{a.f()}i[o].apply(i,Qe(t))}}function Je(t,e){for(var r={},n=r,o=t.split("."),i=0;i<o.length-1;i++)n=n[o[i]]={};return n[o[o.length-1]]=e,r}function Ze(t){return Object.prototype.toString.call(t)}function C(t){return"function"==typeof Array.isArray&&Array.isArray(t)||"[object Array]"===Ze(t)}function Ke(t){return"function"==typeof t||"[object Function]"===Ze(t)}function Xe(t){return null!==(e=t)&&"object"===Ve(e)&&t.__proto__===Object.prototype;var e}function U(t,e){for(var r in t)n=r,Object.prototype.hasOwnProperty.call(Object(t),n)&&(C(n=t[r])?(C(e[r])||(e[r]=[]),U(n,e[r])):Xe(n)?(Xe(e[r])||(e[r]={}),U(n,e[r])):e[r]=n);var n}function z(t){return He(t)}function Ye(t){t=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return t?t[2]:null}function tr(t,e,r){console.log("%c(digital-data-queue)","color: blue; font-weight: bold;"),console.log(" EVENTDATA (TRANSFORMED) %o",e),console.log(" EVENTDATA (SOURCE) %o",r),console.log(" MODELSTATE %o",t),Ke(window.ddqDebugger)&&window.ddqDebugger(t,e,r)}function er(t){return function(t){if(Array.isArray(t))return nr(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||rr(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rr(t,e){if(t){if("string"==typeof t)return nr(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?nr(t,e):void 0}}function nr(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function or(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var k=function(){function s(n,t){var o=this,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=this,a=s;if(!(i instanceof a))throw new TypeError("Cannot call a class as a function");this.queue=t,this.version="1.0",this.digitalData=n,this.model={},this.listeners=e;var i={history:!0,debug:!1,transform:!1,transformHandler:function(t){return t}},c=Object.assign({},i,r),u=(this.options={},Object.keys(i).forEach(function(t){o.options[t]=c[t]}),"true"===Ye("ddq_debug")&&(this.options.debug=!0),!0===this.options.debug&&this.listeners.push(tr),this._exec=!1,this._unprocessed=[],this._transformed=[],this._listeners=this.listeners.length,this.processEvents(n,!this.options.history),n.push);n.push=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return o.processEvents(e),u.apply(n,e)}}var t,e,r;return t=s,(e=[{key:"get",value:function(t){var e,r=this.model,n=function(t,e){var r,n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=rr(t))||e&&t&&"number"==typeof t.length)return n&&(t=n),r=0,{s:e=function(){},n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}(t.split("."));try{for(n.s();!(e=n.n()).done;){var o=e.value;if(void 0===r[o])return;r=r[o]}}catch(t){n.e(t)}finally{n.f()}return r}},{key:"set",value:function(t,e){U(Je(t,e),this.model)}},{key:"clone",value:z},{key:"getCookie",value:Ye},{key:"setCookie",value:function(t,e,r){return t=t,e=e,r=r,(n=new Date).setTime(n.getTime()+864e5*r),void(document.cookie=t+"="+e+";path=/;expires="+n.toGMTString());var n}},{key:"processEvents",value:function(t,e){var r;for((r=this._unprocessed).push.apply(r,er(t));!1===this._exec&&0<this._unprocessed.length;){var n=this._unprocessed.shift(),o=this.options.transform?this.options.transformHandler(z(n)):n;if(this._transformed.push(o),C(o))Ge(o,this.model);else if(!Ke(o)){if(!Xe(o))continue;for(var i in o)U(Je(i,o[i]),this.model)}if(!e){if(this._exec=!0,C(this.listeners))for(var a=0;a<this._listeners;a++)Ke(this.listeners[a])&&this.listeners[a](z(this.model),z(o),z(n));this._exec=!1}}}}])&&or(t.prototype,e),r&&or(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(),D=(window.DigitalDataQueue=k,e(5)),ir=e.n(D),t=e(6),ar=e.n(t);function cr(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}n=function(){function t(){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function");this.ddqCookieName="ddq_debug"}var e,r,n;return e=t,(r=[{key:"initialize",value:function(){var t=ir.a.transformHandler(),t=t?{transform:!0,transformHandler:t}:{};this.instance=new DigitalDataQueue(window.nsDataQueue,"ddq-ns",[ir.a.eventHandler],t)}},{key:"enableDebug",value:function(){ar.a.set(this.ddqCookieName,"true")}},{key:"disableDebug",value:function(){ar.a.remove(this.ddqCookieName)}}])&&cr(e.prototype,r),n&&cr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();window.nsDDQ=new n,window.connectRelay42=function(t){window.nsDDQ.initialize()}}]);
//# sourceMappingURL=ddq.bundle.js.map