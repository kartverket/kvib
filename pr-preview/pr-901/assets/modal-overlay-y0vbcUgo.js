import{j as k}from"./extends-CwFRzn3r.js";import{r as o}from"./index-BwDkhjyp.js";import{_ as oe,a as x,F as U,c as pe,u as ye,b as be}from"./Combination-DhNDPOzd.js";import{g as Se}from"./focusable-crJ8ziAt.js";import{c as we,m as Ce}from"./proxy-NyFW0ziH.js";import{f as K}from"./forward-ref-BWI-Phbn.js";import{c as $}from"./factory-lWLPzty5.js";import{c as q}from"./cx-BDMMs1jM.js";import{d as Me}from"./define-styles-BSAHv3yx.js";import{m as J}from"./use-merge-refs-Bdxaq0s4.js";import{c as _}from"./call-all-DDzecCnU.js";import{P as ke}from"./portal-BlJtTGys.js";import{a as Pe}from"./use-style-config-C4sZEIFb.js";import{c as ae}from"./context-CBKykClo.js";import{A as Ee}from"./index-BMuBlvl2.js";import{f as xe}from"./fade-Bhr0Adt1.js";var ce=function(e){var t=e.sideCar,r=oe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return o.createElement(n,x({},r))};ce.isSideCarExport=!0;function Re(e,t){return e.useMedium(t),ce}const Fe=U.default??U,se=e=>{const{initialFocusRef:t,finalFocusRef:r,contentRef:n,restoreFocus:a,children:l,isDisabled:f,autoFocus:c,persistentFocus:m,lockFocusAcrossFrames:h}=e,g=o.useCallback(()=>{t!=null&&t.current?t.current.focus():n!=null&&n.current&&Se(n.current).length===0&&requestAnimationFrame(()=>{var p;(p=n.current)==null||p.focus()})},[t,n]),i=o.useCallback(()=>{var v;(v=r==null?void 0:r.current)==null||v.focus()},[r]),u=a&&!r;return k.jsx(Fe,{crossFrame:h,persistentFocus:m,autoFocus:c,disabled:f,onActivation:g,onDeactivation:i,returnFocus:u,children:l})};se.displayName="FocusLock";var Ae=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},F=new WeakMap,D=new WeakMap,T={},Y=0,le=function(e){return e&&(e.host||le(e.parentNode))},Ne=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=le(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},Be=function(e,t,r,n){var a=Ne(t,Array.isArray(e)?e:[e]);T[r]||(T[r]=new WeakMap);var l=T[r],f=[],c=new Set,m=new Set(a),h=function(i){!i||c.has(i)||(c.add(i),h(i.parentNode))};a.forEach(h);var g=function(i){!i||m.has(i)||Array.prototype.forEach.call(i.children,function(u){if(c.has(u))g(u);else try{var v=u.getAttribute(n),p=v!==null&&v!=="false",s=(F.get(u)||0)+1,d=(l.get(u)||0)+1;F.set(u,s),l.set(u,d),f.push(u),s===1&&p&&D.set(u,!0),d===1&&u.setAttribute(r,"true"),p||u.setAttribute(n,"true")}catch(y){console.error("aria-hidden: cannot operate on ",u,y)}})};return g(t),c.clear(),Y++,function(){f.forEach(function(i){var u=F.get(i)-1,v=l.get(i)-1;F.set(i,u),l.set(i,v),u||(D.has(i)||i.removeAttribute(n),D.delete(i)),v||i.removeAttribute(r)}),Y--,Y||(F=new WeakMap,F=new WeakMap,D=new WeakMap,T={})}},_e=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=Ae(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live]"))),Be(n,a,r,"aria-hidden")):function(){return null}},De=Object.defineProperty,Te=(e,t,r)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ie=(e,t,r)=>(Te(e,t+"",r),r);class Le{constructor(){Ie(this,"modals"),this.modals=new Set}add(t){return this.modals.add(t),this.modals.size}remove(t){this.modals.delete(t)}isTopModal(t){if(!t)return!1;const r=Array.from(this.modals)[this.modals.size-1];return t===r}}const V=new Le;function ie(e,t){const[r,n]=o.useState(0);return o.useEffect(()=>{const a=e.current;if(a){if(t){const l=V.add(a);n(l)}return()=>{V.remove(a),n(0)}}},[t,e]),r}function We(e){const{isOpen:t,onClose:r,id:n,closeOnOverlayClick:a=!0,closeOnEsc:l=!0,useInert:f=!0,onOverlayClick:c,onEsc:m}=e,h=o.useRef(null),g=o.useRef(null),[i,u,v]=je(n,"chakra-modal","chakra-modal--header","chakra-modal--body");Oe(h,t&&f);const p=ie(h,t),s=o.useRef(null),d=o.useCallback(b=>{s.current=b.target},[]),y=o.useCallback(b=>{b.key==="Escape"&&(b.stopPropagation(),l&&(r==null||r()),m==null||m())},[l,r,m]),[w,C]=o.useState(!1),[M,S]=o.useState(!1),P=o.useCallback((b={},X=null)=>({role:"dialog",...b,ref:J(X,h),id:i,tabIndex:-1,"aria-modal":!0,"aria-labelledby":w?u:void 0,"aria-describedby":M?v:void 0,onClick:_(b.onClick,ge=>ge.stopPropagation())}),[v,M,i,u,w]),E=o.useCallback(b=>{b.stopPropagation(),s.current===b.target&&V.isTopModal(h.current)&&(a&&(r==null||r()),c==null||c())},[r,a,c]),R=o.useCallback((b={},X=null)=>({...b,ref:J(X,g),onClick:_(b.onClick,E),onKeyDown:_(b.onKeyDown,y),onMouseDown:_(b.onMouseDown,d)}),[y,d,E]);return{isOpen:t,onClose:r,headerId:u,bodyId:v,setBodyMounted:S,setHeaderMounted:C,dialogRef:h,overlayRef:g,getDialogProps:P,getDialogContainerProps:R,index:p}}function Oe(e,t){const r=e.current;o.useEffect(()=>{if(!(!e.current||!t))return _e(e.current)},[t,e,r])}function je(e,...t){const r=o.useId(),n=e||r;return o.useMemo(()=>t.map(a=>`${a}-${n}`),[n,t])}const[He,Q]=ae({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Xe,j]=ae({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Ye=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,preserveScrollBarGap:!0,motionPreset:"scale",...e,lockFocusAcrossFrames:e.lockFocusAcrossFrames||!0},{portalProps:r,children:n,autoFocus:a,trapFocus:l,initialFocusRef:f,finalFocusRef:c,returnFocusOnClose:m,blockScrollOnMount:h,allowPinchZoom:g,preserveScrollBarGap:i,motionPreset:u,lockFocusAcrossFrames:v,animatePresenceProps:p,onCloseComplete:s}=t,d=Pe("Modal",t),w={...We(t),autoFocus:a,trapFocus:l,initialFocusRef:f,finalFocusRef:c,returnFocusOnClose:m,blockScrollOnMount:h,allowPinchZoom:g,preserveScrollBarGap:i,motionPreset:u,lockFocusAcrossFrames:v};return k.jsx(Xe,{value:w,children:k.jsx(He,{value:d,children:k.jsx(Ee,{...p,onExitComplete:s,children:w.isOpen&&k.jsx(ke,{...r,children:n})})})})};Ye.displayName="Modal";var W="right-scroll-bar-position",O="width-before-scroll-bar",Ze="with-scroll-bars-hidden",ze="--removed-body-scroll-bar-size",ue=pe(),Z=function(){},H=o.forwardRef(function(e,t){var r=o.useRef(null),n=o.useState({onScrollCapture:Z,onWheelCapture:Z,onTouchMoveCapture:Z}),a=n[0],l=n[1],f=e.forwardProps,c=e.children,m=e.className,h=e.removeScrollBar,g=e.enabled,i=e.shards,u=e.sideCar,v=e.noIsolation,p=e.inert,s=e.allowPinchZoom,d=e.as,y=d===void 0?"div":d,w=e.gapMode,C=oe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),M=u,S=ye([r,t]),P=x(x({},C),a);return o.createElement(o.Fragment,null,g&&o.createElement(M,{sideCar:ue,removeScrollBar:h,shards:i,noIsolation:v,inert:p,setCallbacks:l,allowPinchZoom:!!s,lockRef:r,gapMode:w}),f?o.cloneElement(o.Children.only(c),x(x({},P),{ref:S})):o.createElement(y,x({},P,{className:m,ref:S}),c))});H.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};H.classNames={fullWidth:O,zeroRight:W};var Ve=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Ge(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ve();return t&&e.setAttribute("nonce",t),e}function Ke(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function $e(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var qe=function(){var e=0,t=null;return{add:function(r){e==0&&(t=Ge())&&(Ke(t,r),$e(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Qe=function(){var e=qe();return function(t,r){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},de=function(){var e=Qe(),t=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return t},Ue={left:0,top:0,right:0,gap:0},z=function(e){return parseInt(e||"",10)||0},Je=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[z(r),z(n),z(a)]},et=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ue;var t=Je(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},tt=de(),B="data-scroll-locked",rt=function(e,t,r,n){var a=e.left,l=e.top,f=e.right,c=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(Ze,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(c,"px ").concat(n,`;
  }
  body[`).concat(B,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(l,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(c,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(W,` {
    right: `).concat(c,"px ").concat(n,`;
  }
  
  .`).concat(O,` {
    margin-right: `).concat(c,"px ").concat(n,`;
  }
  
  .`).concat(W," .").concat(W,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(O," .").concat(O,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(B,`] {
    `).concat(ze,": ").concat(c,`px;
  }
`)},ee=function(){var e=parseInt(document.body.getAttribute(B)||"0",10);return isFinite(e)?e:0},nt=function(){o.useEffect(function(){return document.body.setAttribute(B,(ee()+1).toString()),function(){var e=ee()-1;e<=0?document.body.removeAttribute(B):document.body.setAttribute(B,e.toString())}},[])},ot=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n;nt();var l=o.useMemo(function(){return et(a)},[a]);return o.createElement(tt,{styles:rt(l,!t,a,r?"":"!important")})},G=!1;if(typeof window<"u")try{var I=Object.defineProperty({},"passive",{get:function(){return G=!0,!0}});window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch{G=!1}var A=G?{passive:!1}:!1,at=function(e){return e.tagName==="TEXTAREA"},fe=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!at(e)&&r[t]==="visible")},ct=function(e){return fe(e,"overflowY")},st=function(e){return fe(e,"overflowX")},te=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=ve(e,n);if(a){var l=me(e,n),f=l[1],c=l[2];if(f>c)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},lt=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},it=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},ve=function(e,t){return e==="v"?ct(t):st(t)},me=function(e,t){return e==="v"?lt(t):it(t)},ut=function(e,t){return e==="h"&&t==="rtl"?-1:1},dt=function(e,t,r,n,a){var l=ut(e,window.getComputedStyle(t).direction),f=l*n,c=r.target,m=t.contains(c),h=!1,g=f>0,i=0,u=0;do{var v=me(e,c),p=v[0],s=v[1],d=v[2],y=s-d-l*p;(p||y)&&ve(e,c)&&(i+=y,u+=p),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!m&&c!==document.body||m&&(t.contains(c)||t===c));return(g&&(Math.abs(i)<1||!a)||!g&&(Math.abs(u)<1||!a))&&(h=!0),h},L=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},re=function(e){return[e.deltaX,e.deltaY]},ne=function(e){return e&&"current"in e?e.current:e},ft=function(e,t){return e[0]===t[0]&&e[1]===t[1]},vt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},mt=0,N=[];function ht(e){var t=o.useRef([]),r=o.useRef([0,0]),n=o.useRef(),a=o.useState(mt++)[0],l=o.useState(de)[0],f=o.useRef(e);o.useEffect(function(){f.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var s=be([e.lockRef.current],(e.shards||[]).map(ne),!0).filter(Boolean);return s.forEach(function(d){return d.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),s.forEach(function(d){return d.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=o.useCallback(function(s,d){if("touches"in s&&s.touches.length===2||s.type==="wheel"&&s.ctrlKey)return!f.current.allowPinchZoom;var y=L(s),w=r.current,C="deltaX"in s?s.deltaX:w[0]-y[0],M="deltaY"in s?s.deltaY:w[1]-y[1],S,P=s.target,E=Math.abs(C)>Math.abs(M)?"h":"v";if("touches"in s&&E==="h"&&P.type==="range")return!1;var R=te(E,P);if(!R)return!0;if(R?S=E:(S=E==="v"?"h":"v",R=te(E,P)),!R)return!1;if(!n.current&&"changedTouches"in s&&(C||M)&&(n.current=S),!S)return!0;var b=n.current||S;return dt(b,d,s,b==="h"?C:M,!0)},[]),m=o.useCallback(function(s){var d=s;if(!(!N.length||N[N.length-1]!==l)){var y="deltaY"in d?re(d):L(d),w=t.current.filter(function(S){return S.name===d.type&&(S.target===d.target||d.target===S.shadowParent)&&ft(S.delta,y)})[0];if(w&&w.should){d.cancelable&&d.preventDefault();return}if(!w){var C=(f.current.shards||[]).map(ne).filter(Boolean).filter(function(S){return S.contains(d.target)}),M=C.length>0?c(d,C[0]):!f.current.noIsolation;M&&d.cancelable&&d.preventDefault()}}},[]),h=o.useCallback(function(s,d,y,w){var C={name:s,delta:d,target:y,should:w,shadowParent:gt(y)};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(M){return M!==C})},1)},[]),g=o.useCallback(function(s){r.current=L(s),n.current=void 0},[]),i=o.useCallback(function(s){h(s.type,re(s),s.target,c(s,e.lockRef.current))},[]),u=o.useCallback(function(s){h(s.type,L(s),s.target,c(s,e.lockRef.current))},[]);o.useEffect(function(){return N.push(l),e.setCallbacks({onScrollCapture:i,onWheelCapture:i,onTouchMoveCapture:u}),document.addEventListener("wheel",m,A),document.addEventListener("touchmove",m,A),document.addEventListener("touchstart",g,A),function(){N=N.filter(function(s){return s!==l}),document.removeEventListener("wheel",m,A),document.removeEventListener("touchmove",m,A),document.removeEventListener("touchstart",g,A)}},[]);var v=e.removeScrollBar,p=e.inert;return o.createElement(o.Fragment,null,p?o.createElement(l,{styles:vt(a)}):null,v?o.createElement(ot,{gapMode:e.gapMode}):null)}function gt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const pt=Re(ue,ht);var he=o.forwardRef(function(e,t){return o.createElement(H,x({},e,{ref:t,sideCar:pt}))});he.classNames=H.classNames;function Wt(e){const{autoFocus:t,trapFocus:r,dialogRef:n,initialFocusRef:a,blockScrollOnMount:l,allowPinchZoom:f,finalFocusRef:c,returnFocusOnClose:m,preserveScrollBarGap:h,lockFocusAcrossFrames:g,isOpen:i}=j(),[u,v]=we();o.useEffect(()=>{!u&&v&&setTimeout(v)},[u,v]);const p=ie(n,i);return k.jsx(se,{autoFocus:t,isDisabled:!r,initialFocusRef:a,finalFocusRef:c,restoreFocus:m,contentRef:n,lockFocusAcrossFrames:g,children:k.jsx(he,{removeScrollBar:!h,allowPinchZoom:f,enabled:p===1&&l,forwardProps:!0,children:e.children})})}const yt=K((e,t)=>{const{className:r,...n}=e,{bodyId:a,setBodyMounted:l}=j();o.useEffect(()=>(l(!0),()=>l(!1)),[l]);const f=q("chakra-modal__body",r),c=Q();return k.jsx($.div,{ref:t,className:f,id:a,...n,__css:c.body})});yt.displayName="ModalBody";const bt=K((e,t)=>{const{className:r,...n}=e,{headerId:a,setHeaderMounted:l}=j();o.useEffect(()=>(l(!0),()=>l(!1)),[l]);const f=q("chakra-modal__header",r),c=Q(),m=Me({flex:0,...c.header});return k.jsx($.header,{ref:t,className:f,id:a,...n,__css:m})});bt.displayName="ModalHeader";const St=$(Ce.div),wt=K((e,t)=>{const{className:r,transition:n,motionProps:a,...l}=e,f=q("chakra-modal__overlay",r),m={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...Q().overlay},{motionPreset:h}=j(),i=a||(h==="none"?{}:xe);return k.jsx(St,{...i,__css:m,ref:t,className:f,...l})});wt.displayName="ModalOverlay";export{wt as M,bt as a,yt as b,Q as c,Wt as d,Ye as e,j as u};
