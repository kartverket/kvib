import{j as s}from"./jsx-runtime-CQsLhzk5.js";import"./slider-Bgj0f888.js";import{K as e}from"./kbd-C-LDQpGn.js";import{n as c}from"./h-stack-Bcgbt9nc.js";const p={title:"Komponenter/Kbd",component:e,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={args:{fontSize:"sm"},render:r=>s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," + ",s.jsx(e,{...r,children:"H"})]})},i={render:r=>s.jsxs(c,{children:[s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," + ",s.jsx(e,{...r,children:"H"})]}),s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," then ",s.jsx(e,{...r,children:"H"})]}),s.jsxs("span",{children:[s.jsx(e,{...r,children:"alt"})," or ",s.jsx(e,{...r,children:"option"})]})]})};var a,t,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const l=["Preview","KbdModifier"],x=Object.freeze(Object.defineProperty({__proto__:null,KbdModifier:i,Preview:n,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{x as K,i as a};
