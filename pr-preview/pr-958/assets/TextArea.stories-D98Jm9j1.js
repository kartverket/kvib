import{j as s}from"./index-Bqoz-m_F.js";import{bU as o}from"./index-DuafSpvy.js";const i={title:"Komponenter/Text Area",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{disabled:{description:"If true, the form control will be disabled. This has 2 side effects: - The FormLabel will have `data-disabled` attribute - The form element (e.g, Input) will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},readOnly:{description:"If true, the form control will be readonly",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},required:{description:"If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},size:{description:"The size of the Textarea",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:"radio"},variant:{description:"The variant of the Textarea",table:{type:{summary:"'outline' | 'flushed' | 'filled' | 'unstyled'"},defaultValue:{summary:"outline"}},options:["outline","flushed","filled","unstyled"],control:"radio"}}},e={args:{placeholder:"Dette er et eksempel på placeholder"},render:l=>s.jsx(o,{...l})};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    placeholder: "Dette er et eksempel på placeholder"
  },
  render: args => <KvibTextarea {...args} />
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const n=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:n,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,u as T};
