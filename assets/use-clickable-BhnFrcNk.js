import{r as s}from"./index-BwDkhjyp.js";import{d as F}from"./attr-sHTFgF0E.js";import{m as V}from"./use-merge-refs-Bdxaq0s4.js";function X(){const o=s.useRef(new Map),d=o.current,t=s.useCallback((a,r,n,u)=>{o.current.set(n,{type:r,el:a,options:u}),a.addEventListener(r,n,u)},[]),i=s.useCallback((a,r,n,u)=>{a.removeEventListener(r,n,u),o.current.delete(n)},[]);return s.useEffect(()=>()=>{d.forEach((a,r)=>{i(a.el,a.type,r,a.options)})},[i,d]),{add:t,remove:i}}function P(o){var a,r;const d=((r=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:r[0])??o.target,{tagName:t,isContentEditable:i}=d;return t!=="INPUT"&&t!=="TEXTAREA"&&i!==!0}function H(o={}){const{ref:d,isDisabled:t,isFocusable:i,clickOnEnter:a=!0,clickOnSpace:r=!0,onMouseDown:n,onMouseUp:u,onClick:h,onKeyDown:p,onKeyUp:b,tabIndex:O,onMouseOver:k,onMouseLeave:m,...T}=o,[l,x]=s.useState(!0),[C,f]=s.useState(!1),c=X(),M=e=>{e&&e.tagName!=="BUTTON"&&x(!1)},U=l?O:O||0,g=t&&!i,S=s.useCallback(e=>{if(t){e.stopPropagation(),e.preventDefault();return}e.currentTarget.focus(),h==null||h(e)},[t,h]),D=s.useCallback(e=>{C&&P(e)&&(e.preventDefault(),e.stopPropagation(),f(!1),c.remove(document,"keyup",D,!1))},[C,c]),K=s.useCallback(e=>{if(p==null||p(e),t||e.defaultPrevented||e.metaKey||!P(e.nativeEvent)||l)return;const E=a&&e.key==="Enter";r&&e.key===" "&&(e.preventDefault(),f(!0)),E&&(e.preventDefault(),e.currentTarget.click()),c.add(document,"keyup",D,!1)},[t,l,p,a,r,c,D]),L=s.useCallback(e=>{if(b==null||b(e),t||e.defaultPrevented||e.metaKey||!P(e.nativeEvent)||l)return;r&&e.key===" "&&(e.preventDefault(),f(!1),e.currentTarget.click())},[r,l,t,b]),y=s.useCallback(e=>{e.button===0&&(f(!1),c.remove(document,"mouseup",y,!1))},[c]),N=s.useCallback(e=>{if(e.button!==0)return;if(t){e.stopPropagation(),e.preventDefault();return}l||f(!0),e.currentTarget.focus({preventScroll:!0}),c.add(document,"mouseup",y,!1),n==null||n(e)},[t,l,n,c,y]),R=s.useCallback(e=>{e.button===0&&(l||f(!1),u==null||u(e))},[u,l]),w=s.useCallback(e=>{if(t){e.preventDefault();return}k==null||k(e)},[t,k]),A=s.useCallback(e=>{C&&(e.preventDefault(),f(!1)),m==null||m(e)},[C,m]),I=V(d,M);return l?{...T,ref:I,type:"button","aria-disabled":g?void 0:t,disabled:g,onClick:S,onMouseDown:n,onMouseUp:u,onKeyUp:b,onKeyDown:p,onMouseOver:k,onMouseLeave:m}:{...T,ref:I,role:"button","data-active":F(C),"aria-disabled":t?"true":void 0,tabIndex:g?void 0:U,onClick:S,onMouseDown:N,onMouseUp:R,onKeyUp:L,onKeyDown:K,onMouseOver:w,onMouseLeave:A}}export{H as u};