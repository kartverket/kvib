import{p as E,af as N,w as A,ay as v,az as y,a5 as f}from"./create-slot-recipe-context-BTQZ2sOO.js";import{r as O}from"./index-Wp2u197Z.js";function P(i,e,t){const a=i.matches("mounted","unmountSuspended");return{skip:!i.context.initial&&a,present:a,setNode(n){n&&e({type:"NODE.SET",node:n})},unmount(){e({type:"UNMOUNT"})}}}function U(i){return E({initial:i.present?"mounted":"unmounted",context:{node:null,styles:null,unmountAnimationName:null,prevAnimationName:null,present:!1,initial:!1,...i},exit:["clearInitial"],watch:{present:["setInitial","syncPresence"]},on:{"NODE.SET":{actions:["setNode","setStyles"]}},states:{mounted:{on:{UNMOUNT:{target:"unmounted",actions:["invokeOnExitComplete"]},"UNMOUNT.SUSPEND":"unmountSuspended"}},unmountSuspended:{activities:["trackAnimationEvents"],after:{ANIMATION_DURATION:{target:"unmounted",actions:["invokeOnExitComplete"]}},on:{MOUNT:{target:"mounted",actions:["setPrevAnimationName"]},UNMOUNT:{target:"unmounted",actions:["invokeOnExitComplete"]}}},unmounted:{entry:["clearPrevAnimationName"],on:{MOUNT:{target:"mounted",actions:["setPrevAnimationName"]}}}}},{delays:{ANIMATION_DURATION(e){var t,a;return p((t=e.styles)==null?void 0:t.animationDuration)+p((a=e.styles)==null?void 0:a.animationDelay)+M}},actions:{setInitial(e){e.initial=!0},clearInitial(e){e.initial=!1},invokeOnExitComplete(e){var t;(t=e.onExitComplete)==null||t.call(e)},setNode(e,t){e.node=N(t.node)},setStyles(e,t){const a=t.node.ownerDocument.defaultView||window;e.styles=N(a.getComputedStyle(t.node))},syncPresence(e,t,{send:a}){var r;if(e.present){a({type:"MOUNT",src:"presence.changed"});return}if(!e.present&&((r=e.node)==null?void 0:r.ownerDocument.visibilityState)==="hidden"){a({type:"UNMOUNT",src:"visibilitychange"});return}const n=l(e.styles);(e.immediate?queueMicrotask:requestAnimationFrame)(()=>{var o,s;e.unmountAnimationName=n,n==="none"||n===e.prevAnimationName||((o=e.styles)==null?void 0:o.display)==="none"||((s=e.styles)==null?void 0:s.animationDuration)==="0s"?a({type:"UNMOUNT",src:"presence.changed"}):a({type:"UNMOUNT.SUSPEND"})})},setPrevAnimationName(e){(e.immediate?queueMicrotask:requestAnimationFrame)(()=>{e.prevAnimationName=l(e.styles)})},clearPrevAnimationName(e){e.prevAnimationName=null}},activities:{trackAnimationEvents(e,t,{send:a}){const n=e.node;if(!n)return;const u=o=>{var c,m;(((m=(c=o.composedPath)==null?void 0:c.call(o))==null?void 0:m[0])??o.target)===n&&(e.prevAnimationName=l(e.styles))},r=o=>{var m,d;const s=l(e.styles);(((d=(m=o.composedPath)==null?void 0:m.call(o))==null?void 0:d[0])??o.target)===n&&s===e.unmountAnimationName&&a({type:"UNMOUNT",src:"animationend"})};return n.addEventListener("animationstart",u),n.addEventListener("animationcancel",r),n.addEventListener("animationend",r),()=>{n.removeEventListener("animationstart",u),n.removeEventListener("animationcancel",r),n.removeEventListener("animationend",r)}}}})}function l(i){return(i==null?void 0:i.animationName)||"none"}function p(i){return parseFloat(i||"0")*1e3}var M=16.667;A()(["onExitComplete","present","immediate"]);const I=i=>{const{lazyMount:e,unmountOnExit:t,...a}=i,n=O.useRef(!1),u={...a,onExitComplete:v(i.onExitComplete)},[r,o]=y(U(u),{context:u}),s=P(r,o);s.present&&(n.current=!0);const c=!s.present&&!n.current&&e||t&&!s.present&&n.current,m=()=>({"data-state":i.present?"open":"closed",hidden:!s.present});return{ref:s.setNode,getPresenceProps:m,present:s.present,unmounted:c}},[S,h]=f({name:"PresenceContext",hookName:"usePresenceContext",providerName:"<PresenceProvider />"});export{S as P,h as a,I as u};
