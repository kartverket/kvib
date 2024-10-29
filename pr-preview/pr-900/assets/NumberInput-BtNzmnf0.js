import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as d}from"./index-DlpNa54Y.js";import{ae as p,af as i,ag as a}from"./index-BajphStD.js";import{D as c,F as u,a as s,b as x}from"./Feedback-C8oPMuBk.js";import{N as j,a as h,b as k,c as f,d as b,e as v,f as g,P as l}from"./NumberInput.stories-CgAhcA0J.js";import{B as I}from"./box-Cs-tJ6EH.js";import{T as o}from"./text-CypcOzo0.js";import{C as t}from"./code-BjQELyKh.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bn6tA5He.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./icon-BO-EX8Jp.js";import"./use-callback-ref-DA6UG1mJ.js";import"./number-D-Zd7p0h.js";import"./use-update-effect-CNg9DBIF.js";import"./use-event-listener-DbiM-QVt.js";import"./use-merge-refs-Bdxaq0s4.js";import"./call-all-DDzecCnU.js";import"./attr-sHTFgF0E.js";import"./use-form-control-C6Tdrol4.js";import"./form-control-f1aYjuHp.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";import"./Form-control-BdnVChy_.js";import"./Form-label-dFo3DmS2.js";function m(n){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:j}),`
`,e.jsxs(c,{children:[e.jsx(r.h1,{id:"numberinput",children:"NumberInput"}),e.jsx(r.p,{children:"NumberInput ligner på Input-komponenten, men den har kontroller for å øke eller redusere numeriske verdier."}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@kvib/react";
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Egnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Svar"}),`
`,e.jsx(r.li,{children:"Tall med eller uten interaktive knapper"}),`
`]}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Uegnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Søk (bruk heller ",e.jsx(r.code,{children:"Search"})," eller ",e.jsx(r.code,{children:"SearchAsync"}),")"]}),`
`,e.jsxs(r.li,{children:["Interaktiv datepicker (bruk heller ",e.jsx(r.code,{children:"DatePicker"}),")"]}),`
`]}),e.jsx(u,{component:"NumberInput"}),e.jsx(s,{title:"Utseende",description:e.jsxs(I,{children:[e.jsxs(o,{children:["Input har fire varianter. ",e.jsx(t,{children:"outline"})," er standardvarianten og skal brukes i de fleste tilfeller.",e.jsx(t,{children:"filled"})," kan brukes som et alternativ til outline. For mindre viktige inputfelt kan",e.jsx(t,{children:"flushed"})," og",e.jsx(t,{children:"unstyled"})," brukes."]}),e.jsxs(o,{children:["Det er mulig å velge mellom fire forskjellige størrelser: ",e.jsx(t,{children:"xs"}),", ",e.jsx(t,{children:"sm"}),", ",e.jsx(t,{children:"md"})," og"," ",e.jsx(t,{children:"lg"}),".",e.jsx(t,{children:"md"})," er standard."]})]}),story:e.jsx(i,{of:h,sourceState:"hidden"})}),e.jsx(s,{title:"NumberInput i FormControl",description:e.jsxs(o,{children:["Ved å benytte seg av NumberInput sammen med ",e.jsx(t,{children:"Form Control"})," vil du få kontekst som"," ",e.jsx(t,{children:"isInvalid"}),",",e.jsx(t,{children:"isDisabled"})," og",e.jsx(t,{children:"isRequired"}),". Slik vil det også være enkelt å legge til en label."]}),story:e.jsx(i,{of:k,sourceState:"hidden"})}),e.jsx(s,{title:"Minimum og maximum value",description:e.jsxs(o,{children:["Tillat minst og maks verdier kan settes ved å bruke ",e.jsx(t,{children:"min"})," og ",e.jsx(t,{children:"max"})," props."]}),story:e.jsx(i,{of:f,sourceState:"hidden"})}),e.jsx(s,{title:"Clamp value when user blurs the input",description:e.jsxs(o,{children:["I de fleste tilfeller kan brukere skrive inn egendefinerte verdier i inndatafeltet. Hvis den innskrevne verdien er større enn ",e.jsx(r.code,{children:"max"}),", tilbakestilles verdien til ",e.jsx(r.code,{children:"max"})," når brukeren trykke ut av inputfeltet. For å deaktivere denne virkemåten, sett ",e.jsx(r.code,{children:"clampValueOnBlur"})," prop til ",e.jsx(r.code,{children:"false"}),"."]}),story:e.jsx(i,{of:b,sourceState:"hidden"})}),e.jsx(s,{title:"Precision",description:e.jsxs(o,{children:["Desimaltall kan justeres ved å bruke ",e.jsx(t,{children:"precision"})," prop."]}),story:e.jsx(i,{of:v,sourceState:"hidden"})}),e.jsx(s,{title:"Størrelser",description:"",story:e.jsx(i,{of:g,sourceState:"hidden"})}),e.jsx(x,{light:!0,children:"Props"}),e.jsx(i,{of:l}),e.jsx(a,{of:l})]})]})}function Ce(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(m,{...n})}):m(n)}export{Ce as default};
