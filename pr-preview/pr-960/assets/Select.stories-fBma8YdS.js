import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{aX as o,aV as c,aY as m,aZ as u,a_ as d,a$ as p,b0 as b}from"./index-CGNKToUm.js";const v={title:"Komponenter/Select",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{disabled:{description:"",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},required:{description:"If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},size:{description:"The size of the Select",table:{type:{summary:'"lg" | "md" | "sm" | "xs"'},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:"radio"},variant:{description:"The variant of the Select",table:{type:{summary:'"outline" | "filled" | "flushed" | "unstyled"'},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:"radio"}}},l=c({items:[{label:"React.js",value:"react"},{label:"Vue.js",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}]}),t={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{},render:i=>e.jsxs(o,{w:"12rem",...i,collection:l,"aria-label":"select",children:[e.jsx(m,{children:"Velg et rammeverk"}),e.jsx(u,{children:e.jsx(d,{placeholder:"Velg..."})}),e.jsx(p,{children:l.items.map(a=>e.jsx(b,{item:a,children:a.label},a.value))})]})};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  args: {},
  render: (args: SelectProps) => <KvibSelect w="12rem" {...args} collection={alternativer} aria-label="select">
      <SelectLabel>Velg et rammeverk</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="Velg..." />
      </SelectTrigger>
      <SelectContent>
        {alternativer.items.map((alternativ: {
        label: string;
        value: string;
      }) => <SelectItem item={alternativ} key={alternativ.value}>
            {alternativ.label}
          </SelectItem>)}
      </SelectContent>
    </KvibSelect>
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const S=["Preview"],g=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{t as P,g as S};
