import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as p}from"./index-Cjd7pOeM.js";import{m as s}from"./walk-object-2Xl5z3JH.js";import{u as f}from"./factory-BVqvlKn7.js";import{G as l}from"./grid-BPolKxUh.js";const S=p.forwardRef(function(r,o){const{columns:n,minChildWidth:m,...e}=r,i=f(),u=m?x(m,i):d(n);return a.jsx(l,{ref:o,templateColumns:u,...e})});function c(t){return typeof t=="number"?`${t}px`:t}function x(t,r){return s(t,o=>{const n=r.tokens.getVar(`sizes.${o}`,c(o));return o===null?null:`repeat(auto-fit, minmax(${n}, 1fr))`})}function d(t){return s(t,r=>r===null?null:`repeat(${r}, minmax(0, 1fr))`)}export{S};
