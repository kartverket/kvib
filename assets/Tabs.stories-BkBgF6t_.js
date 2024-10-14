import{j as e}from"./extends-CwFRzn3r.js";import{S as w,H as _}from"./chunk-3ASUQ6PA-hlsAaDh7.js";import{f as D}from"./chunk-ZJJGQIVY-Cc1cgHRr.js";import{a as n,b as r,T as a}from"./Tabs-D3NbUjuD.js";import{T as N,a as c}from"./tab-panels-CGgGt0eZ.js";var V=D((s,k)=>e.jsx(w,{align:"center",...s,direction:"column",ref:k}));V.displayName="VStack";const E={title:"Navigasjon/Tabs",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{config:{rules:[{id:"aria-valid-attr-value",reviewOnFail:!0}]}}},argTypes:{size:{description:"The size of the tabs",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},colorScheme:{description:"The visual color appearance of the tabs",table:{type:{summary:"green | blue | undefined"},defaultValue:{summary:"green"}},options:["green","blue","undefined"],control:{type:"radio"}},orientation:{description:"The orientation of the tab.",table:{type:{summary:"vertical | horizontal"},defaultValue:{summary:"horizontal"}},options:["vertical","horizontal"],control:{type:"radio"}},variant:{description:"The variant of the tab.",table:{type:{summary:"line | enclosed | enclosed-colored | soft-rounded | solid-rounded | unstyled"},defaultValue:{summary:"line"}},options:["line","enclosed","enclosed-colored","soft-rounded","solid-rounded","unstyled"],control:{type:"radio"}},isFitted:{description:"If true, tabs will stretch to width of the tablist.",table:{type:{summary:Boolean},defaultValue:{summary:!1}},control:{type:"boolean"}},id:{description:"The id of the tab",table:{type:{summary:String}},control:"text"},index:{description:"The index of the selected tab (in controlled mode)",table:{type:{summary:Number}},control:"number"},isDisabled:{description:"If true, tabs will no longer be able to toggle.",table:{type:{summary:Boolean},defaultValue:{summary:!1}},control:{type:"boolean"}}}},i={args:{size:"md"},render:s=>e.jsx(n,{...s,children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})})},b={args:{size:"md"},render:s=>e.jsxs(_,{spacing:"2rem",children:[e.jsx(n,{...s,colorScheme:"blue",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})}),e.jsx(n,{...s,colorScheme:"green",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})})]})},t={args:{size:"md"},render:s=>e.jsx(n,{...s,children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"}),e.jsx(a,{children:"Tredje fane"}),e.jsx(a,{children:"Fjerde fane"}),e.jsx(a,{children:"Femte fane"}),e.jsx(a,{children:"Sjette fane"})]})})},o={render:s=>e.jsxs(V,{alignItems:"start",children:[e.jsx(n,{...s,"aria-label":"Tabs small",size:"sm",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})}),e.jsx(n,{...s,size:"md",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})}),e.jsx(n,{...s,size:"lg",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})})]})},d={args:{size:"md"},render:s=>e.jsxs(n,{...s,children:[e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]}),e.jsxs(N,{children:[e.jsx(c,{children:"Fane 1"}),e.jsx(c,{children:"Fane 2"})]})]})},l={args:{size:"md"},render:s=>e.jsx(n,{...s,children:e.jsxs(r,{children:[e.jsx(a,{children:"Enabled"}),e.jsx(a,{isDisabled:!0,children:"Disabled"})]})})};var T,m,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Første fane</KvibTab>
        <KvibTab>Andre fane</KvibTab>
      </KvibTabList>
    </KvibTabs>
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var K,u,f;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <HStack spacing="2rem">
      <KvibTabs {...args} colorScheme="blue">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
      <KvibTabs {...args} colorScheme="green">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
    </HStack>
}`,...(f=(u=b.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,p,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Første fane</KvibTab>
        <KvibTab>Andre fane</KvibTab>
        <KvibTab>Tredje fane</KvibTab>
        <KvibTab>Fjerde fane</KvibTab>
        <KvibTab>Femte fane</KvibTab>
        <KvibTab>Sjette fane</KvibTab>
      </KvibTabList>
    </KvibTabs>
}`,...(j=(p=t.parameters)==null?void 0:p.docs)==null?void 0:j.source}}};var x,g,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start">
      <KvibTabs {...args} aria-label="Tabs small" size="sm">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
      <KvibTabs {...args} size="md">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
      <KvibTabs {...args} size="lg">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
    </VStack>
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,F,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Første fane</KvibTab>
        <KvibTab>Andre fane</KvibTab>
      </KvibTabList>
      <KvibTabPanels>
        <KvibTabPanel>Fane 1</KvibTabPanel>
        <KvibTabPanel>Fane 2</KvibTabPanel>
      </KvibTabPanels>
    </KvibTabs>
}`,...(z=(F=d.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var L,A,P;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Enabled</KvibTab>
        <KvibTab isDisabled>Disabled</KvibTab>
      </KvibTabList>
    </KvibTabs>
}`,...(P=(A=l.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const H=["Tabs","TabsColors","TabsNumber","TabsSizes","TabsPanels","TabsStates"],M=Object.freeze(Object.defineProperty({__proto__:null,Tabs:i,TabsColors:b,TabsNumber:t,TabsPanels:d,TabsSizes:o,TabsStates:l,__namedExportsOrder:H,default:E},Symbol.toStringTag,{value:"Module"}));export{M as T,i as a,b,t as c,o as d,d as e,l as f};
