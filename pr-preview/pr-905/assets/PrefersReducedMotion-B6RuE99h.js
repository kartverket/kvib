import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-DYiRuSiV.js";import{ae as n,ai as s}from"./index-CcdJiB8m.js";import{F as m}from"./Feedback-oujG440w.js";import{A as p}from"./Alert-O4bnFTKD.js";import{A as d}from"./alert-icon-DyJ3kpUV.js";import{B as a}from"./box-CwIaBbUI.js";import{A as c}from"./alert-description-Ce3B-u4s.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DB-mSZtz.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-GsZWH-VT.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./omit-QLD0Eizt.js";import"./simple-grid-ZnRIKZLi.js";import"./grid-BNFEBO0r.js";import"./use-theme-CeOC8r1f.js";import"./hooks-Dk7VeZ_r.js";import"./responsive-CwLgsqRj.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-D14Jyc6W.js";import"./Card-jUBPBQ-A.js";import"./providers-BmY41TRh.js";import"./emotion-react.browser.esm-0Zac8NuU.js";import"./context-CBKykClo.js";import"./calc-C4XOv3Qc.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-v5DFvFs4.js";import"./Link-D6DR4S49.js";import"./define-styles-BSAHv3yx.js";import"./icon-BmokjFuu.js";import"./spinner-CI5qPk1o.js";const u=`
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
`,e.jsx(s,{code:u,dark:!0})]})}function ae(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(t,{...o})}):t(o)}export{ae as default};
