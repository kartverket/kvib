import{f as x,c as i,a as b,o as C,d as E,q as I}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{j as o}from"./extends-CwFRzn3r.js";import{u as P}from"./chunk-56K2BSAJ-DEJm4C0m.js";import{a as z}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{r as f}from"./index-BwDkhjyp.js";var v=x(function(l,s){const{children:t,placeholder:r,className:n,...a}=l;return o.jsxs(i.select,{...a,ref:s,className:b("chakra-select",n),children:[r&&o.jsx("option",{value:"",children:r}),t]})});v.displayName="SelectField";function F(e,l){const s={},t={};for(const[r,n]of Object.entries(e))l.includes(r)?s[r]=n:t[r]=n;return[s,t]}var H=x((e,l)=>{var s;const t=z("Select",e),{rootProps:r,placeholder:n,icon:a,color:c,height:_,h:d,minH:m,minHeight:y,iconColor:h,iconSize:p,...j}=C(e),[g,N]=F(j,I),u=P(N),k={width:"100%",height:"fit-content",position:"relative",color:c},w={paddingEnd:"2rem",...t.field,_focus:{zIndex:"unset",...(s=t.field)==null?void 0:s._focus}};return o.jsxs(i.div,{className:"chakra-select__wrapper",__css:k,...g,...r,children:[o.jsx(v,{ref:l,height:d??_,minH:m??y,placeholder:n,...u,__css:w,children:e.children}),o.jsx(S,{"data-disabled":E(u.disabled),...(h||c)&&{color:h||c},__css:t.icon,...p&&{fontSize:p},children:a})]})});H.displayName="Select";var M=e=>o.jsx("svg",{viewBox:"0 0 24 24",...e,children:o.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),R=i("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),S=e=>{const{children:l=o.jsx(M,{}),...s}=e,t=f.cloneElement(l,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return o.jsx(R,{...s,className:"chakra-select__icon-wrapper",children:f.isValidElement(l)?t:null})};S.displayName="SelectIcon";export{H as S};
