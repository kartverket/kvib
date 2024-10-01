import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-78_OWoNk.js";import{ai as u,ae as c}from"./index-B_29rcGw.js";import{F as x,a as s}from"./Feedback-DEYXld9b.js";import{R as k}from"./index-BwDkhjyp.js";import{D as p}from"./DocsCanvas-C63K8Gif.js";import{a as d}from"./chunk-7JSBRQFI-ZG6s8cg4.js";import{B as n}from"./chunk-PULVB27S-CgiffgmI.js";import{B as o}from"./Button-BTrFsz-j.js";import"./iframe-IMCsqiBJ.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./Card-BeZB5sUt.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./index-2ZXUntH3.js";import"./chunk-KA2477BY-BRr71Die.js";import"./chunk-724WJZW4-D7beLSYm.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./Icon-Bw1o7Ynw.js";/* empty css              */const h=`function Example() {
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
}`,g=()=>{const[r,t]=d({defaultValue:40});return e.jsxs(p,{children:[e.jsxs(n,{children:[e.jsx(o,{onClick:()=>t(r+1),children:"+"}),e.jsx(n,{as:"span",w:"200px",mx:"24px",children:r}),e.jsx(o,{onClick:()=>t(r-1),children:"-"})]}),e.jsx(u,{code:h,dark:!0})]})},v=()=>{const[r,t]=k.useState(40),[m,l]=d({value:r,onChange:t});return e.jsxs(p,{rowGap:"1rem",children:[e.jsxs(n,{children:[e.jsx(o,{onClick:()=>l(r+1),children:"+"}),e.jsx(n,{as:"span",w:"200px",mx:"24px",children:m}),e.jsx(o,{onClick:()=>l(r-1),children:"-"})]}),e.jsx(u,{code:j,dark:!0})]})};function a(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Hooks/useControllable"}),`
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
`,e.jsx(t.p,{children:"Dette hooket gir nyttige feil- eller advarselmeldinger når du bytter mellom kontrollerte og ukontrollerte moduser, eller når du prøver å oppdatere den sendte defaultValue."})]})}function he(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{he as default};
