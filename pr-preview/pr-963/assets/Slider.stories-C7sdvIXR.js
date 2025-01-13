import{j as s}from"./jsx-runtime-DgHZ7iq2.js";import{b3 as r}from"./index-BmU2EDjm.js";const m={title:"Komponenter/Slider",component:r,parameters:{docs:{story:{inline:!0}},layout:"padded"},argTypes:{colorPalette:{description:"Color palette of the component",table:{type:{summary:"green | blue| gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},size:{description:"Size of slider",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:{type:"number"}},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:{type:"number"}},disabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{defaultValue:[40]}};r.displayName="Slider";const e={render:l=>s.jsx(r,{w:"100%",...l})};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: SliderProps) => <KvibSlider w="100%" {...args} />
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const n=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:n,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,u as S};
