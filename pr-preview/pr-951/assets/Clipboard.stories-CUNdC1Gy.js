import{j as o}from"./index-D6_wGsWO.js";import{R as n,U as i}from"./index-DPEpWUr_.js";const p={title:"Komponenter/Clipboard",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{timeout:{description:"The timeout for the copy operation",table:{type:{summary:"number"},defaultValue:{summary:"3000"}},control:"number"},onStatusChange:{description:"The function to be called when the value is copied to the clipboard",table:{type:{summary:"(details: CopyStatusDetails) => void"}}},value:{description:"The value to be copied to the clipboard",table:{type:{summary:"string"}}}}},l=t=>o.jsx(n,{value:"Denne teksten havner i utklippstavla",...t,children:o.jsx(i,{})}),e={render:t=>o.jsx(l,{...t})};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <ClipboardExample {...args} />
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const d=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{u as C,e as P};
