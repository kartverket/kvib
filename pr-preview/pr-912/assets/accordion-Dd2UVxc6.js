import{c as G}from"./create-slot-recipe-context-CYF_0Bn9.js";import{j as c}from"./jsx-runtime-sfY7k0Xq.js";import{r as l}from"./index-CcKhGcwW.js";import{c as h}from"./create-split-props-u5h9OPvL.js";import{u as H,s as b,R as x}from"./render-strategy-B0jBahTc.js";import{a as C}from"./factory-ZiKyq5QJ.js";import{c as I}from"./create-context-DPShtm6F.js";import{c as J,a as K,y as Q,z as p}from"./index-DussGwo5.js";import{s as W,m as X,c as Y}from"./index-DEMTyX9D.js";import{u as w,n as S}from"./index-D6fzw86p.js";import{u as k}from"./use-environment-context-DqdFjJyw.js";import{u as L}from"./use-locale-context-CnLnjqE7.js";import{u as O}from"./use-event-CSfbiBcH.js";import{c as Z}from"./index-BRNWFSEf.js";import{c as oo,d as E,r as R,L as eo,m as to}from"./index-DCo38vF6.js";import{c as no}from"./index-Ctx6eFvH.js";const[T,P]=I({name:"AccordionContext",hookName:"useAccordionContext",providerName:"<AccordionProvider />"}),io=o=>o.children(P()),[ro,so]=I({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItemProvider />"}),ao=o=>h()(o,["defaultOpen","disabled","id","ids","lazyMount","onExitComplete","onOpenChange","open","unmountOnExit"]);var co=Z("collapsible").parts("root","trigger","content"),A=co.build(),d=oo({getRootId:o=>{var r;return((r=o.ids)==null?void 0:r.root)??`collapsible:${o.id}`},getContentId:o=>{var r;return((r=o.ids)==null?void 0:r.content)??`collapsible:${o.id}:content`},getTriggerId:o=>{var r;return((r=o.ids)==null?void 0:r.trigger)??`collapsible:${o.id}:trigger`},getRootEl:o=>d.getById(o,d.getRootId(o)),getContentEl:o=>d.getById(o,d.getContentId(o)),getTriggerEl:o=>d.getById(o,d.getTriggerId(o))});function lo(o,r,e){const i=o.matches("open","closing"),t=o.matches("open"),n=o.context.height,a=o.context.width,s=!!o.context.disabled,m=!o.context.initial&&t;return{disabled:s,visible:i,open:t,setOpen(u){u!==t&&r(u?"OPEN":"CLOSE")},getRootProps(){return e.element({...A.root.attrs,"data-state":t?"open":"closed",dir:o.context.dir,id:d.getRootId(o.context)})},getContentProps(){return e.element({...A.content.attrs,"data-state":m?void 0:t?"open":"closed",id:d.getContentId(o.context),"data-disabled":E(s),hidden:!i,style:{"--height":n!=null?`${n}px`:void 0,"--width":a!=null?`${a}px`:void 0}})},getTriggerProps(){return e.element({...A.trigger.attrs,id:d.getTriggerId(o.context),dir:o.context.dir,type:"button","data-state":t?"open":"closed","data-disabled":E(s),"aria-controls":d.getContentId(o.context),"aria-expanded":i||!1,onClick(u){u.defaultPrevented||s||r({type:t?"CLOSE":"OPEN",src:"trigger.click"})}})}}}function mo(o){const r=J(o);return K({id:"collapsible",initial:r.open?"open":"closed",context:{...r,height:0,width:0,initial:!1,stylesRef:null,unmountAnimationName:null},watch:{open:["setInitial","computeSize","toggleVisibility"]},exit:["clearInitial"],states:{closed:{tags:["closed"],on:{"CONTROLLED.OPEN":"open",OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitial","computeSize","invokeOnOpen"]}]}},closing:{tags:["open"],activities:["trackAnimationEvents"],on:{"CONTROLLED.CLOSE":"closed","CONTROLLED.OPEN":"open",OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["setInitial","invokeOnOpen"]}],CLOSE:[{guard:"isOpenControlled",actions:["invokeOnExitComplete"]},{target:"closed",actions:["setInitial","computeSize","invokeOnExitComplete"]}],"ANIMATION.END":{target:"closed",actions:["invokeOnExitComplete"]}}},open:{tags:["open"],on:{"CONTROLLED.CLOSE":"closing",CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closing",actions:["setInitial","computeSize","invokeOnClose"]}]}}}},{guards:{isOpenControlled:e=>!!e["open.controlled"]},activities:{trackAnimationEvents(e,i,{send:t}){let n;const a=R(()=>{const s=d.getContentEl(e);if(!s)return;const m=eo(s).animationName;if(!m||m==="none"){t({type:"ANIMATION.END"});return}const v=g=>{const q=(s.ownerDocument.defaultView||window).getComputedStyle(s).animationName;to(g)===s&&q===e.unmountAnimationName&&t({type:"ANIMATION.END"})};s.addEventListener("animationend",v),n=()=>{s.removeEventListener("animationend",v)}});return()=>{a(),n==null||n()}}},actions:{setInitial(e){e.initial=!0},clearInitial(e){e.initial=!1},computeSize(e,i){var t;(t=e._rafCleanup)==null||t.call(e),e._rafCleanup=R(()=>{const n=d.getContentEl(e);if(!n)return;if(e.stylesRef||(e.stylesRef=Q({animationName:n.style.animationName,animationDuration:n.style.animationDuration})),i.type==="CLOSE"||!e.open){const m=n.ownerDocument.defaultView||window;e.unmountAnimationName=m.getComputedStyle(n).animationName}const a=n.hidden;n.style.animationName="none",n.style.animationDuration="0s",n.hidden=!1;const s=n.getBoundingClientRect();e.height=s.height,e.width=s.width,e.initial&&(n.style.animationName=e.stylesRef.animationName,n.style.animationDuration=e.stylesRef.animationDuration),n.hidden=a})},invokeOnOpen:e=>{var i;(i=e.onOpenChange)==null||i.call(e,{open:!0})},invokeOnClose:e=>{var i;(i=e.onOpenChange)==null||i.call(e,{open:!1})},invokeOnExitComplete(e){var i;(i=e.onExitComplete)==null||i.call(e)},toggleVisibility:(e,i,{send:t})=>{t({type:e.open?"CONTROLLED.OPEN":"CONTROLLED.CLOSE"})}}})}no()(["dir","disabled","getRootNode","id","ids","onExitComplete","onOpenChange","open.controlled","open"]);const po=(o={})=>{const{lazyMount:r,unmountOnExit:e,...i}=o,t=l.useRef(!1),{dir:n}=L(),{getRootNode:a}=k(),s={id:l.useId(),dir:n,getRootNode:a,open:o.defaultOpen,"open.controlled":o.open!==void 0,...i},m={...s,open:o.open,onOpenChange:O(o.onOpenChange,{sync:!0})},[u,v]=w(mo(s),{context:m}),g=lo(u,v,S);g.visible&&(t.current=!0);const y=!g.visible&&!t.current&&r||e&&!g.visible&&t.current;return{...g,isUnmounted:y}},[uo,j]=I({name:"CollapsibleContext",hookName:"useCollapsibleContext",providerName:"<CollapsibleProvider />"}),D=l.forwardRef((o,r)=>{const[e,i]=ao(o),t=po(e),n=p(t.getRootProps(),i);return c.jsx(uo,{value:t,children:c.jsx(C.div,{...n,ref:r})})});D.displayName="CollapsibleRoot";const[go,N]=I({name:"AccordionItemPropsContext",hookName:"useAccordionItemPropsContext",providerName:"<AccordionItemPropsProvider />"}),$=l.forwardRef((o,r)=>{const[e,i]=W(o),t=P(),n=H(),a=p(t.getItemProps(e),i),s=t.getItemState(e),m=t.getItemContentProps(e);return c.jsx(go,{value:e,children:c.jsx(ro,{value:s,children:c.jsx(D,{ref:r,open:s.expanded,ids:{content:m.id},...n,...a})})})});$.displayName="AccordionItem";const V=l.forwardRef((o,r)=>{const e=j();if(e.isUnmounted)return null;const i=p(e.getContentProps(),o);return c.jsx(C.div,{...i,ref:r})});V.displayName="CollapsibleContent";const Co=h(),z=l.forwardRef((o,r)=>{const e=P(),i=N(),t=e.getItemContentProps(i),[,n]=Co(t,["hidden","data-state"]),a=p(n,o);return c.jsx(V,{ref:r,...a})});z.displayName="AccordionItemContent";const Po=o=>o.children(so()),M=l.forwardRef((o,r)=>{const e=P(),i=N(),t=p(e.getItemIndicatorProps(i),o);return c.jsx(C.div,{...t,ref:r})});M.displayName="AccordionItemIndicator";const B=l.forwardRef((o,r)=>{const e=P(),i=N(),t=j(),n=e.getItemTriggerProps(i),a=p({...n,"aria-controls":t.isUnmounted?void 0:n["aria-controls"]},o);return c.jsx(C.button,{...a,ref:r})});B.displayName="AccordionItemTrigger";const fo=(o={})=>{const{getRootNode:r}=k(),{dir:e}=L(),i={id:l.useId(),dir:e,getRootNode:r,value:o.defaultValue,...o},t={...i,value:o.value,onFocusChange:O(o.onFocusChange),onValueChange:O(o.onValueChange)},[n,a]=w(X(i),{context:t});return Y(n,a,S)},_=l.forwardRef((o,r)=>{const[e,i]=b(o),[t,n]=h()(i,["collapsible","defaultValue","disabled","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]),a=fo(t),s=p(a.getRootProps(),n);return c.jsx(T,{value:a,children:c.jsx(x,{value:e,children:c.jsx(C.div,{...s,ref:r})})})});_.displayName="AccordionRoot";const F=l.forwardRef((o,r)=>{const[e,i]=b(o),[{value:t},n]=h()(i,["value"]),a=p(t.getRootProps(),n);return c.jsx(T,{value:t,children:c.jsx(x,{value:e,children:c.jsx(C.div,{...a,ref:r})})})});F.displayName="AccordionRootProvider";const{withProvider:U,withContext:f,useStyles:$o,PropsProvider:vo}=G({key:"accordion"}),Vo=U(F,"root",{forwardAsChild:!0}),zo=U(_,"root",{forwardAsChild:!0}),Mo=vo,Bo=f($,"item",{forwardAsChild:!0}),_o=f(z,"itemContent",{forwardAsChild:!0}),Fo=f("div","itemBody"),Uo=f(B,"itemTrigger",{forwardAsChild:!0}),qo=f(M,"itemIndicator",{forwardAsChild:!0}),Go=io,Ho=Po;export{Uo as A,uo as C,qo as a,_o as b,Fo as c,zo as d,Bo as e,co as f,Go as g,Ho as h,Mo as i,Vo as j,D as k,V as l,fo as m,P as n,so as o,j as u};
