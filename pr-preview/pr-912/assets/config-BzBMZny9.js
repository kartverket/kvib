import{i as t}from"./is-D1VN0Vzs.js";function f(e){if(e===null||typeof e!="object")return e;if(Array.isArray(e))return e.map(n=>f(n));const i=Object.create(Object.getPrototypeOf(e));for(const n of Object.keys(e))i[n]=f(e[n]);return i}function o(e,i){if(i==null)return e;for(const n of Object.keys(i))if(!(i[n]===void 0||n==="__proto__"))if(!t(e[n])&&t(i[n]))Object.assign(e,{[n]:i[n]});else if(e[n]&&t(i[n]))o(e[n],i[n]);else if(Array.isArray(i[n])&&Array.isArray(e[n])){let s=0;for(;s<i[n].length;s++)t(e[n][s])&&t(i[n][s])?o(e[n][s],i[n][s]):e[n][s]=i[n][s]}else Object.assign(e,{[n]:i[n]});return e}function r(e,...i){for(const n of i)o(e,n);return e}const y=e=>e,l=e=>e,d=e=>e,m=e=>e,p=e=>e,O=e=>e,k=e=>e,A=e=>e,S=e=>e;function c(){const e=i=>i;return new Proxy(e,{get(){return e}})}const u=c(),_=c(),x=e=>e,b=(...e)=>r({},...e.map(f));export{d as a,O as b,x as c,l as d,y as e,r as f,p as g,S as h,A as i,_ as j,k,u as l,b as m,m as n};