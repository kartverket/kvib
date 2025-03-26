import{j as e}from"./jsx-runtime-CLpGMVip.js";import{T as o,a as l,b as t,c as r}from"./tabs-Cd_a21CE.js";const d={title:"Komponenter/Tabs",component:o,parameters:{docs:{story:{inline:!0}},a11y:{config:{rules:[{id:"aria-valid-attr-value",reviewOnFail:!0}]}}},argTypes:{size:{description:"The size of the tabs",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},colorPalette:{description:"The visual color appearance of the tabs",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},options:["green","blue"],control:{type:"radio"}},orientation:{description:"The orientation of the tab.",table:{type:{summary:"vertical | horizontal"},defaultValue:{summary:"horizontal"}},options:["vertical","horizontal"],control:{type:"radio"}},variant:{description:"The variant of the tab.",table:{type:{summary:"line | enclosed | enclosed-colored | soft-rounded | solid-rounded | unstyled"},defaultValue:{summary:"line"}},options:["line","subtle","enclosed","outline","plain"],control:{type:"radio"}},fitted:{description:"If true, tabs will stretch to width of the tablist.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},id:{description:"The id of the tab",table:{type:{summary:"String"}},control:"text"}}};o.displayName="Tabs";l.displayName="TabsList";t.displayName="TabsTrigger";r.displayName="TabsContent";const a={render:b=>e.jsxs(o,{defaultValue:"tab1",...b,children:[e.jsxs(l,{children:[e.jsx(t,{value:"tab1",children:"Tab 1"}),e.jsx(t,{value:"tab2",children:"Tab 2"})]}),e.jsx(r,{value:"tab1",children:"Tab 1 content"}),e.jsx(r,{value:"tab2",children:"Tab 2 content"})]})};var s,n,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <KvibTabs defaultValue="tab1" {...args}>
      <KvibTabList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </KvibTabList>
      <TabsContent value="tab1">Tab 1 content</TabsContent>
      <TabsContent value="tab2">Tab 2 content</TabsContent>
    </KvibTabs>
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const u=["Preview"],T=Object.freeze(Object.defineProperty({__proto__:null,Preview:a,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{a as P,T};
