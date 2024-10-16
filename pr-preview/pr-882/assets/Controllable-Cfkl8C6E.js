import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-Dc-La3jU.js";import{ai as u,ae as c}from"./index-DR90DzL6.js";import{F as x,a as s}from"./Feedback-BlMxi5Tq.js";import{R as k}from"./index-BwDkhjyp.js";import{D as p}from"./DocsCanvas-BhnAGqOh.js";import{u as d}from"./use-controllable-state-Dnial3e2.js";import{B as o}from"./box-B7h7acUJ.js";import{B as n}from"./Button-eZkbEJsU.js";import"./iframe-DNTp-SgB.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./hooks-D04p5R0A.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-rUwQV1v4.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./use-callback-ref-DA6UG1mJ.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./Icon-LAcu_LZm.js";/* empty css              */const h=`function Example() {
  const [value, setValue] = useControllableState({ defaultValue: 40 })
  return (
    <div>
      <Button onClick={() => setValue(value + 1)}>+</Button>
      <Box as='span' w='200px' mx='24px'>
        {value}
      </Box>
      <Button onClick={() => setValue(value - 1)}>-</Button>
    </div>
  )
}`,j=`function Example() {
  // you need a state and updater to change the value
  const [value, setValue] = React.useState(40)

  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  })

  return (
    <div>
      <Button onClick={() => setInternalValue(value + 1)}>+</Button>
      <Box as='span' w='200px' mx='24px'>
        {internalValue}
      </Box>
      <Button onClick={() => setInternalValue(value - 1)}>-</Button>
    </div>
  )
}`,g=()=>{const[r,t]=d({defaultValue:40});return e.jsxs(p,{children:[e.jsxs(o,{children:[e.jsx(n,{onClick:()=>t(r+1),children:"+"}),e.jsx(o,{as:"span",w:"200px",mx:"24px",children:r}),e.jsx(n,{onClick:()=>t(r-1),children:"-"})]}),e.jsx(u,{code:h,dark:!0})]})},v=()=>{const[r,t]=k.useState(40),[m,l]=d({value:r,onChange:t});return e.jsxs(p,{rowGap:"1rem",children:[e.jsxs(o,{children:[e.jsx(n,{onClick:()=>l(r+1),children:"+"}),e.jsx(o,{as:"span",w:"200px",mx:"24px",children:m}),e.jsx(n,{onClick:()=>l(r-1),children:"-"})]}),e.jsx(u,{code:j,dark:!0})]})};function a(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Hooks/useControllable"}),`
`,e.jsx(t.h1,{id:"usecontrollable",children:"useControllable"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useControllable"}),` React-hook som lar hvilken som helst komponent håndtere kontrollerte og ukontrollerte modi, og gir kontroll over sin interne tilstand.
De fleste Chakra-komponentene bruker useControllableState for sømløst å håndtere både kontrollerte og ukontrollerte tilstandsscenarioer.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { useControllable } from "@kvib/react";
`})}),`
`,e.jsx(x,{component:"useControllable"}),`
`,e.jsx(t.h2,{id:"usecontrollableprop",children:"useControllableProp"}),`
`,e.jsxs(t.p,{children:["Gitt en egenskapsverdi (prop value) og en tilstandsverdi (state value), brukes ",e.jsx(t.strong,{children:"useControllableProp"}),"-hooken til å avgjøre om en komponent er kontrollert eller ukontrollert, og returnerer også den beregnede verdien."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Den returnerer egenskapsverdien hvis komponenten er kontrollert."}),`
`,e.jsx(t.li,{children:"Den returnerer tilstandsverdien hvis komponenten er ukontrollert."}),`
`]}),`
`,e.jsx(t.h3,{id:"bruk",children:"Bruk"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const [isControlled, value] = useControllableProp(propValue, stateValue)
`})}),`
`,e.jsx(t.h2,{id:"usecontrollablestate",children:"useControllableState"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useControllableState"})," returnerer tilstanden og funksjonen som oppdaterer tilstanden, akkurat som ",e.jsx(t.strong,{children:"React.useState"})," gjør."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const [value, setValue] = useControllableState(options)
`})}),`
`,e.jsx(t.h3,{id:"bruk-1",children:"Bruk"}),`
`,e.jsx(s,{title:"",description:`Med useControllableState kan du sende en initiell tilstand (ved å bruke defaultValue), som antyder at komponenten er ukontrollert, eller du kan sende en kontrollert verdi (ved å bruke value), som antyder at komponenten er kontrollert.
Her er et eksempel på en ukontrollert tilstand:`,isVertical:!0,story:e.jsx(g,{})}),`
`,e.jsx(s,{title:"",description:"Her er et eksempel på en kontrollert tilstand:",isVertical:!0,story:e.jsx(v,{})}),`
`,e.jsx(t.h2,{id:"kontekstuell-tilbakemelding-og-tilstandsoppdateringer",children:"Kontekstuell tilbakemelding og tilstandsoppdateringer"}),`
`,e.jsx(t.p,{children:"Dette hooket gir nyttige feil- eller advarselmeldinger når du bytter mellom kontrollerte og ukontrollerte moduser, eller når du prøver å oppdatere den sendte defaultValue."})]})}function Be(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{Be as default};
