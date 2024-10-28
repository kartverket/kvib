import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-CZ6KeePZ.js";import{ae as n,ai as s}from"./index-DQ594QPQ.js";import{F as m}from"./Feedback-C8oPMuBk.js";import{A as p}from"./Alert-DuDev5PS.js";import{A as d}from"./alert-icon-DsIyQRNV.js";import{B as a}from"./box-Cs-tJ6EH.js";import{A as c}from"./alert-description-Ny8tVv6G.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-4rcjUdhJ.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-CypcOzo0.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./define-styles-BSAHv3yx.js";import"./icon-BO-EX8Jp.js";import"./spinner-CCN1jjNR.js";const u=`
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
}`;function t(o){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Komponenter/Hooks/usePrefersReducedMotion"}),`
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
