import{j as r}from"./extends-CwFRzn3r.js";import{L as e}from"./Logo-CwyJCF6Z.js";import{S as b}from"./chunk-ZHMYA64R-V_96TD_T.js";const L={title:"Sideelementer/Logo",component:e,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{label:{table:{type:{summary:"string"}},control:"text"},variant:{table:{type:{summary:"vertical | horizontal"},defaultValue:{summary:"vertical"}},options:["vertical","horizontal"],control:{type:"radio"}},size:{table:{type:{summary:"number"}},control:"number"}}},a={args:{label:"Logo"},render:o=>r.jsx(e,{...o})},s={args:{label:"Logo",variant:"horizontal"},render:o=>r.jsx(e,{...o})},t={args:{label:"Logo",variant:"horizontal"},render:o=>r.jsxs(b,{children:[r.jsx(e,{...o,size:100}),r.jsx(e,{...o,size:200}),r.jsx(e,{...o,size:300})]})};var n,i,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Logo"
  },
  render: args => <KvibLogo {...args} />
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,g,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Logo",
    variant: "horizontal"
  },
  render: args => <KvibLogo {...args} />
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Logo",
    variant: "horizontal"
  },
  render: args => <KvibStack>
      <KvibLogo {...args} size={100} />
      <KvibLogo {...args} size={200} />
      <KvibLogo {...args} size={300} />
    </KvibStack>
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const z=["Logo","LogoHorizontal","LogoSizes"],x=Object.freeze(Object.defineProperty({__proto__:null,Logo:a,LogoHorizontal:s,LogoSizes:t,__namedExportsOrder:z,default:L},Symbol.toStringTag,{value:"Module"}));export{x as L,s as a,t as b,a as c};
