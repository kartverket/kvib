import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as i,ai as s}from"./index-CcWrSbUc.js";import{F as m,D as p,a}from"./Feedback-CGVA0MWq.js";import{D as l}from"./DocsCanvas-D3xvFuIV.js";import{u as c}from"./chunk-BBVTFCMB-CY0foEXq.js";import{B as u}from"./Button-CYMcA4Az.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C77LSURn.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-PULVB27S-BbQOsZmk.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./chunk-2OOHT3W5-DQGV2H9e.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./Card-BhafkWhq.js";import"./chunk-MFVQSVQB-CVs57b_v.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./index-2ZXUntH3.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./Icon-BA11F4pX.js";/* empty css              */const d=()=>{const[e,t]=c();return o.jsxs(l,{children:[o.jsxs("p",{children:["Boolean state: ",e.toString()]}),o.jsx(u,{onClick:t.toggle,children:"Click me to toggle the boolean value"})]})},g=` 
function Example() {
  const [flag, setFlag] = useBoolean()

  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <Button onClick={setFlag.toggle}>
        Click me to toggle the boolean value
      </Button>
    </>
  )
}
`;function r(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"Hooks/useBoolean"}),`
`,o.jsx(t.h1,{id:"useboolean",children:"useBoolean"}),`
`,o.jsxs(t.p,{children:[o.jsx(t.strong,{children:"useBoolean"})," er en tilpasset hook som brukes til å håndtere en boolean verdi med funksjoner for ",o.jsx(t.strong,{children:"on"}),", ",o.jsx(t.strong,{children:"off"})," og ",o.jsx(t.strong,{children:"toggle"}),"."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`import { useBoolean } from "@kvib/react";
`})}),`
`,o.jsx(m,{component:"useBoolean"}),`
`,o.jsx(p,{children:o.jsx(a,{title:"Return value",description:"useBoolean returnerer en stateful boolean verdi og et objekt med følgende funksjon for å oppdatere den",story:o.jsxs(o.Fragment,{children:[o.jsx(d,{}),o.jsx(s,{code:g,dark:!0})]})})})]})}function mo(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(r,{...e})}):r(e)}export{mo as default};
