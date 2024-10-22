import{j as a}from"./extends-CwFRzn3r.js";import{r as d}from"./index-BwDkhjyp.js";import{g as la,u as oa,o as da,a as ca,b as ua}from"./slider-utils-DlyfFmdB.js";import{u as de}from"./use-callback-ref-DA6UG1mJ.js";import{u as ma}from"./use-controllable-state-Dnial3e2.js";import{c as ke,v as je,p as ga,r as ba}from"./number-D-Zd7p0h.js";import{u as ha}from"./use-update-effect-CNg9DBIF.js";import{m as Pe}from"./use-merge-refs-Bdxaq0s4.js";import{a as ce,d as F}from"./attr-sHTFgF0E.js";import{c as ue}from"./call-all-DDzecCnU.js";import{u as xa}from"./use-theme-CBfqdygA.js";import{f as E}from"./forward-ref-BWI-Phbn.js";import{a as pa,o as Sa}from"./use-style-config-YUvqttAg.js";import{c as U}from"./factory-C6UFhaBW.js";import{c as $e}from"./context-CBKykClo.js";import{c as me}from"./cx-BDMMs1jM.js";import{S as fa}from"./stack-REYSnkee.js";import{I as Ve}from"./Icon-Ct7uaolX.js";function Ra(s){const{min:t=0,max:l=100,onChange:u,value:S,defaultValue:m,isReversed:C,direction:V="ltr",orientation:f="horizontal",id:W,isDisabled:T,isReadOnly:Z,onChangeStart:He,onChangeEnd:qe,step:ge=1,getAriaValueText:Ye,"aria-valuetext":$,"aria-label":A,"aria-labelledby":H,name:q,focusThumbOnChange:be=!0,minStepsBetweenThumbs:Xe=0,...he}=s,L=de(He),_=de(qe),Y=de(Ye),R=ca({isReversed:C,direction:V,orientation:f}),[X,ee]=ma({value:S,defaultValue:m??[25,75],onChange:u});if(!Array.isArray(X))throw new TypeError(`[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof X}\``);const[ae,xe]=d.useState(!1),[ne,re]=d.useState(!1),[c,M]=d.useState(-1),K=!(T||Z),Ge=d.useRef(X),g=X.map(e=>ke(e,t,l)),Je=Xe*ge,w=ya(g,t,l,Je),x=d.useRef({eventSource:null,value:[],valueBounds:[]});x.current.value=g,x.current.valueBounds=w;const Qe=g.map(e=>l-e+t),te=(R?Qe:g).map(e=>je(e,t,l)),se=f==="vertical",ie=d.useRef(null),le=d.useRef(null),We=d.useId(),b=ua(W??We),pe=d.useCallback(e=>{var I;if(!ie.current)return;x.current.eventSource="pointer";const r=ie.current.getBoundingClientRect(),{clientX:n,clientY:i}=((I=e.touches)==null?void 0:I[0])??e,o=se?r.bottom-i:n-r.left,k=se?r.height:r.width;let y=o/k;return R&&(y=1-y),ga(y,t,l)},[se,R,l,t]),oe=(l-t)/10,G=ge||(l-t)/100,p=d.useMemo(()=>({setValueAtIndex(e,r){if(!K)return;const n=x.current.valueBounds[e];r=parseFloat(ba(r,n.min,G)),r=ke(r,n.min,n.max);const i=[...x.current.value];i[e]=r,ee(i)},setActiveIndex:M,stepUp(e,r=G){const n=x.current.value[e],i=R?n-r:n+r;p.setValueAtIndex(e,i)},stepDown(e,r=G){const n=x.current.value[e],i=R?n+r:n-r;p.setValueAtIndex(e,i)},reset(){ee(Ge.current)}}),[G,R,ee,K]),Se=d.useCallback(e=>{const r=e.key,i={ArrowRight:()=>p.stepUp(c),ArrowUp:()=>p.stepUp(c),ArrowLeft:()=>p.stepDown(c),ArrowDown:()=>p.stepDown(c),PageUp:()=>p.stepUp(c,oe),PageDown:()=>p.stepDown(c,oe),Home:()=>{const{min:o}=w[c];p.setValueAtIndex(c,o)},End:()=>{const{max:o}=w[c];p.setValueAtIndex(c,o)}}[r];i&&(e.preventDefault(),e.stopPropagation(),i(e),x.current.eventSource="keyboard")},[p,c,oe,w]),{getThumbStyle:fe,rootStyle:Re,trackStyle:ye,innerTrackStyle:ve}=d.useMemo(()=>la({isReversed:R,orientation:f,thumbPercents:te}),[R,f,te]),Te=d.useCallback(e=>{var n;const r=e??c;if(r!==-1&&be){const i=b.getThumb(r),o=(n=le.current)==null?void 0:n.ownerDocument.getElementById(i);o&&setTimeout(()=>o.focus())}},[be,c,b]);ha(()=>{x.current.eventSource==="keyboard"&&(_==null||_(x.current.value))},[g,_]);const Ze=e=>{const r=pe(e)||0,n=x.current.value.map(I=>Math.abs(I-r)),i=Math.min(...n);let o=n.indexOf(i);const k=n.filter(I=>I===i);k.length>1&&r>x.current.value[o]&&(o=o+k.length-1),M(o),p.setValueAtIndex(o,r),Te(o)},Le=e=>{if(c==-1)return;const r=pe(e)||0;M(c),p.setValueAtIndex(c,r),Te(c)};oa(le,{onPanSessionStart(e){K&&(xe(!0),Ze(e),L==null||L(x.current.value))},onPanSessionEnd(){K&&(xe(!1),_==null||_(x.current.value))},onPan(e){K&&Le(e)}});const ea=d.useCallback((e={},r=null)=>({...e,...he,id:b.root,ref:Pe(r,le),tabIndex:-1,"aria-disabled":ce(T),"data-focused":F(ne),style:{...e.style,...Re}}),[he,T,ne,Re,b]),aa=d.useCallback((e={},r=null)=>({...e,ref:Pe(r,ie),id:b.track,"data-disabled":F(T),style:{...e.style,...ye}}),[T,ye,b]),na=d.useCallback((e={},r=null)=>({...e,ref:r,id:b.innerTrack,style:{...e.style,...ve}}),[ve,b]),ra=d.useCallback((e,r=null)=>{const{index:n,...i}=e,o=g[n];if(o==null)throw new TypeError(`[range-slider > thumb] Cannot find value at index \`${n}\`. The \`value\` or \`defaultValue\` length is : ${g.length}`);const k=w[n];return{...i,ref:r,role:"slider",tabIndex:K?0:void 0,id:b.getThumb(n),"data-active":F(ae&&c===n),"aria-valuetext":(Y==null?void 0:Y(o))??($==null?void 0:$[n]),"aria-valuemin":k.min,"aria-valuemax":k.max,"aria-valuenow":o,"aria-orientation":f,"aria-disabled":ce(T),"aria-readonly":ce(Z),"aria-label":A==null?void 0:A[n],"aria-labelledby":A!=null&&A[n]||H==null?void 0:H[n],style:{...e.style,...fe(n)},onKeyDown:ue(e.onKeyDown,Se),onFocus:ue(e.onFocus,()=>{re(!0),M(n)}),onBlur:ue(e.onBlur,()=>{re(!1),M(-1)})}},[b,g,w,K,ae,c,Y,$,f,T,Z,A,H,fe,Se,re]),ta=d.useCallback((e={},r=null)=>({...e,ref:r,id:b.output,htmlFor:g.map((n,i)=>b.getThumb(i)).join(" "),"aria-live":"off"}),[b,g]),sa=d.useCallback((e,r=null)=>{const{value:n,...i}=e,o=!(n<t||n>l),k=n>=g[0]&&n<=g[g.length-1];let y=je(n,t,l);y=R?100-y:y;const I={position:"absolute",pointerEvents:"none",...da({orientation:f,vertical:{bottom:`${y}%`},horizontal:{left:`${y}%`}})};return{...i,ref:r,id:b.getMarker(e.value),role:"presentation","aria-hidden":!0,"data-disabled":F(T),"data-invalid":F(!o),"data-highlighted":F(k),style:{...e.style,...I}}},[T,R,l,t,f,g,b]),ia=d.useCallback((e,r=null)=>{const{index:n,...i}=e;return{...i,ref:r,id:b.getInput(n),type:"hidden",value:g[n],name:Array.isArray(q)?q[n]:`${q}-${n}`}},[q,g,b]);return{state:{value:g,isFocused:ne,isDragging:ae,getThumbPercent:e=>te[e],getThumbMinValue:e=>w[e].min,getThumbMaxValue:e=>w[e].max},actions:p,getRootProps:ea,getTrackProps:aa,getInnerTrackProps:na,getThumbProps:ra,getMarkerProps:sa,getInputProps:ia,getOutputProps:ta}}function ya(s,t,l,u){return s.map((S,m)=>{const C=m===0?t:s[m-1]+u,V=m===s.length-1?l:s[m+1]-u;return{min:C,max:V}})}const[va,J]=$e({name:"SliderContext",errorMessage:"useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"}),[Ta,Q]=$e({name:"RangeSliderStylesContext",errorMessage:`useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),v=E(function(t,l){const u={orientation:"horizontal",...t},S=pa("Slider",u),m=Sa(u),{direction:C}=xa();m.direction=C;const{getRootProps:V,...f}=Ra(m),W=d.useMemo(()=>({...f,name:u.name}),[f,u.name]);return a.jsx(va,{value:W,children:a.jsx(Ta,{value:S,children:a.jsx(U.div,{...V({},l),className:"chakra-slider",__css:S.container,children:u.children})})})});v.displayName="RangeSlider";const h=E(function(t,l){const{getThumbProps:u,getInputProps:S,name:m}=J(),C=Q(),V=u(t,l);return a.jsxs(U.div,{...V,className:me("chakra-slider__thumb",t.className),__css:C.thumb,children:[V.children,m&&a.jsx("input",{...S({index:t.index})})]})});h.displayName="RangeSliderThumb";const j=E(function(t,l){const{getTrackProps:u}=J(),S=Q(),m=u(t,l);return a.jsx(U.div,{...m,className:me("chakra-slider__track",t.className),__css:S.track,"data-testid":"chakra-range-slider-track"})});j.displayName="RangeSliderTrack";const P=E(function(t,l){const{getInnerTrackProps:u}=J(),S=Q(),m=u(t,l);return a.jsx(U.div,{...m,className:"chakra-slider__filled-track",__css:S.filledTrack})});P.displayName="RangeSliderFilledTrack";const ka=E(function(t,l){const{getMarkerProps:u}=J(),S=Q(),m=u(t,l);return a.jsx(U.div,{...m,className:me("chakra-slider__marker",t.className),__css:S.mark})});ka.displayName="RangeSliderMark";const ja={title:"Skjemaelementer/Range Slider",component:v,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The static string to use used for `aria-label` if no visible label is used.",table:{type:{summary:"string[]"}},control:"array"},"aria-labelledby":{description:"The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider",table:{type:{summary:"string[]"}},control:"array"},"aria-valuetext":{description:"The static string to use used for `aria-valuetext`",table:{type:{summary:"string[]"}},control:"array"},defaultValue:{description:"The initial value of the slider in uncontrolled mode",table:{type:{summary:"number[]"}},control:"array"},direction:{description:"The writing mode",table:{type:{summary:'"ltr" | "rtl"'},defaultValue:{summary:"ltr"}},options:["ltr","rtl"],control:"radio"},focusThumbOnChange:{description:"If false, the slider handle will not capture focus when value changes.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},getAriaValueText:{description:"Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",table:{type:{summary:"(value: number) => string"}},control:"text"},id:{description:"The base id to use for the slider and its components",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReadOnly:{description:"If true, the slider will be in `read-only` state",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReversed:{description:"If true, the value will be incremented or decremented in reverse.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:100}},control:"number"},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},minStepsBetweenThumbs:{description:"The minimum distance between slider thumbs. Useful for preventing the thumbs from being too close together.",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},name:{description:"The name attribute of the hidden input field. This is particularly useful in forms",table:{type:{summary:"string | string[]"}},control:"array"},step:{description:"The step in which increments/decrements have to be made",table:{type:{summary:"number"},defaultValue:{summary:1}},control:"number"},value:{description:"The value of the slider in controlled mode",table:{type:{summary:"number[]"}},control:"array"}}},D={args:{defaultValue:[10,30]},render:s=>a.jsxs(v,{"aria-label":["min","max"],...s,children:[a.jsx(j,{children:a.jsx(P,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]})},z={args:{defaultValue:[10,40]},render:s=>a.jsxs(fa,{gap:5,children:[a.jsxs(v,{...s,"aria-label":["min","max"],colorScheme:"green",children:[a.jsx(j,{children:a.jsx(P,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]}),a.jsxs(v,{...s,"aria-label":["min","max"],colorScheme:"blue",children:[a.jsx(j,{children:a.jsx(P,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]}),a.jsxs(v,{...s,"aria-label":["min","max"],colorScheme:"red",children:[a.jsx(j,{children:a.jsx(P,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]}),a.jsxs(v,{...s,"aria-label":["min","max"],colorScheme:"gray",children:[a.jsx(j,{children:a.jsx(P,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]})]})},N={args:{defaultValue:[20,60],minH:"32",orientation:"vertical"},render:s=>a.jsxs(v,{"aria-label":["min","max"],...s,children:[a.jsx(j,{children:a.jsx(P,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]})},O={args:{defaultValue:[30,80]},render:s=>a.jsxs(v,{...s,"aria-label":["min","max"],children:[a.jsx(j,{bg:"red.100",children:a.jsx(P,{bg:"tomato"})}),a.jsx(h,{boxSize:6,index:0,children:a.jsx(Ve,{icon:"equalizer"})}),a.jsx(h,{boxSize:6,index:1,children:a.jsx(Ve,{icon:"equalizer"})})]})},B={args:{defaultValue:[120,240],min:0,max:300,step:30},render:s=>a.jsxs(v,{...s,"aria-label":["min","max"],children:[a.jsx(j,{children:a.jsx(P,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]})};var we,Ie,Ce;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    defaultValue: [10, 30]
  },
  render: args => <KvibRangeSlider aria-label={["min", "max"]} {...args}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </KvibRangeSlider>
}`,...(Ce=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Ae,_e,Ke;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    defaultValue: [10, 40]
  },
  render: args => <KvibStack gap={5}>
      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="green">
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </KvibRangeSlider>

      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="blue">
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </KvibRangeSlider>

      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="red">
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </KvibRangeSlider>

      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="gray">
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </KvibRangeSlider>
    </KvibStack>
}`,...(Ke=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var Fe,Me,De;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    defaultValue: [20, 60],
    minH: "32",
    orientation: "vertical"
  },
  render: args => <KvibRangeSlider aria-label={["min", "max"]} {...args}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </KvibRangeSlider>
}`,...(De=(Me=N.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var ze,Ne,Oe;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    defaultValue: [30, 80]
  },
  render: args => <KvibRangeSlider {...args} aria-label={["min", "max"]}>
      <RangeSliderTrack bg="red.100">
        <RangeSliderFilledTrack bg="tomato" />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0}>
        <Icon icon="equalizer" />
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={6} index={1}>
        <Icon icon="equalizer" />
      </RangeSliderThumb>
    </KvibRangeSlider>
}`,...(Oe=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var Be,Ee,Ue;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    defaultValue: [120, 240],
    min: 0,
    max: 300,
    step: 30
  },
  render: args => <KvibRangeSlider {...args} aria-label={["min", "max"]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </KvibRangeSlider>
}`,...(Ue=(Ee=B.parameters)==null?void 0:Ee.docs)==null?void 0:Ue.source}}};const Pa=["Preview","RangeSliderColors","RangeSliderOrientation","RangeSliderCustomizing","RangeSliderDiscrete"],Ga=Object.freeze(Object.defineProperty({__proto__:null,Preview:D,RangeSliderColors:z,RangeSliderCustomizing:O,RangeSliderDiscrete:B,RangeSliderOrientation:N,__namedExportsOrder:Pa,default:ja},Symbol.toStringTag,{value:"Module"}));export{D as P,Ga as R,z as a,N as b,O as c,B as d};
