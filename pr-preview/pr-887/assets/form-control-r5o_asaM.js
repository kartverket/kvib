import{j as u}from"./extends-CwFRzn3r.js";import{r as a}from"./index-BwDkhjyp.js";import{f as y}from"./forward-ref-BWI-Phbn.js";import{a as q,o as w}from"./use-style-config-YUvqttAg.js";import{c as k}from"./factory-C6UFhaBW.js";import{c as T}from"./context-CBKykClo.js";import{c as R}from"./cx-BDMMs1jM.js";import{m as v}from"./use-merge-refs-Bdxaq0s4.js";import{d as i}from"./attr-sHTFgF0E.js";const[E,M]=T({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[D,O]=T({strict:!1,name:"FormControlContext"});function A(f){const{id:l,isRequired:c,isInvalid:t,isDisabled:o,isReadOnly:r,...m}=f,x=a.useId(),n=l||`field-${x}`,p=`${n}-label`,F=`${n}-feedback`,C=`${n}-helptext`,[H,b]=a.useState(!1),[S,P]=a.useState(!1),[d,g]=a.useState(!1),I=a.useCallback((e={},s=null)=>({id:C,...e,ref:v(s,h=>{h&&P(!0)})}),[C]),_=a.useCallback((e={},s=null)=>({...e,ref:s,"data-focus":i(d),"data-disabled":i(o),"data-invalid":i(t),"data-readonly":i(r),id:e.id!==void 0?e.id:p,htmlFor:e.htmlFor!==void 0?e.htmlFor:n}),[n,o,d,t,r,p]),j=a.useCallback((e={},s=null)=>({id:F,...e,ref:v(s,h=>{h&&b(!0)}),"aria-live":"polite"}),[F]),N=a.useCallback((e={},s=null)=>({...e,...m,ref:s,role:"group","data-focus":i(d),"data-disabled":i(o),"data-invalid":i(t),"data-readonly":i(r)}),[m,o,d,t,r]),$=a.useCallback((e={},s=null)=>({...e,ref:s,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!c,isInvalid:!!t,isReadOnly:!!r,isDisabled:!!o,isFocused:!!d,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:H,setHasFeedbackText:b,hasHelpText:S,setHasHelpText:P,id:n,labelId:p,feedbackId:F,helpTextId:C,htmlProps:m,getHelpTextProps:I,getErrorMessageProps:j,getRootProps:N,getLabelProps:_,getRequiredIndicatorProps:$}}const B=y(function(l,c){const t=q("Form",l),o=w(l),{getRootProps:r,htmlProps:m,...x}=A(o),n=R("chakra-form-control",l.className);return u.jsx(D,{value:x,children:u.jsx(E,{value:t,children:u.jsx(k.div,{...r({},c),className:n,__css:t.container})})})});B.displayName="FormControl";const L=y(function(l,c){const t=O(),o=M(),r=R("chakra-form__helper-text",l.className);return u.jsx(k.div,{...t==null?void 0:t.getHelpTextProps(l,c),__css:o.helperText,className:r})});L.displayName="FormHelperText";export{B as F,M as a,L as b,O as u};
