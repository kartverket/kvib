import{j as t}from"./jsx-runtime-DgHZ7iq2.js";import{bA as a,B as m}from"./index-CRrqj8Jn.js";const i={title:"Komponenter/Layout/Theme",component:a,argTypes:{appearance:{table:{type:{summary:"'dark' | 'light'"},defaultValue:{summary:"'light'"}},control:{type:"radio"},options:["dark","light"]}}},u=`
<Theme p="1rem" {...args}>
  <Button variant="outline">Button</Button>
</Theme>
`,e={render:s=>t.jsx(a,{p:"1rem",...s,children:t.jsx(m,{variant:"outline",children:"Button"})}),parameters:{docs:{source:{code:u}}}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Theme p="1rem" {...args}>
      <Button variant="outline">Button</Button>
    </Theme>,
  parameters: {
    docs: {
      source: {
        code: themeString
      }
    }
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const c=["Preview"],l=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,l as T};
