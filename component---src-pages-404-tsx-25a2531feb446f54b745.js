"use strict";(self.webpackChunkcybernika_github_io=self.webpackChunkcybernika_github_io||[]).push([[218],{3398:function(e,t,r){r.d(t,{a1:function(){return p}});var o=r(7294),n=["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","className","spin"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function u(){return"icon-"+(4294967296*(1+Math.random())|0).toString(16).substring(1)}var h=(0,o.createContext)(c);h.Provider;function p(e,t,r){return function(i){var s=i.size,c=i.strokeWidth,p=i.strokeLinecap,m=i.strokeLinejoin,f=i.theme,k=i.fill,d=i.className,C=i.spin,g=a(i,n),E=(0,o.useContext)(h),b=function(e,t,r){var o="string"==typeof t.fill?[t.fill]:t.fill||[],n=[];switch(t.theme||r.theme){case"outline":n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("none"),n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("none");break;case"filled":n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("#FFF"),n.push("#FFF");break;case"two-tone":n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("string"==typeof o[1]?o[1]:r.colors.twoTone.twoTone),n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("string"==typeof o[1]?o[1]:r.colors.twoTone.twoTone);break;case"multi-color":n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("string"==typeof o[1]?o[1]:r.colors.multiColor.outFillColor),n.push("string"==typeof o[2]?o[2]:r.colors.multiColor.innerStrokeColor),n.push("string"==typeof o[3]?o[3]:r.colors.multiColor.innerFillColor)}return{size:t.size||r.size,strokeWidth:t.strokeWidth||r.strokeWidth,strokeLinecap:t.strokeLinecap||r.strokeLinecap,strokeLinejoin:t.strokeLinejoin||r.strokeLinejoin,colors:n,id:e}}((0,o.useMemo)(u,[]),{size:s,strokeWidth:c,strokeLinecap:p,strokeLinejoin:m,theme:f,fill:k},E),y=[E.prefix+"-icon"];return y.push(E.prefix+"-icon-"+e),t&&E.rtl&&y.push(E.prefix+"-icon-rtl"),C&&y.push(E.prefix+"-icon-spin"),d&&y.push(d),o.createElement("span",l(l({},g),{},{className:y.join(" ")}),r(b))}}},4609:function(e,t,r){r.d(t,{Z:function(){return u}});var o=r(7294),n=r(3398),i=(0,n.a1)("multi-function-knife",!0,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M30 10C30 6.68629 27.3137 4 24 4C20.6863 4 18 6.68629 18 10V38C18 41.3137 20.6863 44 24 44C27.3137 44 30 41.3137 30 38V10Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M30 20.3137L37.2426 27.5563C38.8047 29.1184 41.3374 29.1184 42.8995 27.5563C44.4616 25.9943 44.4616 23.4616 42.8995 21.8995L30 9V20.3137Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M18.0711 27.4142L10.8284 20.1716C9.26633 18.6095 6.73367 18.6095 5.17157 20.1716C3.60948 21.7337 3.60948 24.2663 5.17157 25.8284L18.0711 38.7279V27.4142Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M24 10V11",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M24 37V38",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))})),l=(0,n.a1)("sun-one",!1,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),o.createElement("path",{d:"M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z",fill:e.colors[0]}),o.createElement("path",{d:"M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z",fill:e.colors[0]}),o.createElement("path",{d:"M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z",fill:e.colors[0]}),o.createElement("path",{d:"M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z",fill:e.colors[0]}),o.createElement("path",{d:"M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z",fill:e.colors[0]}),o.createElement("path",{d:"M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z",fill:e.colors[0]}),o.createElement("path",{d:"M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z",fill:e.colors[0]}),o.createElement("path",{d:"M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z",fill:e.colors[0]}))})),s=(0,n.a1)("moon",!0,(function(e){return o.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},o.createElement("path",{d:"M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}))})),a=r(5444);const c=[{id:"HOME",title:"首页",link:"/",exact:!1},{id:"ABOUT",title:"关于",link:"/about"},{id:"SAY_HI",title:"留言",link:"/#say-hi"}];var u=e=>{let{location:t,children:r}=e;const{0:n,1:u}=(0,o.useState)("light"),h=(0,o.useMemo)((()=>"dark"===n),[n]),p="undefined"!=typeof window?window.location.origin:"",m="undefined"!=typeof window?window.location.host:"";return o.createElement("div",{className:"layout"},o.createElement("header",{className:"header container"},o.createElement(a.Link,{to:"/",className:"header-left"},o.createElement(i,{className:"header-logo"}),o.createElement("h3",{className:"header-title"},"CYBER NIKA")),o.createElement("nav",{className:"header-nav"},o.createElement("ul",{className:"header-menus"},c.map((e=>o.createElement("li",{className:"header-menu",key:e.id},o.createElement(a.Link,{className:"header-menu-link",activeClassName:"header-menu-link-active",to:e.link},e.title))))),o.createElement("ul",{className:"header-actions"},o.createElement("li",{className:"header-action",onClick:()=>{u(h?"light":"dark"),document.documentElement.classList.toggle("dark")}},h?o.createElement(l,null):o.createElement(s,null))))),o.createElement("main",{className:"main"},r),o.createElement("footer",{className:"footer container"},o.createElement("span",{className:"copyright"},"© 2017-2023 | ",o.createElement("a",{href:p},m.toUpperCase())," | ",o.createElement("a",{href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noreferrer"},"京ICP备18064894号-1")),o.createElement("span",{className:"mono author"},"Created with ❤ by"," ",o.createElement("a",{href:"https://github.com/CyberNika",target:"__blank"},"Nika"))))}},9786:function(e,t,r){r.r(t);var o=r(7294),n=r(5444),i=r(4609);t.default=()=>o.createElement(i.Z,null,o.createElement(n.Link,{to:"/"},"Go home"),".")}}]);
//# sourceMappingURL=component---src-pages-404-tsx-25a2531feb446f54b745.js.map