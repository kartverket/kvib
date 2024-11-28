import{a as S,b as A,o as D,f as R,s as W,l as I,c as B,h as H,d as T}from"./floating-ui.dom-BfjzW660.js";import{X as V,r as k,P as C,Y as L,Z as N,R as j,o as U}from"./create-slot-recipe-context-BTQZ2sOO.js";function v(t=0,e=0,r=0,i=0){if(typeof DOMRect=="function")return new DOMRect(t,e,r,i);const n={x:t,y:e,width:r,height:i,top:e,right:t+r,bottom:e+i,left:t};return{...n,toJSON:()=>n}}function Y(t){if(!t)return v();const{x:e,y:r,width:i,height:n}=t;return v(e,r,i,n)}function _(t,e){return{contextElement:C(t)?t:void 0,getBoundingClientRect:()=>{const r=t,i=e==null?void 0:e(r);return i||!r?Y(i):r.getBoundingClientRect()}}}var u=t=>({variable:t,reference:`var(${t})`}),c={arrowSize:u("--arrow-size"),arrowSizeHalf:u("--arrow-size-half"),arrowBg:u("--arrow-background"),transformOrigin:u("--transform-origin"),arrowOffset:u("--arrow-offset")},q=t=>({top:"bottom center","top-start":t?`${t.x}px bottom`:"left bottom","top-end":t?`${t.x}px bottom`:"right bottom",bottom:"top center","bottom-start":t?`${t.x}px top`:"top left","bottom-end":t?`${t.x}px top`:"top right",left:"right center","left-start":t?`right ${t.y}px`:"right top","left-end":t?`right ${t.y}px`:"right bottom",right:"left center","right-start":t?`left ${t.y}px`:"left top","right-end":t?`left ${t.y}px`:"left bottom"}),G={name:"transformOrigin",fn({placement:t,elements:e,middlewareData:r}){const{arrow:i}=r,n=q(i)[t],{floating:a}=e;return a.style.setProperty(c.transformOrigin.variable,n),{data:{transformOrigin:n}}}},J={name:"rects",fn({rects:t}){return{data:t}}},X=t=>{if(t)return{name:"shiftArrow",fn({placement:e,middlewareData:r}){if(!r.arrow)return{};const{x:i,y:n}=r.arrow,a=e.split("-")[0];return Object.assign(t.style,{left:i!=null?`${i}px`:"",top:n!=null?`${n}px`:"",[a]:`calc(100% + ${c.arrowOffset.reference})`}),{}}}};function Z(t){const[e,r]=t.split("-");return{side:e,align:r,hasAlign:r!=null}}function ft(t){return t.split("-")[0]}var E={strategy:"absolute",placement:"bottom",listeners:!0,gutter:8,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,overflowPadding:8,arrowPadding:4};function b(t,e){const r=t.devicePixelRatio||1;return Math.round(e*r)/r}function P(t){return N(t.boundary)}function K(t,e){if(t)return A({element:t,padding:e.arrowPadding})}function Q(t,e){if(!L(e.offset??e.gutter))return D(({placement:r})=>{var d,o;const i=((t==null?void 0:t.clientHeight)||0)/2,n=((d=e.offset)==null?void 0:d.mainAxis)??e.gutter,a=typeof n=="number"?n+i:n??i,{hasAlign:f}=Z(r),s=f?void 0:e.shift,l=((o=e.offset)==null?void 0:o.crossAxis)??s;return U({crossAxis:l,mainAxis:a,alignmentAxis:e.shift})})}function F(t){if(t.flip)return R({boundary:P(t),padding:t.overflowPadding,fallbackPlacements:t.flip===!0?void 0:t.flip})}function tt(t){if(!(!t.slide&&!t.overlap))return W({boundary:P(t),mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding,limiter:I()})}function et(t){return B({padding:t.overflowPadding,apply({elements:e,rects:r,availableHeight:i,availableWidth:n}){const a=e.floating,f=Math.round(r.reference.width);n=Math.floor(n),i=Math.floor(i),a.style.setProperty("--reference-width",`${f}px`),a.style.setProperty("--available-width",`${n}px`),a.style.setProperty("--available-height",`${i}px`)}})}function rt(t){var e;if(t.hideWhenDetached)return H({strategy:"referenceHidden",boundary:((e=t.boundary)==null?void 0:e.call(t))??"clippingAncestors"})}function nt(t){return t?t===!0?{ancestorResize:!0,ancestorScroll:!0,elementResize:!0,layoutShift:!0}:t:{}}function it(t,e,r={}){const i=_(t,r.getAnchorRect);if(!e||!i)return;const n=Object.assign({},E,r),a=e.querySelector("[data-part=arrow]"),f=[Q(a,n),F(n),tt(n),K(a,n),X(a),G,et(n),rt(n),J],{placement:s,strategy:l,onComplete:d,onPositioned:o}=n,m=async()=>{var w;if(!i||!e)return;const p=await T(i,e,{placement:s,middleware:f,strategy:l});d==null||d(p),o==null||o({placed:!0});const h=j(e),M=b(h,p.x),O=b(h,p.y);e.style.setProperty("--x",`${M}px`),e.style.setProperty("--y",`${O}px`),n.hideWhenDetached&&((w=p.middlewareData.hide)!=null&&w.referenceHidden)&&e.style.setProperty("visibility","hidden");const x=e.firstElementChild;if(x){const $=h.getComputedStyle(x).zIndex;e.style.setProperty("--z-index",$)}},y=async()=>{r.updatePosition?(await r.updatePosition({updatePosition:m}),o==null||o({placed:!0})):await m()},z=nt(n.listeners),g=n.listeners?S(i,e,y,z):V;return y(),()=>{g==null||g(),o==null||o({placed:!1})}}function ct(t,e,r={}){const{defer:i,...n}=r,a=i?k:s=>s(),f=[];return f.push(a(()=>{const s=typeof t=="function"?t():t,l=typeof e=="function"?e():e;f.push(it(s,l,n))})),()=>{f.forEach(s=>s==null?void 0:s())}}var at={bottom:"rotate(45deg)",left:"rotate(135deg)",top:"rotate(225deg)",right:"rotate(315deg)"};function dt(t={}){const{placement:e,sameWidth:r,fitViewport:i,strategy:n="absolute"}=t;return{arrow:{position:"absolute",width:c.arrowSize.reference,height:c.arrowSize.reference,[c.arrowSizeHalf.variable]:`calc(${c.arrowSize.reference} / 2)`,[c.arrowOffset.variable]:`calc(${c.arrowSizeHalf.reference} * -1)`},arrowTip:{transform:e?at[e.split("-")[0]]:void 0,background:c.arrowBg.reference,top:"0",left:"0",width:"100%",height:"100%",position:"absolute",zIndex:"inherit"},floating:{position:n,isolation:"isolate",minWidth:r?void 0:"max-content",width:r?"var(--reference-width)":void 0,maxWidth:i?"var(--available-width)":void 0,maxHeight:i?"var(--available-height)":void 0,top:"0px",left:"0px",transform:e?"translate3d(var(--x), var(--y), 0)":"translate3d(0, -100vh, 0)",zIndex:"var(--z-index)"}}}export{ct as a,ft as b,dt as g};
