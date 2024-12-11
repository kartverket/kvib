import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as d}from"./index-BGZZYR5m.js";import{ae as p,af as i,ah as t,ag as m}from"./index-z6rC7spY.js";import{D as s,F as c,a as g,b as o}from"./Feedback-BK6kEIYV.js";import{S as j,a as h,b as x,P as l}from"./Spinner.stories-DB7iMeIE.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-Curwxzbv.js";import"../sb-preview/runtime.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-B9GIEwwi.js";function a(r){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:j}),`
`,e.jsx(n.h1,{id:"spinner",children:"Spinner"}),`
`,e.jsx(n.p,{children:"Spinner gir et visuelt signal om at en oppgave prosseseres og vil gi en endring eller et resultat."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Spinner } from "@kvib/react";
`})}),`
`,e.jsxs(s,{children:[e.jsx(n.p,{children:e.jsx(n.strong,{children:"Egnet til:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Vise lasting eller ubestemt ventetid"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Indikere lasting som tar mer enn ett sekund"}),`
`]}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Uegnet til:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Vise framgang i prosesser"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Indikere lasting kortere enn ett sekund"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Indikere over 5 minutters ventetid"}),`
`]}),`
`]}),e.jsx(c,{component:"Spinner"})]}),`
`,e.jsx(s,{children:e.jsx(g,{title:"Utseende",description:`Fargene burde bli valgt med tanke på kontrast. Velg size og thickness slik at den gir mening til komponentet eller innholdet som skal lastes..
Farten kan justeres for å gjenspeile estimert ventetid. `,story:e.jsxs(i,{children:[e.jsx(t,{of:h}),e.jsx(t,{of:x})]})})}),`
`,e.jsx(o,{light:!0,children:"Retningslinjer"}),`
`,e.jsxs(s,{children:[e.jsx(n.h3,{id:"spinner-vs-progress",children:"Spinner vs. Progress"}),e.jsx(n.p,{children:`Progress burde velges over spinner hvis man kan se prosentvis framgang, som f.eks. upload/download av filer, eller skjema med flere steg
(Der kan stepper vurderes også). Spinner burde brukes over Progress uansett, så lenge ventetiden er minimal.`}),e.jsx(n.h3,{id:"ventetid",children:"Ventetid"}),e.jsx(n.p,{children:`Om bruker må vente, vil spinner bidra til å redusere usikkerhet. Det tar ikke lang tid før folk blir
utålmodige og/eller forvirra over at ingenting skjer. Hvis ventetiden overstiger 9 sekunder, bør bruker se en
forklaring sammen med Progress, og tekst som forklarer hva maskinen jobber med.`})]}),`
`,e.jsx(o,{light:!0,children:"Props"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(m,{of:l})]})}function V(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{V as default};
