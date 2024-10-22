import{j as s}from"./extends-CwFRzn3r.js";import{f as h}from"./forward-ref-BWI-Phbn.js";import{u as v,o as x}from"./use-style-config-YUvqttAg.js";import{c as j}from"./factory-C6UFhaBW.js";import{c as u}from"./cx-BDMMs1jM.js";import{S as g}from"./stack-REYSnkee.js";const e=h(function(i,m){const p=v("Kbd",i),{className:l,...f}=x(i);return s.jsx(j.kbd,{ref:m,className:u("chakra-kbd",l),...f,__css:{fontFamily:"mono",...p}})});e.displayName="Kbd";const S={title:"Datavisning/Kbd",component:e,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={args:{fontSize:"sm"},render:r=>s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," + ",s.jsx(e,{...r,children:"H"})]})},a={render:r=>s.jsxs(g,{children:[s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," + ",s.jsx(e,{...r,children:"H"})]}),s.jsxs("span",{children:[s.jsx(e,{...r,children:"shift"})," then ",s.jsx(e,{...r,children:"H"})]}),s.jsxs("span",{children:[s.jsx(e,{...r,children:"alt"})," or ",s.jsx(e,{...r,children:"option"})]})]})};var o,t,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    fontSize: "sm"
  },
  render: args => <span>
      <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>
    </span>
}`,...(d=(t=n.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var c,b,K;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(K=(b=a.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const _=["Preview","KbdModifier"],M=Object.freeze(Object.defineProperty({__proto__:null,KbdModifier:a,Preview:n,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{M as K,a};
