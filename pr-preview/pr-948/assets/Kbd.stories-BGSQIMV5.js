import{j as e}from"./index-D6_wGsWO.js";import{aY as r,d as c}from"./index-COVntcoL.js";const p={title:"Komponenter/Kbd",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}}},n={args:{fontSize:"sm"},render:s=>e.jsxs("span",{children:[e.jsx(r,{...s,children:"shift"})," + ",e.jsx(r,{...s,children:"H"})]})},i={render:s=>e.jsxs(c,{children:[e.jsxs("span",{children:[e.jsx(r,{...s,children:"shift"})," + ",e.jsx(r,{...s,children:"H"})]}),e.jsxs("span",{children:[e.jsx(r,{...s,children:"shift"})," then ",e.jsx(r,{...s,children:"H"})]}),e.jsxs("span",{children:[e.jsx(r,{...s,children:"alt"})," or ",e.jsx(r,{...s,children:"option"})]})]})};var a,d,t;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    fontSize: "sm"
  },
  render: args => <span>
      <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>
    </span>
}`,...(t=(d=n.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var o,b,K;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const l=["Preview","KbdModifier"],m=Object.freeze(Object.defineProperty({__proto__:null,KbdModifier:i,Preview:n,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{m as K,n as P};
