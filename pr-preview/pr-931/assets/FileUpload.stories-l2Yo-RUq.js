import{j as e}from"./index-D6_wGsWO.js";import{bb as s,a as i,bc as n,t as d,bd as p}from"./index-DmZmBakc.js";const u={title:"Komponenter/File Upload",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{type:{description:"Input type",table:{type:{summary:"file"},defaultValue:{summary:"file"}},options:["file"],control:{type:"radio"}},size:{description:"Input size",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},colorPalette:{description:"Color of the radio",table:{type:{summary:"green | blue | gray | red"}},defaultValue:{summary:"green"},options:["green","blue","gray","red","orange","purple"],control:{type:"select"}}}},m=t=>e.jsx(i,{children:e.jsxs(s,{...t,children:[e.jsx(n,{children:e.jsx(d,{colorPalette:t.colorPalette,leftIcon:"upload_2",children:"Last opp fil"})}),e.jsx(p,{})]})}),o={render:t=>e.jsx(m,{...t})};var l,r,a;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: FileUploadProps) => <FileUploadExample {...args} />
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const c=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:c,default:u},Symbol.toStringTag,{value:"Module"}));export{f as F,o as P};
