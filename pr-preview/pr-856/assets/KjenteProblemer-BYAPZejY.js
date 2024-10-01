import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-Dzu0LFDj.js";import{ae as t}from"./index-CwI8H_ms.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-D0-KeAve.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"For utviklere/Bidra med kode/Kjente problemer"}),`
`,e.jsx(n.h1,{id:"kjente-problemer",children:"Kjente problemer"}),`
`,e.jsx(n.p,{children:`Storybook og Chakra er to hjelpemidler som gjør det enklere og raskere for oss å utvikle et designsystem for kartverket.
Under utvikling vil det likevel dukke opp problemer eller utfordringer hvor rammeverkene ikke støtter det vi har lyst til å gjøre,
eller inneholder bugs som ikke har blitt fikset. Denne siden vil ta for seg slike overordnede bugs og problemmer som man kan møte på i alle
komponenter under utviklingsfasen. For bugs på komponentnivå, se nederst i docs på hvert komponent.`}),`
`,e.jsx(n.h2,{id:"storybook",children:"Storybook"}),`
`,e.jsx(n.h3,{id:"subcomponents-i-argtypes-controls",children:"Subcomponents i argTypes (controls)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problem"})}),`
`,e.jsxs(n.p,{children:["Mange komponenter fra Chakra består av en sammensetning av flere komponenter. Et eksempel er ",e.jsx(n.code,{children:"Breadcrumb"}),` som består av
`,e.jsx(n.code,{children:"Breadcrumb"}),", ",e.jsx(n.code,{children:"BreadcrumbItem"}),", ",e.jsx(n.code,{children:"BreadcrumbLink"})," og ",e.jsx(n.code,{children:"BreadcrumbSeparator"}),`. I de fleste tilfeller har child-komponentene
også egne props. Disse skulle man gjerne vist sammen med propsene i parent-komponentet i controls på en story. Storybook hadde støtte for dette
ved å ta i bruk `,e.jsx(n.code,{children:"subcomponents: { BreadcrumbItem }"})," i ",e.jsx(n.code,{children:"Meta"}),", men dette ser ut til å være deprecated."]}),`
`,e.jsxs(n.p,{children:["Relevant: ",e.jsx(n.a,{href:"https://github.com/storybookjs/storybook/issues/20782",rel:"nofollow",children:"https://github.com/storybookjs/storybook/issues/20782"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Løsning"})}),`
`,e.jsx(n.p,{children:"For øyeblikket er det ikke funnet en løsning på dette."}),`
`,e.jsx(n.h3,{id:"feil-render-av-kode-i-canvas",children:"Feil render av kode i Canvas"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problem"})}),`
`,e.jsxs(n.p,{children:["Storybook viser koden til en Story automatisk gjennom ",e.jsx(n.code,{children:"Canvas"}),`. Et problem som ofte oppstår når komponenter er importert
fra andre biblioteker (f.eks. Chakra) er at `,e.jsx(n.code,{children:"Canvas"}),` ikke klarer å oversette riktig, eller at den oversetter koden feil.
På den måten kan det bli feil navn på komponenter.`]}),`
`,e.jsxs(n.p,{children:["For eksempel endret ",e.jsx(n.code,{children:"CardBody"})," seg til ",e.jsx(n.code,{children:"CardBody2"}),`, selv om navnet fortsatt
er `,e.jsx(n.code,{children:"CardBody"})," i KVIB-pakken:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Card>
  <CardBody2>
    <Text>Se alle endringer på eiendomsgrenser i år.</Text>
  </CardBody2>
</Card>
`})}),`
`,e.jsx(n.p,{children:"Et annet eksempel er når Storybook ikke klarer å kjenne igjen komponentene fra pakken:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<[object Object]>
  <Table>
    <TableCaption>
      Imperial to metric conversion factors
    </TableCaption>
    <[object Object]>
      <[object Object]>
        <[object Object]>
          To convert
        </[object Object]>
        <[object Object]>

        ...

  </Table>
</[object Object]>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Løsning"})}),`
`,e.jsxs(n.p,{children:["Løsningen er å ikke bruke ",e.jsx(n.code,{children:"Canvas"})," for å vise frem komponentet, men heller ",e.jsx(n.code,{children:"Story"})," sammen med ",e.jsx(n.code,{children:"Source"}),`.
Story viser frem storyen uten noen form for ramme eller kode. Derfor må man bruke `,e.jsx(n.code,{children:"Card"}),` for å lage rammen selv.
I `,e.jsx(n.code,{children:"source"})," må man legge inn den koden man har lyst til å vise som en String."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`  <Card variant="outline" borderRadius="0">
    <CardBody>
      <Story of={TableStories.Table} />
    </CardBody>
  </Card>

<Source code={TableString} dark />
`})}),`
`,e.jsxs(n.p,{children:["Ta en titt på ",e.jsx(n.a,{href:"/docs/datavisning-table--docs",children:"Table"})," for å se hvordan det gjøres."]}),`
`,e.jsx(n.h3,{id:"feil-med-visning-av-addon-panel",children:"Feil med visning av Addon panel"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problem"})}),`
`,e.jsx(n.p,{children:"Av og til vises ikke Addon panelet for å få tilgang til Accessibility testing eller annet."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Løsning"})}),`
`,e.jsxs(n.p,{children:["Kjør følgende kommando i nettleser konsolen: ",e.jsx(n.code,{children:"localStorage.clear"}),"."]}),`
`,e.jsx(n.h3,{id:"icon-fungerer-ikke-i-docs",children:"Icon fungerer ikke i docs"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problem"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<Icon />"})," fra designsystemet fungerer ikke i docs. Finner ingen løsning som gjør at det fungerer."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Løsning"})}),`
`,e.jsx(n.p,{children:"Løsningen er å gjøre en av to workarounds:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Bruk en ",e.jsx(n.code,{children:"<Story />"})," for å vise frem det du vil, fordi storiene ikke har noe problem med å rendre ikoner ved hjelp av KvibProvider. Det som ikke fungerer med denne løsningen er å bruke ",e.jsx(n.code,{children:"of={IconStory}"})," dersom man skal bruke stories fra andre mapper enn den du er i. Da må man bruke id: ",e.jsx(n.code,{children:'<Story id="komponenter-footer-footer-inline--footer-inline-custom" />'}),". Se på eksempelet på footeren som ligger i “.storybook/MDXContainer.jsx”."]}),`
`,e.jsxs(n.li,{children:["Den andre løsningen er å legge til ikonet som en svg og bruke ",e.jsx(n.code,{children:"<Image />"}),". Dette er for eksempel gjort for ",e.jsx(n.code,{children:"<Feedback />"}),' i "/templates". Denne løsningen er bare ønskelig om man lager et komponent som skal brukes mange steder.']}),`
`]}),`
`,e.jsx(n.h2,{id:"chakra",children:"Chakra"}),`
`,e.jsx(n.h3,{id:"feil-dokumentasjon-av-props",children:"Feil dokumentasjon av props"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Problem"})}),`
`,e.jsx(n.p,{children:`Chakra har mange komponenter som inneholder feil dokumentasjon av props. Mange av de er rett og slett feil,
mens andre har props inkludert som er der for at man kan utvikle dem selv i theme.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Løsning"})}),`
`,e.jsx(n.p,{children:"Ikke inkluder props som ikke endrer på komponentet eller har et annet formål i dokumentasjonen til Kartverkets designsystem."})]})}function y(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{y as default};
