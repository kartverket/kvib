import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./react-CPNU0ZjS.js";import{m as s}from"./index-CUA_NoYA.js";import"./index-C0WJhHAd.js";import{M as i}from"./index-BaWnAQUY.js";import"./index-BQvhbVge.js";import"./index-DcWxlXEa.js";import"./factory-CLoA9iA8.js";import"./index-B_vnkO1z.js";import"./create-recipe-context-C3YO1THl.js";import"./empty-DSVal0bC.js";import"./grid-D4DKMpp-.js";import"./index-D4pulPTQ.js";import"./index-DAkPYtNk.js";import"./factory-DYs4Wht3.js";import"./index-DdSvYDL7.js";import"./index-B7JdufEh.js";import"./index-C0uRiswS.js";import"./highlight-ClV6djvj.js";import"./index-CJq4SDyP.js";import"./aspect-ratio-BXVT7TA7.js";import"./walk-object-S2zBgtQj.js";import"./separator-TUsW3gAb.js";import"./index-0TWAmYWa.js";import"./editable-C24hlysx.js";import"./create-slot-recipe-context-LIZRinhV.js";import"./use-environment-context-D8kv7RG-.js";import"./use-field-context-DNE-vJhO.js";import"./fieldset-Zastz_nj.js";import"./textarea-BnImpDe6.js";import"./link-mNVx0_qq.js";import"./tabs-DUUM1idR.js";import"./badge-Ce5lhWAs.js";import"./bleed-C57nD63S.js";import"./spinner-Bqr15jR0.js";import"./card-BeVhRlx9.js";import"./center-DcfEw7c3.js";import"./code-Cp9kX77-.js";import"./stack-U7eZN9a1.js";import"./container-7k-b7qZu.js";import"./flex-DvlWlK-T.js";import"./float-JGM-JDct.js";import"./grid-item-Bp77QhNQ.js";import"./image-QmQ2Zfvw.js";import"./kbd-XgVTsN4r.js";import"./link-box-DzZ3Hp6o.js";import"./simple-grid-B0KHwr3T.js";import"./skip-nav-link-BovEaBAv.js";import"./table-4CwIBzbe.js";import"./visually-hidden-CCO92Fgd.js";import"./portal-DgcFOe3R.js";import"./preview-C_R4iSlF.js";import"./iframe-BOdEDXNG.js";import"./DocsRenderer-CFRXHY34-C6ZNjvvD.js";import"./react-18-DdrBC4yg.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Bidra/Som utvikler/Style"}),`
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
