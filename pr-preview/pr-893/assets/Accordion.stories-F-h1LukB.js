import{j as e}from"./extends-CwFRzn3r.js";import{r as p}from"./index-BwDkhjyp.js";import{c as ce}from"./use-descendant-T3UBTUZf.js";import{c as H}from"./context-CBKykClo.js";import{u as ie}from"./use-controllable-state-Dnial3e2.js";import{m as le}from"./use-merge-refs-Bdxaq0s4.js";import{c as F}from"./call-all-DDzecCnU.js";import{w as _,C as de}from"./collapse-COg_KG7i.js";import{f as N}from"./forward-ref-BWI-Phbn.js";import{a as ue,o as me}from"./use-style-config-C4sZEIFb.js";import{c as E}from"./factory-lWLPzty5.js";import{c as S}from"./cx-BDMMs1jM.js";import{d as fe}from"./define-styles-BSAHv3yx.js";import{I as pe}from"./icon-BO-EX8Jp.js";import{B as V}from"./box-Cs-tJ6EH.js";const[ge,T]=H({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[be,U]=H({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[Ae,We,xe,he]=ce();function ke(n){const{onChange:o,defaultIndex:r,index:s,allowMultiple:l,allowToggle:d,...t}=n;je(n),ve(n);const g=xe(),[b,u]=p.useState(-1);p.useEffect(()=>()=>{u(-1)},[]);const[c,f]=ie({value:s,defaultValue(){return l?r??[]:r??-1},onChange:o});return{index:c,setIndex:f,htmlProps:t,getAccordionItemProps:a=>{let x=!1;return a!==null&&(x=Array.isArray(c)?c.includes(a):c===a),{isOpen:x,onChange:m=>{if(a!==null)if(l&&Array.isArray(c)){const K=m?c.concat(a):c.filter(O=>O!==a);f(K)}else m?f(a):d&&f(-1)}}},focusedIndex:b,setFocusedIndex:u,descendants:g}}const[ye,$]=H({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function Ie(n){const{isDisabled:o,isFocusable:r,id:s,...l}=n,{getAccordionItemProps:d,setFocusedIndex:t}=$(),g=p.useRef(null),b=p.useId(),u=s??b,c=`accordion-button-${u}`,f=`accordion-panel-${u}`;we(n);const{register:j,index:a,descendants:x}=he({disabled:o&&!r}),{isOpen:A,onChange:m}=d(a===-1?null:a);Pe({isOpen:A,isDisabled:o});const K=()=>{m==null||m(!0)},O=()=>{m==null||m(!1)},W=p.useCallback(()=>{m==null||m(!A),t(a)},[a,t,A,m]),q=p.useCallback(P=>{const v={ArrowDown:()=>{const i=x.nextEnabled(a);i==null||i.node.focus()},ArrowUp:()=>{const i=x.prevEnabled(a);i==null||i.node.focus()},Home:()=>{const i=x.firstEnabled();i==null||i.node.focus()},End:()=>{const i=x.lastEnabled();i==null||i.node.focus()}}[P.key];v&&(P.preventDefault(),v(P))},[x,a]),z=p.useCallback(()=>{t(a)},[t,a]),se=p.useCallback(function(I={},v=null){return{...I,type:"button",ref:le(j,g,v),id:c,disabled:!!o,"aria-expanded":!!A,"aria-controls":f,onClick:F(I.onClick,W),onFocus:F(I.onFocus,z),onKeyDown:F(I.onKeyDown,q)}},[c,o,A,W,z,q,f,j]),ae=p.useCallback(function(I={},v=null){return{...I,ref:v,role:"region",id:f,"aria-labelledby":c,hidden:!A}},[c,A,f]);return{isOpen:A,isDisabled:o,isFocusable:r,onOpen:K,onClose:O,getButtonProps:se,getPanelProps:ae,htmlProps:l}}function je(n){const o=n.index||n.defaultIndex,r=o!=null&&!Array.isArray(o)&&n.allowMultiple;_({condition:!!r,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof o},`})}function ve(n){_({condition:!!(n.allowMultiple&&n.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function we(n){_({condition:!!(n.isFocusable&&!n.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function Pe(n){_({condition:n.isOpen&&!!n.isDisabled,message:"Cannot open a disabled accordion item"})}const w=N(function({children:o,reduceMotion:r,...s},l){const d=ue("Accordion",s),t=me(s),{htmlProps:g,descendants:b,...u}=ke(t),c=p.useMemo(()=>({...u,reduceMotion:!!r}),[u,r]);return e.jsx(Ae,{value:b,children:e.jsx(ye,{value:c,children:e.jsx(ge,{value:d,children:e.jsx(E.div,{ref:l,...g,className:S("chakra-accordion",s.className),__css:d.root,children:o})})})})});w.displayName="Accordion";const h=N(function(o,r){const{getButtonProps:s}=U(),l=s(o,r),t={display:"flex",alignItems:"center",width:"100%",outline:0,...T().button};return e.jsx(E.button,{...l,className:S("chakra-accordion__button",o.className),__css:t})});h.displayName="AccordionButton";function R(n){const{isOpen:o,isDisabled:r}=U(),{reduceMotion:s}=$(),l=S("chakra-accordion__icon",n.className),d=T(),t={opacity:r?.4:1,transform:o?"rotate(-180deg)":void 0,transition:s?void 0:"transform 0.2s",transformOrigin:"center",...d.icon};return e.jsx(pe,{viewBox:"0 0 24 24","aria-hidden":!0,className:l,__css:t,...n,children:e.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}R.displayName="AccordionIcon";const k=N(function(o,r){const{children:s,className:l}=o,{htmlProps:d,...t}=Ie(o),g=T(),b=fe({...g.container,overflowAnchor:"none"}),u=p.useMemo(()=>t,[t]);return e.jsx(be,{value:u,children:e.jsx(E.div,{ref:r,...d,className:S("chakra-accordion__item",l),__css:b,children:typeof s=="function"?s({isExpanded:!!t.isOpen,isDisabled:!!t.isDisabled}):s})})});k.displayName="AccordionItem";const y=N(function(o,r){const{className:s,motionProps:l,...d}=o,{reduceMotion:t}=$(),{getPanelProps:g,isOpen:b}=U(),u=g(d,r),c=S("chakra-accordion__panel",s),f=T();t||delete u.hidden;const j=e.jsx(E.div,{...u,__css:f.panel,className:c});return t?j:e.jsx(de,{in:b,...l,children:j})});y.displayName="AccordionPanel";const Me={title:"Komponenter/Accordion",component:w,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},M={argTypes:{allowMultiple:{description:"If true, multiple items can be expanded at once.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},allowToggle:{description:"If true, expanded items may be collapsed again.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},defaultIndex:{description:"Sets the initial index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},index:{description:"Sets the index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},onChange:{description:"Callback for when the accordion expands/collapses.",table:{type:{summary:"function"}},control:"boolean"},reduceMotion:{description:"If true, disables height animation and transition.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{allowMultiple:!0,allowToggle:!1,onChange:void 0},render:n=>e.jsx(V,{w:"100%",children:e.jsxs(w,{...n,children:[e.jsxs(k,{children:[e.jsx("h2",{children:e.jsxs(h,{children:[e.jsx(V,{as:"span",flex:"1",textAlign:"left",children:"Tittel 1"}),e.jsx(R,{})]})}),e.jsx(y,{pb:4,children:"Innhold 1"})]}),e.jsxs(k,{children:[e.jsx("h2",{children:e.jsxs(h,{children:[e.jsx(V,{as:"span",flex:"1",textAlign:"left",children:"Tittel 2"}),e.jsx(R,{})]})}),e.jsx(y,{pb:4,children:"Innhold 2"})]})]})})},C={argTypes:{id:{description:"Unique id for the AccordionItem.",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the AccordionItem will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isFocusable:{description:"If true, the AccordionItem will be focusable.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{isDisabled:!1,isFocusable:!1},render:n=>e.jsx(w,{children:e.jsxs(k,{...n,children:[e.jsx(h,{children:"Klikk meg"}),e.jsx(y,{children:"Tekst skrift tekst"})]})})},B={args:{allowMultiple:!0},render:n=>e.jsxs(w,{...n,children:[e.jsxs(k,{children:[e.jsx(h,{children:"Hvordan søker jeg?"}),e.jsxs(y,{children:['Du kan søke opp en eiendom ved å bruke eiendommens adresse eller matrikkelnummer. Søket starter når du har skrevet inn minst tre tegn. Er du usikker på skrivemåten skriver du så langt du er sikker. For å snevre inn antall treff, kan du fylle ut feltet for "Sted". Et matrikkelnummer består av tall i følgende rekkefølge: kommunenummer, gårdsnummer, bruksnummer, festenummer, seksjonsnummer.'," "]})]}),e.jsxs(k,{children:[e.jsx(h,{children:"Kan jeg se informasjon om andre eiendommer enn min egen?"}),e.jsx(y,{children:"Ja. Eiendomsdata fra grunnbok og matrikkel er, med få unntak, tilgjengelig for alle. Det vil si at du kan søke på hvilken som helst eiendom, og logge inn for å se en utskrift fra grunnboken. Informasjonen er offentlig tilgjengelig og grunneier eller andre parter blir ikke varslet dersom det blir gjort søk på eiendommen."})]})]})},D={args:{reduceMotion:!0},render:n=>e.jsxs(w,{...n,children:[e.jsxs(k,{children:[e.jsx(h,{children:"Overskrift 1"}),e.jsx(y,{children:"Eksempel 1"})]}),e.jsxs(k,{children:[e.jsx(h,{children:"Overskrift 2"}),e.jsx(y,{children:"Eksempel 2"})]})]})};var J,L,Y;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Tittel 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Innhold 1</AccordionPanel>
        </AccItem>
        <AccItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Tittel 2
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Innhold 2</AccordionPanel>
        </AccItem>
      </KvibAccordion>
    </Box>
}`,...(Y=(L=M.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var G,Q,X;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        <AccordionButton>Klikk meg</AccordionButton>
        <AccordionPanel>Tekst skrift tekst</AccordionPanel>
      </AccItem>
    </KvibAccordion>
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,te,re;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(te=D.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Ce=["Preview","AccordionItem","AccordionAllowMultiple","AccordionReduceMotion"],qe=Object.freeze(Object.defineProperty({__proto__:null,AccordionAllowMultiple:B,AccordionItem:C,AccordionReduceMotion:D,Preview:M,__namedExportsOrder:Ce,default:Me},Symbol.toStringTag,{value:"Module"}));export{qe as A,M as P,B as a,D as b,C as c};
