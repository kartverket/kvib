import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-Dh-ol76_.js";import{ae as n,ai as s}from"./index-BVGXEfNw.js";import{F as m}from"./Feedback-DUruNHKC.js";import{A as p}from"./Alert-ijm-s5Dj.js";import{A as d}from"./alert-icon-C25tEepw.js";import{B as a}from"./box-B7h7acUJ.js";import{A as c}from"./alert-description-BYBQ5f79.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CqifaeuE.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./hooks-D04p5R0A.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-rUwQV1v4.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./Button-CnJN7iGK.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./Icon-loQT-TLl.js";/* empty css              */import"./icon-DQb5sAJm.js";const u=`
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
`,e.jsx(s,{code:u,dark:!0})]})}function je(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(t,{...o})}):t(o)}export{je as default};
