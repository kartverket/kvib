import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-Xo4GjlzW.js";import{ai as i,ae as u}from"./index-CN6aq0si.js";import{F as c,b as n,a as s}from"./Feedback-oujG440w.js";import{D as l}from"./DocsCanvas-Bqew-jOy.js";import{u as m}from"./use-media-query-DZQeksUW.js";import{T as d}from"./text-D14Jyc6W.js";import{A as h}from"./Alert-O4bnFTKD.js";import{A as x}from"./alert-icon-DyJ3kpUV.js";import{B as g}from"./box-CwIaBbUI.js";import{A as j}from"./alert-description-Ce3B-u4s.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CiRVVpFO.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-GsZWH-VT.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./omit-QLD0Eizt.js";import"./simple-grid-ZnRIKZLi.js";import"./grid-BNFEBO0r.js";import"./use-theme-CeOC8r1f.js";import"./hooks-Dk7VeZ_r.js";import"./responsive-CwLgsqRj.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-jUBPBQ-A.js";import"./providers-BmY41TRh.js";import"./emotion-react.browser.esm-0Zac8NuU.js";import"./context-CBKykClo.js";import"./calc-C4XOv3Qc.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-v5DFvFs4.js";import"./Link-D6DR4S49.js";import"./stack-BdCvkUuU.js";import"./children-2ZXUntH3.js";import"./env-B2QgRHdN.js";import"./define-styles-BSAHv3yx.js";import"./icon-BmokjFuu.js";import"./spinner-CI5qPk1o.js";const f=`// single media query with no options
const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

// ssr-friendly media query with fallback
const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
ssr: true,
fallback: false, // return false on the server, and re-evaluate on the client side
})`,y=`function Example() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (
    <Text>
      {isLargerThan1280 ? 'larger than 1280px' : 'smaller than 1280px'}
    </Text>
  )
}`,k=`function Example() {
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 1920px)',
    '(display-mode: browser)',
  ])
  function determineText() {
    if (isLargerThanHD) {
      return 'high resolution you got there in your browser'
    }
    return isDisplayingInBrowser
      ? 'rendering in a browser'
      : 'rendering on something else, e.g. PWA'
  }'
  return <Text>{determineText()}</Text>
}`,v=()=>{const[t]=m("(min-width: 1280px)");return e.jsxs(l,{children:[e.jsx(d,{children:t?"larger than 1280px":"smaller than 1280px"}),e.jsx(i,{code:y,dark:!0})]})},M=()=>{const[t,r]=m(["(min-width: 1920px)","(display-mode: browser)"]),p=()=>t?`high resolution you got there ${r?"in your browser":"on your screen"}`:r?"rendering in a browser":"rendering on something else, e.g. PWA";return e.jsxs(l,{children:[e.jsx(d,{children:p()}),e.jsx(i,{code:k,dark:!0})]})};function o(t){const r={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Komponenter/Hooks/useMediaQuery"}),`
`,e.jsx(r.h1,{id:"usemediaquery",children:"useMediaQuery"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useMediaQuery"})," er en tilpasset hook som brukes for å hjelpe med å oppdage om en enkelt medieforespørsel eller flere medieforespørsler matcher individuelt."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useMediaQuery } from "@kvib/react";
`})}),`
`,e.jsx(c,{component:"useMediaQuery"}),`
`,e.jsxs(r.p,{children:[e.jsx(n,{light:!0,children:"API Reference"}),`
`,e.jsx(r.strong,{children:"useMediaQuery"})," aksepterer enten en enkelt medieforespørsel eller en rekke medieforespørsler, og valgfritt et objekt som inneholder en ",e.jsx(r.strong,{children:"ssr"})," boolean og en ",e.jsx(r.strong,{children:"fallback"}),"-streng."]}),`
`,e.jsx(i,{code:f,dark:!0}),`
`,e.jsxs(r.p,{children:["Hvis vi er på serveren, vil ",e.jsx(r.strong,{children:"ssr"}),"-alternativet avgjøre om vi skal returnere ",e.jsx(r.strong,{children:"fallback"}),"-verdien eller utføre forespørselen direkte. ",e.jsx(r.strong,{children:"fallback"}),"-eigenskapen er det som vil bli returnert hvis ",e.jsx(r.strong,{children:"ssr"})," er satt til ",e.jsx(r.strong,{children:"true"})," og vi er i en serverkontekst."]}),`
`,e.jsxs(r.p,{children:[e.jsx(n,{light:!0,children:"Return value"}),`
`,e.jsx(r.strong,{children:"useMediaQuery"})," returnerer en array av booleans, som indikerer om den gitte forespørselen matcher eller om forespørslene matcher."]}),`
`,e.jsxs(r.p,{children:["Hvorfor en array? ",e.jsx(r.strong,{children:"useMediaQuery"})," aksepterer både en streng og en array av strenger, men vil alltid returnere en array. På denne måten kan du kombinere flere medieforespørsler som vil bli individuelt matchet i ett kall."]}),`
`,e.jsxs(h,{status:"warning",children:[e.jsx(x,{}),e.jsx(g,{children:e.jsx(j,{children:e.jsxs(r.p,{children:["Husk at denne API-en er avhengig av nettleserens støtte for ",e.jsx(r.strong,{children:"window.matchMedia"}),", og vil alltid returnere ",e.jsx(r.strong,{children:"false"})," hvis det ikke støttes eller ikke eksisterer (for eksempel under serverside rendering)."]})})})]}),`
`,e.jsx(r.h3,{id:"bruk",children:"Bruk"}),`
`,e.jsx(s,{title:"",description:"",isVertical:!0,story:e.jsx(v,{})}),`
`,e.jsx(s,{title:"",description:"",isVertical:!0,story:e.jsx(M,{})})]})}function Qe(t={}){const{wrapper:r}={...a(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}export{Qe as default};
