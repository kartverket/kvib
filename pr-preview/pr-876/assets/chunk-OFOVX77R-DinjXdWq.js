import{_ as oe,a as R,F as U,c as ye,u as be,b as Se}from"./Combination-DhNDPOzd.js";import{g as we}from"./index-yX8pBrvj.js";import{r as a}from"./index-BwDkhjyp.js";import{j as k}from"./extends-CwFRzn3r.js";import{c as Ce,m as Me}from"./proxy-CzVOQe18.js";import{e as B,f as G,a as $,c as q}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{f as ke}from"./chunk-TR226DUX-lxgF3bJX.js";import{m as J}from"./index-Bdxaq0s4.js";import{P as Pe}from"./chunk-34PD6CUK-B1dqEPkL.js";import{c as ce}from"./index-CHDWSgKD.js";import{a as Ee}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{A as Re}from"./index-CBajw-n2.js";var le=function(e){var t=e.sideCar,r=oe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return a.createElement(n,R({},r))};le.isSideCarExport=!0;function xe(e,t){return e.useMedium(t),le}var ee,Fe=(ee=U.default)!=null?ee:U,se=e=>{const{initialFocusRef:t,finalFocusRef:r,contentRef:n,restoreFocus:o,children:s,isDisabled:f,autoFocus:c,persistentFocus:m,lockFocusAcrossFrames:h}=e,g=a.useCallback(()=>{t!=null&&t.current?t.current.focus():n!=null&&n.current&&we(n.current).length===0&&requestAnimationFrame(()=>{var y;(y=n.current)==null||y.focus()})},[t,n]),i=a.useCallback(()=>{var v;(v=r==null?void 0:r.current)==null||v.focus()},[r]),u=o&&!r;return k.jsx(Fe,{crossFrame:h,persistentFocus:m,autoFocus:c,disabled:f,onActivation:g,onDeactivation:i,returnFocus:u,children:s})};se.displayName="FocusLock";var Ae=Object.defineProperty,Ne=(e,t,r)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_e=(e,t,r)=>(Ne(e,t+"",r),r),Be=class{constructor(){_e(this,"modals"),this.modals=new Map}add(e){return this.modals.set(e,this.modals.size+1),this.modals.size}remove(e){this.modals.delete(e)}isTopModal(e){return e?this.modals.get(e)===this.modals.size:!1}},V=new Be;function ie(e,t){const[r,n]=a.useState(0);return a.useEffect(()=>{const o=e.current;if(o){if(t){const s=V.add(o);n(s)}return()=>{V.remove(o),n(0)}}},[t,e]),r}var De=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},F=new WeakMap,D=new WeakMap,T={},Y=0,ue=function(e){return e&&(e.host||ue(e.parentNode))},Te=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=ue(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},Ie=function(e,t,r,n){var o=Te(t,Array.isArray(e)?e:[e]);T[r]||(T[r]=new WeakMap);var s=T[r],f=[],c=new Set,m=new Set(o),h=function(i){!i||c.has(i)||(c.add(i),h(i.parentNode))};o.forEach(h);var g=function(i){!i||m.has(i)||Array.prototype.forEach.call(i.children,function(u){if(c.has(u))g(u);else try{var v=u.getAttribute(n),y=v!==null&&v!=="false",l=(F.get(u)||0)+1,d=(s.get(u)||0)+1;F.set(u,l),s.set(u,d),f.push(u),l===1&&y&&D.set(u,!0),d===1&&u.setAttribute(r,"true"),y||u.setAttribute(n,"true")}catch(p){console.error("aria-hidden: cannot operate on ",u,p)}})};return g(t),c.clear(),Y++,function(){f.forEach(function(i){var u=F.get(i)-1,v=s.get(i)-1;F.set(i,u),s.set(i,v),u||(D.has(i)||i.removeAttribute(n),D.delete(i)),v||i.removeAttribute(r)}),Y--,Y||(F=new WeakMap,F=new WeakMap,D=new WeakMap,T={})}},Le=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),o=De(e);return o?(n.push.apply(n,Array.from(o.querySelectorAll("[aria-live]"))),Ie(n,o,r,"aria-hidden")):function(){return null}};function Oe(e){const{isOpen:t,onClose:r,id:n,closeOnOverlayClick:o=!0,closeOnEsc:s=!0,useInert:f=!0,onOverlayClick:c,onEsc:m}=e,h=a.useRef(null),g=a.useRef(null),[i,u,v]=je(n,"chakra-modal","chakra-modal--header","chakra-modal--body");We(h,t&&f);const y=ie(h,t),l=a.useRef(null),d=a.useCallback(b=>{l.current=b.target},[]),p=a.useCallback(b=>{b.key==="Escape"&&(b.stopPropagation(),s&&(r==null||r()),m==null||m())},[s,r,m]),[w,C]=a.useState(!1),[M,S]=a.useState(!1),P=a.useCallback((b={},X=null)=>({role:"dialog",...b,ref:J(X,h),id:i,tabIndex:-1,"aria-modal":!0,"aria-labelledby":w?u:void 0,"aria-describedby":M?v:void 0,onClick:B(b.onClick,pe=>pe.stopPropagation())}),[v,M,i,u,w]),E=a.useCallback(b=>{b.stopPropagation(),l.current===b.target&&V.isTopModal(h.current)&&(o&&(r==null||r()),c==null||c())},[r,o,c]),x=a.useCallback((b={},X=null)=>({...b,ref:J(X,g),onClick:B(b.onClick,E),onKeyDown:B(b.onKeyDown,p),onMouseDown:B(b.onMouseDown,d)}),[p,d,E]);return{isOpen:t,onClose:r,headerId:u,bodyId:v,setBodyMounted:S,setHeaderMounted:C,dialogRef:h,overlayRef:g,getDialogProps:P,getDialogContainerProps:x,index:y}}function We(e,t){const r=e.current;a.useEffect(()=>{if(!(!e.current||!t))return Le(e.current)},[t,e,r])}function je(e,...t){const r=a.useId(),n=e||r;return a.useMemo(()=>t.map(o=>`${o}-${n}`),[n,t])}var[He,Q]=ce({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Xe,j]=ce({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Ye=e=>{const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...e},{portalProps:r,children:n,autoFocus:o,trapFocus:s,initialFocusRef:f,finalFocusRef:c,returnFocusOnClose:m,blockScrollOnMount:h,allowPinchZoom:g,preserveScrollBarGap:i,motionPreset:u,lockFocusAcrossFrames:v,onCloseComplete:y}=t,l=Ee("Modal",t),p={...Oe(t),autoFocus:o,trapFocus:s,initialFocusRef:f,finalFocusRef:c,returnFocusOnClose:m,blockScrollOnMount:h,allowPinchZoom:g,preserveScrollBarGap:i,motionPreset:u,lockFocusAcrossFrames:v};return k.jsx(Xe,{value:p,children:k.jsx(He,{value:l,children:k.jsx(Re,{onExitComplete:y,children:p.isOpen&&k.jsx(Pe,{...r,children:n})})})})};Ye.displayName="Modal";var O="right-scroll-bar-position",W="width-before-scroll-bar",ze="with-scroll-bars-hidden",Ze="--removed-body-scroll-bar-size",de=ye(),z=function(){},H=a.forwardRef(function(e,t){var r=a.useRef(null),n=a.useState({onScrollCapture:z,onWheelCapture:z,onTouchMoveCapture:z}),o=n[0],s=n[1],f=e.forwardProps,c=e.children,m=e.className,h=e.removeScrollBar,g=e.enabled,i=e.shards,u=e.sideCar,v=e.noIsolation,y=e.inert,l=e.allowPinchZoom,d=e.as,p=d===void 0?"div":d,w=e.gapMode,C=oe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),M=u,S=be([r,t]),P=R(R({},C),o);return a.createElement(a.Fragment,null,g&&a.createElement(M,{sideCar:de,removeScrollBar:h,shards:i,noIsolation:v,inert:y,setCallbacks:s,allowPinchZoom:!!l,lockRef:r,gapMode:w}),f?a.cloneElement(a.Children.only(c),R(R({},P),{ref:S})):a.createElement(p,R({},P,{className:m,ref:S}),c))});H.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};H.classNames={fullWidth:W,zeroRight:O};var Ve=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Ke(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ve();return t&&e.setAttribute("nonce",t),e}function Ge(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function $e(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var qe=function(){var e=0,t=null;return{add:function(r){e==0&&(t=Ke())&&(Ge(t,r),$e(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Qe=function(){var e=qe();return function(t,r){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},fe=function(){var e=Qe(),t=function(r){var n=r.styles,o=r.dynamic;return e(n,o),null};return t},Ue={left:0,top:0,right:0,gap:0},Z=function(e){return parseInt(e||"",10)||0},Je=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Z(r),Z(n),Z(o)]},et=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ue;var t=Je(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},tt=fe(),_="data-scroll-locked",rt=function(e,t,r,n){var o=e.left,s=e.top,f=e.right,c=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(ze,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(c,"px ").concat(n,`;
  }
  body[`).concat(_,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(c,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(O,` {
    right: `).concat(c,"px ").concat(n,`;
  }
  
  .`).concat(W,` {
    margin-right: `).concat(c,"px ").concat(n,`;
  }
  
  .`).concat(O," .").concat(O,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(W," .").concat(W,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(_,`] {
    `).concat(Ze,": ").concat(c,`px;
  }
`)},te=function(){var e=parseInt(document.body.getAttribute(_)||"0",10);return isFinite(e)?e:0},nt=function(){a.useEffect(function(){return document.body.setAttribute(_,(te()+1).toString()),function(){var e=te()-1;e<=0?document.body.removeAttribute(_):document.body.setAttribute(_,e.toString())}},[])},at=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,o=n===void 0?"margin":n;nt();var s=a.useMemo(function(){return et(o)},[o]);return a.createElement(tt,{styles:rt(s,!t,o,r?"":"!important")})},K=!1;if(typeof window<"u")try{var I=Object.defineProperty({},"passive",{get:function(){return K=!0,!0}});window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch{K=!1}var A=K?{passive:!1}:!1,ot=function(e){return e.tagName==="TEXTAREA"},ve=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!ot(e)&&r[t]==="visible")},ct=function(e){return ve(e,"overflowY")},lt=function(e){return ve(e,"overflowX")},re=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var o=me(e,n);if(o){var s=he(e,n),f=s[1],c=s[2];if(f>c)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},st=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},it=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},me=function(e,t){return e==="v"?ct(t):lt(t)},he=function(e,t){return e==="v"?st(t):it(t)},ut=function(e,t){return e==="h"&&t==="rtl"?-1:1},dt=function(e,t,r,n,o){var s=ut(e,window.getComputedStyle(t).direction),f=s*n,c=r.target,m=t.contains(c),h=!1,g=f>0,i=0,u=0;do{var v=he(e,c),y=v[0],l=v[1],d=v[2],p=l-d-s*y;(y||p)&&me(e,c)&&(i+=p,u+=y),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!m&&c!==document.body||m&&(t.contains(c)||t===c));return(g&&(Math.abs(i)<1||!o)||!g&&(Math.abs(u)<1||!o))&&(h=!0),h},L=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ne=function(e){return[e.deltaX,e.deltaY]},ae=function(e){return e&&"current"in e?e.current:e},ft=function(e,t){return e[0]===t[0]&&e[1]===t[1]},vt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},mt=0,N=[];function ht(e){var t=a.useRef([]),r=a.useRef([0,0]),n=a.useRef(),o=a.useState(mt++)[0],s=a.useState(fe)[0],f=a.useRef(e);a.useEffect(function(){f.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var l=Se([e.lockRef.current],(e.shards||[]).map(ae),!0).filter(Boolean);return l.forEach(function(d){return d.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),l.forEach(function(d){return d.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=a.useCallback(function(l,d){if("touches"in l&&l.touches.length===2||l.type==="wheel"&&l.ctrlKey)return!f.current.allowPinchZoom;var p=L(l),w=r.current,C="deltaX"in l?l.deltaX:w[0]-p[0],M="deltaY"in l?l.deltaY:w[1]-p[1],S,P=l.target,E=Math.abs(C)>Math.abs(M)?"h":"v";if("touches"in l&&E==="h"&&P.type==="range")return!1;var x=re(E,P);if(!x)return!0;if(x?S=E:(S=E==="v"?"h":"v",x=re(E,P)),!x)return!1;if(!n.current&&"changedTouches"in l&&(C||M)&&(n.current=S),!S)return!0;var b=n.current||S;return dt(b,d,l,b==="h"?C:M,!0)},[]),m=a.useCallback(function(l){var d=l;if(!(!N.length||N[N.length-1]!==s)){var p="deltaY"in d?ne(d):L(d),w=t.current.filter(function(S){return S.name===d.type&&(S.target===d.target||d.target===S.shadowParent)&&ft(S.delta,p)})[0];if(w&&w.should){d.cancelable&&d.preventDefault();return}if(!w){var C=(f.current.shards||[]).map(ae).filter(Boolean).filter(function(S){return S.contains(d.target)}),M=C.length>0?c(d,C[0]):!f.current.noIsolation;M&&d.cancelable&&d.preventDefault()}}},[]),h=a.useCallback(function(l,d,p,w){var C={name:l,delta:d,target:p,should:w,shadowParent:gt(p)};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(M){return M!==C})},1)},[]),g=a.useCallback(function(l){r.current=L(l),n.current=void 0},[]),i=a.useCallback(function(l){h(l.type,ne(l),l.target,c(l,e.lockRef.current))},[]),u=a.useCallback(function(l){h(l.type,L(l),l.target,c(l,e.lockRef.current))},[]);a.useEffect(function(){return N.push(s),e.setCallbacks({onScrollCapture:i,onWheelCapture:i,onTouchMoveCapture:u}),document.addEventListener("wheel",m,A),document.addEventListener("touchmove",m,A),document.addEventListener("touchstart",g,A),function(){N=N.filter(function(l){return l!==s}),document.removeEventListener("wheel",m,A),document.removeEventListener("touchmove",m,A),document.removeEventListener("touchstart",g,A)}},[]);var v=e.removeScrollBar,y=e.inert;return a.createElement(a.Fragment,null,y?a.createElement(s,{styles:vt(o)}):null,v?a.createElement(at,{gapMode:e.gapMode}):null)}function gt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const pt=xe(de,ht);var ge=a.forwardRef(function(e,t){return a.createElement(H,R({},e,{ref:t,sideCar:pt}))});ge.classNames=H.classNames;function Dt(e){const{autoFocus:t,trapFocus:r,dialogRef:n,initialFocusRef:o,blockScrollOnMount:s,allowPinchZoom:f,finalFocusRef:c,returnFocusOnClose:m,preserveScrollBarGap:h,lockFocusAcrossFrames:g,isOpen:i}=j(),[u,v]=Ce();a.useEffect(()=>{!u&&v&&setTimeout(v)},[u,v]);const y=ie(n,i);return k.jsx(se,{autoFocus:t,isDisabled:!r,initialFocusRef:o,finalFocusRef:c,restoreFocus:m,contentRef:n,lockFocusAcrossFrames:g,children:k.jsx(ge,{removeScrollBar:!h,allowPinchZoom:f,enabled:y===1&&s,forwardProps:!0,children:e.children})})}var yt=G((e,t)=>{const{className:r,...n}=e,{headerId:o,setHeaderMounted:s}=j();a.useEffect(()=>(s(!0),()=>s(!1)),[s]);const f=$("chakra-modal__header",r),m={flex:0,...Q().header};return k.jsx(q.header,{ref:t,className:f,id:o,...n,__css:m})});yt.displayName="ModalHeader";var bt=q(Me.div),St=G((e,t)=>{const{className:r,transition:n,motionProps:o,...s}=e,f=$("chakra-modal__overlay",r),m={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...Q().overlay},{motionPreset:h}=j(),i=o||(h==="none"?{}:ke);return k.jsx(bt,{...i,__css:m,ref:t,className:f,...s})});St.displayName="ModalOverlay";var wt=G((e,t)=>{const{className:r,...n}=e,{bodyId:o,setBodyMounted:s}=j();a.useEffect(()=>(s(!0),()=>s(!1)),[s]);const f=$("chakra-modal__body",r),c=Q();return k.jsx(q.div,{ref:t,className:f,id:o,...n,__css:c.body})});wt.displayName="ModalBody";export{St as M,yt as a,wt as b,Ye as c,j as d,Dt as e,Q as u};
