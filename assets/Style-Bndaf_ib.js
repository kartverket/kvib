import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-6TxjLnhd.js";import{m as s}from"./index-CVk_gzhC.js";import"./index-CarTVUsa.js";import{M as i}from"./index-B1rs3aCH.js";import"./index-BqsZ9I6k.js";import"./index-C0A5lRCM.js";import"./factory-vXUDvcSN.js";import"./index-BS8OOuJX.js";import"./create-recipe-context-DELc7dO7.js";import"./empty-DSVal0bC.js";import"./grid-CYuVizoc.js";import"./index-dwDD37dD.js";import"./index-DkbpjeHr.js";import"./factory-V2Xlcbd9.js";import"./index-B9Psn0MX.js";import"./index-BYXsJVy_.js";import"./index-BSMKl3FV.js";import"./highlight-CUubTtiO.js";import"./index-vDsMs_XN.js";import"./aspect-ratio-BfC_Gxxt.js";import"./walk-object-B_-gT-OT.js";import"./separator-CUXWe3fV.js";import"./index-0TWAmYWa.js";import"./editable-DZEvj3_Y.js";import"./create-slot-recipe-context-BG7crph2.js";import"./use-environment-context-Cani8Crk.js";import"./use-field-context-Bzd8MCQa.js";import"./fieldset-Btlt0Ce_.js";import"./textarea-eAHA2W6f.js";import"./link-BWh18pMm.js";import"./tabs-BQpyEPWP.js";import"./badge-BKG6dakS.js";import"./bleed-C7T5cwV-.js";import"./spinner-D1u7r_-W.js";import"./card-ByY2SJfj.js";import"./center-C6PL8-NT.js";import"./code-BFlx-I6T.js";import"./stack-vIxnZITx.js";import"./container-ASGmx2Qb.js";import"./flex-C0zEsI55.js";import"./float-CTfRhxRC.js";import"./grid-item-BNwU3Ix_.js";import"./image-DBL4wnCO.js";import"./kbd-BDSH25yp.js";import"./link-box-DpSYMRIE.js";import"./simple-grid-SOCDTj4u.js";import"./skip-nav-link-83ez5Xdy.js";import"./table-D-bt-bbm.js";import"./visually-hidden-C6HJDgNH.js";import"./portal-kZdR_nCb.js";import"./preview-DTfHnQqc.js";import"./iframe-CsNZO7Rv.js";import"./DocsRenderer-CFRXHY34-Bmd_8enJ.js";import"./react-18-CDM3aYty.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Bidra/Som utvikler/Style"}),`
`,e.jsx(n.h1,{id:"style-komponenten-",children:"Style komponenten 🎨"}),`
`,e.jsx(n.p,{children:"Under følger en beskrivelse av hvordan en komponent kan styles. Link-komponenten brukes som eksempel."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Gå til ",e.jsx(n.code,{children:"packages/react/src/theme/components"}),": lag en ny fil, link.ts. Her skal stylingen til Chakra overskrives med Kartverkets eget design."]}),`
`,e.jsxs(n.li,{children:["Følg ",e.jsx(n.a,{href:"https://chakra-ui.com/docs/styled-system/component-style",rel:"nofollow",children:"guiden til Chakra på hvordan style en komponent"}),`.
Du trenger ikke gjøre steget som omhandler “extendTheme”, da dette allerde er satt opp, så lenge du benytter mappestrukturen som allerede er satt opp.`]}),`
`,e.jsxs(n.li,{children:["Eksporter themet fra ",e.jsx(n.em,{children:"link.ts"})," i ",e.jsx(n.code,{children:"packages/react/src/theme/components/index.ts"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Enkelte ganger kan det være nødvendig å bygge styling av en komponent fra bunnen av, eksempelvis dersom komponenten ikke er del av Chakra UI, eller komponenten ikke har egen styling annet enn at den arver styling fra annen komponent.
Benytt `,e.jsx(n.code,{children:"useStyleConfig"})," hooken når komponenten defineres for å konsumere denne typen styling. Se ",e.jsx(n.a,{href:"https://chakra-ui.com/docs/styled-system/component-style#usestyleconfig-api",rel:"nofollow",children:"hvordan bruke useStyleConfig"}),` for eksempel.
For at komponenten skal få en default-styling er det viktig å sette `,e.jsx(n.em,{children:"defaultProps"})," i ",e.jsx(n.em,{children:".ts"}),"-filen (ikke bare som default i komponenten i ",e.jsx(n.em,{children:".tsx-filen"}),`).
IconButton er en komponent hvor useStyleConfig er benyttet, og under vises det hvordan `,e.jsx(n.em,{children:"defaultProps"})," settes, og hvordan useStyleConfig brukes i *.tsx*."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`//packages/react/src/theme/components/iconButton.ts

export const IconButtonTheme = defineStyleConfig({
  baseStyle:{...},
  sizes: {...},
  variants: {...},
  defaultProps: {
    variant: "solid",
    size: "md",
  },
});
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`//packages/react/src/Button/IconButton.tsx

export const IconButton = forwardRef<IconButtonProps, "button">(
  ({ isDisabled, isLoading, ...props },ref) => {
    const styles = useStyleConfig("IconButton", props);
    return (
      <ChakraIconButton
        {...props}
        ref={ref}
        __css={{ ...styles }}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
        icon={IconSpinner({ isLoading, ...props })}
      ></ChakraIconButton>
      );}
);

`})}),`
`,e.jsx(s,{status:"warning",children:e.jsx(n.p,{children:`Du skal ikke sette default farge for en komponent direkte i komponenten. Vi har valgt å bruke grønt som default farge-tema
for de aller fleste komponentene i designsystemet. Dette kan imidlertid enkelt endres til blått (se under Oppsett). Dersom
et komponent skal ha et annet default fargetema, f.eks grå, settes dette i theme/index.ts. På denne måten er det enkelt
å holde oversikt over komponenter som avviker fra default fargetema.`})}),`
`,e.jsxs(n.p,{children:[e.jsx("span",{style:{color:"orange"},children:e.jsx(n.strong,{children:e.jsx(n.em,{children:"Tips:"})})})," ",e.jsxs(n.em,{children:[`Chakra lenker til sin egen styling-kode for de fleste komponentene.For
eksempel kan stylingen av Button-komponenten sees ved å trykke på “Theme source” øverst på `,e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/button/usage",rel:"nofollow",children:`Chakra sin dokumentasjonsside
av Button`}),"."]})," ",e.jsx(n.em,{children:`Mye av deres kode kan gjenbrukes ved å bytte ut med egne
CSS-variabler.`})," ",e.jsx(n.em,{children:`På denne måten kan man også se om komponenten arver fra andre, eksempelvis vil theme-source for IconButton
lenkes til theming for Button, altså bruker de samme theming.`})]})]})}function pe(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{pe as default};
