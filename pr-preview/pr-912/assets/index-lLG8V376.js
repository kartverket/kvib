import{d as w,e as V,w as S,f as d,g as m,k as L,o as M,p as A,z as D,r as C,t as F,A as R}from"./create-slot-recipe-context-BTQZ2sOO.js";import{t as B}from"./index-P9vquDP9.js";var N=w("editable").parts("root","area","label","preview","input","editTrigger","submitTrigger","cancelTrigger","control"),c=N.build(),n=V({getRootId:e=>{var i;return((i=e.ids)==null?void 0:i.root)??`editable:${e.id}`},getAreaId:e=>{var i;return((i=e.ids)==null?void 0:i.area)??`editable:${e.id}:area`},getLabelId:e=>{var i;return((i=e.ids)==null?void 0:i.label)??`editable:${e.id}:label`},getPreviewId:e=>{var i;return((i=e.ids)==null?void 0:i.preview)??`editable:${e.id}:preview`},getInputId:e=>{var i;return((i=e.ids)==null?void 0:i.input)??`editable:${e.id}:input`},getControlId:e=>{var i;return((i=e.ids)==null?void 0:i.control)??`editable:${e.id}:control`},getSubmitTriggerId:e=>{var i;return((i=e.ids)==null?void 0:i.submitTrigger)??`editable:${e.id}:submit`},getCancelTriggerId:e=>{var i;return((i=e.ids)==null?void 0:i.cancelTrigger)??`editable:${e.id}:cancel`},getEditTriggerId:e=>{var i;return((i=e.ids)==null?void 0:i.editTrigger)??`editable:${e.id}:edit`},getInputEl:e=>n.getById(e,n.getInputId(e)),getPreviewEl:e=>n.getById(e,n.getPreviewId(e)),getSubmitTriggerEl:e=>n.getById(e,n.getSubmitTriggerId(e)),getCancelTriggerEl:e=>n.getById(e,n.getCancelTriggerId(e)),getEditTriggerEl:e=>n.getById(e,n.getEditTriggerId(e))});function j(e,i,t){const r=e.context.disabled,a=e.context.isInteractive,l=e.context.readOnly,g=e.context.invalid,u=e.context.autoResize,b=e.context.translations,s=e.matches("edit"),I=e.context.placeholder,v=typeof I=="string"?{edit:I,preview:I}:I,E=e.context.value,f=E.trim()==="",y=f?(v==null?void 0:v.preview)??"":E;return{editing:s,empty:f,value:E,valueText:y,setValue(o){i({type:"VALUE.SET",value:o,src:"setValue"})},clearValue(){i({type:"VALUE.SET",value:"",src:"clearValue"})},edit(){a&&i("EDIT")},cancel(){a&&i("CANCEL")},submit(){a&&i("SUBMIT")},getRootProps(){return t.element({...c.root.attrs,id:n.getRootId(e.context),dir:e.context.dir})},getAreaProps(){return t.element({...c.area.attrs,id:n.getAreaId(e.context),dir:e.context.dir,style:u?{display:"inline-grid"}:void 0,"data-focus":d(s),"data-disabled":d(r),"data-placeholder-shown":d(f)})},getLabelProps(){return t.label({...c.label.attrs,id:n.getLabelId(e.context),dir:e.context.dir,htmlFor:n.getInputId(e.context),"data-focus":d(s),"data-invalid":d(g),onClick(){if(s)return;const o=n.getPreviewEl(e.context);o==null||o.focus({preventScroll:!0})}})},getInputProps(){return t.input({...c.input.attrs,dir:e.context.dir,"aria-label":b.input,name:e.context.name,form:e.context.form,id:n.getInputId(e.context),hidden:u?void 0:!s,placeholder:v==null?void 0:v.edit,maxLength:e.context.maxLength,required:e.context.required,disabled:r,"data-disabled":d(r),readOnly:l,"data-readonly":d(l),"aria-invalid":m(g),"data-invalid":d(g),"data-autoresize":d(u),defaultValue:E,size:u?1:void 0,onChange(o){i({type:"VALUE.SET",src:"input.change",value:o.currentTarget.value})},onKeyDown(o){if(o.defaultPrevented||L(o))return;const T={Escape(){i("CANCEL"),o.preventDefault()},Enter(p){if(!e.context.submitOnEnter)return;const{localName:O}=p.currentTarget;if(O==="textarea"){if(!(R()?p.metaKey:p.ctrlKey))return;i({type:"SUBMIT",src:"keydown.enter"});return}O==="input"&&!p.shiftKey&&!p.metaKey&&(i({type:"SUBMIT",src:"keydown.enter"}),p.preventDefault())}}[o.key];T&&T(o)},style:u?{gridArea:"1 / 1 / auto / auto",visibility:s?void 0:"hidden"}:void 0})},getPreviewProps(){return t.element({id:n.getPreviewId(e.context),...c.preview.attrs,dir:e.context.dir,"data-placeholder-shown":d(f),"aria-readonly":m(l),"data-readonly":d(r),"data-disabled":d(r),"aria-disabled":m(r),"aria-invalid":m(g),"data-invalid":d(g),"aria-label":b.edit,"data-autoresize":d(u),children:y,hidden:u?void 0:s,tabIndex:a?0:void 0,onClick(){a&&e.context.activationMode==="click"&&i({type:"EDIT",src:"click"})},onFocus(){a&&e.context.activationMode==="focus"&&i({type:"EDIT",src:"focus"})},onDoubleClick(o){o.defaultPrevented||a&&e.context.activationMode==="dblclick"&&i({type:"EDIT",src:"dblclick"})},style:u?{whiteSpace:"pre",userSelect:"none",gridArea:"1 / 1 / auto / auto",visibility:s?"hidden":void 0,overflow:"hidden",textOverflow:"ellipsis"}:void 0})},getEditTriggerProps(){return t.button({...c.editTrigger.attrs,id:n.getEditTriggerId(e.context),dir:e.context.dir,"aria-label":b.edit,hidden:s,type:"button",disabled:r,onClick(o){o.defaultPrevented||a&&i({type:"EDIT",src:"edit.click"})}})},getControlProps(){return t.element({id:n.getControlId(e.context),...c.control.attrs,dir:e.context.dir})},getSubmitTriggerProps(){return t.button({...c.submitTrigger.attrs,dir:e.context.dir,id:n.getSubmitTriggerId(e.context),"aria-label":b.submit,hidden:!s,disabled:r,type:"button",onClick(o){o.defaultPrevented||a&&i({type:"SUBMIT",src:"submit.click"})}})},getCancelTriggerProps(){return t.button({...c.cancelTrigger.attrs,dir:e.context.dir,"aria-label":b.cancel,id:n.getCancelTriggerId(e.context),hidden:!s,type:"button",disabled:r,onClick(o){o.defaultPrevented||a&&i({type:"CANCEL",src:"cancel.click"})}})}}}var U=e=>["both","enter"].includes(e.submitMode),h=e=>["both","blur"].includes(e.submitMode);function G(e){const i=M(e);return A({id:"editable",initial:i.edit?"edit":"preview",entry:i.edit?["focusInput"]:void 0,context:{activationMode:"focus",submitMode:"both",value:"",previousValue:"",selectOnFocus:!0,disabled:!1,readOnly:!1,...i,translations:{input:"editable input",edit:"edit",submit:"submit",cancel:"cancel",...i.translations}},watch:{value:["syncInputValue"],edit:["toggleEditing"]},computed:{submitOnEnter:U,submitOnBlur:h,isInteractive:t=>!(t.disabled||t.readOnly)},on:{"VALUE.SET":{actions:"setValue"}},states:{preview:{entry:["blurInputIfNeeded"],on:{"CONTROLLED.EDIT":{target:"edit",actions:["setPreviousValue","focusInput"]},EDIT:[{guard:"isEditControlled",actions:["invokeOnEdit"]},{target:"edit",actions:["setPreviousValue","focusInput","invokeOnEdit"]}]}},edit:{activities:["trackInteractOutside"],on:{"CONTROLLED.PREVIEW":[{guard:"isSubmitEvent",target:"preview",actions:["setPreviousValue","restoreFocus","invokeOnSubmit"]},{target:"preview",actions:["revertValue","restoreFocus","invokeOnCancel"]}],CANCEL:[{guard:"isEditControlled",actions:["invokeOnPreview"]},{target:"preview",actions:["revertValue","restoreFocus","invokeOnCancel","invokeOnPreview"]}],SUBMIT:[{guard:"isEditControlled",actions:["invokeOnPreview"]},{target:"preview",actions:["setPreviousValue","restoreFocus","invokeOnSubmit","invokeOnPreview"]}]}}}},{guards:{isEditControlled:t=>!!t["edit.controlled"],isSubmitEvent:(t,r)=>{var a;return((a=r.previousEvent)==null?void 0:a.type)==="SUBMIT"}},activities:{trackInteractOutside(t,r,{send:a}){return B(n.getInputEl(t),{exclude(l){return[n.getCancelTriggerEl(t),n.getSubmitTriggerEl(t)].some(u=>D(u,l))},onFocusOutside:t.onFocusOutside,onPointerDownOutside:t.onPointerDownOutside,onInteractOutside(l){var u;if((u=t.onInteractOutside)==null||u.call(t,l),l.defaultPrevented)return;const{focusable:g}=l.detail;a({type:h(t)?"SUBMIT":"CANCEL",src:"interact-outside",focusable:g})}})}},actions:{restoreFocus(t,r){r.focusable||C(()=>{var l;const a=((l=t.finalFocusEl)==null?void 0:l.call(t))??n.getEditTriggerEl(t);a==null||a.focus({preventScroll:!0})})},focusInput(t){C(()=>{const r=n.getInputEl(t);r&&(t.selectOnFocus?r.select():r.focus({preventScroll:!0}))})},invokeOnCancel(t){var r;(r=t.onValueRevert)==null||r.call(t,{value:t.previousValue})},invokeOnSubmit(t){var r;(r=t.onValueCommit)==null||r.call(t,{value:t.value})},invokeOnEdit(t){var r;(r=t.onEditChange)==null||r.call(t,{edit:!0})},invokeOnPreview(t){var r;(r=t.onEditChange)==null||r.call(t,{edit:!1})},toggleEditing(t,r,{send:a}){a({type:t.edit?"CONTROLLED.EDIT":"CONTROLLED.PREVIEW",previousEvent:r})},syncInputValue(t){k.value(t)},setValue(t,r){const a=t.maxLength!=null?r.value.slice(0,t.maxLength):r.value;P.value(t,a)},setPreviousValue(t){t.previousValue=t.value},revertValue(t){P.value(t,t.previousValue)},blurInputIfNeeded(t){var r;(r=n.getInputEl(t))==null||r.blur()}}})}var k={value:e=>{const i=n.getInputEl(e);n.setValue(i,e.value)}},$={change(e){var i;(i=e.onValueChange)==null||i.call(e,{value:e.value}),k.value(e)}},P={value(e,i){F(e.value,i)||(e.value=i,$.change(e))}};S()(["activationMode","autoResize","dir","disabled","finalFocusEl","form","getRootNode","id","ids","invalid","maxLength","name","onEditChange","onFocusOutside","onInteractOutside","onPointerDownOutside","onValueChange","onValueCommit","onValueRevert","placeholder","readOnly","required","selectOnFocus","edit","edit.controlled","submitMode","translations","value"]);export{N as a,j as c,G as m};
