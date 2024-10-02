import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-C4ZuRfqS.js";import{ae as n,ai as s}from"./index-CcWrSbUc.js";import{F as m}from"./Feedback-CGVA0MWq.js";import{A as p}from"./Alert-XgOxNRd7.js";import{A as d}from"./chunk-3KCBMPN5-kuExC6NN.js";import{B as a}from"./chunk-PULVB27S-BbQOsZmk.js";import{A as c}from"./chunk-CUKBNH6U-rCIZzn0p.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C77LSURn.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./chunk-2OOHT3W5-DQGV2H9e.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./Card-BhafkWhq.js";import"./chunk-MFVQSVQB-CVs57b_v.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./Button-CYMcA4Az.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./index-2ZXUntH3.js";import"./Icon-BA11F4pX.js";/* empty css              */import"./chunk-2GBDXOMA-DYcQJ-WZ.js";const u=`
import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'
import logo from './logo.svg'

const spin = keyframes'
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
'

function Example() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : '\${spin} infinite 20s linear'

  return <Image animation={animation} src={logo} {...props} />
}`;function t(o){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Hooks/usePrefersReducedMotion"}),`
`,e.jsx(r.h1,{id:"useprefersreducedmotion",children:"usePrefersReducedMotion"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"usePrefersReducedMotion"})," er en tilpasset hook som brukes til å hjelpe med å oppdage brukerens bevegelsespreferanse."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { usePrefersReducedMotion } from "@kvib/react";
`})}),`
`,e.jsx(m,{component:"usePrefersReducedMotion"}),`
`,e.jsx(r.h1,{id:"return-value",children:"Return value"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"usePrefersReducedMotion"})," returnerer en boolsk verdi som indikerer om brukeren foretrekker redusert bevegelse."]}),`
`,e.jsxs(p,{status:"warning",children:[e.jsx(d,{}),e.jsx(a,{children:e.jsx(c,{children:e.jsxs(r.p,{children:["Husk at denne API-en er avhengig av nettleserens støtte for ",e.jsx(r.strong,{children:"window.matchMedia"}),", og vil alltid returnere ",e.jsx(r.strong,{children:"false"})," hvis det ikke støttes eller ikke eksisterer (for eksempel under serverside rendering)."]})})})]}),`
`,e.jsx(r.h1,{id:"bruk",children:"Bruk"}),`
`,e.jsx(s,{code:u,dark:!0})]})}function de(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(t,{...o})}):t(o)}export{de as default};
