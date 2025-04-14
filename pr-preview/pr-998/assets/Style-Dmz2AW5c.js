import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CfoPgG5w.js";import{m as s}from"./index-CZ3ox6l8.js";import"./index-CdzfJM-y.js";import{M as i}from"./index-C_LaoSlC.js";import"./index-Bj2TM2QZ.js";import"./index-Bs7GjyIo.js";import"./factory-pl1wLBYD.js";import"./create-recipe-context-DYiacIet.js";import"./empty-DSVal0bC.js";import"./grid-jasc0pCp.js";import"./index-BGbegxtG.js";import"./create-context-Dx5LeRZQ.js";import"./factory-OQRc9M2v.js";import"./index-CVNl4AZj.js";import"./index-kjvw1_fE.js";import"./aspect-ratio-CAuboeZ_.js";import"./walk-object-DWvS5iFr.js";import"./separator-BNn5sDgl.js";import"./index-BqWtAW9h.js";import"./editable-EMIlbeXl.js";import"./create-slot-recipe-context-DgxmRWlj.js";import"./use-environment-context-B22iOzJ9.js";import"./use-field-context-1QGiO1Aa.js";import"./fieldset-W6DYpKsI.js";import"./link-Dwuusza2.js";import"./tabs-BjLtBxIu.js";import"./badge-b3_3SUt1.js";import"./bleed-XXdFbytk.js";import"./box-BGguGcLy.js";import"./spinner-CuRI6N7E.js";import"./card-OfHgEyTV.js";import"./center-ButSt4yq.js";import"./code-1_VME73E.js";import"./stack-mCRVjjbS.js";import"./container-D8eBFey8.js";import"./highlight-BwYutGWa.js";import"./flex-Br_6hloE.js";import"./float-CbEw7epy.js";import"./grid-item-BL2-00m7.js";import"./simple-grid-DGWi7hMH.js";import"./image-OkR7rKz_.js";import"./kbd-B2j_-PiN.js";import"./link-box-V4_Jj2MN.js";import"./skip-nav-link-BC8crZtK.js";import"./table-mbgVTzeK.js";import"./textarea-wloWA6cK.js";import"./heading-DMt6CN8-.js";import"./text-DN4IV3-T.js";import"./visually-hidden-BI2e4u6t.js";import"./portal-EfEQ2Dgj.js";import"./preview-BqpNJ5zd.js";import"./iframe-BJENP2_f.js";import"./DocsRenderer-CFRXHY34-cOcDdS4w.js";import"./react-18-mqHmL3K7.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Bidra/Som utvikler/Style"}),`
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
