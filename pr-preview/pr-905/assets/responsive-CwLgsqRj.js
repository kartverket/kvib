import{i as a}from"./factory-DBKMNJMh.js";const i=Object.freeze(["base","sm","md","lg","xl","2xl"]);function c(n,r){return Array.isArray(n)?n.map(t=>t===null?null:r(t)):a(n)?Object.keys(n).reduce((t,e)=>(t[e]=r(n[e]),t),{}):n!=null?r(n):null}function f(n,r=i){const t={};return n.forEach((e,s)=>{const u=r[s];e!=null&&(t[u]=e)}),t}export{f as a,i as b,c as m};
