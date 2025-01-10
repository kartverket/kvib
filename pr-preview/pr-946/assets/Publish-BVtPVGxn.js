import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{useMDXComponents as i}from"./index-BGZZYR5m.js";import{m as o}from"./index-CoJY4uhr.js";import{ae as s}from"./index-ChLij7eC.js";import"./index-C7I6S4tq.js";import"./index-HLUy-D3P.js";import"./factory-X12ZEw24.js";import"./create-recipe-context-CAgtZ_aE.js";import"./empty-DSVal0bC.js";import"./grid-Pos4YUij.js";import"./use-event-sZopjRGC.js";import"./create-context-rrX1Jm6N.js";import"./index-DGxgJC0M.js";import"./index-EN4ZLXvn.js";import"./factory-C0bPybxC.js";import"./walk-object-Ct_lkoEm.js";import"./create-split-props-L-tVc3XO.js";import"./editable-D1zuwc7o.js";import"./create-slot-recipe-context-CUpEp5dt.js";import"./use-environment-context-BNO5zKCi.js";import"./use-field-context-B1YCNrrl.js";import"./fieldset-Cg8gXsUZ.js";import"./tabs-JycFvS-P.js";import"./aspect-ratio-pADKN6nH.js";import"./badge-xSKWg_M8.js";import"./bleed-CYt0VWpp.js";import"./box-Cm05xU0f.js";import"./card-j9fhE5Dj.js";import"./center-CRmuswWq.js";import"./code-Byz3bxpg.js";import"./container-Bzta5xSJ.js";import"./flex-BM20q-lB.js";import"./float-Ddto1wVD.js";import"./highlight-ChZ2uKF0.js";import"./grid-item-Cd4HGiya.js";import"./simple-grid-YGr4e-fX.js";import"./image-DfK4wNKE.js";import"./kbd-mgwTwfVB.js";import"./link-box-DRNCg9NM.js";import"./separator-h_vB7cim.js";import"./skip-nav-link-CPg7LKM1.js";import"./spinner-ByhJ2vKD.js";import"./stack-B6Ug3qu1.js";import"./table-DSaLZh49.js";import"./textarea-PZbMMvdQ.js";import"./heading-DgtS3TKy.js";import"./text-CO7rLojD.js";import"./visually-hidden-D4okpjrR.js";import"./portal-LOkWSXUb.js";import"./iframe-DChiRzbk.js";import"../sb-preview/runtime.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function t(n){const r={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bidra/Som utvikler/Publish"}),`
`,e.jsx(r.h1,{id:"oppdatere-npm-pakken-og-changelog",children:"Oppdatere npm-pakken og changelog"}),`
`,e.jsx(r.p,{children:`Når komponenten er testet både for oppførsel og UU, kan den merges med master, og legges til i npm-pakken.
Det er viktig å ha en god changelog for at brukere enkelt skal kunne se om endringer av pakken påvirker komponenter de eventuelt har tatt i bruk i egne prosjekt.`}),`
`,e.jsx(o,{status:"info",children:e.jsx(r.p,{children:`Stegene under gjennomføres kun for å publisere nye endringer i NPM-pakken (packages/react). Dersom du bare har gjort endringer
i apps/storybook mappen blir disse automatisk publisert med github-pages, og du trenger ikke foreta deg noe mer.`})}),`
`,e.jsxs(r.p,{children:["Under følger noen kjennetegn for versjonsoppdatering: (Informasjonen er hentet fra ",e.jsx(r.a,{href:"https://medium.com/fiverr-engineering/major-minor-patch-a5298e2e1798",rel:"nofollow",children:"Major.Minor.Patch artikkelen"}),")"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"patch"}),": ved interne fixes, eksempelvis bug fix, forbedrelse av performance, enviroment eller andre interne tweaks. Hovedregel: Bruker ",e.jsx(r.em,{children:"burde"})," oppdatere pakken uten å nøle."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"minor"}),": når interfacet endrer seg, men har ",e.jsx(r.strong,{children:"mulighet"}),` til å rulle tilbake til tidligere versjoner. Eksempelvis ved nye funksjoner, komponenter, nye tilgjengelige props osv.
Hovedregel: Bruker oppdaterer pakke for å få nye funksjoner, uten at noe vil kræsje.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"major"}),": når interfacet endrer seg, men har ",e.jsx(r.strong,{children:"ikke mulighet"}),` til å rulle tilbake til tidligere versjoner. Eksempelvis endrer API endpoint navn eller signatur.
Hovedregel: test systemet nøye etter oppdatering.`]}),`
`]}),`
`,e.jsx(r.p,{children:"Slik gjør du det:"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:["Kjør ",e.jsx(r.code,{children:"npx changeset"}),". Det vil komme opp valg du må gjøre i terminal for å velge versjon-oppdatering av npm-pakken."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"Bruk piltaster og space til å velge @kvib/react, som er den pakken vi ønsker å oppdatere (grønn stjerne viser at den er valgt). Trykk deretter enter for å komme videre."}),`
`,e.jsx("img",{alt:"changeset- set package to include",src:"../../../../assets/changeset1.png"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:["Du får videre valget om oppdateringen skal være av typen ",e.jsx(r.em,{children:"major"}),". Hvis ja- bruk piltaster og enter til å velge riktig pakke. Hvis nei- trykk enter med engang uten å velge pakke."]}),`
`,e.jsx("img",{alt:"changeset- set major bump",src:"../../../../assets/changeset2.png"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"Videre setter du oppdatering av typen minor. Bruk piltaster og enter til å velge riktig pakke."}),`
`,e.jsx("img",{alt:"changeset- set minor bump",src:"../../../../assets/changeset3.png"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"Tilslutt skriver du oppsummering av oppdateringen som er gjort av pakken."}),`
`,e.jsx("img",{alt:"changeset- set summary",src:"../../../../assets/changeset4.png"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:["I mappen ",e.jsx(r.em,{children:"changeset"})," vil det nå automatisk legges til en fil med et tilfeldig generert navn. Der kan du redigere ",e.jsx(r.em,{children:"summary"}),` som du skrev av oppdateringen.
Det er særlig viktig at kritiske endringer blir dokumentert, f.eks. dersom gyldig verdier til en prop endres. Under er et eksempel på changelog av Button-komponenten:`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`
Button-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert. Kritiske endringer:
 -**colorScheme** tar verdiene: "green" (default), "blue", "gray", "red".
 -**rightIcon**/ **leftIcon**: er av typen String, ikke lenger et element.

`})}),`
`]}),`
`]})]})}function se(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{se as default};
