import{j as n}from"./jsx-runtime-CQsLhzk5.js";import"./slider-Bgj0f888.js";import{I as r}from"./Input-B0y1fppS.js";const l={title:"Komponenter/Input",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | subtle | flushed"},defaultValue:{summary:"outline"}},options:["outline","subtle","flushed"],control:{type:"radio"}},required:{description:"Toggles if input should be required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},readOnly:{description:"Toggles if input should be read-only",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},unstyled:{description:"Toggles if input should be unstyled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},e={parameters:{docs:{canvas:{sourceState:"shown"}}},render:s=>n.jsx(r,{placeholder:"Skriv her...",...s})};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibInput placeholder="Skriv her..." {...args} />
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const u=["Preview"],p=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{p as I,e as P};
