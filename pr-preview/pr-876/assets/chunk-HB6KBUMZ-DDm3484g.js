import{r as u}from"./index-BwDkhjyp.js";import{u as oe}from"./chunk-AXLEE3EK-CuzCDNQU.js";import{c as se}from"./chunk-OCNORRQU-DESonMht.js";import{u as re,a as ue}from"./index-DUHZmgZA.js";import{u as ae}from"./chunk-LUYFNC5G-DV8XJogC.js";import{u as ce}from"./index-DOEX-ehf.js";import{u as ie}from"./index-DdaX-njP.js";import{c as G}from"./index-CHDWSgKD.js";import{g as le}from"./index-2ZXUntH3.js";import{u as de}from"./index-DjrpCY14.js";import{u as Z}from"./index-DEiKcbOK.js";import{m as $}from"./index-Bdxaq0s4.js";import{d as fe,e as B,o as me,x as pe,a as W,c as ve}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{l as ye}from"./index-DLVTVQVU.js";import{a as Ce}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{u as he}from"./chunk-UIGT7YZF-XoNRsZNz.js";import{j as N}from"./extends-CwFRzn3r.js";function Me(e){const{key:n}=e;return n.length===1||n.length>1&&/[^a-zA-Z0-9]/.test(n)}function be(e={}){const{timeout:n=300,preventDefault:t=()=>!0}=e,[s,o]=u.useState([]),r=u.useRef(),a=()=>{r.current&&(clearTimeout(r.current),r.current=null)},i=()=>{a(),r.current=setTimeout(()=>{o([]),r.current=null},n)};u.useEffect(()=>a,[]);function f(l){return c=>{if(c.key==="Backspace"){const d=[...s];d.pop(),o(d);return}if(Me(c)){const d=s.concat(c.key);t(c)&&(c.preventDefault(),c.stopPropagation()),o(d),l(d.join("")),i()}}}return f}function ke(e,n,t,s){if(n==null)return s;if(!s)return e.find(a=>t(a).toLowerCase().startsWith(n.toLowerCase()));const o=e.filter(r=>t(r).toLowerCase().startsWith(n.toLowerCase()));if(o.length>0){let r;return o.includes(s)?(r=o.indexOf(s)+1,r===o.length&&(r=0),o[r]):(r=e.indexOf(o[0]),e[r])}return s}function Ee(e){const{ref:n,handler:t,enabled:s=!0}=e,o=ie(t),a=u.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;u.useEffect(()=>{if(!s)return;const i=d=>{z(d,n)&&(a.isPointerDown=!0)},f=d=>{if(a.ignoreEmulatedMouseEvents){a.ignoreEmulatedMouseEvents=!1;return}a.isPointerDown&&t&&z(d,n)&&(a.isPointerDown=!1,o(d))},l=d=>{a.ignoreEmulatedMouseEvents=!0,t&&a.isPointerDown&&z(d,n)&&(a.isPointerDown=!1,o(d))},c=J(n.current);return c.addEventListener("mousedown",i,!0),c.addEventListener("mouseup",f,!0),c.addEventListener("touchstart",i,!0),c.addEventListener("touchend",l,!0),()=>{c.removeEventListener("mousedown",i,!0),c.removeEventListener("mouseup",f,!0),c.removeEventListener("touchstart",i,!0),c.removeEventListener("touchend",l,!0)}},[t,n,o,a,s])}function z(e,n){var t;const s=e.target;return s&&!J(s).contains(s)?!1:!((t=n.current)!=null&&t.contains(s))}function J(e){var n;return(n=e==null?void 0:e.ownerDocument)!=null?n:document}var[xe,we,ge,Ie]=se(),[De,j]=G({strict:!1,name:"MenuContext"});function Pe(e,...n){const t=u.useId(),s=e||t;return u.useMemo(()=>n.map(o=>`${o}-${s}`),[s,n])}function Q(e){var n;return(n=e==null?void 0:e.ownerDocument)!=null?n:document}function q(e){return Q(e).activeElement===e}function Oe(e={}){const{id:n,closeOnSelect:t=!0,closeOnBlur:s=!0,initialFocusRef:o,autoSelect:r=!0,isLazy:a,isOpen:i,defaultIsOpen:f,onClose:l,onOpen:c,placement:d="bottom-start",lazyBehavior:g="unmount",direction:E,computePositionOnMount:p=!1,...I}=e,y=u.useRef(null),m=u.useRef(null),h=ge(),D=u.useCallback(()=>{requestAnimationFrame(()=>{var k;(k=y.current)==null||k.focus({preventScroll:!1})})},[]),M=u.useCallback(()=>{const k=setTimeout(()=>{var w;if(o)(w=o.current)==null||w.focus();else{const K=h.firstEnabled();K&&_(K.index)}});U.current.add(k)},[h,o]),P=u.useCallback(()=>{const k=setTimeout(()=>{const w=h.lastEnabled();w&&_(w.index)});U.current.add(k)},[h]),x=u.useCallback(()=>{c==null||c(),r?M():D()},[r,M,D,c]),{isOpen:v,onOpen:b,onClose:O,onToggle:R}=ce({isOpen:i,defaultIsOpen:f,onClose:l,onOpen:x});Ee({enabled:v&&s,ref:y,handler:k=>{var w;(w=m.current)!=null&&w.contains(k.target)||O()}});const L=ae({...I,enabled:v||p,placement:d,direction:E}),[F,_]=u.useState(-1);Z(()=>{v||_(-1)},[v]),re(y,{focusRef:m,visible:v,shouldFocus:!0});const S=ue({isOpen:v,ref:y}),[A,T]=Pe(n,"menu-button","menu-list"),C=u.useCallback(()=>{b(),D()},[b,D]),U=u.useRef(new Set([]));u.useEffect(()=>{const k=U.current;return()=>{k.forEach(w=>clearTimeout(w)),k.clear()}},[]);const X=u.useCallback(()=>{b(),M()},[M,b]),Y=u.useCallback(()=>{b(),P()},[b,P]),ee=u.useCallback(()=>{var k,w;const K=Q(y.current),te=(k=y.current)==null?void 0:k.contains(K.activeElement);if(!(v&&!te))return;const V=(w=h.item(F))==null?void 0:w.node;V==null||V.focus({preventScroll:!0})},[v,F,h]),ne=u.useRef(null);return{openAndFocusMenu:C,openAndFocusFirstItem:X,openAndFocusLastItem:Y,onTransitionEnd:ee,unstable__animationState:S,descendants:h,popper:L,buttonId:A,menuId:T,forceUpdate:L.forceUpdate,orientation:"vertical",isOpen:v,onToggle:R,onOpen:b,onClose:O,menuRef:y,buttonRef:m,focusedIndex:F,closeOnSelect:t,closeOnBlur:s,autoSelect:r,setFocusedIndex:_,isLazy:a,lazyBehavior:g,initialFocusRef:o,rafId:ne}}function nn(e={},n=null){const t=j(),{onToggle:s,popper:o,openAndFocusFirstItem:r,openAndFocusLastItem:a}=t,i=u.useCallback(f=>{const l=f.key,d={Enter:r,ArrowDown:r,ArrowUp:a}[l];d&&(f.preventDefault(),f.stopPropagation(),d(f))},[r,a]);return{...e,ref:$(t.buttonRef,n,o.referenceRef),id:t.buttonId,"data-active":fe(t.isOpen),"aria-expanded":t.isOpen,"aria-haspopup":"menu","aria-controls":t.menuId,onClick:B(e.onClick,s),onKeyDown:B(e.onKeyDown,i)}}function H(e){var n;return _e(e)&&!!((n=e==null?void 0:e.getAttribute("role"))!=null&&n.startsWith("menuitem"))}function tn(e={},n=null){const t=j();if(!t)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex:s,setFocusedIndex:o,menuRef:r,isOpen:a,onClose:i,menuId:f,isLazy:l,lazyBehavior:c,unstable__animationState:d}=t,g=we(),E=be({preventDefault:m=>m.key!==" "&&H(m.target)}),p=u.useCallback(m=>{if(!m.currentTarget.contains(m.target))return;const h=m.key,M={Tab:x=>x.preventDefault(),Escape:i,ArrowDown:()=>{const x=g.nextEnabled(s);x&&o(x.index)},ArrowUp:()=>{const x=g.prevEnabled(s);x&&o(x.index)}}[h];if(M){m.preventDefault(),M(m);return}const P=E(x=>{const v=ke(g.values(),x,b=>{var O,R;return(R=(O=b==null?void 0:b.node)==null?void 0:O.textContent)!=null?R:""},g.item(s));if(v){const b=g.indexOf(v.node);o(b)}});H(m.target)&&P(m)},[g,s,E,i,o]),I=u.useRef(!1);a&&(I.current=!0);const y=ye({wasSelected:I.current,enabled:l,mode:c,isSelected:d.present});return{...e,ref:$(r,n),children:y?e.children:null,tabIndex:-1,role:"menu",id:f,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:B(e.onKeyDown,p)}}function on(e={}){const{popper:n,isOpen:t}=j();return n.getPopperProps({...e,style:{visibility:t?"visible":"hidden",...e.style}})}function Re(e={},n=null){const{onMouseEnter:t,onMouseMove:s,onMouseLeave:o,onClick:r,onFocus:a,isDisabled:i,isFocusable:f,closeOnSelect:l,type:c,...d}=e,g=j(),{setFocusedIndex:E,focusedIndex:p,closeOnSelect:I,onClose:y,menuRef:m,isOpen:h,menuId:D,rafId:M}=g,P=u.useRef(null),x=`${D}-menuitem-${u.useId()}`,{index:v,register:b}=Ie({disabled:i&&!f}),O=u.useCallback(C=>{t==null||t(C),!i&&E(v)},[E,v,i,t]),R=u.useCallback(C=>{s==null||s(C),P.current&&!q(P.current)&&O(C)},[O,s]),L=u.useCallback(C=>{o==null||o(C),!i&&E(-1)},[E,i,o]),F=u.useCallback(C=>{r==null||r(C),H(C.currentTarget)&&(l??I)&&y()},[y,r,I,l]),_=u.useCallback(C=>{a==null||a(C),E(v)},[E,a,v]),S=v===p,A=i&&!f;Z(()=>{if(h)return S&&!A&&P.current?(M.current&&cancelAnimationFrame(M.current),M.current=requestAnimationFrame(()=>{var C;(C=P.current)==null||C.focus({preventScroll:!0}),M.current=null})):m.current&&!q(m.current)&&m.current.focus({preventScroll:!0}),()=>{M.current&&cancelAnimationFrame(M.current)}},[S,A,m,h]);const T=oe({onClick:F,onFocus:_,onMouseEnter:O,onMouseMove:R,onMouseLeave:L,ref:$(b,P,n),isDisabled:i,isFocusable:f});return{...d,...T,type:c??T.type,id:x,role:"menuitem",tabIndex:S?0:-1}}function sn(e={},n=null){const{type:t="radio",isChecked:s,...o}=e;return{...Re(o,n),role:`menuitem${t}`,"aria-checked":s}}function rn(e={}){const{children:n,type:t="radio",value:s,defaultValue:o,onChange:r,...a}=e,f=t==="radio"?"":[],[l,c]=de({defaultValue:o??f,value:s,onChange:r}),d=u.useCallback(p=>{if(t==="radio"&&typeof l=="string"&&c(p),t==="checkbox"&&Array.isArray(l)){const I=l.includes(p)?l.filter(y=>y!==p):l.concat(p);c(I)}},[l,c,t]),E=le(n).map(p=>{if(p.type.id!=="MenuItemOption")return p;const I=m=>{var h,D;d(p.props.value),(D=(h=p.props).onClick)==null||D.call(h,m)},y=t==="radio"?p.props.value===l:l.includes(p.props.value);return u.cloneElement(p,{type:t,onClick:I,isChecked:y})});return{...a,children:E}}function _e(e){var n;if(!Fe(e))return!1;const t=(n=e.ownerDocument.defaultView)!=null?n:window;return e instanceof t.HTMLElement}function Fe(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}var[Se,Le]=G({name:"MenuStylesContext",errorMessage:`useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `}),Ae=e=>{const{children:n}=e,t=Ce("Menu",e),s=me(e),{direction:o}=he(),{descendants:r,...a}=Oe({...s,direction:o}),i=u.useMemo(()=>a,[a]),{isOpen:f,onClose:l,forceUpdate:c}=i;return N.jsx(xe,{value:r,children:N.jsx(De,{value:i,children:N.jsx(Se,{value:t,children:pe(n,{isOpen:f,onClose:l,forceUpdate:c})})})})};Ae.displayName="Menu";var Te=e=>{const{className:n,children:t,...s}=e,o=Le(),r=u.Children.only(t),a=u.isValidElement(r)?u.cloneElement(r,{focusable:"false","aria-hidden":!0,className:W("chakra-menu__icon",r.props.className)}):null,i=W("chakra-menu__icon-wrapper",n);return N.jsx(ve.span,{className:i,...s,__css:o.icon,children:a})};Te.displayName="MenuIcon";export{Ae as M,rn as a,sn as b,Te as c,Re as d,j as e,tn as f,on as g,nn as h,Le as u};
