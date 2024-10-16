import{j as e}from"./extends-CwFRzn3r.js";import{R as n,a as i,b as l,c as a}from"./range-slider-B4Isb_gu.js";import{S as K}from"./stack-Crl0JO1i.js";import{I as c}from"./Icon-vZnM9tBv.js";const w={title:"Skjemaelementer/Range Slider",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The static string to use used for `aria-label` if no visible label is used.",table:{type:{summary:"string[]"}},control:"array"},"aria-labelledby":{description:"The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider",table:{type:{summary:"string[]"}},control:"array"},"aria-valuetext":{description:"The static string to use used for `aria-valuetext`",table:{type:{summary:"string[]"}},control:"array"},defaultValue:{description:"The initial value of the slider in uncontrolled mode",table:{type:{summary:"number[]"}},control:"array"},direction:{description:"The writing mode",table:{type:{summary:'"ltr" | "rtl"'},defaultValue:{summary:"ltr"}},options:["ltr","rtl"],control:"radio"},focusThumbOnChange:{description:"If false, the slider handle will not capture focus when value changes.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},getAriaValueText:{description:"Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",table:{type:{summary:"(value: number) => string"}},control:"text"},id:{description:"The base id to use for the slider and its components",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReadOnly:{description:"If true, the slider will be in `read-only` state",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReversed:{description:"If true, the value will be incremented or decremented in reverse.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:100}},control:"number"},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},minStepsBetweenThumbs:{description:"The minimum distance between slider thumbs. Useful for preventing the thumbs from being too close together.",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},name:{description:"The name attribute of the hidden input field. This is particularly useful in forms",table:{type:{summary:"string | string[]"}},control:"array"},step:{description:"The step in which increments/decrements have to be made",table:{type:{summary:"number"},defaultValue:{summary:1}},control:"number"},value:{description:"The value of the slider in controlled mode",table:{type:{summary:"number[]"}},control:"array"}}},s={args:{defaultValue:[10,30]},render:r=>e.jsxs(n,{"aria-label":["min","max"],...r,children:[e.jsx(i,{children:e.jsx(l,{})}),e.jsx(a,{index:0}),e.jsx(a,{index:1})]})},t={args:{defaultValue:[10,40]},render:r=>e.jsxs(K,{gap:5,children:[e.jsxs(n,{...r,"aria-label":["min","max"],colorScheme:"green",children:[e.jsx(i,{children:e.jsx(l,{})}),e.jsx(a,{index:0}),e.jsx(a,{index:1})]}),e.jsxs(n,{...r,"aria-label":["min","max"],colorScheme:"blue",children:[e.jsx(i,{children:e.jsx(l,{})}),e.jsx(a,{index:0}),e.jsx(a,{index:1})]}),e.jsxs(n,{...r,"aria-label":["min","max"],colorScheme:"red",children:[e.jsx(i,{children:e.jsx(l,{})}),e.jsx(a,{index:0}),e.jsx(a,{index:1})]}),e.jsxs(n,{...r,"aria-label":["min","max"],colorScheme:"gray",children:[e.jsx(i,{children:e.jsx(l,{})}),e.jsx(a,{index:0}),e.jsx(a,{index:1})]})]})},d={args:{defaultValue:[20,60],minH:"32",orientation:"vertical"},render:r=>e.jsxs(n,{"aria-label":["min","max"],...r,children:[e.jsx(i,{children:e.jsx(l,{})}),e.jsx(a,{index:0}),e.jsx(a,{index:1})]})},o={args:{defaultValue:[30,80]},render:r=>e.jsxs(n,{...r,"aria-label":["min","max"],children:[e.jsx(i,{bg:"red.100",children:e.jsx(l,{bg:"tomato"})}),e.jsx(a,{boxSize:6,index:0,children:e.jsx(c,{icon:"equalizer"})}),e.jsx(a,{boxSize:6,index:1,children:e.jsx(c,{icon:"equalizer"})})]})},m={args:{defaultValue:[120,240],min:0,max:300,step:30},render:r=>e.jsxs(n,{...r,"aria-label":["min","max"],children:[e.jsx(i,{children:e.jsx(l,{})}),e.jsx(a,{index:0}),e.jsx(a,{index:1})]})};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,S,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var p,R,T;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var y,f,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,k,V;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(V=(k=m.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const z=["RangeSlider","RangeSliderColors","RangeSliderOrientation","RangeSliderCustomizing","RangeSliderDiscrete"],_=Object.freeze(Object.defineProperty({__proto__:null,RangeSlider:s,RangeSliderColors:t,RangeSliderCustomizing:o,RangeSliderDiscrete:m,RangeSliderOrientation:d,__namedExportsOrder:z,default:w},Symbol.toStringTag,{value:"Module"}));export{_ as R,t as a,d as b,o as c,m as d,s as e};
