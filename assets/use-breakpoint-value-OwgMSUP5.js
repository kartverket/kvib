import{b as m,a as u}from"./responsive-ClFn5vzN.js";import{u as k}from"./use-media-query-DZQeksUW.js";import{u as p}from"./use-theme-CBfqdygA.js";import{i as b}from"./factory-CdGA0D9p.js";function l(e){var i;const t=b(e)?e:{fallback:e??"base"},r=p().__breakpoints.details.map(({minMaxQuery:n,breakpoint:f})=>({breakpoint:f,query:n.replace("@media screen and ","")})),o=r.map(n=>n.breakpoint===t.fallback),c=k(r.map(n=>n.query),{fallback:o,ssr:t.ssr}).findIndex(n=>n==!0);return((i=r[c])==null?void 0:i.breakpoint)??t.fallback}function d(e,t,a=m){let r=Object.keys(e).indexOf(t);if(r!==-1)return e[t];let o=a.indexOf(t);for(;o>=0;){const s=a[o];if(e.hasOwnProperty(s)){r=o;break}o-=1}if(r!==-1){const s=a[r];return e[s]}}function j(e,t){var i;const a=b(t)?t:{fallback:t??"base"},r=l(a),o=p();if(!r)return;const s=Array.from(((i=o.__breakpoints)==null?void 0:i.keys)||[]),c=Array.isArray(e)?Object.fromEntries(Object.entries(u(e,s)).map(([n,f])=>[n,f])):e;return d(c,r,s)}export{j as u};
