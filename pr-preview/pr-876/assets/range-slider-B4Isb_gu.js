import{j as T}from"./extends-CwFRzn3r.js";import{r as l}from"./index-BwDkhjyp.js";import{g as Fe,u as Be,o as Ee,a as Ue,b as $e}from"./slider-utils-DlyfFmdB.js";import{u as ee}from"./use-callback-ref-DA6UG1mJ.js";import{u as Ke}from"./use-controllable-state-Dnial3e2.js";import{c as pe,v as he,p as Oe,r as ze}from"./number-D-Zd7p0h.js";import{u as He}from"./use-update-effect-CNg9DBIF.js";import{m as ve}from"./use-merge-refs-Bdxaq0s4.js";import{a as te,d as C}from"./attr-sHTFgF0E.js";import{c as ne}from"./call-all-DDzecCnU.js";import{u as Ye}from"./use-theme-CBfqdygA.js";import{f as M}from"./forward-ref-BWI-Phbn.js";import{a as Xe,o as qe}from"./use-style-config--HlEOpE-.js";import{a as D}from"./factory-CdGA0D9p.js";import{c as Se}from"./context-CBKykClo.js";import{c as ae}from"./cx-BDMMs1jM.js";function Ge(h){const{min:a=0,max:r=100,onChange:c,value:p,defaultValue:u,isReversed:w,direction:y="ltr",orientation:v="horizontal",id:O,isDisabled:k,isReadOnly:z,onChangeStart:be,onChangeEnd:ke,step:se=1,getAriaValueText:xe,"aria-valuetext":N,"aria-label":I,"aria-labelledby":j,name:F,focusThumbOnChange:re=!0,minStepsBetweenThumbs:ye=0,...oe}=h,H=ee(be),V=ee(ke),B=ee(xe),S=Ue({isReversed:w,direction:y,orientation:v}),[E,Y]=Ke({value:p,defaultValue:u??[25,75],onChange:c});if(!Array.isArray(E))throw new TypeError(`[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof E}\``);const[X,le]=l.useState(!1),[q,G]=l.useState(!1),[i,_]=l.useState(-1),A=!(k||z),Re=l.useRef(E),d=E.map(e=>pe(e,a,r)),Pe=ye*se,R=Je(d,a,r,Pe),g=l.useRef({eventSource:null,value:[],valueBounds:[]});g.current.value=d,g.current.valueBounds=R;const Te=d.map(e=>r-e+a),J=(S?Te:d).map(e=>he(e,a,r)),Q=v==="vertical",W=l.useRef(null),Z=l.useRef(null),we=l.useId(),m=$e(O??we),ie=l.useCallback(e=>{var P;if(!W.current)return;g.current.eventSource="pointer";const n=W.current.getBoundingClientRect(),{clientX:t,clientY:s}=((P=e.touches)==null?void 0:P[0])??e,o=Q?n.bottom-s:t-n.left,x=Q?n.height:n.width;let b=o/x;return S&&(b=1-b),Oe(b,a,r)},[Q,S,r,a]),L=(r-a)/10,U=se||(r-a)/100,f=l.useMemo(()=>({setValueAtIndex(e,n){if(!A)return;const t=g.current.valueBounds[e];n=parseFloat(ze(n,t.min,U)),n=pe(n,t.min,t.max);const s=[...g.current.value];s[e]=n,Y(s)},setActiveIndex:_,stepUp(e,n=U){const t=g.current.value[e],s=S?t-n:t+n;f.setValueAtIndex(e,s)},stepDown(e,n=U){const t=g.current.value[e],s=S?t+n:t-n;f.setValueAtIndex(e,s)},reset(){Y(Re.current)}}),[U,S,Y,A]),ce=l.useCallback(e=>{const n=e.key,s={ArrowRight:()=>f.stepUp(i),ArrowUp:()=>f.stepUp(i),ArrowLeft:()=>f.stepDown(i),ArrowDown:()=>f.stepDown(i),PageUp:()=>f.stepUp(i,L),PageDown:()=>f.stepDown(i,L),Home:()=>{const{min:o}=R[i];f.setValueAtIndex(i,o)},End:()=>{const{max:o}=R[i];f.setValueAtIndex(i,o)}}[n];s&&(e.preventDefault(),e.stopPropagation(),s(e),g.current.eventSource="keyboard")},[f,i,L,R]),{getThumbStyle:ue,rootStyle:de,trackStyle:me,innerTrackStyle:ge}=l.useMemo(()=>Fe({isReversed:S,orientation:v,thumbPercents:J}),[S,v,J]),fe=l.useCallback(e=>{var t;const n=e??i;if(n!==-1&&re){const s=m.getThumb(n),o=(t=Z.current)==null?void 0:t.ownerDocument.getElementById(s);o&&setTimeout(()=>o.focus())}},[re,i,m]);He(()=>{g.current.eventSource==="keyboard"&&(V==null||V(g.current.value))},[d,V]);const Ie=e=>{const n=ie(e)||0,t=g.current.value.map(P=>Math.abs(P-n)),s=Math.min(...t);let o=t.indexOf(s);const x=t.filter(P=>P===s);x.length>1&&n>g.current.value[o]&&(o=o+x.length-1),_(o),f.setValueAtIndex(o,n),fe(o)},Ve=e=>{if(i==-1)return;const n=ie(e)||0;_(i),f.setValueAtIndex(i,n),fe(i)};Be(Z,{onPanSessionStart(e){A&&(le(!0),Ie(e),H==null||H(g.current.value))},onPanSessionEnd(){A&&(le(!1),V==null||V(g.current.value))},onPan(e){A&&Ve(e)}});const Ae=l.useCallback((e={},n=null)=>({...e,...oe,id:m.root,ref:ve(n,Z),tabIndex:-1,"aria-disabled":te(k),"data-focused":C(q),style:{...e.style,...de}}),[oe,k,q,de,m]),Ce=l.useCallback((e={},n=null)=>({...e,ref:ve(n,W),id:m.track,"data-disabled":C(k),style:{...e.style,...me}}),[k,me,m]),_e=l.useCallback((e={},n=null)=>({...e,ref:n,id:m.innerTrack,style:{...e.style,...ge}}),[ge,m]),Me=l.useCallback((e,n=null)=>{const{index:t,...s}=e,o=d[t];if(o==null)throw new TypeError(`[range-slider > thumb] Cannot find value at index \`${t}\`. The \`value\` or \`defaultValue\` length is : ${d.length}`);const x=R[t];return{...s,ref:n,role:"slider",tabIndex:A?0:void 0,id:m.getThumb(t),"data-active":C(X&&i===t),"aria-valuetext":(B==null?void 0:B(o))??(N==null?void 0:N[t]),"aria-valuemin":x.min,"aria-valuemax":x.max,"aria-valuenow":o,"aria-orientation":v,"aria-disabled":te(k),"aria-readonly":te(z),"aria-label":I==null?void 0:I[t],"aria-labelledby":I!=null&&I[t]||j==null?void 0:j[t],style:{...e.style,...ue(t)},onKeyDown:ne(e.onKeyDown,ce),onFocus:ne(e.onFocus,()=>{G(!0),_(t)}),onBlur:ne(e.onBlur,()=>{G(!1),_(-1)})}},[m,d,R,A,X,i,B,N,v,k,z,I,j,ue,ce,G]),De=l.useCallback((e={},n=null)=>({...e,ref:n,id:m.output,htmlFor:d.map((t,s)=>m.getThumb(s)).join(" "),"aria-live":"off"}),[m,d]),Ne=l.useCallback((e,n=null)=>{const{value:t,...s}=e,o=!(t<a||t>r),x=t>=d[0]&&t<=d[d.length-1];let b=he(t,a,r);b=S?100-b:b;const P={position:"absolute",pointerEvents:"none",...Ee({orientation:v,vertical:{bottom:`${b}%`},horizontal:{left:`${b}%`}})};return{...s,ref:n,id:m.getMarker(e.value),role:"presentation","aria-hidden":!0,"data-disabled":C(k),"data-invalid":C(!o),"data-highlighted":C(x),style:{...e.style,...P}}},[k,S,r,a,v,d,m]),je=l.useCallback((e,n=null)=>{const{index:t,...s}=e;return{...s,ref:n,id:m.getInput(t),type:"hidden",value:d[t],name:Array.isArray(F)?F[t]:`${F}-${t}`}},[F,d,m]);return{state:{value:d,isFocused:q,isDragging:X,getThumbPercent:e=>J[e],getThumbMinValue:e=>R[e].min,getThumbMaxValue:e=>R[e].max},actions:f,getRootProps:Ae,getTrackProps:Ce,getInnerTrackProps:_e,getThumbProps:Me,getMarkerProps:Ne,getInputProps:je,getOutputProps:De}}function Je(h,a,r,c){return h.map((p,u)=>{const w=u===0?a:h[u-1]+c,y=u===h.length-1?r:h[u+1]-c;return{min:w,max:y}})}const[Qe,$]=Se({name:"SliderContext",errorMessage:"useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"}),[We,K]=Se({name:"RangeSliderStylesContext",errorMessage:`useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),Ze=M(function(a,r){const c={orientation:"horizontal",...a},p=Xe("Slider",c),u=qe(c),{direction:w}=Ye();u.direction=w;const{getRootProps:y,...v}=Ge(u),O=l.useMemo(()=>({...v,name:c.name}),[v,c.name]);return T.jsx(Qe,{value:O,children:T.jsx(We,{value:p,children:T.jsx(D.div,{...y({},r),className:"chakra-slider",__css:p.container,children:c.children})})})});Ze.displayName="RangeSlider";const Le=M(function(a,r){const{getThumbProps:c,getInputProps:p,name:u}=$(),w=K(),y=c(a,r);return T.jsxs(D.div,{...y,className:ae("chakra-slider__thumb",a.className),__css:w.thumb,children:[y.children,u&&T.jsx("input",{...p({index:a.index})})]})});Le.displayName="RangeSliderThumb";const et=M(function(a,r){const{getTrackProps:c}=$(),p=K(),u=c(a,r);return T.jsx(D.div,{...u,className:ae("chakra-slider__track",a.className),__css:p.track,"data-testid":"chakra-range-slider-track"})});et.displayName="RangeSliderTrack";const tt=M(function(a,r){const{getInnerTrackProps:c}=$(),p=K(),u=c(a,r);return T.jsx(D.div,{...u,className:"chakra-slider__filled-track",__css:p.filledTrack})});tt.displayName="RangeSliderFilledTrack";const nt=M(function(a,r){const{getMarkerProps:c}=$(),p=K(),u=c(a,r);return T.jsx(D.div,{...u,className:ae("chakra-slider__marker",a.className),__css:p.mark})});nt.displayName="RangeSliderMark";export{Ze as R,et as a,tt as b,Le as c};
