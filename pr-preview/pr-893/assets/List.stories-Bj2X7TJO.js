import{j as e}from"./extends-CwFRzn3r.js";import{L as g,U as v,a as t,O as l}from"./list-BwGGlvTE.js";import{S as p}from"./stack-C3a7yBZW.js";const L={title:"Datavisning/List",component:g,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{spacing:{description:"The space between each list item",table:{type:{summary:String}},control:"text"}}},s={render:a=>e.jsxs(v,{...a,children:[e.jsx(t,{children:"Kartgrunnlag for Fastlands-Noreg"}),e.jsx(t,{children:"Eigedomsdata"}),e.jsx(t,{children:"Tidevatn og vasstand"}),e.jsx(t,{children:"Høgdedata og djupnedata"})]})},r={render:a=>e.jsx(p,{gap:4,children:e.jsxs(l,{...a,children:[e.jsx(t,{children:"Kartgrunnlag for Fastlands-Noreg"}),e.jsx(t,{children:"Eigedomsdata"}),e.jsx(t,{children:"Tidevatn og vasstand"}),e.jsx(t,{children:"Høgdedata og djupnedata"})]})})};var i,n,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <KvibUnorderedList {...args}>
      <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>
      <KvibListItem>Eigedomsdata</KvibListItem>
      <KvibListItem>Tidevatn og vasstand</KvibListItem>
      <KvibListItem>Høgdedata og djupnedata</KvibListItem>
    </KvibUnorderedList>
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var o,m,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Stack gap={4}>
      <KvibOrderedList {...args}>
        <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>
        <KvibListItem>Eigedomsdata</KvibListItem>
        <KvibListItem>Tidevatn og vasstand</KvibListItem>
        <KvibListItem>Høgdedata og djupnedata</KvibListItem>
      </KvibOrderedList>
    </Stack>
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const b=["Preview","Ordered"],I=Object.freeze(Object.defineProperty({__proto__:null,Ordered:r,Preview:s,__namedExportsOrder:b,default:L},Symbol.toStringTag,{value:"Module"}));export{I as L,r as O,s as P};
