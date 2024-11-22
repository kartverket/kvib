import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{A as D}from"./absolute-center-CNroa-V3.js";import{S as o}from"./separator-CmGcrybP.js";import{S as f}from"./stack-Bh3oWNRR.js";import{C as y}from"./center-7hWxgEBL.js";import{B as T}from"./box-C9nK2UO9.js";import{T as V}from"./text-DJW8V014.js";const k={title:"Komponenter/Separator",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the Divider",table:{type:{summary:"solid | dashed"},defaultValue:{summary:"solid"}},options:["solid","dashed"],control:"radio"},orientation:{description:"The orientation of the Divider",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:"radio"}}},a={render:e=>r.jsx(o,{...e})},t={args:{borderColor:"blue.600"},render:e=>r.jsxs(f,{gap:"4",children:[r.jsx(o,{...e,variant:"solid"}),r.jsx(o,{...e,variant:"dashed"})]})},s={render:e=>r.jsxs(f,{gap:"4",children:[r.jsx(o,{...e,borderWidth:"1px",borderColor:"blue.500"}),r.jsx(o,{...e,borderWidth:"2px",borderColor:"green.500"})]})},i={args:{borderColor:"blue.600"},render:e=>r.jsx(y,{height:"50px",children:r.jsx(o,{...e,orientation:"vertical"})})},n={args:{borderColor:"blue.600"},render:e=>r.jsxs(T,{position:"relative",padding:"10",children:[r.jsx(o,{...e}),r.jsx(D,{bg:"white",px:"4",children:r.jsx(V,{children:"KVIB"})})]})};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <KvibSeparator {...args} />
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,b,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    borderColor: "blue.600"
  },
  render: args => <KvibStack gap="4">
      <KvibSeparator {...args} variant="solid" />
      <KvibSeparator {...args} variant="dashed" />
    </KvibStack>
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var v,u,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <KvibStack gap="4">
      <KvibSeparator {...args} borderWidth="1px" borderColor="blue.500" />
      <KvibSeparator {...args} borderWidth="2px" borderColor="green.500" />
    </KvibStack>
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    borderColor: "blue.600"
  },
  render: args => <KvibCenter height="50px">
      <KvibSeparator {...args} orientation="vertical" />
    </KvibCenter>
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var K,C,j;n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    borderColor: "blue.600"
  },
  render: args => <KvibBox position="relative" padding="10">
      <KvibSeparator {...args} />
      <KvibAbsoluteCenter bg="white" px="4">
        <KvibTekst>KVIB</KvibTekst>
      </KvibAbsoluteCenter>
    </KvibBox>
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const B=["Preview","DividerVariants","DividerColorsWidths","DividerVertical","DividerContent"],E=Object.freeze(Object.defineProperty({__proto__:null,DividerColorsWidths:s,DividerContent:n,DividerVariants:t,DividerVertical:i,Preview:a,__namedExportsOrder:B,default:k},Symbol.toStringTag,{value:"Module"}));export{t as D,a as P,E as S,s as a,i as b,n as c};
