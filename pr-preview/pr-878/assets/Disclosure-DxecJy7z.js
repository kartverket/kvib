import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-jGWi2Blm.js";import{ae as D,ai as l}from"./index-Dpm_y2jR.js";import{F as b,b as d,D as v,a as c}from"./Feedback-C5qDF3ei.js";import{D as u}from"./DocsCanvas-BhnAGqOh.js";import{u as g}from"./use-disclosure-CdGn7wGE.js";import{B as k}from"./Button-B2mqI1u8.js";import{D as y,a as O}from"./drawer-content-Cw4SKXLs.js";import{M as C,a as P,b as B}from"./modal-overlay-BUyZrJgU.js";import{T as w}from"./text-rUwQV1v4.js";import{T as p,a,b as h,c as s,d as t,e as j,f as n}from"./tr-BOIJG77-.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DrNonXwl.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-B7h7acUJ.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./hooks-D04p5R0A.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./use-callback-ref-DA6UG1mJ.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./Icon-CZPPHOZr.js";/* empty css              */import"./slide-BKzKlc2C.js";import"./transition-utils-CnxNY5SP.js";import"./index-DVNvNJVv.js";import"./proxy-CQsau1XN.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./focusable-crJ8ziAt.js";import"./is-element-C52yPwBl.js";import"./call-all-DDzecCnU.js";import"./portal-BqZkrvYK.js";import"./fade-DIkg9ySx.js";const T=()=>{const{isOpen:o,onOpen:r,onClose:i}=g();return e.jsxs(u,{children:[e.jsx(k,{onClick:r,children:"Open Drawer"}),e.jsxs(y,{placement:"right",onClose:i,isOpen:o,children:[e.jsx(C,{}),e.jsxs(O,{children:[e.jsx(P,{borderBottomWidth:"1px",children:"Basic Drawer"}),e.jsxs(B,{children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})]})]})]})},M=()=>{const{getDisclosureProps:o,getButtonProps:r}=g(),i=r(),f=o();return e.jsxs(u,{children:[e.jsx(k,{...i,children:"Toggle Me"}),e.jsxs(w,{...f,mt:4,children:["This text is being visibly toggled hidden and shown by the button.",e.jsx("br",{}),"(Inspect these components to see the rendered attributes)"]})]})},S=`function Example() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}`,H=`function Basic() {
  const { getDisclosureProps, getButtonProps } = useDisclosure()

  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()
  return (
    <>
      <Button {...buttonProps}>Toggle Me</Button>
      <Text {...disclosureProps} mt={4}>
        This text is being visibly toggled hidden and shown by the button.
        <br />
        (Inspect these components to see the rendered attributes)
      </Text>
    </>
  )
}`;function x(o){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Hooks/useDisclosure"}),`
`,e.jsx(r.h1,{id:"usedisclosure",children:"useDisclosure"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useDisclosure"})," er en tilpasset hook som brukes for å hjelpe med å håndtere vanlige ",e.jsx(r.strong,{children:"open"}),", ",e.jsx(r.strong,{children:"close"})," eller ",e.jsx(r.strong,{children:"toggle"}),". Den kan brukes til å kontrollere tilbakemeldingskomponenter som ",e.jsx(r.strong,{children:"Modal"}),", ",e.jsx(r.strong,{children:"AlertDialog"}),", ",e.jsx(r.strong,{children:"Drawer"}),", osv."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useDisclosure } from "@kvib/react";
`})}),`
`,e.jsx(b,{component:"useDisclosure"}),`
`,e.jsx(d,{light:!0,children:"Return value"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useDisclosure"})," hook returnerer et objekt med følgende felter:"]}),`
`,e.jsx(p,{children:e.jsxs(a,{children:[e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Type"}),e.jsx(t,{children:"Default"}),e.jsx(t,{children:"Description"})]})}),e.jsxs(j,{children:[e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"isOpen"})}),e.jsx(n,{children:e.jsx("code",{children:"boolean"})}),e.jsx(n,{children:e.jsx("code",{children:"false"})}),e.jsxs(n,{children:["Hvis ",e.jsx(r.strong,{children:"true"}),", setter det den kontrollerte komponenten til sin synlige tilstand."]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"onClose"})}),e.jsx(n,{children:e.jsx("code",{children:"function"})}),e.jsx(n,{children:e.jsx("code",{})}),e.jsxs(n,{children:["Callback-funksjon for å sette ",e.jsx(r.strong,{children:"isOpen"}),"-parameteren til false."]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"onOpen"})}),e.jsx(n,{children:e.jsx("code",{children:"function"})}),e.jsx(n,{children:e.jsx("code",{})}),e.jsxs(n,{children:["Callback-funksjon for å sette ",e.jsx(r.strong,{children:"isOpen"}),"-parameteren til true."]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"onToggle"})}),e.jsx(n,{children:e.jsx("code",{children:"function"})}),e.jsx(n,{children:e.jsx("code",{})}),e.jsxs(n,{children:["Callback-funksjon for å bytte verdien av ",e.jsx(r.strong,{children:"isOpen"}),"-parameteren."]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"getDisclosureProps"})}),e.jsx(n,{children:e.jsx("code",{children:"function"})}),e.jsx(n,{children:e.jsx("code",{})}),e.jsx(n,{children:"Callback-funksjon for å hente en rekke egenskaper (props) for den kontrollerte komponenten."})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"getButtonProps"})}),e.jsx(n,{children:e.jsx("code",{children:"function"})}),e.jsx(n,{children:e.jsx("code",{})}),e.jsx(n,{children:"Callback-funksjon for å hente en rekke egenskaper (props) for knappen som utløser visningen (disclosure)."})]})]})]})}),`
`,e.jsxs(v,{children:[e.jsx(c,{title:"Bruk",description:`Du kan bruke en kombinasjon av metodene og verdiene som returneres av hooken for å styre ulike komponenter påvirket av avsløringen.
Nedenfor er bruken av returnerte felt fra hooken uten en hentefunksjon for å styre Drawer-komponenten ved knappetoggling.`,story:e.jsx(T,{})}),e.jsx(l,{code:S,dark:!0}),e.jsxs(r.p,{children:["Ved å bruke metodene ",e.jsx(r.strong,{children:"getDisclosureProps"})," og ",e.jsx(r.strong,{children:"getButtonProps"})," som returneres av hooken, får du nødvendige attributter og hendler til den respektive komponenten og knappen for synlighetstoggling og tilgjengelighet."]}),e.jsxs(r.p,{children:["Komponenten som bruker ",e.jsx(r.strong,{children:"getDisclosureProps"})," mottar følgende egenskaper (props):"]}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["En ",e.jsx(r.strong,{children:"id"})," (kan valgfritt passere denne som en prop til hooken for å rendere en tilpasset verdi)."]}),`
`,e.jsxs(r.li,{children:["Et dynamisk rendret ",e.jsx(r.strong,{children:"hidden"}),` attributt.
`,e.jsx(r.strong,{children:"getDisclosureProps"}),' kan direkte akseptere eventuelle ekstra props for komponenten."']}),`
`]}),e.jsxs(r.p,{children:["Knappen som bruker ",e.jsx(r.strong,{children:"getButtonProps"})," for toggling mottar følgende egenskaper (props):"]}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Dynamisk rendret ",e.jsx(r.strong,{children:"aria-expanded"})," attributt for å informere en skjermleser om hvorvidt avsløringskomponenten er synlig."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"aria-controls"})," attributtet bruker ",e.jsx(r.strong,{children:"id"})," (kan valgfritt passere ",e.jsx(r.strong,{children:"id"})," som en prop til hooken for å rendere en tilpasset verdi). Dette forteller en skjermleser hvilken komponent som kontrolleres av knappen."]}),`
`,e.jsxs(r.li,{children:["En onClick-handler som bruker ",e.jsx(r.strong,{children:"onToggle"})," callback sammen med eventuelle andre click events som passerer som en ",e.jsx(r.strong,{children:"onClick"}),"-prop til ",e.jsx(r.strong,{children:"getButtonProps"}),"."]}),`
`]}),e.jsx(c,{title:"",description:"getButtonProps kan også direkte akseptere eventuelle ekstra props for knappen.",story:e.jsx(M,{})}),e.jsx(l,{code:H,dark:!0})]}),`
`,e.jsxs(r.p,{children:[e.jsx(d,{light:!0,children:"Parametere"}),`
`,e.jsx(r.strong,{children:"useDisclosure"})," hooken aksepterer et valgfritt objekt med følgende egenskaper:"]}),`
`,e.jsx(p,{children:e.jsxs(a,{children:[e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(t,{children:"Parameter"}),e.jsx(t,{children:"Type"}),e.jsx(t,{children:"Description"})]})}),e.jsxs(j,{children:[e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"isOpen (Optional)"})}),e.jsx(n,{children:e.jsx("code",{children:"boolean"})}),e.jsx(n,{children:"Hvis true, er den kontrollerte komponenten ansvarlig for å endre synlighetstilstanden via onClose- og onOpen-egenskapene."})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"defaultIsOpen (Optional)"})}),e.jsx(n,{children:e.jsx("code",{children:"boolean"})}),e.jsx(n,{children:"Hvis true, setter initialt den kontrollerte komponenten til sin synlige tilstand."})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"onClose (Optional)"})}),e.jsx(n,{children:e.jsx("code",{children:"function"})}),e.jsx(n,{children:"Funksjon for å sette isOpen-parameteren til false."})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"onOpen (Optional)"})}),e.jsx(n,{children:e.jsx("code",{children:"function"})}),e.jsx(n,{children:"Funksjon for å sette isOpen-parameteren til true."})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx("code",{children:"id (Optional)"})}),e.jsx(n,{children:e.jsx("code",{children:"string"})}),e.jsx(n,{children:"Streng som lar deg knytte avsløringsstatusen til en bestemt komponent eller element på siden din."})]})]})]})})]})}function Ye(o={}){const{wrapper:r}={...m(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(x,{...o})}):x(o)}export{Ye as default};
