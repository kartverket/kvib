import{j as r}from"./index-D6_wGsWO.js";import{bC as s,d as j}from"./index-80IJmMl9.js";const z={title:"Komponenter/Spinner",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorPalette:{description:"The colorpalette of the component",table:{type:{summary:"green | blue | gray"}},control:{type:"radio"},options:["green","blue","gray"]},size:{description:"The size of the Spinner",table:{type:{summary:"xs | sm | md | lg | xl"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg","xl"],control:{type:"radio"}}}},n={render:e=>r.jsx(s,{...e})},o={render:e=>r.jsxs(j,{children:[r.jsx(s,{...e,color:"blue"}),r.jsx(s,{...e,color:"green"}),r.jsx(s,{...e,color:"red"}),r.jsx(s,{...e,color:"gray"})]})},a={render:e=>r.jsxs(j,{children:[r.jsx(s,{...e,size:"xl"}),r.jsx(s,{...e,size:"lg"}),r.jsx(s,{...e,size:"md"}),r.jsx(s,{...e,size:"sm"}),r.jsx(s,{...e,size:"xs"})]})},i={args:{size:"xl",color:"green.500"},render:e=>r.jsx(s,{...e})};var t,c,p;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <KvibSpinner {...args} />
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <KvibStack>
      <KvibSpinner {...args} color="blue" />
      <KvibSpinner {...args} color="green" />
      <KvibSpinner {...args} color="red" />
      <KvibSpinner {...args} color="gray" />
    </KvibStack>
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var S,g,u;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <KvibStack>
      <KvibSpinner {...args} size="xl" />
      <KvibSpinner {...args} size="lg" />
      <KvibSpinner {...args} size="md" />
      <KvibSpinner {...args} size="sm" />
      <KvibSpinner {...args} size="xs" />
    </KvibStack>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,b,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "xl",
    color: "green.500"
  },
  render: args => <KvibSpinner {...args} />
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const K=["Preview","SpinnerColors","SpinnerSizes","SpinnerArea"],h=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,SpinnerArea:i,SpinnerColors:o,SpinnerSizes:a,__namedExportsOrder:K,default:z},Symbol.toStringTag,{value:"Module"}));export{n as P,h as S,a,o as b};
