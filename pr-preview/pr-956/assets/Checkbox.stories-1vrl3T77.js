import{j as l}from"./index-D6_wGsWO.js";import{p as a}from"./index-DlM2nGIA.js";const n={title:"Komponenter/Checkbox",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},args:{colorPalette:"green",size:"md",disabled:!1,invalid:!1},argTypes:{colorPalette:{description:"The color of the component",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},control:"radio",options:["green","blue"]},size:{description:"The size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},disabled:{description:"If true, the component will be disabled",table:{type:{summary:"true | false"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the checkbox will be invalid",table:{type:{summary:"true | false"}},defaultValue:{summary:!1},control:"boolean"}}},e={render:s=>l.jsx(a,{defaultChecked:!0,...s,children:"En avmerkingsboks"})};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <KvibCheckbox defaultChecked {...args}>
      En avmerkingsboks
    </KvibCheckbox>
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const i=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:n},Symbol.toStringTag,{value:"Module"}));export{d as C,e as P};
