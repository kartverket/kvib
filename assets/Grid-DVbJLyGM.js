import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as p}from"./index-DlpNa54Y.js";import{ae as m,af as o,ag as a}from"./index-Bw9sVD4c.js";import{G as c,a as l,b as j,c as x,d as h}from"./Grid.stories-Qo2AhZEP.js";import{D as f,F as g,a as n}from"./Feedback-Dvvt81sc.js";import{T as s}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{C as t}from"./chunk-LZZHVJFG-CBh9GFNK.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-ChUd901S.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-ZPFGWTBB-CIbrnSU5.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./Card-DSiGcjvP.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./Button-BtdfIBAT.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./index-2ZXUntH3.js";import"./Icon-CERCJRn_.js";/* empty css              */function d(i){const r={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:c}),`
`,e.jsxs(f,{children:[e.jsx(r.h1,{id:"grid",children:"Grid"}),e.jsx(r.p,{children:`Grid er en layout for å lage grid layouts. Den brukes til å fordele elementer horisontalt eller vertikalt med samme spacing mellom elementene.
Den er lett å bruke for å dynamisk plassere elementer slik du vil. Løsningen er basert på CSS Grid.`}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { Grid, GridItem } from "@kvib/react";
`})}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Egnet til:"})}),e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Oppbygging av sidelayout"}),`
`,e.jsx(r.li,{children:"Gruppering av elementer (eks. knapper, cards)"}),`
`]}),e.jsxs(r.p,{children:["Grid er bygget opp av ",e.jsx(r.code,{children:"Grid"})," og ",e.jsx(r.code,{children:"GridItem"}),". ",e.jsx(r.code,{children:"Grid"})," er containeren som definerer layouten, mens ",e.jsx(r.code,{children:"GridItem"})," er elementene som skal plasseres i gridet. For props til ",e.jsx(r.code,{children:"Grid"}),", se nederst på denne siden. For props til ",e.jsx(r.code,{children:"GridItem"}),", se ",e.jsx(r.a,{href:"/story/layout-grid-griditem--grid",children:"GridItem"}),"."]}),e.jsx(g,{component:"Grid"}),e.jsx(n,{title:"Template columns",description:e.jsxs(s,{children:["Grid kan brukes med ",e.jsx(t,{children:"templateColumns"})," for å definere antall kolonner og bredden på hver kolonne. Det er også mulig å bruke ",e.jsx(t,{children:"auto"})," for å definere en kolonne som skal ta opp resten av plassen. Dette er samme oppsett som i CSS Grid.",e.jsx(t,{children:"gap"})," kan brukes for å definere avstanden mellom kolonnene."]}),story:e.jsx(o,{of:l})}),e.jsx(n,{title:"Ta opp flere kolonner eller rader",description:e.jsxs(s,{children:["I noen layouter må man kunne definere at et element skal ta opp flere kolonner eller rader. Dette kan gjøres ved å bruke ",e.jsx(t,{children:"colSpan"})," eller ",e.jsx(t,{children:"rowSpan"})," propene på ",e.jsx(t,{children:"GridItem"}),". I disse tilfellene må også"," ",e.jsx(t,{children:"templateColumns"})," og ",e.jsx(t,{children:"templateRows"})," defineres."]}),story:e.jsx(o,{of:j})}),e.jsx(n,{title:"Start og slutt",description:e.jsxs(s,{children:["Bruk ",e.jsx(t,{children:"colStart"})," og ",e.jsx(t,{children:"colEnd"})," på ",e.jsx(t,{children:"GridItem"})," for å gjøre at elementet starter eller slutter på nth grid posisjon."]}),story:e.jsx(o,{of:x})}),e.jsx(n,{title:"Template areas",description:e.jsxs(s,{children:[e.jsx(t,{children:"templateAreas"}),"-proppen spesifiserer områder inne i gridet. Bruk template literals for å definere områdene. Nå er det mulig å referere til områdene ved å bruke ",e.jsx(t,{children:"area"}),"-proppen på ",e.jsx(t,{children:"GridItem"}),"."]}),story:e.jsx(o,{of:h})}),e.jsx(n,{isVertical:!0,title:"Props",description:"",story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),e.jsx(a,{of:l})]})})]})]})}function ae(i={}){const{wrapper:r}={...p(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(d,{...i})}):d(i)}export{ae as default};