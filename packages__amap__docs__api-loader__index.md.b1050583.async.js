(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"5pq4":function(e,t,a){},A9BD:function(e,t,a){},GqfL:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),l=a.n(n),r=a("VqeS"),c=a("MZF8"),o=a("WVuG"),i=a("5c5H");a("5pq4");function u(e,t){return f(e)||E(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function E(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function f(e){if(Array.isArray(e))return e}function p(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var v=function(e){var t,a,d,m=Object(n["useRef"])(),s=Object(n["useContext"])(o["context"]),E=s.locale,f=Object(o["useLocaleProps"])(E,e),v=Object(o["useDemoUrl"])(f.identifier),b=f.demoUrl||v,h=(null===c["a"]||void 0===c["a"]?void 0:c["a"].location.hash)==="#".concat(f.identifier),y=1===Object.keys(f.sources).length,g=Object(o["useCodeSandbox"])((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),_=Object(o["useRiddle"])((null===(a=f.hideActions)||void 0===a?void 0:a.includes("RIDDLE"))?null:f),w=Object(o["useMotions"])(f.motions||[],m.current),k=u(w,2),A=k[0],j=k[1],N=Object(o["useCopy"])(),O=u(N,2),L=O[0],x=O[1],S=Object(n["useState"])((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),I=u(S,2),C=I[0],M=I[1],R=Object(n["useState"])(p(C,f.sources[C])),U=u(R,2),P=U[0],T=U[1],B=Object(n["useState"])(Boolean(f.defaultShowCode)),q=u(B,2),D=q[0],F=q[1],G=Object(n["useState"])(Math.random()),J=u(G,2),$=J[0],V=J[1],W=f.sources[C][P]||f.sources[C].content,H=Object(o["useTSPlaygroundUrl"])(E,W),Q=Object(n["useRef"])(),z=Object(o["usePrefersColor"])(),K=u(z,1),X=K[0],Z=f.actionBarRender,Y=void 0===Z?function(e){return e}:Z;function ee(e){M(e),T(p(e,f.sources[e]))}return Object(n["useEffect"])((function(){V(Math.random())}),[X]),l.a.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&l.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),l.a.createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?l.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:$,src:b,ref:Q}):f.children),l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&l.a.createElement(o["AnchorLink"],{to:"#".concat(f.identifier)},f.title),f.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(l.a.createElement(l.a.Fragment,null,g&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:g}),_&&l.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:_}),f.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return A()}}),f.iframe&&l.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return V(Math.random())}}),!(null===(d=f.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&l.a.createElement(o["Link"],{target:"_blank",to:b},l.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),l.a.createElement("span",null),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:function(){return L(W)}}),"tsx"===P&&D&&l.a.createElement(o["Link"],{target:"_blank",to:H},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),l.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(D?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return F(!D)}})))),D&&l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&l.a.createElement(r["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:C,onChange:ee},Object.keys(f.sources).map((function(e){return l.a.createElement(r["a"],{tab:"_"===e?"index.".concat(p(e,f.sources[e])):e,key:e})}))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(i["a"],{code:W,lang:P,showCopy:!1}))))};t["default"]=v},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},ReUR:function(e,t,a){"use strict";var n=a("1QO0"),l=a.n(n),r=a("bIC1"),c=a.n(r);a("A9BD");function o(e,t){return s(e)||m(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=o(r,2),u=i[0],d=i[1],m=Object(n["useState"])(!1),s=o(m,2),E=s[0],f=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},w9mr:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),l=a.n(n),r=a("WVuG"),c=a("GqfL"),o=a("5c5H"),i=a("ReUR"),u=l.a.memo((e=>{var t=e.demos,a=t["api-loader-demo-01"].component,n=t["api-loader-demo-04"].component,u=t["api-loader-demo-02"].component,d=t["api-loader-demo-03"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"apiloader-js-api\u52a0\u8f7d"},l.a.createElement(r["AnchorLink"],{to:"#apiloader-js-api\u52a0\u8f7d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"APILoader JS API\u52a0\u8f7d"),l.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u52a0\u8f7d\u9ad8\u5fb7\u5730\u56fe JS API\uff1b")),l.a.createElement("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u793a\u4f8b"),l.a.createElement("h3",{id:"\u57fa\u672c\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528")),l.a.createElement(c["default"],t["api-loader-demo-01"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u52a0\u8f7d\u63d2\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#\u52a0\u8f7d\u63d2\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u52a0\u8f7d\u63d2\u4ef6")),l.a.createElement(c["default"],t["api-loader-demo-04"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u52a0\u8f7damapui"},l.a.createElement(r["AnchorLink"],{to:"#\u52a0\u8f7damapui","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u52a0\u8f7dAMapUI")),l.a.createElement(c["default"],t["api-loader-demo-02"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u52a0\u8f7dloca"},l.a.createElement(r["AnchorLink"],{to:"#\u52a0\u8f7dloca","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u52a0\u8f7dLoca")),l.a.createElement(c["default"],t["api-loader-demo-03"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"mapKey"),l.a.createElement("td",null,"\u5f00\u53d1\u8005\u79d8\u94a5"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"version"),l.a.createElement("td",null,"\u9ad8\u5fb7\u5730\u56fe\u7248\u672c"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"2.0"))),l.a.createElement("tr",null,l.a.createElement("td",null,"plugins"),l.a.createElement("td",null,"\u9700\u8981\u52a0\u8f7d\u7684\u9ad8\u5fb7\u63d2\u4ef6\u540d\u79f0"),l.a.createElement("td",null,l.a.createElement("code",null,"string[]")),l.a.createElement("td",null,l.a.createElement("code",null,"[]"))),l.a.createElement("tr",null,l.a.createElement("td",null,"AMapUI"),l.a.createElement("td",null,"\u9700\u8981\u52a0\u8f7d\u7684\u9ad8\u5fb7\u63d2\u4ef6\u540d\u79f0"),l.a.createElement("td",null,l.a.createElement("code",null,"{"," version: string; plugins: string[] ","}")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"Loca"),l.a.createElement("td",null,"Loca \u52a0\u8f7d\u914d\u7f6e"),l.a.createElement("td",null,l.a.createElement("code",null,"{"," version: string ","}")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"onComplete"),l.a.createElement("td",null,"\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6210"),l.a.createElement("td",null,l.a.createElement("code",null,"(aMap: AMap) => void")),l.a.createElement("td",null,"--")))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u6ce8\u610f\uff1a")),l.a.createElement("ol",null,l.a.createElement("li",null,"AMapUI \u4e0d\u914d\u7f6e\u5219\u4e0d\u4f1a\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b")),l.a.createElement(o["a"],{code:"{\n  version: '1.1',\n  plugins: [],\n}",lang:"ts"}),l.a.createElement("p",null,"\u5982\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u4e00\u81f4\uff0c\u53ea\u9700\u914d\u7f6e ",l.a.createElement("code",null,"AMapUI=","{","{","}","}")),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"Loca \u4e0d\u914d\u7f6e\u5219\u4e0d\u4f1a\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b")),l.a.createElement(o["a"],{code:"{\n  version: '2.0.0',\n}",lang:"ts"}),l.a.createElement("p",null,"\u5982\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u4e00\u81f4\uff0c\u53ea\u9700\u914d\u7f6e ",l.a.createElement("code",null,"Loca=","{","{","}","}")))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:a})}}}]);