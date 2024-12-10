import{j as n}from"./index-D6_wGsWO.js";import{D as r}from"./index-aLGUikq2.js";const l={title:"Komponenter/Input",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | subtle | flushed"},defaultValue:{summary:"outline"}},options:["outline","subtle","flushed"],control:{type:"radio"}},required:{description:"Toggles if input should be required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},readOnly:{description:"Toggles if input should be read-only",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},unstyled:{description:"Toggles if input should be unstyled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},e={parameters:{docs:{canvas:{sourceState:"shown"}}},render:s=>n.jsx(r,{placeholder:"Skriv her...",...s})};var o,a,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibInput placeholder="Skriv her..." {...args} />
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const u=["Preview"],m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{m as I,e as P};
