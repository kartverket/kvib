import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import{ae as p,af as o,ai as d,ag as k}from"./index-CcWrSbUc.js";import{C as h,a as l,b as x,c as C,d as b,e as u,f as s}from"./Checkbox.stories-CsbLDnMn.js";import{D as g,F as j,a as i}from"./Feedback-CGVA0MWq.js";import{T as n}from"./chunk-2OOHT3W5-DQGV2H9e.js";import{C as c}from"./chunk-LZZHVJFG-Crew6nZM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C77LSURn.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-CWVAJCXJ-sZIOMuoR.js";import"./index-CHDWSgKD.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-7D6N5TE5-POHDyS7P.js";import"./chunk-56K2BSAJ-B2SooMhp.js";import"./chunk-DFWC5MHP-CwveL_zt.js";import"./index-Bdxaq0s4.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./index-DJS8qWMq.js";import"./index-DEiKcbOK.js";import"./index-DdaX-njP.js";import"./chunk-3JHDQ75O-BEFCT4rR.js";import"./index-DdrsuNi1.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./index-2ZXUntH3.js";import"./index-DjrpCY14.js";import"./chunk-PULVB27S-BbQOsZmk.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./Card-BhafkWhq.js";import"./chunk-MFVQSVQB-CVs57b_v.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./Button-CYMcA4Az.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./Icon-BA11F4pX.js";/* empty css              */import"./chunk-R3DH46PF-iWUMGBws.js";const f=` 
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
`;function m(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:h}),`
`,e.jsxs(g,{children:[e.jsx(t.h1,{id:"checkbox",children:"Checkbox"}),e.jsx(t.p,{children:`Avmerkingsboks blir brukt der man vil gi brukeren mulighet til å velge flere enn bare ett svaralternativ.
Her er en oversikt over utvalget av ikonknapper i Kartverkets Designbibliotek. Disse er blant annet bygget opp ved bruk av design tokens fra biblioteket, eksempelvis farger og ikoner. I dokumentasjonen følger beskrivelse av komponenten og bruksområde, sammen med kodeeksempler.`}),e.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Checkbox, CheckboxGroup } from "@kvib/react";
`})}),e.jsx(j,{component:"Checkbox"}),e.jsx(i,{title:"Farger",description:e.jsxs(n,{children:["Farge kan endres ved å bruke ",e.jsx(c,{children:"colorScheme"}),"."]}),story:e.jsx(o,{of:l,sourceState:"hidden"})}),e.jsx(i,{title:"Størrelser",description:e.jsxs(n,{children:["Checkbox kommer i 3 størrelser som kan endres og settes ved å bruke ",e.jsx(c,{children:"size"})," proppen. Standard størrelse er medium."]}),story:e.jsx(o,{of:x,sourceState:"hidden"})}),e.jsx(i,{title:"States",isVertical:!0,description:"",story:e.jsx(o,{of:C,sourceState:"hidden"})}),e.jsx(i,{title:"Grupper",description:"Man kan gruppere Checkbox i en CheckboxGroup for å gi alle styling-propsa videre til alle boksene i gruppen",story:e.jsx(o,{of:b,sourceState:"hidden"})}),e.jsx(i,{title:"Indeterminate",isVertical:!0,description:"",story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:u,sourceState:"none"}),e.jsx(d,{code:f,dark:!0})]})}),e.jsx(t.h2,{id:"props",children:"Props"}),e.jsx(o,{of:s}),e.jsx(k,{of:s})]})]})}function Ie(r={}){const{wrapper:t}={...a(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(m,{...r})}):m(r)}export{Ie as default};
