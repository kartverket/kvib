import{j as r}from"./jsx-runtime-DgHZ7iq2.js";import{s as o,t as s}from"./index-BmU2EDjm.js";const p={title:"Komponenter/Clipboard",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{timeout:{description:"The timeout for the copy operation",table:{type:{summary:"number"},defaultValue:{summary:"3000"}},control:"number"},onStatusChange:{description:"The function to be called when the value is copied to the clipboard",table:{type:{summary:"(details: CopyStatusDetails) => void"}}},value:{description:"The value to be copied to the clipboard",table:{type:{summary:"string"}}}}};o.displayName="Clipboard";s.displayName="ClipboardIconButton";const e={render:t=>r.jsx(o,{value:"Text copied to the clipboard",...t,children:r.jsx(s,{colorPalette:t.colorPalette})})};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Clipboard value="Text copied to the clipboard" {...args}>
      <ClipboardIconButton colorPalette={args.colorPalette} />
    </Clipboard>
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const n=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:n,default:p},Symbol.toStringTag,{value:"Module"}));export{u as C,e as P};
