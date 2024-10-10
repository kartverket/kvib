import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-CiJKim53.js";import{ai as n,ae as s}from"./index-BGnjr7g7.js";import{F as p,D as a,a as m}from"./Feedback-CDPL5_oi.js";import{D as u}from"./DocsCanvas-BhnAGqOh.js";import{u as l}from"./use-breakpoint-value-OwgMSUP5.js";import{V as c}from"./v-stack-CSYZ1u3_.js";import{T as d}from"./text-rUwQV1v4.js";import{B as x}from"./Button-C7Ypcb02.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CnGWpzHb.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-B7h7acUJ.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./hooks-D04p5R0A.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./use-media-query-DZQeksUW.js";import"./env-B2QgRHdN.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./Icon-BZ-fYLhA.js";/* empty css              */const k=`  
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
`,e.jsx(a,{children:e.jsx(m,{title:"Return value",description:"useBreakpointValue-hook returnerer verdien for gjeldende breakpoint. Sørg for å oppgi en basisverdi når du bruker useBreakpointValue, slik at den ikke returnerer udefinert i den første gjengivelsen.",isVertical:!0,story:e.jsx(g,{})})})]})}function ve(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}export{ve as default};
