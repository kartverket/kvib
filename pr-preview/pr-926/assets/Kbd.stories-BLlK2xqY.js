import{j as s}from"./index-D6_wGsWO.js";import{aa as r,d as c}from"./index-B9GIEwwi.js";const p={title:"Komponenter/Kbd",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={args:{fontSize:"sm"},render:e=>s.jsxs("span",{children:[s.jsx(r,{...e,children:"shift"})," + ",s.jsx(r,{...e,children:"H"})]})},i={render:e=>s.jsxs(c,{children:[s.jsxs("span",{children:[s.jsx(r,{...e,children:"shift"})," + ",s.jsx(r,{...e,children:"H"})]}),s.jsxs("span",{children:[s.jsx(r,{...e,children:"shift"})," then ",s.jsx(r,{...e,children:"H"})]}),s.jsxs("span",{children:[s.jsx(r,{...e,children:"alt"})," or ",s.jsx(r,{...e,children:"option"})]})]})};var a,t,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    fontSize: "sm"
  },
  render: args => <span>
      <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>
    </span>
}`,...(d=(t=n.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var o,b,K;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const l=["Preview","KbdModifier"],m=Object.freeze(Object.defineProperty({__proto__:null,KbdModifier:i,Preview:n,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{m as K,i as a};
