import{j as e}from"./extends-CwFRzn3r.js";import{V as O}from"./chunk-NTCQBYKE-BJzF3cNd.js";import{H as B}from"./chunk-3ASUQ6PA-DZH9lOZq.js";import{u as C,c as w,d as R,a as n,b as r,T as a}from"./Tabs-CvuP6Q4t.js";import{f as D,c as E,a as H}from"./chunk-ZJJGQIVY-CoI1iMVy.js";var K=D(function(i,T){const m=C({...i,ref:T}),v=w();return e.jsx(E.div,{outline:"0",...m,className:H("chakra-tabs__tab-panel",i.className),__css:v.tabpanel})});K.displayName="TabPanel";var I=D(function(i,T){const m=R(i),v=w();return e.jsx(E.div,{...m,width:"100%",ref:T,className:H("chakra-tabs__tab-panels",i.className),__css:v.tabpanels})});I.displayName="TabPanels";const M={title:"Navigasjon/Tabs",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{config:{rules:[{id:"aria-valid-attr-value",reviewOnFail:!0}]}}},argTypes:{size:{description:"The size of the tabs",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},colorScheme:{description:"The visual color appearance of the tabs",table:{type:{summary:"green | blue | undefined"},defaultValue:{summary:"green"}},options:["green","blue","undefined"],control:{type:"radio"}},orientation:{description:"The orientation of the tab.",table:{type:{summary:"vertical | horizontal"},defaultValue:{summary:"horizontal"}},options:["vertical","horizontal"],control:{type:"radio"}},variant:{description:"The variant of the tab.",table:{type:{summary:"line | enclosed | enclosed-colored | soft-rounded | solid-rounded | unstyled"},defaultValue:{summary:"line"}},options:["line","enclosed","enclosed-colored","soft-rounded","solid-rounded","unstyled"],control:{type:"radio"}},isFitted:{description:"If true, tabs will stretch to width of the tablist.",table:{type:{summary:Boolean},defaultValue:{summary:!1}},control:{type:"boolean"}},id:{description:"The id of the tab",table:{type:{summary:String}},control:"text"},index:{description:"The index of the selected tab (in controlled mode)",table:{type:{summary:Number}},control:"number"},isDisabled:{description:"If true, tabs will no longer be able to toggle.",table:{type:{summary:Boolean},defaultValue:{summary:!1}},control:{type:"boolean"}}}},b={args:{size:"md"},render:s=>e.jsx(n,{...s,children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})})},t={args:{size:"md"},render:s=>e.jsxs(B,{spacing:"2rem",children:[e.jsx(n,{...s,colorScheme:"blue",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})}),e.jsx(n,{...s,colorScheme:"green",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})})]})},l={args:{size:"md"},render:s=>e.jsx(n,{...s,children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"}),e.jsx(a,{children:"Tredje fane"}),e.jsx(a,{children:"Fjerde fane"}),e.jsx(a,{children:"Femte fane"}),e.jsx(a,{children:"Sjette fane"})]})})},o={render:s=>e.jsxs(O,{alignItems:"start",children:[e.jsx(n,{...s,"aria-label":"Tabs small",size:"sm",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})}),e.jsx(n,{...s,size:"md",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})}),e.jsx(n,{...s,size:"lg",children:e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]})})]})},d={args:{size:"md"},render:s=>e.jsxs(n,{...s,children:[e.jsxs(r,{children:[e.jsx(a,{children:"Første fane"}),e.jsx(a,{children:"Andre fane"})]}),e.jsxs(I,{children:[e.jsx(K,{children:"Fane 1"}),e.jsx(K,{children:"Fane 2"})]})]})},c={args:{size:"md"},render:s=>e.jsx(n,{...s,children:e.jsxs(r,{children:[e.jsx(a,{children:"Enabled"}),e.jsx(a,{isDisabled:!0,children:"Disabled"})]})})};var u,f,h;b.parameters={...b.parameters,docs:{...(u=b.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Første fane</KvibTab>
        <KvibTab>Andre fane</KvibTab>
      </KvibTabList>
    </KvibTabs>
}`,...(h=(f=b.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var p,j,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(j=t.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var g,y,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var F,z,L;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(z=o.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var P,A,_;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var N,V,k;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Enabled</KvibTab>
        <KvibTab isDisabled>Disabled</KvibTab>
      </KvibTabList>
    </KvibTabs>
}`,...(k=(V=c.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const $=["Tabs","TabsColors","TabsNumber","TabsSizes","TabsPanels","TabsStates"],W=Object.freeze(Object.defineProperty({__proto__:null,Tabs:b,TabsColors:t,TabsNumber:l,TabsPanels:d,TabsSizes:o,TabsStates:c,__namedExportsOrder:$,default:M},Symbol.toStringTag,{value:"Module"}));export{W as T,b as a,t as b,l as c,o as d,d as e,c as f};
