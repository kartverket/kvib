import{j as a}from"./jsx-runtime-sfY7k0Xq.js";import{r as p}from"./index-CcKhGcwW.js";import{u as f}from"./factory-Dr_T95xI.js";import{m as s}from"./walk-object-MOVJDcbI.js";import{G as l}from"./grid-BtoyrwbI.js";const S=p.forwardRef(function(r,o){const{columns:n,minChildWidth:m,...e}=r,i=f(),u=m?x(m,i):d(n);return a.jsx(l,{ref:o,templateColumns:u,...e})});function c(t){return typeof t=="number"?`${t}px`:t}function x(t,r){return s(t,o=>{const n=r.tokens.getVar(`sizes.${o}`,c(o));return o===null?null:`repeat(auto-fit, minmax(${n}, 1fr))`})}function d(t){return s(t,r=>r===null?null:`repeat(${r}, minmax(0, 1fr))`)}export{S};
