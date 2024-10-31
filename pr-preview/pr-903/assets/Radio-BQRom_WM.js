import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as d}from"./index-DlpNa54Y.js";import{ae as p,af as t,ai as l,ag as c}from"./index-eN0ELeIH.js";import{D as j,F as k,a as s,b as x}from"./Feedback-oujG440w.js";import{R as u,P as n,C as h,S as f,a as R}from"./Radio.stories-Dj8UxE3X.js";import{T as a}from"./text-D14Jyc6W.js";import{C as r}from"./code-pQQvL61V.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BjjkCpBY.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-CwIaBbUI.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./image-GsZWH-VT.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-ZnRIKZLi.js";import"./grid-BNFEBO0r.js";import"./use-theme-CeOC8r1f.js";import"./hooks-Dk7VeZ_r.js";import"./responsive-CwLgsqRj.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-jUBPBQ-A.js";import"./providers-BmY41TRh.js";import"./emotion-react.browser.esm-0Zac8NuU.js";import"./context-CBKykClo.js";import"./calc-C4XOv3Qc.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-v5DFvFs4.js";import"./Link-D6DR4S49.js";import"./radio-Cpsvm0ym.js";import"./use-merge-refs-Bdxaq0s4.js";import"./index-BbAC0Ngi.js";import"./form-control-RaYef-ka.js";import"./attr-sHTFgF0E.js";import"./visually-hidden.style-BUiBK_kv.js";import"./call-all-DDzecCnU.js";import"./split-CzYrjwZo.js";import"./stack-BdCvkUuU.js";import"./children-2ZXUntH3.js";function m(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:u}),`
`,e.jsxs(j,{children:[e.jsx(o.h1,{id:"radio",children:"Radio"}),e.jsx(o.p,{children:`Radioknapper skal benyttes der en bruker kun skal kunne gjøre ett enkelt valg, og ikke flervalg.
Ved et nytt valg skal eventuelle tidligere valg fjernes automatisk. Feilmelding radioknapp skal brukes for å visualisere
feil i avkrysningen, dersom dette har skjedd (f.eks. ikke krysset av for et alternativ).`}),e.jsx(o.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { Radio } from "@kvib/react";
`})}),e.jsx(k,{component:"Radio"}),e.jsx(s,{title:"Radio",description:e.jsxs(a,{children:["Radio brukes med komponenten ",e.jsx(r,{children:"RadioGroup"}),". Man må sette ",e.jsx(r,{children:"value"})," på Radioknappene for at de skal kunne vise hvilken som er valgt. Hvis man setter ",e.jsx(r,{children:"isChecked"})," til true, må man oppdatere knappene med ",e.jsx(r,{children:"onChange"}),"."]}),story:e.jsx(t,{of:n,sourceState:"hidden"})}),e.jsx(s,{title:"Farger",description:e.jsxs(a,{children:["Farge kan endres ved å bruke ",e.jsx(r,{children:"colorScheme"}),"."]}),story:e.jsx(t,{of:h,sourceState:"hidden"})}),e.jsx(s,{title:"Størrelse",description:e.jsxs(a,{children:["Radio knapp kommer i 3 størrelser som kan endres og settes ved å bruke ",e.jsx(r,{children:"size"})," prop. Standard størrelse er medium."]}),story:e.jsx(t,{of:f,sourceState:"hidden"})}),e.jsx(s,{title:"States",isVertical:!0,description:"",story:e.jsx(t,{of:R,sourceState:"hidden"})}),e.jsx(s,{title:"Notat om name Prop",isVertical:!0,description:e.jsxs(a,{children:["Det er anbefalt å bruke ",e.jsx(r,{children:"name"})," prop i ",e.jsx(r,{children:"RadioGroup"})," komponenten, istedet om å bruke det i hvert ",e.jsx(r,{children:"Radio"})," komponent."]}),story:e.jsx(l,{code:`
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
    `,dark:!0})}),e.jsx(x,{light:!0,children:"Props"}),e.jsx(t,{of:n}),e.jsx(c,{of:n})]})]})}function ve(i={}){const{wrapper:o}={...d(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(m,{...i})}):m(i)}export{ve as default};
