import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as l,a,b as r,c as i,d as c,e as y,f as h,g as f,h as g}from"./index-Ck2gLP12.js";const A={title:"Komponenter/Accordion",component:l,parameters:{docs:{story:{inline:!0}}}};l.displayName="Accordion";a.displayName="AccordionItem";c.displayName="AccordionItemContent";i.displayName="AccordionItemIndicator";r.displayName="AccordionItemTrigger";const n={argTypes:{multiple:{description:"If true, multiple items can be expanded at once.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},collapsible:{description:"If true, all items can be collapsed.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},variant:{description:"Sets the variant of the component.",table:{type:{summary:"outline | subtle | enclosed | plain"},defaultValue:{summary:"outline"}},control:{type:"radio"},options:["outline","subtle","enclosed","plain"]},size:{description:"Sets the size of the component.",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:{type:"radio"},options:["sm","md","lg"]},disabled:{description:"If true, the Accordion will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},onFocusChange:{description:"The callback fired when the focused accordion item changes.",table:{type:{summary:"(details: FocusChangeDetails) => void"}}},onValueChange:{description:"The callback fired when the state of expanded/collapsed accordion items changes.",table:{type:{summary:"(details: ValueChangeDetails) => void"}}},defaultValue:{description:"The initial value of the accordion when it is first rendered. Use when you do not need to control the state of the accordion.",table:{type:{summary:"string[]"}}},value:{description:"The value of the accordion items that are currently being expanded.",table:{type:{summary:"string[]"}}}},render:t=>e.jsxs(l,{collapsible:!0,...t,children:[e.jsxs(a,{value:"item1",children:[e.jsxs(r,{children:["Title 1",e.jsx(i,{})]}),e.jsx(c,{children:"Content 1"})]},"1"),e.jsxs(a,{value:"item2",children:[e.jsxs(r,{children:["Title 2",e.jsx(i,{})]}),e.jsx(c,{children:"Content 2"})]},"2")]})},o={argTypes:{value:{description:"The value of the accordion item.",table:{type:{summary:"string"}}},disabled:{description:"Whether the accordion item is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},render:t=>e.jsx(y,{collapsible:!0,children:e.jsxs(h,{...t,children:[e.jsx(f,{children:"Accordion item 1"}),e.jsx(g,{children:"Content 1"})]})})};var s,d,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  argTypes: {
    multiple: {
      description: "If true, multiple items can be expanded at once.",
      table: {
        type: {
          summary: "boolean"
        }
      },
      defaultValue: {
        summary: "false"
      },
      control: "boolean"
    },
    collapsible: {
      description: "If true, all items can be collapsed.",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "false"
        }
      },
      control: "boolean"
    },
    variant: {
      description: "Sets the variant of the component.",
      table: {
        type: {
          summary: "outline | subtle | enclosed | plain"
        },
        defaultValue: {
          summary: "outline"
        }
      },
      control: {
        type: "radio"
      },
      options: ["outline", "subtle", "enclosed", "plain"]
    },
    size: {
      description: "Sets the size of the component.",
      table: {
        type: {
          summary: "sm | md | lg"
        },
        defaultValue: {
          summary: "md"
        }
      },
      control: {
        type: "radio"
      },
      options: ["sm", "md", "lg"]
    },
    disabled: {
      description: "If true, the Accordion will be disabled.",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "false"
        }
      },
      control: "boolean"
    },
    onFocusChange: {
      description: "The callback fired when the focused accordion item changes.",
      table: {
        type: {
          summary: "(details: FocusChangeDetails) => void"
        }
      }
    },
    onValueChange: {
      description: "The callback fired when the state of expanded/collapsed accordion items changes.",
      table: {
        type: {
          summary: "(details: ValueChangeDetails) => void"
        }
      }
    },
    defaultValue: {
      description: "The initial value of the accordion when it is first rendered. Use when you do not need to control the state of the accordion.",
      table: {
        type: {
          summary: "string[]"
        }
      }
    },
    value: {
      description: "The value of the accordion items that are currently being expanded.",
      table: {
        type: {
          summary: "string[]"
        }
      }
    }
  },
  render: args => <Accordion collapsible {...args}>
      <AccItem key="1" value="item1">
        <AccordionItemTrigger>
          Title 1
          <AccordionItemIndicator />
        </AccordionItemTrigger>
        <AccordionItemContent>Content 1</AccordionItemContent>
      </AccItem>
      <AccItem key="2" value="item2">
        <AccordionItemTrigger>
          Title 2
          <AccordionItemIndicator />
        </AccordionItemTrigger>
        <AccordionItemContent>Content 2</AccordionItemContent>
      </AccItem>
    </Accordion>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: {
    value: {
      description: "The value of the accordion item.",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    disabled: {
      description: "Whether the accordion item is disabled.",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "false"
        }
      },
      control: "boolean"
    }
  },
  render: args => <KvibAccordion.Root collapsible>
      <KvibAccordion.Item {...args}>
        <KvibAccordion.ItemTrigger>Accordion item 1</KvibAccordion.ItemTrigger>
        <KvibAccordion.ItemContent>Content 1</KvibAccordion.ItemContent>
      </KvibAccordion.Item>
    </KvibAccordion.Root>
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const I=["Preview","AccordionItem"],x=Object.freeze(Object.defineProperty({__proto__:null,AccordionItem:o,Preview:n,__namedExportsOrder:I,default:A},Symbol.toStringTag,{value:"Module"}));export{x as A,n as P,o as a};
