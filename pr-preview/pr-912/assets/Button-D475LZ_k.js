import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as k}from"./index-BRkUXrbv.js";import{ae as m,af as s,ag as h}from"./index-CgiBEKmz.js";import{D as l,F as c,a as o,b as a}from"./Feedback-CUsScRJr.js";import{B as g,a as j,b as u,c as x,d as v,P as p}from"./Button.stories-CdAIbpm_.js";import{T as t}from"./text-DJW8V014.js";import{B as f}from"./box-C9nK2UO9.js";import{C as n}from"./code-BXkiuTb0.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BDF9EN4o.js";import"../sb-preview/runtime.js";import"./index-DI5DFbIx.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./image-CB2SsSea.js";import"./factory-Dr_T95xI.js";import"./simple-grid-BMz7U_wE.js";import"./walk-object-MOVJDcbI.js";import"./is-D1VN0Vzs.js";import"./grid-BtoyrwbI.js";import"./heading-D7346gVA.js";import"./create-recipe-context-AlCFSakd.js";import"./empty-DSVal0bC.js";import"./use-recipe-CWoigbDD.js";import"./card-sQbwxR_z.js";import"./create-slot-recipe-context-CYF_0Bn9.js";import"./flex-DKwYg45R.js";import"./Link-DqK-vYp6.js";import"./link-DWtvkXlG.js";import"./group-DiEFhqFk.js";import"./attr-C3Jtgmrz.js";import"./Button-BPW1m5nd.js";import"./button-Cbvbv_aU.js";import"./center-7hWxgEBL.js";import"./spinner-DP07Pf0W.js";import"./h-stack-CjVo9nnl.js";import"./stack-Bh3oWNRR.js";import"./Icon-CKFCJN9k.js";/* empty css              */import"./v-stack-bWf0p04U.js";import"./stack-separator-D2gEZy64.js";function d(i){const r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:g}),`
`,e.jsx(r.h1,{id:"button",children:"Button"}),`
`,e.jsx(r.p,{children:"Button brukes til å utføre en handling. Det kan for eksempel være å sende inn et skjema, beregne resultater eller åpne en modal."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { Button } from "@kvib/react";
`})}),`
`,e.jsxs(l,{children:[e.jsx(r.p,{children:e.jsx(r.strong,{children:"Egnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Innsending av skjema"}),`
`,e.jsx(r.li,{children:"Beregning av resultater"}),`
`,e.jsx(r.li,{children:"Trigger for åpning av modal"}),`
`]}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Uegnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Trigger for vis/skjul av innhold (bruk heller Accordion)"}),`
`,e.jsx(r.li,{children:"Navigasjon (bruk heller Link)"}),`
`,e.jsx(r.li,{children:"Knapp med kun ikon (bruk heller IconButton)"}),`
`]}),e.jsx(c,{component:"Button"})]}),`
`,e.jsxs(l,{children:[e.jsx(o,{title:"Fargevalg",description:e.jsx(t,{children:"I Kartverket har vi to sett med knappestiler. Et nettsidesett og et forvaltningsett. For løsninger som skal gå inn under eller oppfattes som kartverket.no, skal man bruke det grønne nettsidesettet. For karttjenester, forvaltningstjenester og lignende benytter vi oss av det blå settet. Dette er for å få en tydelig kontrast mot kartet."}),story:e.jsx(s,{of:j})}),e.jsx(o,{title:"Varianter",description:e.jsxs(f,{children:[e.jsx(t,{as:"b",children:"Primary"}),e.jsx(t,{children:'Denne varianten skal brukes der løsningen har en tydelig primærfunksjon. Det kan være "Lagre" eller "Send søknad". Som en hovedregel burde det bare være én hovedknapp på hver side.'}),e.jsx(t,{as:"b",children:"Secondary"}),e.jsx(t,{children:"Secondary-varianten brukes som regel alle andre steder som ikke er primærfunksjon. Det betyr at de fleste knappene i løsningene til Kartverket vil se slik ut."}),e.jsx(t,{as:"b",children:"Tertiary"}),e.jsx(t,{children:"Tertiary kan brukes som et ustylet alternativ for handlinger som ikke trenger like mye oppmerksomhet."}),e.jsx(t,{as:"b",children:"Ghost"}),e.jsx(t,{children:"Ghost-varianten kan brukes som et alternativ til Secondary-varianten ved behov."})]}),story:e.jsx(s,{of:u})}),e.jsx(o,{title:"Ikoner",description:e.jsxs(t,{children:["Ikoner kan legges til ved bruk av ",e.jsx(n,{children:"leftIcon"})," og ",e.jsx(n,{children:"rightIcon"}),". Teksten burde likevel være deskriptiv nok til at knappen gir mening uten ikon. Det vil si at ikonet i utgangspunktet er illustrativt tilskudd, men det kan ofte understøtte handlingen til knappen. Dersom du trenger en knapp med kun ikon, kan du ta en titt på ",e.jsx(n,{children:"IconButton"}),"."]}),story:e.jsx(s,{of:x})}),e.jsx(o,{title:"Gruppering",description:e.jsxs(t,{children:["Dersom flere Button-komponenter skal stå samlet og grupperes, kan en bruke Stack eller ButtonGroup. Sistnevnte er spesialisert for knapper og inneholder relevante props:",e.jsx(n,{children:"size"}),",",e.jsx(n,{children:"colorScheme"}),",",e.jsx(n,{children:"variant"}),",",e.jsx(n,{children:"isDisabled"}),",",e.jsx(n,{children:"isAttached"}),",",e.jsx(n,{children:"orientation"}),",",e.jsx(n,{children:"spacing"}),"."]}),story:e.jsx(s,{of:v})})]}),`
`,e.jsx(a,{light:!0,children:"Retningslinjer"}),`
`,e.jsxs(l,{children:[e.jsx(r.h3,{id:"tekst-på-button",children:"Tekst på Button"}),e.jsx(r.p,{children:"Den gjeldene anbefalingen for å gjøre en knapp godt lesbar er å bruke stor forbokstav og små bokstaver på resten av ordene (sentence case)."}),e.jsx(r.h3,{id:"antall-handlinger",children:"Antall handlinger"}),e.jsx(r.p,{children:`En knapp bør ha en tydelig handlingsbeskrivelse. Hvis en knapp inneholder flere handlinger eller en lang beskrivelse, er det best å oppdele dette i flere separate knapper for å skape klarhet og forbedre brukeropplevelsen.
Det vil si at det bør være én handling per knapp og heller flere klikk for brukeren.`}),e.jsx(r.h3,{id:"varianter-i-gruppe",children:"Varianter i gruppe"}),e.jsx(r.p,{children:"Bruk samme farge på knappene i en gruppe. Det er også viktig å være konsekvent med bruk av ikoner i en gruppe. Det vil si at alle knappene i en gruppe bør ha ikon eller ingen av dem."}),e.jsxs(r.p,{children:['Bruk forskjellige varianter på knappene dersom handlingene har motsatt hensikt. For eksempel kan "Lagre" være ',e.jsx(n,{children:"primary"}),', mens "Slett" er ',e.jsx(n,{children:"secondary"}),"."]})]}),`
`,e.jsx(a,{light:!0,children:"Props"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(h,{of:p})]})}function de(i={}){const{wrapper:r}={...k(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(d,{...i})}):d(i)}export{de as default};