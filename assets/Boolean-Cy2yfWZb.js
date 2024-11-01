import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as i,ai as s}from"./index-B750z1Q_.js";import{F as m,D as p,a}from"./Feedback-oujG440w.js";import{D as l}from"./DocsCanvas-Bqew-jOy.js";import{u as c}from"./use-boolean-CY0foEXq.js";import{B as u}from"./Button-yx5TWCfg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BQBlrzQa.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-CwIaBbUI.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./image-GsZWH-VT.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-ZnRIKZLi.js";import"./grid-BNFEBO0r.js";import"./use-theme-CeOC8r1f.js";import"./hooks-Dk7VeZ_r.js";import"./responsive-CwLgsqRj.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-D14Jyc6W.js";import"./Card-jUBPBQ-A.js";import"./providers-BmY41TRh.js";import"./emotion-react.browser.esm-0Zac8NuU.js";import"./context-CBKykClo.js";import"./calc-C4XOv3Qc.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-v5DFvFs4.js";import"./Link-D6DR4S49.js";import"./stack-BdCvkUuU.js";import"./children-2ZXUntH3.js";import"./button-CcUc8H6T.js";import"./spinner-CI5qPk1o.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-Ds0pdlwh.js";import"./h-stack-DtOTlfD9.js";import"./Icon-AWJq4l__.js";/* empty css              */const d=()=>{const[r,t]=c();return o.jsxs(l,{children:[o.jsxs("p",{children:["Boolean state: ",r.toString()]}),o.jsx(u,{onClick:t.toggle,children:"Click me to toggle the boolean value"})]})},g=` 
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
`;function e(r){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"Komponenter/Hooks/useBoolean"}),`
`,o.jsx(t.h1,{id:"useboolean",children:"useBoolean"}),`
`,o.jsxs(t.p,{children:[o.jsx(t.strong,{children:"useBoolean"})," er en tilpasset hook som brukes til å håndtere en boolean verdi med funksjoner for ",o.jsx(t.strong,{children:"on"}),", ",o.jsx(t.strong,{children:"off"})," og ",o.jsx(t.strong,{children:"toggle"}),"."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`import { useBoolean } from "@kvib/react";
`})}),`
`,o.jsx(m,{component:"useBoolean"}),`
`,o.jsx(p,{children:o.jsx(a,{title:"Return value",description:"useBoolean returnerer en stateful boolean verdi og et objekt med følgende funksjon for å oppdatere den",story:o.jsxs(o.Fragment,{children:[o.jsx(d,{}),o.jsx(s,{code:g,dark:!0})]})})})]})}function Bo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(e,{...r})}):e(r)}export{Bo as default};
