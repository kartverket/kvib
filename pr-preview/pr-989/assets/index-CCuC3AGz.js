import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as h}from"./index-Cjd7pOeM.js";import{c as p,a as d}from"./factory-BVqvlKn7.js";import{c as m}from"./create-recipe-context-1tZJ095y.js";import{G as u}from"./grid-BPolKxUh.js";const{withPropsProvider:w,useRecipeResult:x}=m({key:"colorSwatch"}),i=h.forwardRef(function(o,a){const{value:s,...r}=o,{styles:n,className:e,props:l}=x(r);return t.jsx(p.span,{...l,ref:a,"data-value":s,css:[n,{"--color":s},o.css],className:d(e,o.className)})}),j=w(),R=c=>{const{items:o,...a}=c;if(o.length>4)throw new Error("ColorSwatchMix doesn't support more than 4 colors");const s=o.length===3;return t.jsx(i,{overflow:"hidden",...a,value:"transparent",children:t.jsx(u,{templateColumns:"var(--swatch-size) var(--swatch-size)",children:o.map((r,n)=>{const e=n===o.length-1;return t.jsx(i,{size:"inherit",rounded:"none",value:r,boxShadow:"none",gridColumn:s&&e?"span 2 / span 2":void 0,width:s&&e?"unset":void 0},r)})})})};export{i as C,R as a,j as b};
