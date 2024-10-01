import{j as a}from"./extends-CwFRzn3r.js";import{u as da,g as ua,a as ca,b as de,d as _,c as ue,o as ma,e as ga,f as ba,h as me}from"./index-CG31mONj.js";import{u as ha}from"./index-DjrpCY14.js";import{u as ce}from"./index-DdaX-njP.js";import{u as xa}from"./index-DEiKcbOK.js";import{m as Ve}from"./index-Bdxaq0s4.js";import{c as Pe,v as we,p as Sa,r as pa}from"./index-wFQsMYyp.js";import{r as o}from"./index-BwDkhjyp.js";import{c as He}from"./index-CHDWSgKD.js";import{a as fa}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{f as O,o as va,c as U}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{u as ya}from"./chunk-UIGT7YZF-XoNRsZNz.js";import{S as Ra}from"./chunk-ZHMYA64R-V_96TD_T.js";import{I as Ie}from"./Icon-tbSQqMaw.js";function Ta(s){const{min:l=0,max:i=100,onChange:c,value:p,defaultValue:m,isReversed:I,direction:P="ltr",orientation:f="horizontal",id:$,isDisabled:k,isReadOnly:J,onChangeStart:Le,onChangeEnd:Ye,step:ge=1,getAriaValueText:Xe,"aria-valuetext":Q,"aria-label":K,"aria-labelledby":W,name:q,focusThumbOnChange:be=!0,minStepsBetweenThumbs:Ge=0,...he}=s,xe=ce(Le),F=ce(Ye),Z=ce(Xe),y=ga({isReversed:I,direction:P,orientation:f}),[H,ee]=ha({value:p,defaultValue:m??[25,75],onChange:c});if(!Array.isArray(H))throw new TypeError(`[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof H}\``);const[ae,Se]=o.useState(!1),[ne,re]=o.useState(!1),[d,M]=o.useState(-1),C=!(k||J),Je=o.useRef(H),g=H.map(e=>Pe(e,l,i)),Qe=Ge*ge,w=ka(g,l,i,Qe),x=o.useRef({eventSource:null,value:[],valueBounds:[]});x.current.value=g,x.current.valueBounds=w;const We=g.map(e=>i-e+l),te=(y?We:g).map(e=>we(e,l,i)),le=f==="vertical",se=o.useRef(null),L=o.useRef(null),pe=da({getNodes(){const e=L.current,n=e==null?void 0:e.querySelectorAll("[role=slider]");return n?Array.from(n):[]}}),Ze=o.useId(),b=ba($??Ze),fe=o.useCallback(e=>{var n,t;if(!se.current)return;x.current.eventSource="pointer";const r=se.current.getBoundingClientRect(),{clientX:u,clientY:R}=(t=(n=e.touches)==null?void 0:n[0])!=null?t:e,v=le?r.bottom-R:u-r.left,A=le?r.height:r.width;let oe=v/A;return y&&(oe=1-oe),Sa(oe,l,i)},[le,y,i,l]),ie=(i-l)/10,Y=ge||(i-l)/100,S=o.useMemo(()=>({setValueAtIndex(e,n){if(!C)return;const t=x.current.valueBounds[e];n=parseFloat(pa(n,t.min,Y)),n=Pe(n,t.min,t.max);const r=[...x.current.value];r[e]=n,ee(r)},setActiveIndex:M,stepUp(e,n=Y){const t=x.current.value[e],r=y?t-n:t+n;S.setValueAtIndex(e,r)},stepDown(e,n=Y){const t=x.current.value[e],r=y?t+n:t-n;S.setValueAtIndex(e,r)},reset(){ee(Je.current)}}),[Y,y,ee,C]),ve=o.useCallback(e=>{const n=e.key,r={ArrowRight:()=>S.stepUp(d),ArrowUp:()=>S.stepUp(d),ArrowLeft:()=>S.stepDown(d),ArrowDown:()=>S.stepDown(d),PageUp:()=>S.stepUp(d,ie),PageDown:()=>S.stepDown(d,ie),Home:()=>{const{min:u}=w[d];S.setValueAtIndex(d,u)},End:()=>{const{max:u}=w[d];S.setValueAtIndex(d,u)}}[n];r&&(e.preventDefault(),e.stopPropagation(),r(e),x.current.eventSource="keyboard")},[S,d,ie,w]),{getThumbStyle:ye,rootStyle:Re,trackStyle:Te,innerTrackStyle:ke}=o.useMemo(()=>ua({isReversed:y,orientation:f,thumbRects:pe,thumbPercents:te}),[y,f,te,pe]),je=o.useCallback(e=>{var n;const t=e??d;if(t!==-1&&be){const r=b.getThumb(t),u=(n=L.current)==null?void 0:n.ownerDocument.getElementById(r);u&&setTimeout(()=>u.focus())}},[be,d,b]);xa(()=>{x.current.eventSource==="keyboard"&&(F==null||F(x.current.value))},[g,F]);const ea=e=>{const n=fe(e)||0,t=x.current.value.map(A=>Math.abs(A-n)),r=Math.min(...t);let u=t.indexOf(r);const R=t.filter(A=>A===r);R.length>1&&n>x.current.value[u]&&(u=u+R.length-1),M(u),S.setValueAtIndex(u,n),je(u)},aa=e=>{if(d==-1)return;const n=fe(e)||0;M(d),S.setValueAtIndex(d,n),je(d)};ca(L,{onPanSessionStart(e){C&&(Se(!0),ea(e),xe==null||xe(x.current.value))},onPanSessionEnd(){C&&(Se(!1),F==null||F(x.current.value))},onPan(e){C&&aa(e)}});const na=o.useCallback((e={},n=null)=>({...e,...he,id:b.root,ref:Ve(n,L),tabIndex:-1,"aria-disabled":de(k),"data-focused":_(ne),style:{...e.style,...Re}}),[he,k,ne,Re,b]),ra=o.useCallback((e={},n=null)=>({...e,ref:Ve(n,se),id:b.track,"data-disabled":_(k),style:{...e.style,...Te}}),[k,Te,b]),ta=o.useCallback((e={},n=null)=>({...e,ref:n,id:b.innerTrack,style:{...e.style,...ke}}),[ke,b]),la=o.useCallback((e,n=null)=>{var t;const{index:r,...u}=e,R=g[r];if(R==null)throw new TypeError(`[range-slider > thumb] Cannot find value at index \`${r}\`. The \`value\` or \`defaultValue\` length is : ${g.length}`);const v=w[r];return{...u,ref:n,role:"slider",tabIndex:C?0:void 0,id:b.getThumb(r),"data-active":_(ae&&d===r),"aria-valuetext":(t=Z==null?void 0:Z(R))!=null?t:Q==null?void 0:Q[r],"aria-valuemin":v.min,"aria-valuemax":v.max,"aria-valuenow":R,"aria-orientation":f,"aria-disabled":de(k),"aria-readonly":de(J),"aria-label":K==null?void 0:K[r],"aria-labelledby":K!=null&&K[r]||W==null?void 0:W[r],style:{...e.style,...ye(r)},onKeyDown:ue(e.onKeyDown,ve),onFocus:ue(e.onFocus,()=>{re(!0),M(r)}),onBlur:ue(e.onBlur,()=>{re(!1),M(-1)})}},[b,g,w,C,ae,d,Z,Q,f,k,J,K,W,ye,ve,re]),sa=o.useCallback((e={},n=null)=>({...e,ref:n,id:b.output,htmlFor:g.map((t,r)=>b.getThumb(r)).join(" "),"aria-live":"off"}),[b,g]),ia=o.useCallback((e,n=null)=>{const{value:t,...r}=e,u=!(t<l||t>i),R=t>=g[0]&&t<=g[g.length-1];let v=we(t,l,i);v=y?100-v:v;const A={position:"absolute",pointerEvents:"none",...ma({orientation:f,vertical:{bottom:`${v}%`},horizontal:{left:`${v}%`}})};return{...r,ref:n,id:b.getMarker(e.value),role:"presentation","aria-hidden":!0,"data-disabled":_(k),"data-invalid":_(!u),"data-highlighted":_(R),style:{...e.style,...A}}},[k,y,i,l,f,g,b]),oa=o.useCallback((e,n=null)=>{const{index:t,...r}=e;return{...r,ref:n,id:b.getInput(t),type:"hidden",value:g[t],name:Array.isArray(q)?q[t]:`${q}-${t}`}},[q,g,b]);return{state:{value:g,isFocused:ne,isDragging:ae,getThumbPercent:e=>te[e],getThumbMinValue:e=>w[e].min,getThumbMaxValue:e=>w[e].max},actions:S,getRootProps:na,getTrackProps:ra,getInnerTrackProps:ta,getThumbProps:la,getMarkerProps:ia,getInputProps:oa,getOutputProps:sa}}function ka(s,l,i,c){return s.map((p,m)=>{const I=m===0?l:s[m-1]+c,P=m===s.length-1?i:s[m+1]-c;return{min:I,max:P}})}var[ja,X]=He({name:"SliderContext",errorMessage:"useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"}),[Va,G]=He({name:"RangeSliderStylesContext",errorMessage:`useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),T=O(function(l,i){const c={orientation:"horizontal",...l},p=fa("Slider",c),m=va(c),{direction:I}=ya();m.direction=I;const{getRootProps:P,...f}=Ta(m),$=o.useMemo(()=>({...f,name:c.name}),[f,c.name]);return a.jsx(ja,{value:$,children:a.jsx(Va,{value:p,children:a.jsx(U.div,{...P({},i),className:"chakra-slider",__css:p.container,children:c.children})})})});T.displayName="RangeSlider";var h=O(function(l,i){const{getThumbProps:c,getInputProps:p,name:m}=X(),I=G(),P=c(l,i);return a.jsxs(U.div,{...P,className:me("chakra-slider__thumb",l.className),__css:I.thumb,children:[P.children,m&&a.jsx("input",{...p({index:l.index})})]})});h.displayName="RangeSliderThumb";var j=O(function(l,i){const{getTrackProps:c}=X(),p=G(),m=c(l,i);return a.jsx(U.div,{...m,className:me("chakra-slider__track",l.className),__css:p.track,"data-testid":"chakra-range-slider-track"})});j.displayName="RangeSliderTrack";var V=O(function(l,i){const{getInnerTrackProps:c}=X(),p=G(),m=c(l,i);return a.jsx(U.div,{...m,className:"chakra-slider__filled-track",__css:p.filledTrack})});V.displayName="RangeSliderFilledTrack";var Pa=O(function(l,i){const{getMarkerProps:c}=X(),p=G(),m=c(l,i);return a.jsx(U.div,{...m,className:me("chakra-slider__marker",l.className),__css:p.mark})});Pa.displayName="RangeSliderMark";const wa={title:"Skjemaelementer/Range Slider",component:T,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The static string to use used for `aria-label` if no visible label is used.",table:{type:{summary:"string[]"}},control:"array"},"aria-labelledby":{description:"The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider",table:{type:{summary:"string[]"}},control:"array"},"aria-valuetext":{description:"The static string to use used for `aria-valuetext`",table:{type:{summary:"string[]"}},control:"array"},defaultValue:{description:"The initial value of the slider in uncontrolled mode",table:{type:{summary:"number[]"}},control:"array"},direction:{description:"The writing mode",table:{type:{summary:'"ltr" | "rtl"'},defaultValue:{summary:"ltr"}},options:["ltr","rtl"],control:"radio"},focusThumbOnChange:{description:"If false, the slider handle will not capture focus when value changes.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},getAriaValueText:{description:"Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",table:{type:{summary:"(value: number) => string"}},control:"text"},id:{description:"The base id to use for the slider and its components",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReadOnly:{description:"If true, the slider will be in `read-only` state",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReversed:{description:"If true, the value will be incremented or decremented in reverse.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:100}},control:"number"},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},minStepsBetweenThumbs:{description:"The minimum distance between slider thumbs. Useful for preventing the thumbs from being too close together.",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},name:{description:"The name attribute of the hidden input field. This is particularly useful in forms",table:{type:{summary:"string | string[]"}},control:"array"},step:{description:"The step in which increments/decrements have to be made",table:{type:{summary:"number"},defaultValue:{summary:1}},control:"number"},value:{description:"The value of the slider in controlled mode",table:{type:{summary:"number[]"}},control:"array"}}},D={args:{defaultValue:[10,30]},render:s=>a.jsxs(T,{"aria-label":["min","max"],...s,children:[a.jsx(j,{children:a.jsx(V,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]})},N={args:{defaultValue:[10,40]},render:s=>a.jsxs(Ra,{gap:5,children:[a.jsxs(T,{...s,"aria-label":["min","max"],colorScheme:"green",children:[a.jsx(j,{children:a.jsx(V,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]}),a.jsxs(T,{...s,"aria-label":["min","max"],colorScheme:"blue",children:[a.jsx(j,{children:a.jsx(V,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]}),a.jsxs(T,{...s,"aria-label":["min","max"],colorScheme:"red",children:[a.jsx(j,{children:a.jsx(V,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]}),a.jsxs(T,{...s,"aria-label":["min","max"],colorScheme:"gray",children:[a.jsx(j,{children:a.jsx(V,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]})]})},z={args:{defaultValue:[20,60],minH:"32",orientation:"vertical"},render:s=>a.jsxs(T,{"aria-label":["min","max"],...s,children:[a.jsx(j,{children:a.jsx(V,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]})},E={args:{defaultValue:[30,80]},render:s=>a.jsxs(T,{...s,"aria-label":["min","max"],children:[a.jsx(j,{bg:"red.100",children:a.jsx(V,{bg:"tomato"})}),a.jsx(h,{boxSize:6,index:0,children:a.jsx(Ie,{icon:"equalizer"})}),a.jsx(h,{boxSize:6,index:1,children:a.jsx(Ie,{icon:"equalizer"})})]})},B={args:{defaultValue:[120,240],min:0,max:300,step:30},render:s=>a.jsxs(T,{...s,"aria-label":["min","max"],children:[a.jsx(j,{children:a.jsx(V,{})}),a.jsx(h,{index:0}),a.jsx(h,{index:1})]})};var Ce,Ae,_e;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(_e=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var Ke,Fe,Me;N.parameters={...N.parameters,docs:{...(Ke=N.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Me=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var De,Ne,ze;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ze=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};var Ee,Be,Oe;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Oe=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var Ue,$e,qe;B.parameters={...B.parameters,docs:{...(Ue=B.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(qe=($e=B.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};const Ia=["RangeSlider","RangeSliderColors","RangeSliderOrientation","RangeSliderCustomizing","RangeSliderDiscrete"],Ya=Object.freeze(Object.defineProperty({__proto__:null,RangeSlider:D,RangeSliderColors:N,RangeSliderCustomizing:E,RangeSliderDiscrete:B,RangeSliderOrientation:z,__namedExportsOrder:Ia,default:wa},Symbol.toStringTag,{value:"Module"}));export{Ya as R,N as a,z as b,E as c,B as d,D as e};
