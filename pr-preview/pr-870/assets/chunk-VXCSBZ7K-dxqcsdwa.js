import{u as l}from"./chunk-57I6FYPZ-CwnaZWLD.js";import{u as c}from"./chunk-UIGT7YZF-XoNRsZNz.js";import{j as b}from"./extends-CwFRzn3r.js";function d(e){const{breakpoint:n,hide:i,children:o,ssr:s}=e,[r]=l(n,{ssr:s});return(i?!r:r)?o:null}var a=(e,n)=>{var i,o;return(o=(i=e==null?void 0:e.breakpoints)==null?void 0:i[n])!=null?o:n};function m(e){const{breakpoint:n="",below:i,above:o}=e,s=c(),r=a(s,i),u=a(s,o);let t=n;return r?t=`(max-width: ${r})`:u&&(t=`(min-width: ${u})`),t}function p(e){const{children:n,ssr:i}=e,o=m(e);return b.jsx(d,{breakpoint:o,ssr:i,children:n})}p.displayName="Show";export{p as S,d as V,m as u};