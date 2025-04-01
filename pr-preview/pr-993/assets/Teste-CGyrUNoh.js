import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CfoPgG5w.js";import{m as i}from"./index-BYbB6rBR.js";import{M as o}from"./index-Xc_KSbrf.js";import"./index-Bj2TM2QZ.js";import"./index-B31MnrdB.js";import"./create-recipe-context-BvuJSm_f.js";import"./factory-BXJ64pFW.js";import"./empty-DSVal0bC.js";import"./grid-CUmxIVD1.js";import"./index-DT6T5u4j.js";import"./create-context-CDNpEWXj.js";import"./factory-R3eP5z4B.js";import"./index-CVNl4AZj.js";import"./index-kjvw1_fE.js";import"./aspect-ratio-DXyWJpN9.js";import"./walk-object-DMmPhGdx.js";import"./separator-DGlJ3dT3.js";import"./index-BqWtAW9h.js";import"./editable-DbFvccrt.js";import"./create-slot-recipe-context-L8Dqs-Z3.js";import"./use-environment-context-I47z6LfF.js";import"./use-field-context-BdmdtcMn.js";import"./fieldset-y7yRAWok.js";import"./link-BPnGGMj3.js";import"./tabs-CHUwhNc8.js";import"./badge-Bsc8nPdJ.js";import"./bleed-Dp1z8M-D.js";import"./box-nY8SwEK1.js";import"./spinner-r5sZME21.js";import"./card-DRqQHeaI.js";import"./center-abIhWcwG.js";import"./code-DWBfyX1K.js";import"./stack-h-j15La0.js";import"./container-DT0i0QV0.js";import"./highlight-B3PcxdG3.js";import"./flex-DMDPgoAL.js";import"./float-RWRARY7z.js";import"./grid-item-BfiV3KVu.js";import"./simple-grid-DOX-2bQ8.js";import"./image-Bxc6Eai4.js";import"./kbd-DO8hP_Ni.js";import"./link-box-jYB2vZWW.js";import"./skip-nav-link-Dy-eIl7Z.js";import"./table-DG-yNa5d.js";import"./textarea-BArPnP_e.js";import"./heading-B0M8CtMa.js";import"./text-qGkYlHXO.js";import"./visually-hidden-Qz-ayMuB.js";import"./portal-BnyNkJAG.js";import"./iframe-CTGDhMQ7.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Bidra/Som utvikler/Teste"}),`
`,e.jsx(n.h1,{id:"teste-komponenten",children:"Teste komponenten"}),`
`,e.jsx(n.h2,{id:"teste-at-komponenten-bygges-riktig-i-npm-pakken-",children:"Teste at komponenten bygges riktig i npm-pakken 📦"}),`
`,e.jsx(n.p,{children:"Det er en god standard å teste @kvib/react-pakka før release. Her er en kort oppskrift til hvordan du kan teste npm-pakken på din lokale maskin før du opprettet PR og releaser."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Sett opp et prosjekt lokalt på maskinen din. Bruk for eksempel guidelines create-react-app, og sett eksempelvis opp et prosjekt under ",e.jsx(n.code,{children:"~/Prosjekter/test-kvib-app"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Stå i ",e.jsx(n.code,{children:"kvib/packages/react"})," i den branchen du ønsker å teste, og kjør ",e.jsx(n.code,{children:"npm run build"}),". Deretter kjør ",e.jsx(n.code,{children:"npm pack --pack-destination <path til prosjektet der du ønsker å teste pakken>"})," . Det vil nå dukke opp en pakke med navnet ",e.jsx(n.code,{children:"kvib-react-x.x.x.tgz"})," på rot i test-prosjektet ditt."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["I testprosjektet ditt i ",e.jsx(n.em,{children:"package.json"})," legg til denne linja under dependency: ",e.jsx(n.code,{children:'"@kvib/react": "./kvib-react-x.x.x.tgz"'}),". Husk å oppdater versjonen så det stemmer overens med filnavnet på kvib-pakken"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["I test-prosjektet ditt. Kjør ",e.jsx(n.code,{children:"npm install"})," eller ",e.jsx(n.code,{children:"npm update"})," avhengig av om det første gang eller følgende gang du legger til en kvib-pakke."]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Kjør opp testappen din, wrap appen i ",e.jsx(n.code,{children:"<KvibProvider/>"})," også er det bare å importere og sette i gang å teste komponenter!"]}),`
`,e.jsxs(n.p,{children:["Fin artikkel om akkurat dette: ",e.jsx(n.a,{href:"https://dev.to/scooperdev/use-npm-pack-to-test-your-packages-locally-486e",rel:"nofollow",children:"Use npm pack to test your packages locally"})]}),`
`,e.jsx(n.h2,{id:"uu-testing-av-komponenten-",children:"UU-testing av komponenten 🔍"}),`
`,e.jsx(n.p,{children:`For å sørge for at komponentene vi lager overholder krav til universell utforming, må de testes for accessibility.
Designerne våre tenker på UU når en komponenent blir designet, og Chakra tilbyr accessibility-features, blant annet A11y. Likevel har vi noen manuelle tester for komponenten før den havner i designsystemet.`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Skjermleser"}),":Test hvordan komponenten oppfører seg med skjermleser, eksempelvis NVDA. Det er særlig viktig at tastatur-navigering fungerer korrekt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zoom og skjermstørrelse"}),":Teste med 400% zoom på desktop, samt teste på små skjermer. I storybook er det en egen funksjon som gjør at en kan teste hvordan komponenten ville sett ut på liten skjerm."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"a11y-synsnedsettelse"}),":I hver story kan det gjennomføres accessibility-tester for synet. Den finner du i menyen på toppen, merket med et accessibility-symbol. Test de ulike versjonene (Blurred vision, deutoranomaly, osv.) for å se om det er mulig å lese og forstå hva komponenten gjør."]}),`
`]}),`
`,e.jsx("img",{alt:"navBar in story",src:"../../../../assets/navBarStory.png",width:"500px"}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"a11y-andre UU-tester"}),`: I en story/komponent på dokumentasjonssiden er det en accessibility-fane, hvor det kontinuerlig og automatisk blir testet for accessibility gjennom a11y.
Ved å klikke på fanen, får du en oversikt over testene som er gjort; både de godkjente og de som har brudd på krav. Alle testene må godkjennes før en komponent kan bli lagt til i designsystemet.
Dersom du ikke finner denne taben kan det være fordi browseren ikke støtter alle funksjonene i storybook. Prøv å bruke Chrome eller Vivaldi browser.`]}),`
`]}),`
`,e.jsx("img",{alt:"accessibility-test tab ",src:"../../../../assets/tabsNavBarStory.png",width:"500px"}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Test Runner"}),`: Storybook sin Test Runner sjekker om storyene kjører uten feil, og er derav ikke en direkte UU-test.
Likevel er a11y konfigurert sammen med denne testen slik at det kjøres som tester i Github Actions.
Alle tester må derav godkjennes før det er tillatt å merge til master. Dersom du ønsker å kjøre test runner lokalt, åpne termninalen og naviger til mappen `,e.jsx(n.code,{children:"apps/storybook"})," og kjør her ",e.jsx(n.code,{children:"npm run dev"}),` for å kjøre storybook.
Videre mens storybook kjører, åpne en ny terminal, naviger til samme mappe og kjør `,e.jsx(n.code,{children:"npm run test-storybook"}),". Testene vil da vises i terminalen."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Her er noen nyttige lenker som inneholder sjekklister for UU-testing av den spesifikke komponenten:"}),`
`]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.magentaa11y.com/web/",rel:"nofollow",children:"https://www.magentaa11y.com/web/"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://a11y-101.com/development",rel:"nofollow",children:"https://a11y-101.com/development"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.a11yproject.com/checklist/#appearance",rel:"nofollow",children:"https://www.a11yproject.com/checklist/#appearance"})}),`
`,e.jsx(i,{status:"info",children:e.jsxs(n.p,{children:[`Det kan være enkelte tilfeller hvor a11y-testene feiler på grunn av noe underliggende i Chakra. Det er mulig å overkjøre
reglene og testingen til a11y, men dette skal kun gjøres dersom du ikke får endret det på noen annen måte. Dersom du
disabler en a11y-test pga en UU-feil vi ikke får rettet, må du dokumentere feilen i "Kjente feil" Følg `,e.jsx(n.a,{href:"https://storybook.js.org/docs/react/writing-tests/accessibility-testing#configure",rel:"nofollow",children:`guiden til Storybook
på hvordan konfigurere a11y`}),`. Se lister
over `,e.jsx(n.a,{href:"https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md",rel:"nofollow",children:"WCAG A & AA regel og regel beskrivelse"}),`
for å finne fram "Rule id" for konfigurasjon av a11y.`]})}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"bruke-chromatic-for-visuelle-tester-og-interaksjonstesting",children:"Bruke Chromatic for visuelle tester og interaksjonstesting"}),`
`,e.jsxs(n.p,{children:["Ved å bruke ",e.jsx(n.a,{href:"https://www.chromatic.com/builds?appId=636d64760ab19cb3a071bc48",rel:"nofollow",children:"Chromatic"}),` før publisering, kan vi utføre automatiske visuelle regresjonstester, oppdage eventuelle uventede endringer,
og sørge for at hvert nytt komponent samsvarer med våre designstandarder.`]}),`
`,e.jsx(n.p,{children:"Når et komponent er ferdig og klart til å bli sjekket av designer, kan et nytt build bli publisert til Chromatic:"}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Dette gjøres ved å legge til ",e.jsx(n.code,{children:"chromatic"})," som label i PRen."]})}),`
`,e.jsx(n.p,{children:`Dette vil trigge en Github Action som vil publisere til Chromatic. I tillegg blir det lagt til en pull request check som inneholder link til Chromatic.
Her må PRen godkjennes for at det skal være mulig å merge den inn i master.`}),`
`,e.jsxs(n.p,{children:["Sjekk ut ",e.jsx(n.a,{href:"https://kartverket.atlassian.net/l/cp/MtnkCR0K",rel:"nofollow",children:"Chromatic Intro"})," for en intro til hvordan Chromatic fungerer for både designer- og utviklerrollen."]})]})}function oe(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{oe as default};
