import{j as i}from"./jsx-runtime-DgHZ7iq2.js";import{r as n}from"./index-CGNKToUm.js";const d={title:"Komponenter/Checkbox Card",component:n,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"The color of the component",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},control:"radio",options:["green","blue"]},size:{description:"The size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},disabled:{description:"If true, the component will be disabled",table:{type:{summary:"true | false"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the checkbox will be invalid",table:{type:{summary:"true | false"}},defaultValue:{summary:!1},control:"boolean"}}},e={render:l=>i.jsx(n,{defaultChecked:!0,label:"Label",description:"Checkbox Card description",...l})};var o,r,t,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <CheckboxCard defaultChecked label="Label" description="Checkbox Card description" {...args} />
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source},description:{story:'Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook',...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.description}}};const c=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{u as C,e as P};
