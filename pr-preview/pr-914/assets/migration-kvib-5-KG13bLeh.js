import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as a}from"./index-C2WH5l5l.js";import"./chunk-NUUEMKO5-BQyrOgXO.js";import{ae as d}from"./index-BKQyuJ86.js";import{b3 as m,C as t,T as c}from"./index-C7Oi3TOS.js";import{D as h,T as o,L as i,a as n}from"./Tekstblokk-CZMFWzf2.js";import"./index-Wp2u197Z.js";import"./iframe-QvgwYF6E.js";import"../sb-preview/runtime.js";import"./react-18-B9NBEw6j.js";import"./index-C2tM1_0x.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";const j=["Rating","Select","Passwor Input","File Upload","Checkbox Card","Segment Control","Nested Menu","Color Swatch","Color Picker","Action Bar","Clipboard"],p=()=>e.jsxs(h,{tittel:"Kvib 5",beskrivelse:"Versjon 5 av Kvib bygger på Chakra 3 og har en rekke nyheter med seg. I denne oversikten vil vi fremheve de viktigste endringene og hvordan dette påvirker brukerne av tidligere versjoner av Kvib.",children:[e.jsx(m,{status:"info",size:"lg",children:"Dokumentasjonen vår vil være litt utdatert i en tid fremover etter oppdateringen."}),e.jsx(o,{tittel:"Syntaksendringer",children:e.jsx(i,{children:e.jsxs(n,{tittel:"Dot-notasjon for komponentene",children:["Man kan nå importere én rot-komponent og få tilgang til alle underkomponentene gjennom dot-notasjon. Dette er standarden i Chakra fra nå, men for å unngå enorme mengder med breaking changes har vi valgt å fortsatt tilby komponentene våre som enkeltstående importer, i tillegg til dot-notasjon. Dette tas i bruk ved å importere"," ",e.jsx(t,{children:"Kvib*"}),"-komponentene, som f.eks. ",e.jsx(t,{children:"KvibAccordion"}),". Dette gir tilgang til underkomponentene gjennom dot-notasjon, som f.eks. ",e.jsx(t,{children:"KvibAccordion.Item"}),"."]})})}),e.jsxs(o,{tittel:"Komponenter med nye navn",children:["Flere av komponentene har fått nye navn. Dette byr på breaking changes for de som oppgraderer fra tidligere versjoner av Kvib.",e.jsxs(i,{children:[e.jsxs(n,{tittel:"Alert Dialog og Modal",children:["Slått sammen til én komponent kalt Dialog. Man gjør en Dialog om til en Alert Dialog ved å sette prop-en",e.jsx(t,{children:'role="alertdialog"'}),"."]}),e.jsx(n,{tittel:"Divider",children:"Kalles nå Separator."}),e.jsx(n,{tittel:"Form Control",children:"Kalles nå Field."}),e.jsxs(n,{tittel:"Wrap",children:["Er fjernet og tilbys nå gjennom HStack med prop-en ",e.jsx(t,{children:"wrap=wrap"}),"."]}),e.jsx(n,{tittel:"Select",children:"Select har blitt Select (Native) til fordel for en helt ny Select med Chakra-styling. Select (Native) trigger fortsatt den interne menyen som varierer fra nettleser til nettleser."})]}),e.jsx("br",{}),e.jsx(c,{as:"h3",fontWeight:700,fontSize:"md",children:"Props med nye navn"}),e.jsxs(i,{children:[e.jsxs(n,{tittel:"is*",children:["Alle Chakra-props som tidligere har blitt kalt noe som starter på ",e.jsx(t,{children:"is<X>"}),", som f.eks."," ",e.jsx(t,{children:"isRequired"}),", vil fra nå kun hete ",e.jsx(t,{children:"<x>"}),", altså ",e.jsx(t,{children:"required"}),". Det samme gjelder ",e.jsx(t,{children:"defaultIsOpen"}),", som nå heter ",e.jsx(t,{children:"defaultOpen"}),"."]}),e.jsxs(n,{tittel:"colorScheme",children:["Heter nå ",e.jsx(t,{children:"colorPalette"}),". Man kan også bruke variantene av en fargepalett slik"," ",e.jsx(t,{children:'<Box bg="colorPalette.400">...</Box>'})]}),e.jsxs(n,{tittel:"spacing",children:["Har blitt forenklet slik at alle komponenter bruker ",e.jsx(t,{children:"gap"}),". Tidligere har det vært noen som bruker den ene og noen som bruker den andre, men nå er det kun ",e.jsx(t,{children:"gap"})," som gjelder."]}),e.jsxs(n,{tittel:"sx",children:[e.jsx(t,{children:"sx"})," har nå bli erstattet med ",e.jsx(t,{children:"css"}),"."]})]})]}),e.jsx(o,{tittel:"Nye komponenter",children:e.jsx(i,{children:j.sort().map(r=>e.jsx(n,{tittel:r},r))})})]});function l(r){return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Migrere til Kvib 5"}),`
`,e.jsx(p,{})]})}function A(r={}){const{wrapper:s}={...a(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(l,{...r})}):l()}export{A as default};
