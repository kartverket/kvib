import{j as s}from"./jsx-runtime-DQFEoQHt.js";import{C as o}from"./index-DyEURmN4.js";const n={title:"Komponenter/Checkbox",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"The color of the component",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},control:"radio",options:["green","blue"]},size:{description:"The size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},disabled:{description:"If true, the component will be disabled",table:{type:{summary:"true | false"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the checkbox will be invalid",table:{type:{summary:"true | false"}},defaultValue:{summary:!1},control:"boolean"}}};o.displayName="Checkbox";const e={render:l=>s.jsx(o,{defaultChecked:!0,...l,children:"Checkbox label"})};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <KvibCheckbox defaultChecked {...args}>
      Checkbox label
    </KvibCheckbox>
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const c=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:c,default:n},Symbol.toStringTag,{value:"Module"}));export{d as C,e as P};
