import{a5 as w,aj as u,av as i,a6 as c,a3 as j,aF as V,ay as l,az as N,aG as k,a1 as A}from"./create-slot-recipe-context-BTQZ2sOO.js";import{j as a}from"./jsx-runtime-CQsLhzk5.js";import{r as s}from"./index-Wp2u197Z.js";import{m as O,c as E}from"./index-Brhs1Hfl.js";import{u as I}from"./use-field-context-B2lpNrC2.js";const[m,d]=w({name:"PinInputContext",hookName:"usePinInputContext",providerName:"<PinInputProvider />"}),v=s.forwardRef((t,o)=>{const e=d(),n=u(e.getControlProps(),t);return a.jsx(i.div,{...n,ref:o})});v.displayName="PinInputControl";const C=s.forwardRef((t,o)=>{const e=d(),n=u(e.getHiddenInputProps(),t),r=I();return a.jsx(i.input,{"aria-describedby":r==null?void 0:r.ariaDescribedby,...n,ref:o})});C.displayName="PinInputHiddenInput";const x=s.forwardRef((t,o)=>{const[e,n]=c()(t,["index"]),r=d(),p=u(r.getInputProps(e),n);return a.jsx(i.input,{...p,ref:o})});x.displayName="PinInputInput";const g=s.forwardRef((t,o)=>{const e=d(),n=u(e.getLabelProps(),t);return a.jsx(i.label,{...n,ref:o})});g.displayName="PinInputLabel";const F=(t={})=>{const{getRootNode:o}=j(),{dir:e}=V(),n=I(),r={id:s.useId(),ids:{label:n==null?void 0:n.ids.label,hiddenInput:n==null?void 0:n.ids.control},disabled:n==null?void 0:n.disabled,readOnly:n==null?void 0:n.readOnly,required:n==null?void 0:n.required,invalid:n==null?void 0:n.invalid,dir:e,getRootNode:o,value:t.defaultValue,...t},p={...r,value:t.value,onValueChange:l(t.onValueChange,{sync:!0}),onValueComplete:l(t.onValueComplete),onValueInvalid:l(t.onValueInvalid)},[R,f]=N(O(r),{context:p});return E(R,f,k)},h=s.forwardRef((t,o)=>{const[e,n]=c()(t,["autoFocus","blurOnComplete","defaultValue","disabled","form","id","ids","invalid","mask","name","onValueChange","onValueComplete","onValueInvalid","otp","pattern","placeholder","readOnly","required","selectOnFocus","translations","type","value"]),r=F(e),p=u(r.getRootProps(),n);return a.jsx(m,{value:r,children:a.jsx(i.div,{...p,ref:o})})});h.displayName="PinInputRoot";const y=s.forwardRef((t,o)=>{const[{value:e},n]=c()(t,["value"]),r=u(e.getRootProps(),n);return a.jsx(m,{value:e,children:a.jsx(i.div,{...r,ref:o})})});y.displayName="PinInputRootProvider";const{withProvider:b,withContext:P,useStyles:z,PropsProvider:D}=A({key:"pinInput"});b(y,"root",{forwardAsChild:!0});const G=b(h,"root",{forwardProps:["mask"],forwardAsChild:!0}),M=P(v,"control",{forwardAsChild:!0}),B=P(x,"input",{forwardAsChild:!0});P(g,"label",{forwardAsChild:!0});const J=C;export{G as P,J as a,M as b,B as c};
