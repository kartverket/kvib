import{r as i}from"./index-BwDkhjyp.js";import{c as P}from"./index-CHDWSgKD.js";import{a as x,c as m,f as w,o as A,d as j}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{j as n}from"./extends-CwFRzn3r.js";import{S as G}from"./chunk-5PH6ULNP-B_hWxh7m.js";import{u as M}from"./index-Bdxaq0s4.js";import{u as R}from"./chunk-DMO4EI7P-D6u3hnqn.js";var[K,z]=P({strict:!1,name:"ButtonGroupContext"});function D(r){const[t,e]=i.useState(!r);return{ref:i.useCallback(a=>{a&&e(a.tagName==="BUTTON")},[]),type:t?"button":void 0}}function h(r){const{children:t,className:e,...s}=r,o=i.isValidElement(t)?i.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,a=x("chakra-button__icon",e);return n.jsx(m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...s,className:a,children:o})}h.displayName="ButtonIcon";function g(r){const{label:t,placement:e,spacing:s="0.5rem",children:o=n.jsx(G,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:l,...p}=r,d=x("chakra-button__spinner",a),u=e==="start"?"marginEnd":"marginStart",c=i.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?s:0,fontSize:"1em",lineHeight:"normal",...l}),[l,t,u,s]);return n.jsx(m.div,{className:d,...p,__css:c,children:o})}g.displayName="ButtonSpinner";var F=w((r,t)=>{const e=z(),s=R("Button",{...e,...r}),{isDisabled:o=e==null?void 0:e.isDisabled,isLoading:a,isActive:l,children:p,leftIcon:d,rightIcon:u,loadingText:c,iconSpacing:f="0.5rem",type:_,spinner:b,spinnerPlacement:y="start",className:v,as:S,...k}=A(r),I=i.useMemo(()=>{const T={...s==null?void 0:s._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...s,...!!e&&{_focus:T}}},[s,e]),{ref:C,type:E}=D(S),B={rightIcon:u,leftIcon:d,iconSpacing:f,children:p};return n.jsxs(m.button,{ref:M(t,C),as:S,type:_??E,"data-active":j(l),"data-loading":j(a),__css:I,className:x("chakra-button",v),...k,disabled:o||a,children:[a&&y==="start"&&n.jsx(g,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:f,children:b}),a?c||n.jsx(m.span,{opacity:0,children:n.jsx(N,{...B})}):n.jsx(N,{...B}),a&&y==="end"&&n.jsx(g,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:f,children:b})]})});F.displayName="Button";function N(r){const{leftIcon:t,rightIcon:e,children:s,iconSpacing:o}=r;return n.jsxs(n.Fragment,{children:[t&&n.jsx(h,{marginEnd:o,children:t}),s,e&&n.jsx(h,{marginStart:o,children:e})]})}export{F as B,K as a};