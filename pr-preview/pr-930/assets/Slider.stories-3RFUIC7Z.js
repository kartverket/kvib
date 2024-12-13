import{j as o}from"./index-D6_wGsWO.js";import{br as s}from"./index-CqxO52Wc.js";const i={title:"Komponenter/Slider",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The static string to use used for `aria-label` if no visible label is used.",table:{type:{summary:"string"}},control:{type:"text"}},"aria-labelledby":{description:"The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider.",table:{type:{summary:"string"}},control:{type:"text"}},"aria-valuetext":{description:"The static string to use used for `aria-valuetext`",table:{type:{summary:"string"}},control:{type:"text"}},getAriaValueText:{description:"Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",table:{type:{summary:"(value: number) => string"}},control:{type:"text"}},id:{description:"The base id to use for the slider and its components",table:{type:{summary:"string"}},control:{type:"text"}},colorScheme:{description:"Color of slider",table:{type:{summary:"green | blue| gray | red"},defaultValue:{summary:"blue"}},options:["green","blue","gray","red"],control:{type:"radio"}},size:{description:"Size of slider",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:{type:"number"}},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:{type:"number"}},isDisabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{defaultValue:[40]}},e={args:{"aria-label":"sliderDefault",id:"slider"},render:l=>o.jsx(s,{...l})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    "aria-label": "sliderDefault",
    id: "slider"
  },
  render: (args: SliderProps) => <KvibSlider {...args} />
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const n=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:n,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,u as S};
