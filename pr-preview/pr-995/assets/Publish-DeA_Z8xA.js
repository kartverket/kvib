import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CfoPgG5w.js";import{m as o}from"./index-CZ3ox6l8.js";import{M as s}from"./index-DY9mmRm4.js";import"./index-Bj2TM2QZ.js";import"./index-Bs7GjyIo.js";import"./factory-pl1wLBYD.js";import"./create-recipe-context-DYiacIet.js";import"./empty-DSVal0bC.js";import"./grid-jasc0pCp.js";import"./index-BGbegxtG.js";import"./create-context-Dx5LeRZQ.js";import"./factory-OQRc9M2v.js";import"./index-CVNl4AZj.js";import"./index-kjvw1_fE.js";import"./aspect-ratio-CAuboeZ_.js";import"./walk-object-DWvS5iFr.js";import"./separator-BNn5sDgl.js";import"./index-BqWtAW9h.js";import"./editable-EMIlbeXl.js";import"./create-slot-recipe-context-DgxmRWlj.js";import"./use-environment-context-B22iOzJ9.js";import"./use-field-context-1QGiO1Aa.js";import"./fieldset-W6DYpKsI.js";import"./link-Dwuusza2.js";import"./tabs-BjLtBxIu.js";import"./badge-b3_3SUt1.js";import"./bleed-XXdFbytk.js";import"./box-BGguGcLy.js";import"./spinner-CuRI6N7E.js";import"./card-OfHgEyTV.js";import"./center-ButSt4yq.js";import"./code-1_VME73E.js";import"./stack-mCRVjjbS.js";import"./container-D8eBFey8.js";import"./highlight-BwYutGWa.js";import"./flex-Br_6hloE.js";import"./float-CbEw7epy.js";import"./grid-item-BL2-00m7.js";import"./simple-grid-DGWi7hMH.js";import"./image-OkR7rKz_.js";import"./kbd-B2j_-PiN.js";import"./link-box-V4_Jj2MN.js";import"./skip-nav-link-BC8crZtK.js";import"./table-mbgVTzeK.js";import"./textarea-wloWA6cK.js";import"./heading-DMt6CN8-.js";import"./text-DN4IV3-T.js";import"./visually-hidden-BI2e4u6t.js";import"./portal-EfEQ2Dgj.js";import"./iframe-DKjwNLD9.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(n){const r={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bidra/Som utvikler/Publish"}),`
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
