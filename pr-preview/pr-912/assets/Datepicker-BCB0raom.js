import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as p}from"./index-BRkUXrbv.js";import{ae as a,af as s,ag as m}from"./index-DIgHsHRQ.js";import{D as i,b as o}from"./Feedback-DT-gPCEI.js";import{D as d,P as n}from"./Datepicker.stories-ECWGnNvG.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D563mp7K.js";import"../sb-preview/runtime.js";import"./index-DI5DFbIx.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./box-C9nK2UO9.js";import"./factory-Dr_T95xI.js";import"./image-CB2SsSea.js";import"./simple-grid-BMz7U_wE.js";import"./walk-object-MOVJDcbI.js";import"./is-D1VN0Vzs.js";import"./grid-BtoyrwbI.js";import"./heading-D7346gVA.js";import"./create-recipe-context-AlCFSakd.js";import"./empty-DSVal0bC.js";import"./use-recipe-CWoigbDD.js";import"./text-DJW8V014.js";import"./card-sQbwxR_z.js";import"./create-slot-recipe-context-CYF_0Bn9.js";import"./flex-DKwYg45R.js";import"./Link-CzKHhpgD.js";import"./link-DWtvkXlG.js";import"./v4-CQkTLCs1.js";import"./style-CiF8_und.js";import"./Input-zeRsfcEh.js";import"./input.recipe-B5ecp7-e.js";import"./config-DPmv_Xti.js";import"./input-D7jApd-z.js";import"./factory-C6a3rcZ4.js";import"./index-CxfNaWX6.js";import"./use-field-context-CcEUgBGI.js";import"./create-context-DPShtm6F.js";import"./popover-Dvsh3TIE.js";import"./close-button-C8_g2cP4.js";import"./index-BteWwxSb.js";import"./iconBase-CTl-8GCs.js";import"./icon-button-CQVMxZrp.js";import"./button-Cbvbv_aU.js";import"./portal-6abwbB-C.js";import"./index-DXXQsaeK.js";import"./use-environment-context-DqdFjJyw.js";import"./popover-DkE6VIAm.js";import"./split-presence-props-DcTE3k_W.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-context-rOY5x4wx.js";import"./index-Ctx6eFvH.js";import"./index-C4pvfroP.js";import"./use-event-CSfbiBcH.js";import"./index-DRAB5hxb.js";import"./index-BRNWFSEf.js";import"./index-5IigYcSb.js";import"./floating-ui.dom-BfjzW660.js";import"./focus-trap.esm-LvC8KysD.js";import"./index-ijNPfJJu.js";import"./index-CkRjxV2T.js";import"./index-Dltf2pIY.js";import"./use-locale-context-CnLnjqE7.js";import"./group-DiEFhqFk.js";import"./attr-C3Jtgmrz.js";import"./input-element-CpSc6Iej.js";import"./IconButton-BCET4TB0.js";import"./absolute-center-CNroa-V3.js";import"./spinner-DP07Pf0W.js";import"./Icon-DALSbbL6.js";/* empty css              */import"./colors-DLx86jGi.js";import"./parse-BEM0nVXK.js";function l(t){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(r.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(r.p,{children:"Datepicker kombinerer et inputfelt med en popoverkalender hvor brukere kan velge dato."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { Datepicker } from "@kvib/react";
`})}),`
`,e.jsxs(i,{children:[e.jsx(r.p,{children:e.jsx(r.strong,{children:"Egnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Velge en dato"}),`
`]}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Uegnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Valg av dato langt tilbake eller frem i tid"}),`
`]})]}),`
`,e.jsx(o,{light:!0,children:"Retningslinjer"}),`
`,e.jsxs(i,{children:[e.jsx(r.h3,{id:"vurder-om-datepicker-er-den-rette-løsningen-for-deg",children:"Vurder om Datepicker er den rette løsningen for deg"}),e.jsx(r.p,{children:"Datepicker gjør det enkelt for brukere å navigere gjennom datoer innenfor en bestemt tidsperiode. Imidlertid kan det oppstå utfordringer når den skal dekke lengre tidsrom. For eksempel, når brukeren skal velge et år som ligger langt frem eller tilbake i tid, kan det bli nødvendig å bla gjennom en lang liste med 50 eller flere alternativer i en nedtrekksmeny."}),e.jsxs(r.p,{children:["Datovelgere er komplekse komponenter, og i noen tilfeller kan det være mer brukervennlig å la brukeren skrive inn datoen manuelt i en vanlig input. ",e.jsx(r.a,{href:"https://design-system.service.gov.uk/patterns/dates/",rel:"nofollow",children:"Forskning utført av Gov.uk"})," viser at det kan være en fordel å tilby et enkelt tekstfelt fremfor en interaktiv datovelger."]}),e.jsx(r.h3,{id:"label",children:"Label"}),e.jsxs(r.p,{children:["Datepicker skal alltid ha en label. Dersom Datepicker av en eller annen grunn ikke har label må en ",e.jsx(r.code,{children:"aria-label"})," legges til for å tilfredsstille tilgjengelighetskrav."]}),e.jsx(r.h3,{id:"native-datepicker-på-mobil",children:"Native datepicker på mobil"}),e.jsxs(r.p,{children:["Datepicker har som standard satt ",e.jsx(r.code,{children:"useNative"})," til true. Den proppen bestemmer om Datepicker skal bruke native dropdown-kalender på mobil (","<",`480 px). Native Datepicker for mobil er optimalisert for touch, samtidig som brukeren allerede er vant til den.
Med native datepicker vil ikke de følgende proppene bli brukt på mobil: `,e.jsx(r.code,{children:"showDropdownMonthYear"}),", ",e.jsx(r.code,{children:"showOutsideDays"}),", ",e.jsx(r.code,{children:"showWeekNumber"}),", ",e.jsx(r.code,{children:"disabledDays"}),". Det er anbefalt å bruke native Datepicker på mobil, men det er fullt mulig å sette ",e.jsx(r.code,{children:"useNative={false}"})," for å benytte seg av alle props."]}),e.jsx(r.h3,{id:"date",children:"Date"}),e.jsxs(r.p,{children:["Datepicker returnerer datoer i ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",rel:"nofollow",children:"Date"}),"-format. Du må selv ta deg av konvertering til ønsket format og da evt tidssoner. I selve komponenten bruker vi ",e.jsx(r.a,{href:"https://date-fns.org/",rel:"nofollow",children:"date-fns"})," for parsing."]})]}),`
`,e.jsx(o,{light:!0,children:"Props"}),`
`,e.jsx(s,{of:n}),`
`,e.jsx(m,{of:n})]})}function Xe(t={}){const{wrapper:r}={...p(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(l,{...t})}):l(t)}export{Xe as default};
