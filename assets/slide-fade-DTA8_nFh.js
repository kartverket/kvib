import{j as p}from"./extends-CwFRzn3r.js";import{r as w}from"./index-BwDkhjyp.js";import{w as a,T as o}from"./transition-utils-CnxNY5SP.js";import{A}from"./index-BMuBlvl2.js";import{m as T}from"./proxy-NyFW0ziH.js";import{c as v}from"./cx-BDMMs1jM.js";const O={initial:({offsetX:x,offsetY:m,transition:t,transitionEnd:e,delay:s})=>({opacity:0,x,y:m,transition:(t==null?void 0:t.exit)??a.exit(o.exit,s),transitionEnd:e==null?void 0:e.exit}),enter:({transition:x,transitionEnd:m,delay:t})=>({opacity:1,x:0,y:0,transition:(x==null?void 0:x.enter)??a.enter(o.enter,t),transitionEnd:m==null?void 0:m.enter}),exit:({offsetY:x,offsetX:m,transition:t,transitionEnd:e,reverse:s,delay:r})=>{const c={x:m,y:x};return{opacity:0,transition:(t==null?void 0:t.exit)??a.exit(o.exit,r),...s?{...c,transitionEnd:e==null?void 0:e.exit}:{transitionEnd:{...c,...e==null?void 0:e.exit}}}}},P={initial:"initial",animate:"enter",exit:"exit",variants:O},R=w.forwardRef(function(m,t){const{unmountOnExit:e,in:s,reverse:r=!0,className:c,offsetX:l=0,offsetY:i=8,transition:u,transitionEnd:y,delay:S,animatePresenceProps:F,...N}=m,h=e?s&&e:!0,j=s||e?"enter":"exit",f={offsetX:l,offsetY:i,reverse:r,transition:u,transitionEnd:y,delay:S};return p.jsx(A,{...F,custom:f,children:h&&p.jsx(T.div,{ref:t,className:v("chakra-offset-slide",c),custom:f,...P,animate:j,...N})})});R.displayName="SlideFade";export{R as S,P as s};