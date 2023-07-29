/*! modernizr 3.11.4 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-blobconstructor-csscolumns-cssgrid_cssgridlegacy-csspositionsticky-csstransforms3d-csstransitions-details-flexbox-input-inputtypes-localstorage-objectfit-picture-smil-srcset-touchevents-addtest-mq-prefixed-setclasses !*/
!function(e,t,n,r){function o(e,t){return typeof e===t}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),_?w.className.baseVal=t:w.className=t)}function s(e,t){if("object"==typeof e)for(var n in e)C(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2===r.length&&(o=o[r[1]]),void 0!==o)return Modernizr;t="function"==typeof t?t():t,1===r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&!1!==t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function u(e,t,r,o){var i,s,u,c,d="modernizr",f=a("div"),p=l();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=o?o[r]:d+(r+1),f.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+d,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",c=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),s=t(f,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=c,w.offsetHeight):f.parentNode.removeChild(f),!!s}function c(e,n,r){var o;if("getComputedStyle"in t){o=getComputedStyle.call(t,e,n);var i=t.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&e.currentStyle&&e.currentStyle[r];return o}function d(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(e,n){var o=e.length;if("CSS"in t&&"supports"in t.CSS){for(;o--;)if(t.CSS.supports(f(e[o]),n))return!0;return!1}if("CSSSupportsRule"in t){for(var i=[];o--;)i.push("("+f(e[o])+":"+n+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===c(e,null,"position")})}return r}function m(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e,t,n,i){function s(){u&&(delete z.style,delete z.modElem)}if(i=!o(i,"undefined")&&i,!o(n,"undefined")){var l=p(e,n);if(!o(l,"undefined"))return l}for(var u,c,f,h,v,g=["modernizr","tspan","samp"];!z.style&&g.length;)u=!0,z.modElem=a(g.shift()),z.style=z.modElem.style;for(f=e.length,c=0;c<f;c++)if(h=e[c],v=z.style[h],d(h,"-")&&(h=m(h)),z.style[h]!==r){if(i||o(n,"undefined"))return s(),"pfx"!==t||h;try{z.style[h]=n}catch(e){}if(z.style[h]!==v)return s(),"pfx"!==t||h}return s(),!1}function v(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:(r=t[e[i]],o(r,"function")?v(r,n||t):r);return!1}function y(e,t,n,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+O.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?h(a,t,r,i):(a=(e+" "+j.join(s+" ")+s).split(" "),g(a,t,n))}function b(e,t,n){return y(e,r,r,t,n)}var T=[],x={_version:"3.11.4",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var C,S=[],w=n.documentElement,_="svg"===w.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;C=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=s});var k=function(){var e=t.matchMedia||t.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var t=!1;return u("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"===c(e,null,"position")}),t}}();x.mq=k;var P="Moz O ms Webkit",O=x._config.usePrefixes?P.split(" "):[];x._cssomPrefixes=O;var E={elem:a("modernizr")};Modernizr._q.push(function(){delete E.elem});var z={style:E.elem.style};Modernizr._q.unshift(function(){delete z.style});var j=x._config.usePrefixes?P.toLowerCase().split(" "):[];x._domPrefixes=j,x.testAllProps=y;var A=function(e){var n,o=R.length,i=t.CSSRule;if(void 0===i)return r;if(!e)return!1;if(e=e.replace(/^@/,""),(n=e.replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+e;for(var s=0;s<o;s++){var a=R[s];if(a.toUpperCase()+"_"+n in i)return"@-"+a.toLowerCase()+"-"+e}return!1};x.atRule=A;var M=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?A(e):(-1!==e.indexOf("-")&&(e=m(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]});var B=a("input"),L="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),N={};Modernizr.input=function(e){for(var n=0,r=e.length;n<r;n++)N[e[n]]=!!(e[n]in B);return N.list&&(N.list=!(!a("datalist")||!t.HTMLDataListElement)),N}(L),function(){for(var e,t,o,i=["search","tel","url","email","datetime","date","month","week","time","datetime-local","number","range","color"],s=0;s<i.length;s++)B.setAttribute("type",e=i[s]),o="text"!==B.type&&"style"in B,o&&(B.value="1)",B.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&B.style.WebkitAppearance!==r?(w.appendChild(B),t=n.defaultView,o=t.getComputedStyle&&"textfield"!==t.getComputedStyle(B,null).WebkitAppearance&&0!==B.offsetHeight,w.removeChild(B)):/^(search|tel)$/.test(e)||(o=/^(url|email)$/.test(e)?B.checkValidity&&!1===B.checkValidity():"1)"!==B.value)),Modernizr.addTest("inputtypes."+e,!!o)}();var R=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=R,Modernizr.addTest("touchevents",function(){if("ontouchstart"in t||t.TouchEvent||t.DocumentTouch&&n instanceof DocumentTouch)return!0;var e=["(",R.join("touch-enabled),("),"heartz",")"].join("");return k(e)}),Modernizr.addTest("adownload",!t.externalHost&&"download"in a("a")),x.testAllProps=b,function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(e){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=b("column"+n[r]),"breakbefore"!==e&&"breakafter"!==e&&"breakinside"!==e||(t=t||b(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssgridlegacy",b("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",b("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",b("flexBasis","1px",!0)),Modernizr.addTest("objectfit",!!M("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t=a("a"),n=t.style;return n.cssText=e+R.join("sticky;"+e).slice(0,-e.length),-1!==n.position.indexOf("sticky")});var q="CSS"in t&&"supports"in t.CSS,H="supportsCSS"in t;Modernizr.addTest("supports",q||H),Modernizr.addTest("csstransforms3d",function(){return!!b("perspective","1px",!0)}),Modernizr.addTest("csstransitions",b("transition","all",!0));var V=x.testStyles=u;Modernizr.addTest("details",function(){var e,t=a("details");return"open"in t&&(V("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!==t.offsetHeight}),e)}),Modernizr.addTest("picture","HTMLPictureElement"in t),Modernizr.addTest("srcset","srcset"in a("img")),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}});var I={}.toString;Modernizr.addTest("smil",function(){return!!n.createElementNS&&/SVGAnimate/.test(I.call(n.createElementNS("http://www.w3.org/2000/svg","animate")))}),Modernizr.addTest("android-stock-browser",function(){var e=navigator.userAgent;return e.indexOf("Mozilla/5.0")>-1&&e.indexOf("Android ")>-1&&e.indexOf("AppleWebKit")>-1&&!(e.indexOf("Chrome")>-1)}),Modernizr.addTest("ms-save-or-open-blob",function(){return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)}),Modernizr.addTest("touch",function(){return("maxTouchPoints"in navigator?navigator.maxTouchPoints>0:"msMaxTouchPoints"in navigator?navigator.msMaxTouchPoints>0:t.matchMedia&&t.matchMedia("(pointer:coarse) and (hover: none)").matches||-1!==navigator.userAgent.indexOf("IEMobile"))&&Modernizr.touchevents}),function(){var e,t,n,r,i,s,a;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],t=T[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(Modernizr[a[0]]&&(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean)||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),S.push((r?"":"no-")+a.join("-"))}}(),i(S),delete x.addTest,delete x.addAsyncTest;for(var W=0;W<Modernizr._q.length;W++)Modernizr._q[W]();e.Modernizr=Modernizr}(window,window,document);