import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{bg as t}from"./index-BYbB6rBR.js";const i={title:"Komponenter/Switch",component:t,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"Color palette of the component",table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"green"}},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the Switch",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:"radio"},variant:{description:"The variant of the Switch",table:{type:{summary:"solid | raised"},defaultValue:{summary:"solid"}},options:["solid","raised"],control:"radio"},checked:{description:"If true, the checkbox will be checked. You'll need to pass onChange to update its value (since it is now controlled)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"If true, the checkbox will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the checkbox is marked as invalid. Changes style of unchecked state.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},required:{description:"If true, the checkbox input is marked as required, and required attribute will be added",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},value:{description:"The value to be used in the checkbox input. This is the value that will be returned on form submission.",table:{type:{summary:"string | number"}},control:"text"}}};t.displayName="Switch";const e={render:s=>l.jsx(t,{...s})};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: SwitchProps) => <KvibSwitch {...args} />
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const n=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:n,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,c as S};
