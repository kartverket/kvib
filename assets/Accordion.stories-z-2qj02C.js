import{j as e}from"./extends-CwFRzn3r.js";import{c as se}from"./chunk-OCNORRQU-DESonMht.js";import{c as O}from"./index-CHDWSgKD.js";import{u as ae}from"./index-DjrpCY14.js";import{m as le}from"./index-Bdxaq0s4.js";import{f as E,c as T,a as _,e as F,w as B,o as ie}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{r as f}from"./index-BwDkhjyp.js";import{a as ce}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{C as de}from"./chunk-RKXMPHPI-CPdQsr-a.js";var[ue,V]=O({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[me,ne]=O({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[fe,Be,pe,ge]=se(),h=E(function(o,t){const{getButtonProps:a}=ne(),c=a(o,t),r={display:"flex",alignItems:"center",width:"100%",outline:0,...V().button};return e.jsx(T.button,{...c,className:_("chakra-accordion__button",o.className),__css:r})});h.displayName="AccordionButton";function be(n){const{onChange:o,defaultIndex:t,index:a,allowMultiple:c,allowToggle:d,...r}=n;he(n),ye(n);const A=pe(),[g,i]=f.useState(-1);f.useEffect(()=>()=>{i(-1)},[]);const[l,u]=ae({value:a,defaultValue(){return c?t??[]:t??-1},onChange:o});return{index:l,setIndex:u,htmlProps:r,getAccordionItemProps:s=>{let k=!1;return s!==null&&(k=Array.isArray(l)?l.includes(s):l===s),{isOpen:k,onChange:p=>{if(s!==null)if(c&&Array.isArray(l)){const N=p?l.concat(s):l.filter(K=>K!==s);u(N)}else p?u(s):d&&u(-1)}}},focusedIndex:g,setFocusedIndex:i,descendants:A}}var[Ae,oe]=O({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function ke(n){const{isDisabled:o,isFocusable:t,id:a,...c}=n,{getAccordionItemProps:d,setFocusedIndex:r}=oe(),A=f.useRef(null),g=f.useId(),i=a??g,l=`accordion-button-${i}`,u=`accordion-panel-${i}`;xe(n);const{register:I,index:s,descendants:k}=ge({disabled:o&&!t}),{isOpen:b,onChange:p}=d(s===-1?null:s);ve({isOpen:b,isDisabled:o});const N=()=>{p==null||p(!0)},K=()=>{p==null||p(!1)},R=f.useCallback(()=>{p==null||p(!b),r(s)},[s,r,b,p]),$=f.useCallback(P=>{const j={ArrowDown:()=>{const m=k.nextEnabled(s);m==null||m.node.focus()},ArrowUp:()=>{const m=k.prevEnabled(s);m==null||m.node.focus()},Home:()=>{const m=k.firstEnabled();m==null||m.node.focus()},End:()=>{const m=k.lastEnabled();m==null||m.node.focus()}}[P.key];j&&(P.preventDefault(),j(P))},[k,s]),H=f.useCallback(()=>{r(s)},[r,s]),te=f.useCallback(function(v={},j=null){return{...v,type:"button",ref:le(I,A,j),id:l,disabled:!!o,"aria-expanded":!!b,"aria-controls":u,onClick:F(v.onClick,R),onFocus:F(v.onFocus,H),onKeyDown:F(v.onKeyDown,$)}},[l,o,b,R,H,$,u,I]),re=f.useCallback(function(v={},j=null){return{...v,ref:j,role:"region",id:u,"aria-labelledby":l,hidden:!b}},[l,b,u]);return{isOpen:b,isDisabled:o,isFocusable:t,onOpen:N,onClose:K,getButtonProps:te,getPanelProps:re,htmlProps:c}}function he(n){const o=n.index||n.defaultIndex,t=o!=null&&!Array.isArray(o)&&n.allowMultiple;B({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof o},`})}function ye(n){B({condition:!!(n.allowMultiple&&n.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function xe(n){B({condition:!!(n.isFocusable&&!n.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function ve(n){B({condition:n.isOpen&&!!n.isDisabled,message:"Cannot open a disabled accordion item"})}var y=E(function(o,t){const{children:a,className:c}=o,{htmlProps:d,...r}=ke(o),g={...V().container,overflowAnchor:"none"},i=f.useMemo(()=>r,[r]);return e.jsx(me,{value:i,children:e.jsx(T.div,{ref:t,...d,className:_("chakra-accordion__item",c),__css:g,children:typeof a=="function"?a({isExpanded:!!r.isOpen,isDisabled:!!r.isDisabled}):a})})});y.displayName="AccordionItem";var x=E(function(o,t){const{className:a,motionProps:c,...d}=o,{reduceMotion:r}=oe(),{getPanelProps:A,isOpen:g}=ne(),i=A(d,t),l=_("chakra-accordion__panel",a),u=V();r||delete i.hidden;const I=e.jsx(T.div,{...i,__css:u.panel,className:l});return r?I:e.jsx(de,{in:g,...c,children:I})});x.displayName="AccordionPanel";var w=E(function({children:o,reduceMotion:t,...a},c){const d=ce("Accordion",a),r=ie(a),{htmlProps:A,descendants:g,...i}=be(r),l=f.useMemo(()=>({...i,reduceMotion:!!t}),[i,t]);return e.jsx(fe,{value:g,children:e.jsx(Ae,{value:l,children:e.jsx(ue,{value:d,children:e.jsx(T.div,{ref:c,...A,className:_("chakra-accordion",a.className),__css:d.root,children:o})})})})});w.displayName="Accordion";const Ie={title:"Datavisning/Accordion",component:w,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},C={argTypes:{allowMultiple:{description:"If true, multiple items can be expanded at once.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},allowToggle:{description:"If true, expanded items may be collapsed again.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},defaultIndex:{description:"Sets the initial index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},index:{description:"Sets the index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},onChange:{description:"Callback for when the accordion expands/collapses.",table:{type:{summary:"function"}},control:"boolean"},reduceMotion:{description:"If true, disables height animation and transition.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}},args:{allowMultiple:!0,allowToggle:!1,onChange:void 0},render:n=>e.jsxs(w,{...n,children:[e.jsxs(y,{children:[e.jsx(h,{children:"Tittel 1"}),e.jsx(x,{children:"Innhold 1"})]}),e.jsxs(y,{children:[e.jsx(h,{children:"Tittel 2"}),e.jsx(x,{children:"Innhold 2"})]})]})},M={argTypes:{id:{description:"Unique id for the AccordionItem.",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the AccordionItem will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isFocusable:{description:"If true, the AccordionItem will be focusable.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}},args:{isDisabled:!1,isFocusable:!1},render:n=>e.jsx(w,{children:e.jsxs(y,{...n,children:[e.jsx(h,{children:"Klikk meg"}),e.jsx(x,{children:"Tekst skrift tekst"})]})})},D={args:{allowMultiple:!0},render:n=>e.jsxs(w,{...n,children:[e.jsxs(y,{children:[e.jsx(h,{children:"Hvordan søker jeg?"}),e.jsxs(x,{children:['Du kan søke opp en eiendom ved å bruke eiendommens adresse eller matrikkelnummer. Søket starter når du har skrevet inn minst tre tegn. Er du usikker på skrivemåten skriver du så langt du er sikker. For å snevre inn antall treff, kan du fylle ut feltet for "Sted". Et matrikkelnummer består av tall i følgende rekkefølge: kommunenummer, gårdsnummer, bruksnummer, festenummer, seksjonsnummer.'," "]})]}),e.jsxs(y,{children:[e.jsx(h,{children:"Kan jeg se informasjon om andre eiendommer enn min egen?"}),e.jsx(x,{children:"Ja. Eiendomsdata fra grunnbok og matrikkel er, med få unntak, tilgjengelig for alle. Det vil si at du kan søke på hvilken som helst eiendom, og logge inn for å se en utskrift fra grunnboken. Informasjonen er offentlig tilgjengelig og grunneier eller andre parter blir ikke varslet dersom det blir gjort søk på eiendommen."})]})]})},S={args:{reduceMotion:!0},render:n=>e.jsxs(w,{...n,children:[e.jsxs(y,{children:[e.jsx(h,{children:"Overskrift 1"}),e.jsx(x,{children:"Eksempel 1"})]}),e.jsxs(y,{children:[e.jsx(h,{children:"Overskrift 2"}),e.jsx(x,{children:"Eksempel 2"})]})]})};var U,W,q;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(W=C.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var J,z,Y;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(z=M.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var G,L,Q;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(L=D.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const je=["Accordion","AccordionItem","AccordionAllowMultiple","AccordionReduceMotion"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Accordion:C,AccordionAllowMultiple:D,AccordionItem:M,AccordionReduceMotion:S,__namedExportsOrder:je,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Ne as A,D as a,S as b,C as c,M as d};
