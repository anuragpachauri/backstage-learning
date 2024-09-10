(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1310],{67562:(u,d,t)=>{"use strict";t.d(d,{t:()=>V});var e=t(14041),o=t(99703),a=t(7031),l=t(95479),n=t.n(l),s=t(72501),f=t(58007),i=t(8109),b=t(61009),p=t(13677),m=t(54801),R=t(9719);const E=r=>(0,o.A)({root:{fontWeight:r.typography.fontWeightBold,whiteSpace:"nowrap",paddingRight:r.spacing(4),border:"0",verticalAlign:"top"}}),C={root:{border:"0",verticalAlign:"top"}},M=r=>(0,o.A)({root:{margin:r.spacing(0,0,-1,0)}}),S=r=>(0,o.A)({root:{padding:r.spacing(0,0,1,0)},random:{}}),h=(0,a.A)(E,{name:"BackstageMetadataTableTitleCell"})(m.A),y=(0,a.A)(C,{name:"BackstageMetadataTableCell"})(m.A),T=({dense:r,children:c})=>e.createElement(b.A,{size:r?"small":"medium"},e.createElement(p.A,null,c)),O=({title:r,children:c,...x})=>e.createElement(R.A,null,r&&e.createElement(h,null,r),e.createElement(y,{colSpan:r?1:2,...x},c)),W=(0,a.A)(M,{name:"BackstageMetadataTableList"})(({classes:r,children:c})=>e.createElement(f.A,{disablePadding:!0,className:r.root},c)),j=(0,a.A)(S,{name:"BackstageMetadataTableListItem"})(({classes:r,children:c})=>e.createElement(i.A,{className:r.root},c)),U=(0,o.A)({root:{margin:"0 0",listStyleType:"none"}}),z=r=>(0,o.A)({root:{...U.root,paddingLeft:r.spacing(1)}}),A=(0,a.A)(U,{name:"BackstageStructuredMetadataTableList"})(({classes:r,children:c})=>e.createElement(W,{classes:r},c)),F=(0,a.A)(z,{name:"BackstageStructuredMetadataTableNestedList"})(({classes:r,children:c})=>e.createElement(W,{classes:r},c));function N(r,c,x){const g=r.map((v,I)=>e.createElement(j,{key:I},L(v,c,x)));return x?e.createElement(F,null,g):e.createElement(A,null,g)}function P(r,c,x){const g=Object.keys(r).map(v=>{const I=L(r[v],c,!0);return e.createElement(j,{key:v},e.createElement(s.A,{variant:"body2",component:"span"},`${c.titleFormat(v)}: `),I)});return x?e.createElement(F,null,g):e.createElement(A,null,g)}function L(r,c,x){return e.isValidElement(r)?e.createElement(e.Fragment,null,r):r!==null&&typeof r=="object"&&!Array.isArray(r)?P(r,c,x):Array.isArray(r)?N(r,c,x):typeof r=="boolean"?e.createElement(e.Fragment,null,r?"\u2705":"\u274C"):e.createElement(s.A,{variant:"body2",component:"span"},r)}const B=({value:r,options:c})=>e.createElement(e.Fragment,null,L(r,c,!1)),D=({title:r,value:c,options:x})=>e.createElement(O,{title:x.titleFormat(r)},e.createElement(B,{value:c,options:x}));function Z(r,c){return Object.keys(r).map(x=>e.createElement(D,{key:x,title:x,value:r[x],options:c}))}function V(r){const{metadata:c,dense:x=!0,options:g={}}=r,v=Z(c,{titleFormat:n(),...g});return e.createElement(T,{dense:x},v)}},52837:u=>{function d(t){return t.split("")}u.exports=d},39546:u=>{var d=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function t(e){return e.match(d)||[]}u.exports=t},51035:u=>{function d(t){return function(e){return t?.[e]}}u.exports=d},28931:(u,d,t)=>{var e=t(73501);function o(a,l,n){var s=a.length;return n=n===void 0?s:n,!l&&n>=s?a:e(a,l,n)}u.exports=o},4326:(u,d,t)=>{var e=t(28931),o=t(83417),a=t(82237),l=t(95243);function n(s){return function(f){f=l(f);var i=o(f)?a(f):void 0,b=i?i[0]:f.charAt(0),p=i?e(i,1).join(""):f.slice(1);return b[s]()+p}}u.exports=n},93640:(u,d,t)=>{var e=t(44187),o=t(45881),a=t(17469),l="['\u2019]",n=RegExp(l,"g");function s(f){return function(i){return e(a(o(i).replace(n,"")),f,"")}}u.exports=s},69968:(u,d,t)=>{var e=t(51035),o={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},a=e(o);u.exports=a},15813:u=>{var d=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function t(e){return d.test(e)}u.exports=t},82237:(u,d,t)=>{var e=t(52837),o=t(83417),a=t(92013);function l(n){return o(n)?a(n):e(n)}u.exports=l},92013:u=>{var d="\\ud800-\\udfff",t="\\u0300-\\u036f",e="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",a=t+e+o,l="\\ufe0e\\ufe0f",n="["+d+"]",s="["+a+"]",f="\\ud83c[\\udffb-\\udfff]",i="(?:"+s+"|"+f+")",b="[^"+d+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",R="\\u200d",E=i+"?",C="["+l+"]?",M="(?:"+R+"(?:"+[b,p,m].join("|")+")"+C+E+")*",S=C+E+M,h="(?:"+[b+s+"?",s,p,m,n].join("|")+")",y=RegExp(f+"(?="+f+")|"+h+S,"g");function T(O){return O.match(y)||[]}u.exports=T},10482:u=>{var d="\\ud800-\\udfff",t="\\u0300-\\u036f",e="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",a=t+e+o,l="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",s="\\xac\\xb1\\xd7\\xf7",f="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",i="\\u2000-\\u206f",b=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",p="A-Z\\xc0-\\xd6\\xd8-\\xde",m="\\ufe0e\\ufe0f",R=s+f+i+b,E="['\u2019]",C="["+R+"]",M="["+a+"]",S="\\d+",h="["+l+"]",y="["+n+"]",T="[^"+d+R+S+l+n+p+"]",O="\\ud83c[\\udffb-\\udfff]",W="(?:"+M+"|"+O+")",j="[^"+d+"]",U="(?:\\ud83c[\\udde6-\\uddff]){2}",z="[\\ud800-\\udbff][\\udc00-\\udfff]",A="["+p+"]",F="\\u200d",N="(?:"+y+"|"+T+")",P="(?:"+A+"|"+T+")",L="(?:"+E+"(?:d|ll|m|re|s|t|ve))?",B="(?:"+E+"(?:D|LL|M|RE|S|T|VE))?",D=W+"?",Z="["+m+"]?",V="(?:"+F+"(?:"+[j,U,z].join("|")+")"+Z+D+")*",r="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",c="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",x=Z+D+V,g="(?:"+[h,U,z].join("|")+")"+x,v=RegExp([A+"?"+y+"+"+L+"(?="+[C,A,"$"].join("|")+")",P+"+"+B+"(?="+[C,A+N,"$"].join("|")+")",A+"?"+N+"+"+L,A+"+"+B,c,r,S,g].join("|"),"g");function I(k){return k.match(v)||[]}u.exports=I},45881:(u,d,t)=>{var e=t(69968),o=t(95243),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",f=l+n+s,i="["+f+"]",b=RegExp(i,"g");function p(m){return m=o(m),m&&m.replace(a,e).replace(b,"")}u.exports=p},95479:(u,d,t)=>{var e=t(93640),o=t(5485),a=e(function(l,n,s){return l+(s?" ":"")+o(n)});u.exports=a},5485:(u,d,t)=>{var e=t(4326),o=e("toUpperCase");u.exports=o},17469:(u,d,t)=>{var e=t(39546),o=t(15813),a=t(95243),l=t(10482);function n(s,f,i){return s=a(s),f=i?void 0:f,f===void 0?o(s)?l(s):e(s):s.match(f)||[]}u.exports=n},45313:(u,d,t)=>{"use strict";t.d(d,{A:()=>a});var e=t(14041),o=function(l,n){var s=(0,e.useRef)(function(){});(0,e.useEffect)(function(){s.current=l}),(0,e.useEffect)(function(){if(n!==null){var f=setInterval(function(){return s.current()},n||0);return function(){return clearInterval(f)}}},[n])};const a=o}}]);})();

//# sourceMappingURL=1310.4e919064.chunk.js.map