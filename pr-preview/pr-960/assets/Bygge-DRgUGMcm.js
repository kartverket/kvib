import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{useMDXComponents as s}from"./index-BGZZYR5m.js";import{m as t}from"./index-Dsql8TDy.js";import"./chunk-NUUEMKO5-q-UjhqNg.js";import{ae as i}from"./index-Df0pwLUf.js";import"./index-C7I6S4tq.js";import"./index-6Bgnn7vh.js";import"./factory-CpD2hwoa.js";import"./create-recipe-context-BAHgkp5l.js";import"./empty-DSVal0bC.js";import"./use-recipe-CYrRhjTN.js";import"./grid-ssdSjSnm.js";import"./use-event-DluRpvc7.js";import"./create-context-B_OvqDKw.js";import"./index-DGxgJC0M.js";import"./index-EN4ZLXvn.js";import"./factory-C8pPPz6n.js";import"./walk-object-Ct_lkoEm.js";import"./create-split-props-L-tVc3XO.js";import"./editable-BymdoWyO.js";import"./create-slot-recipe-context-KvBbDfRP.js";import"./use-environment-context-CwI7sxJj.js";import"./use-field-context-B739sAKC.js";import"./fieldset-7O9opABx.js";import"./tabs-D3FBrevG.js";import"./aspect-ratio-BDUPmLpt.js";import"./badge-CiIWorhQ.js";import"./bleed-Be2diQ6W.js";import"./box-Bmov6X-Z.js";import"./card-MKiKGmSR.js";import"./center-BjTi-jDO.js";import"./code-DB9a5aB3.js";import"./container-CPeF9f1M.js";import"./flex-BzzyrBhv.js";import"./float-BUxgzbw7.js";import"./highlight-C9lHo1pP.js";import"./grid-item-CQ9trW14.js";import"./simple-grid-BKKqsyC0.js";import"./image-BxPC7XNr.js";import"./kbd-BL1YlofU.js";import"./separator-gkbq4TJY.js";import"./skip-nav-link-D46LELhs.js";import"./spinner-DLHOy98U.js";import"./stack-DR__wOga.js";import"./table-B-PQpmxl.js";import"./textarea-CD5y-Dey.js";import"./heading-c0bs7S-P.js";import"./text-Dwwg-e87.js";import"./portal-BqskmCPs.js";import"./iframe-DDOBy4MG.js";import"../sb-preview/runtime.js";import"./react-18-BzWPIXJh.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(r){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Bidra/Som utvikler/Bygge"}),`
`,e.jsx(n.h1,{id:"bygge-komponenten-",children:"Bygge komponenten 🛠"}),`
`,e.jsx(n.p,{children:`Under følger en beskrivelse av hvordan en komponent kan bygges.
I de fleste tilfeller innebærer dette bare å justere på props, men i enkelte tilfeller kan det være ønskelig å bygge selve react-komponenten litt annerledes enn Chakra har gjort.
Link-komponenten brukes som eksempel under.`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["I ",e.jsx(n.code,{children:"packages/react/src"}),": finn mappen med navnet på komponenten, dvs link."]}),`
`,e.jsxs(n.li,{children:["I denne mappen (",e.jsx(n.code,{children:"packages/react/src/link"}),") lag én fil, ",e.jsx(n.em,{children:"Link.tsx"})," (i tillegg til ",e.jsx(n.em,{children:"index.tsx"}),` som ligger der fra før).
`,e.jsx(n.em,{children:"Link.tsx"})," skal brukes for å tilpasse komponenten med f.eks. egne props, og index.tsx brukes for å eksportere alt fra ",e.jsx(n.em,{children:".tsx"}),"-filen."]}),`
`,e.jsxs(n.li,{children:["I ",e.jsx(n.em,{children:"Link.tsx"}),": Begynn med å definere hvilke props som skal være gjeldende for din komponent, samt hvilke typer hver prop kan ta. Dette kan gjøres på to måter:"]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alternativ 1- bygg på Chakras props"}),`: Importer Chakra sine props (her; LinkProps), og fjern unødvendige props og legg evt. til egendefinerte props.
Du må også definere en prop fra Chakra på nytt dersom du skal endre på hvilke verdier denne propen kan ta.
I koden under har vi fjernet chakra sin egen `,e.jsx(n.code,{children:"colorScheme"}),", og heller lagt til vår egendefinerte ",e.jsx(n.code,{children:"colorScheme"})," som kun tar verdiene “green” og “blue”."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx("span",{style:{color:"orange"},children:e.jsx(n.strong,{children:e.jsx(n.em,{children:"Tips:"})})})," ",e.jsxs(n.em,{children:["Når du skal bygge selve komponenten er det lurt å benytte ",e.jsx(n.a,{href:"https://chakra-ui.com/docs/components",rel:"nofollow",children:`komponent-dokumentasjonen
til Chakra `}),"."]})," ",e.jsx(n.em,{children:`I de fleste tilfeller kan du kopiere eksempelkoden deres, og tilpasse/bygge
videre på denne.`})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {LinkProps as ChakraLinkProps} from "@chakra-ui/react";

export type LinkProps = Omit < ChakraLinkProps, "colorScheme" >
& {
    colorScheme: "green" | "blue";
};
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Alternativ 2- definer egne props fra bunnen"}),": Her må man definere alle props fra bunnen av."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export type LinkProps = {
    colorScheme?: "green" | "blue", //denne er ikke required pga. "?"
    href: string, //denne er required. Kommer feilmelding dersom denne ikke settes i komponenten.
    children?: string,
};
`})}),`
`,e.jsx(t,{status:"info",children:e.jsxs(n.p,{children:[e.jsx(n.em,{children:"required"}),` props er ikke det samme som å sette default. Eksempelvis colorScheme er ikke required fordi man ønsker ikke
at brukeren må sette colorScheme dersom hen vil ha default-verdien. Hvordan sette default-verdi kommer i senere steg
i denne guiden.`]})}),`
`]}),`
`]}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["Videre i ",e.jsx(n.em,{children:"Link.tsx"})," skal du bygge opp komponenten ved å bruke propsa du definerte i steg 3. De propsene du endrer på sendes manuelt videre til Chakra-komponenten, de andre kan videresendes ved å bruke ",e.jsx(n.em,{children:"“…props”"}),`- syntaksen.
Ved å tilegne props verdier settes default for komponenten, som er kjekt å gjøre dersom propen er satt som required.`]}),`
`]}),`
`,e.jsx(t,{status:"info",children:e.jsxs(n.p,{children:["Under ",e.jsx(n.a,{href:"/docs/for-utviklere-bidra-med-kode-style--docs",children:"“Style komponenten”"}),` nevnes defaultProps som en del av .ts-filen. Default
som settes i selve komponenten i.tsx-filen overkjører defaultPropsa som settes i styling .ts-filen.`]})}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Flere av Chakra-komponentene har en litt annen variant for å kunne opprettes. Disse komponentene kan opprettes med funksjonen ",e.jsx(n.em,{children:"forwardRef(props, ref)"})," fra ",e.jsx(n.code,{children:"@chakra-ui/react"}),`.
I tillegg til å ta imot `,e.jsx(n.em,{children:"props"}),", tas det også imot en ",e.jsx(n.em,{children:"ref"}),`, som refererer til det underliggende html-element brukt i komponenten.
`,e.jsx(n.em,{children:"ref"}),` skal sendes uendret videre til den underliggende Chakra-komponenten (se eksempelet under).
På denne måten kan man manipulere DOM-en direkte, for eksempel for å flytte fokus til et element (dette har ikke react innebygget støtte for).
Mer informasjon om forwardRef finner du på `,e.jsx(n.a,{href:"https://react.dev/reference/react/forwardRef",rel:"nofollow",children:"forwardRef-react"}),`
og `,e.jsx(n.a,{href:"https://chakra-ui.com/community/recipes/as-prop",rel:"nofollow",children:"The as prop and Custom component"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const Link = forwardRef < LinkProps, "a">(({children, colorScheme = "green", ...props}, ref) => {
    const isExternal = props.isExternal !== undefined ? props.isExternal : Boolean(props.href?.match(/^https?:\\/\\//));
    return (
        <ChakraLink {...props} ref={ref} colorScheme={colorScheme} isExternal={isExternal}>
            {children}
            {isExternal && (
                <span
                    className="material-symbols-rounded"
                    style={{fontSize: "18px", verticalAlign: "middle", marginLeft: "4px"}}
                    aria-label="Ekstern lenke"
                >
        launch
        </span>
            )}
        </ChakraLink>
    );
});
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Tilslutt; eksporter alt fra ",e.jsx(n.em,{children:"Link.tsx"})," i ",e.jsx(n.em,{children:"index.tsx"}),", og fjern komponenten og props som blir eksportert fra Chakra i denne filen. Hvis det er flere komponenter og props i ",e.jsx(n.em,{children:"index.tsx"}),"; fjern kun de du har overskrevet."]}),`
`]}),`
`]}),`
`,e.jsx(t,{status:"warning",children:e.jsx(n.p,{children:"Viktig at forwardRef brukes fra chakra-ui og ikke fra react."})})]})}function le(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{le as default};
