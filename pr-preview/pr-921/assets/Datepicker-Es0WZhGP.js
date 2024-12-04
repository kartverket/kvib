import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as a}from"./index-BGZZYR5m.js";import"./index-CdN4NO-W.js";import{ae as s,af as d,ag as c}from"./index-DE2ZqaQi.js";import{D as t,b as i}from"./Feedback-D9BTLRMH.js";import{D as p,P as l}from"./Datepicker.stories-C6xYCw0t.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-C7_enNTk.js";import"../sb-preview/runtime.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./v4-CQkTLCs1.js";function o(n){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(r.h1,{id:"datepicker",children:"Datepicker"}),`
`,e.jsx(r.p,{children:"Datepicker kombinerer et inputfelt med en popoverkalender hvor brukere kan velge dato."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { Datepicker } from "@kvib/react";
`})}),`
`,e.jsxs(t,{children:[e.jsx(r.p,{children:e.jsx(r.strong,{children:"Egnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Velge en dato"}),`
`]}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Uegnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Valg av dato langt tilbake eller frem i tid"}),`
`]})]}),`
`,e.jsx(i,{light:!0,children:"Retningslinjer"}),`
`,e.jsxs(t,{children:[e.jsx(r.h3,{id:"vurder-om-datepicker-er-den-rette-løsningen-for-deg",children:"Vurder om Datepicker er den rette løsningen for deg"}),e.jsx(r.p,{children:"Datepicker gjør det enkelt for brukere å navigere gjennom datoer innenfor en bestemt tidsperiode. Imidlertid kan det oppstå utfordringer når den skal dekke lengre tidsrom. For eksempel, når brukeren skal velge et år som ligger langt frem eller tilbake i tid, kan det bli nødvendig å bla gjennom en lang liste med 50 eller flere alternativer i en nedtrekksmeny."}),e.jsxs(r.p,{children:["Datovelgere er komplekse komponenter, og i noen tilfeller kan det være mer brukervennlig å la brukeren skrive inn datoen manuelt i en vanlig input. ",e.jsx(r.a,{href:"https://design-system.service.gov.uk/patterns/dates/",rel:"nofollow",children:"Forskning utført av Gov.uk"})," viser at det kan være en fordel å tilby et enkelt tekstfelt fremfor en interaktiv datovelger."]}),e.jsx(r.h3,{id:"label",children:"Label"}),e.jsxs(r.p,{children:["Datepicker skal alltid ha en label. Dersom Datepicker av en eller annen grunn ikke har label må en ",e.jsx(r.code,{children:"aria-label"})," legges til for å tilfredsstille tilgjengelighetskrav."]}),e.jsx(r.h3,{id:"native-datepicker-på-mobil",children:"Native datepicker på mobil"}),e.jsxs(r.p,{children:["Datepicker har som standard satt ",e.jsx(r.code,{children:"useNative"})," til true. Den proppen bestemmer om Datepicker skal bruke native dropdown-kalender på mobil (","<",`480 px). Native Datepicker for mobil er optimalisert for touch, samtidig som brukeren allerede er vant til den.
Med native datepicker vil ikke de følgende proppene bli brukt på mobil: `,e.jsx(r.code,{children:"showDropdownMonthYear"}),", ",e.jsx(r.code,{children:"showOutsideDays"}),", ",e.jsx(r.code,{children:"showWeekNumber"}),", ",e.jsx(r.code,{children:"disabledDays"}),". Det er anbefalt å bruke native Datepicker på mobil, men det er fullt mulig å sette ",e.jsx(r.code,{children:"useNative={false}"})," for å benytte seg av alle props."]}),e.jsx(r.h3,{id:"date",children:"Date"}),e.jsxs(r.p,{children:["Datepicker returnerer datoer i ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",rel:"nofollow",children:"Date"}),"-format. Du må selv ta deg av konvertering til ønsket format og da evt tidssoner. I selve komponenten bruker vi ",e.jsx(r.a,{href:"https://date-fns.org/",rel:"nofollow",children:"date-fns"})," for parsing."]})]}),`
`,e.jsx(i,{light:!0,children:"Props"}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(c,{of:l})]})}function M(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{M as default};
