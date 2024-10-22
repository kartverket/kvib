import{j as _}from"./extends-CwFRzn3r.js";import{r as s}from"./index-BwDkhjyp.js";import{c as ne}from"./use-descendant-T3UBTUZf.js";import{u as te}from"./use-popper-DwNTykfS.js";import{u as oe}from"./use-clickable-BhnFrcNk.js";import{c as W}from"./context-CBKykClo.js";import{u as se}from"./use-disclosure-CdGn7wGE.js";import{u as re}from"./use-outside-click-DJDnsvpj.js";import{u as ce,a as ue}from"./use-focus-effect-BY0uqI8l.js";import{u as H}from"./use-update-effect-CNg9DBIF.js";import{m as z}from"./use-merge-refs-Bdxaq0s4.js";import{d as ae}from"./attr-sHTFgF0E.js";import{c as V}from"./call-all-DDzecCnU.js";import{l as ie}from"./lazy-DLVTVQVU.js";import{u as le}from"./use-controllable-state-Dnial3e2.js";import{g as fe}from"./children-2ZXUntH3.js";import{u as de}from"./use-theme-CBfqdygA.js";import{a as me,o as pe}from"./use-style-config-YUvqttAg.js";import{r as ye,c as Ce}from"./factory-C6UFhaBW.js";import{c as $}from"./cx-BDMMs1jM.js";function he(e,t){const n=s.useId();return s.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function be(e,...t){const n=he(e);return s.useMemo(()=>t.map(c=>`${c}-${n}`),[n,t])}function Me(e,t,n,c){if(t==null)return c;if(!c)return e.find(u=>n(u).toLowerCase().startsWith(t.toLowerCase()));const r=e.filter(o=>n(o).toLowerCase().startsWith(t.toLowerCase()));if(r.length>0){let o;return r.includes(c)?(o=r.indexOf(c)+1,o===r.length&&(o=0),r[o]):(o=e.indexOf(r[0]),e[o])}return c}function ke(e){const{key:t}=e;return t.length===1||t.length>1&&/[^a-zA-Z0-9]/.test(t)}function xe(e={}){const{timeout:t=300,preventDefault:n=()=>!0}=e,[c,r]=s.useState([]),o=s.useRef(),u=()=>{o.current&&(clearTimeout(o.current),o.current=null)},f=()=>{u(),o.current=setTimeout(()=>{r([]),o.current=null},t)};s.useEffect(()=>u,[]);function I(a){return i=>{if(i.key==="Backspace"){const M=[...c];M.pop(),r(M);return}if(ke(i)){const M=c.concat(i.key);n(i)&&(i.preventDefault(),i.stopPropagation()),r(M),a(M.join("")),f()}}}return I}const[Ie,we,ge,Ee]=ne(),[Oe,K]=W({strict:!1,name:"MenuContext"});function q(e){return(e==null?void 0:e.ownerDocument)??document}function De(e){return q(e).activeElement===e}function Re(e={}){const{id:t,closeOnSelect:n=!0,closeOnBlur:c=!0,initialFocusRef:r,autoSelect:o=!0,isLazy:u,isOpen:f,defaultIsOpen:I,onClose:a,onOpen:i,placement:M="bottom-start",lazyBehavior:D="unmount",direction:y,computePositionOnMount:C=!1,...E}=e,m=s.useRef(null),R=s.useRef(null),d=s.useRef(!0),p=ge(),F=s.useCallback(()=>{requestAnimationFrame(()=>{var l;(l=m.current)==null||l.focus({preventScroll:!1})})},[]),g=s.useCallback(()=>{const l=setTimeout(()=>{var w,S;if(r)(w=r.current)==null||w.focus();else if(!p.count())(S=m.current)==null||S.focus({preventScroll:!1});else{const v=p.firstEnabled();v&&k(v.index)}});j.current.add(l)},[p,r]),A=s.useCallback(()=>{const l=setTimeout(()=>{var w;if(!p.count())(w=m.current)==null||w.focus({preventScroll:!1});else{const S=p.lastEnabled();S&&k(S.index)}});j.current.add(l)},[p]),b=s.useCallback(()=>{i==null||i(),o?g():F()},[o,g,F,i]),{isOpen:h,onOpen:x,onClose:T,onToggle:N}=se({isOpen:f,defaultIsOpen:I,onClose:a,onOpen:b});re({enabled:h&&c,ref:m,handler:l=>{var S,v,P;const w=((v=(S=l.composedPath)==null?void 0:S.call(l))==null?void 0:v[0])??l.target;(P=R.current)!=null&&P.contains(w)||T()}});const L=te({...E,enabled:h||C,placement:M,direction:y}),[O,k]=s.useState(-1);ce(m,{focusRef:R,visible:h,shouldFocus:!0});const G=ue({isOpen:h,ref:m}),[Z,J]=be(t,"menu-button","menu-list"),Q=s.useCallback(()=>{x(),F()},[x,F]),j=s.useRef(new Set([]));s.useEffect(()=>{const l=j.current;return()=>{l.forEach(w=>clearTimeout(w)),l.clear()}},[]),H(()=>{var l;h||(k(-1),(l=m.current)==null||l.scrollTo(0,0))},[h]),H(()=>{h&&O===-1&&F()},[O,h]),s.useEffect(()=>{var w;if(!h)return;const l=p.item(O);(w=l==null?void 0:l.node)==null||w.focus({preventScroll:!d.current})},[p,O,h]);const X=s.useCallback(()=>{x(),g()},[g,x]),Y=s.useCallback(()=>{d.current=!0,x(),A()},[x,A]),ee=s.useCallback(()=>{var P,U;const l=q(m.current),w=(P=m.current)==null?void 0:P.contains(l.activeElement);if(!(h&&!w))return;const v=(U=p.item(O))==null?void 0:U.node;v==null||v.focus({preventScroll:!d.current})},[h,O,p]);return{openAndFocusMenu:Q,openAndFocusFirstItem:X,openAndFocusLastItem:Y,onTransitionEnd:ee,unstable__animationState:G,descendants:p,popper:L,buttonId:Z,menuId:J,forceUpdate:L.forceUpdate,orientation:"vertical",isOpen:h,onToggle:N,onOpen:x,onClose:T,menuRef:m,buttonRef:R,focusedIndex:O,closeOnSelect:n,closeOnBlur:c,autoSelect:o,setFocusedIndex:k,isLazy:u,lazyBehavior:D,initialFocusRef:r,scrollIntoViewRef:d}}function tn(e={},t=null){const n=K(),{onToggle:c,popper:r,openAndFocusFirstItem:o,openAndFocusLastItem:u,scrollIntoViewRef:f}=n,I=s.useCallback(a=>{const i=a.key,D={Enter:o,ArrowDown:o,ArrowUp:u}[i];D&&(f.current=!0,a.preventDefault(),a.stopPropagation(),D(a))},[o,u,f]);return{...e,ref:z(n.buttonRef,t,r.referenceRef),id:n.buttonId,"data-active":ae(n.isOpen),"aria-expanded":n.isOpen,"aria-haspopup":"menu","aria-controls":n.menuId,onClick:V(e.onClick,c),onKeyDown:V(e.onKeyDown,I)}}function B(e){var t;return ve(e)&&!!((t=e==null?void 0:e.getAttribute("role"))!=null&&t.startsWith("menuitem"))}function on(e={},t=null){const n=K();if(!n)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex:c,setFocusedIndex:r,menuRef:o,isOpen:u,onClose:f,menuId:I,isLazy:a,lazyBehavior:i,scrollIntoViewRef:M,unstable__animationState:D}=n,y=we(),C=xe({preventDefault:d=>d.key!==" "&&B(d.target)}),E=s.useCallback(d=>{if(!d.currentTarget.contains(d.target))return;const p=d.key,g={Tab:b=>b.preventDefault(),Escape:b=>{b.stopPropagation(),f()},ArrowDown:()=>{M.current=!0;const b=y.nextEnabled(c)??y.firstEnabled();b&&r(b.index)},ArrowUp:()=>{M.current=!0;const b=y.prevEnabled(c)??y.firstEnabled();b&&r(b.index)}}[p];if(g){d.preventDefault(),g(d);return}const A=C(b=>{const h=Me(y.values(),b,x=>{var T;return((T=x==null?void 0:x.node)==null?void 0:T.textContent)??""},y.item(c));if(h){const x=y.indexOf(h.node);r(x)}});B(d.target)&&A(d)},[y,c,C,f,r,M]),m=s.useRef(!1);u&&(m.current=!0);const R=ie({wasSelected:m.current,enabled:a,mode:i,isSelected:D.present});return{...e,ref:z(o,t),children:R?e.children:null,tabIndex:-1,role:"menu",id:I,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:V(e.onKeyDown,E)}}function sn(e={}){const{popper:t,isOpen:n}=K();return t.getPopperProps({...e,style:{visibility:n?"visible":"hidden",...e.style}})}function Se(e={},t=null){const{onMouseEnter:n,onMouseMove:c,onMouseLeave:r,onClick:o,onFocus:u,isDisabled:f,isFocusable:I,closeOnSelect:a,type:i,...M}=e,D=K(),{setFocusedIndex:y,focusedIndex:C,closeOnSelect:E,onClose:m,menuId:R,scrollIntoViewRef:d}=D,p=s.useRef(null),F=`${R}-menuitem-${s.useId()}`,{index:g,register:A}=Ee({disabled:f&&!I}),b=s.useCallback(k=>{n==null||n(k),!f&&(d.current=!1,y(g))},[y,g,f,n,d]),h=s.useCallback(k=>{c==null||c(k),p.current&&!De(p.current)&&b(k)},[b,c]),x=s.useCallback(k=>{r==null||r(k),!f&&y(-1)},[y,f,r]),T=s.useCallback(k=>{o==null||o(k),B(k.currentTarget)&&(a??E)&&m()},[m,o,E,a]),N=s.useCallback(k=>{u==null||u(k),y(g)},[y,u,g]),L=g===C,O=oe({onClick:T,onFocus:N,onMouseEnter:b,onMouseMove:h,onMouseLeave:x,ref:z(A,p,t),isDisabled:f,isFocusable:I});return{...M,...O,type:i??O.type,id:F,role:"menuitem",tabIndex:L?0:-1}}function rn(e={},t=null){const{type:n="radio",isChecked:c,...r}=e;return{...Se(r,t),role:`menuitem${n}`,"aria-checked":c}}function cn(e={}){const{children:t,type:n="radio",value:c,defaultValue:r,onChange:o,...u}=e,I=n==="radio"?"":[],[a,i]=le({defaultValue:r??I,value:c,onChange:o}),M=s.useCallback(C=>{if(n==="radio"&&typeof a=="string"&&i(C),n==="checkbox"&&Array.isArray(a)){const E=a.includes(C)?a.filter(m=>m!==C):a.concat(C);i(E)}},[a,i,n]),y=fe(t).map(C=>{if(C.type.id!=="MenuItemOption")return C;const E=R=>{var d,p;M(C.props.value),(p=(d=C.props).onClick)==null||p.call(d,R)},m=n==="radio"?C.props.value===a:a.includes(C.props.value);return s.cloneElement(C,{type:n,onClick:E,isChecked:m})});return{...u,children:y}}function ve(e){if(!Fe(e))return!1;const t=e.ownerDocument.defaultView??window;return e instanceof t.HTMLElement}function Fe(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}const[Te,Ae]=W({name:"MenuStylesContext",errorMessage:`useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `}),Pe=e=>{const{children:t}=e,n=me("Menu",e),c=pe(e),{direction:r}=de(),{descendants:o,...u}=Re({...c,direction:r}),f=s.useMemo(()=>u,[u]),{isOpen:I,onClose:a,forceUpdate:i}=f;return _.jsx(Ie,{value:o,children:_.jsx(Oe,{value:f,children:_.jsx(Te,{value:n,children:ye(t,{isOpen:I,onClose:a,forceUpdate:i})})})})};Pe.displayName="Menu";const Le=e=>{const{className:t,children:n,...c}=e,r=Ae(),o=s.Children.only(n),u=s.isValidElement(o)?s.cloneElement(o,{focusable:"false","aria-hidden":!0,className:$("chakra-menu__icon",o.props.className)}):null,f=$("chakra-menu__icon-wrapper",t);return _.jsx(Ce.span,{className:f,...c,__css:r.icon,children:u})};Le.displayName="MenuIcon";export{Le as M,tn as a,Se as b,rn as c,K as d,on as e,sn as f,cn as g,Pe as h,Ae as u};
