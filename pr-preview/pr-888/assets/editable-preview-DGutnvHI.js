import{j as x}from"./extends-CwFRzn3r.js";import{r as a}from"./index-BwDkhjyp.js";import{u as re}from"./use-callback-ref-DA6UG1mJ.js";import{u as ue}from"./use-controllable-state-Dnial3e2.js";import{u as de}from"./use-focus-on-pointer-down-BI4L5zXl.js";import{u as fe}from"./use-safe-layout-effect-BnICyLBj.js";import{u as be}from"./use-update-effect-CNg9DBIF.js";import{m as p}from"./use-merge-refs-Bdxaq0s4.js";import{a as A}from"./attr-sHTFgF0E.js";import{c}from"./call-all-DDzecCnU.js";import{f as O}from"./forward-ref-BWI-Phbn.js";import{a as me,o as Ce}from"./use-style-config-YUvqttAg.js";import{r as Ee,c as W}from"./factory-C6UFhaBW.js";import{c as U}from"./cx-BDMMs1jM.js";import{c as Q}from"./context-CBKykClo.js";const[ge,X]=Q({name:"EditableStylesContext",errorMessage:`useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `}),[ye,Y]=Q({name:"EditableContext",errorMessage:"useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"});function J(m,o){return m?m===o||m.contains(o):!1}function he(m={}){const{onChange:o,onCancel:r,onSubmit:u,onBlur:l,value:g,isDisabled:t,defaultValue:_,startWithEditView:K,isPreviewFocusable:P=!0,submitOnBlur:S=!0,selectAllOnFocus:v=!0,placeholder:C,onEdit:$,finalFocusRef:z,...ee}=m,R=re($),te=!!(K&&!t),[s,V]=a.useState(te),[i,B]=ue({defaultValue:_||"",value:g,onChange:o}),[h,H]=a.useState(i),E=a.useRef(null),ne=a.useRef(null),L=a.useRef(null),j=a.useRef(null),M=a.useRef(null);de({ref:E,enabled:s,elements:[j,M]});const D=!s&&!t;fe(()=>{var e,n;s&&((e=E.current)==null||e.focus(),v&&((n=E.current)==null||n.select()))},[]),be(()=>{var e,n,b,d;if(!s){z?(e=z.current)==null||e.focus():(n=L.current)==null||n.focus();return}(b=E.current)==null||b.focus(),v&&((d=E.current)==null||d.select()),R==null||R()},[s,R,v]);const w=a.useCallback(()=>{D&&V(!0)},[D]),k=a.useCallback(()=>{H(i)},[i]),f=a.useCallback(()=>{V(!1),B(h),r==null||r(h),l==null||l(h)},[r,l,B,h]),y=a.useCallback(()=>{V(!1),H(i),u==null||u(i),l==null||l(h)},[i,u,l,h]);a.useEffect(()=>{if(s)return;const e=E.current;(e==null?void 0:e.ownerDocument.activeElement)===e&&(e==null||e.blur())},[s]);const I=a.useCallback(e=>{B(e.currentTarget.value)},[B]),q=a.useCallback(e=>{const n=e.key,d={Escape:f,Enter:F=>{!F.shiftKey&&!F.metaKey&&y()}}[n];d&&(e.preventDefault(),d(e))},[f,y]),G=a.useCallback(e=>{const n=e.key,d={Escape:f}[n];d&&(e.preventDefault(),d(e))},[f]),T=i.length===0,N=a.useCallback(e=>{if(!s)return;const n=e.currentTarget.ownerDocument,b=e.relatedTarget??n.activeElement,d=J(j.current,b),F=J(M.current,b);!d&&!F&&(S?y():f())},[S,y,f,s]),ae=a.useCallback((e={},n=null)=>{const b=D&&P?0:void 0;return{...e,ref:p(n,ne),children:T?C:i,hidden:s,"aria-disabled":A(t),tabIndex:b,onFocus:c(e.onFocus,w,k)}},[t,s,D,P,T,w,k,C,i]),se=a.useCallback((e={},n=null)=>({...e,hidden:!s,placeholder:C,ref:p(n,E),disabled:t,"aria-disabled":A(t),value:i,onBlur:c(e.onBlur,N),onChange:c(e.onChange,I),onKeyDown:c(e.onKeyDown,q),onFocus:c(e.onFocus,k)}),[t,s,N,I,q,k,C,i]),oe=a.useCallback((e={},n=null)=>({...e,hidden:!s,placeholder:C,ref:p(n,E),disabled:t,"aria-disabled":A(t),value:i,onBlur:c(e.onBlur,N),onChange:c(e.onChange,I),onKeyDown:c(e.onKeyDown,G),onFocus:c(e.onFocus,k)}),[t,s,N,I,G,k,C,i]),le=a.useCallback((e={},n=null)=>({"aria-label":"Edit",...e,type:"button",onClick:c(e.onClick,w),ref:p(n,L),disabled:t}),[w,t]),ie=a.useCallback((e={},n=null)=>({...e,"aria-label":"Submit",ref:p(M,n),type:"button",onClick:c(e.onClick,y),disabled:t}),[y,t]),ce=a.useCallback((e={},n=null)=>({"aria-label":"Cancel",id:"cancel",...e,ref:p(j,n),type:"button",onClick:c(e.onClick,f),disabled:t}),[f,t]);return{isEditing:s,isDisabled:t,isValueEmpty:T,value:i,onEdit:w,onCancel:f,onSubmit:y,getPreviewProps:ae,getInputProps:se,getTextareaProps:oe,getEditButtonProps:le,getSubmitButtonProps:ie,getCancelButtonProps:ce,htmlProps:ee}}const ke=O(function(o,r){const u=me("Editable",o),l=Ce(o),{htmlProps:g,...t}=he(l),{isEditing:_,onSubmit:K,onCancel:P,onEdit:S}=t,v=U("chakra-editable",o.className),C=Ee(o.children,{isEditing:_,onSubmit:K,onCancel:P,onEdit:S});return x.jsx(ye,{value:t,children:x.jsx(ge,{value:u,children:x.jsx(W.div,{ref:r,...g,className:v,children:C})})})});ke.displayName="Editable";const Z={fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent"},pe=O(function(o,r){const{getInputProps:u}=Y(),l=X(),g=u(o,r),t=U("chakra-editable__input",o.className);return x.jsx(W.input,{...g,__css:{outline:0,...Z,...l.input},className:t})});pe.displayName="EditableInput";const ve=O(function(o,r){const{getPreviewProps:u}=Y(),l=X(),g=u(o,r),t=U("chakra-editable__preview",o.className);return x.jsx(W.span,{...g,__css:{cursor:"text",display:"inline-block",...Z,...l.preview},className:t})});ve.displayName="EditablePreview";export{ke as E,X as a,ve as b,Z as c,pe as d,Y as u};
