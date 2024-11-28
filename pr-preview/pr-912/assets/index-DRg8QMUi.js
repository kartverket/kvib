import{c as $}from"./index-BRNWFSEf.js";import{d as S,B as N,C as k,c as q,a as Y,D as j,y as W,g as J}from"./index-Cq1GvU5P.js";import{a as _}from"./index-3UVeZ5B9.js";import{c as Q,d,F as H,a as X,v as Z,E as z,G as x,k as ee,H as te,r as V,y as ie,j as le,K as ne}from"./index-C5caIrke.js";import{g as oe,a as M}from"./index-CSN3utww.js";import{t as re}from"./index-Cbd61W9O.js";import{t as se}from"./index-NfPDfnaY.js";import{c as P}from"./index-Ctx6eFvH.js";var ae=Object.defineProperty,de=(e,i,t)=>i in e?ae(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,ge=(e,i,t)=>de(e,i+"",t),L={itemToValue(e){return typeof e=="string"?e:N(e)&&k(e,"value")?e.value:""},itemToString(e){return typeof e=="string"?e:N(e)&&k(e,"label")?e.label:L.itemToValue(e)},isItemDisabled(e){return N(e)&&k(e,"disabled")?!!e.disabled:!1}},B=class{constructor(e){this.options=e,ge(this,"items"),this.items=[...e.items]}isEqual(e){return S(this.items,e.items)}setItems(e){this.items=Array.from(e)}getValues(e=this.items){return Array.from(e).map(i=>this.getItemValue(i)).filter(Boolean)}find(e){if(e==null)return null;const i=this.items.findIndex(t=>this.getItemValue(t)===e);return i!=null?this.items[i]:null}findMany(e){return Array.from(e).map(i=>this.find(i)).filter(Boolean)}at(e){return this.items[e]??null}sortFn(e,i){const t=this.indexOf(e),l=this.indexOf(i);return(t??0)-(l??0)}sort(e){return[...e].sort(this.sortFn.bind(this))}getItemValue(e){var i,t;return e==null?null:((t=(i=this.options).itemToValue)==null?void 0:t.call(i,e))??L.itemToValue(e)}getItemDisabled(e){var i,t;return e==null?!1:((t=(i=this.options).isItemDisabled)==null?void 0:t.call(i,e))??L.isItemDisabled(e)}stringifyItem(e){var i,t;return e==null?null:((t=(i=this.options).itemToString)==null?void 0:t.call(i,e))??L.itemToString(e)}stringify(e){return e==null?null:this.stringifyItem(this.find(e))}stringifyItems(e,i=", "){return Array.from(e).map(t=>this.stringifyItem(t)).filter(Boolean).join(i)}stringifyMany(e,i){return this.stringifyItems(this.findMany(e),i)}has(e){return this.indexOf(e)!==-1}hasItem(e){return e==null?!1:this.has(this.getItemValue(e))}get size(){return this.items.length}get firstValue(){let e=0;for(;this.getItemDisabled(this.at(e));)e++;return this.getItemValue(this.at(e))}get lastValue(){let e=this.size-1;for(;this.getItemDisabled(this.at(e));)e--;return this.getItemValue(this.at(e))}getNextValue(e,i=1,t=!1){let l=this.indexOf(e);if(l===-1)return null;for(l=t?Math.min(l+i,this.size-1):l+i;l<=this.size&&this.getItemDisabled(this.at(l));)l++;return this.getItemValue(this.at(l))}getPreviousValue(e,i=1,t=!1){let l=this.indexOf(e);if(l===-1)return null;for(l=t?Math.max(l-i,0):l-i;l>=0&&this.getItemDisabled(this.at(l));)l--;return this.getItemValue(this.at(l))}indexOf(e){return e==null?-1:this.items.findIndex(i=>this.getItemValue(i)===e)}getByText(e,i){let t=i!=null?ce(this.items,this.indexOf(i)):this.items;return e.length===1&&(t=t.filter(n=>this.getItemValue(n)!==i)),t.find(n=>ue(this.stringifyItem(n),e))}search(e,i){const{state:t,currentValue:l,timeout:n=350}=i,a=t.keysSoFar+e,h=a.length>1&&Array.from(a).every(T=>T===a[0])?a[0]:a,m=this.getByText(h,l),E=this.getItemValue(m);function p(){clearTimeout(t.timer),t.timer=-1}function v(T){t.keysSoFar=T,p(),T!==""&&(t.timer=+setTimeout(()=>{v(""),p()},n))}return v(a),E}*[Symbol.iterator](){yield*this.items}insertBefore(e,i){const t=this.indexOf(e);t!==-1&&this.items.splice(t,0,i)}insertAfter(e,i){const t=this.indexOf(e);t!==-1&&this.items.splice(t+1,0,i)}reorder(e,i){if(e===-1||i===-1||e===i)return;const[t]=this.items.splice(e,1);this.items.splice(i,0,t)}json(){return{size:this.size,first:this.firstValue,last:this.lastValue}}},ue=(e,i)=>!!(e!=null&&e.toLowerCase().startsWith(i.toLowerCase())),ce=(e,i)=>e.map((t,l)=>e[(Math.max(i,0)+l)%e.length]),he=$("select").parts("label","positioner","trigger","indicator","clearTrigger","item","itemText","itemIndicator","itemGroup","itemGroupLabel","list","content","root","control","valueText"),c=he.build(),U=e=>W(new B(e));U.empty=()=>W(new B({items:[]}));var r=Q({getRootId:e=>{var i;return((i=e.ids)==null?void 0:i.root)??`select:${e.id}`},getContentId:e=>{var i;return((i=e.ids)==null?void 0:i.content)??`select:${e.id}:content`},getTriggerId:e=>{var i;return((i=e.ids)==null?void 0:i.trigger)??`select:${e.id}:trigger`},getClearTriggerId:e=>{var i;return((i=e.ids)==null?void 0:i.clearTrigger)??`select:${e.id}:clear-trigger`},getLabelId:e=>{var i;return((i=e.ids)==null?void 0:i.label)??`select:${e.id}:label`},getControlId:e=>{var i;return((i=e.ids)==null?void 0:i.control)??`select:${e.id}:control`},getItemId:(e,i)=>{var t,l;return((l=(t=e.ids)==null?void 0:t.item)==null?void 0:l.call(t,i))??`select:${e.id}:option:${i}`},getHiddenSelectId:e=>{var i;return((i=e.ids)==null?void 0:i.hiddenSelect)??`select:${e.id}:select`},getPositionerId:e=>{var i;return((i=e.ids)==null?void 0:i.positioner)??`select:${e.id}:positioner`},getItemGroupId:(e,i)=>{var t,l;return((l=(t=e.ids)==null?void 0:t.itemGroup)==null?void 0:l.call(t,i))??`select:${e.id}:optgroup:${i}`},getItemGroupLabelId:(e,i)=>{var t,l;return((l=(t=e.ids)==null?void 0:t.itemGroupLabel)==null?void 0:l.call(t,i))??`select:${e.id}:optgroup-label:${i}`},getHiddenSelectEl:e=>r.getById(e,r.getHiddenSelectId(e)),getContentEl:e=>r.getById(e,r.getContentId(e)),getControlEl:e=>r.getById(e,r.getControlId(e)),getTriggerEl:e=>r.getById(e,r.getTriggerId(e)),getClearTriggerEl:e=>r.getById(e,r.getClearTriggerId(e)),getPositionerEl:e=>r.getById(e,r.getPositionerId(e)),getHighlightedOptionEl(e){return e.highlightedValue?r.getById(e,r.getItemId(e,e.highlightedValue)):null}});function Re(e,i,t){const l=e.context.isDisabled,n=e.context.invalid,a=e.context.readOnly,I=e.context.isInteractive,h=e.context.composite,m=e.hasTag("open"),E=e.matches("focused"),p=e.context.highlightedValue,v=e.context.highlightedItem,T=e.context.selectedItems,D=e.context.isTypingAhead,C=e.context.collection,A=p?r.getItemId(e.context,p):void 0;function R(o){const s=C.getItemDisabled(o.item),u=C.getItemValue(o.item);return{value:u,disabled:!!(l||s),highlighted:p===u,selected:e.context.value.includes(u)}}const K=oe({...e.context.positioning,placement:e.context.currentPlacement});return{open:m,focused:E,empty:e.context.value.length===0,highlightedItem:v,highlightedValue:p,selectedItems:T,hasSelectedItems:e.context.hasSelectedItems,value:e.context.value,valueAsString:e.context.valueAsString,collection:C,multiple:!!e.context.multiple,disabled:!!l,setCollection(o){i({type:"COLLECTION.SET",value:o})},reposition(o={}){i({type:"POSITIONING.SET",options:o})},focus(){var o;(o=r.getTriggerEl(e.context))==null||o.focus({preventScroll:!0})},setOpen(o){o!==m&&i(o?"OPEN":"CLOSE")},selectValue(o){i({type:"ITEM.SELECT",value:o})},setValue(o){i({type:"VALUE.SET",value:o})},selectAll(){i({type:"VALUE.SET",value:C.getValues()})},highlightValue(o){i({type:"HIGHLIGHTED_VALUE.SET",value:o})},clearValue(o){i(o?{type:"ITEM.CLEAR",value:o}:{type:"VALUE.CLEAR"})},getItemState:R,getRootProps(){return t.element({...c.root.attrs,dir:e.context.dir,id:r.getRootId(e.context),"data-invalid":d(n),"data-readonly":d(a)})},getLabelProps(){return t.label({dir:e.context.dir,id:r.getLabelId(e.context),...c.label.attrs,"data-disabled":d(l),"data-invalid":d(n),"data-readonly":d(a),htmlFor:r.getHiddenSelectId(e.context),onClick(o){var s;o.defaultPrevented||l||(s=r.getTriggerEl(e.context))==null||s.focus({preventScroll:!0})}})},getControlProps(){return t.element({...c.control.attrs,dir:e.context.dir,id:r.getControlId(e.context),"data-state":m?"open":"closed","data-focus":d(E),"data-disabled":d(l),"data-invalid":d(n)})},getValueTextProps(){return t.element({...c.valueText.attrs,dir:e.context.dir,"data-disabled":d(l),"data-invalid":d(n),"data-focus":d(E)})},getTriggerProps(){return t.button({id:r.getTriggerId(e.context),disabled:l,dir:e.context.dir,type:"button",role:"combobox","aria-controls":r.getContentId(e.context),"aria-expanded":m,"aria-haspopup":"listbox","data-state":m?"open":"closed","aria-invalid":n,"aria-labelledby":r.getLabelId(e.context),...c.trigger.attrs,"data-disabled":d(l),"data-invalid":d(n),"data-readonly":d(a),"data-placement":e.context.currentPlacement,"data-placeholder-shown":d(!e.context.hasSelectedItems),onClick(o){I&&(o.defaultPrevented||i({type:"TRIGGER.CLICK"}))},onFocus(){i("TRIGGER.FOCUS")},onBlur(){i("TRIGGER.BLUR")},onKeyDown(o){if(o.defaultPrevented||!I)return;const u={ArrowUp(){i({type:"TRIGGER.ARROW_UP"})},ArrowDown(O){i({type:O.altKey?"OPEN":"TRIGGER.ARROW_DOWN"})},ArrowLeft(){i({type:"TRIGGER.ARROW_LEFT"})},ArrowRight(){i({type:"TRIGGER.ARROW_RIGHT"})},Home(){i({type:"TRIGGER.HOME"})},End(){i({type:"TRIGGER.END"})},Enter(){i({type:"TRIGGER.ENTER"})},Space(O){i(D?{type:"TRIGGER.TYPEAHEAD",key:O.key}:{type:"TRIGGER.ENTER"})}}[_(o,e.context)];if(u){u(o),o.preventDefault();return}H.isValidEvent(o)&&(i({type:"TRIGGER.TYPEAHEAD",key:o.key}),o.preventDefault())}})},getIndicatorProps(){return t.element({...c.indicator.attrs,dir:e.context.dir,"aria-hidden":!0,"data-state":m?"open":"closed","data-disabled":d(l),"data-invalid":d(n),"data-readonly":d(a)})},getItemProps(o){const s=R(o);return t.element({id:r.getItemId(e.context,s.value),role:"option",...c.item.attrs,dir:e.context.dir,"data-value":s.value,"aria-selected":s.selected,"data-state":s.selected?"checked":"unchecked","data-highlighted":d(s.highlighted),"data-disabled":d(s.disabled),"aria-disabled":X(s.disabled),onPointerMove(u){s.disabled||u.pointerType!=="mouse"||s.value!==e.context.highlightedValue&&i({type:"ITEM.POINTER_MOVE",value:s.value})},onClick(u){u.defaultPrevented||s.disabled||i({type:"ITEM.CLICK",src:"pointerup",value:s.value})},onPointerLeave(u){s.disabled||o.persistFocus||u.pointerType!=="mouse"||!e.previousEvent.type.includes("POINTER")||i({type:"ITEM.POINTER_LEAVE"})}})},getItemTextProps(o){const s=R(o);return t.element({...c.itemText.attrs,"data-state":s.selected?"checked":"unchecked","data-disabled":d(s.disabled),"data-highlighted":d(s.highlighted)})},getItemIndicatorProps(o){const s=R(o);return t.element({"aria-hidden":!0,...c.itemIndicator.attrs,"data-state":s.selected?"checked":"unchecked",hidden:!s.selected})},getItemGroupLabelProps(o){const{htmlFor:s}=o;return t.element({...c.itemGroupLabel.attrs,id:r.getItemGroupLabelId(e.context,s),role:"group",dir:e.context.dir})},getItemGroupProps(o){const{id:s}=o;return t.element({...c.itemGroup.attrs,"data-disabled":d(l),id:r.getItemGroupId(e.context,s),"aria-labelledby":r.getItemGroupLabelId(e.context,s),dir:e.context.dir})},getClearTriggerProps(){return t.button({...c.clearTrigger.attrs,id:r.getClearTriggerId(e.context),type:"button","aria-label":"Clear value","data-invalid":d(n),disabled:l,hidden:!e.context.hasSelectedItems,dir:e.context.dir,onClick(o){o.defaultPrevented||i("CLEAR.CLICK")}})},getHiddenSelectProps(){return t.select({name:e.context.name,form:e.context.form,disabled:l,multiple:e.context.multiple,required:e.context.required,"aria-hidden":!0,id:r.getHiddenSelectId(e.context),defaultValue:e.context.multiple?e.context.value:e.context.value[0],style:Z,tabIndex:-1,onFocus(){var o;(o=r.getTriggerEl(e.context))==null||o.focus({preventScroll:!0})},"aria-labelledby":r.getLabelId(e.context)})},getPositionerProps(){return t.element({...c.positioner.attrs,dir:e.context.dir,id:r.getPositionerId(e.context),style:K.floating})},getContentProps(){return t.element({hidden:!m,dir:e.context.dir,id:r.getContentId(e.context),role:h?"listbox":"dialog",...c.content.attrs,"data-state":m?"open":"closed","data-placement":e.context.currentPlacement,"data-activedescendant":A,"aria-activedescendant":h?A:void 0,"aria-multiselectable":e.context.multiple&&h?!0:void 0,"aria-labelledby":r.getLabelId(e.context),tabIndex:0,onKeyDown(o){if(!I||!z(o))return;if(o.key==="Tab"&&!x(o)){o.preventDefault();return}const s={ArrowUp(){i({type:"CONTENT.ARROW_UP"})},ArrowDown(){i({type:"CONTENT.ARROW_DOWN"})},Home(){i({type:"CONTENT.HOME"})},End(){i({type:"CONTENT.END"})},Enter(){i({type:"ITEM.CLICK",src:"keydown.enter"})},Space(F){var w;D?i({type:"CONTENT.TYPEAHEAD",key:F.key}):(w=s.Enter)==null||w.call(s,F)}},u=s[_(o)];if(u){u(o),o.preventDefault();return}const O=ee(o);te(O)||H.isValidEvent(o)&&(i({type:"CONTENT.TYPEAHEAD",key:o.key}),o.preventDefault())}})},getListProps(){return t.element({...c.list.attrs,tabIndex:0,role:h?void 0:"listbox","aria-labelledby":r.getTriggerId(e.context),"aria-activedescendant":h?void 0:A,"aria-multiselectable":!h&&e.context.multiple?!0:void 0})}}}var{and:y,not:f,or:me}=J;function be(e){const i=q(e);return Y({id:"select",context:{value:[],highlightedValue:null,loopFocus:!1,closeOnSelect:!i.multiple,disabled:!1,readOnly:!1,composite:!0,...i,highlightedItem:null,selectedItems:[],valueAsString:"",collection:i.collection??U.empty(),typeahead:H.defaultOptions,fieldsetDisabled:!1,positioning:{placement:"bottom-start",gutter:8,...i.positioning}},computed:{hasSelectedItems:t=>t.value.length>0,isTypingAhead:t=>t.typeahead.keysSoFar!=="",isDisabled:t=>!!t.disabled||t.fieldsetDisabled,isInteractive:t=>!(t.isDisabled||t.readOnly)},initial:i.open?"open":"idle",created:["syncCollection"],entry:["syncSelectElement"],watch:{open:["toggleVisibility"],value:["syncSelectedItems","syncSelectElement"],highlightedValue:["syncHighlightedItem"],collection:["syncCollection"]},on:{"HIGHLIGHTED_VALUE.SET":{actions:["setHighlightedItem"]},"ITEM.SELECT":{actions:["selectItem"]},"ITEM.CLEAR":{actions:["clearItem"]},"VALUE.SET":{actions:["setSelectedItems"]},"VALUE.CLEAR":{actions:["clearSelectedItems"]},"CLEAR.CLICK":{actions:["clearSelectedItems","focusTriggerEl"]},"COLLECTION.SET":{actions:["setCollection"]}},activities:["trackFormControlState"],states:{idle:{tags:["closed"],on:{"CONTROLLED.OPEN":[{guard:"isTriggerClickEvent",target:"open",actions:["setInitialFocus","highlightFirstSelectedItem"]},{target:"open",actions:["setInitialFocus"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus","highlightFirstSelectedItem"]}],"TRIGGER.FOCUS":{target:"focused"},OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitialFocus","invokeOnOpen"]}]}},focused:{tags:["closed"],on:{"CONTROLLED.OPEN":[{guard:"isTriggerClickEvent",target:"open",actions:["setInitialFocus","highlightFirstSelectedItem"]},{guard:"isTriggerArrowUpEvent",target:"open",actions:["setInitialFocus","highlightComputedLastItem"]},{guard:me("isTriggerArrowDownEvent","isTriggerEnterEvent"),target:"open",actions:["setInitialFocus","highlightComputedFirstItem"]},{target:"open",actions:["setInitialFocus"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitialFocus","invokeOnOpen"]}],"TRIGGER.BLUR":{target:"idle"},"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitialFocus","invokeOnOpen","highlightFirstSelectedItem"]}],"TRIGGER.ENTER":[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitialFocus","invokeOnOpen","highlightComputedFirstItem"]}],"TRIGGER.ARROW_UP":[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitialFocus","invokeOnOpen","highlightComputedLastItem"]}],"TRIGGER.ARROW_DOWN":[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitialFocus","invokeOnOpen","highlightComputedFirstItem"]}],"TRIGGER.ARROW_LEFT":[{guard:y(f("multiple"),"hasSelectedItems"),actions:["selectPreviousItem"]},{guard:f("multiple"),actions:["selectLastItem"]}],"TRIGGER.ARROW_RIGHT":[{guard:y(f("multiple"),"hasSelectedItems"),actions:["selectNextItem"]},{guard:f("multiple"),actions:["selectFirstItem"]}],"TRIGGER.HOME":{guard:f("multiple"),actions:["selectFirstItem"]},"TRIGGER.END":{guard:f("multiple"),actions:["selectLastItem"]},"TRIGGER.TYPEAHEAD":{guard:f("multiple"),actions:["selectMatchingItem"]}}},open:{tags:["open"],exit:["scrollContentToTop"],activities:["trackDismissableElement","computePlacement","scrollToHighlightedItem"],on:{"CONTROLLED.CLOSE":{target:"focused",actions:["focusTriggerEl","clearHighlightedItem"]},CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","focusTriggerEl","clearHighlightedItem"]}],"TRIGGER.CLICK":[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"focused",actions:["invokeOnClose","clearHighlightedItem"]}],"ITEM.CLICK":[{guard:y("closeOnSelect","isOpenControlled"),actions:["selectHighlightedItem","invokeOnClose"]},{guard:"closeOnSelect",target:"focused",actions:["selectHighlightedItem","invokeOnClose","focusTriggerEl","clearHighlightedItem"]},{actions:["selectHighlightedItem"]}],"CONTENT.HOME":{actions:["highlightFirstItem"]},"CONTENT.END":{actions:["highlightLastItem"]},"CONTENT.ARROW_DOWN":[{guard:y("hasHighlightedItem","loop","isLastItemHighlighted"),actions:["highlightFirstItem"]},{guard:"hasHighlightedItem",actions:["highlightNextItem"]},{actions:["highlightFirstItem"]}],"CONTENT.ARROW_UP":[{guard:y("hasHighlightedItem","loop","isFirstItemHighlighted"),actions:["highlightLastItem"]},{guard:"hasHighlightedItem",actions:["highlightPreviousItem"]},{actions:["highlightLastItem"]}],"CONTENT.TYPEAHEAD":{actions:["highlightMatchingItem"]},"ITEM.POINTER_MOVE":{actions:["highlightItem"]},"ITEM.POINTER_LEAVE":{actions:["clearHighlightedItem"]},"POSITIONING.SET":{actions:["reposition"]}}}}},{guards:{loop:t=>!!t.loopFocus,multiple:t=>!!t.multiple,hasSelectedItems:t=>!!t.hasSelectedItems,hasHighlightedItem:t=>t.highlightedValue!=null,isFirstItemHighlighted:t=>t.highlightedValue===t.collection.firstValue,isLastItemHighlighted:t=>t.highlightedValue===t.collection.lastValue,closeOnSelect:(t,l)=>!!(l.closeOnSelect??t.closeOnSelect),isOpenControlled:t=>!!t["open.controlled"],isTriggerClickEvent:(t,l)=>{var n;return((n=l.previousEvent)==null?void 0:n.type)==="TRIGGER.CLICK"},isTriggerEnterEvent:(t,l)=>{var n;return((n=l.previousEvent)==null?void 0:n.type)==="TRIGGER.ENTER"},isTriggerArrowUpEvent:(t,l)=>{var n;return((n=l.previousEvent)==null?void 0:n.type)==="TRIGGER.ARROW_UP"},isTriggerArrowDownEvent:(t,l)=>{var n;return((n=l.previousEvent)==null?void 0:n.type)==="TRIGGER.ARROW_DOWN"}},activities:{trackFormControlState(t,l,{initialContext:n}){return se(r.getHiddenSelectEl(t),{onFieldsetDisabledChange(a){t.fieldsetDisabled=a},onFormReset(){g.selectedItems(t,n.value)}})},trackDismissableElement(t,l,{send:n}){const a=()=>r.getContentEl(t);let I=!0;return re(a,{defer:!0,exclude:[r.getTriggerEl(t),r.getClearTriggerEl(t)],onFocusOutside:t.onFocusOutside,onPointerDownOutside:t.onPointerDownOutside,onInteractOutside(h){var m;(m=t.onInteractOutside)==null||m.call(t,h),I=!(h.detail.focusable||h.detail.contextmenu)},onDismiss(){n({type:"CLOSE",src:"interact-outside",restoreFocus:I})}})},computePlacement(t){return t.currentPlacement=t.positioning.placement,M(()=>r.getTriggerEl(t),()=>r.getPositionerEl(t),{defer:!0,...t.positioning,onComplete(a){t.currentPlacement=a.placement}})},scrollToHighlightedItem(t,l,{getState:n}){const a=h=>{if(t.highlightedValue==null||n().event.type.includes("POINTER"))return;const E=r.getHighlightedOptionEl(t),p=r.getContentEl(t);if(t.scrollToIndexFn){const v=t.collection.indexOf(t.highlightedValue);t.scrollToIndexFn({index:v,immediate:h});return}ne(E,{rootEl:p,block:"nearest"})};return V(()=>a(!0)),ie(()=>r.getContentEl(t),{defer:!0,attributes:["data-activedescendant"],callback(){a(!1)}})}},actions:{reposition(t,l){const n=()=>r.getPositionerEl(t);M(r.getTriggerEl(t),n,{...t.positioning,...l.options,defer:!0,listeners:!1,onComplete(a){t.currentPlacement=a.placement}})},toggleVisibility(t,l,{send:n}){n({type:t.open?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:l})},highlightPreviousItem(t){if(t.highlightedValue==null)return;const l=t.collection.getPreviousValue(t.highlightedValue);g.highlightedItem(t,l)},highlightNextItem(t){if(t.highlightedValue==null)return;const l=t.collection.getNextValue(t.highlightedValue);g.highlightedItem(t,l)},highlightFirstItem(t){const l=t.collection.firstValue;g.highlightedItem(t,l)},highlightLastItem(t){const l=t.collection.lastValue;g.highlightedItem(t,l)},setInitialFocus(t){V(()=>{const l=le({root:r.getContentEl(t)});l==null||l.focus({preventScroll:!0})})},focusTriggerEl(t,l){var a;const n=l.restoreFocus??((a=l.previousEvent)==null?void 0:a.restoreFocus);n!=null&&!n||V(()=>{const I=r.getTriggerEl(t);I==null||I.focus({preventScroll:!0})})},selectHighlightedItem(t,l){let n=l.value??t.highlightedValue;if(n==null)return;const a=t.deselectable&&!t.multiple&&t.value.includes(n);n=a?null:n,g.selectedItem(t,n,a)},highlightComputedFirstItem(t){const l=t.hasSelectedItems?t.collection.sort(t.value)[0]:t.collection.firstValue;g.highlightedItem(t,l)},highlightComputedLastItem(t){const l=t.hasSelectedItems?t.collection.sort(t.value)[0]:t.collection.lastValue;g.highlightedItem(t,l)},highlightFirstSelectedItem(t){if(!t.hasSelectedItems)return;const[l]=t.collection.sort(t.value);g.highlightedItem(t,l)},highlightItem(t,l){g.highlightedItem(t,l.value)},highlightMatchingItem(t,l){const n=t.collection.search(l.key,{state:t.typeahead,currentValue:t.highlightedValue});n!=null&&g.highlightedItem(t,n)},setHighlightedItem(t,l){g.highlightedItem(t,l.value)},clearHighlightedItem(t){g.highlightedItem(t,null,!0)},selectItem(t,l){const n=t.deselectable&&!t.multiple&&t.value.includes(l.value),a=n?null:l.value;g.selectedItem(t,a,n)},clearItem(t,l){const n=t.value.filter(a=>a!==l.value);g.selectedItems(t,n)},setSelectedItems(t,l){g.selectedItems(t,l.value)},clearSelectedItems(t){g.selectedItems(t,[])},selectPreviousItem(t){const l=t.collection.getPreviousValue(t.value[0]);g.selectedItem(t,l)},selectNextItem(t){const l=t.collection.getNextValue(t.value[0]);g.selectedItem(t,l)},selectFirstItem(t){const l=t.collection.firstValue;g.selectedItem(t,l)},selectLastItem(t){const l=t.collection.lastValue;g.selectedItem(t,l)},selectMatchingItem(t,l){const n=t.collection.search(l.key,{state:t.typeahead,currentValue:t.value[0]});n!=null&&g.selectedItem(t,n)},scrollContentToTop(t){var l;t.scrollToIndexFn?t.scrollToIndexFn({index:0,immediate:!0}):(l=r.getContentEl(t))==null||l.scrollTo(0,0)},invokeOnOpen(t){var l;(l=t.onOpenChange)==null||l.call(t,{open:!0})},invokeOnClose(t){var l;(l=t.onOpenChange)==null||l.call(t,{open:!1})},syncSelectElement(t){const l=r.getHiddenSelectEl(t);if(l){if(t.value.length===0&&!t.multiple){l.selectedIndex=-1;return}for(const n of l.options)n.selected=t.value.includes(n.value)}},setCollection(t,l){t.collection=l.value},syncCollection(t){const l=t.collection.findMany(t.value),n=t.collection.stringifyItems(l);t.highlightedItem=t.collection.find(t.highlightedValue),t.selectedItems=l,t.valueAsString=n},syncSelectedItems(t){G.valueChange(t)},syncHighlightedItem(t){G.highlightChange(t)}}})}function Ie(e){V(()=>{const i=r.getHiddenSelectEl(e);if(!i)return;const t=r.getWin(e),l=new t.Event("change",{bubbles:!0,composed:!0});i.dispatchEvent(l)})}var G={valueChange:e=>{const i=e.selectedItems;e.selectedItems=e.value.map(t=>{const l=i.find(n=>e.collection.getItemValue(n)===t);return l||e.collection.find(t)}),e.valueAsString=e.collection.stringifyItems(e.selectedItems)},highlightChange:e=>{e.highlightedItem=e.collection.find(e.highlightedValue)}},b={valueChange:e=>{var i;G.valueChange(e),(i=e.onValueChange)==null||i.call(e,{value:Array.from(e.value),items:Array.from(e.selectedItems)}),Ie(e)},highlightChange:e=>{var i;G.highlightChange(e),(i=e.onHighlightChange)==null||i.call(e,{highlightedValue:e.highlightedValue,highlightedItem:e.highlightedItem,highlightedIndex:e.collection.indexOf(e.highlightedValue)})}},g={selectedItem:(e,i,t=!1)=>{if(!S(e.value,i)&&!(i==null&&!t)){if(i==null&&t){e.value=[],b.valueChange(e);return}e.value=e.multiple?j(e.value,i):[i],b.valueChange(e)}},selectedItems:(e,i)=>{S(e.value,i)||(e.value=i,b.valueChange(e))},highlightedItem:(e,i,t=!1)=>{S(e.highlightedValue,i)||i==null&&!t||(e.highlightedValue=i??null,b.highlightChange(e))}};P()(["closeOnSelect","collection","dir","disabled","deselectable","form","getRootNode","highlightedValue","id","ids","invalid","loopFocus","multiple","name","onFocusOutside","onHighlightChange","onInteractOutside","onOpenChange","onPointerDownOutside","onValueChange","open.controlled","open","composite","positioning","required","readOnly","scrollToIndexFn","value"]);P()(["item","persistFocus"]);P()(["id"]);P()(["htmlFor"]);export{B as L,he as a,Re as c,be as m};
