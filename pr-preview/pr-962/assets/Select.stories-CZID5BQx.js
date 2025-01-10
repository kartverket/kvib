import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{aW as l,aX as i,aY as c,aZ as m,a_ as d,a$ as u,aV as S}from"./index-i3c0vUEJ.js";const b={title:"Komponenter/Select",component:l,parameters:{docs:{story:{inline:!0}}},argTypes:{disabled:{description:"",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},required:{description:"If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},size:{description:"The size of the Select",table:{type:{summary:'"lg" | "md" | "sm" | "xs"'},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:"radio"},variant:{description:"The variant of the Select",table:{type:{summary:'"outline" | "filled" | "flushed" | "unstyled"'},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:"radio"}}};l.displayName="Select";i.displayName="SelectLabel";c.displayName="SelectTrigger";m.displayName="SelectValueText";d.displayName="SelectContent";u.displayName="SelectItem";const r=S({items:[{label:"Item 1",value:"one"},{label:"Item 2",value:"two"},{label:"Item 3",value:"three"}]}),t={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{},render:p=>e.jsxs(l,{w:"12rem",...p,collection:r,"aria-label":"select",children:[e.jsx(i,{children:"Select an item"}),e.jsx(c,{children:e.jsx(m,{})}),e.jsx(d,{children:r.items.map(a=>e.jsx(u,{item:a,children:a.label},a.value))})]})};var s,n,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  args: {},
  render: (args: SelectProps) => <KvibSelect w="12rem" {...args} collection={alternativer} aria-label="select">
      <SelectLabel>Select an item</SelectLabel>
      <SelectTrigger>
        <SelectValueText />
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const f=["Preview"],v=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{t as P,v as S};
