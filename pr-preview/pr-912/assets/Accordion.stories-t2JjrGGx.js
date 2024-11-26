import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as I}from"./index-CcKhGcwW.js";import{a as u}from"./index-BteWwxSb.js";import{H as T}from"./h-stack-CjVo9nnl.js";import{A as w,a as p,b as C,c as k,d as S,e as v}from"./accordion-B3ycaKJn.js";import{B as i}from"./box-C9nK2UO9.js";const l=I.forwardRef(function(r,a){const{children:A,indicatorPlacement:m="end",...j}=r;return e.jsxs(w,{...j,ref:a,children:[m==="start"&&e.jsx(p,{rotate:{base:"-90deg",_open:"0deg"},children:e.jsx(u,{})}),e.jsx(T,{gap:"4",flex:"1",textAlign:"start",width:"full",children:A}),m==="end"&&e.jsx(p,{children:e.jsx(u,{})})]})}),s=I.forwardRef(function(r,a){return e.jsx(C,{children:e.jsx(k,{...r,ref:a})})}),d=S,c=v,V={title:"Komponenter/Accordion",component:d,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},o={argTypes:{allowMultiple:{description:"If true, multiple items can be expanded at once.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},allowToggle:{description:"If true, expanded items may be collapsed again.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},defaultIndex:{description:"Sets the initial index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},index:{description:"Sets the index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},onChange:{description:"Callback for when the accordion expands/collapses.",table:{type:{summary:"function"}},control:"boolean"},reduceMotion:{description:"If true, disables height animation and transition.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{allowMultiple:!0,allowToggle:!1,onChange:void 0},render:n=>e.jsx(i,{w:"100%",children:e.jsxs(d,{...n,children:[e.jsxs(c,{children:[e.jsx("h2",{children:e.jsx(l,{children:e.jsx(i,{as:"span",flex:"1",textAlign:"left",children:"Tittel 1"})})}),e.jsx(s,{pb:4,children:"Innhold 1"})]}),e.jsxs(c,{children:[e.jsx("h2",{children:e.jsx(l,{children:e.jsx(i,{as:"span",flex:"1",textAlign:"left",children:"Tittel 2"})})}),e.jsx(s,{pb:4,children:"Innhold 2"})]})]})})},t={argTypes:{id:{description:"Unique id for the AccordionItem.",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the AccordionItem will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isFocusable:{description:"If true, the AccordionItem will be focusable.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{isDisabled:!1,isFocusable:!1},render:n=>e.jsx(d,{children:e.jsxs(c,{...n,children:[e.jsx(l,{children:"Klikk meg"}),e.jsx(s,{children:"Tekst skrift tekst"})]})})};var f,b,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,h,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const B=["Preview","AccordionItem"],$=Object.freeze(Object.defineProperty({__proto__:null,AccordionItem:t,Preview:o,__namedExportsOrder:B,default:V},Symbol.toStringTag,{value:"Module"}));export{$ as A,o as P,t as a};
