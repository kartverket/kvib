import{u as v}from"./index-Bvkiv1cC.js";function p(n){return"current"in n}var s=()=>typeof window<"u";function d(){var n;const e=navigator.userAgentData;return(n=e==null?void 0:e.platform)!=null?n:navigator.platform}var f=n=>s()&&n.test(navigator.vendor),m=n=>s()&&n.test(d()),g=()=>m(/mac|iphone|ipad|ipod/i),w=()=>g()&&f(/apple/i);function _(n){const{ref:e,elements:i,enabled:l}=n,u=()=>{var r,t;return(t=(r=e.current)==null?void 0:r.ownerDocument)!=null?t:document};v(u,"pointerdown",r=>{if(!w()||!l)return;const t=r.target,c=(i??[e]).some(o=>{const a=p(o)?o.current:o;return(a==null?void 0:a.contains(t))||a===t});u().activeElement!==t&&c&&(r.preventDefault(),t.focus())})}export{_ as u};