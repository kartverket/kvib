import{j as e}from"./index-Bqoz-m_F.js";import{A as p,a,b as r,c as h,d as i,e as b,f as y,g as f,h as g}from"./index-DuafSpvy.js";const I={title:"Komponenter/Accordion",component:p,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}}},n={argTypes:{multiple:{description:"If true, multiple items can be expanded at once.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},collapsible:{description:"If true, all items can be collapsed.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},variant:{description:"Sets the variant of the component.",table:{type:{summary:"outline | subtle | enclosed | plain"},defaultValue:{summary:"outline"}},control:{type:"radio"},options:["outline","subtle","enclosed","plain"]},size:{description:"Sets the size of the component.",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:{type:"radio"},options:["sm","md","lg"]},disabled:{description:"If true, the Accordion will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},onFocusChange:{description:"The callback fired when the focused accordion item changes.",table:{type:{summary:"(details: FocusChangeDetails) => void"}}},onValueChange:{description:"The callback fired when the state of expanded/collapsed accordion items changes.",table:{type:{summary:"(details: ValueChangeDetails) => void"}}},defaultValue:{description:"The initial value of the accordion when it is first rendered. Use when you do not need to control the state of the accordion.",table:{type:{summary:"string[]"}}},value:{description:"The value of the accordion items that are currently being expanded.",table:{type:{summary:"string[]"}}}},render:o=>e.jsxs(p,{...o,children:[e.jsxs(a,{value:"test",children:[e.jsxs(r,{children:["Tittel 1",e.jsx(h,{})]}),e.jsx(i,{children:"Innhold 1"})]},"1"),e.jsxs(a,{value:"test2",children:[e.jsx(r,{children:"Tittel 2"}),e.jsx(i,{children:"Innhold 2"})]},"2")]})},t={argTypes:{value:{description:"The value of the accordion item.",table:{type:{summary:"string"}}},disabled:{description:"Whether the accordion item is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},render:o=>e.jsx(b,{children:e.jsxs(y,{...o,children:[e.jsx(f,{children:"Klikk meg"}),e.jsx(g,{children:"Innhold i AccordionItem"})]})})};var c,s,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
  render: args => <Accordion {...args}>
      <AccItem key="1" value="test">
        <AccordionItemTrigger>
          Tittel 1
          <AccordionItemIndicator />
        </AccordionItemTrigger>
        <AccordionItemContent>Innhold 1</AccordionItemContent>
      </AccItem>
      <AccItem key="2" value="test2">
        <AccordionItemTrigger>Tittel 2</AccordionItemTrigger>
        <AccordionItemContent>Innhold 2</AccordionItemContent>
      </AccItem>
    </Accordion>
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
  render: args => <KvibAccordion.Root>
      <KvibAccordion.Item {...args}>
        <KvibAccordion.ItemTrigger>Klikk meg</KvibAccordion.ItemTrigger>
        <KvibAccordion.ItemContent>Innhold i AccordionItem</KvibAccordion.ItemContent>
      </KvibAccordion.Item>
    </KvibAccordion.Root>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const A=["Preview","AccordionItem"],x=Object.freeze(Object.defineProperty({__proto__:null,AccordionItem:t,Preview:n,__namedExportsOrder:A,default:I},Symbol.toStringTag,{value:"Module"}));export{x as A,n as P,t as a};
