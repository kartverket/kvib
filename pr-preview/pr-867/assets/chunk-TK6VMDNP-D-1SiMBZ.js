import{i as ae}from"./chunk-3XANSPY5-CEuNXLts.js";import{u as le,c as V}from"./chunk-LUYFNC5G-DV8XJogC.js";import{u as ce}from"./index-DOEX-ehf.js";import{u as K}from"./index-Bvkiv1cC.js";import{m as ue}from"./index-Bdxaq0s4.js";import{e as E,c as y,f as pe,o as de,v as me}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{r as n}from"./index-BwDkhjyp.js";import{P as fe}from"./chunk-34PD6CUK-B1dqEPkL.js";import{u as ge}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{u as we}from"./chunk-UIGT7YZF-XoNRsZNz.js";import{j as a}from"./extends-CwFRzn3r.js";import{m as ve}from"./proxy-CzVOQe18.js";import{A as Pe}from"./index-CBajw-n2.js";function he(e){const t=e.ownerDocument.defaultView||window,{overflow:o,overflowX:i,overflowY:c}=t.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(o+c+i)}function be(e){return e.localName==="html"?e:e.assignedSlot||e.parentElement||e.ownerDocument.documentElement}function U(e){return["html","body","#document"].includes(e.localName)?e.ownerDocument.body:ae(e)&&he(e)?e:U(be(e))}var ye={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},Y=e=>{var t;return((t=e.current)==null?void 0:t.ownerDocument)||document},W=e=>{var t,o;return((o=(t=e.current)==null?void 0:t.ownerDocument)==null?void 0:o.defaultView)||window};function Ce(e={}){const{openDelay:t=0,closeDelay:o=0,closeOnClick:i=!0,closeOnMouseDown:c,closeOnScroll:T,closeOnPointerDown:C=c,closeOnEsc:f=!0,onOpen:O,onClose:z,placement:D,id:_,isOpen:B,defaultIsOpen:F,arrowSize:g=10,arrowShadowColor:j,arrowPadding:M,modifiers:H,isDisabled:w,gutter:k,offset:m,direction:$,...v}=e,{isOpen:s,onOpen:P,onClose:h}=ce({isOpen:B,defaultIsOpen:F,onOpen:O,onClose:z}),{referenceRef:S,getPopperProps:u,getArrowInnerProps:Z,getArrowProps:ee}=le({enabled:s,placement:D,arrowPadding:M,modifiers:H,gutter:k,offset:m,direction:$}),oe=n.useId(),I=`tooltip-${_??oe}`,p=n.useRef(null),x=n.useRef(),b=n.useCallback(()=>{x.current&&(clearTimeout(x.current),x.current=void 0)},[]),N=n.useRef(),R=n.useCallback(()=>{N.current&&(clearTimeout(N.current),N.current=void 0)},[]),A=n.useCallback(()=>{R(),h()},[h,R]),q=ke(p,A),L=n.useCallback(()=>{if(!w&&!x.current){s&&q();const r=W(p);x.current=r.setTimeout(P,t)}},[q,w,s,P,t]),l=n.useCallback(()=>{b();const r=W(p);N.current=r.setTimeout(A,o)},[o,A,b]),G=n.useCallback(()=>{s&&i&&l()},[i,l,s]),J=n.useCallback(()=>{s&&C&&l()},[C,l,s]),re=n.useCallback(r=>{s&&r.key==="Escape"&&l()},[s,l]);K(()=>Y(p),"keydown",f?re:void 0),K(()=>{if(!T)return null;const r=p.current;if(!r)return null;const d=U(r);return d.localName==="body"?W(p):d},"scroll",()=>{s&&T&&A()},{passive:!0,capture:!0}),n.useEffect(()=>{w&&(b(),s&&h())},[w,s,h,b]),n.useEffect(()=>()=>{b(),R()},[b,R]),K(()=>p.current,"pointerleave",l);const te=n.useCallback((r={},d=null)=>({...r,ref:ue(p,d,S),onPointerEnter:E(r.onPointerEnter,ie=>{ie.pointerType!=="touch"&&L()}),onClick:E(r.onClick,G),onPointerDown:E(r.onPointerDown,J),onFocus:E(r.onFocus,L),onBlur:E(r.onBlur,l),"aria-describedby":s?I:void 0}),[L,l,J,s,I,G,S]),ne=n.useCallback((r={},d=null)=>u({...r,style:{...r.style,[V.arrowSize.var]:g?`${g}px`:void 0,[V.arrowShadowColor.var]:j}},d),[u,g,j]),se=n.useCallback((r={},d=null)=>{const Q={...r.style,position:"relative",transformOrigin:V.transformOrigin.varRef};return{ref:d,...v,...r,id:I,role:"tooltip",style:Q}},[v,I]);return{isOpen:s,show:L,hide:l,getTriggerProps:te,getTooltipProps:se,getTooltipPositionerProps:ne,getArrowProps:ee,getArrowInnerProps:Z}}var X="chakra-ui:close-tooltip";function ke(e,t){return n.useEffect(()=>{const o=Y(e);return o.addEventListener(X,t),()=>o.removeEventListener(X,t)},[t,e]),()=>{const o=Y(e),i=W(e);o.dispatchEvent(new i.CustomEvent(X))}}function xe(e,t=[]){const o=Object.assign({},e);for(const i of t)i in o&&delete o[i];return o}function Ee(e,t){const o={};for(const i of t)i in e&&(o[i]=e[i]);return o}var Te=y(ve.div),Oe=pe((e,t)=>{var o,i;const c=ge("Tooltip",e),T=de(e),C=we(),{children:f,label:O,shouldWrapChildren:z,"aria-label":D,hasArrow:_,bg:B,portalProps:F,background:g,backgroundColor:j,bgColor:M,motionProps:H,...w}=T,k=(i=(o=g??j)!=null?o:B)!=null?i:M;if(k){c.bg=k;const u=me(C,"colors",k);c[V.arrowBg.var]=u}const m=Ce({...w,direction:C.direction}),$=typeof f=="string"||z;let v;if($)v=a.jsx(y.span,{display:"inline-block",tabIndex:0,...m.getTriggerProps(),children:f});else{const u=n.Children.only(f);v=n.cloneElement(u,m.getTriggerProps(u.props,u.ref))}const s=!!D,P=m.getTooltipProps({},t),h=s?xe(P,["role","id"]):P,S=Ee(P,["role","id"]);return O?a.jsxs(a.Fragment,{children:[v,a.jsx(Pe,{children:m.isOpen&&a.jsx(fe,{...F,children:a.jsx(y.div,{...m.getTooltipPositionerProps(),__css:{zIndex:c.zIndex,pointerEvents:"none"},children:a.jsxs(Te,{variants:ye,initial:"exit",animate:"enter",exit:"exit",...H,...h,__css:c,children:[O,s&&a.jsx(y.span,{srOnly:!0,...S,children:D}),_&&a.jsx(y.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:a.jsx(y.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:c.bg}})})]})})})})]}):a.jsx(a.Fragment,{children:f})});Oe.displayName="Tooltip";export{Oe as T};