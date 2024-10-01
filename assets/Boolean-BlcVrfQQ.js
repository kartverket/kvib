import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as i,ai as s}from"./index-CJ9eVrp8.js";import{F as m,D as p,a}from"./Feedback-DEYXld9b.js";import{D as l}from"./DocsCanvas-C63K8Gif.js";import{u as c}from"./chunk-BBVTFCMB-CY0foEXq.js";import{B as u}from"./Button-BTrFsz-j.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CPQh67bk.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./Card-BeZB5sUt.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./index-2ZXUntH3.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./Icon-Bw1o7Ynw.js";/* empty css              */const d=()=>{const[e,t]=c();return o.jsxs(l,{children:[o.jsxs("p",{children:["Boolean state: ",e.toString()]}),o.jsx(u,{onClick:t.toggle,children:"Click me to toggle the boolean value"})]})},g=` 
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
