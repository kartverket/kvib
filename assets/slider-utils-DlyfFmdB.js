import{r as m}from"./index-BwDkhjyp.js";import{b as _}from"./owner-DF4q1r8F.js";function z(t,e,n,r){return t.addEventListener(e,n,r),()=>{t.removeEventListener(e,n,r)}}function A(t){const e=_(t);return typeof e.PointerEvent<"u"&&t instanceof e.PointerEvent?t.pointerType==="mouse":t instanceof e.MouseEvent}function F(t){return!!t.touches}function N(t){return F(t)&&t.touches.length>1}function O(t,e="page"){const n=t.touches[0]||t.changedTouches[0];return{x:n[`${e}X`],y:n[`${e}Y`]}}function W(t,e="page"){return{x:t[`${e}X`],y:t[`${e}Y`]}}function I(t,e="page"){return F(t)?O(t,e):W(t,e)}function k(t){return e=>{const n=A(e);(!n||n&&e.button===0)&&t(e)}}function C(t,e=!1){function n(o){t(o,{point:I(o)})}return e?k(n):n}function P(t,e,n,r){return z(t,e,C(n,e==="pointerdown"),r)}function H(t){const e=m.useRef(null);return e.current=t,e}const D=1/60*1e3,X=typeof performance<"u"?()=>performance.now():()=>Date.now(),L=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(X()),D);function Y(t){let e=[],n=[],r=0,o=!1,f=!1;const a=new WeakSet,l={schedule:(c,i=!1,u=!1)=>{const s=u&&o,h=s?e:n;return i&&a.add(c),h.indexOf(c)===-1&&(h.push(c),s&&o&&(r=e.length)),c},cancel:c=>{const i=n.indexOf(c);i!==-1&&n.splice(i,1),a.delete(c)},process:c=>{if(o){f=!0;return}if(o=!0,[e,n]=[n,e],n.length=0,r=e.length,r)for(let i=0;i<r;i++){const u=e[i];u(c),a.has(u)&&(l.schedule(u),t())}o=!1,f&&(f=!1,l.process(c))}};return l}const q=40;let S=!0,g=!1,b=!1;const d={delta:0,timestamp:0},E=["read","update","preRender","render","postRender"],x=E.reduce((t,e)=>(t[e]=Y(()=>g=!0),t),{}),V=E.reduce((t,e)=>{const n=x[e];return t[e]=(r,o=!1,f=!1)=>(g||G(),n.schedule(r,o,f)),t},{}),B=E.reduce((t,e)=>(t[e]=x[e].cancel,t),{});E.reduce((t,e)=>(t[e]=()=>x[e].process(d),t),{});const K=t=>x[t].process(d),U=t=>{g=!1,d.delta=S?D:Math.max(Math.min(t-d.timestamp,q),1),d.timestamp=t,b=!0,E.forEach(K),b=!1,g&&(S=!1,L(U))},G=()=>{g=!0,S=!0,b||L(U)},T=()=>d;var J=Object.defineProperty,Q=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e,n)=>(Q(t,typeof e!="symbol"?e+"":e,n),n);class Z{constructor(e,n,r){if(p(this,"history",[]),p(this,"startEvent",null),p(this,"lastEvent",null),p(this,"lastEventInfo",null),p(this,"handlers",{}),p(this,"removeListeners",()=>{}),p(this,"threshold",3),p(this,"win"),p(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const l=w(this.lastEventInfo,this.history),c=this.startEvent!==null,i=nt(l.offset,{x:0,y:0})>=this.threshold;if(!c&&!i)return;const{timestamp:u}=T();this.history.push({...l.point,timestamp:u});const{onStart:s,onMove:h}=this.handlers;c||(s==null||s(this.lastEvent,l),this.startEvent=this.lastEvent),h==null||h(this.lastEvent,l)}),p(this,"onPointerMove",(l,c)=>{this.lastEvent=l,this.lastEventInfo=c,V.update(this.updatePoint,!0)}),p(this,"onPointerUp",(l,c)=>{const i=w(c,this.history),{onEnd:u,onSessionEnd:s}=this.handlers;s==null||s(l,i),this.end(),!(!u||!this.startEvent)&&(u==null||u(l,i))}),this.win=e.view??window,N(e))return;this.handlers=n,r&&(this.threshold=r),e.stopPropagation(),e.preventDefault();const o={point:I(e)},{timestamp:f}=T();this.history=[{...o.point,timestamp:f}];const{onSessionStart:a}=n;a==null||a(e,w(o,this.history)),this.removeListeners=et(P(this.win,"pointermove",this.onPointerMove),P(this.win,"pointerup",this.onPointerUp),P(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),B.update(this.updatePoint)}}function M(t,e){return{x:t.x-e.x,y:t.y-e.y}}function w(t,e){return{point:t.point,delta:M(t.point,e[e.length-1]),offset:M(t.point,e[0]),velocity:tt(e,.1)}}const j=t=>t*1e3;function tt(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const o=t[t.length-1];for(;n>=0&&(r=t[n],!(o.timestamp-r.timestamp>j(e)));)n--;if(!r)return{x:0,y:0};const f=(o.timestamp-r.timestamp)/1e3;if(f===0)return{x:0,y:0};const a={x:(o.x-r.x)/f,y:(o.y-r.y)/f};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function et(...t){return e=>t.reduce((n,r)=>r(n),e)}function y(t,e){return Math.abs(t-e)}function R(t){return"x"in t&&"y"in t}function nt(t,e){if(typeof t=="number"&&typeof e=="number")return y(t,e);if(R(t)&&R(e)){const n=y(t.x,e.x),r=y(t.y,e.y);return Math.sqrt(n**2+r**2)}return 0}function ot(t,e){const{onPan:n,onPanStart:r,onPanEnd:o,onPanSessionStart:f,onPanSessionEnd:a,threshold:l}=e,c=!!(n||r||o||f||a),i=m.useRef(null),u=H({onSessionStart:f,onSessionEnd:a,onStart:r,onMove:n,onEnd(s,h){i.current=null,o==null||o(s,h)}});m.useEffect(()=>{var s;(s=i.current)==null||s.updateHandlers(u.current)}),m.useEffect(()=>{const s=t.current;if(!s||!c)return;function h(v){i.current=new Z(v,u.current,l)}return P(s,"pointerdown",h)},[t,c,u,l]),m.useEffect(()=>()=>{var s;(s=i.current)==null||s.end(),i.current=null},[])}function it(t){return{root:`slider-root-${t}`,getThumb:e=>`slider-thumb-${t}-${e}`,getInput:e=>`slider-input-${t}-${e}`,track:`slider-track-${t}`,innerTrack:`slider-filled-track-${t}`,getMarker:e=>`slider-marker-${t}-${e}`,output:`slider-output-${t}`}}function $(t){const{orientation:e,vertical:n,horizontal:r}=t;return e==="vertical"?n:r}function ut(t){const{orientation:e,thumbPercents:n,isReversed:r}=t,o=v=>({position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...$({orientation:e,vertical:{bottom:`${n[v]}%`},horizontal:{left:`${n[v]}%`}})}),f={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0},a={position:"absolute",...$({orientation:e,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},l=n.length===1,c=[0,r?100-n[0]:n[0]],i=l?c:n;let u=i[0];!l&&r&&(u=100-u);const s=Math.abs(i[i.length-1]-i[0]),h={...a,...$({orientation:e,vertical:r?{height:`${s}%`,top:`${u}%`}:{height:`${s}%`,bottom:`${u}%`},horizontal:r?{width:`${s}%`,right:`${u}%`}:{width:`${s}%`,left:`${u}%`}})};return{trackStyle:a,innerTrackStyle:h,rootStyle:f,getThumbStyle:o}}function ct(t){const{isReversed:e,direction:n,orientation:r}=t;return n==="ltr"||r==="vertical"?e:!e}export{ct as a,it as b,H as c,ut as g,$ as o,ot as u};