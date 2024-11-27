import{c as R}from"./index-BRNWFSEf.js";import{a as S}from"./index-BgkvX0F_.js";import{c as N,q as w,B as P,C as A,d as m,h as k,r as h,D as G,k as D}from"./index-C5caIrke.js";import{q as $,t as F,c as V,a as L,u as B,g as U,v as H,x,w as z,d as y,y as M}from"./index-DXMatsKm.js";import{c as T}from"./index-Ctx6eFvH.js";var q=R("accordion").parts("root","item","itemTrigger","itemContent","itemIndicator"),f=q.build(),s=N({getRootId:e=>{var n;return((n=e.ids)==null?void 0:n.root)??`accordion:${e.id}`},getItemId:(e,n)=>{var t,o;return((o=(t=e.ids)==null?void 0:t.item)==null?void 0:o.call(t,n))??`accordion:${e.id}:item:${n}`},getItemContentId:(e,n)=>{var t,o;return((o=(t=e.ids)==null?void 0:t.itemContent)==null?void 0:o.call(t,n))??`accordion:${e.id}:content:${n}`},getItemTriggerId:(e,n)=>{var t,o;return((o=(t=e.ids)==null?void 0:t.itemTrigger)==null?void 0:o.call(t,n))??`accordion:${e.id}:trigger:${n}`},getRootEl:e=>s.getById(e,s.getRootId(e)),getTriggerEls:e=>{const t=`[aria-controls][data-ownedby='${CSS.escape(s.getRootId(e))}']:not([disabled])`;return w(s.getRootEl(e),t)},getFirstTriggerEl:e=>$(s.getTriggerEls(e)),getLastTriggerEl:e=>F(s.getTriggerEls(e)),getNextTriggerEl:(e,n)=>P(s.getTriggerEls(e),s.getItemTriggerId(e,n)),getPrevTriggerEl:(e,n)=>A(s.getTriggerEls(e),s.getItemTriggerId(e,n))});function ee(e,n,t){const o=e.context.focusedValue,l=e.context.value,r=e.context.multiple;function c(a){let i=a;r&&i.length>1&&(i=[i[0]]),n({type:"VALUE.SET",value:i})}function d(a){return{expanded:l.includes(a.value),focused:o===a.value,disabled:!!(a.disabled??e.context.disabled)}}return{focusedValue:o,value:l,setValue:c,getItemState:d,getRootProps(){return t.element({...f.root.attrs,dir:e.context.dir,id:s.getRootId(e.context),"data-orientation":e.context.orientation})},getItemProps(a){const i=d(a);return t.element({...f.item.attrs,dir:e.context.dir,id:s.getItemId(e.context,a.value),"data-state":i.expanded?"open":"closed","data-focus":m(i.focused),"data-disabled":m(i.disabled),"data-orientation":e.context.orientation})},getItemContentProps(a){const i=d(a);return t.element({...f.itemContent.attrs,dir:e.context.dir,role:"region",id:s.getItemContentId(e.context,a.value),"aria-labelledby":s.getItemTriggerId(e.context,a.value),hidden:!i.expanded,"data-state":i.expanded?"open":"closed","data-disabled":m(i.disabled),"data-focus":m(i.focused),"data-orientation":e.context.orientation})},getItemIndicatorProps(a){const i=d(a);return t.element({...f.itemIndicator.attrs,dir:e.context.dir,"aria-hidden":!0,"data-state":i.expanded?"open":"closed","data-disabled":m(i.disabled),"data-focus":m(i.focused),"data-orientation":e.context.orientation})},getItemTriggerProps(a){const{value:i}=a,g=d(a);return t.button({...f.itemTrigger.attrs,type:"button",dir:e.context.dir,id:s.getItemTriggerId(e.context,i),"aria-controls":s.getItemContentId(e.context,i),"aria-expanded":g.expanded,disabled:g.disabled,"data-orientation":e.context.orientation,"aria-disabled":g.disabled,"data-state":g.expanded?"open":"closed","data-ownedby":s.getRootId(e.context),onFocus(){g.disabled||n({type:"TRIGGER.FOCUS",value:i})},onBlur(){g.disabled||n("TRIGGER.BLUR")},onClick(p){g.disabled||(k()&&p.currentTarget.focus(),n({type:"TRIGGER.CLICK",value:i}))},onKeyDown(p){if(p.defaultPrevented||g.disabled)return;const C={ArrowDown(){e.context.isHorizontal||n({type:"GOTO.NEXT",value:i})},ArrowUp(){e.context.isHorizontal||n({type:"GOTO.PREV",value:i})},ArrowRight(){e.context.isHorizontal&&n({type:"GOTO.NEXT",value:i})},ArrowLeft(){e.context.isHorizontal&&n({type:"GOTO.PREV",value:i})},Home(){n({type:"GOTO.FIRST",value:i})},End(){n({type:"GOTO.LAST",value:i})}},E=S(p,{dir:e.context.dir,orientation:e.context.orientation}),O=C[E];O&&(O(p),p.preventDefault())}})}}}var{and:K,not:_}=U;function te(e){const n=V(e);return L({id:"accordion",initial:"idle",context:{focusedValue:null,value:[],collapsible:!1,multiple:!1,orientation:"vertical",...n},watch:{value:"coarseValue",multiple:"coarseValue"},created:"coarseValue",computed:{isHorizontal:t=>t.orientation==="horizontal"},on:{"VALUE.SET":{actions:["setValue"]}},states:{idle:{on:{"TRIGGER.FOCUS":{target:"focused",actions:"setFocusedValue"}}},focused:{on:{"GOTO.NEXT":{actions:"focusNextTrigger"},"GOTO.PREV":{actions:"focusPrevTrigger"},"TRIGGER.CLICK":[{guard:K("isExpanded","canToggle"),actions:["collapse"]},{guard:_("isExpanded"),actions:["expand"]}],"GOTO.FIRST":{actions:"focusFirstTrigger"},"GOTO.LAST":{actions:"focusLastTrigger"},"TRIGGER.BLUR":{target:"idle",actions:"clearFocusedValue"}}}}},{guards:{canToggle:t=>!!t.collapsible||!!t.multiple,isExpanded:(t,o)=>t.value.includes(o.value)},actions:{collapse(t,o){const l=t.multiple?H(t.value,o.value):[];v.value(t,t.multiple?l:[])},expand(t,o){const l=t.multiple?x(t.value,o.value):[o.value];v.value(t,l)},focusFirstTrigger(t){var o;(o=s.getFirstTriggerEl(t))==null||o.focus()},focusLastTrigger(t){var o;(o=s.getLastTriggerEl(t))==null||o.focus()},focusNextTrigger(t){if(!t.focusedValue)return;const o=s.getNextTriggerEl(t,t.focusedValue);o==null||o.focus()},focusPrevTrigger(t){if(!t.focusedValue)return;const o=s.getPrevTriggerEl(t,t.focusedValue);o==null||o.focus()},setFocusedValue(t,o){v.focusedValue(t,o.value)},clearFocusedValue(t){v.focusedValue(t,null)},setValue(t,o){v.value(t,o.value)},coarseValue(t){!t.multiple&&t.value.length>1&&(z("The value of accordion should be a single value when multiple is false."),t.value=[t.value[0]])}}})}var b={change(e){var n;(n=e.onValueChange)==null||n.call(e,{value:Array.from(e.value)})},focusChange(e){var n;(n=e.onFocusChange)==null||n.call(e,{value:e.focusedValue})}},v={value(e,n){y(e.value,n)||(e.value=n,b.change(e))},focusedValue(e,n){y(e.focusedValue,n)||(e.focusedValue=n,b.focusChange(e))}};T()(["collapsible","dir","disabled","getRootNode","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]);var X=T()(["value","disabled"]),ne=B(X),j=R("collapsible").parts("root","trigger","content"),I=j.build(),u=N({getRootId:e=>{var n;return((n=e.ids)==null?void 0:n.root)??`collapsible:${e.id}`},getContentId:e=>{var n;return((n=e.ids)==null?void 0:n.content)??`collapsible:${e.id}:content`},getTriggerId:e=>{var n;return((n=e.ids)==null?void 0:n.trigger)??`collapsible:${e.id}:trigger`},getRootEl:e=>u.getById(e,u.getRootId(e)),getContentEl:e=>u.getById(e,u.getContentId(e)),getTriggerEl:e=>u.getById(e,u.getTriggerId(e))});function oe(e,n,t){const o=e.matches("open","closing"),l=e.matches("open"),r=e.context.height,c=e.context.width,d=!!e.context.disabled,a=!e.context.initial&&l;return{disabled:d,visible:o,open:l,setOpen(i){i!==l&&n(i?"OPEN":"CLOSE")},getRootProps(){return t.element({...I.root.attrs,"data-state":l?"open":"closed",dir:e.context.dir,id:u.getRootId(e.context)})},getContentProps(){return t.element({...I.content.attrs,"data-state":a?void 0:l?"open":"closed",id:u.getContentId(e.context),"data-disabled":m(d),hidden:!o,style:{"--height":r!=null?`${r}px`:void 0,"--width":c!=null?`${c}px`:void 0}})},getTriggerProps(){return t.element({...I.trigger.attrs,id:u.getTriggerId(e.context),dir:e.context.dir,type:"button","data-state":l?"open":"closed","data-disabled":m(d),"aria-controls":u.getContentId(e.context),"aria-expanded":o||!1,onClick(i){i.defaultPrevented||d||n({type:l?"CLOSE":"OPEN",src:"trigger.click"})}})}}}function ie(e){const n=V(e);return L({id:"collapsible",initial:n.open?"open":"closed",context:{...n,height:0,width:0,initial:!1,stylesRef:null,unmountAnimationName:null},watch:{open:["setInitial","computeSize","toggleVisibility"]},exit:["clearInitial"],states:{closed:{tags:["closed"],on:{"CONTROLLED.OPEN":"open",OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitial","computeSize","invokeOnOpen"]}]}},closing:{tags:["open"],activities:["trackAnimationEvents"],on:{"CONTROLLED.CLOSE":"closed","CONTROLLED.OPEN":"open",OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitial","invokeOnOpen"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnExitComplete"]},{target:"closed",actions:["setInitial","computeSize","invokeOnExitComplete"]}],"ANIMATION.END":{target:"closed",actions:["invokeOnExitComplete"]}}},open:{tags:["open"],on:{"CONTROLLED.CLOSE":"closing",CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closing",actions:["setInitial","computeSize","invokeOnClose"]}]}}}},{guards:{isOpenControlled:t=>!!t["open.controlled"]},activities:{trackAnimationEvents(t,o,{send:l}){let r;const c=h(()=>{const d=u.getContentEl(t);if(!d)return;const a=G(d).animationName;if(!a||a==="none"){l({type:"ANIMATION.END"});return}const g=p=>{const E=(d.ownerDocument.defaultView||window).getComputedStyle(d).animationName;D(p)===d&&E===t.unmountAnimationName&&l({type:"ANIMATION.END"})};d.addEventListener("animationend",g),r=()=>{d.removeEventListener("animationend",g)}});return()=>{c(),r==null||r()}}},actions:{setInitial(t){t.initial=!0},clearInitial(t){t.initial=!1},computeSize(t,o){var l;(l=t._rafCleanup)==null||l.call(t),t._rafCleanup=h(()=>{const r=u.getContentEl(t);if(!r)return;if(t.stylesRef||(t.stylesRef=M({animationName:r.style.animationName,animationDuration:r.style.animationDuration})),o.type==="CLOSE"||!t.open){const a=r.ownerDocument.defaultView||window;t.unmountAnimationName=a.getComputedStyle(r).animationName}const c=r.hidden;r.style.animationName="none",r.style.animationDuration="0s",r.hidden=!1;const d=r.getBoundingClientRect();t.height=d.height,t.width=d.width,t.initial&&(r.style.animationName=t.stylesRef.animationName,r.style.animationDuration=t.stylesRef.animationDuration),r.hidden=c})},invokeOnOpen:t=>{var o;(o=t.onOpenChange)==null||o.call(t,{open:!0})},invokeOnClose:t=>{var o;(o=t.onOpenChange)==null||o.call(t,{open:!1})},invokeOnExitComplete(t){var o;(o=t.onExitComplete)==null||o.call(t)},toggleVisibility:(t,o,{send:l})=>{l({type:t.open?"CONTROLLED.OPEN":"CONTROLLED.CLOSE"})}}})}T()(["dir","disabled","getRootNode","id","ids","onExitComplete","onOpenChange","open.controlled","open"]);export{te as a,ee as b,oe as c,q as d,j as e,ie as m,ne as s};
