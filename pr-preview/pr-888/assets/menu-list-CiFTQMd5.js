import{j as s}from"./extends-CwFRzn3r.js";import{u as d,d as f,e as b,b as j,f as N,g as S,h as I}from"./menu-icon-dBjBmMra.js";import{f as c}from"./forward-ref-BWI-Phbn.js";import{c as m}from"./factory-C6UFhaBW.js";import{c as _}from"./cx-BDMMs1jM.js";import{r as g}from"./index-BwDkhjyp.js";import{m as v}from"./proxy-CQsau1XN.js";import{a as E}from"./call-all-DDzecCnU.js";const P=c((t,e)=>{const n=d();return s.jsx(m.button,{ref:e,...t,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...n.button}})}),C=c((t,e)=>{const{children:n,as:a,...o}=t,r=f(o,e),i=a||P;return s.jsx(i,{...r,className:_("chakra-menu__menu-button",t.className),children:s.jsx(m.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:t.children})})});C.displayName="MenuButton";const M=c((t,e)=>{const n=d();return s.jsx(m.span,{ref:e,...t,__css:n.command,className:"chakra-menu__command"})});M.displayName="MenuCommand";const k=c((t,e)=>{const{type:n,...a}=t,o=d(),r=a.as||n?n??void 0:"button",i=g.useMemo(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...o.item}),[o.item]);return s.jsx(m.button,{ref:e,type:r,...a,__css:i})}),A=c((t,e)=>{const{icon:n,iconSpacing:a="0.75rem",command:o,commandSpacing:r="0.75rem",children:i,...p}=t,l=b(p,e),x=n||o?s.jsx("span",{style:{pointerEvents:"none",flex:1},children:i}):i;return s.jsxs(k,{...l,className:_("chakra-menu__menuitem",l.className),children:[n&&s.jsx(j,{fontSize:"0.8em",marginEnd:a,children:n}),x,o&&s.jsx(M,{marginStart:r,children:o})]})});A.displayName="MenuItem";const z={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},B=m(v.div),L=c(function(e,n){var h;const{rootProps:a,motionProps:o,...r}=e,{isOpen:i,onTransitionEnd:p,unstable__animationState:l}=N(),u=S(r,n),x=I(a),y=d();return s.jsx(m.div,{...x,__css:{zIndex:e.zIndex??((h=y.list)==null?void 0:h.zIndex)},children:s.jsx(B,{variants:z,initial:!1,animate:i?"enter":"exit",__css:{outline:0,...y.list},...o,...u,className:_("chakra-menu__menu-list",u.className),onUpdate:p,onAnimationComplete:E(l.onComplete,u.onAnimationComplete)})})});L.displayName="MenuList";export{C as M,k as S,L as a,A as b};
