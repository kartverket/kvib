import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{useMDXComponents as r}from"./index-BGZZYR5m.js";import{m as s}from"./index-CoJY4uhr.js";import"./chunk-NUUEMKO5-CyVhFpQK.js";import{ae as i}from"./index-ChLij7eC.js";import"./index-C7I6S4tq.js";import"./index-HLUy-D3P.js";import"./factory-X12ZEw24.js";import"./create-recipe-context-CAgtZ_aE.js";import"./empty-DSVal0bC.js";import"./grid-Pos4YUij.js";import"./use-event-sZopjRGC.js";import"./create-context-rrX1Jm6N.js";import"./index-DGxgJC0M.js";import"./index-EN4ZLXvn.js";import"./factory-C0bPybxC.js";import"./walk-object-Ct_lkoEm.js";import"./create-split-props-L-tVc3XO.js";import"./editable-D1zuwc7o.js";import"./create-slot-recipe-context-CUpEp5dt.js";import"./use-environment-context-BNO5zKCi.js";import"./use-field-context-B1YCNrrl.js";import"./fieldset-Cg8gXsUZ.js";import"./tabs-JycFvS-P.js";import"./aspect-ratio-pADKN6nH.js";import"./badge-xSKWg_M8.js";import"./bleed-CYt0VWpp.js";import"./box-Cm05xU0f.js";import"./card-j9fhE5Dj.js";import"./center-CRmuswWq.js";import"./code-Byz3bxpg.js";import"./container-Bzta5xSJ.js";import"./flex-BM20q-lB.js";import"./float-Ddto1wVD.js";import"./highlight-ChZ2uKF0.js";import"./grid-item-Cd4HGiya.js";import"./simple-grid-YGr4e-fX.js";import"./image-DfK4wNKE.js";import"./kbd-mgwTwfVB.js";import"./link-box-DRNCg9NM.js";import"./separator-h_vB7cim.js";import"./skip-nav-link-CPg7LKM1.js";import"./spinner-ByhJ2vKD.js";import"./stack-B6Ug3qu1.js";import"./table-DSaLZh49.js";import"./textarea-PZbMMvdQ.js";import"./heading-DgtS3TKy.js";import"./text-CO7rLojD.js";import"./visually-hidden-D4okpjrR.js";import"./portal-LOkWSXUb.js";import"./iframe-DChiRzbk.js";import"../sb-preview/runtime.js";import"./react-18-BzWPIXJh.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Bidra/Som utvikler/Style"}),`
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
lenkes til theming for Button, altså bruker de samme theming.`})]})]})}function ae(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ae as default};
