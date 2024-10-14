import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import{ae as p,af as o,ai as d,ag as k}from"./index-D7tIq8H4.js";import{C as h,a as l,b as x,c as C,d as b,e as u,f as s}from"./Checkbox.stories-vZQtY2us.js";import{D as g,F as j,a as i}from"./Feedback-BYMJ4tov.js";import{T as n}from"./text-rUwQV1v4.js";import{C as m}from"./code-BVCI9Byc.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-D61zpMny.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./checkbox-dmyGYCMA.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./context-CBKykClo.js";import"./factory-CdGA0D9p.js";import"./use-checkbox-DUlb44hL.js";import"./index-BbAC0Ngi.js";import"./use-form-control-Dd261dKs.js";import"./form-control-COBP5YBd.js";import"./forward-ref-BWI-Phbn.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./use-theme-CBfqdygA.js";import"./cx-BDMMs1jM.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./visually-hidden.style-BUiBK_kv.js";import"./use-callback-ref-DA6UG1mJ.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./use-update-effect-CNg9DBIF.js";import"./stack-Crl0JO1i.js";import"./responsive-ClFn5vzN.js";import"./children-2ZXUntH3.js";import"./use-controllable-state-Dnial3e2.js";import"./box-B7h7acUJ.js";import"./image-Cz43cXZB.js";import"./use-image-rNdzB_Ea.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./heading-D_euA-I1.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./Button-CizCdxRk.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./Icon-DKWXgpio.js";/* empty css              */const f=` 
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
`;function c(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:h}),`
`,e.jsxs(g,{children:[e.jsx(t.h1,{id:"checkbox",children:"Checkbox"}),e.jsx(t.p,{children:`Avmerkingsboks blir brukt der man vil gi brukeren mulighet til å velge flere enn bare ett svaralternativ.
Her er en oversikt over utvalget av ikonknapper i Kartverkets Designbibliotek. Disse er blant annet bygget opp ved bruk av design tokens fra biblioteket, eksempelvis farger og ikoner. I dokumentasjonen følger beskrivelse av komponenten og bruksområde, sammen med kodeeksempler.`}),e.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Checkbox, CheckboxGroup } from "@kvib/react";
`})}),e.jsx(j,{component:"Checkbox"}),e.jsx(i,{title:"Farger",description:e.jsxs(n,{children:["Farge kan endres ved å bruke ",e.jsx(m,{children:"colorScheme"}),"."]}),story:e.jsx(o,{of:l,sourceState:"hidden"})}),e.jsx(i,{title:"Størrelser",description:e.jsxs(n,{children:["Checkbox kommer i 3 størrelser som kan endres og settes ved å bruke ",e.jsx(m,{children:"size"})," proppen. Standard størrelse er medium."]}),story:e.jsx(o,{of:x,sourceState:"hidden"})}),e.jsx(i,{title:"States",isVertical:!0,description:"",story:e.jsx(o,{of:C,sourceState:"hidden"})}),e.jsx(i,{title:"Grupper",description:"Man kan gruppere Checkbox i en CheckboxGroup for å gi alle styling-propsa videre til alle boksene i gruppen",story:e.jsx(o,{of:b,sourceState:"hidden"})}),e.jsx(i,{title:"Indeterminate",isVertical:!0,description:"",story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:u,sourceState:"none"}),e.jsx(d,{code:f,dark:!0})]})}),e.jsx(t.h2,{id:"props",children:"Props"}),e.jsx(o,{of:s}),e.jsx(k,{of:s})]})]})}function Be(r={}){const{wrapper:t}={...a(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(c,{...r})}):c(r)}export{Be as default};
