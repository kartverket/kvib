import{j as l}from"./index-D6_wGsWO.js";import{R as a}from"./index-C4Tll0EB.js";const n={title:"Komponenter/Checkbox Card",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},args:{colorPalette:"green",size:"md",disabled:!1,invalid:!1},argTypes:{colorPalette:{description:"The color of the component",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},control:"radio",options:["green","blue"]},size:{description:"The size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},disabled:{description:"If true, the component will be disabled",table:{type:{summary:"true | false"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the checkbox will be invalid",table:{type:{summary:"true | false"}},defaultValue:{summary:!1},control:"boolean"}}},e={render:s=>l.jsx(a,{defaultChecked:!0,label:"Avmerkingsboks i kort",description:"Med en beskrivelse",...s})};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <CheckboxCard defaultChecked label="Avmerkingsboks i kort" description="Med en beskrivelse" {...args}></CheckboxCard>
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const i=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:n},Symbol.toStringTag,{value:"Module"}));export{c as C,e as P};
