"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6420],{876:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var o=n(2784);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),u=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),b=u(n),k=r,m=b["".concat(i,".").concat(k)]||b[k]||c[k]||s;return n?o.createElement(m,l(l({ref:e},p),{},{components:n})):o.createElement(m,l({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,l=new Array(s);l[0]=b;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:r,l[1]=a;for(var u=2;u<s;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7469:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=n(7896),r=(n(2784),n(876));const s={id:"tilleggskomponenterID",title:"Tilleggskomponenter (Historiske kart)",description:"Komponenter som ligger utenfor Figma-KVIB, og som ikke har noen godkjent design. Likvel er det tenkt at disse kan bli en del av KVIB etterhvert."},l=void 0,a={unversionedId:"designsystems/tilleggskomponenterID",id:"designsystems/tilleggskomponenterID",title:"Tilleggskomponenter (Historiske kart)",description:"Komponenter som ligger utenfor Figma-KVIB, og som ikke har noen godkjent design. Likvel er det tenkt at disse kan bli en del av KVIB etterhvert.",source:"@site/docs/designsystems/histkart-testknapper.md",sourceDirName:"designsystems",slug:"/designsystems/tilleggskomponenterID",permalink:"/kvib/designsystems/tilleggskomponenterID",draft:!1,tags:[],version:"current",frontMatter:{id:"tilleggskomponenterID",title:"Tilleggskomponenter (Historiske kart)",description:"Komponenter som ligger utenfor Figma-KVIB, og som ikke har noen godkjent design. Likvel er det tenkt at disse kan bli en del av KVIB etterhvert."},sidebar:"designsystemSidebar",previous:{title:"Disabled",permalink:"/kvib/designsystems/Komponenter/Knapper/disabledknappID"}},i={},u=[{value:"Vis/Skjul",id:"visskjul",level:2},{value:"Tilh\xf8rende terti\xe6rknapper med ikon",id:"tilh\xf8rende-terti\xe6rknapper-med-ikon",level:3},{value:"Knapper med kun ikon (eks. zoom-knapp)",id:"knapper-med-kun-ikon-eks-zoom-knapp",level:2},{value:"Kort",id:"kort",level:2}],p={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"OBS! Disse er IKKE GODKJENT av designer. Det mangler godkjent design i Figma-KVIB for disse komponentene, og de er dermed under konstruksjon.\nDe n\xe5v\xe6rende komponentene p\xe5 siden er basert p\xe5 en blanding av design fra kartverket.no, Figma-KVIB og Kartverket sin l\xf8sning for historiske kart.\nDe er i utgangspunktet tiltenkt \xe5 brukes i historiske kart, men kan bli del av KVIB n\xe5r de er godkjent."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"visskjul"},"Vis/Skjul"),(0,r.kt)("button",{class:"button button__blue--secondary button--xs button--icon-left"},"Vis info",(0,r.kt)("span",{class:"material-symbols-outlined "},"chevron_right")),(0,r.kt)("button",{class:"button button__blue--secondary button--xs button--icon-left"},"Skjul info",(0,r.kt)("span",{class:"material-symbols-outlined "},"chevron_left")),(0,r.kt)("button",{class:"button button__blue--secondary button--xs button--icon-right"},"Vis filter",(0,r.kt)("span",{class:"material-symbols-outlined "},"chevron_left")),(0,r.kt)("button",{class:"button button__blue--secondary button--xs button--icon-right"},"Skjul filter",(0,r.kt)("span",{class:"material-symbols-outlined"},"chevron_right")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<button class="button button__blue--secondary button--xs button--icon-left">Vis info\n    <span class="material-symbols-outlined ">chevron_right</span></button>\n\n<button class="button button__blue--secondary button--xs button--icon-left">Skjul info\n    <span class="material-symbols-outlined ">chevron_left</span></button>\n\n<button class="button button__blue--secondary button--xs button--icon-right">Vis filter\n    <span class="material-symbols-outlined ">chevron_left</span></button>\n\n<button class="button button__blue--secondary button--xs button--icon-right">Skjul filter\n    <span class="material-symbols-outlined">chevron_right</span></button>\n')),(0,r.kt)("h3",{id:"tilh\xf8rende-terti\xe6rknapper-med-ikon"},"Tilh\xf8rende terti\xe6rknapper med ikon"),(0,r.kt)("button",{class:"button button__blue--tertiary button--xs button--icon-right "},"Fjern valgt kart",(0,r.kt)("span",{class:"material-symbols-outlined--filled material-symbols-outlined"},"cancel")),(0,r.kt)("button",{class:"button button__blue--tertiary button--xs button--icon-right"},"Nullstill filter",(0,r.kt)("span",{class:"material-symbols-outlined--filled material-symbols-outlined"},"cancel")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<button class="button button__blue--tertiary button--xs button--icon-right ">Fjern valgt kart\n    <span class="material-symbols-outlined--filled material-symbols-outlined">cancel</span>\n</button>\n\n<button class="button button__blue--tertiary button--xs button--icon-right">Nullstill filter\n    <span class="material-symbols-outlined--filled material-symbols-outlined">cancel</span>\n</button>\n')),(0,r.kt)("h2",{id:"knapper-med-kun-ikon-eks-zoom-knapp"},"Knapper med kun ikon (eks. zoom-knapp)"),(0,r.kt)("p",null,"Disse knappene inneholder kun ikon, og er dermed mindre enn vanlig knapper som vanligvis ogs\xe5 inneholder tekst.\nHittil er dette tiltenkt eksempelvis zoom-knapper, som brukes i kartl\xf8sninger.\nCSS-klassen ",(0,r.kt)("code",null,".button--zoom")," endrer st\xf8rrelsen og margin til knappen."),(0,r.kt)("p",null,"OBS! Det er meningen at ",(0,r.kt)("code",null,".button--zoom")," skal brukes generelt for alle knapper som kun skal inneholde ikon."),(0,r.kt)("button",{class:"button button__blue--primary button--zoom"},(0,r.kt)("span",{class:"material-symbols-outlined"},"add")),(0,r.kt)("button",{class:"button button__blue--primary button--zoom"},(0,r.kt)("span",{class:"material-symbols-outlined"},"remove")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<button class="button button__blue--primary button--zoom">\n    <span class="material-symbols-outlined">add</span></button>\n\n<button class="button button__blue--primary button--zoom">\n    <span class="material-symbols-outlined">remove</span></button>\n')),(0,r.kt)("h2",{id:"kort"},"Kort"),(0,r.kt)("div",{class:"result__content__container"},(0,r.kt)("img",{class:"result__image",src:"https://source.unsplash.com/random",alt:"random unsplash"}),(0,r.kt)("div",{class:"result__content__desc"},(0,r.kt)("h3",{class:"result__title"},"Tittel"),(0,r.kt)("span",{class:"result__desc"},"\xc5rstall"))))}c.isMDXComponent=!0}}]);