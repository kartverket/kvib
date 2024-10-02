import{j as r}from"./extends-CwFRzn3r.js";import{C as f,A as y}from"./chunk-FAWTVNS3-tKAZUTn2.js";import{T}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{S}from"./chunk-ZHMYA64R-V_96TD_T.js";import{B as V}from"./chunk-PULVB27S-CgiffgmI.js";import{D as o}from"./chunk-W7WUSNWJ-BjdlM_ZX.js";const k={title:"Sideelementer/Divider",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the Divider",table:{type:{summary:"solid | dashed"},defaultValue:{summary:"solid"}},options:["solid","dashed"],control:"radio"},orientation:{description:"The orientation of the Divider",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:"radio"}}},i={args:{},render:e=>r.jsx(o,{...e})},a={args:{borderColor:"blue.600"},render:e=>r.jsxs(S,{spacing:"4",children:[r.jsx(o,{...e,variant:"solid"}),r.jsx(o,{...e,variant:"dashed"})]})},s={args:{},render:e=>r.jsxs(S,{spacing:"4",children:[r.jsx(o,{...e,borderWidth:"1px",borderColor:"blue.500"}),r.jsx(o,{...e,borderWidth:"2px",borderColor:"green.500"})]})},t={args:{borderColor:"blue.600"},render:e=>r.jsx(f,{height:"50px",children:r.jsx(o,{...e,orientation:"vertical"})})},n={args:{borderColor:"blue.600"},render:e=>r.jsxs(V,{position:"relative",padding:"10",children:[r.jsx(o,{...e}),r.jsx(y,{bg:"white",px:"4",children:r.jsx(T,{children:"KVIB"})})]})};var d,c,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibDivider {...args} />
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,v,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    borderColor: "blue.600"
  },
  render: args => <KvibStack spacing="4">
      <KvibDivider {...args} variant="solid" />
      <KvibDivider {...args} variant="dashed" />
    </KvibStack>
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack spacing="4">
      <KvibDivider {...args} borderWidth="1px" borderColor="blue.500" />
      <KvibDivider {...args} borderWidth="2px" borderColor="green.500" />
    </KvibStack>
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    borderColor: "blue.600"
  },
  render: args => <KvibCenter height="50px">
      <KvibDivider {...args} orientation="vertical" />
    </KvibCenter>
}`,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var C,K,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    borderColor: "blue.600"
  },
  render: args => <KvibBox position="relative" padding="10">
      <KvibDivider {...args} />
      <KvibAbsoluteCenter bg="white" px="4">
        <KvibTekst>KVIB</KvibTekst>
      </KvibAbsoluteCenter>
    </KvibBox>
}`,...(j=(K=n.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};const B=["Divider","DividerVariants","DividerColorsWidths","DividerVertical","DividerContent"],E=Object.freeze(Object.defineProperty({__proto__:null,Divider:i,DividerColorsWidths:s,DividerContent:n,DividerVariants:a,DividerVertical:t,__namedExportsOrder:B,default:k},Symbol.toStringTag,{value:"Module"}));export{E as D,a,s as b,t as c,n as d,i as e};
