import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-D_a9NBpR.js";import{ae as p,ai as a}from"./index-k-h-8Dss.js";import{F as c,D as l,b as t}from"./Feedback-Be-nclhu.js";import{D as d}from"./DocsCanvas-D3xvFuIV.js";import{a as h}from"./chunk-7FWEOSAE-BgGQS5yP.js";import{B as m}from"./chunk-PULVB27S-BbQOsZmk.js";import{C as i}from"./chunk-LZZHVJFG-Crew6nZM.js";import{A as u}from"./Alert-CW0iBeF3.js";import{A as x}from"./chunk-3KCBMPN5-kuExC6NN.js";import{A as j}from"./chunk-CUKBNH6U-rCIZzn0p.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DKUcOLmC.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./chunk-2OOHT3W5-DQGV2H9e.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./Card-Bn7RuWsc.js";import"./chunk-MFVQSVQB-CVs57b_v.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./Button-ld38lsZs.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./index-2ZXUntH3.js";import"./Icon-CPAF9xaH.js";/* empty css              */import"./chunk-2GBDXOMA-DYcQJ-WZ.js";const k=()=>{const[r,e]=h("colors",["red.100","blue.200"]);return o.jsx(d,{children:o.jsxs(m,{p:4,boxShadow:`inset 0 4px 0 ${r}, 0 0 8px ${e}`,children:["You can utilize ",o.jsx(i,{children:"useToken"})," to create a ",o.jsx(i,{children:"boxShadow"})," with colors from your theme."]})})},f=`
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
`,o.jsxs(u,{status:"info",children:[o.jsx(x,{}),o.jsx(m,{children:o.jsx(j,{children:o.jsxs(e.p,{children:["Merk at du også kan bruke ",o.jsx(e.strong,{children:"sx"}),"-egenskapen for å skrive stiler fritt ved å bruke temaets tokens"]})})})]})]})}function fo(r={}){const{wrapper:e}={...n(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(s,{...r})}):s(r)}export{fo as default};
