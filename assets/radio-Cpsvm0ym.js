import{j}from"./extends-CwFRzn3r.js";import{r as n}from"./index-BwDkhjyp.js";import{m as ae}from"./use-merge-refs-Bdxaq0s4.js";import{i as J,c as K,l as te}from"./factory-DBKMNJMh.js";import{f as Q}from"./forward-ref-BWI-Phbn.js";import{c as oe}from"./context-CBKykClo.js";import{c as ne}from"./cx-BDMMs1jM.js";import{t as ie}from"./index-BbAC0Ngi.js";import{u as le}from"./form-control-RaYef-ka.js";import{v as re}from"./visually-hidden.style-BUiBK_kv.js";import{d as r,a as O}from"./attr-sHTFgF0E.js";import{c as k,a as ce}from"./call-all-DDzecCnU.js";import{a as de,o as ue}from"./use-style-config-B2siLCbt.js";import{s as me}from"./split-CzYrjwZo.js";function fe(o){return o&&J(o)&&J(o.target)}function he(o={}){const{onChange:u,value:e,defaultValue:m,name:f,isDisabled:P,isFocusable:x,isNative:c,...g}=o,[C,h]=n.useState(m||""),p=typeof e<"u",b=p?e:C,d=n.useRef(null),R=n.useCallback(()=>{const a=d.current;if(!a)return;let t="input:not(:disabled):checked";const y=a.querySelector(t);if(y){y.focus();return}t="input:not(:disabled)";const l=a.querySelector(t);l==null||l.focus()},[]),i=`radio-${n.useId()}`,M=f||i,S=n.useCallback(a=>{const t=fe(a)?a.target.value:a;p||h(t),u==null||u(String(t))},[u,p]),w=n.useCallback((a={},t=null)=>({...a,ref:ae(t,d),role:"radiogroup"}),[]),v=n.useCallback((a={},t=null)=>({...a,ref:t,name:M,[c?"checked":"isChecked"]:b!=null?a.value===b:void 0,onChange(l){S(l)},"data-radiogroup":!0}),[c,M,S,b]);return{getRootProps:w,getRadioProps:v,name:M,ref:d,focus:R,setValue:h,value:b,onChange:S,isDisabled:P,isFocusable:x,htmlProps:g}}const[pe,X]=oe({name:"RadioGroupContext",strict:!1}),be=Q((o,u)=>{const{colorScheme:e,size:m,variant:f,children:P,className:x,isDisabled:c,isFocusable:g,...C}=o,{value:h,onChange:p,getRootProps:b,name:d,htmlProps:R}=he(C),I=n.useMemo(()=>({name:d,size:m,onChange:p,colorScheme:e,value:h,variant:f,isDisabled:c,isFocusable:g}),[d,m,p,e,h,f,c,g]);return j.jsx(pe,{value:I,children:j.jsx(K.div,{...b(R,u),className:ne("chakra-radio-group",x),children:P})})});be.displayName="RadioGroup";function ye(o={}){const{defaultChecked:u,isChecked:e,isFocusable:m,isDisabled:f,isReadOnly:P,isRequired:x,onChange:c,isInvalid:g,name:C,value:h,id:p,"data-radiogroup":b,"aria-describedby":d,...R}=o,I=`radio-${n.useId()}`,i=le(),S=!!X()||!!b;let v=!!i&&!S?i.id:I;v=p??v;const a=f??(i==null?void 0:i.isDisabled),t=P??(i==null?void 0:i.isReadOnly),y=x??(i==null?void 0:i.isRequired),l=g??(i==null?void 0:i.isInvalid),[A,E]=n.useState(!1),[N,G]=n.useState(!1),[q,U]=n.useState(!1),[B,_]=n.useState(!1),[Y,Z]=n.useState(!!u),L=typeof e<"u",D=L?e:Y;n.useEffect(()=>ie(E),[]);const H=n.useCallback(s=>{if(t||a){s.preventDefault();return}L||Z(s.currentTarget.checked),c==null||c(s)},[L,a,t,c]),V=n.useCallback(s=>{s.key===" "&&_(!0)},[_]),W=n.useCallback(s=>{s.key===" "&&_(!1)},[_]),ee=n.useCallback((s={},F=null)=>({...s,ref:F,"data-active":r(B),"data-hover":r(q),"data-disabled":r(a),"data-invalid":r(l),"data-checked":r(D),"data-focus":r(N),"data-focus-visible":r(N&&A),"data-readonly":r(t),"aria-hidden":!0,onMouseDown:k(s.onMouseDown,()=>_(!0)),onMouseUp:k(s.onMouseUp,()=>_(!1)),onMouseEnter:k(s.onMouseEnter,()=>U(!0)),onMouseLeave:k(s.onMouseLeave,()=>U(!1))}),[B,q,a,l,D,N,t,A]),{onFocus:T,onBlur:$}=i??{},se=n.useCallback((s={},F=null)=>{const z=a&&!m;return{...s,id:v,ref:F,type:"radio",name:C,value:h,onChange:k(s.onChange,H),onBlur:k($,s.onBlur,()=>G(!1)),onFocus:k(T,s.onFocus,()=>G(!0)),onKeyDown:k(s.onKeyDown,V),onKeyUp:k(s.onKeyUp,W),checked:D,disabled:z,readOnly:t,required:y,"aria-invalid":O(l),"aria-disabled":O(z),"aria-required":O(y),"data-readonly":r(t),"aria-describedby":d,style:re}},[a,m,v,C,h,H,$,T,V,W,D,t,y,l,d]);return{state:{isInvalid:l,isFocused:N,isChecked:D,isActive:B,isHovered:q,isDisabled:a,isReadOnly:t,isRequired:y},getRadioProps:ee,getInputProps:se,getLabelProps:(s={},F=null)=>({...s,ref:F,onMouseDown:k(s.onMouseDown,ke),"data-disabled":r(a),"data-checked":r(D),"data-invalid":r(l)}),getRootProps:(s,F=null)=>({htmlFor:v,...s,ref:F,"data-disabled":r(a),"data-checked":r(D),"data-invalid":r(l)}),htmlProps:R}}function ke(o){o.preventDefault(),o.stopPropagation()}const Pe=Q((o,u)=>{const e=X(),{onChange:m,value:f}=o,P=de("Radio",{...e,...o}),x=ue(o),{spacing:c="0.5rem",children:g,isDisabled:C=e==null?void 0:e.isDisabled,isFocusable:h=e==null?void 0:e.isFocusable,inputProps:p,...b}=x;let d=o.isChecked;(e==null?void 0:e.value)!=null&&f!=null&&(d=e.value===f);let R=m;e!=null&&e.onChange&&f!=null&&(R=ce(e.onChange,m));const I=(o==null?void 0:o.name)??(e==null?void 0:e.name),{getInputProps:i,getRadioProps:M,getLabelProps:S,getRootProps:w,htmlProps:v}=ye({...b,isChecked:d,isFocusable:h,isDisabled:C,onChange:R,name:I}),[a,t]=me(v,te),y=M(t),l=i(p,u),A=S(),E=Object.assign({},a,w()),N={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...P.container},G={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...P.control},q={userSelect:"none",marginStart:c,...P.label};return j.jsxs(K.label,{className:"chakra-radio",...E,__css:N,children:[j.jsx("input",{className:"chakra-radio__input",...l}),j.jsx(K.span,{className:"chakra-radio__control",...y,__css:G}),g&&j.jsx(K.span,{className:"chakra-radio__label",...A,__css:q,children:g})]})});Pe.displayName="Radio";export{be as R,Pe as a};