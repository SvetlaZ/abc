!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const o=document.querySelectorAll("._anim-items");function r(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}function c(){for(let e=0;e<o.length;e+=1){const t=o[e],n=t.offsetHeight,c=r(t).top,l=4,u=window.innerHeight-n/l;pageYOffset>c-u&&pageYOffset<c+n?t.classList.add("_active"):t.classList.remove("_active")}}function l(e){e.parentElement.classList.add("_error"),e.classList.add("_error")}function u(e){e.parentElement.classList.remove("_error"),e.classList.remove("_error")}function i(e){return!/\+?\d{1}[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/.test(e.value)}o.length&&(window.addEventListener("scroll",c),c());const s=document.getElementById("form");s.addEventListener("submit",(async function(e){e.preventDefault(),function(e){let t=0,n=document.querySelectorAll("._req");console.log("formReq: ",n);for(let e=0;e<n.length;e+=1){const o=n[e];u(o),o.classList.contains("_tel")?i(o)&&(l(o),t+=1):("checkbox"===o.getAttribute("type")&&!1===o.checked||""===o.value)&&(l(o),t+=1)}console.log("error: ",t)}()}))},function(e,t){}]);