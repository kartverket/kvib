import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CPNU0ZjS.js";import{m as s}from"./index-DcoDICuN.js";import"./index-BdB5fLv2.js";import{M as i}from"./index-jHuF-Wsm.js";import"./index-BQvhbVge.js";import"./index-86-8mblZ.js";import"./factory-D1GN6RGf.js";import"./index-BB9U161a.js";import"./create-recipe-context-C9VbXybd.js";import"./empty-DSVal0bC.js";import"./grid-DyE6Atn0.js";import"./index-7REH5UVY.js";import"./index-Ct-f3TY_.js";import"./factory-q8nNcEUp.js";import"./index-DdSvYDL7.js";import"./index-B7JdufEh.js";import"./index-BPSUUwHO.js";import"./highlight-C_2mKK9A.js";import"./index-Dw9C4pvr.js";import"./aspect-ratio-DMZe2Xqn.js";import"./walk-object-Cvn_BEMT.js";import"./separator-BQEKcdDy.js";import"./index-0TWAmYWa.js";import"./editable-BHYZU5bt.js";import"./create-slot-recipe-context-CAi7jAA5.js";import"./use-environment-context-DZYGLJZ6.js";import"./use-field-context-HlIqaYSR.js";import"./fieldset-DVuWtXFY.js";import"./textarea-Co3x0bW1.js";import"./link-UdL37KAI.js";import"./tabs-CVBVqMDC.js";import"./badge-BmiHxaIU.js";import"./bleed-B0hvnzWw.js";import"./spinner-2fgN4LEd.js";import"./card-CYBXy-ND.js";import"./center-B-NX87w8.js";import"./code-p2mJi85M.js";import"./stack-4ts2l5En.js";import"./container-CEncUXio.js";import"./flex-WwQcskX8.js";import"./float-Dpm5IIw9.js";import"./grid-item-DDqtJbyh.js";import"./image-CSeau-PX.js";import"./kbd-VnueJz2a.js";import"./link-box-CMPuquob.js";import"./simple-grid-BzLxpD6j.js";import"./skip-nav-link-Dlrl41YA.js";import"./table-R-uOkT41.js";import"./visually-hidden-BJ0NLybu.js";import"./portal-hpO-k4mZ.js";import"./preview-CqQCiEYV.js";import"./iframe-KaMS4xVj.js";import"./DocsRenderer-CFRXHY34-Csdatpk0.js";import"./react-18-B7jBJ658.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Bidra/Som utvikler/Style"}),`
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
