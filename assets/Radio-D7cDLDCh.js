import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as p}from"./index-DlpNa54Y.js";import{ae as d,af as t,ai as l,ag as c}from"./index-DyJmeG6K.js";import{R as j,a as n,C as k,S as x,b as u}from"./Radio.stories-DQcPRULk.js";import{D as h,F as R,a as s,b as f}from"./Feedback-1PAaDAAT.js";import{T as a}from"./text-rUwQV1v4.js";import{C as o}from"./code-BVCI9Byc.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-OoWxe4yv.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./radio-F6daxEW4.js";import"./use-merge-refs-Bdxaq0s4.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./forward-ref-BWI-Phbn.js";import"./context-CBKykClo.js";import"./cx-BDMMs1jM.js";import"./index-BbAC0Ngi.js";import"./form-control-COBP5YBd.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./use-theme-CBfqdygA.js";import"./attr-sHTFgF0E.js";import"./visually-hidden.style-BUiBK_kv.js";import"./call-all-DDzecCnU.js";import"./split-CzYrjwZo.js";import"./stack-Crl0JO1i.js";import"./responsive-ClFn5vzN.js";import"./children-2ZXUntH3.js";import"./box-B7h7acUJ.js";import"./image-Cz43cXZB.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./heading-D_euA-I1.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./Button-Nuu503uB.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./Icon-DYBtj9XH.js";/* empty css              */function m(i){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:j}),`
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
    `,dark:!0})}),e.jsx(f,{light:!0,children:"Props"}),e.jsx(t,{of:n}),e.jsx(c,{of:n})]})]})}function Fe(i={}){const{wrapper:r}={...p(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(m,{...i})}):m(i)}export{Fe as default};
