import{j as e}from"./jsx-runtime-DQFEoQHt.js";import{useMDXComponents as i}from"./index-DQ9BjFnV.js";import{m as o}from"./index-CaNFrhmw.js";import{ae as s}from"./index-yG1pLEwx.js";import"./index-CbFAwPTn.js";import"./index-BVPtv_lZ.js";import"./factory-C_AV5G8T.js";import"./create-recipe-context-BJGsumvR.js";import"./empty-DSVal0bC.js";import"./grid-C9LqfPmh.js";import"./use-event-DBF3Ked7.js";import"./create-context-Cnn4BppQ.js";import"./index-Crg4-8o8.js";import"./index-CqJK9h7E.js";import"./factory-YvB-AF3-.js";import"./walk-object-2Xl5z3JH.js";import"./create-split-props-L-tVc3XO.js";import"./editable-CzOn4N4i.js";import"./create-slot-recipe-context-CBrPPoLh.js";import"./use-environment-context-ekjyci6u.js";import"./use-field-context-DguIDVI7.js";import"./fieldset-DBNWSO0W.js";import"./tabs-w1z1Boot.js";import"./link-BvpO1hOw.js";import"./aspect-ratio-Y0y4qFt-.js";import"./badge-DAWK_bfl.js";import"./bleed-BQpq41fx.js";import"./box-enNWkFiM.js";import"./card-641aoCZa.js";import"./center-t5QQ6XAV.js";import"./code-C7Shch1Q.js";import"./container-B2trJtWH.js";import"./flex-B6LzrYc1.js";import"./float-DkG2t2Rc.js";import"./highlight-B1i-K0Nr.js";import"./grid-item-Cn0KX9Xz.js";import"./simple-grid-DzGsjFz8.js";import"./image-BajOZyTZ.js";import"./kbd-ioGaoUw0.js";import"./link-box-1ZHhZhF1.js";import"./separator-CeD7UzOc.js";import"./skip-nav-link-BknBF1pi.js";import"./spinner-f8I0xFVE.js";import"./stack-BAqUyaXt.js";import"./table-B_IQCDKb.js";import"./textarea-Bl3OFlZv.js";import"./heading-DSKY1IBf.js";import"./text-sMekb8FJ.js";import"./visually-hidden-b-_guvqp.js";import"./portal-DyfuXM0a.js";import"./iframe-BIRoY7jr.js";import"../sb-preview/runtime.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function t(n){const r={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bidra/Som utvikler/Publish"}),`
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
`]})]})}function pe(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{pe as default};
