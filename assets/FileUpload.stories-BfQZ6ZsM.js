import{j as e}from"./index-D6_wGsWO.js";import{aL as s,aM as i,g as n,aN as p}from"./index-CdN4NO-W.js";const d={title:"Komponenter/File Upload",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{type:{description:"Input type",table:{type:{summary:"file"},defaultValue:{summary:"file"}},options:["file"],control:{type:"radio"}},size:{description:"Input size",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},colorPalette:{description:"Color of the radio",table:{type:{summary:"green | blue | gray | red"}},defaultValue:{summary:"green"},options:["green","blue","gray","red","orange","purple"],control:{type:"select"}}}},u=t=>e.jsxs(s,{...t,children:[e.jsx(i,{children:e.jsx(n,{colorPalette:t.colorPalette,leftIcon:"upload_2",children:"Last opp fil"})}),e.jsx(p,{})]}),o={render:t=>e.jsx(u,{...t})};var l,a,r;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: FileUploadProps) => <FileUploadExample {...args} />
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const m=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{f as F,o as P};
