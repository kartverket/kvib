import{j as e}from"./index-D6_wGsWO.js";import{aP as s,a as n,aQ as i,t as d,aR as m}from"./index-C7ykjOJd.js";const p={title:"Komponenter/File Upload",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{disable:!0}},argTypes:{invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},colorPalette:{description:"Color of the radio",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red","orange","purple"],control:{type:"select"}},allowDrop:{description:"Whether to allow drag and drop in the dropzone element",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},maxFiles:{description:"The maximum number of files",table:{type:{summary:"number"},defaultValue:{summary:"1"}},control:"number"},maxFileSize:{description:"The maximum file size in bytes",table:{type:{summary:"number"},defaultValue:{summary:"Infinity"}},control:"number"}}},u=r=>e.jsx(n,{children:e.jsxs(s,{...r,children:[e.jsx(i,{children:e.jsx(d,{colorPalette:r.colorPalette,leftIcon:"upload_2",children:"Last opp fil"})}),e.jsx(m,{})]})}),o={render:r=>e.jsx(u,{...r})};var a,t,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <FileUploadExample {...args} />
}`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const c=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{f as F,o as P};
