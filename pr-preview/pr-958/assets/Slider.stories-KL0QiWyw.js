import{j as s}from"./jsx-runtime-DgHZ7iq2.js";import{b9 as o}from"./index-CRrqj8Jn.js";const m={title:"Komponenter/Slider",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"Color palette of the component",table:{type:{summary:"green | blue| gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},size:{description:"Size of slider",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:{type:"number"}},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:{type:"number"}},disabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{defaultValue:[40]}},e={render:l=>s.jsx(o,{...l})};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: SliderProps) => <KvibSlider {...args} />
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const n=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:n,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,u as S};
