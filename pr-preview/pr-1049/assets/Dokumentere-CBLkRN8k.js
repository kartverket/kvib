import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-6TxjLnhd.js";import{m as o}from"./index-CVk_gzhC.js";import"./index-CarTVUsa.js";import{M as s}from"./index-B1rs3aCH.js";import"./index-BqsZ9I6k.js";import"./index-C0A5lRCM.js";import"./factory-vXUDvcSN.js";import"./index-BS8OOuJX.js";import"./create-recipe-context-DELc7dO7.js";import"./empty-DSVal0bC.js";import"./grid-CYuVizoc.js";import"./index-dwDD37dD.js";import"./index-DkbpjeHr.js";import"./factory-V2Xlcbd9.js";import"./index-B9Psn0MX.js";import"./index-BYXsJVy_.js";import"./index-BSMKl3FV.js";import"./highlight-CUubTtiO.js";import"./index-vDsMs_XN.js";import"./aspect-ratio-BfC_Gxxt.js";import"./walk-object-B_-gT-OT.js";import"./separator-CUXWe3fV.js";import"./index-0TWAmYWa.js";import"./editable-DZEvj3_Y.js";import"./create-slot-recipe-context-BG7crph2.js";import"./use-environment-context-Cani8Crk.js";import"./use-field-context-Bzd8MCQa.js";import"./fieldset-Btlt0Ce_.js";import"./textarea-eAHA2W6f.js";import"./link-BWh18pMm.js";import"./tabs-BQpyEPWP.js";import"./badge-BKG6dakS.js";import"./bleed-C7T5cwV-.js";import"./spinner-D1u7r_-W.js";import"./card-ByY2SJfj.js";import"./center-C6PL8-NT.js";import"./code-BFlx-I6T.js";import"./stack-vIxnZITx.js";import"./container-ASGmx2Qb.js";import"./flex-C0zEsI55.js";import"./float-CTfRhxRC.js";import"./grid-item-BNwU3Ix_.js";import"./image-DBL4wnCO.js";import"./kbd-BDSH25yp.js";import"./link-box-DpSYMRIE.js";import"./simple-grid-SOCDTj4u.js";import"./skip-nav-link-83ez5Xdy.js";import"./table-D-bt-bbm.js";import"./visually-hidden-C6HJDgNH.js";import"./portal-kZdR_nCb.js";import"./preview-DTfHnQqc.js";import"./iframe-CsNZO7Rv.js";import"./DocsRenderer-CFRXHY34-Bmd_8enJ.js";import"./react-18-CDM3aYty.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bidra/Som utvikler/Dokumentere"}),`
`,e.jsx(n.h1,{id:"dokumentere-komponenten-",children:"Dokumentere komponenten 📝"}),`
`,e.jsx(n.p,{children:"Under følger en beskrivelse av hvordan en komponent skal dokumenteres. Link-komponenten brukes som eksempel."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Gå til ",e.jsx(n.code,{children:"apps/storybook/stories/components/link"})," og lag filen: ",e.jsx(n.em,{children:"Link.stories.tsx"}),". I denne filen skal du lage stories for komponenten, og i ",e.jsx(n.em,{children:".mdx"}),"-filen (som ligger i denne mappen fra før av) skrives dokumentasjonen."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["I ",e.jsx(n.em,{children:"Link.stories.tsx"})," sett følgende øverst i filen:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLink> = {
  title: "Komponenter/Link",
  component: KvibLink,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    isExternal: {
      description: "If true, a icon will be included.",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
};
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"title"})," setter filstrukturen på selve ",e.jsx(n.a,{href:"https://design.kartverket.no",rel:"nofollow",children:"dokumentasjonssiden til Designbiblioteket"}),"."]}),`
`,e.jsxs(n.li,{children:["Hvis man ønsker å endre på sorteringen av filstrukturen på Storybook, gå til ",e.jsx(n.code,{children:"apps/storybook/.storybook/preview.js"}),", og tilpass ",e.jsx(n.code,{children:"order"})," som overskriver den ellers alfabetiske rekkefølgen."]}),`
`]}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["På selve dokumentasjonssiden er det en ",e.jsx(n.em,{children:"control-tabell"}),` som benyttes for å teste ulike props-verdier på komponenten.
Beskrivelsen og default-verdien av egendefinerte props legges til som kommentar i `,e.jsx(n.em,{children:".tsx"}),"-filen hvor propsene blir definert, altså i ",e.jsx(n.code,{children:"packages/react/src/link/Link.tsx"}),`.
Videre generer Storybook control-tabellen automatisk. Under er eksempel på beskrivelse av propen `,e.jsx(n.code,{children:"variant"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`//packages/react/src/link/Link.tsx.

export type LinkProps = Omit<ChakraLinkProps, "variant"> & {

  /**The colorvariant of the link.
  @default green*/
  variant: "green" | "blue";
};
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["I ",e.jsx(n.code,{children:"apps/storybook/stories/components/link/Link.stories.tsx"}),` skal du videre definere stories for å vise komponenten med ulike props-verdier. Lag én story som viser default-verdiene til komponenten.
Dvs. benytt bare de nødvendige propsa når du definerer komponenten slik at default-verdiene vises.
Derav vil tilhørende kodesnutt vise minstekravet for at denne komponenten skal fungere. Under vises Link.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export default meta;
type Story = StoryObj<typeof KvibLink>;

export const Link: Story = {
  args: {
    children: "Dette er en lenke",
    href: "/?path=/",
  },
  render: (args) => <KvibLink {...args}>{args.children}</KvibLink>,
};
`})}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Slik vil storyen se ut i dokumentasjonen, og vil vise den minimale koden en bruker trenger å skrive."}),`
`,e.jsx("img",{alt:"example of codesnippet",src:"../../../../assets/deafultCompDocs.png",width:"700px"}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`Lag videre stories som viser ulik bruk av komponenten, f.eks. hensikt, ikoner og addons, utseende (se for eksempel på Alert).
Velg de som er mest hensiktsmessig for komponenten. Bruk `,e.jsx(n.em,{children:"HStack/VStack"}),` til å ordne flere komponenter ved siden av hverandre i en story, hvor du tilordner hver komponent forksjellige verdier.
Dette tydeliggjør forskjellen samtidig som det gir en oversiktlig dokumentasjon. Under er det vist eksempel hvor ulike states (internal og external link) vises:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const LinkStates: Story = {
  args: { colorScheme: "blue" },
  render: (args) => (
    <VStack>
      <KvibLink href="/?path=/" {...args}>
        Dette er en intern lenke
      </KvibLink>
      <KvibLink isExternal href="https://chakra-ui.com/docs/components" {...args}>
        Dette er en ekstern lenke
      </KvibLink>
    </VStack>
  ),
};
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Åpne ",e.jsx(n.code,{children:"apps/storybook/stories/components/link/Link.mdx"}),`: (hvis du dokumenterer en ny komponent, må du lage en fil
inne i samme components mappe)`]}),`
`]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Øverst i filen; bytt ut ",e.jsx(s,{})," med: (Nå som du har definert en .stories.tsx fil settes tittelen her og ikke i .mdx)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import * as LinkStories from "./Link.stories";

<Meta of={LinkStories} />;
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Gi en beskrivelse av komponenten og hvordan den skal brukes. ",e.jsx(n.strong,{children:"Sjekk rettskriving og klarspråk"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Lag en liten oversikt for hva komponenten er ",e.jsx(n.strong,{children:"Egnet/Uegnet"}),` til. Hvis Komponentene trenger noe kontekst
(f.eks input med labels) kommer det på neste linje. Legg til Feedback komponent fra apps/storybook/stories/templates på slutten`]}),`
`]}),`
`]}),`
`,e.jsxs(n.ol,{start:"7",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Lag kategoriene ",e.jsx(n.strong,{children:"Alternativer, Tilgjengelighet, props, Kjente feil"}),`. Bruk DocsHeading, DocsAnatomy, DocsContainer og DocsStory
fra samme fil som Feedback. Props skal være beskrevet på engelsk. Eksempel for Alternativer:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DocsContainer>
  <DocsStory
    title="Utseende"
    description="Link har bare én størrelse og to farger. Blå farge burde brukes på kartløsninger."
    story={<Canvas of={LinkStories.LinkColorscheme} />}
  />
  <DocsStory />
</DocsContainer>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Sett inn den storyen som er default ( Her; Link), og sett inn controll-tabellen til denne storyen:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DocsHeading light>Props</DocsHeading>

<Canvas of={LinkStories.Link} />         //henter selve storien (default-komponenten)

<Controls of={LinkStories.Link} />       //henter control- tabellen
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Dersom det er noen kjente feil ved komponenten, eksempelvis med a11y-tester, lag et avsnitt nederst i .mdx-filen slik som dette:"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"kjente-feil",children:"Kjente feil"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"a11y-test har violations...."}),`
`]}),`
`,e.jsxs(n.p,{children:["🏁 ",e.jsxs(n.strong,{children:["Nå kan du kjøre ",e.jsx(n.code,{children:"npm run dev"})," for å se Storybook-dokumentasjonssiden lokalt. Videre må du gjøre ulike tester for å sjekke at alt stemmer."]})]}),`
`,e.jsx(o,{status:"info",children:e.jsx(n.p,{children:"Husk å oppdatere npm-pakken og changelog før du merger."})})]})}function pe(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{pe as default};
