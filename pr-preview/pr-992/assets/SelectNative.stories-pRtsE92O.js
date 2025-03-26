import{j as a}from"./jsx-runtime-CLpGMVip.js";import{aT as t,aU as i,aV as n}from"./index-RGZpRyuC.js";const m={title:"Komponenter/Select Native",component:t,parameters:{docs:{story:{inline:!0}}},argTypes:{disabled:{description:"",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},size:{description:"The size of the Select",table:{type:{summary:'"lg" | "md" | "sm" | "xs"'},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:"radio"},variant:{description:"The variant of the Select",table:{type:{summary:'"outline" | "filled" | "flushed" | "unstyled"'},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:"radio"}}};t.displayName="NativeSelect";i.displayName="NativeSelectField";const d=n({items:[{label:"Item 1",value:"one"},{label:"Item 2",value:"two"},{label:"Item 3",value:"three"}]}),e={render:s=>a.jsx(t,{size:"sm",width:"240px",...s,children:a.jsx(i,{placeholder:"Select an item",items:d.items})})};var l,r,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <NativeSelect size="sm" width="240px" {...args}>
      <NativeSelectField placeholder="Select an item" items={alternativer.items} />
    </NativeSelect>
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const c=["Preview"],v=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,v as S};
