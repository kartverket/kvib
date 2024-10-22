import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-D0zR8Acu.js";import{ai as n,ae as s}from"./index-Bxppj8b7.js";import{F as p,D as a,a as m}from"./Feedback-7ODX0rOz.js";import{D as u}from"./DocsCanvas-CipsSa09.js";import{u as l}from"./use-breakpoint-value-LNxqp4dz.js";import{V as c}from"./v-stack-BfMi40Xh.js";import{T as d}from"./text-ByHKaHOl.js";import{B as x}from"./Button-OtbWWr9M.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BQd5Xu44.js";import"../sb-preview/runtime.js";import"./react-18-CXIcm_DL.js";import"./index-Drt3gf4w.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-DeqT4ixr.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-BzV54DYr.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-inAnnyJ8.js";import"./grid-B2CMUJGq.js";import"./use-theme-CBfqdygA.js";import"./hooks-gaHRB8Pq.js";import"./responsive-BNzRyFLh.js";import"./heading--NES2npU.js";import"./use-style-config-YUvqttAg.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-rgsWy52h.js";import"./providers-BwxcBeey.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-B93s4yJe.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-C1gIBb6o.js";import"./Link-C3IPjqxf.js";import"./stack-REYSnkee.js";import"./children-2ZXUntH3.js";import"./use-media-query-DZQeksUW.js";import"./env-B2QgRHdN.js";import"./button-DEHO-vdc.js";import"./spinner-DfEqsPDM.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-Da94FwVR.js";import"./h-stack-BA5VzuBF.js";import"./Icon-BQMlFqUK.js";/* empty css              */const k=`  
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
`,g=()=>{const t=l({base:"md",lg:"lg"},{fallback:"lg"});return e.jsxs(u,{gap:"20px",children:[e.jsxs(c,{align:"flex-start",children:[e.jsx(d,{children:"Resize your window to see the button size change"}),e.jsx(x,{size:t,children:"Button"})]}),e.jsx(n,{code:k,dark:!0})]})};function o(t){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Hooks/useBreakpointValue"}),`
`,e.jsx(r.h1,{id:"usebreakpointvalue",children:"useBreakpointValue"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useBoolean"})," UseBreakpointValue-hook returnerer verdien for gjeldende breakpoint."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useBreakpointValue } from "@kvib/react";
`})}),`
`,e.jsx(p,{component:"useBreakpointValue"}),`
`,e.jsx(a,{children:e.jsx(m,{title:"Return value",description:"useBreakpointValue-hook returnerer verdien for gjeldende breakpoint. Sørg for å oppgi en basisverdi når du bruker useBreakpointValue, slik at den ikke returnerer udefinert i den første gjengivelsen.",isVertical:!0,story:e.jsx(g,{})})})]})}function De(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}export{De as default};
