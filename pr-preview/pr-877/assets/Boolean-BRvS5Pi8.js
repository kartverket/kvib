import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as i,ai as s}from"./index-BGnjr7g7.js";import{F as m,D as p,a}from"./Feedback-CDPL5_oi.js";import{D as l}from"./DocsCanvas-BhnAGqOh.js";import{u as c}from"./use-boolean-CY0foEXq.js";import{B as u}from"./Button-C7Ypcb02.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CnGWpzHb.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-B7h7acUJ.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./hooks-D04p5R0A.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-rUwQV1v4.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./Icon-BZ-fYLhA.js";/* empty css              */const d=()=>{const[r,t]=c();return o.jsxs(l,{children:[o.jsxs("p",{children:["Boolean state: ",r.toString()]}),o.jsx(u,{onClick:t.toggle,children:"Click me to toggle the boolean value"})]})},g=` 
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
`;function e(r){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"Hooks/useBoolean"}),`
`,o.jsx(t.h1,{id:"useboolean",children:"useBoolean"}),`
`,o.jsxs(t.p,{children:[o.jsx(t.strong,{children:"useBoolean"})," er en tilpasset hook som brukes til å håndtere en boolean verdi med funksjoner for ",o.jsx(t.strong,{children:"on"}),", ",o.jsx(t.strong,{children:"off"})," og ",o.jsx(t.strong,{children:"toggle"}),"."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`import { useBoolean } from "@kvib/react";
`})}),`
`,o.jsx(m,{component:"useBoolean"}),`
`,o.jsx(p,{children:o.jsx(a,{title:"Return value",description:"useBoolean returnerer en stateful boolean verdi og et objekt med følgende funksjon for å oppdatere den",story:o.jsxs(o.Fragment,{children:[o.jsx(d,{}),o.jsx(s,{code:g,dark:!0})]})})})]})}function fo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(e,{...r})}):e(r)}export{fo as default};
