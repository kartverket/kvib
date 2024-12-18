import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as a}from"./index-BGZZYR5m.js";import{T as o,C as n}from"./index-C4Tll0EB.js";import{ae as p,af as t,ag as m}from"./index-BgeB4h-e.js";import{D as c,F as j,a as i}from"./Feedback-BLqK7Q7q.js";import{G as x,P as l,a as h,b as f,c as g}from"./Grid.stories-DjjleBu1.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-96PCSocl.js";import"../sb-preview/runtime.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function d(s){const r={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:x}),`
`,e.jsxs(c,{children:[e.jsx(r.h1,{id:"grid",children:"Grid"}),e.jsx(r.p,{children:`Grid er en layout for å lage grid layouts. Den brukes til å fordele elementer horisontalt eller vertikalt med samme spacing mellom elementene.
Den er lett å bruke for å dynamisk plassere elementer slik du vil. Løsningen er basert på CSS Grid.`}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { Grid, GridItem } from "@kvib/react";
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Egnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Oppbygging av sidelayout"}),`
`,e.jsx(r.li,{children:"Gruppering av elementer (eks. knapper, cards)"}),`
`]}),e.jsxs(r.p,{children:["Grid er bygget opp av ",e.jsx(r.code,{children:"Grid"})," og ",e.jsx(r.code,{children:"GridItem"}),". ",e.jsx(r.code,{children:"Grid"})," er containeren som definerer layouten, mens ",e.jsx(r.code,{children:"GridItem"})," er elementene som skal plasseres i gridet. For props til ",e.jsx(r.code,{children:"Grid"}),", se nederst på denne siden. For props til ",e.jsx(r.code,{children:"GridItem"}),", se ",e.jsx(r.a,{href:"/story/layout-grid-griditem--grid",children:"GridItem"}),"."]}),e.jsx(j,{component:"Grid"}),e.jsx(i,{title:"Template columns",description:e.jsxs(o,{children:["Grid kan brukes med ",e.jsx(n,{children:"templateColumns"})," for å definere antall kolonner og bredden på hver kolonne. Det er også mulig å bruke ",e.jsx(n,{children:"auto"})," for å definere en kolonne som skal ta opp resten av plassen. Dette er samme oppsett som i CSS Grid.",e.jsx(n,{children:"gap"})," kan brukes for å definere avstanden mellom kolonnene."]}),story:e.jsx(t,{of:l})}),e.jsx(i,{title:"Ta opp flere kolonner eller rader",description:e.jsxs(o,{children:["I noen layouter må man kunne definere at et element skal ta opp flere kolonner eller rader. Dette kan gjøres ved å bruke ",e.jsx(n,{children:"colSpan"})," eller ",e.jsx(n,{children:"rowSpan"})," propene på ",e.jsx(n,{children:"GridItem"}),". I disse tilfellene må også"," ",e.jsx(n,{children:"templateColumns"})," og ",e.jsx(n,{children:"templateRows"})," defineres."]}),story:e.jsx(t,{of:h})}),e.jsx(i,{title:"Start og slutt",description:e.jsxs(o,{children:["Bruk ",e.jsx(n,{children:"colStart"})," og ",e.jsx(n,{children:"colEnd"})," på ",e.jsx(n,{children:"GridItem"})," for å gjøre at elementet starter eller slutter på nth grid posisjon."]}),story:e.jsx(t,{of:f})}),e.jsx(i,{title:"Template areas",description:e.jsxs(o,{children:[e.jsx(n,{children:"templateAreas"}),"-proppen spesifiserer områder inne i gridet. Bruk template literals for å definere områdene. Nå er det mulig å referere til områdene ved å bruke ",e.jsx(n,{children:"area"}),"-proppen på ",e.jsx(n,{children:"GridItem"}),"."]}),story:e.jsx(t,{of:g})}),e.jsx(i,{isVertical:!0,title:"Props",description:"",story:e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),e.jsx(m,{of:l})]})})]})]})}function M(s={}){const{wrapper:r}={...a(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(d,{...s})}):d(s)}export{M as default};
