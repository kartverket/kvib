import{j as r}from"./index-D6_wGsWO.js";import{bm as a,d as D,a as y,B as f,bn as T,T as V}from"./index-C4Tll0EB.js";const k={title:"Komponenter/Separator",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the Divider",table:{type:{summary:"solid | dashed"},defaultValue:{summary:"solid"}},options:["solid","dashed"],control:"radio"},orientation:{description:"The orientation of the Divider",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:"radio"}}},o={render:e=>r.jsx(a,{...e})},s={args:{borderColor:"blue.600"},render:e=>r.jsxs(D,{gap:"4",children:[r.jsx(a,{...e,variant:"solid"}),r.jsx(a,{...e,variant:"dashed"})]})},t={render:e=>r.jsxs(D,{gap:"4",children:[r.jsx(a,{...e,borderWidth:"1px",borderColor:"blue.500"}),r.jsx(a,{...e,borderWidth:"2px",borderColor:"green.500"})]})},i={args:{borderColor:"blue.600"},render:e=>r.jsx(y,{height:"50px",children:r.jsx(a,{...e,orientation:"vertical"})})},n={args:{borderColor:"blue.600"},render:e=>r.jsxs(f,{position:"relative",padding:"10",children:[r.jsx(a,{...e}),r.jsx(T,{bg:"white",px:"4",children:r.jsx(V,{children:"KVIB"})})]})};var d,c,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <KvibSeparator {...args} />
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,b,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    borderColor: "blue.600"
  },
  render: args => <KvibStack gap="4">
      <KvibSeparator {...args} variant="solid" />
      <KvibSeparator {...args} variant="dashed" />
    </KvibStack>
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var u,m,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <KvibStack gap="4">
      <KvibSeparator {...args} borderWidth="1px" borderColor="blue.500" />
      <KvibSeparator {...args} borderWidth="2px" borderColor="green.500" />
    </KvibStack>
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const B=["Preview","DividerVariants","DividerColorsWidths","DividerVertical","DividerContent"],w=Object.freeze(Object.defineProperty({__proto__:null,DividerColorsWidths:t,DividerContent:n,DividerVariants:s,DividerVertical:i,Preview:o,__namedExportsOrder:B,default:k},Symbol.toStringTag,{value:"Module"}));export{s as D,o as P,w as S,t as a,i as b,n as c};
