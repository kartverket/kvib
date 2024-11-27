import{j as s}from"./jsx-runtime-sfY7k0Xq.js";import{K as r}from"./kbd-dPfSTdWe.js";import{S as c}from"./stack-Bh3oWNRR.js";const p={title:"Komponenter/Kbd",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={args:{fontSize:"sm"},render:e=>s.jsxs("span",{children:[s.jsx(r,{...e,children:"shift"})," + ",s.jsx(r,{...e,children:"H"})]})},i={render:e=>s.jsxs(c,{children:[s.jsxs("span",{children:[s.jsx(r,{...e,children:"shift"})," + ",s.jsx(r,{...e,children:"H"})]}),s.jsxs("span",{children:[s.jsx(r,{...e,children:"shift"})," then ",s.jsx(r,{...e,children:"H"})]}),s.jsxs("span",{children:[s.jsx(r,{...e,children:"alt"})," or ",s.jsx(r,{...e,children:"option"})]})]})};var a,t,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    fontSize: "sm"
  },
  render: args => <span>
      <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>
    </span>
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var d,b,K;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <KvibStack>
      <span>
        <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>
      </span>
      <span>
        <KvibKbd {...args}>shift</KvibKbd> then <KvibKbd {...args}>H</KvibKbd>
      </span>
      <span>
        <KvibKbd {...args}>alt</KvibKbd> or <KvibKbd {...args}>option</KvibKbd>
      </span>
    </KvibStack>
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const l=["Preview","KbdModifier"],j=Object.freeze(Object.defineProperty({__proto__:null,KbdModifier:i,Preview:n,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{j as K,i as a};
