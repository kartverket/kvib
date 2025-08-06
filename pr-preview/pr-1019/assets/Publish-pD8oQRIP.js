import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CfoPgG5w.js";import{m as o}from"./index-iDPW5jzC.js";import{M as s}from"./index-DnCe6csZ.js";import"./index-Bj2TM2QZ.js";import"./index-D_---mAx.js";import"./factory-Dw0YElUz.js";import"./create-recipe-context-BC6ck0lV.js";import"./empty-DSVal0bC.js";import"./grid-BXAmFaRH.js";import"./index-C2TN6jS0.js";import"./index-juDyHp0C.js";import"./factory-D1kTn8Vm.js";import"./index-CVNl4AZj.js";import"./index-kjvw1_fE.js";import"./aspect-ratio-Bg5NFe02.js";import"./walk-object-CYAto0RH.js";import"./separator-BuLUBXMW.js";import"./index-BqWtAW9h.js";import"./editable-BCkvzdFx.js";import"./create-slot-recipe-context-D2d5s3G5.js";import"./use-environment-context-C8zqKP5z.js";import"./use-field-context-Cx-xQZBF.js";import"./fieldset-DGwjdXII.js";import"./link-uC2iDRgf.js";import"./tabs-BDsF6YO4.js";import"./badge-1pCeWTci.js";import"./bleed-ctC8xh4-.js";import"./box-DRWhNOl7.js";import"./spinner-B3k6pLP6.js";import"./card-CnxUQJ_v.js";import"./center-DqdeepzA.js";import"./code-D-rcqDa3.js";import"./stack-DbYzybKU.js";import"./container-Lg0txCR0.js";import"./highlight-Dfo3DnwO.js";import"./flex-MgtQFUyQ.js";import"./float-BpxhdMFd.js";import"./grid-item-DIfsmyLK.js";import"./simple-grid-rkI7LJjl.js";import"./image-HcGPNDOs.js";import"./kbd-DhMP1f3C.js";import"./link-box-DcT2eS9B.js";import"./skip-nav-link-D0iWfeHr.js";import"./table-BTX8pb6J.js";import"./textarea-ZyIJg3pv.js";import"./heading-x7NMyFJh.js";import"./text-2toE5EUW.js";import"./visually-hidden-CV9H1m_0.js";import"./portal-CwOa12Qs.js";import"./iframe-BCE0b9aq.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(n){const r={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bidra/Som utvikler/Publish"}),`
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
