import{j as e}from"./jsx-runtime-DQFEoQHt.js";import{useMDXComponents as r}from"./index-DQ9BjFnV.js";import{m as s}from"./index-RaQcFt_0.js";import"./index-BI2f7wVq.js";import{M as i}from"./index-Cs6zGpks.js";import"./index-CbFAwPTn.js";import"./index-BVPtv_lZ.js";import"./factory-C_AV5G8T.js";import"./create-recipe-context-BJGsumvR.js";import"./empty-DSVal0bC.js";import"./grid-C9LqfPmh.js";import"./use-event-DVsa574b.js";import"./create-context-Cnn4BppQ.js";import"./index-Cq2yQuGv.js";import"./index-BFvnOVNu.js";import"./factory-YvB-AF3-.js";import"./walk-object-2Xl5z3JH.js";import"./create-split-props-L-tVc3XO.js";import"./editable-D4OgkZeP.js";import"./create-slot-recipe-context-CBrPPoLh.js";import"./use-environment-context-ekjyci6u.js";import"./use-field-context-DguIDVI7.js";import"./fieldset-DBNWSO0W.js";import"./tabs-yqQGehEz.js";import"./link-BvpO1hOw.js";import"./aspect-ratio-Y0y4qFt-.js";import"./badge-DAWK_bfl.js";import"./bleed-BQpq41fx.js";import"./box-enNWkFiM.js";import"./card-641aoCZa.js";import"./center-t5QQ6XAV.js";import"./code-C7Shch1Q.js";import"./container-B2trJtWH.js";import"./flex-B6LzrYc1.js";import"./float-DkG2t2Rc.js";import"./highlight-B1i-K0Nr.js";import"./grid-item-Cn0KX9Xz.js";import"./simple-grid-DzGsjFz8.js";import"./image-BajOZyTZ.js";import"./kbd-ioGaoUw0.js";import"./link-box-1ZHhZhF1.js";import"./separator-CeD7UzOc.js";import"./skip-nav-link-BknBF1pi.js";import"./spinner-f8I0xFVE.js";import"./stack-BAqUyaXt.js";import"./table-B_IQCDKb.js";import"./textarea-Bl3OFlZv.js";import"./heading-DSKY1IBf.js";import"./text-sMekb8FJ.js";import"./visually-hidden-b-_guvqp.js";import"./portal-zKv_lM9d.js";import"./preview-CEoopE5l.js";import"./iframe-DkZwx-Va.js";import"./DocsRenderer-CFRXHY34-D7y0htf4.js";import"./client-DY76a6NR.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function o(t){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Bidra/Som utvikler/Style"}),`
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
