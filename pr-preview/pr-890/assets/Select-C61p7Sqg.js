import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import{ae as p,af as l,ag as x}from"./index-Bxppj8b7.js";import{D as n,F as h,a as s,b as a}from"./Feedback-7ODX0rOz.js";import{S as j,a as g,b as f,P as m}from"./Select.stories-Bsm4WmQm.js";import{B as v}from"./box-DeqT4ixr.js";import{T as o}from"./text-ByHKaHOl.js";import{C as t}from"./code-B6T_8ixX.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BQd5Xu44.js";import"../sb-preview/runtime.js";import"./index-Drt3gf4w.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-BzV54DYr.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-inAnnyJ8.js";import"./grid-B2CMUJGq.js";import"./use-theme-CBfqdygA.js";import"./hooks-gaHRB8Pq.js";import"./responsive-BNzRyFLh.js";import"./heading--NES2npU.js";import"./use-style-config-YUvqttAg.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-rgsWy52h.js";import"./providers-BwxcBeey.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-B93s4yJe.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-C1gIBb6o.js";import"./Link-C3IPjqxf.js";import"./select-ZTEkT6fV.js";import"./use-form-control-1lTcASP6.js";import"./form-control-r5o_asaM.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./split-CzYrjwZo.js";import"./Form-control-Dfay2bjP.js";import"./Form-label-B-qAuQLc.js";import"./stack-REYSnkee.js";import"./children-2ZXUntH3.js";import"./Icon-BQMlFqUK.js";/* empty css              */function d(i){const r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:j}),`
`,e.jsx(r.h1,{id:"select",children:"Select"}),`
`,e.jsx(r.p,{children:"Select er et komponent som gjør at brukere kan velge én verdi fra forhåndsdefinerte alternativer."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { Select } from "@kvib/react";
`})}),`
`,e.jsxs(n,{children:[e.jsx(r.p,{children:e.jsx(r.strong,{children:"Egnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Mange alternativer"}),`
`,e.jsx(r.li,{children:"Å velge ett alternativ"}),`
`]}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Uegnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Navigasjon"}),`
`,e.jsx(r.li,{children:"Å velge flere alternativ"}),`
`,e.jsx(r.li,{children:"Færre enn 7 alternativer"}),`
`]}),e.jsx(h,{component:"Select"})]}),`
`,e.jsxs(n,{children:[e.jsx(s,{title:"Utseende",description:e.jsxs(v,{children:[e.jsxs(o,{children:["Select har fire varianter. ",e.jsx(t,{children:"outline"})," er standardvarianten og skal brukes i de fleste tilfeller.",e.jsx(t,{children:"filled"})," kan brukes som et alternativ til outline. For mindre viktige selecter kan",e.jsx(t,{children:"flushed"})," og",e.jsx(t,{children:"unstyled"})," brukes."]}),e.jsxs(o,{children:["Det er mulig å velge mellom fire forskjellige størrelser: ",e.jsx(t,{children:"xs"}),", ",e.jsx(t,{children:"sm"}),", ",e.jsx(t,{children:"md"})," og",e.jsx(t,{children:"lg"}),".",e.jsx(t,{children:"md"})," er standard."]})]}),story:e.jsx(l,{of:g})}),e.jsx(s,{title:"Select i form",description:e.jsxs(o,{children:["Ved å benytte seg av Select sammen med ",e.jsx(t,{children:"Form Control"})," vil du få kontekst som ",e.jsx(t,{children:"isInvalid"}),",",e.jsx(t,{children:"isDisabled"})," og",e.jsx(t,{children:"isRequired"}),". Slik vil det også være enkelt å legge til en label."]}),story:e.jsx(l,{of:f})})]}),`
`,e.jsx(a,{light:!0,children:"Retningslinjer"}),`
`,e.jsxs(n,{children:[e.jsx(r.h3,{id:"antall-alternativer",children:"Antall alternativer"}),e.jsxs(r.p,{children:["Select funker godt når det er 7 eller flere alternativer. Om det er færre alternativer vil det være enklere for brukerne å forholde seg til ",e.jsx(r.code,{children:"Radio"}),". Vurder også om det er behov for å søke i eller filtrere alternativene. Da anbefales det å bruke Combobox."]}),e.jsx(r.h3,{id:"label",children:"Label"}),e.jsx(r.p,{children:"Select skal alltid ha en label. Dersom Input av en eller annen grunn ikke har label må en aria-label legges til for å tilfredsstille tilgjengelighetskrav."})]}),`
`,e.jsx(a,{light:!0,children:"Props"}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(x,{of:m})]})}function Se(i={}){const{wrapper:r}={...c(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(d,{...i})}):d(i)}export{Se as default};
