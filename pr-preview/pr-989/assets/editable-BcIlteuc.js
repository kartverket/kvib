import{j as E}from"./jsx-runtime-CLpGMVip.js";import{e as M,m as I,a as h,f as le,h as ue,j as ce}from"./factory-CBKQa84h.js";import{r as v}from"./index-Cjd7pOeM.js";import{m as ge}from"./factory-BVqvlKn7.js";import{c as fe}from"./create-slot-recipe-context-CYjx6fSM.js";import{g as be,b as Ee,d as D,r as V,e as X,f as F,h as _,j as H,k as $,l as ve,c as pe,m as me,n as f,o as A,p as he,q as Ce}from"./create-context-Bo3s1W4a.js";import{c as Pe,a as K}from"./create-split-props-L-tVc3XO.js";import{c as Ie,u as ye,a as x,b as we,n as Te}from"./use-event-CpbGnmNH.js";import{u as Oe}from"./use-environment-context-BWDdXZkm.js";import{u as z}from"./use-field-context-C9LJE8AZ.js";function Le(e){const t={each(r){var i;for(let n=0;n<((i=e.frames)==null?void 0:i.length);n+=1){const o=e.frames[n];o&&r(o)}},addEventListener(r,i,n){return t.each(o=>{try{o.document.addEventListener(r,i,n)}catch{}}),()=>{try{t.removeEventListener(r,i,n)}catch{}}},removeEventListener(r,i,n){t.each(o=>{try{o.document.removeEventListener(r,i,n)}catch{}})}};return t}function Ve(e){const t=e.frameElement!=null?e.parent:null;return{addEventListener:(r,i,n)=>{try{t==null||t.addEventListener(r,i,n)}catch{}return()=>{try{t==null||t.removeEventListener(r,i,n)}catch{}}},removeEventListener:(r,i,n)=>{try{t==null||t.removeEventListener(r,i,n)}catch{}}}}var j="pointerdown.outside",B="focus.outside";function Se(e){for(const t of e)if(_(t)&&X(t))return!0;return!1}var G=e=>"clientY"in e;function ke(e,t){if(!G(t)||!e)return!1;const r=e.getBoundingClientRect();return r.width===0||r.height===0?!1:r.top<=t.clientY&&t.clientY<=r.top+r.height&&r.left<=t.clientX&&t.clientX<=r.left+r.width}function Re(e,t){return e.y<=t.y&&t.y<=e.y+e.height&&e.x<=t.x&&t.x<=e.x+e.width}function U(e,t){if(!t||!G(e))return!1;const r=t.scrollHeight>t.clientHeight,i=r&&e.clientX>t.offsetLeft+t.clientWidth,n=t.scrollWidth>t.clientWidth,o=n&&e.clientY>t.offsetTop+t.clientHeight,c={x:t.offsetLeft,y:t.offsetTop,width:t.clientWidth+(r?16:0),height:t.clientHeight+(n?16:0)},l={x:e.clientX,y:e.clientY};return Re(c,l)?i||o:!1}function Ae(e,t){const{exclude:r,onFocusOutside:i,onPointerDownOutside:n,onInteractOutside:o,defer:c}=t;if(!e)return;const l=be(e),w=Ee(e),g=Le(w),T=Ve(w);function C(d){const u=F(d);if(!_(u)||!u.isConnected||H(e,u)||ke(e,d))return!1;const b=l.querySelector(`[aria-controls="${e.id}"]`);if(b){const R=$(b);if(U(d,R))return!1}const k=$(e);return U(d,k)?!1:!(r!=null&&r(u))}const p=new Set;function O(d){function u(){var R;const b=c?V:N=>N(),k=((R=d.composedPath)==null?void 0:R.call(d))??[d.target];b(()=>{if(!(!e||!C(d))){if(n||o){const N=M(n,o);e.addEventListener(j,N,{once:!0})}W(e,j,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,contextmenu:ve(d),focusable:Se(k)}})}})}d.pointerType==="touch"?(p.forEach(b=>b()),p.add(D(l,"click",u,{once:!0})),p.add(T.addEventListener("click",u,{once:!0})),p.add(g.addEventListener("click",u,{once:!0}))):u()}const m=new Set,s=setTimeout(()=>{m.add(D(l,"pointerdown",O,!0)),m.add(T.addEventListener("pointerdown",O,!0)),m.add(g.addEventListener("pointerdown",O,!0))},0);function S(d){(c?V:b=>b())(()=>{if(!(!e||!C(d))){if(i||o){const b=M(i,o);e.addEventListener(B,b,{once:!0})}W(e,B,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,contextmenu:!1,focusable:X(F(d))}})}})}return m.add(D(l,"focusin",S,!0)),m.add(T.addEventListener("focusin",S,!0)),m.add(g.addEventListener("focusin",S,!0)),()=>{clearTimeout(s),p.forEach(d=>d()),m.forEach(d=>d())}}function xe(e,t){const{defer:r}=t,i=r?V:o=>o(),n=[];return n.push(i(()=>{const o=typeof e=="function"?e():e;n.push(Ae(o,t))})),()=>{n.forEach(o=>o==null?void 0:o())}}function W(e,t,r){const i=e.ownerDocument.defaultView||window,n=new i.CustomEvent(t,r);return e.dispatchEvent(n)}const[J,y]=pe({name:"EditableContext",hookName:"useEditableContext",providerName:"<EditableProvider />"}),Q=v.forwardRef((e,t)=>{const r=y(),i=I(r.getAreaProps(),e);return E.jsx(h.div,{...i,ref:t})});Q.displayName="EditableArea";const Z=v.forwardRef((e,t)=>{const r=y(),i=I(r.getCancelTriggerProps(),e);return E.jsx(h.button,{...i,ref:t})});Z.displayName="EditableCancelTrigger";const Ne=e=>e.children(y()),ee=v.forwardRef((e,t)=>{const r=y(),i=I(r.getControlProps(),e);return E.jsx(h.div,{...i,ref:t})});ee.displayName="EditableControl";const te=v.forwardRef((e,t)=>{const r=y(),i=I(r.getEditTriggerProps(),e);return E.jsx(h.button,{...i,ref:t})});te.displayName="EditableEditTrigger";const re=v.forwardRef((e,t)=>{const r=y(),i=I(r.getInputProps(),e),n=z();return E.jsx(h.input,{"aria-describedby":n==null?void 0:n.ariaDescribedby,...i,ref:t})});re.displayName="EditableInput";const ie=v.forwardRef((e,t)=>{const r=y(),i=I(r.getPreviewProps(),e);return E.jsx(h.span,{...i,ref:t})});ie.displayName="EditablePreview";var De=Pe("editable").parts("root","area","label","preview","input","editTrigger","submitTrigger","cancelTrigger","control"),P=De.build(),a=me({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`editable:${e.id}`},getAreaId:e=>{var t;return((t=e.ids)==null?void 0:t.area)??`editable:${e.id}:area`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`editable:${e.id}:label`},getPreviewId:e=>{var t;return((t=e.ids)==null?void 0:t.preview)??`editable:${e.id}:preview`},getInputId:e=>{var t;return((t=e.ids)==null?void 0:t.input)??`editable:${e.id}:input`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`editable:${e.id}:control`},getSubmitTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.submitTrigger)??`editable:${e.id}:submit`},getCancelTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.cancelTrigger)??`editable:${e.id}:cancel`},getEditTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.editTrigger)??`editable:${e.id}:edit`},getInputEl:e=>a.getById(e,a.getInputId(e)),getPreviewEl:e=>a.getById(e,a.getPreviewId(e)),getSubmitTriggerEl:e=>a.getById(e,a.getSubmitTriggerId(e)),getCancelTriggerEl:e=>a.getById(e,a.getCancelTriggerId(e)),getEditTriggerEl:e=>a.getById(e,a.getEditTriggerId(e))});function Me(e,t,r){const i=e.context.disabled,n=e.context.isInteractive,o=e.context.readOnly,c=e.context.invalid,l=e.context.autoResize,w=e.context.translations,g=e.matches("edit"),T=e.context.placeholder,C=typeof T=="string"?{edit:T,preview:T}:T,p=e.context.value,O=p.trim()==="",m=O?(C==null?void 0:C.preview)??"":p;return{editing:g,empty:O,value:p,valueText:m,setValue(s){t({type:"VALUE.SET",value:s,src:"setValue"})},clearValue(){t({type:"VALUE.SET",value:"",src:"clearValue"})},edit(){n&&t("EDIT")},cancel(){n&&t("CANCEL")},submit(){n&&t("SUBMIT")},getRootProps(){return r.element({...P.root.attrs,id:a.getRootId(e.context),dir:e.context.dir})},getAreaProps(){return r.element({...P.area.attrs,id:a.getAreaId(e.context),dir:e.context.dir,style:l?{display:"inline-grid"}:void 0,"data-focus":f(g),"data-disabled":f(i),"data-placeholder-shown":f(O)})},getLabelProps(){return r.label({...P.label.attrs,id:a.getLabelId(e.context),dir:e.context.dir,htmlFor:a.getInputId(e.context),"data-focus":f(g),"data-invalid":f(c),onClick(){if(g)return;const s=a.getPreviewEl(e.context);s==null||s.focus({preventScroll:!0})}})},getInputProps(){return r.input({...P.input.attrs,dir:e.context.dir,"aria-label":w.input,name:e.context.name,form:e.context.form,id:a.getInputId(e.context),hidden:l?void 0:!g,placeholder:C==null?void 0:C.edit,maxLength:e.context.maxLength,required:e.context.required,disabled:i,"data-disabled":f(i),readOnly:o,"data-readonly":f(o),"aria-invalid":A(c),"data-invalid":f(c),"data-autoresize":f(l),defaultValue:p,size:l?1:void 0,onChange(s){t({type:"VALUE.SET",src:"input.change",value:s.currentTarget.value})},onKeyDown(s){if(s.defaultPrevented||he(s))return;const d={Escape(){t("CANCEL"),s.preventDefault()},Enter(u){if(!e.context.submitOnEnter)return;const{localName:b}=u.currentTarget;if(b==="textarea"){if(!(Ce()?u.metaKey:u.ctrlKey))return;t({type:"SUBMIT",src:"keydown.enter"});return}b==="input"&&!u.shiftKey&&!u.metaKey&&(t({type:"SUBMIT",src:"keydown.enter"}),u.preventDefault())}}[s.key];d&&d(s)},style:l?{gridArea:"1 / 1 / auto / auto",visibility:g?void 0:"hidden"}:void 0})},getPreviewProps(){return r.element({id:a.getPreviewId(e.context),...P.preview.attrs,dir:e.context.dir,"data-placeholder-shown":f(O),"aria-readonly":A(o),"data-readonly":f(i),"data-disabled":f(i),"aria-disabled":A(i),"aria-invalid":A(c),"data-invalid":f(c),"aria-label":w.edit,"data-autoresize":f(l),children:m,hidden:l?void 0:g,tabIndex:n?0:void 0,onClick(){n&&e.context.activationMode==="click"&&t({type:"EDIT",src:"click"})},onFocus(){n&&e.context.activationMode==="focus"&&t({type:"EDIT",src:"focus"})},onDoubleClick(s){s.defaultPrevented||n&&e.context.activationMode==="dblclick"&&t({type:"EDIT",src:"dblclick"})},style:l?{whiteSpace:"pre",userSelect:"none",gridArea:"1 / 1 / auto / auto",visibility:g?"hidden":void 0,overflow:"hidden",textOverflow:"ellipsis"}:void 0})},getEditTriggerProps(){return r.button({...P.editTrigger.attrs,id:a.getEditTriggerId(e.context),dir:e.context.dir,"aria-label":w.edit,hidden:g,type:"button",disabled:i,onClick(s){s.defaultPrevented||n&&t({type:"EDIT",src:"edit.click"})}})},getControlProps(){return r.element({id:a.getControlId(e.context),...P.control.attrs,dir:e.context.dir})},getSubmitTriggerProps(){return r.button({...P.submitTrigger.attrs,dir:e.context.dir,id:a.getSubmitTriggerId(e.context),"aria-label":w.submit,hidden:!g,disabled:i,type:"button",onClick(s){s.defaultPrevented||n&&t({type:"SUBMIT",src:"submit.click"})}})},getCancelTriggerProps(){return r.button({...P.cancelTrigger.attrs,dir:e.context.dir,"aria-label":w.cancel,id:a.getCancelTriggerId(e.context),hidden:!g,type:"button",disabled:i,onClick(s){s.defaultPrevented||n&&t({type:"CANCEL",src:"cancel.click"})}})}}}var Fe=e=>["both","enter"].includes(e.submitMode),q=e=>["both","blur"].includes(e.submitMode);function $e(e){const t=le(e);return ue({id:"editable",initial:t.edit?"edit":"preview",entry:t.edit?["focusInput"]:void 0,context:{activationMode:"focus",submitMode:"both",value:"",previousValue:"",selectOnFocus:!0,disabled:!1,readOnly:!1,...t,translations:{input:"editable input",edit:"edit",submit:"submit",cancel:"cancel",...t.translations}},watch:{value:["syncInputValue"],edit:["toggleEditing"]},computed:{submitOnEnter:Fe,submitOnBlur:q,isInteractive:r=>!(r.disabled||r.readOnly)},on:{"VALUE.SET":{actions:"setValue"}},states:{preview:{entry:["blurInputIfNeeded"],on:{"CONTROLLED.EDIT":{target:"edit",actions:["setPreviousValue","focusInput"]},EDIT:[{guard:"isEditControlled",actions:["invokeOnEdit"]},{target:"edit",actions:["setPreviousValue","focusInput","invokeOnEdit"]}]}},edit:{activities:["trackInteractOutside"],on:{"CONTROLLED.PREVIEW":[{guard:"isSubmitEvent",target:"preview",actions:["setPreviousValue","restoreFocus","invokeOnSubmit"]},{target:"preview",actions:["revertValue","restoreFocus","invokeOnCancel"]}],CANCEL:[{guard:"isEditControlled",actions:["invokeOnPreview"]},{target:"preview",actions:["revertValue","restoreFocus","invokeOnCancel","invokeOnPreview"]}],SUBMIT:[{guard:"isEditControlled",actions:["invokeOnPreview"]},{target:"preview",actions:["setPreviousValue","restoreFocus","invokeOnSubmit","invokeOnPreview"]}]}}}},{guards:{isEditControlled:r=>!!r["edit.controlled"],isSubmitEvent:(r,i)=>{var n;return((n=i.previousEvent)==null?void 0:n.type)==="SUBMIT"}},activities:{trackInteractOutside(r,i,{send:n}){return xe(a.getInputEl(r),{exclude(o){return[a.getCancelTriggerEl(r),a.getSubmitTriggerEl(r)].some(l=>H(l,o))},onFocusOutside:r.onFocusOutside,onPointerDownOutside:r.onPointerDownOutside,onInteractOutside(o){var l;if((l=r.onInteractOutside)==null||l.call(r,o),o.defaultPrevented)return;const{focusable:c}=o.detail;n({type:q(r)?"SUBMIT":"CANCEL",src:"interact-outside",focusable:c})}})}},actions:{restoreFocus(r,i){i.focusable||V(()=>{var o;const n=((o=r.finalFocusEl)==null?void 0:o.call(r))??a.getEditTriggerEl(r);n==null||n.focus({preventScroll:!0})})},focusInput(r){V(()=>{const i=a.getInputEl(r);i&&(r.selectOnFocus?i.select():i.focus({preventScroll:!0}))})},invokeOnCancel(r){var i;(i=r.onValueRevert)==null||i.call(r,{value:r.previousValue})},invokeOnSubmit(r){var i;(i=r.onValueCommit)==null||i.call(r,{value:r.value})},invokeOnEdit(r){var i;(i=r.onEditChange)==null||i.call(r,{edit:!0})},invokeOnPreview(r){var i;(i=r.onEditChange)==null||i.call(r,{edit:!1})},toggleEditing(r,i,{send:n}){n({type:r.edit?"CONTROLLED.EDIT":"CONTROLLED.PREVIEW",previousEvent:i})},syncInputValue(r){ne.value(r)},setValue(r,i){const n=r.maxLength!=null?i.value.slice(0,r.maxLength):i.value;Y.value(r,n)},setPreviousValue(r){r.previousValue=r.value},revertValue(r){Y.value(r,r.previousValue)},blurInputIfNeeded(r){var i;(i=a.getInputEl(r))==null||i.blur()}}})}var ne={value:e=>{const t=a.getInputEl(e);a.setValue(t,e.value)}},je={change(e){var t;(t=e.onValueChange)==null||t.call(e,{value:e.value}),ne.value(e)}},Y={value(e,t){ce(e.value,t)||(e.value=t,je.change(e))}};Ie()(["activationMode","autoResize","dir","disabled","finalFocusEl","form","getRootNode","id","ids","invalid","maxLength","name","onEditChange","onFocusOutside","onInteractOutside","onPointerDownOutside","onValueChange","onValueCommit","onValueRevert","placeholder","readOnly","required","selectOnFocus","edit","edit.controlled","submitMode","translations","value"]);const Be=(e={})=>{const{getRootNode:t}=Oe(),{dir:r}=ye(),i=z(),n={id:v.useId(),ids:{label:i==null?void 0:i.ids.label,input:i==null?void 0:i.ids.control},dir:r,disabled:i==null?void 0:i.disabled,invalid:i==null?void 0:i.invalid,readOnly:i==null?void 0:i.readOnly,required:i==null?void 0:i.required,getRootNode:t,edit:e.defaultEdit,value:e.defaultValue,"edit.controlled":e.edit!==void 0,...e},o={...n,value:e.value,onValueChange:x(e.onValueChange,{sync:!0}),onEditChange:x(e.onEditChange),onValueCommit:x(e.onValueCommit),onValueRevert:x(e.onValueRevert)},[c,l]=we($e(n),{context:o});return Me(c,l,Te)},oe=v.forwardRef((e,t)=>{const[r,i]=K()(e,["activationMode","autoResize","defaultEdit","defaultValue","disabled","edit","finalFocusEl","form","id","ids","invalid","maxLength","name","onEditChange","onFocusOutside","onInteractOutside","onPointerDownOutside","onValueChange","onValueCommit","onValueRevert","placeholder","readOnly","required","selectOnFocus","submitMode","translations","value"]),n=Be(r),o=I(n.getRootProps(),i);return E.jsx(J,{value:n,children:E.jsx(h.div,{...o,ref:t})})});oe.displayName="EditableRoot";const ae=v.forwardRef((e,t)=>{const[{value:r},i]=K()(e,["value"]),n=I(r.getRootProps(),i);return E.jsx(J,{value:r,children:E.jsx(h.div,{...n,ref:t})})});ae.displayName="EditableRootProvider";const de=v.forwardRef((e,t)=>{const r=y(),i=I(r.getSubmitTriggerProps(),e);return E.jsx(h.button,{...i,ref:t})});de.displayName="EditableSubmitTrigger";const{withProvider:se,withContext:L,useStyles:Ze,PropsProvider:Ue}=fe({key:"editable"}),et=se(ae,"root",{forwardAsChild:!0}),tt=se(oe,"root",{forwardAsChild:!0}),rt=Ue,it=L(ie,"preview",{forwardAsChild:!0}),nt=L(re,"input",{forwardAsChild:!0}),We=v.forwardRef(function(t,r){const i=y(),n=ge(i.getInputProps(),t);return E.jsx(h.textarea,{ref:r,...n})}),ot=L(We,"input",{forwardAsChild:!0}),at=L(ee,"control",{forwardAsChild:!0}),dt=L(Q,"area",{forwardAsChild:!0}),st=L(te,"editTrigger",{forwardAsChild:!0}),lt=L(de,"submitTrigger",{forwardAsChild:!0}),ut=L(Z,"cancelTrigger",{forwardAsChild:!0}),ct=Ne;export{tt as E,nt as a,it as b,De as c,dt as d,ut as e,ct as f,at as g,st as h,rt as i,et as j,lt as k,ot as l,y as m,Ze as n,xe as t,Be as u};
