import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as o}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-78_OWoNk.js";import{ae as t}from"./index-B_29rcGw.js";import{I as i}from"./chunk-QINAG4RG-EokTgSxx.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-IMCsqiBJ.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";function s(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"For utviklere/Bidra med kode/Hurtigveiledning"}),`
`,e.jsx(n.h1,{id:"hurtigveiledning-for-bidragsytere",children:"Hurtigveiledning for bidragsytere"}),`
`,e.jsx(n.h3,{id:"oppsett",children:"Oppsett"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Sjekk at du har tilgang til ",e.jsx(n.a,{href:"https://kartverket.atlassian.net/jira/software/projects/KOMP/boards/80",rel:"nofollow",children:"KOMP Boardet i Jira"})," og ",e.jsx(n.a,{href:"https://github.com/kartverket/kvib",rel:"nofollow",children:"Github"}),". Ta kontakt i #gen-designsystem på slack dersom du ikke har tilgang."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Legg til oppgave i ",e.jsx(n.a,{href:"https://kartverket.atlassian.net/jira/software/projects/KOMP/boards/80",rel:"nofollow",children:"KOMP Boardet i Jira"}),' i kolonnen "under utvikling".']}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Clone repoet fra Github:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`   $ git clone git@github.com:kartverket/kvib.git
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Lag en ny branch for oppgaven i KOMP-boardet:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`   $ git checkout -b komp-<oppgavenummer>
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Kjør opp prosjektet lokalt:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`   $ npm install
   $ npm run dev
`})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"utvikling",children:"Utvikling"}),`
`,e.jsxs(n.p,{children:["Repoet inneholder både kode for komponentpakka og dokumentasjon på storybook. For å jobbe på komponenter i pakka må du inn i ",e.jsx(n.code,{children:"packages/react/src/<komponent>"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tips og triks:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Se på andre komponenter for å se hvordan de er bygd opp. Noen komponenter er hentet direkte fra chakra, mens andre er mer tilpasset. Dersom du skal lage et komplekst komponent kan du ta en titt på for eksempel ",e.jsx(n.code,{children:"Datepicker"}),", ",e.jsx(n.code,{children:"Footer"})," og ",e.jsx(n.code,{children:"Header"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"For detaljerte gjennomganger for utvikling av komponenter, se:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/for-utviklere-bidra-med-kode-bygge--docs",children:"Bygging av komponent"})}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/for-utviklere-bidra-med-kode-style--docs",children:"Styling av komponent"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Ta en titt på kjente problemer for å unngå å gjøre de samme feilene som andre har gjort før deg:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/for-utviklere-bidra-med-kode-kjente-problemer--docs",children:"Kjente Problemer"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"dokumentasjon",children:"Dokumentasjon"}),`
`,e.jsxs(n.p,{children:["For dokumentasjon på storybook er det ",e.jsx(n.code,{children:"apps/storybook/stories/components/<komponent>"}),` som gjelder.
Nye features skal dokumenteres med stories og dokumentasjon i docs-filen for komponentet. Det er utviklet en mal for hvordan komponentene skal dokumenteres. Malen ligger
i `,e.jsx(n.code,{children:"apps/storybook/templates/Template.txt"}),". Den benytter seg av ferdige komponenter som ligger i samme mappe. For utfyllende informasjon, sjekk ut:"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/for-utviklere-bidra-med-kode-dokumentere--docs",children:"Dokumentasjon av komponent"})}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/for-utviklere-bidra-med-kode-kjente-problemer--docs",children:"Kjente Problemer"})}),`
`]}),`
`,e.jsx(n.h3,{id:"testing",children:"Testing"}),`
`,e.jsx(n.p,{children:"For at endringene dine skal bli godkjent er det tre hovedområder av tester som må tilfredsstilles:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Accessibility test i Storybook:",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"På hver story er det en meny som inneholder en Accessibility-fane. Testene i denne fanen må gå gjennom for at komponentet skal bli godkjent."}),`
`,e.jsx(i,{src:"assets/tabsNavBarStory.png",width:"400px"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Test at komponentet bygges riktig i NPM-pakken ved å importere pakken i et testprosjekt."}),`
`,e.jsxs(n.li,{children:["Github-actions tester:",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Github-actions sjekker at komponentet bygges riktig og at alle testene går gjennom."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Sjekk ut den detaljerte beskrivelsen av testing for mer informasjon."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/docs/for-utviklere-bidra-med-kode-teste--docs",children:"Testing"})}),`
`]}),`
`,e.jsx(n.h3,{id:"leveranse",children:"Leveranse"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Dersom du har gjort endringer på et komponent må du legge til et changeset som oppdaterer pakken:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-zsh",children:`   $ npx changeset
`})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Bruk piltastene til å navigere til @kvib/react og trykk på space, deretter enter."}),`
`,e.jsx(n.li,{children:"Velg semver bump type: major (breaking change), minor (new feature) eller patch (bugfix). Navigering til neste versjon gjøres ved å trykke enter. Versjon velges ved å trykke på space og enter."}),`
`,e.jsx(n.li,{children:"Skriv inn en kort beskrivelse av endringene du har gjort og trykk enter."}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Sjekk ut ",e.jsx(n.a,{href:"/docs/for-utviklere-bidra-med-kode-publish--docs",children:"Publish"})," hvis du vil vite mer om hvordan dette fungerer."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Commit og push endringene."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Lag en pull request fra branch til master."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Sjekk at alle tester går gjennom."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Bruk pr-preview linken på pren til å sjekke at alt er som det skal."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Gå til ",e.jsx(n.a,{href:"https://kartverket.atlassian.net/jira/software/projects/KOMP/boards/80",rel:"nofollow",children:"KOMP Boardet i Jira"}),' og flytt oppgaven til kolonnen "Code review".']}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Da er du ferdig og kan vente på review!"})]})}function D(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{D as default};
