import{c as W}from"./create-slot-recipe-context-CYF_0Bn9.js";import{j as g}from"./jsx-runtime-sfY7k0Xq.js";import{r as b}from"./index-CcKhGcwW.js";import{c as P}from"./create-split-props-u5h9OPvL.js";import{u as X,s as _,R as O}from"./render-strategy-B0jBahTc.js";import{a as m,c as H}from"./factory-C6a3rcZ4.js";import{c as K}from"./create-context-DPShtm6F.js";import{z as R,q,t as G,c as Y,a as z,g as J,d as F}from"./index-CxfNaWX6.js";import{u as Q,n as Z}from"./index-C4pvfroP.js";import{c as ee}from"./index-BRNWFSEf.js";import{a as te,h as oe}from"./index-Dltf2pIY.js";import{c as re,q as ae,B as se,C as ne,O as ie,d as f,E as ce,i as le,j as ue,r as v,n as w,h as de}from"./index-DXXQsaeK.js";import{t as ge}from"./index-BR8t6gqn.js";import{c as A}from"./index-Ctx6eFvH.js";import{u as fe}from"./use-environment-context-DqdFjJyw.js";import{u as pe}from"./use-locale-context-CnLnjqE7.js";import{u as L}from"./use-event-CSfbiBcH.js";import{u as be,P as Te}from"./use-presence-context-rOY5x4wx.js";const[B,C]=K({name:"TabsContext",hookName:"useTabsContext",providerName:"<TabsProvider />"}),k=b.forwardRef((e,o)=>{const[t,r]=P()(e,["value"]),n=C(),c=X(),i=be({...c,present:n.value===e.value,immediate:!0}),T=R(n.getContentProps(t),i.getPresenceProps(),r);return g.jsx(Te,{value:i,children:i.unmounted?null:g.jsx(m.div,{...T,ref:H(i.ref,o)})})});k.displayName="TabContent";const x=b.forwardRef((e,o)=>{const t=C(),r=R(t.getIndicatorProps(),e);return g.jsx(m.div,{...r,ref:o})});x.displayName="TabIndicator";const $=b.forwardRef((e,o)=>{const t=C(),r=R(t.getListProps(),e);return g.jsx(m.div,{...r,ref:o})});$.displayName="TabList";const j=b.forwardRef((e,o)=>{const[t,r]=P()(e,["disabled","value"]),n=C(),c=R(n.getTriggerProps(t),r);return g.jsx(m.button,{...c,ref:o})});j.displayName="TabTrigger";const ve=e=>e.children(C());var me=ee("tabs").parts("root","list","trigger","content","indicator"),I=me.build(),a=re({getRootId:e=>{var o;return((o=e.ids)==null?void 0:o.root)??`tabs:${e.id}`},getListId:e=>{var o;return((o=e.ids)==null?void 0:o.list)??`tabs:${e.id}:list`},getContentId:(e,o)=>{var t;return((t=e.ids)==null?void 0:t.content)??`tabs:${e.id}:content-${o}`},getTriggerId:(e,o)=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`tabs:${e.id}:trigger-${o}`},getIndicatorId:e=>{var o;return((o=e.ids)==null?void 0:o.indicator)??`tabs:${e.id}:indicator`},getListEl:e=>a.getById(e,a.getListId(e)),getContentEl:(e,o)=>a.getById(e,a.getContentId(e,o)),getTriggerEl:(e,o)=>a.getById(e,a.getTriggerId(e,o)),getIndicatorEl:e=>a.getById(e,a.getIndicatorId(e)),getElements:e=>{const t=`[role=tab][data-ownedby='${CSS.escape(a.getListId(e))}']:not([disabled])`;return ae(a.getListEl(e),t)},getFirstTriggerEl:e=>q(a.getElements(e)),getLastTriggerEl:e=>G(a.getElements(e)),getNextTriggerEl:(e,o)=>se(a.getElements(e),a.getTriggerId(e,o),e.loopFocus),getPrevTriggerEl:(e,o)=>ne(a.getElements(e),a.getTriggerId(e,o),e.loopFocus),getSelectedContentEl:e=>{if(e.value)return a.getContentEl(e,e.value)},getSelectedTriggerEl:e=>{if(e.value)return a.getTriggerEl(e,e.value)},getOffsetRect:e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),getRectById:(e,o)=>{const t=ie(a.getElements(e),a.getTriggerId(e,o));return a.resolveRect(a.getOffsetRect(t))},resolveRect:e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`})});function Re(e,o,t){const r=e.context.translations,n=e.matches("focused"),c=e.context.orientation==="vertical",i=e.context.orientation==="horizontal",T=e.context.composite,y=e.context.indicatorState;function S(s){return{selected:e.context.value===s.value,focused:e.context.focusedValue===s.value,disabled:!!s.disabled}}return{value:e.context.value,focusedValue:e.context.focusedValue,setValue(s){o({type:"SET_VALUE",value:s})},clearValue(){o({type:"CLEAR_VALUE"})},setIndicatorRect(s){const l=a.getTriggerId(e.context,s);o({type:"SET_INDICATOR_RECT",id:l})},syncTabIndex(){o("SYNC_TAB_INDEX")},selectNext(s){o({type:"TAB_FOCUS",value:s,src:"selectNext"}),o({type:"ARROW_NEXT",src:"selectNext"})},selectPrev(s){o({type:"TAB_FOCUS",value:s,src:"selectPrev"}),o({type:"ARROW_PREV",src:"selectPrev"})},focus(){var s;(s=a.getSelectedTriggerEl(e.context))==null||s.focus()},getRootProps(){return t.element({...I.root.attrs,id:a.getRootId(e.context),"data-orientation":e.context.orientation,"data-focus":f(n),dir:e.context.dir})},getListProps(){return t.element({...I.list.attrs,id:a.getListId(e.context),role:"tablist",dir:e.context.dir,"data-focus":f(n),"aria-orientation":e.context.orientation,"data-orientation":e.context.orientation,"aria-label":r==null?void 0:r.listLabel,onKeyDown(s){if(s.defaultPrevented||!ce(s)||le(s))return;const l={ArrowDown(){i||o({type:"ARROW_NEXT",key:"ArrowDown"})},ArrowUp(){i||o({type:"ARROW_PREV",key:"ArrowUp"})},ArrowLeft(){c||o({type:"ARROW_PREV",key:"ArrowLeft"})},ArrowRight(){c||o({type:"ARROW_NEXT",key:"ArrowRight"})},Home(){o("HOME")},End(){o("END")},Enter(){o({type:"ENTER"})}};let u=te(s,e.context);const d=l[u];d&&(s.preventDefault(),d(s))}})},getTriggerState:S,getTriggerProps(s){const{value:l,disabled:u}=s,d=S(s);return t.button({...I.trigger.attrs,role:"tab",type:"button",disabled:u,dir:e.context.dir,"data-orientation":e.context.orientation,"data-disabled":f(u),"aria-disabled":u,"data-value":l,"aria-selected":d.selected,"data-selected":f(d.selected),"data-focus":f(d.focused),"aria-controls":d.selected?a.getContentId(e.context,l):void 0,"data-ownedby":a.getListId(e.context),"data-ssr":f(e.context.ssr),id:a.getTriggerId(e.context,l),tabIndex:d.selected&&T?0:-1,onFocus(){o({type:"TAB_FOCUS",value:l})},onBlur(E){const V=E.relatedTarget;(V==null?void 0:V.getAttribute("role"))!=="tab"&&o({type:"TAB_BLUR"})},onClick(E){E.defaultPrevented||u||(ue()&&E.currentTarget.focus(),o({type:"TAB_CLICK",value:l}))}})},getContentProps(s){const{value:l}=s,u=e.context.value===l;return t.element({...I.content.attrs,dir:e.context.dir,id:a.getContentId(e.context,l),tabIndex:T?0:-1,"aria-labelledby":a.getTriggerId(e.context,l),role:"tabpanel","data-ownedby":a.getListId(e.context),"data-selected":f(u),"data-orientation":e.context.orientation,hidden:!u})},getIndicatorProps(){var s,l,u,d;return t.element({id:a.getIndicatorId(e.context),...I.indicator.attrs,dir:e.context.dir,"data-orientation":e.context.orientation,style:{"--transition-property":"left, right, top, bottom, width, height","--left":(s=y.rect)==null?void 0:s.left,"--top":(l=y.rect)==null?void 0:l.top,"--width":(u=y.rect)==null?void 0:u.width,"--height":(d=y.rect)==null?void 0:d.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:y.transition?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[i?"left":"top"]:i?"var(--left)":"var(--top)"}})}}}var{not:ye}=J;function Ie(e){const o=Y(e);return z({initial:"idle",context:{dir:"ltr",orientation:"horizontal",activationMode:"automatic",value:null,loopFocus:!0,composite:!0,...o,focusedValue:o.value??null,ssr:!0,indicatorState:{rendered:!1,transition:!1,rect:{left:"0px",top:"0px",width:"0px",height:"0px"}}},watch:{value:["allowIndicatorTransition","syncIndicatorRect","syncTabIndex","clickIfLink"],dir:["syncIndicatorRect"],orientation:["syncIndicatorRect"]},on:{SET_VALUE:{actions:"setValue"},CLEAR_VALUE:{actions:"clearValue"},SET_INDICATOR_RECT:{actions:"setIndicatorRect"},SYNC_TAB_INDEX:{actions:"syncTabIndex"}},created:["syncFocusedValue"],entry:["checkRenderedElements","syncIndicatorRect","syncTabIndex","syncSsr"],exit:["cleanupObserver"],states:{idle:{on:{TAB_FOCUS:{target:"focused",actions:"setFocusedValue"},TAB_CLICK:{target:"focused",actions:["setFocusedValue","setValue"]}}},focused:{on:{TAB_CLICK:{target:"focused",actions:["setFocusedValue","setValue"]},ARROW_PREV:[{guard:"selectOnFocus",actions:["focusPrevTab","selectFocusedTab"]},{actions:"focusPrevTab"}],ARROW_NEXT:[{guard:"selectOnFocus",actions:["focusNextTab","selectFocusedTab"]},{actions:"focusNextTab"}],HOME:[{guard:"selectOnFocus",actions:["focusFirstTab","selectFocusedTab"]},{actions:"focusFirstTab"}],END:[{guard:"selectOnFocus",actions:["focusLastTab","selectFocusedTab"]},{actions:"focusLastTab"}],ENTER:{guard:ye("selectOnFocus"),actions:"selectFocusedTab"},TAB_FOCUS:{actions:["setFocusedValue"]},TAB_BLUR:{target:"idle",actions:"clearFocusedValue"}}}}},{guards:{selectOnFocus:t=>t.activationMode==="automatic"},actions:{syncFocusedValue(t){t.value!=null&&t.focusedValue==null&&(t.focusedValue=t.value)},selectFocusedTab(t){v(()=>{const n=t.deselectable&&t.value===t.focusedValue?null:t.focusedValue;p.value(t,n)})},setFocusedValue(t,r){r.value!=null&&p.focusedValue(t,r.value)},clearFocusedValue(t){p.focusedValue(t,null)},setValue(t,r){const c=t.deselectable&&t.value===t.focusedValue?null:r.value;p.value(t,c)},clearValue(t){p.value(t,null)},focusFirstTab(t){v(()=>{var r;(r=a.getFirstTriggerEl(t))==null||r.focus()})},focusLastTab(t){v(()=>{var r;(r=a.getLastTriggerEl(t))==null||r.focus()})},focusNextTab(t){if(!t.focusedValue)return;const r=a.getNextTriggerEl(t,t.focusedValue);v(()=>{t.composite?r==null||r.focus():(r==null?void 0:r.dataset.value)!=null&&p.focusedValue(t,r.dataset.value)})},focusPrevTab(t){if(!t.focusedValue)return;const r=a.getPrevTriggerEl(t,t.focusedValue);v(()=>{t.composite?r==null||r.focus():(r==null?void 0:r.dataset.value)!=null&&p.focusedValue(t,r.dataset.value)})},checkRenderedElements(t){t.indicatorState.rendered=!!a.getIndicatorEl(t)},syncTabIndex(t){v(()=>{const r=a.getSelectedContentEl(t);if(!r)return;de(r).length>0?r.removeAttribute("tabindex"):r.setAttribute("tabindex","0")})},cleanupObserver(t){var r;(r=t.indicatorCleanup)==null||r.call(t)},allowIndicatorTransition(t){t.indicatorState.transition=!0},setIndicatorRect(t,r){const n=r.id??t.value;!t.indicatorState.rendered||!n||!a.getTriggerEl(t,n)||(t.indicatorState.rect=a.getRectById(t,n),w(()=>{t.indicatorState.transition=!1}))},syncSsr(t){t.ssr=!1},syncIndicatorRect(t){var c;(c=t.indicatorCleanup)==null||c.call(t);const r=t.value;if(!t.indicatorState.rendered||!r)return;const n=a.getSelectedTriggerEl(t);n&&(t.indicatorCleanup=ge(n,{getRect(i){return a.getOffsetRect(i)},onChange(i){t.indicatorState.rect=a.resolveRect(i),w(()=>{t.indicatorState.transition=!1})}}))},clickIfLink(t){oe(a.getSelectedTriggerEl(t))}}})}var N={change:e=>{var o;e.value!=null&&((o=e.onValueChange)==null||o.call(e,{value:e.value}))},focusChange:e=>{var o;e.focusedValue!=null&&((o=e.onFocusChange)==null||o.call(e,{focusedValue:e.focusedValue}))}},p={value:(e,o)=>{F(o,e.value)||(e.value=o,N.change(e))},focusedValue:(e,o)=>{F(o,e.focusedValue)||(e.focusedValue=o,N.focusChange(e))}};A()(["activationMode","composite","dir","getRootNode","id","ids","loopFocus","onFocusChange","onValueChange","orientation","translations","deselectable","value"]);A()(["disabled","value"]);A()(["value"]);const Ce=(e={})=>{const{getRootNode:o}=fe(),{dir:t}=pe(),r={id:b.useId(),dir:t,getRootNode:o,value:e.defaultValue,...e},n={...r,value:e.value,onValueChange:L(e.onValueChange,{sync:!0}),onFocusChange:L(e.onFocusChange)},[c,i]=Q(Ie(r),{context:n});return Re(c,i,Z)},U=b.forwardRef((e,o)=>{const[t,r]=_(e),[n,c]=P()(r,["activationMode","composite","defaultValue","deselectable","id","ids","loopFocus","onFocusChange","onValueChange","orientation","translations","value"]),i=Ce(n),T=R(i.getRootProps(),c);return g.jsx(B,{value:i,children:g.jsx(O,{value:t,children:g.jsx(m.div,{...T,ref:o})})})});U.displayName="TabsRoot";const D=b.forwardRef((e,o)=>{const[t,r]=_(e),[{value:n},c]=P()(r,["value"]),i=R(n.getRootProps(),c);return g.jsx(B,{value:n,children:g.jsx(O,{value:t,children:g.jsx(m.div,{...i,ref:o})})})});D.displayName="TabsRootProvider";const{withProvider:M,withContext:h,useStyles:Me,PropsProvider:he}=W({key:"tabs"}),We=M(D,"root",{forwardAsChild:!0}),Xe=M(U,"root",{forwardAsChild:!0}),He=he,Ke=h(j,"trigger",{forwardAsChild:!0}),qe=h(k,"content",{forwardAsChild:!0}),Ge=h("div","contentGroup"),Ye=h($,"list",{forwardAsChild:!0}),ze=h(x,"indicator",{forwardAsChild:!0}),Je=ve;export{Xe as T,Ye as a,Ke as b,qe as c,Ge as d,Je as e,ze as f,He as g,We as h};
