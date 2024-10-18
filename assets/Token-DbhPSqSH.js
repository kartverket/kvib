import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-B8he5Jgz.js";import{ae as p,ai as a}from"./index-C7kypGf2.js";import{F as c,D as l,b as t}from"./Feedback-Dh6LptKD.js";import{D as d}from"./DocsCanvas-CipsSa09.js";import{a as h}from"./hooks-gaHRB8Pq.js";import{B as m}from"./box-DeqT4ixr.js";import{C as i}from"./code-B6T_8ixX.js";import{A as u}from"./Alert-PLl3e2Qe.js";import{A as x}from"./alert-icon-B8tlVjfA.js";import{A as j}from"./alert-description-BS4zLy6K.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DpCJl_jV.js";import"../sb-preview/runtime.js";import"./react-18-CXIcm_DL.js";import"./index-Drt3gf4w.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-BzV54DYr.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-inAnnyJ8.js";import"./grid-B2CMUJGq.js";import"./use-theme-CBfqdygA.js";import"./responsive-BNzRyFLh.js";import"./heading--NES2npU.js";import"./use-style-config-YUvqttAg.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-ByHKaHOl.js";import"./Card-rgsWy52h.js";import"./providers-BwxcBeey.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-B93s4yJe.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-C1gIBb6o.js";import"./Link-Dp4j43jb.js";import"./stack-REYSnkee.js";import"./children-2ZXUntH3.js";import"./define-styles-BSAHv3yx.js";import"./icon-Bx5s8P2X.js";import"./spinner-DfEqsPDM.js";const k=()=>{const[r,e]=h("colors",["red.100","blue.200"]);return o.jsx(d,{children:o.jsxs(m,{p:4,boxShadow:`inset 0 4px 0 ${r}, 0 0 8px ${e}`,children:["You can utilize ",o.jsx(i,{children:"useToken"})," to create a ",o.jsx(i,{children:"boxShadow"})," with colors from your theme."]})})},f=`
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
`,o.jsxs(u,{status:"info",children:[o.jsx(x,{}),o.jsx(m,{children:o.jsx(j,{children:o.jsxs(e.p,{children:["Merk at du også kan bruke ",o.jsx(e.strong,{children:"sx"}),"-egenskapen for å skrive stiler fritt ved å bruke temaets tokens"]})})})]})]})}function bo(r={}){const{wrapper:e}={...n(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(s,{...r})}):s(r)}export{bo as default};
