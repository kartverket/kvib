import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-dylMCawA.js";import{ai as n,ae as s}from"./index-Ciibta9S.js";import{F as p,D as a,a as m}from"./Feedback-C8oPMuBk.js";import{D as u}from"./DocsCanvas-DLlOGo4n.js";import{u as l}from"./use-breakpoint-value-BA2ynuPV.js";import{V as c}from"./v-stack-k8hvxFKi.js";import{T as d}from"./text-CypcOzo0.js";import{B as x}from"./Button-Bg6QVfgh.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BtkaFP-3.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-Cs-tJ6EH.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";import"./use-media-query-DZQeksUW.js";import"./env-B2QgRHdN.js";import"./button-lwGmIUkK.js";import"./spinner-CCN1jjNR.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-Bg6uA6YZ.js";import"./h-stack-ecaAvnDk.js";import"./Icon-C0_wlgZX.js";/* empty css              */const k=`  
function Example() {
  const variant = useBreakpointValue(
    {
      base: "md",
      lg: "lg",
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'lg'
    },
  )
  return (
    <VStack align='flex-start'>
      <Text>Resize your window to see the button size change</Text>
      <Button size={size}>
        Button
      </Button>
    </VStack>
  )
}
`,g=()=>{const t=l({base:"md",lg:"lg"},{fallback:"lg"});return e.jsxs(u,{gap:"20px",children:[e.jsxs(c,{align:"flex-start",children:[e.jsx(d,{children:"Resize your window to see the button size change"}),e.jsx(x,{size:t,children:"Button"})]}),e.jsx(n,{code:k,dark:!0})]})};function o(t){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Komponenter/Hooks/useBreakpointValue"}),`
`,e.jsx(r.h1,{id:"usebreakpointvalue",children:"useBreakpointValue"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useBoolean"})," UseBreakpointValue-hook returnerer verdien for gjeldende breakpoint."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useBreakpointValue } from "@kvib/react";
`})}),`
`,e.jsx(p,{component:"useBreakpointValue"}),`
`,e.jsx(a,{children:e.jsx(m,{title:"Return value",description:"useBreakpointValue-hook returnerer verdien for gjeldende breakpoint. Sørg for å oppgi en basisverdi når du bruker useBreakpointValue, slik at den ikke returnerer udefinert i den første gjengivelsen.",isVertical:!0,story:e.jsx(g,{})})})]})}function De(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}export{De as default};
