import{j as e}from"./extends-CwFRzn3r.js";import{R as u}from"./index-BwDkhjyp.js";import{S as l,a as o,b as n,c as d,d as i}from"./chunk-6KSEUUNN-oywwUQHZ.js";import{T as V}from"./chunk-TK6VMDNP-D-1SiMBZ.js";const k={title:"Skjemaelementer/Slider",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The static string to use used for `aria-label` if no visible label is used.",table:{type:{summary:"string"}},control:{type:"text"}},"aria-labelledby":{description:"The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider.",table:{type:{summary:"string"}},control:{type:"text"}},"aria-valuetext":{description:"The static string to use used for `aria-valuetext`",table:{type:{summary:"string"}},control:{type:"text"}},getAriaValueText:{description:"Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",table:{type:{summary:"(value: number) => string"}},control:{type:"text"}},id:{description:"The base id to use for the slider and its components",table:{type:{summary:"string"}},control:{type:"text"}},colorScheme:{description:"Color of slider",table:{type:{summary:"green | blue| gray | red"},defaultValue:{summary:"blue"}},options:["green","blue","gray","red"],control:{type:"radio"}},size:{description:"Size of slider",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:{type:"number"}},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:{type:"number"}},isDisabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},defaultValue:{description:"The initial value of the slider in uncontrolled mode",table:{type:{summary:"number"}},control:{type:"number"}}}},t={args:{"aria-label":"sliderDefault",id:"slider"},render:r=>e.jsxs(l,{...r,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(d,{})]})},a={args:{"aria-label":"sliderDiscrete",defaultValue:30,id:"slider",step:10},render:r=>e.jsxs(l,{...r,children:[e.jsx(o,{children:e.jsx(n,{})}),e.jsx(d,{})]})},D=()=>{const[r,T]=u.useState(5),[j,m]=u.useState(!1);return e.jsxs(l,{id:"slider","aria-label":"sliderWithTooltip",defaultValue:5,onChange:v=>T(v),onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[e.jsx(i,{value:25,mt:"1",ml:"-2.5",fontSize:"sm",children:"25%"}),e.jsx(i,{value:50,mt:"1",ml:"-2.5",fontSize:"sm",children:"50%"}),e.jsx(i,{value:75,mt:"1",ml:"-2.5",fontSize:"sm",children:"75%"}),e.jsx(o,{children:e.jsx(n,{})}),e.jsx(V,{hasArrow:!0,placement:"top",isOpen:j,label:`${r}%`,children:e.jsx(d,{})})]})},s={render:()=>e.jsx(D,{})};var c,p,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    "aria-label": "sliderDefault",
    id: "slider"
  },
  render: args => <KvibSlider {...args}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </KvibSlider>
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,y,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    "aria-label": "sliderDiscrete",
    defaultValue: 30,
    id: "slider",
    step: 10
  },
  render: args => <KvibSlider {...args}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </KvibSlider>
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,g,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SliderWithTooltip />
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const w=["Slider","SliderDiscrete","SliderTooltip"],K=Object.freeze(Object.defineProperty({__proto__:null,Slider:t,SliderDiscrete:a,SliderTooltip:s,__namedExportsOrder:w,default:k},Symbol.toStringTag,{value:"Module"}));export{K as S,a,s as b,t as c};
