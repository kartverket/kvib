"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[2637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(r),m=s,u=k["".concat(l,".").concat(m)]||k[m]||d[m]||a;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const a={id:"searchbarID",title:"(!)S\xf8kefelt",description:"S\xf8kefelt som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/s\xf8kefelt",displayed_sidebar:"designsystemSidebar"},i=void 0,o={unversionedId:"designsystems/Komponenter/searchbarID",id:"designsystems/Komponenter/searchbarID",title:"(!)S\xf8kefelt",description:"S\xf8kefelt som blir brukt i Kartverket sine l\xf8sninger",source:"@site/docs/designsystems/Komponenter/searchbar.md",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/s\xf8kefelt",permalink:"/kvib/designsystem/komponenter/s\xf8kefelt",draft:!1,tags:[],version:"current",frontMatter:{id:"searchbarID",title:"(!)S\xf8kefelt",description:"S\xf8kefelt som blir brukt i Kartverket sine l\xf8sninger",slug:"/designsystem/komponenter/s\xf8kefelt",displayed_sidebar:"designsystemSidebar"},sidebar:"designsystemSidebar",previous:{title:"(!)Nedtrekksmeny",permalink:"/kvib/designsystem/komponenter/nedtrekksmeny"},next:{title:"Slider",permalink:"/kvib/designsystem/komponenter/slider"}},l={},p=[],c={toc:p};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"OBS! Under konstruksjon:"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"}," Ikke design for dette i Figma-KVIB "))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"N\xe5v\xe6rende komponent er bygget opp av inputfelt fra KVIB, med en s\xf8keknapp (utgangspunkt i kartverket.no) inni\nfeltet "))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Ikke tatt h\xf8yde for fokus og hover-funksjoner p\xe5 hverken knapp eller inputfelt "))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Kartverket.no har enda ikke et felles design for s\xf8kefelt, men dette kommer etterhvert ")))),(0,s.kt)("hr",null),(0,s.kt)("p",null,"For \xe5 endre lengden til s\xf8kefeltet, m\xe5 det legges inn i et ",(0,s.kt)("code",null,"<div",">"),"-element, deretter kan st\xf8rrelsen endres\nved \xe5 sette bredde p\xe5 ",(0,s.kt)("code",null,"<div",">"),"-elementet."),(0,s.kt)("div",{class:"searchbar__wrapper"},(0,s.kt)("div",{class:"inputField__wrapper"},(0,s.kt)("input",{class:"inputField",type:"text",id:"inputFieldID",placeholder:"S\xf8k..."})),(0,s.kt)("button",{class:"button button__searchbar"},(0,s.kt)("span",{class:"material-symbols-outlined"},"search"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markup"},'<div class="searchbar__wrapper">\n    <div class="inputField__wrapper">\n        <input class="inputField" type="text" id="inputID" placeholder="S\xf8k..."/>\n    </div>\n    <button class="button button__searchbar">\n        <span class="material-symbols-outlined">search</span>\n    </button>\n</div>\n')))}d.isMDXComponent=!0}}]);