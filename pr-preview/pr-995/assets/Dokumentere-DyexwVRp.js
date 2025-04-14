import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CfoPgG5w.js";import{m as o}from"./index-CZ3ox6l8.js";import"./index-y785n2te.js";import{M as s}from"./index-DY9mmRm4.js";import"./index-Bj2TM2QZ.js";import"./index-Bs7GjyIo.js";import"./factory-pl1wLBYD.js";import"./create-recipe-context-DYiacIet.js";import"./empty-DSVal0bC.js";import"./grid-jasc0pCp.js";import"./index-BGbegxtG.js";import"./create-context-Dx5LeRZQ.js";import"./factory-OQRc9M2v.js";import"./index-CVNl4AZj.js";import"./index-kjvw1_fE.js";import"./aspect-ratio-CAuboeZ_.js";import"./walk-object-DWvS5iFr.js";import"./separator-BNn5sDgl.js";import"./index-BqWtAW9h.js";import"./editable-EMIlbeXl.js";import"./create-slot-recipe-context-DgxmRWlj.js";import"./use-environment-context-B22iOzJ9.js";import"./use-field-context-1QGiO1Aa.js";import"./fieldset-W6DYpKsI.js";import"./link-Dwuusza2.js";import"./tabs-BjLtBxIu.js";import"./badge-b3_3SUt1.js";import"./bleed-XXdFbytk.js";import"./box-BGguGcLy.js";import"./spinner-CuRI6N7E.js";import"./card-OfHgEyTV.js";import"./center-ButSt4yq.js";import"./code-1_VME73E.js";import"./stack-mCRVjjbS.js";import"./container-D8eBFey8.js";import"./highlight-BwYutGWa.js";import"./flex-Br_6hloE.js";import"./float-CbEw7epy.js";import"./grid-item-BL2-00m7.js";import"./simple-grid-DGWi7hMH.js";import"./image-OkR7rKz_.js";import"./kbd-B2j_-PiN.js";import"./link-box-V4_Jj2MN.js";import"./skip-nav-link-BC8crZtK.js";import"./table-mbgVTzeK.js";import"./textarea-wloWA6cK.js";import"./heading-DMt6CN8-.js";import"./text-DN4IV3-T.js";import"./visually-hidden-BI2e4u6t.js";import"./portal-EfEQ2Dgj.js";import"./preview-rI-ZcK7_.js";import"./iframe-DKjwNLD9.js";import"./DocsRenderer-CFRXHY34-Dr5IW-IW.js";import"./react-18-mqHmL3K7.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bidra/Som utvikler/Dokumentere"}),`
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
