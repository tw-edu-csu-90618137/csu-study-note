!function(t){function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={};n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s="./js/docsify.plugins.js")}({"./js/docsify-footer.js":function(t,n,o){"use strict";!function(t){t&&(t.plugins=[].concat(function(){return function(n,o){n.mounted(function(){var n=document.querySelector("section.content"),o="<hr/><footer>Set your footer in docsify config (window.$docsify.footer)</footer>";"function"==typeof t.footer?o=t.footer():t.footer&&(o=t.footer);var e=document.createElement("article");e.setAttribute("footer",""),e.className="markdown-section",e.innerHTML=o,n.appendChild(e)})}}(),t.plugins))}(window.$docsify)},"./js/docsify-katex.js":function(t,n,o){"use strict";!function(t,n){t&&n&&(t.plugins=[].concat(function(){return function(t,o){var e=[];t.beforeEach(function(t){return t.replace(/\$\$([\s\S]*?)\$\$/g,function(t,o){try{return/^\r\n/g.test(o)?e.push("<p>"+n.renderToString(o.trim())+"</p>"):e.push(n.renderToString(o.trim())),"<katex>"+o+"</katex>"}catch(t){return'<span style="color: red; font-weight: 500;">'+t.toString()+"</span>"}})}),t.afterEach(function(t,n){n(t.replace(/<katex>([\s\S]*?)<\/katex>/g,function(t,n){return e.shift()}))})}}(),t.plugins))}(window.$docsify,window.katex)},"./js/docsify.plugins.js":function(t,n,o){"use strict";o("./js/docsify-footer.js"),o("./js/docsify-katex.js")}});