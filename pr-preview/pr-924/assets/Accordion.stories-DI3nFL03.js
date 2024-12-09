import{j as e}from"./index-D6_wGsWO.js";import{m as s,B as a,n as r,o as l,p as i}from"./index-CWMfHjhQ.js";const f={title:"Komponenter/Accordion",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={argTypes:{allowMultiple:{description:"If true, multiple items can be expanded at once.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},allowToggle:{description:"If true, expanded items may be collapsed again.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},defaultIndex:{description:"Sets the initial index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},index:{description:"Sets the index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},onChange:{description:"Callback for when the accordion expands/collapses.",table:{type:{summary:"function"}},control:"boolean"},reduceMotion:{description:"If true, disables height animation and transition.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{allowMultiple:!0,allowToggle:!1,onChange:void 0},render:t=>e.jsx(a,{w:"100%",children:e.jsxs(s,{...t,children:[e.jsxs(r,{children:[e.jsx("h2",{children:e.jsx(l,{children:e.jsx(a,{as:"span",flex:"1",textAlign:"left",children:"Tittel 1"})})}),e.jsx(i,{pb:4,children:"Innhold 1"})]}),e.jsxs(r,{children:[e.jsx("h2",{children:e.jsx(l,{children:e.jsx(a,{as:"span",flex:"1",textAlign:"left",children:"Tittel 2"})})}),e.jsx(i,{pb:4,children:"Innhold 2"})]})]})})},o={argTypes:{id:{description:"Unique id for the AccordionItem.",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the AccordionItem will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isFocusable:{description:"If true, the AccordionItem will be focusable.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{isDisabled:!1,isFocusable:!1},render:t=>e.jsx(s,{children:e.jsxs(r,{...t,children:[e.jsx(l,{children:"Klikk meg"}),e.jsx(i,{children:"Tekst skrift tekst"})]})})};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {
    allowMultiple: {
      description: "If true, multiple items can be expanded at once.",
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
    allowToggle: {
      description: "If true, expanded items may be collapsed again.",
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
    defaultIndex: {
      description: "Sets the initial index for the expanded accordion item.",
      table: {
        type: {
          summary: "string"
        }
      },
      control: "text"
    },
    index: {
      description: "Sets the index for the expanded accordion item.",
      table: {
        type: {
          summary: "string"
        }
      },
      control: "text"
    },
    onChange: {
      description: "Callback for when the accordion expands/collapses.",
      table: {
        type: {
          summary: "function"
        }
      },
      control: "boolean"
    },
    reduceMotion: {
      description: "If true, disables height animation and transition.",
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
  args: {
    allowMultiple: true,
    allowToggle: false,
    onChange: undefined
  },
  render: args => <Box w="100%">
      <KvibAccordion {...args}>
        <AccItem>
          <h2>
            <AccordionItemTrigger>
              <Box as="span" flex="1" textAlign="left">
                Tittel 1
              </Box>
            </AccordionItemTrigger>
          </h2>
          <AccordionItemContent pb={4}>Innhold 1</AccordionItemContent>
        </AccItem>
        <AccItem>
          <h2>
            <AccordionItemTrigger>
              <Box as="span" flex="1" textAlign="left">
                Tittel 2
              </Box>
            </AccordionItemTrigger>
          </h2>
          <AccordionItemContent pb={4}>Innhold 2</AccordionItemContent>
        </AccItem>
      </KvibAccordion>
    </Box>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: {
    id: {
      description: "Unique id for the AccordionItem.",
      table: {
        type: {
          summary: "string"
        }
      },
      control: "text"
    },
    isDisabled: {
      description: "If true, the AccordionItem will be disabled.",
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
    isFocusable: {
      description: "If true, the AccordionItem will be focusable.",
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
  args: {
    isDisabled: false,
    isFocusable: false
  },
  render: args => <KvibAccordion>
      <AccItem {...args}>
        <AccordionItemTrigger>Klikk meg</AccordionItemTrigger>
        <AccordionItemContent>Tekst skrift tekst</AccordionItemContent>
      </AccItem>
    </KvibAccordion>
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const x=["Preview","AccordionItem"],h=Object.freeze(Object.defineProperty({__proto__:null,AccordionItem:o,Preview:n,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{h as A,n as P,o as a};
