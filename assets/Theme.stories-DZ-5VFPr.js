import{ci as t,j as r,v as s}from"./iframe-B_C8pV-B.js";const i={title:"Komponenter/Layout/Theme",component:t,argTypes:{appearance:{table:{type:{summary:"'dark' | 'light'"},defaultValue:{summary:"'light'"}},control:{type:"radio"},options:["dark","light"]}}};s.displayName="Button";t.displayName="Theme";const e={render:m=>r.jsx(t,{p:"1rem",...m,children:r.jsx(s,{variant:"outline",children:"Button"})})},p=["Preview"];var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Theme p="1rem" {...args}>
      <Button variant="outline">Button</Button>
    </Theme>
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:p,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,u as T};
