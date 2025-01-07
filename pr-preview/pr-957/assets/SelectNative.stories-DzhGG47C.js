import{j as t}from"./index-D6_wGsWO.js";import{bp as o,bq as i,br as n}from"./index-BEiQEnoY.js";const m={title:"Komponenter/Select Native",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{disabled:{description:"",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},size:{description:"The size of the Select",table:{type:{summary:'"lg" | "md" | "sm" | "xs"'},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:"radio"},variant:{description:"The variant of the Select",table:{type:{summary:'"outline" | "filled" | "flushed" | "unstyled"'},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:"radio"}}},d=i({items:[{label:"React.js",value:"react"},{label:"Vue.js",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}]}),e={render:s=>t.jsx(o,{size:"sm",width:"240px",...s,children:t.jsx(n,{placeholder:"Velg et element",items:d.items})})};var a,l,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <NativeSelectRoot size="sm" width="240px" {...args}>
      <NativeSelectField placeholder="Velg et element" items={alternativer.items} />
    </NativeSelectRoot>
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const u=["Preview"],v=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,v as S};
