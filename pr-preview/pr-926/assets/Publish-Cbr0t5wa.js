import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as s}from"./index-BGZZYR5m.js";import{v as i}from"./index-DarVU0NI.js";import{ae as l}from"./index-CeYvw0LM.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-DXDnh3uR.js";import"../sb-preview/runtime.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Bidra/Som utvikler/Publish"}),`
`,e.jsx(n.h1,{id:"oppdatere-npm-pakken-og-changelog",children:"Oppdatere npm-pakken og changelog"}),`
`,e.jsx(n.p,{children:`Når komponenten er testet både for oppførsel og UU, kan den merges med master, og legges til i npm-pakken.
Det er viktig å ha en god changelog for at brukere enkelt skal kunne se om endringer av pakken påvirker komponenter de eventuelt har tatt i bruk i egne prosjekt.`}),`
`,e.jsx(i,{status:"info",children:e.jsx(n.p,{children:`Stegene under gjennomføres kun for å publisere nye endringer i NPM-pakken (packages/react). Dersom du bare har gjort endringer
i apps/storybook mappen blir disse automatisk publisert med github-pages, og du trenger ikke foreta deg noe mer.`})}),`
`,e.jsxs(n.p,{children:["Under følger noen kjennetegn for versjonsoppdatering: (Informasjonen er hentet fra ",e.jsx(n.a,{href:"https://medium.com/fiverr-engineering/major-minor-patch-a5298e2e1798",rel:"nofollow",children:"Major.Minor.Patch artikkelen"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"patch"}),": ved interne fixes, eksempelvis bug fix, forbedrelse av performance, enviroment eller andre interne tweaks. Hovedregel: Bruker ",e.jsx(n.em,{children:"burde"})," oppdatere pakken uten å nøle."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"minor"}),": når interfacet endrer seg, men har ",e.jsx(n.strong,{children:"mulighet"}),` til å rulle tilbake til tidligere versjoner. Eksempelvis ved nye funksjoner, komponenter, nye tilgjengelige props osv.
Hovedregel: Bruker oppdaterer pakke for å få nye funksjoner, uten at noe vil kræsje.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"major"}),": når interfacet endrer seg, men har ",e.jsx(n.strong,{children:"ikke mulighet"}),` til å rulle tilbake til tidligere versjoner. Eksempelvis endrer API endpoint navn eller signatur.
Hovedregel: test systemet nøye etter oppdatering.`]}),`
`]}),`
`,e.jsx(n.p,{children:"Slik gjør du det:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Kjør ",e.jsx(n.code,{children:"npx changeset"}),". Det vil komme opp valg du må gjøre i terminal for å velge versjon-oppdatering av npm-pakken."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Bruk piltaster og space til å velge @kvib/react, som er den pakken vi ønsker å oppdatere (grønn stjerne viser at den er valgt). Trykk deretter enter for å komme videre."}),`
`,e.jsx("img",{alt:"changeset- set package to include",src:"../../../../assets/changeset1.png"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Du får videre valget om oppdateringen skal være av typen ",e.jsx(n.em,{children:"major"}),". Hvis ja- bruk piltaster og enter til å velge riktig pakke. Hvis nei- trykk enter med engang uten å velge pakke."]}),`
`,e.jsx("img",{alt:"changeset- set major bump",src:"../../../../assets/changeset2.png"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Videre setter du oppdatering av typen minor. Bruk piltaster og enter til å velge riktig pakke."}),`
`,e.jsx("img",{alt:"changeset- set minor bump",src:"../../../../assets/changeset3.png"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Tilslutt skriver du oppsummering av oppdateringen som er gjort av pakken."}),`
`,e.jsx("img",{alt:"changeset- set summary",src:"../../../../assets/changeset4.png"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["I mappen ",e.jsx(n.em,{children:"changeset"})," vil det nå automatisk legges til en fil med et tilfeldig generert navn. Der kan du redigere ",e.jsx(n.em,{children:"summary"}),` som du skrev av oppdateringen.
Det er særlig viktig at kritiske endringer blir dokumentert, f.eks. dersom gyldig verdier til en prop endres. Under er et eksempel på changelog av Button-komponenten:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`
Button-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert. Kritiske endringer:
 -**colorScheme** tar verdiene: "green" (default), "blue", "gray", "red".
 -**rightIcon**/ **leftIcon**: er av typen String, ikke lenger et element.

`})}),`
`]}),`
`]})]})}function u(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{u as default};