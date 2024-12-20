import{j as e}from"./index-D6_wGsWO.js";import{b1 as o,d as b}from"./index-f5MS2Vzd.js";const v={title:"Komponenter/Logo",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{label:{table:{type:{summary:"string"}},control:"text"},variant:{table:{type:{summary:"vertical | horizontal"},defaultValue:{summary:"vertical"}},options:["vertical","horizontal"],control:{type:"radio"}},size:{table:{type:{summary:"number"}},control:"number"}}},a={args:{label:"Logo"},render:r=>e.jsx(o,{...r})},s={args:{label:"Logo",variant:"horizontal"},render:r=>e.jsx(o,{...r})},t={args:{label:"Logo",variant:"horizontal"},render:r=>e.jsxs(b,{children:[e.jsx(o,{...r,size:100}),e.jsx(o,{...r,size:200}),e.jsx(o,{...r,size:300})]})};var n,i,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const L=["Preview","LogoHorizontal","LogoSizes"],S=Object.freeze(Object.defineProperty({__proto__:null,LogoHorizontal:s,LogoSizes:t,Preview:a,__namedExportsOrder:L,default:v},Symbol.toStringTag,{value:"Module"}));export{S as L,a as P};
