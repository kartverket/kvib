import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-B8he5Jgz.js";import{ae as n,ai as s}from"./index-C7kypGf2.js";import{F as m}from"./Feedback-Dh6LptKD.js";import{A as p}from"./Alert-PLl3e2Qe.js";import{A as d}from"./alert-icon-B8tlVjfA.js";import{B as a}from"./box-DeqT4ixr.js";import{A as c}from"./alert-description-BS4zLy6K.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DpCJl_jV.js";import"../sb-preview/runtime.js";import"./react-18-CXIcm_DL.js";import"./index-Drt3gf4w.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-BzV54DYr.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-inAnnyJ8.js";import"./grid-B2CMUJGq.js";import"./use-theme-CBfqdygA.js";import"./hooks-gaHRB8Pq.js";import"./responsive-BNzRyFLh.js";import"./heading--NES2npU.js";import"./use-style-config-YUvqttAg.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-ByHKaHOl.js";import"./Card-rgsWy52h.js";import"./providers-BwxcBeey.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-B93s4yJe.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-C1gIBb6o.js";import"./Link-Dp4j43jb.js";import"./define-styles-BSAHv3yx.js";import"./icon-Bx5s8P2X.js";import"./spinner-DfEqsPDM.js";const u=`
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
