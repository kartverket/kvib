import{j as e}from"./extends-CwFRzn3r.js";import{A as c,a as r,b as o,c as t}from"./accordion-panel-U-Dx977K.js";const j={title:"Datavisning/Accordion",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},a={argTypes:{allowMultiple:{description:"If true, multiple items can be expanded at once.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},allowToggle:{description:"If true, expanded items may be collapsed again.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},defaultIndex:{description:"Sets the initial index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},index:{description:"Sets the index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},onChange:{description:"Callback for when the accordion expands/collapses.",table:{type:{summary:"function"}},control:"boolean"},reduceMotion:{description:"If true, disables height animation and transition.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}},args:{allowMultiple:!0,allowToggle:!1,onChange:void 0},render:n=>e.jsxs(c,{...n,children:[e.jsxs(r,{children:[e.jsx(o,{children:"Tittel 1"}),e.jsx(t,{children:"Innhold 1"})]}),e.jsxs(r,{children:[e.jsx(o,{children:"Tittel 2"}),e.jsx(t,{children:"Innhold 2"})]})]})},i={argTypes:{id:{description:"Unique id for the AccordionItem.",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the AccordionItem will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isFocusable:{description:"If true, the AccordionItem will be focusable.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}},args:{isDisabled:!1,isFocusable:!1},render:n=>e.jsx(c,{children:e.jsxs(r,{...n,children:[e.jsx(o,{children:"Klikk meg"}),e.jsx(t,{children:"Tekst skrift tekst"})]})})},s={args:{allowMultiple:!0},render:n=>e.jsxs(c,{...n,children:[e.jsxs(r,{children:[e.jsx(o,{children:"Hvordan søker jeg?"}),e.jsxs(t,{children:['Du kan søke opp en eiendom ved å bruke eiendommens adresse eller matrikkelnummer. Søket starter når du har skrevet inn minst tre tegn. Er du usikker på skrivemåten skriver du så langt du er sikker. For å snevre inn antall treff, kan du fylle ut feltet for "Sted". Et matrikkelnummer består av tall i følgende rekkefølge: kommunenummer, gårdsnummer, bruksnummer, festenummer, seksjonsnummer.'," "]})]}),e.jsxs(r,{children:[e.jsx(o,{children:"Kan jeg se informasjon om andre eiendommer enn min egen?"}),e.jsx(t,{children:"Ja. Eiendomsdata fra grunnbok og matrikkel er, med få unntak, tilgjengelig for alle. Det vil si at du kan søke på hvilken som helst eiendom, og logge inn for å se en utskrift fra grunnboken. Informasjonen er offentlig tilgjengelig og grunneier eller andre parter blir ikke varslet dersom det blir gjort søk på eiendommen."})]})]})},l={args:{reduceMotion:!0},render:n=>e.jsxs(c,{...n,children:[e.jsxs(r,{children:[e.jsx(o,{children:"Overskrift 1"}),e.jsx(t,{children:"Eksempel 1"})]}),e.jsxs(r,{children:[e.jsx(o,{children:"Overskrift 2"}),e.jsx(t,{children:"Eksempel 2"})]})]})};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: {
    allowMultiple: {
      description: "If true, multiple items can be expanded at once.",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: false
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
          summary: false
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
          summary: false
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
  render: args => <KvibAccordion {...args}>
      <AccItem>
        <AccordionButton>Tittel 1</AccordionButton>
        <AccordionPanel>Innhold 1</AccordionPanel>
      </AccItem>
      <AccItem>
        <AccordionButton>Tittel 2</AccordionButton>
        <AccordionPanel>Innhold 2</AccordionPanel>
      </AccItem>
    </KvibAccordion>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          summary: false
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
          summary: false
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
        <AccordionButton>Klikk meg</AccordionButton>
        <AccordionPanel>Tekst skrift tekst</AccordionPanel>
      </AccItem>
    </KvibAccordion>
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,k,A;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    allowMultiple: true
  },
  render: args => <KvibAccordion {...args}>
      <AccItem>
        <AccordionButton>Hvordan søker jeg?</AccordionButton>
        <AccordionPanel>
          Du kan søke opp en eiendom ved å bruke eiendommens adresse eller matrikkelnummer. Søket starter når du har
          skrevet inn minst tre tegn. Er du usikker på skrivemåten skriver du så langt du er sikker. For å snevre inn
          antall treff, kan du fylle ut feltet for "Sted". Et matrikkelnummer består av tall i følgende rekkefølge:
          kommunenummer, gårdsnummer, bruksnummer, festenummer, seksjonsnummer.{" "}
        </AccordionPanel>
      </AccItem>
      <AccItem>
        <AccordionButton>Kan jeg se informasjon om andre eiendommer enn min egen?</AccordionButton>
        <AccordionPanel>
          Ja. Eiendomsdata fra grunnbok og matrikkel er, med få unntak, tilgjengelig for alle. Det vil si at du kan søke
          på hvilken som helst eiendom, og logge inn for å se en utskrift fra grunnboken. Informasjonen er offentlig
          tilgjengelig og grunneier eller andre parter blir ikke varslet dersom det blir gjort søk på eiendommen.
        </AccordionPanel>
      </AccItem>
    </KvibAccordion>
}`,...(A=(k=s.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var h,y,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    reduceMotion: true
  },
  render: args => <KvibAccordion {...args}>
      <AccItem>
        <AccordionButton>Overskrift 1</AccordionButton>
        <AccordionPanel>Eksempel 1</AccordionPanel>
      </AccItem>
      <AccItem>
        <AccordionButton>Overskrift 2</AccordionButton>
        <AccordionPanel>Eksempel 2</AccordionPanel>
      </AccItem>
    </KvibAccordion>
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const I=["Preview","AccordionItem","AccordionAllowMultiple","AccordionReduceMotion"],P=Object.freeze(Object.defineProperty({__proto__:null,AccordionAllowMultiple:s,AccordionItem:i,AccordionReduceMotion:l,Preview:a,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{P as A,a as P,s as a,l as b,i as c};
