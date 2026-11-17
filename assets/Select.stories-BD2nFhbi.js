import{bv as a,j as e,bw as i,bx as c,by as m,bz as d,bA as u,bu as p}from"./iframe-Bsatxhr7.js";const S={title:"Komponenter/Select",component:a,parameters:{docs:{story:{inline:!0}}},argTypes:{disabled:{description:"",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},required:{description:"If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},size:{description:"The size of the Select",table:{type:{summary:'"lg" | "md" | "sm" | "xs"'},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:"radio"},variant:{description:"The variant of the Select",table:{type:{summary:'"outline" | "filled" | "flushed" | "unstyled"'},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:"radio"}}};a.displayName="Select";i.displayName="SelectLabel";c.displayName="SelectTrigger";m.displayName="SelectValueText";d.displayName="SelectContent";u.displayName="SelectItem";const r=p({items:[{label:"Item 1",value:"one"},{label:"Item 2",value:"two"},{label:"Item 3",value:"three"}]}),t={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{},render:b=>e.jsxs(a,{w:"12rem",...b,collection:r,"aria-label":"select",children:[e.jsx(i,{children:"Select an item"}),e.jsx(c,{children:e.jsx(m,{})}),e.jsx(d,{children:r.items.map(l=>e.jsx(u,{item:l,children:l.label},l.value))})]})},y=["Preview"];var s,n,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const h=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:y,default:S},Symbol.toStringTag,{value:"Module"}));export{t as P,h as S};
