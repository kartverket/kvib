import{j as s}from"./extends-CwFRzn3r.js";import{S as b,C as x}from"./chunk-PULVB27S-CgiffgmI.js";import{T as u}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{C}from"./chunk-FAWTVNS3-tKAZUTn2.js";const S={title:"Layout/Center",component:C,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},e={args:{backgroundColor:"green.50",padding:"6"},render:r=>s.jsx(C,{...r,children:"En boks med sentrert innhold"})},n={args:{size:"40px",backgroundColor:"green.400",color:"white"},render:r=>s.jsx(b,{...r,children:s.jsx(u,{children:"S"})})},o={args:{size:"40px",backgroundColor:"red.400",color:"white"},render:r=>s.jsx(x,{...r,children:s.jsx(u,{children:"C"})})};var a,t,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    backgroundColor: "green.50",
    padding: "6"
  },
  render: args => <KvibCenter {...args}>En boks med sentrert innhold</KvibCenter>
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,d,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: "40px",
    backgroundColor: "green.400",
    color: "white"
  },
  render: args => <KvibSquare {...args}>
      <Text>S</Text>
    </KvibSquare>
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,p,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "40px",
    backgroundColor: "red.400",
    color: "white"
  },
  render: args => <KvibCircle {...args}>
      <Text>C</Text>
    </KvibCircle>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const h=["Center","Square","Circle"],T=Object.freeze(Object.defineProperty({__proto__:null,Center:e,Circle:o,Square:n,__namedExportsOrder:h,default:S},Symbol.toStringTag,{value:"Module"}));export{T as C,n as S,e as a,o as b};
