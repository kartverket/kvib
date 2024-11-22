import{j as u}from"./jsx-runtime-sfY7k0Xq.js";import{r}from"./index-CcKhGcwW.js";import{c as D}from"./create-slot-recipe-context-CYF_0Bn9.js";import{c as z,b as W}from"./factory-Dr_T95xI.js";import{I as G}from"./icon-C_lHd8gp.js";import{u as P,F as J}from"./use-field-context-CcEUgBGI.js";import{a as F,c as K}from"./factory-C6a3rcZ4.js";import{c as Q}from"./create-split-props-u5h9OPvL.js";import{m as U,d as l,b as V}from"./index-DXXQsaeK.js";import{c as X}from"./create-context-DPShtm6F.js";import{p as c}from"./field.anatomy-BZ5UhGuB.js";import{z as T}from"./index-CxfNaWX6.js";const N=r.forwardRef((d,s)=>{const e=P(),t=T(e.getErrorTextProps(),d);return e!=null&&e.invalid?u.jsx(F.span,{...t,ref:s}):null});N.displayName="FieldErrorText";const j=r.forwardRef((d,s)=>{const e=P(),t=T(e==null?void 0:e.getHelperTextProps(),d);return u.jsx(F.span,{...t,ref:s})});j.displayName="FieldHelperText";const A=r.forwardRef((d,s)=>{const e=P(),t=T(e==null?void 0:e.getLabelProps(),d);return u.jsx(F.label,{...t,ref:s})});A.displayName="FieldLabel";const Y=typeof window<"u"?r.useLayoutEffect:r.useEffect,[be,_]=X({name:"FieldsetContext",hookName:"useFieldsetContext",providerName:"<FieldsetProvider />",strict:!1}),ee=d=>{const s=_(),{ids:e,disabled:t=!!(s!=null&&s.disabled),invalid:o=!1,readOnly:a=!1,required:n=!1}=d,x=r.useRef(!1),h=r.useRef(!1),i=d.id??r.useId(),g=r.useRef(null),v=(e==null?void 0:e.control)??`field::${i}`,p=(e==null?void 0:e.errorText)??`field::${i}::error-text`,f=(e==null?void 0:e.helperText)??`field::${i}::helper-text`,y=(e==null?void 0:e.label)??`field::${i}::label`;Y(()=>{const m=g.current;if(!m)return;const I=U(m),C=I.document,E=()=>{x.current=!!C.getElementById(p),h.current=!!C.getElementById(f)};E();const M=new I.MutationObserver(E);return M.observe(m,{childList:!0,subtree:!0}),()=>M.disconnect()},[p,f]);const R=r.useMemo(()=>{const m=[];return x.current&&o&&m.push(p),h.current&&m.push(f),m.join(" ")||void 0},[o,p,f]),L=r.useMemo(()=>()=>({...c.root.attrs,id:v,ref:g,role:"group","data-disabled":l(t),"data-invalid":l(o),"data-readonly":l(a)}),[t,o,a,v]),$=r.useMemo(()=>()=>({...c.label.attrs,id:y,"data-disabled":l(t),"data-invalid":l(o),"data-readonly":l(a),htmlFor:i}),[t,o,a,i,y]),b=r.useMemo(()=>()=>({"aria-describedby":R,"aria-invalid":V(o),"data-invalid":l(o),"data-required":l(n),"data-readonly":l(a),id:i,required:n,disabled:t,readOnly:a}),[R,o,n,a,i,t]),k=r.useMemo(()=>()=>({...b(),...c.input.attrs}),[b]),H=r.useMemo(()=>()=>({...b(),...c.textarea.attrs}),[b]),S=r.useMemo(()=>()=>({...b(),...c.select.attrs}),[b]),B=r.useMemo(()=>()=>({id:f,...c.helperText.attrs}),[f]),O=r.useMemo(()=>()=>({id:p,...c.errorText.attrs,"aria-live":"polite"}),[p]),Z=r.useMemo(()=>()=>({"aria-hidden":!0,...c.requiredIndicator.attrs}),[]);return{ariaDescribedby:R,ids:{root:v,control:i,label:y,errorText:p,helperText:f},refs:{rootRef:g},disabled:t,invalid:o,readOnly:a,required:n,getLabelProps:$,getRootProps:L,getInputProps:k,getTextareaProps:H,getSelectProps:S,getHelperTextProps:B,getErrorTextProps:O,getRequiredIndicatorProps:Z}},q=r.forwardRef((d,s)=>{const[e,t]=Q()(d,["id","ids","disabled","invalid","readOnly","required"]),o=ee(e),a=T(o.getRootProps(),t);return u.jsx(J,{value:o,children:u.jsx(F.div,{...a,ref:K(s,o.refs.rootRef)})})});q.displayName="FieldRoot";function re(d){const{viewBox:s="0 0 24 24",d:e,displayName:t,defaultProps:o={}}=d,a=r.Children.toArray(d.path),n=r.forwardRef((x,h)=>u.jsx(G,{ref:h,asChild:!1,viewBox:s,...o,...x,children:a.length?a:u.jsx("path",{fill:"currentColor",d:e})}));return n.displayName=t,n}const{withProvider:te,withContext:w,useStyles:oe,useClassNames:se,PropsProvider:Pe}=D({key:"field"}),Fe=te(q,"root",{forwardAsChild:!0}),Te=w(A,"label",{forwardAsChild:!0}),ge=w(j,"helperText",{forwardAsChild:!0}),ve=w(N,"errorText",{forwardAsChild:!0});re({d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"});const ye=r.forwardRef(function(s,e){const{fallback:t,children:o="*",...a}=s,n=P(),x=se(),h=oe();return n!=null&&n.required?u.jsx(z.span,{ref:e,"aria-hidden":"true",...a,className:W(x.requiredIndicator,s.className),css:[h.requiredIndicator,s.css],children:o}):t});export{Fe as F,Te as a,ye as b,ge as c,ve as d};
