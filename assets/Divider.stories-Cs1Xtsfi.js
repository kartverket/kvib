import{j as r}from"./extends-CwFRzn3r.js";import{C as f,A as y}from"./center-Bg6uA6YZ.js";import{D as o}from"./divider-DJk7Djzd.js";import{S}from"./stack-C3a7yBZW.js";import{B as T}from"./box-Cs-tJ6EH.js";import{T as V}from"./text-CypcOzo0.js";const k={title:"Sideelementer/Divider",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the Divider",table:{type:{summary:"solid | dashed"},defaultValue:{summary:"solid"}},options:["solid","dashed"],control:"radio"},orientation:{description:"The orientation of the Divider",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:"radio"}}},i={render:e=>r.jsx(o,{...e})},a={args:{borderColor:"blue.600"},render:e=>r.jsxs(S,{spacing:"4",children:[r.jsx(o,{...e,variant:"solid"}),r.jsx(o,{...e,variant:"dashed"})]})},s={render:e=>r.jsxs(S,{spacing:"4",children:[r.jsx(o,{...e,borderWidth:"1px",borderColor:"blue.500"}),r.jsx(o,{...e,borderWidth:"2px",borderColor:"green.500"})]})},t={args:{borderColor:"blue.600"},render:e=>r.jsx(f,{height:"50px",children:r.jsx(o,{...e,orientation:"vertical"})})},n={args:{borderColor:"blue.600"},render:e=>r.jsxs(T,{position:"relative",padding:"10",children:[r.jsx(o,{...e}),r.jsx(y,{bg:"white",px:"4",children:r.jsx(V,{children:"KVIB"})})]})};var d,c,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(j=(K=n.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};const B=["Preview","DividerVariants","DividerColorsWidths","DividerVertical","DividerContent"],O=Object.freeze(Object.defineProperty({__proto__:null,DividerColorsWidths:s,DividerContent:n,DividerVariants:a,DividerVertical:t,Preview:i,__namedExportsOrder:B,default:k},Symbol.toStringTag,{value:"Module"}));export{O as D,i as P,a,s as b,t as c,n as d};
