import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-Bj2TM2QZ.js";import{c as p,a as m}from"./factory-pl1wLBYD.js";import{c as d}from"./create-recipe-context-DYiacIet.js";import{G as u}from"./grid-jasc0pCp.js";const{withPropsProvider:w,useRecipeResult:x}=d({key:"colorSwatch"}),i=h.forwardRef(function(o,a){const{value:s,...r}=o,{styles:n,className:t,props:l}=x(r);return e.jsx(p.span,{...l,ref:a,"data-value":s,css:[n,{"--color":s},o.css],className:m(t,o.className)})}),j=w(),R=c=>{const{items:o,...a}=c;if(o.length>4)throw new Error("ColorSwatchMix doesn't support more than 4 colors");const s=o.length===3;return e.jsx(i,{overflow:"hidden",...a,value:"transparent",children:e.jsx(u,{templateColumns:"var(--swatch-size) var(--swatch-size)",children:o.map((r,n)=>{const t=n===o.length-1;return e.jsx(i,{size:"inherit",rounded:"none",value:r,boxShadow:"none",gridColumn:s&&t?"span 2 / span 2":void 0,width:s&&t?"unset":void 0},r)})})})};export{i as C,j as a,R as b};
