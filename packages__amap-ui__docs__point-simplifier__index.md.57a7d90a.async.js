(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"5pq4":function(e,t,n){},A9BD:function(e,t,n){},GqfL:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("VqeS"),c=n("MZF8"),o=n("WVuG"),i=n("5c5H");n("5pq4");function u(e,t){return E(e)||f(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function E(e){if(Array.isArray(e))return e}function p(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var b=function(e){var t,n,d,m=Object(a["useRef"])(),s=Object(a["useContext"])(o["context"]),f=s.locale,E=Object(o["useLocaleProps"])(f,e),b=Object(o["useDemoUrl"])(E.identifier),v=E.demoUrl||b,h=(null===c["a"]||void 0===c["a"]?void 0:c["a"].location.hash)==="#".concat(E.identifier),y=1===Object.keys(E.sources).length,_=Object(o["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),k=Object(o["useRiddle"])((null===(n=E.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:E),w=Object(o["useMotions"])(E.motions||[],m.current),g=u(w,2),O=g[0],j=g[1],A=Object(o["useCopy"])(),N=u(A,2),S=N[0],x=N[1],C=Object(a["useState"])((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),L=u(C,2),I=L[0],R=L[1],M=Object(a["useState"])(p(I,E.sources[I])),U=u(M,2),P=U[0],T=U[1],B=Object(a["useState"])(Boolean(E.defaultShowCode)),F=u(B,2),G=F[0],q=F[1],D=Object(a["useState"])(Math.random()),V=u(D,2),$=V[0],W=V[1],J=E.sources[I][P]||E.sources[I].content,Q=Object(o["useTSPlaygroundUrl"])(f,J),Z=Object(a["useRef"])(),z=Object(o["usePrefersColor"])(),H=u(z,1),X=H[0],K=E.actionBarRender,Y=void 0===K?function(e){return e}:K;function ee(e){R(e),T(p(e,E.sources[e]))}return Object(a["useEffect"])((function(){W(Math.random())}),[X]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:$,src:v,ref:Z}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(o["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(r.a.createElement(r.a.Fragment,null,_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),k&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:k}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return W(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r.a.createElement(o["Link"],{target:"_blank",to:v},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:function(){return S(J)}}),"tsx"===P&&G&&r.a.createElement(o["Link"],{target:"_blank",to:Q},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(G?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return q(!G)}})))),G&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(E.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(p(e,E.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:J,lang:P,showCopy:!1}))))};t["default"]=b},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},ReUR:function(e,t,n){"use strict";var a=n("1QO0"),r=n.n(a),l=n("bIC1"),c=n.n(l);n("A9BD");function o(e,t){return s(e)||m(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=o(l,2),u=i[0],d=i[1],m=Object(a["useState"])(!1),s=o(m,2),f=s[0],E=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},aZVF:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("WVuG"),c=n("GqfL"),o=n("ReUR"),i=r.a.memo((e=>{var t=e.demos,n=t["point-simplifier-demo-01"].component,a=t["point-simplifier-demo-02"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"pointsimplifier-\u6d77\u91cf\u70b9\u5c55\u793a"},r.a.createElement(l["AnchorLink"],{to:"#pointsimplifier-\u6d77\u91cf\u70b9\u5c55\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"PointSimplifier \u6d77\u91cf\u70b9\u5c55\u793a"),r.a.createElement("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u793a\u4f8b"),r.a.createElement("h3",{id:"\u95ea\u70c1\u6548\u679c"},r.a.createElement(l["AnchorLink"],{to:"#\u95ea\u70c1\u6548\u679c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u95ea\u70c1\u6548\u679c")),r.a.createElement(c["default"],t["point-simplifier-demo-01"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u56fe\u7247\u5185\u5bb9"},r.a.createElement(l["AnchorLink"],{to:"#\u56fe\u7247\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u56fe\u7247\u5185\u5bb9")),r.a.createElement(c["default"],t["point-simplifier-demo-02"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement("h3",{id:"\u52a8\u6001\u5c5e\u6027"},r.a.createElement(l["AnchorLink"],{to:"#\u52a8\u6001\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u6001\u5c5e\u6027"),r.a.createElement(o["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u5c5e\u6027"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"data"),r.a.createElement("td",null,"\u6570\u636e\u6e90\u6570\u7ec4"),r.a.createElement("td",null,r.a.createElement("code",null,"any[]")),r.a.createElement("td",null,"--")))),r.a.createElement("h3",{id:"\u6269\u5c55\u5c5e\u6027"},r.a.createElement(l["AnchorLink"],{to:"#\u6269\u5c55\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6269\u5c55\u5c5e\u6027"),r.a.createElement(o["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u5c5e\u6027"),r.a.createElement("th",null,"\u5c5e\u6027\u7c7b\u578b"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"visible"),r.a.createElement("td",null,"\u52a8\u6001\u5c5e\u6027"),r.a.createElement("td",null,"\u662f\u5426\u663e\u793a"),r.a.createElement("td",null,r.a.createElement("code",null,"boolean")),r.a.createElement("td",null,r.a.createElement("code",null,"true"))),r.a.createElement("tr",null,r.a.createElement("td",null,"renderConstructor"),r.a.createElement("td",null,"\u9759\u6001\u5c5e\u6027"),r.a.createElement("td",null,"\u8bbe\u7f6e\u6e32\u67d3\u5f15\u64ce"),r.a.createElement("td",null,r.a.createElement("code",null,"GroupStyleRender")),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"getRenderOptions"),r.a.createElement("td",null,"\u9759\u6001\u5c5e\u6027"),r.a.createElement("td",null,"\u83b7\u53d6\u6e32\u67d3\u53c2\u6570"),r.a.createElement("td",null,r.a.createElement("code",null,"function")),r.a.createElement("td",null,"--")))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:n})}}}]);