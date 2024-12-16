import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as o}from"./index-BGZZYR5m.js";import"./index-BIL3J8Um.js";import{ae as d,af as a,ag as c}from"./index-q93jGdF8.js";import{D as t,b as l}from"./Feedback-DVsCmwPa.js";import{I as h,P as s}from"./Input.stories-Cke9ZQj3.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-V5xakckT.js";import"../sb-preview/runtime.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function i(r){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsxs(t,{children:[e.jsx(n.h1,{id:"input",children:"Input"}),e.jsx(n.p,{children:"Input brukes til å la brukere skrive inn tekst, tall, datoer, etc. i et skjema."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Input, InputGroup, InputLeftElement, InputRightElement, InputLeftAddon, InputRightAddon } from "@kvib/react";
`})}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Egnet til:"})}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Korte tekster"}),`
`,e.jsx(n.li,{children:"Svar"}),`
`,e.jsxs(n.li,{children:["Tekst, url, epost, etc. (de fleste ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types",rel:"nofollow",children:e.jsx(n.code,{children:"<input>-typer"})}),")"]}),`
`,e.jsx(n.li,{children:"Tall uten interaktive knapper"}),`
`,e.jsx(n.li,{children:"Enkel datoinput uten interaktiv datepicker"}),`
`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Uegnet til:"})}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Lengre tekster (Bruk heller ",e.jsx(n.code,{children:"TextArea"}),")"]}),`
`,e.jsxs(n.li,{children:["Tall med interaktive knapper (bruk heller ",e.jsx(n.code,{children:"NumberInput"}),")"]}),`
`,e.jsxs(n.li,{children:["Søk (bruk heller ",e.jsx(n.code,{children:"Search"})," eller ",e.jsx(n.code,{children:"SearchAsync"}),")"]}),`
`,e.jsxs(n.li,{children:["Interaktiv datepicker (bruk heller ",e.jsx(n.code,{children:"DatePicker"}),")"]}),`
`]})]}),`
`,e.jsx(l,{light:!0,children:"Retningslinjer"}),`
`,e.jsxs(t,{children:[e.jsx(n.h3,{id:"isreadonly",children:"isReadOnly"}),e.jsxs(n.p,{children:[`Readonly-attributtet spesifiserer at et inputfelt i et skjema er skrivebeskyttet.
Et skrivebeskyttet felt kan ikke endres, men brukere kan tabbe til det, markere det og kopiere tekst (tekst kan settes med `,e.jsx(n.code,{children:"value"}),"-proppen) fra det. Til forskjell fra disabled-felter vil innholdet i readonly-felter inkluderes når et skjema sendes inn."]}),e.jsx(n.h3,{id:"label",children:"Label"}),e.jsxs(n.p,{children:["Input skal alltid ha en label. Dersom Input av en eller annen grunn ikke har label må en ",e.jsx(n.code,{children:"aria-label"})," legges til for å tilfredsstille tilgjengelighetskrav."]}),e.jsx(n.h3,{id:"autocomplete",children:"Autocomplete"}),e.jsxs(n.p,{children:["Bruk ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",rel:"nofollow",children:"autocomplete"})," for felter som mottar personlig informasjon. For at nettleseren skal kunne fylle ut felter med personlig informasjon må ofte det følgende være til stede:"]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name"})," og/eller ",e.jsx(n.code,{children:"id"})," på ",e.jsx(n.code,{children:"Input"})]}),`
`,e.jsxs(n.li,{children:["Være i et ",e.jsx(n.code,{children:"<form>"}),"-element"]}),`
`,e.jsxs(n.li,{children:["Formet har en ",e.jsx(n.code,{children:"submit"}),"-knapp"]}),`
`]}),e.jsxs(n.p,{children:["Verdier for ",e.jsx(n.code,{children:"autocomplete"})," på hvert input-element kan også settes ved f.eks: ",e.jsx(n.code,{children:'autocomplete="given-name"'}),". Verdiene er spesifisert hos ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",rel:"nofollow",children:"mdn"}),"."]}),e.jsx(n.p,{children:e.jsxs(n.strong,{children:["For felter som etterspør personlig informasjon om en annen person enn brukeren, skru av autocomplete - ",e.jsx(n.code,{children:'autocomplete="off"'}),"."]})}),e.jsx(n.h3,{id:"input-og-formatering",children:"Input og formatering"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Bruk gjerne inputtyper som tilsvarer informasjonstypen du ber om (",e.jsx(n.code,{children:"tel"}),", ",e.jsx(n.code,{children:"email"}),", ",e.jsx(n.code,{children:"url"}),", osv.). Disse tilbyr mobilbrukere et tastatur som er tilpasset inputtypen, men ta i betraktning at de kan også utløse client-side validering av feltets input."]}),`
`,e.jsx(n.li,{children:"Vær generøs i hva du aksepterer av data. Godta input fra brukeren så lenge den er forståelig, f.eks. telefonnumre med mellomrom, personnumre med punktum, epost-adresser med mellomrom til slutt."}),`
`,e.jsx(n.li,{children:"Dersom input blir automatisk formattert, må dette være synlig for brukere slik at de kan kontrollere om det ble riktig."}),`
`,e.jsxs(n.li,{children:["Feltets ",e.jsx(n.code,{children:"name"})," må inkludere og starte med teksten i ",e.jsx(n.code,{children:"label"}),"."]}),`
`,e.jsx(n.li,{children:"Unngå bruk av all-caps og kursiv tekst til labels. Disse er vanskeligere å lese."}),`
`]}),e.jsx(n.h3,{id:"number-input",children:"Number input"}),e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Sjekk ut ",e.jsx(n.code,{children:"NumberInput"}),"-komponentet dersom du skal bruke et inputfelt for tall med interaktive knapper for å styre."]})}),e.jsxs(n.p,{children:["Unngå å bruke ",e.jsx(n.code,{children:"Input"})," med ",e.jsx(n.code,{children:'type="number"'}),". ",e.jsx(n.a,{href:"https://stackoverflow.blog/2022/12/26/why-the-number-input-is-the-worst-input/",rel:"nofollow",children:"Denne bloggposten"}),` på stackoverflow belyser problemene et number input kan ha.
`,e.jsx(n.a,{href:"https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/",rel:"nofollow",children:"Gov.uk"})," har laget en enkel løsning dersom man bare trenger heltall:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-HTML",children:`    type="text" inputMode="numeric" pattern="[0-9]*"
`})}),e.jsxs(n.p,{children:["Trenger man muligheten til å bruke desimaltall vil ",e.jsx(n.code,{children:'type="text"'})," med js-validering være enklest."]})]}),`
`,e.jsx(l,{light:!0,children:"Props"}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(c,{of:s})]})}function w(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{w as default};
