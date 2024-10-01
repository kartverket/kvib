import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-BHVkFXbn.js";import{ai as t,ae as u}from"./index-6NOSRtYz.js";import{F as c,b as n,a as s}from"./Feedback-KQcYSW6D.js";import{D as l}from"./DocsCanvas-C63K8Gif.js";import{u as d}from"./chunk-57I6FYPZ-CwnaZWLD.js";import{T as m}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{A as h}from"./Alert-CZqsa_Bc.js";import{A as x}from"./chunk-3KCBMPN5-Dapgpkcw.js";import{B as g}from"./chunk-PULVB27S-CgiffgmI.js";import{A as j}from"./chunk-CUKBNH6U-Bnoln8s6.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CupqWmPW.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./Card-DSiGcjvP.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./Button-DWcfEdk6.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./index-2ZXUntH3.js";import"./Icon-BLy-BiFo.js";/* empty css              */import"./chunk-VMD3UMGK-5-kd4ADr.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-2GBDXOMA-K_WHOyag.js";const f=`// single media query with no options
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
}`,v=()=>{const[i]=d("(min-width: 1280px)");return e.jsxs(l,{children:[e.jsx(m,{children:i?"larger than 1280px":"smaller than 1280px"}),e.jsx(t,{code:y,dark:!0})]})},M=()=>{const[i,r]=d(["(min-width: 1920px)","(display-mode: browser)"]),p=()=>i?`high resolution you got there ${r?"in your browser":"on your screen"}`:r?"rendering in a browser":"rendering on something else, e.g. PWA";return e.jsxs(l,{children:[e.jsx(m,{children:p()}),e.jsx(t,{code:k,dark:!0})]})};function o(i){const r={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Hooks/useMediaQuery"}),`
`,e.jsx(r.h1,{id:"usemediaquery",children:"useMediaQuery"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useMediaQuery"})," er en tilpasset hook som brukes for å hjelpe med å oppdage om en enkelt medieforespørsel eller flere medieforespørsler matcher individuelt."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useMediaQuery } from "@kvib/react";
`})}),`
`,e.jsx(c,{component:"useMediaQuery"}),`
`,e.jsxs(r.p,{children:[e.jsx(n,{light:!0,children:"API Reference"}),`
`,e.jsx(r.strong,{children:"useMediaQuery"})," aksepterer enten en enkelt medieforespørsel eller en rekke medieforespørsler, og valgfritt et objekt som inneholder en ",e.jsx(r.strong,{children:"ssr"})," boolean og en ",e.jsx(r.strong,{children:"fallback"}),"-streng."]}),`
`,e.jsx(t,{code:f,dark:!0}),`
`,e.jsxs(r.p,{children:["Hvis vi er på serveren, vil ",e.jsx(r.strong,{children:"ssr"}),"-alternativet avgjøre om vi skal returnere ",e.jsx(r.strong,{children:"fallback"}),"-verdien eller utføre forespørselen direkte. ",e.jsx(r.strong,{children:"fallback"}),"-eigenskapen er det som vil bli returnert hvis ",e.jsx(r.strong,{children:"ssr"})," er satt til ",e.jsx(r.strong,{children:"true"})," og vi er i en serverkontekst."]}),`
`,e.jsxs(r.p,{children:[e.jsx(n,{light:!0,children:"Return value"}),`
`,e.jsx(r.strong,{children:"useMediaQuery"})," returnerer en array av booleans, som indikerer om den gitte forespørselen matcher eller om forespørslene matcher."]}),`
`,e.jsxs(r.p,{children:["Hvorfor en array? ",e.jsx(r.strong,{children:"useMediaQuery"})," aksepterer både en streng og en array av strenger, men vil alltid returnere en array. På denne måten kan du kombinere flere medieforespørsler som vil bli individuelt matchet i ett kall."]}),`
`,e.jsxs(h,{status:"warning",children:[e.jsx(x,{}),e.jsx(g,{children:e.jsx(j,{children:e.jsxs(r.p,{children:["Husk at denne API-en er avhengig av nettleserens støtte for ",e.jsx(r.strong,{children:"window.matchMedia"}),", og vil alltid returnere ",e.jsx(r.strong,{children:"false"})," hvis det ikke støttes eller ikke eksisterer (for eksempel under serverside rendering)."]})})})]}),`
`,e.jsx(r.h3,{id:"bruk",children:"Bruk"}),`
`,e.jsx(s,{title:"",description:"",isVertical:!0,story:e.jsx(v,{})}),`
`,e.jsx(s,{title:"",description:"",isVertical:!0,story:e.jsx(M,{})})]})}function Me(i={}){const{wrapper:r}={...a(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(o,{...i})}):o(i)}export{Me as default};
