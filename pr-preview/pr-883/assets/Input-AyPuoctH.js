import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as c,af as i,ag as h}from"./index-BY5Alqqx.js";import{I as u,a as j,b as x,c as k,d as o}from"./Input.stories-CCR39oNn.js";import{D as d,F as g,a as s,b as a}from"./Feedback-BbfhfFka.js";import{B as f}from"./box-B7h7acUJ.js";import{T as l}from"./text-rUwQV1v4.js";import{C as t}from"./code-BVCI9Byc.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BtDfFzg7.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./input-DYJm5yJ_.js";import"./use-form-control-Dd261dKs.js";import"./form-control-COBP5YBd.js";import"./forward-ref-BWI-Phbn.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./use-theme-CBfqdygA.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./factory-CdGA0D9p.js";import"./context-CBKykClo.js";import"./cx-BDMMs1jM.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./stack-Crl0JO1i.js";import"./responsive-ClFn5vzN.js";import"./children-2ZXUntH3.js";import"./Form-control-DGJzYvuD.js";import"./Form-label-DGuXXNOx.js";import"./input-group-CIU2uNRP.js";import"./input-element-CdyGj3gy.js";import"./Icon-YKyBU4O5.js";/* empty css              */import"./input-addon-CUpTjHY0.js";import"./image-Cz43cXZB.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./heading-D_euA-I1.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./Button-D_Q0PYb8.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";function p(n){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:u}),`
`,e.jsxs(d,{children:[e.jsx(r.h1,{id:"input",children:"Input"}),e.jsx(r.p,{children:"Input brukes til å la brukere skrive inn tekst, tall, datoer, etc. i et skjema."}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { Input, InputGroup, InputLeftElement, InputRightElement, InputLeftAddon, InputRightAddon } from "@kvib/react";
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Egnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Korte tekster"}),`
`,e.jsx(r.li,{children:"Svar"}),`
`,e.jsxs(r.li,{children:["Tekst, url, epost, etc. (de fleste ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types",rel:"nofollow",children:e.jsx(r.code,{children:"<input>-typer"})}),")"]}),`
`,e.jsx(r.li,{children:"Tall uten interaktive knapper"}),`
`,e.jsx(r.li,{children:"Enkel datoinput uten interaktiv datepicker"}),`
`]}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Uegnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Lengre tekster (Bruk heller ",e.jsx(r.code,{children:"TextArea"}),")"]}),`
`,e.jsxs(r.li,{children:["Tall med interaktive knapper (bruk heller ",e.jsx(r.code,{children:"NumberInput"}),")"]}),`
`,e.jsxs(r.li,{children:["Søk (bruk heller ",e.jsx(r.code,{children:"Search"})," eller ",e.jsx(r.code,{children:"SearchAsync"}),")"]}),`
`,e.jsxs(r.li,{children:["Interaktiv datepicker (bruk heller ",e.jsx(r.code,{children:"DatePicker"}),")"]}),`
`]}),e.jsx(g,{component:"Input"}),e.jsx(s,{title:"Utseende",description:e.jsxs(f,{children:[e.jsxs(l,{children:["Input har fire varianter. ",e.jsx(t,{children:"outline"})," er standardvarianten og skal brukes i de fleste tilfeller.",e.jsx(t,{children:"filled"})," kan brukes som et alternativ til outline. For mindre viktige inputfelt kan",e.jsx(t,{children:"flushed"})," og",e.jsx(t,{children:"unstyled"})," brukes."]}),e.jsxs(l,{children:["Det er mulig å velge mellom fire forskjellige størrelser: ",e.jsx(t,{children:"xs"}),", ",e.jsx(t,{children:"sm"}),", ",e.jsx(t,{children:"md"})," og"," ",e.jsx(t,{children:"lg"}),".",e.jsx(t,{children:"md"})," er standard."]})]}),story:e.jsx(i,{of:j})}),e.jsx(s,{title:"Input i FormControl",description:e.jsxs(l,{children:["Ved å benytte seg av Input sammen med ",e.jsx(t,{children:"Form Control"})," vil du få kontekst som ",e.jsx(t,{children:"isInvalid"}),",",e.jsx(t,{children:"isDisabled"})," og",e.jsx(t,{children:"isRequired"}),". Slik vil det også være enkelt å legge til en label."]}),story:e.jsx(i,{of:x})}),e.jsx(s,{title:"Ikoner og addons",description:e.jsxs(l,{children:["Input kan ha ikoner og addons på venstre og høyre side. Disse kan brukes til å vise tilleggsinformasjon eller funksjonalitet. For å benytte seg av dette må ",e.jsx(t,{children:"Input"})," plasseres i en ",e.jsx(t,{children:"InputGroup"}),". Da er det mulig å bruke ",e.jsx(t,{children:"InputLeftElement"})," og ",e.jsx(t,{children:"InputRightElement"})," for å legge til ikoner/knapper og"," ",e.jsx(t,{children:"InputLeftAddon"})," og ",e.jsx(t,{children:"InputRightAddon"})," for å legge til addons."]}),story:e.jsx(i,{of:k})})]}),`
`,e.jsx(a,{light:!0,children:"Retningslinjer"}),`
`,e.jsxs(d,{children:[e.jsx(r.h3,{id:"isreadonly",children:"isReadOnly"}),e.jsxs(r.p,{children:[`Readonly-attributtet spesifiserer at et inputfelt i et skjema er skrivebeskyttet.
Et skrivebeskyttet felt kan ikke endres, men brukere kan tabbe til det, markere det og kopiere tekst (tekst kan settes med `,e.jsx(r.code,{children:"value"}),"-proppen) fra det. Til forskjell fra disabled-felter vil innholdet i readonly-felter inkluderes når et skjema sendes inn."]}),e.jsx(r.h3,{id:"label",children:"Label"}),e.jsxs(r.p,{children:["Input skal alltid ha en label. Dersom Input av en eller annen grunn ikke har label må en ",e.jsx(r.code,{children:"aria-label"})," legges til for å tilfredsstille tilgjengelighetskrav."]}),e.jsx(r.h3,{id:"autocomplete",children:"Autocomplete"}),e.jsxs(r.p,{children:["Bruk ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",rel:"nofollow",children:"autocomplete"})," for felter som mottar personlig informasjon. For at nettleseren skal kunne fylle ut felter med personlig informasjon må ofte det følgende være til stede:"]}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"name"})," og/eller ",e.jsx(r.code,{children:"id"})," på ",e.jsx(r.code,{children:"Input"})]}),`
`,e.jsxs(r.li,{children:["Være i et ",e.jsx(r.code,{children:"<form>"}),"-element"]}),`
`,e.jsxs(r.li,{children:["Formet har en ",e.jsx(r.code,{children:"submit"}),"-knapp"]}),`
`]}),e.jsxs(r.p,{children:["Verdier for ",e.jsx(r.code,{children:"autocomplete"})," på hvert input-element kan også settes ved f.eks: ",e.jsx(r.code,{children:'autocomplete="given-name"'}),". Verdiene er spesifisert hos ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",rel:"nofollow",children:"mdn"}),"."]}),e.jsx(r.p,{children:e.jsxs(r.strong,{children:["For felter som etterspør personlig informasjon om en annen person enn brukeren, skru av autocomplete - ",e.jsx(r.code,{children:'autocomplete="off"'}),"."]})}),e.jsx(r.h3,{id:"input-og-formatering",children:"Input og formatering"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Bruk gjerne inputtyper som tilsvarer informasjonstypen du ber om (",e.jsx(r.code,{children:"tel"}),", ",e.jsx(r.code,{children:"email"}),", ",e.jsx(r.code,{children:"url"}),", osv.). Disse tilbyr mobilbrukere et tastatur som er tilpasset inputtypen, men ta i betraktning at de kan også utløse client-side validering av feltets input."]}),`
`,e.jsx(r.li,{children:"Vær generøs i hva du aksepterer av data. Godta input fra brukeren så lenge den er forståelig, f.eks. telefonnumre med mellomrom, personnumre med punktum, epost-adresser med mellomrom til slutt."}),`
`,e.jsx(r.li,{children:"Dersom input blir automatisk formattert, må dette være synlig for brukere slik at de kan kontrollere om det ble riktig."}),`
`,e.jsxs(r.li,{children:["Feltets ",e.jsx(r.code,{children:"name"})," må inkludere og starte med teksten i ",e.jsx(r.code,{children:"label"}),"."]}),`
`,e.jsx(r.li,{children:"Unngå bruk av all-caps og kursiv tekst til labels. Disse er vanskeligere å lese."}),`
`]}),e.jsx(r.h3,{id:"number-input",children:"Number input"}),e.jsx(r.p,{children:e.jsxs(r.strong,{children:["Sjekk ut ",e.jsx(r.code,{children:"NumberInput"}),"-komponentet dersom du skal bruke et inputfelt for tall med interaktive knapper for å styre."]})}),e.jsxs(r.p,{children:["Unngå å bruke ",e.jsx(r.code,{children:"Input"})," med ",e.jsx(r.code,{children:'type="number"'}),". ",e.jsx(r.a,{href:"https://stackoverflow.blog/2022/12/26/why-the-number-input-is-the-worst-input/",rel:"nofollow",children:"Denne bloggposten"}),` på stackoverflow belyser problemene et number input kan ha.
`,e.jsx(r.a,{href:"https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/",rel:"nofollow",children:"Gov.uk"})," har laget en enkel løsning dersom man bare trenger heltall:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-HTML",children:`    type="text" inputMode="numeric" pattern="[0-9]*"
`})}),e.jsxs(r.p,{children:["Trenger man muligheten til å bruke desimaltall vil ",e.jsx(r.code,{children:'type="text"'})," med js-validering være enklest."]})]}),`
`,e.jsx(a,{light:!0,children:"Props"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(h,{of:o})]})}function Se(n={}){const{wrapper:r}={...m(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(p,{...n})}):p(n)}export{Se as default};
