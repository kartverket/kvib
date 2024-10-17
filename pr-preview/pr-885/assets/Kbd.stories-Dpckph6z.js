import{j as s}from"./extends-CwFRzn3r.js";import{K as e}from"./kbd-CJ4lnh-9.js";import{S as c}from"./stack-REYSnkee.js";const p={title:"Datavisning/Kbd",component:e,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={render:r=>s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," + ",s.jsx(e,{...r,children:"H"})]})},i={render:r=>s.jsxs(c,{children:[s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," + ",s.jsx(e,{...r,children:"H"})]}),s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," then ",s.jsx(e,{...r,children:"H"})]}),s.jsxs("span",{children:[s.jsx(e,{...r,children:"alt"})," or ",s.jsx(e,{...r,children:"option"})]})]})};var a,t,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(K=(b=i.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const l=["Preview","KbdModifier"],j=Object.freeze(Object.defineProperty({__proto__:null,KbdModifier:i,Preview:n,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{j as K,i as a};
