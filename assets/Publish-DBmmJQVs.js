import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-C7DmP4Pe.js";import{m as o}from"./index-BrXXMyjU.js";import{M as s}from"./index-Lsajizz_.js";import"./index-Cjd7pOeM.js";import"./index-CCuC3AGz.js";import"./factory-BVqvlKn7.js";import"./create-recipe-context-1tZJ095y.js";import"./empty-DSVal0bC.js";import"./grid-BPolKxUh.js";import"./use-event-CpbGnmNH.js";import"./create-context-Bo3s1W4a.js";import"./index-Bxvi1LNM.js";import"./index-DDyxDaa8.js";import"./factory-CBKQa84h.js";import"./walk-object-2Xl5z3JH.js";import"./create-split-props-L-tVc3XO.js";import"./editable-BcIlteuc.js";import"./create-slot-recipe-context-CYjx6fSM.js";import"./use-environment-context-BWDdXZkm.js";import"./use-field-context-C9LJE8AZ.js";import"./fieldset-BS50HX_-.js";import"./tabs-Cd_a21CE.js";import"./link-CiBOvFm-.js";import"./aspect-ratio-nViayLny.js";import"./badge-DCisMjwy.js";import"./bleed-BAtbOX89.js";import"./box-FlB7OGm2.js";import"./card-B9TRU4NP.js";import"./center-khLnxRDr.js";import"./code--FVeQQF-.js";import"./container-Dc7zjd0u.js";import"./flex-B9vvo2KU.js";import"./float-Dc42eTOR.js";import"./highlight-D1EBRKwH.js";import"./grid-item-DqaRdpbj.js";import"./simple-grid-DtJALuRB.js";import"./image-BE6uk9BE.js";import"./kbd-C9Gfh5FN.js";import"./link-box-DR3gHzC9.js";import"./separator-D5i4Lswk.js";import"./skip-nav-link-B_d5zg4O.js";import"./spinner-NTYorgmR.js";import"./stack-Dz19mpcT.js";import"./table-xxZs2FBi.js";import"./textarea-iNB3dhio.js";import"./heading-C8Kc3coo.js";import"./text-Chw_Kel9.js";import"./visually-hidden-CAJ0ElNy.js";import"./portal-BANUb_GJ.js";import"./iframe-CzzcbD5S.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function t(n){const r={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bidra/Som utvikler/Publish"}),`
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
