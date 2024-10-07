import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as p,af as t,ai as l,ag as c}from"./index-BxRuP592.js";import{R as j,a as n,C as k,S as x,b as u}from"./Radio.stories-Crn72Q8j.js";import{D as h,F as R,a as s,b as f}from"./Feedback-BvkEOjmP.js";import{T as a}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{C as o}from"./chunk-LZZHVJFG-CBh9GFNK.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B7A85QHE.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-RDF2AYID-DCZN3YCE.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./index-Bdxaq0s4.js";import"./index-CHDWSgKD.js";import"./chunk-DFWC5MHP-TuRmrrLs.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./index-DdrsuNi1.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./index-2ZXUntH3.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./Card-DSiGcjvP.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./Button-OHlEXVgw.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./Icon-CcuXLuX6.js";/* empty css              */import"./chunk-R3DH46PF-iWUMGBws.js";function d(i){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:j}),`
`,e.jsxs(h,{children:[e.jsx(r.h1,{id:"radio",children:"Radio"}),e.jsx(r.p,{children:`Radioknapper skal benyttes der en bruker kun skal kunne gjøre ett enkelt valg, og ikke flervalg.
Ved et nytt valg skal eventuelle tidligere valg fjernes automatisk. Feilmelding radioknapp skal brukes for å visualisere
feil i avkrysningen, dersom dette har skjedd (f.eks. ikke krysset av for et alternativ).`}),e.jsx(r.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { Radio } from "@kvib/react";
`})}),e.jsx(R,{component:"Radio"}),e.jsx(s,{title:"Radio",description:e.jsxs(a,{children:["Radio brukes med komponenten ",e.jsx(o,{children:"RadioGroup"}),". Man må sette ",e.jsx(o,{children:"value"})," på Radioknappene for at de skal kunne vise hvilken som er valgt. Hvis man setter ",e.jsx(o,{children:"isChecked"})," til true, må man oppdatere knappene med ",e.jsx(o,{children:"onChange"}),"."]}),story:e.jsx(t,{of:n,sourceState:"hidden"})}),e.jsx(s,{title:"Farger",description:e.jsxs(a,{children:["Farge kan endres ved å bruke ",e.jsx(o,{children:"colorScheme"}),"."]}),story:e.jsx(t,{of:k,sourceState:"hidden"})}),e.jsx(s,{title:"Størrelse",description:e.jsxs(a,{children:["Radio knapp kommer i 3 størrelser som kan endres og settes ved å bruke ",e.jsx(o,{children:"size"})," prop. Standard størrelse er medium."]}),story:e.jsx(t,{of:x,sourceState:"hidden"})}),e.jsx(s,{title:"States",isVertical:!0,description:"",story:e.jsx(t,{of:u,sourceState:"hidden"})}),e.jsx(s,{title:"Notat om name Prop",isVertical:!0,description:e.jsxs(a,{children:["Det er anbefalt å bruke ",e.jsx(o,{children:"name"})," prop i ",e.jsx(o,{children:"RadioGroup"})," komponenten, istedet om å bruke det i hvert ",e.jsx(o,{children:"Radio"})," komponent."]}),story:e.jsx(l,{code:`
    // Do this ✅
    <RadioGroup name="form-name">
    <Radio>Radio 1</Radio>
    <Radio>Radio 2</Radio>
    </RadioGroup>

    // Don't do this ❌
    <RadioGroup >
    <Radio name="form-name">Radio 1</Radio>
    <Radio name="form-name">Radio 2</Radio>
    </RadioGroup>
    `,dark:!0})}),e.jsx(f,{light:!0,children:"Props"}),e.jsx(t,{of:n}),e.jsx(c,{of:n})]})]})}function xe(i={}){const{wrapper:r}={...m(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(d,{...i})}):d(i)}export{xe as default};