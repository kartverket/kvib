import{j as s}from"./extends-CwFRzn3r.js";import{K as e}from"./kbd-qbmr-3x8.js";import{S as c}from"./stack-Crl0JO1i.js";const p={title:"Datavisning/Kbd",component:e,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={args:{},render:r=>s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," + ",s.jsx(e,{...r,children:"H"})]})},a={args:{},render:r=>s.jsxs(c,{children:[s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," + ",s.jsx(e,{...r,children:"H"})]}),s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," then ",s.jsx(e,{...r,children:"H"})]}),s.jsxs("span",{children:[s.jsx(e,{...r,children:"alt"})," or ",s.jsx(e,{...r,children:"option"})]})]})};var i,d,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: args => <span>
      <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>
    </span>
}`,...(t=(d=n.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var o,b,K;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
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
}`,...(K=(b=a.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const l=["Kbd","KbdModifier"],j=Object.freeze(Object.defineProperty({__proto__:null,Kbd:n,KbdModifier:a,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{j as K,a};
