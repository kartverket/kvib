import{j as n}from"./index-D6_wGsWO.js";import{m as c,B as o,n as t,o as a,p as r}from"./index-D3uUSTz6.js";const m={title:"Komponenter/Accordion",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},e={argTypes:{allowMultiple:{description:"If true, multiple items can be expanded at once.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},allowToggle:{description:"If true, expanded items may be collapsed again.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},defaultIndex:{description:"Sets the initial index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},index:{description:"Sets the index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},onChange:{description:"Callback for when the accordion expands/collapses.",table:{type:{summary:"function"}},control:"boolean"},reduceMotion:{description:"If true, disables height animation and transition.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{allowMultiple:!0,allowToggle:!1,onChange:void 0},render:d=>n.jsx(o,{w:"100%",children:n.jsxs(c,{...d,children:[n.jsxs(t,{children:[n.jsx("h2",{children:n.jsx(a,{children:n.jsx(o,{as:"span",flex:"1",textAlign:"left",children:"Tittel 1"})})}),n.jsx(r,{children:"Innhold 1"})]}),n.jsxs(t,{children:[n.jsx("h2",{children:n.jsx(a,{children:n.jsx(o,{as:"span",flex:"1",textAlign:"left",children:"Tittel 2"})})}),n.jsx(r,{children:"Innhold 2"})]})]})})};var l,i,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
          <AccordionItemContent>Innhold 1</AccordionItemContent>
        </AccItem>
        <AccItem>
          <h2>
            <AccordionItemTrigger>
              <Box as="span" flex="1" textAlign="left">
                Tittel 2
              </Box>
            </AccordionItemTrigger>
          </h2>
          <AccordionItemContent>Innhold 2</AccordionItemContent>
        </AccItem>
      </KvibAccordion>
    </Box>
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const p=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{f as A,e as P};
