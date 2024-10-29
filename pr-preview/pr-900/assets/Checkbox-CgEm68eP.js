import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import{ae as p,af as o,ai as d,ag as k}from"./index-D-mFTAEU.js";import{D as h,F as l,a as i}from"./Feedback-C8oPMuBk.js";import{C as x,a as C,b,c as u,d as g,e as j,P as s}from"./Checkbox.stories-DekZzlEg.js";import{T as n}from"./text-CypcOzo0.js";import{C as c}from"./code-BjQELyKh.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dg-vxSrj.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-Cs-tJ6EH.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./use-checkbox-Bb5WcZUE.js";import"./index-BbAC0Ngi.js";import"./use-form-control-C6Tdrol4.js";import"./form-control-f1aYjuHp.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./visually-hidden.style-BUiBK_kv.js";import"./use-callback-ref-DA6UG1mJ.js";import"./use-update-effect-CNg9DBIF.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";import"./use-controllable-state-Dnial3e2.js";const f=` 
function IndeterminateExample() {
  const [checkedItems, setCheckedItems] = React.useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  )
}
`;function m(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:x}),`
`,e.jsxs(h,{children:[e.jsx(t.h1,{id:"checkbox",children:"Checkbox"}),e.jsx(t.p,{children:`Avmerkingsboks blir brukt der man vil gi brukeren mulighet til å velge flere enn bare ett svaralternativ.
Her er en oversikt over utvalget av ikonknapper i Kartverkets Designbibliotek. Disse er blant annet bygget opp ved bruk av design tokens fra biblioteket, eksempelvis farger og ikoner. I dokumentasjonen følger beskrivelse av komponenten og bruksområde, sammen med kodeeksempler.`}),e.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Checkbox, CheckboxGroup } from "@kvib/react";
`})}),e.jsx(l,{component:"Checkbox"}),e.jsx(i,{title:"Farger",description:e.jsxs(n,{children:["Farge kan endres ved å bruke ",e.jsx(c,{children:"colorScheme"}),"."]}),story:e.jsx(o,{of:C,sourceState:"hidden"})}),e.jsx(i,{title:"Størrelser",description:e.jsxs(n,{children:["Checkbox kommer i 3 størrelser som kan endres og settes ved å bruke ",e.jsx(c,{children:"size"})," proppen. Standard størrelse er medium."]}),story:e.jsx(o,{of:b,sourceState:"hidden"})}),e.jsx(i,{title:"States",isVertical:!0,description:"",story:e.jsx(o,{of:u,sourceState:"hidden"})}),e.jsx(i,{title:"Grupper",description:"Man kan gruppere Checkbox i en CheckboxGroup for å gi alle styling-propsa videre til alle boksene i gruppen",story:e.jsx(o,{of:g,sourceState:"hidden"})}),e.jsx(i,{title:"Indeterminate",isVertical:!0,description:"",story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:j,sourceState:"none"}),e.jsx(d,{code:f,dark:!0})]})}),e.jsx(t.h2,{id:"props",children:"Props"}),e.jsx(o,{of:s}),e.jsx(k,{of:s})]})]})}function ye(r={}){const{wrapper:t}={...a(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(m,{...r})}):m(r)}export{ye as default};
