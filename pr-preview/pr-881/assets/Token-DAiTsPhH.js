import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-Bcsl-anO.js";import{ae as p,ai as a}from"./index-BylpHZZs.js";import{F as c,D as l,b as t}from"./Feedback-Dm3mjvUi.js";import{D as d}from"./DocsCanvas-BhnAGqOh.js";import{a as h}from"./hooks-D04p5R0A.js";import{B as m}from"./box-B7h7acUJ.js";import{C as i}from"./code-BVCI9Byc.js";import{A as u}from"./Alert-ijm-s5Dj.js";import{A as x}from"./alert-icon-C25tEepw.js";import{A as j}from"./alert-description-BYBQ5f79.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BIsUCXhV.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-rUwQV1v4.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./Button-DeRYbOSW.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./Icon-vZnM9tBv.js";/* empty css              */import"./icon-DQb5sAJm.js";const k=()=>{const[r,e]=h("colors",["red.100","blue.200"]);return o.jsx(d,{children:o.jsxs(m,{p:4,boxShadow:`inset 0 4px 0 ${r}, 0 0 8px ${e}`,children:["You can utilize ",o.jsx(i,{children:"useToken"})," to create a ",o.jsx(i,{children:"boxShadow"})," with colors from your theme."]})})},f=`
function Example() {
  const [red100, blue200] = useToken(
    // the key within the theme, in this case \`theme.colors\`
    'colors',
    // the subkey(s), resolving to \`theme.colors.red.100\`
    ['red.100', 'blue.200'],
    // a single fallback or fallback array matching the length of the previous arg
  ) 
  return (
    <Box p={4} boxShadow={'inset 0 4px 0 \${red100}', 0 0 8px \${blue200}'}>
      You can utilize <Code>useToken</Code> to create a <Code>boxShadow</Code>{' '}
      with colors from your theme.
    </Box>
  )
}`;function s(r){const e={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Hooks/useToken"}),`
`,o.jsx(e.h1,{id:"usetoken",children:"useToken"}),`
`,o.jsx(e.p,{children:o.jsx(e.strong,{children:"useToken"})}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`import { useToken } from "@kvib/react";
`})}),`
`,o.jsx(c,{component:"useToken"}),`
`,o.jsxs(l,{children:[o.jsxs(e.p,{children:[o.jsx(t,{light:!0,children:"Return value"}),`
`,o.jsx(e.strong,{children:"useToken"})," henter det som er i temaet på de gitte stiene (paths)."]}),o.jsx(t,{light:!0,children:"Bruk"}),o.jsx(k,{}),o.jsx(a,{code:f,dark:!0})]}),`
`,o.jsxs(u,{status:"info",children:[o.jsx(x,{}),o.jsx(m,{children:o.jsx(j,{children:o.jsxs(e.p,{children:["Merk at du også kan bruke ",o.jsx(e.strong,{children:"sx"}),"-egenskapen for å skrive stiler fritt ved å bruke temaets tokens"]})})})]})]})}function Ao(r={}){const{wrapper:e}={...n(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(s,{...r})}):s(r)}export{Ao as default};
