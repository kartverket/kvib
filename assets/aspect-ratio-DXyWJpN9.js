import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-Bj2TM2QZ.js";import{i as s,c as h,a as b}from"./factory-BXJ64pFW.js";import{m as k}from"./walk-object-DMmPhGdx.js";function o(e){if(e===null||typeof e!="object")return e;if(Array.isArray(e))return e.map(n=>o(n));const t=Object.create(Object.getPrototypeOf(e));for(const n of Object.keys(e))t[n]=o(e[n]);return t}function c(e,t){if(t==null)return e;for(const n of Object.keys(t))if(!(t[n]===void 0||n==="__proto__"))if(!s(e[n])&&s(t[n]))Object.assign(e,{[n]:t[n]});else if(e[n]&&s(t[n]))c(e[n],t[n]);else if(Array.isArray(t[n])&&Array.isArray(e[n])){let i=0;for(;i<t[n].length;i++)s(e[n][i])&&s(t[n][i])?c(e[n][i],t[n][i]):e[n][i]=t[n][i]}else Object.assign(e,{[n]:t[n]});return e}function u(e,...t){for(const n of t)c(e,n);return e}const v=e=>e,R=e=>e,_=e=>e,C=e=>e,w=e=>e,x=e=>e,P=e=>e,T=e=>e,E=e=>e;function a(){const e=t=>t;return new Proxy(e,{get(){return e}})}const N=a(),B=a(),F=e=>e,G=(...e)=>u({},...e.map(o)),A=x({"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}),I=r.forwardRef(function(t,n){const{ratio:i=4/3,children:f,className:l,...d}=t,y=r.Children.only(f);return p.jsx(h.div,{ref:n,position:"relative",className:b("chakra-aspect-ratio",l),_before:{height:0,content:'""',display:"block",paddingBottom:k(i,m=>`${1/m*100}%`)},...d,css:[A,t.css],children:y})});export{I as A,v as a,G as b,w as c,F as d,E as e,T as f,R as g,B as h,_ as i,x as j,P as k,N as l,u as m,C as n};
