(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[7409],{98686:(e,t,n)=>{var r=1/0;var i="[object Symbol]";var a=/[&<>"'`]/g,s=RegExp(a.source);var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"};var o=typeof n.g=="object"&&n.g&&n.g.Object===Object&&n.g;var c=typeof self=="object"&&self&&self.Object===Object&&self;var u=o||c||Function("return this")();function p(e){return function(t){return e==null?undefined:e[t]}}var h=p(l);var f=Object.prototype;var g=f.toString;var d=u.Symbol;var k=d?d.prototype:undefined,b=k?k.toString:undefined;function v(e){if(typeof e=="string"){return e}if(x(e)){return b?b.call(e):""}var t=e+"";return t=="0"&&1/e==-r?"-0":t}function m(e){return!!e&&typeof e=="object"}function x(e){return typeof e=="symbol"||m(e)&&g.call(e)==i}function w(e){return e==null?"":v(e)}function _(e){e=w(e);return e&&s.test(e)?e.replace(a,h):e}e.exports=_},47084:function(e){(function(t,n){true?e.exports=n():0})(this,(function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function t(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}function n(e,t){if(!e)return;if(typeof e==="string")return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor)n=e.constructor.name;if(n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}function r(e,t){if(t==null||t>e.length)t=e.length;for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var r;if(typeof Symbol==="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=n(e))||t&&e&&typeof e.length==="number"){if(r)e=r;var i=0;return function(){if(i>=e.length)return{done:true};return{done:false,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r=e[Symbol.iterator]();return r.next.bind(r)}function a(e,t){return t={exports:{}},e(t,t.exports),t.exports}var s=a((function(e){function t(){return{baseUrl:null,breaks:false,gfm:true,headerIds:true,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:true,pedantic:false,renderer:null,sanitize:false,sanitizer:null,silent:false,smartLists:false,smartypants:false,tokenizer:null,walkTokens:null,xhtml:false}}function n(t){e.exports.defaults=t}e.exports={defaults:t(),getDefaults:t,changeDefaults:n}}));var l=s.defaults;var o=s.getDefaults;var c=s.changeDefaults;var u=/[&<>"']/;var p=/[&<>"']/g;var h=/[<>"']|&(?!#?\w+;)/;var f=/[<>"']|&(?!#?\w+;)/g;var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};var d=function e(t){return g[t]};function k(e,t){if(t){if(u.test(e)){return e.replace(p,d)}}else{if(h.test(e)){return e.replace(f,d)}}return e}var b=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function v(e){return e.replace(b,(function(e,t){t=t.toLowerCase();if(t==="colon")return":";if(t.charAt(0)==="#"){return t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1))}return""}))}var m=/(^|[^\[])\^/g;function x(e,t){e=e.source||e;t=t||"";var n={replace:function t(r,i){i=i.source||i;i=i.replace(m,"$1");e=e.replace(r,i);return n},getRegex:function n(){return new RegExp(e,t)}};return n}var w=/[^\w:]/g;var _=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function y(e,t,n){if(e){var r;try{r=decodeURIComponent(v(n)).replace(w,"").toLowerCase()}catch(i){return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0){return null}}if(t&&!_.test(n)){n=R(t,n)}try{n=encodeURI(n).replace(/%25/g,"%")}catch(i){return null}return n}var S={};var z=/^[^:]+:\/*[^/]*$/;var $=/^([^:]+:)[\s\S]*$/;var A=/^([^:]+:\/*[^/]*)[\s\S]*$/;function R(e,t){if(!S[" "+e]){if(z.test(e)){S[" "+e]=e+"/"}else{S[" "+e]=O(e,"/",true)}}e=S[" "+e];var n=e.indexOf(":")===-1;if(t.substring(0,2)==="//"){if(n){return t}return e.replace($,"$1")+t}else if(t.charAt(0)==="/"){if(n){return t}return e.replace(A,"$1")+t}else{return e+t}}var T={exec:function e(){}};function I(e){var t=1,n,r;for(;t<arguments.length;t++){n=arguments[t];for(r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e}function j(e,t){var n=e.replace(/\|/g,(function(e,t,n){var r=false,i=t;while(--i>=0&&n[i]==="\\"){r=!r}if(r){return"|"}else{return" |"}})),r=n.split(/ \|/);var i=0;if(r.length>t){r.splice(t)}else{while(r.length<t){r.push("")}}for(;i<r.length;i++){r[i]=r[i].trim().replace(/\\\|/g,"|")}return r}function O(e,t,n){var r=e.length;if(r===0){return""}var i=0;while(i<r){var a=e.charAt(r-i-1);if(a===t&&!n){i++}else if(a!==t&&n){i++}else{break}}return e.substr(0,r-i)}function q(e,t){if(e.indexOf(t[1])===-1){return-1}var n=e.length;var r=0,i=0;for(;i<n;i++){if(e[i]==="\\"){i++}else if(e[i]===t[0]){r++}else if(e[i]===t[1]){r--;if(r<0){return i}}}return-1}function Z(e){if(e&&e.sanitize&&!e.silent){console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}}function C(e,t){if(t<1){return""}var n="";while(t>1){if(t&1){n+=e}t>>=1;e+=e}return n+e}var U={escape:k,unescape:v,edit:x,cleanUrl:y,resolveUrl:R,noopTest:T,merge:I,splitCells:j,rtrim:O,findClosingBracket:q,checkSanitizeDeprecation:Z,repeatString:C};var E=s.defaults;var D=U.rtrim,P=U.splitCells,L=U.escape,B=U.findClosingBracket;function F(e,t,n){var r=t.href;var i=t.title?L(t.title):null;var a=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){return{type:"link",raw:n,href:r,title:i,text:a}}else{return{type:"image",raw:n,href:r,title:i,text:L(a)}}}function N(e,t){var n=e.match(/^(\s+)(?:```)/);if(n===null){return t}var r=n[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);if(t===null){return e}var n=t[0];if(n.length>=r.length){return e.slice(r.length)}return e})).join("\n")}var M=function(){function e(e){this.options=e||E}var t=e.prototype;t.space=function e(t){var n=this.rules.block.newline.exec(t);if(n){if(n[0].length>1){return{type:"space",raw:n[0]}}return{raw:"\n"}}};t.code=function e(t,n){var r=this.rules.block.code.exec(t);if(r){var i=n[n.length-1];if(i&&i.type==="paragraph"){return{raw:r[0],text:r[0].trimRight()}}var a=r[0].replace(/^ {4}/gm,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:!this.options.pedantic?D(a,"\n"):a}}};t.fences=function e(t){var n=this.rules.block.fences.exec(t);if(n){var r=n[0];var i=N(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim():n[2],text:i}}};t.heading=function e(t){var n=this.rules.block.heading.exec(t);if(n){var r=n[2].trim();if(/#$/.test(r)){var i=D(r,"#");if(this.options.pedantic){r=i.trim()}else if(!i||/ $/.test(i)){r=i.trim()}}return{type:"heading",raw:n[0],depth:n[1].length,text:r}}};t.nptable=function e(t){var n=this.rules.block.nptable.exec(t);if(n){var r={type:"table",header:P(n[1].replace(/^ *| *\| *$/g,"")),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:n[3]?n[3].replace(/\n$/,"").split("\n"):[],raw:n[0]};if(r.header.length===r.align.length){var i=r.align.length;var a;for(a=0;a<i;a++){if(/^ *-+: *$/.test(r.align[a])){r.align[a]="right"}else if(/^ *:-+: *$/.test(r.align[a])){r.align[a]="center"}else if(/^ *:-+ *$/.test(r.align[a])){r.align[a]="left"}else{r.align[a]=null}}i=r.cells.length;for(a=0;a<i;a++){r.cells[a]=P(r.cells[a],r.header.length)}return r}}};t.hr=function e(t){var n=this.rules.block.hr.exec(t);if(n){return{type:"hr",raw:n[0]}}};t.blockquote=function e(t){var n=this.rules.block.blockquote.exec(t);if(n){var r=n[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:n[0],text:r}}};t.list=function e(t){var n=this.rules.block.list.exec(t);if(n){var r=n[0];var i=n[2];var a=i.length>1;var e={type:"list",raw:r,ordered:a,start:a?+i.slice(0,-1):"",loose:false,items:[]};var s=n[0].match(this.rules.block.item);var l=false,o,c,u,p,h,f,g,d;var k=s.length;u=this.rules.block.listItemStart.exec(s[0]);for(var b=0;b<k;b++){o=s[b];r=o;if(b!==k-1){p=this.rules.block.listItemStart.exec(s[b+1]);if(p[1].length>u[0].length||p[1].length>3){s.splice(b,2,s[b]+"\n"+s[b+1]);b--;k--;continue}else{if(!this.options.pedantic||this.options.smartLists?p[2][p[2].length-1]!==i[i.length-1]:a===(p[2].length===1)){h=s.slice(b+1).join("\n");e.raw=e.raw.substring(0,e.raw.length-h.length);b=k-1}}u=p}c=o.length;o=o.replace(/^ *([*+-]|\d+[.)]) ?/,"");if(~o.indexOf("\n ")){c-=o.length;o=!this.options.pedantic?o.replace(new RegExp("^ {1,"+c+"}","gm"),""):o.replace(/^ {1,4}/gm,"")}f=l||/\n\n(?!\s*$)/.test(o);if(b!==k-1){l=o.charAt(o.length-1)==="\n";if(!f)f=l}if(f){e.loose=true}if(this.options.gfm){g=/^\[[ xX]\] /.test(o);d=undefined;if(g){d=o[1]!==" ";o=o.replace(/^\[[ xX]\] +/,"")}}e.items.push({type:"list_item",raw:r,task:g,checked:d,loose:f,text:o})}return e}};t.html=function e(t){var n=this.rules.block.html.exec(t);if(n){return{type:this.options.sanitize?"paragraph":"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):L(n[0]):n[0]}}};t.def=function e(t){var n=this.rules.block.def.exec(t);if(n){if(n[3])n[3]=n[3].substring(1,n[3].length-1);var r=n[1].toLowerCase().replace(/\s+/g," ");return{tag:r,raw:n[0],href:n[2],title:n[3]}}};t.table=function e(t){var n=this.rules.block.table.exec(t);if(n){var r={type:"table",header:P(n[1].replace(/^ *| *\| *$/g,"")),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:n[3]?n[3].replace(/\n$/,"").split("\n"):[]};if(r.header.length===r.align.length){r.raw=n[0];var i=r.align.length;var a;for(a=0;a<i;a++){if(/^ *-+: *$/.test(r.align[a])){r.align[a]="right"}else if(/^ *:-+: *$/.test(r.align[a])){r.align[a]="center"}else if(/^ *:-+ *$/.test(r.align[a])){r.align[a]="left"}else{r.align[a]=null}}i=r.cells.length;for(a=0;a<i;a++){r.cells[a]=P(r.cells[a].replace(/^ *\| *| *\| *$/g,""),r.header.length)}return r}}};t.lheading=function e(t){var n=this.rules.block.lheading.exec(t);if(n){return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1]}}};t.paragraph=function e(t){var n=this.rules.block.paragraph.exec(t);if(n){return{type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)==="\n"?n[1].slice(0,-1):n[1]}}};t.text=function e(t,n){var r=this.rules.block.text.exec(t);if(r){var i=n[n.length-1];if(i&&i.type==="text"){return{raw:r[0],text:r[0]}}return{type:"text",raw:r[0],text:r[0]}}};t.escape=function e(t){var n=this.rules.inline.escape.exec(t);if(n){return{type:"escape",raw:n[0],text:L(n[1])}}};t.tag=function e(t,n,r){var i=this.rules.inline.tag.exec(t);if(i){if(!n&&/^<a /i.test(i[0])){n=true}else if(n&&/^<\/a>/i.test(i[0])){n=false}if(!r&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])){r=true}else if(r&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])){r=false}return{type:this.options.sanitize?"text":"html",raw:i[0],inLink:n,inRawBlock:r,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):L(i[0]):i[0]}}};t.link=function e(t){var n=this.rules.inline.link.exec(t);if(n){var r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r)){return}var i=D(r.slice(0,-1),"\\");if((r.length-i.length)%2===0){return}}else{var a=B(n[2],"()");if(a>-1){var s=n[0].indexOf("!")===0?5:4;var l=s+n[1].length+a;n[2]=n[2].substring(0,a);n[0]=n[0].substring(0,l).trim();n[3]=""}}var o=n[2];var c="";if(this.options.pedantic){var e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);if(e){o=e[1];c=e[3]}}else{c=n[3]?n[3].slice(1,-1):""}o=o.trim();if(/^</.test(o)){if(this.options.pedantic&&!/>$/.test(r)){o=o.slice(1)}else{o=o.slice(1,-1)}}return F(n,{href:o?o.replace(this.rules.inline._escapes,"$1"):o,title:c?c.replace(this.rules.inline._escapes,"$1"):c},n[0])}};t.reflink=function e(t,n){var r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){var i=(r[2]||r[1]).replace(/\s+/g," ");i=n[i.toLowerCase()];if(!i||!i.href){var a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return F(r,i,r[0])}};t.strong=function e(t,n,r){if(r===void 0){r=""}var i=this.rules.inline.strong.start.exec(t);if(i&&(!i[1]||i[1]&&(r===""||this.rules.inline.punctuation.exec(r)))){n=n.slice(-1*t.length);var a=i[0]==="**"?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;a.lastIndex=0;var s;while((i=a.exec(n))!=null){s=this.rules.inline.strong.middle.exec(n.slice(0,i.index+3));if(s){return{type:"strong",raw:t.slice(0,s[0].length),text:t.slice(2,s[0].length-2)}}}}};t.em=function e(t,n,r){if(r===void 0){r=""}var i=this.rules.inline.em.start.exec(t);if(i&&(!i[1]||i[1]&&(r===""||this.rules.inline.punctuation.exec(r)))){n=n.slice(-1*t.length);var a=i[0]==="*"?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;a.lastIndex=0;var s;while((i=a.exec(n))!=null){s=this.rules.inline.em.middle.exec(n.slice(0,i.index+2));if(s){return{type:"em",raw:t.slice(0,s[0].length),text:t.slice(1,s[0].length-1)}}}}};t.codespan=function e(t){var n=this.rules.inline.code.exec(t);if(n){var r=n[2].replace(/\n/g," ");var i=/[^ ]/.test(r);var a=/^ /.test(r)&&/ $/.test(r);if(i&&a){r=r.substring(1,r.length-1)}r=L(r,true);return{type:"codespan",raw:n[0],text:r}}};t.br=function e(t){var n=this.rules.inline.br.exec(t);if(n){return{type:"br",raw:n[0]}}};t.del=function e(t){var n=this.rules.inline.del.exec(t);if(n){return{type:"del",raw:n[0],text:n[2]}}};t.autolink=function e(t,n){var r=this.rules.inline.autolink.exec(t);if(r){var i,a;if(r[2]==="@"){i=L(this.options.mangle?n(r[1]):r[1]);a="mailto:"+i}else{i=L(r[1]);a=i}return{type:"link",raw:r[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}};t.url=function e(t,n){var r;if(r=this.rules.inline.url.exec(t)){var i,a;if(r[2]==="@"){i=L(this.options.mangle?n(r[0]):r[0]);a="mailto:"+i}else{var s;do{s=r[0];r[0]=this.rules.inline._backpedal.exec(r[0])[0]}while(s!==r[0]);i=L(r[0]);if(r[1]==="www."){a="http://"+i}else{a=i}}return{type:"link",raw:r[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}};t.inlineText=function e(t,n,r){var i=this.rules.inline.text.exec(t);if(i){var a;if(n){a=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):L(i[0]):i[0]}else{a=L(this.options.smartypants?r(i[0]):i[0])}return{type:"text",raw:i[0],text:a}}};return e}();var X=U.noopTest,G=U.edit,V=U.merge;var H={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:"+"<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)"+"|comment[^\\n]*(\\n+|$)"+"|<\\?[\\s\\S]*?(?:\\?>\\n*|$)"+"|<![A-Z][\\s\\S]*?(?:>\\n*|$)"+"|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)"+"|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)"+"|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)"+"|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)"+")",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:X,table:X,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/};H._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;H._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;H.def=G(H.def).replace("label",H._label).replace("title",H._title).getRegex();H.bullet=/(?:[*+-]|\d{1,9}[.)])/;H.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/;H.item=G(H.item,"gm").replace(/bull/g,H.bullet).getRegex();H.listItemStart=G(/^( *)(bull)/).replace("bull",H.bullet).getRegex();H.list=G(H.list).replace(/bull/g,H.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+H.def.source+")").getRegex();H._tag="address|article|aside|base|basefont|blockquote|body|caption"+"|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption"+"|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe"+"|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option"+"|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr"+"|track|ul";H._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;H.html=G(H.html,"i").replace("comment",H._comment).replace("tag",H._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();H.paragraph=G(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",H._tag).getRegex();H.blockquote=G(H.blockquote).replace("paragraph",H.paragraph).getRegex();H.normal=V({},H);H.gfm=V({},H.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n"+" {0,3}([-:]+ *\\|[-| :]*)"+"(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n"+" {0,3}\\|?( *[-:]+[-| :]*)"+"(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});H.gfm.nptable=G(H.gfm.nptable).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",H._tag).getRegex();H.gfm.table=G(H.gfm.table).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",H._tag).getRegex();H.pedantic=V({},H.normal,{html:G("^ *(?:comment *(?:\\n|\\s*$)"+"|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)"+"|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",H._comment).replace(/tag/g,"(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub"+"|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)"+"\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:X,paragraph:G(H.normal._paragraph).replace("hr",H.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",H.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var J={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:X,tag:"^comment"+"|^</[a-zA-Z][\\w:-]*\\s*>"+"|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>"+"|^<\\?[\\s\\S]*?\\?>"+"|^<![a-zA-Z]+\\s[\\s\\S]*?>"+"|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:X,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/};J._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";J.punctuation=G(J.punctuation).replace(/punctuation/g,J._punctuation).getRegex();J._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>";J._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*";J._comment=G(H._comment).replace("(?:--\x3e|$)","--\x3e").getRegex();J.em.start=G(J.em.start).replace(/punctuation/g,J._punctuation).getRegex();J.em.middle=G(J.em.middle).replace(/punctuation/g,J._punctuation).replace(/overlapSkip/g,J._overlapSkip).getRegex();J.em.endAst=G(J.em.endAst,"g").replace(/punctuation/g,J._punctuation).getRegex();J.em.endUnd=G(J.em.endUnd,"g").replace(/punctuation/g,J._punctuation).getRegex();J.strong.start=G(J.strong.start).replace(/punctuation/g,J._punctuation).getRegex();J.strong.middle=G(J.strong.middle).replace(/punctuation/g,J._punctuation).replace(/overlapSkip/g,J._overlapSkip).getRegex();J.strong.endAst=G(J.strong.endAst,"g").replace(/punctuation/g,J._punctuation).getRegex();J.strong.endUnd=G(J.strong.endUnd,"g").replace(/punctuation/g,J._punctuation).getRegex();J.blockSkip=G(J._blockSkip,"g").getRegex();J.overlapSkip=G(J._overlapSkip,"g").getRegex();J._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;J._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;J._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;J.autolink=G(J.autolink).replace("scheme",J._scheme).replace("email",J._email).getRegex();J._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;J.tag=G(J.tag).replace("comment",J._comment).replace("attribute",J._attribute).getRegex();J._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;J._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;J._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;J.link=G(J.link).replace("label",J._label).replace("href",J._href).replace("title",J._title).getRegex();J.reflink=G(J.reflink).replace("label",J._label).getRegex();J.reflinkSearch=G(J.reflinkSearch,"g").replace("reflink",J.reflink).replace("nolink",J.nolink).getRegex();J.normal=V({},J);J.pedantic=V({},J.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",J._label).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",J._label).getRegex()});J.gfm=V({},J.normal,{escape:G(J.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/});J.gfm.url=G(J.gfm.url,"i").replace("email",J.gfm._extended_email).getRegex();J.breaks=V({},J.gfm,{br:G(J.br).replace("{2,}","*").getRegex(),text:G(J.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var K={block:H,inline:J};var Q=s.defaults;var W=K.block,Y=K.inline;var ee=U.repeatString;function te(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ne(e){var t="",n,r;var i=e.length;for(n=0;n<i;n++){r=e.charCodeAt(n);if(Math.random()>.5){r="x"+r.toString(16)}t+="&#"+r+";"}return t}var re=function(){function e(e){this.tokens=[];this.tokens.links=Object.create(null);this.options=e||Q;this.options.tokenizer=this.options.tokenizer||new M;this.tokenizer=this.options.tokenizer;this.tokenizer.options=this.options;var t={block:W.normal,inline:Y.normal};if(this.options.pedantic){t.block=W.pedantic;t.inline=Y.pedantic}else if(this.options.gfm){t.block=W.gfm;if(this.options.breaks){t.inline=Y.breaks}else{t.inline=Y.gfm}}this.tokenizer.rules=t}e.lex=function t(n,r){var i=new e(r);return i.lex(n)};e.lexInline=function t(n,r){var i=new e(r);return i.inlineTokens(n)};var n=e.prototype;n.lex=function e(t){t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ");this.blockTokens(t,this.tokens,true);this.inline(this.tokens);return this.tokens};n.blockTokens=function e(t,n,r){if(n===void 0){n=[]}if(r===void 0){r=true}t=t.replace(/^ +$/gm,"");var i,a,s,l;while(t){if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);if(i.type){n.push(i)}continue}if(i=this.tokenizer.code(t,n)){t=t.substring(i.raw.length);if(i.type){n.push(i)}else{l=n[n.length-1];l.raw+="\n"+i.raw;l.text+="\n"+i.text}continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length);n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length);n.push(i);continue}if(i=this.tokenizer.nptable(t)){t=t.substring(i.raw.length);n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length);n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length);i.tokens=this.blockTokens(i.text,[],r);n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length);s=i.items.length;for(a=0;a<s;a++){i.items[a].tokens=this.blockTokens(i.items[a].text,[],false)}n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length);n.push(i);continue}if(r&&(i=this.tokenizer.def(t))){t=t.substring(i.raw.length);if(!this.tokens.links[i.tag]){this.tokens.links[i.tag]={href:i.href,title:i.title}}continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length);n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length);n.push(i);continue}if(r&&(i=this.tokenizer.paragraph(t))){t=t.substring(i.raw.length);n.push(i);continue}if(i=this.tokenizer.text(t,n)){t=t.substring(i.raw.length);if(i.type){n.push(i)}else{l=n[n.length-1];l.raw+="\n"+i.raw;l.text+="\n"+i.text}continue}if(t){var o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else{throw new Error(o)}}}return n};n.inline=function e(t){var n,r,i,a,s,l;var o=t.length;for(n=0;n<o;n++){l=t[n];switch(l.type){case"paragraph":case"text":case"heading":{l.tokens=[];this.inlineTokens(l.text,l.tokens);break}case"table":{l.tokens={header:[],cells:[]};a=l.header.length;for(r=0;r<a;r++){l.tokens.header[r]=[];this.inlineTokens(l.header[r],l.tokens.header[r])}a=l.cells.length;for(r=0;r<a;r++){s=l.cells[r];l.tokens.cells[r]=[];for(i=0;i<s.length;i++){l.tokens.cells[r][i]=[];this.inlineTokens(s[i],l.tokens.cells[r][i])}}break}case"blockquote":{this.inline(l.tokens);break}case"list":{a=l.items.length;for(r=0;r<a;r++){this.inline(l.items[r].tokens)}break}}}return t};n.inlineTokens=function e(t,n,r,i){if(n===void 0){n=[]}if(r===void 0){r=false}if(i===void 0){i=false}var a;var s=t;var l;var o,c;if(this.tokens.links){var u=Object.keys(this.tokens.links);if(u.length>0){while((l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null){if(u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))){s=s.slice(0,l.index)+"["+ee("a",l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)}}}}while((l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null){s=s.slice(0,l.index)+"["+ee("a",l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)}while(t){if(!o){c=""}o=false;if(a=this.tokenizer.escape(t)){t=t.substring(a.raw.length);n.push(a);continue}if(a=this.tokenizer.tag(t,r,i)){t=t.substring(a.raw.length);r=a.inLink;i=a.inRawBlock;n.push(a);continue}if(a=this.tokenizer.link(t)){t=t.substring(a.raw.length);if(a.type==="link"){a.tokens=this.inlineTokens(a.text,[],true,i)}n.push(a);continue}if(a=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(a.raw.length);if(a.type==="link"){a.tokens=this.inlineTokens(a.text,[],true,i)}n.push(a);continue}if(a=this.tokenizer.strong(t,s,c)){t=t.substring(a.raw.length);a.tokens=this.inlineTokens(a.text,[],r,i);n.push(a);continue}if(a=this.tokenizer.em(t,s,c)){t=t.substring(a.raw.length);a.tokens=this.inlineTokens(a.text,[],r,i);n.push(a);continue}if(a=this.tokenizer.codespan(t)){t=t.substring(a.raw.length);n.push(a);continue}if(a=this.tokenizer.br(t)){t=t.substring(a.raw.length);n.push(a);continue}if(a=this.tokenizer.del(t)){t=t.substring(a.raw.length);a.tokens=this.inlineTokens(a.text,[],r,i);n.push(a);continue}if(a=this.tokenizer.autolink(t,ne)){t=t.substring(a.raw.length);n.push(a);continue}if(!r&&(a=this.tokenizer.url(t,ne))){t=t.substring(a.raw.length);n.push(a);continue}if(a=this.tokenizer.inlineText(t,i,te)){t=t.substring(a.raw.length);c=a.raw.slice(-1);o=true;n.push(a);continue}if(t){var p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else{throw new Error(p)}}}return n};t(e,null,[{key:"rules",get:function e(){return{block:W,inline:Y}}}]);return e}();var ie=s.defaults;var ae=U.cleanUrl,se=U.escape;var le=function(){function e(e){this.options=e||ie}var t=e.prototype;t.code=function e(t,n,r){var i=(n||"").match(/\S*/)[0];if(this.options.highlight){var a=this.options.highlight(t,i);if(a!=null&&a!==t){r=true;t=a}}if(!i){return"<pre><code>"+(r?t:se(t,true))+"</code></pre>\n"}return'<pre><code class="'+this.options.langPrefix+se(i,true)+'">'+(r?t:se(t,true))+"</code></pre>\n"};t.blockquote=function e(t){return"<blockquote>\n"+t+"</blockquote>\n"};t.html=function e(t){return t};t.heading=function e(t,n,r,i){if(this.options.headerIds){return"<h"+n+' id="'+this.options.headerPrefix+i.slug(r)+'">'+t+"</h"+n+">\n"}return"<h"+n+">"+t+"</h"+n+">\n"};t.hr=function e(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};t.list=function e(t,n,r){var i=n?"ol":"ul",a=n&&r!==1?' start="'+r+'"':"";return"<"+i+a+">\n"+t+"</"+i+">\n"};t.listitem=function e(t){return"<li>"+t+"</li>\n"};t.checkbox=function e(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "};t.paragraph=function e(t){return"<p>"+t+"</p>\n"};t.table=function e(t,n){if(n)n="<tbody>"+n+"</tbody>";return"<table>\n"+"<thead>\n"+t+"</thead>\n"+n+"</table>\n"};t.tablerow=function e(t){return"<tr>\n"+t+"</tr>\n"};t.tablecell=function e(t,n){var r=n.header?"th":"td";var i=n.align?"<"+r+' align="'+n.align+'">':"<"+r+">";return i+t+"</"+r+">\n"};t.strong=function e(t){return"<strong>"+t+"</strong>"};t.em=function e(t){return"<em>"+t+"</em>"};t.codespan=function e(t){return"<code>"+t+"</code>"};t.br=function e(){return this.options.xhtml?"<br/>":"<br>"};t.del=function e(t){return"<del>"+t+"</del>"};t.link=function e(t,n,r){t=ae(this.options.sanitize,this.options.baseUrl,t);if(t===null){return r}var i='<a href="'+se(t)+'"';if(n){i+=' title="'+n+'"'}i+=">"+r+"</a>";return i};t.image=function e(t,n,r){t=ae(this.options.sanitize,this.options.baseUrl,t);if(t===null){return r}var i='<img src="'+t+'" alt="'+r+'"';if(n){i+=' title="'+n+'"'}i+=this.options.xhtml?"/>":">";return i};t.text=function e(t){return t};return e}();var oe=function(){function e(){}var t=e.prototype;t.strong=function e(t){return t};t.em=function e(t){return t};t.codespan=function e(t){return t};t.del=function e(t){return t};t.html=function e(t){return t};t.text=function e(t){return t};t.link=function e(t,n,r){return""+r};t.image=function e(t,n,r){return""+r};t.br=function e(){return""};return e}();var ce=function(){function e(){this.seen={}}var t=e.prototype;t.serialize=function e(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")};t.getNextSafeSlug=function e(t,n){var r=t;var i=0;if(this.seen.hasOwnProperty(r)){i=this.seen[t];do{i++;r=t+"-"+i}while(this.seen.hasOwnProperty(r))}if(!n){this.seen[t]=i;this.seen[r]=0}return r};t.slug=function e(t,n){if(n===void 0){n={}}var e=this.serialize(t);return this.getNextSafeSlug(e,n.dryrun)};return e}();var ue=s.defaults;var pe=U.unescape;var he=function(){function e(e){this.options=e||ue;this.options.renderer=this.options.renderer||new le;this.renderer=this.options.renderer;this.renderer.options=this.options;this.textRenderer=new oe;this.slugger=new ce}e.parse=function t(n,r){var i=new e(r);return i.parse(n)};e.parseInline=function t(n,r){var i=new e(r);return i.parseInline(n)};var t=e.prototype;t.parse=function e(t,n){if(n===void 0){n=true}var r="",i,a,s,l,o,c,u,p,h,f,g,d,k,b,v,m,x,w;var _=t.length;for(i=0;i<_;i++){f=t[i];switch(f.type){case"space":{continue}case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(f.tokens),f.depth,pe(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(f.text,f.lang,f.escaped);continue}case"table":{p="";u="";l=f.header.length;for(a=0;a<l;a++){u+=this.renderer.tablecell(this.parseInline(f.tokens.header[a]),{header:true,align:f.align[a]})}p+=this.renderer.tablerow(u);h="";l=f.cells.length;for(a=0;a<l;a++){c=f.tokens.cells[a];u="";o=c.length;for(s=0;s<o;s++){u+=this.renderer.tablecell(this.parseInline(c[s]),{header:false,align:f.align[s]})}h+=this.renderer.tablerow(u)}r+=this.renderer.table(p,h);continue}case"blockquote":{h=this.parse(f.tokens);r+=this.renderer.blockquote(h);continue}case"list":{g=f.ordered;d=f.start;k=f.loose;l=f.items.length;h="";for(a=0;a<l;a++){v=f.items[a];m=v.checked;x=v.task;b="";if(v.task){w=this.renderer.checkbox(m);if(k){if(v.tokens.length>0&&v.tokens[0].type==="text"){v.tokens[0].text=w+" "+v.tokens[0].text;if(v.tokens[0].tokens&&v.tokens[0].tokens.length>0&&v.tokens[0].tokens[0].type==="text"){v.tokens[0].tokens[0].text=w+" "+v.tokens[0].tokens[0].text}}else{v.tokens.unshift({type:"text",text:w})}}else{b+=w}}b+=this.parse(v.tokens,k);h+=this.renderer.listitem(b,x,m)}r+=this.renderer.list(h,g,d);continue}case"html":{r+=this.renderer.html(f.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(f.tokens));continue}case"text":{h=f.tokens?this.parseInline(f.tokens):f.text;while(i+1<_&&t[i+1].type==="text"){f=t[++i];h+="\n"+(f.tokens?this.parseInline(f.tokens):f.text)}r+=n?this.renderer.paragraph(h):h;continue}default:{var y='Token with "'+f.type+'" type was not found.';if(this.options.silent){console.error(y);return}else{throw new Error(y)}}}}return r};t.parseInline=function e(t,n){n=n||this.renderer;var r="",i,a;var s=t.length;for(i=0;i<s;i++){a=t[i];switch(a.type){case"escape":{r+=n.text(a.text);break}case"html":{r+=n.html(a.text);break}case"link":{r+=n.link(a.href,a.title,this.parseInline(a.tokens,n));break}case"image":{r+=n.image(a.href,a.title,a.text);break}case"strong":{r+=n.strong(this.parseInline(a.tokens,n));break}case"em":{r+=n.em(this.parseInline(a.tokens,n));break}case"codespan":{r+=n.codespan(a.text);break}case"br":{r+=n.br();break}case"del":{r+=n.del(this.parseInline(a.tokens,n));break}case"text":{r+=n.text(a.text);break}default:{var l='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(l);return}else{throw new Error(l)}}}}return r};return e}();var fe=U.merge,ge=U.checkSanitizeDeprecation,de=U.escape;var ke=s.getDefaults,be=s.changeDefaults,ve=s.defaults;function me(e,t,n){if(typeof e==="undefined"||e===null){throw new Error("marked(): input parameter is undefined or null")}if(typeof e!=="string"){throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected")}if(typeof t==="function"){n=t;t=null}t=fe({},me.defaults,t||{});ge(t);if(n){var r=t.highlight;var i;try{i=re.lex(e,t)}catch(o){return n(o)}var a=function e(a){var s;if(!a){try{s=he.parse(i,t)}catch(o){a=o}}t.highlight=r;return a?n(a):n(null,s)};if(!r||r.length<3){return a()}delete t.highlight;if(!i.length)return a();var s=0;me.walkTokens(i,(function(e){if(e.type==="code"){s++;setTimeout((function(){r(e.text,e.lang,(function(t,n){if(t){return a(t)}if(n!=null&&n!==e.text){e.text=n;e.escaped=true}s--;if(s===0){a()}}))}),0)}}));if(s===0){a()}return}try{var l=re.lex(e,t);if(t.walkTokens){me.walkTokens(l,t.walkTokens)}return he.parse(l,t)}catch(o){o.message+="\nPlease report this to https://github.com/markedjs/marked.";if(t.silent){return"<p>An error occurred:</p><pre>"+de(o.message+"",true)+"</pre>"}throw o}}me.options=me.setOptions=function(e){fe(me.defaults,e);be(me.defaults);return me};me.getDefaults=ke;me.defaults=ve;me.use=function(e){var t=fe({},e);if(e.renderer){(function(){var n=me.defaults.renderer||new le;var r=function t(r){var i=n[r];n[r]=function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++){a[s]=arguments[s]}var l=e.renderer[r].apply(n,a);if(l===false){l=i.apply(n,a)}return l}};for(var i in e.renderer){r(i)}t.renderer=n})()}if(e.tokenizer){(function(){var n=me.defaults.tokenizer||new M;var r=function t(r){var i=n[r];n[r]=function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++){a[s]=arguments[s]}var l=e.tokenizer[r].apply(n,a);if(l===false){l=i.apply(n,a)}return l}};for(var i in e.tokenizer){r(i)}t.tokenizer=n})()}if(e.walkTokens){var n=me.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t);if(n){n(t)}}}me.setOptions(t)};me.walkTokens=function(e,t){for(var n=i(e),r;!(r=n()).done;){var a=r.value;t(a);switch(a.type){case"table":{for(var s=i(a.tokens.header),l;!(l=s()).done;){var o=l.value;me.walkTokens(o,t)}for(var c=i(a.tokens.cells),u;!(u=c()).done;){var p=u.value;for(var h=i(p),f;!(f=h()).done;){var g=f.value;me.walkTokens(g,t)}}break}case"list":{me.walkTokens(a.items,t);break}default:{if(a.tokens){me.walkTokens(a.tokens,t)}}}}};me.parseInline=function(e,t){if(typeof e==="undefined"||e===null){throw new Error("marked.parseInline(): input parameter is undefined or null")}if(typeof e!=="string"){throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected")}t=fe({},me.defaults,t||{});ge(t);try{var n=re.lexInline(e,t);if(t.walkTokens){me.walkTokens(n,t.walkTokens)}return he.parseInline(n,t)}catch(r){r.message+="\nPlease report this to https://github.com/markedjs/marked.";if(t.silent){return"<p>An error occurred:</p><pre>"+de(r.message+"",true)+"</pre>"}throw r}};me.Parser=he;me.parser=he.parse;me.Renderer=le;me.TextRenderer=oe;me.Lexer=re;me.lexer=re.lex;me.Tokenizer=M;me.Slugger=ce;me.parse=me;var xe=me;return xe}))}}]);