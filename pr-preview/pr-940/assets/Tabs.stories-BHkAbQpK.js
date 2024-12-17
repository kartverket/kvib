import{j as e}from"./index-D6_wGsWO.js";import{a$ as i,b0 as d,b1 as o,b2 as r}from"./index-DX2yoEI4.js";const u={title:"Komponenter/Tabs",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{config:{rules:[{id:"aria-valid-attr-value",reviewOnFail:!0}]}}},argTypes:{size:{description:"The size of the tabs",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},colorPalette:{description:"The visual color appearance of the tabs",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},options:["green","blue"],control:{type:"radio"}},orientation:{description:"The orientation of the tab.",table:{type:{summary:"vertical | horizontal"},defaultValue:{summary:"horizontal"}},options:["vertical","horizontal"],control:{type:"radio"}},variant:{description:"The variant of the tab.",table:{type:{summary:"line | enclosed | enclosed-colored | soft-rounded | solid-rounded | unstyled"},defaultValue:{summary:"line"}},options:["line","enclosed","enclosed-colored","soft-rounded","solid-rounded","unstyled"],control:{type:"radio"}},isFitted:{description:"If true, tabs will stretch to width of the tablist.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},id:{description:"The id of the tab",table:{type:{summary:"String"}},control:"text"},index:{description:"The index of the selected tab (in controlled mode)",table:{type:{summary:"Number"}},control:"number"},isDisabled:{description:"If true, tabs will no longer be able to toggle.",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}}},c=({...a})=>e.jsxs(i,{defaultValue:"fane1",...a,children:[e.jsxs(d,{children:[e.jsx(o,{value:"fane1",children:"Første fane"}),e.jsx(o,{value:"fane2",children:"Andre fane"})]}),e.jsx(r,{value:"fane1",children:"Innhold for første fane"}),e.jsx(r,{value:"fane2",children:"Innhold for andre fane"})]}),t={render:a=>e.jsx(c,{...a})};var s,n,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <TabsExample {...args} />
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const m=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{t as P,f as T};
