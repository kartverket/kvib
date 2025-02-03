import{j as s}from"./jsx-runtime-DQFEoQHt.js";import{aj as t}from"./index-BkLpvq3U.js";const n={title:"Komponenter/Icon Button",component:t,parameters:{docs:{story:{inline:!0}}},args:{icon:"favorite",variant:"solid",size:"md",colorPalette:"green",iconFill:!1,loading:!1,disabled:!1},argTypes:{size:{description:"Size of Icon button",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"select"}},variant:{description:"The variant of the IconButton.",table:{type:{summary:"solid | subtle | ghost | plain"},defaultValue:{summary:"primary"}},options:["solid","subtle","ghost","plain"],control:{type:"select"}},disabled:{description:"If true, the button will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},colorPalette:{control:{type:"select"},options:["green","blue","red","gray"],table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"green"}}},iconFill:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},loading:{description:"If true, the button will show a spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}};t.displayName="IconButton";const e={render:l=>s.jsx(t,{...l})};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <KvibIconButton {...args} />
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const i=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:n},Symbol.toStringTag,{value:"Module"}));export{c as I,e as P};
