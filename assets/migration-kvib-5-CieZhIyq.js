import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as d}from"./index-C2WH5l5l.js";import"./chunk-NUUEMKO5-DLytSblA.js";import{ae as a}from"./index-BVJ-slM5.js";import{b3 as c,T as h,C as t}from"./index-BM5ggu4W.js";import{D as p,T as s,L as i,a as l}from"./Tekstblokk-CqjnNmVw.js";import"./index-Wp2u197Z.js";import"./iframe-DhTC2uXz.js";import"../sb-preview/runtime.js";import"./react-18-B9NBEw6j.js";import"./index-C2tM1_0x.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";const m=["Rating","Select","Password Input","File Upload","Checkbox Card","Segment Control","Nested Menu","Color Swatch","Color Picker","Action Bar","Clipboard","Radio Card","Timeline","Toggle Tip","Collapsible","For","Em","Strong","Quote","Span","Bleed","Blockquote"],j=[{title:"Alert Dialog og Modal",description:e.jsxs(e.Fragment,{children:["Slått sammen til én komponent kalt Dialog. Man gjør en Dialog om til en Alert Dialog ved å sette prop-en"," ",e.jsx(t,{children:'role="alertdialog"'}),"."]})},{title:"Divider",description:e.jsx(e.Fragment,{children:"Kalles nå Separator."})},{title:"Form Control",description:e.jsx(e.Fragment,{children:"Kalles nå Field."})},{title:"Wrap",description:e.jsxs(e.Fragment,{children:["Er fjernet og tilbys nå gjennom HStack med prop-en ",e.jsx(t,{children:"wrap=wrap"}),"."]})},{title:"Select",description:e.jsx(e.Fragment,{children:"Select har blitt Select (Native) til fordel for en helt ny Select med Chakra-styling. Select (Native) trigger fortsatt den interne menyen som varierer fra nettleser til nettleser."})},{title:"Show/Hide",description:e.jsx(e.Fragment,{children:"Kalles nå Show."})},{title:"<X>Button",description:e.jsxs(e.Fragment,{children:["Enkelte komponenter som har hatt en Button som child-komponent, slik som Accordion med AccordionButton, har nå blitt omdøpt til ",e.jsx(t,{children:"<X>Trigger"}),"."]})},{title:"<X>CloseButton",description:e.jsxs(e.Fragment,{children:["Alle forskjellige CloseButton-komponenter, som f.eks. ModalCloseButton, har nå blitt samlet under én komponent som heter CloseButton. For Popover stemmer ikke dette helt, der heter den ",e.jsx(t,{children:"PopoverCloseTrigger"}),"."]})},{title:"<X>Overlay",description:e.jsxs(e.Fragment,{children:["Kalles nå ",e.jsx(t,{children:"<X>Backdrop"}),"."]})},{title:"<X>Panel",description:e.jsxs(e.Fragment,{children:["Kalles nå ",e.jsx(t,{children:"<X>Content"}),"."]})},{title:"<X>Icon",description:e.jsxs(e.Fragment,{children:["Kalles nå ",e.jsx(t,{children:"<X>Indicator"}),"."]})},{title:"<X>Label",description:e.jsxs(e.Fragment,{children:["Kalles noen steder, som f.eks. i ",e.jsx(t,{children:"Progress"}),", nå ",e.jsx(t,{children:"<X>ValueText"}),"."]})},{title:"HelperText",description:e.jsxs(e.Fragment,{children:["Kalles nå ",e.jsx(t,{children:"HelpText"}),"."]})},{title:"OrderedList og UnorderedList",description:e.jsxs(e.Fragment,{children:["Har blitt forenklet til ",e.jsx(t,{children:"List"})," med prop-en ",e.jsx(t,{children:"as"})," for å velge mellom ulike typer lister."]})},{title:"InputLeftAddon og InputRightAddon",description:e.jsxs(e.Fragment,{children:["Kalles nå ",e.jsx(t,{children:"InputAddon"})," med ",e.jsx(t,{children:"placement"}),"-prop-en."]})}],x=[{title:"is<X>",description:e.jsxs(e.Fragment,{children:["Alle Chakra-props som tidligere har blitt kalt noe som starter på ",e.jsx(t,{children:"is<X>"}),", som f.eks."," ",e.jsx(t,{children:"isRequired"}),", vil fra nå kun hete ",e.jsx(t,{children:"<x>"}),", altså ",e.jsx(t,{children:"required"}),". Det samme gjelder ",e.jsx(t,{children:"defaultIsOpen"}),", som nå heter ",e.jsx(t,{children:"defaultOpen"}),"."]})},{title:"colorScheme",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"colorPalette"}),". Man kan også bruke variantene av en fargepalett slik"," ",e.jsx(t,{children:'<Box bg="colorPalette.400">...</Box>'})]})},{title:"spacing",description:e.jsxs(e.Fragment,{children:["Har blitt forenklet slik at alle komponenter bruker ",e.jsx(t,{children:"gap"}),". Tidligere har det vært noen som bruker den ene og noen som bruker den andre, men nå er det kun ",e.jsx(t,{children:"gap"})," som gjelder."]})},{title:"spacingX",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"columnGap"}),"."]})},{title:"spacingY",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"rowGap"}),"."]})},{title:"sx",description:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"sx"})," har nå bli erstattet med ",e.jsx(t,{children:"css"}),"."]})},{title:"status",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"type"}),"."]})},{title:"noOfLines",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"lineClamp"}),"."]})},{title:"truncated",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"truncate"}),"."]})},{title:"allowMultiple",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"multiple"}),"."]})},{title:"allowToggle",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"collapsible"}),"."]})},{title:"initialFocusRef og finalFocusRef",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"initialFocusEl"})," og ",e.jsx(t,{children:"finalFocusEl"}),"."]})},{title:"returnFocusOnClose",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"restoreFocus"}),"."]})},{title:"blockScrollOnMount",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"preventScroll"}),"."]})},{title:"onOpen og onClose",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"onOpenChange"}),"."]})},{title:"isFullHeight",description:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Drawer"})," sin ",e.jsx(t,{children:"isFullHeight"})," prop er fjernet. Bruk ",e.jsx(t,{children:"height=100dvh"})," i stedet."]})},{title:"isRound",description:e.jsxs(e.Fragment,{children:["Komponenter som støttet ",e.jsx(t,{children:"isRound"})," støtter nå ",e.jsx(t,{children:"shape=pill"})," i stedet."]})},{title:"_activeLink",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"_currentPage"}),"."]})},{title:"_activeStep",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"_currentStep"}),"."]})}],g=[{title:"primary",description:e.jsx(e.Fragment,{children:e.jsx(t,{children:"solid"})})},{title:"secondary",description:e.jsx(e.Fragment,{children:e.jsx(t,{children:"outline"})})},{title:"tertiary",description:e.jsx(e.Fragment,{children:e.jsx(t,{children:"ghost"})})},{title:"ghost",description:e.jsx(e.Fragment,{children:e.jsx(t,{children:"plain"})})}],u=[{title:"Wrap",description:e.jsxs(e.Fragment,{children:["Er fjernet og tilbys nå gjennom HStack med prop-en ",e.jsx(t,{children:"wrap=wrap"}),"."]})},{title:"forwardRef",description:e.jsxs(e.Fragment,{children:["Er fjernet og erstattet med ",e.jsx(t,{children:"React.forwardRef"}),"."]})},{title:"ControlBox",description:e.jsx(e.Fragment,{children:"Er tatt bort."})},{title:"@chakra-ui/icons",description:e.jsxs(e.Fragment,{children:["Er tatt bort. Chakra anbefaler å heller bruker ",e.jsx(t,{children:"react-icons"}),"eller ",e.jsx(t,{children:"lucide-react"}),"."]})},{title:"AvatarGroup",description:e.jsxs(e.Fragment,{children:["Er tatt bort til fordel for en mer generisk ",e.jsx(t,{children:"Group"}),"."]})},{title:"AvatarBadge",description:e.jsxs(e.Fragment,{children:["Er tatt bort. Anbefaler å bruke ",e.jsx(t,{children:"Float"})," i stedet."]})},{title:"TagLeftIcon og TagRightIcon",description:e.jsxs(e.Fragment,{children:["Er tatt bort til fordel for å heller rendre ikonet direkte i ",e.jsx(t,{children:"Tag"}),"."]})},{title:"focusBorderColor og errorBorderColor",description:e.jsxs(e.Fragment,{children:["Er tatt bort som props. Bruk ",e.jsx(t,{children:"--focus-color"})," og ",e.jsx(t,{children:"--error-color"})," i stedet."]})},{title:"preserveScrollBarGap",description:e.jsx(e.Fragment,{children:"Er tatt bort."})},{title:"allowPinZoom",description:e.jsx(e.Fragment,{children:"Er tatt bort."})}],k=[{title:"Dot-notasjon for komponentene",description:e.jsxs(e.Fragment,{children:["Man kan nå importere én rot-komponent og få tilgang til alle underkomponentene gjennom dot-notasjon. Dette er standarden i Chakra fra nå, men for å unngå enorme mengder med breaking changes har vi valgt å fortsatt tilby komponentene våre som enkeltstående importer, i tillegg til dot-notasjon. Dette tas i bruk ved å importere"," ",e.jsx(t,{children:"Kvib*"}),"-komponentene, som f.eks. ",e.jsx(t,{children:"KvibAccordion"}),". Dette gir tilgang til underkomponentene gjennom dot-notasjon, som f.eks. ",e.jsx(t,{children:"KvibAccordion.Item"}),"."]})}],F=()=>e.jsxs(p,{tittel:"Kvib 5",beskrivelse:"Versjon 5 av Kvib bygger på Chakra 3 og har en rekke nyheter med seg. I denne oversikten vil vi fremheve de viktigste endringene og hvordan dette påvirker brukerne av tidligere versjoner av Kvib.",children:[e.jsx(c,{status:"info",size:"lg",children:"Dokumentasjonen vår vil være litt utdatert i en tid fremover etter oppdateringen."}),e.jsx(s,{tittel:"Syntaksendringer",children:e.jsx(i,{children:k.sort((r,n)=>r.title>n.title?1:-1).map(r=>e.jsx(l,{tittel:r.title,children:r.description},r.title))})}),e.jsxs(s,{tittel:"Komponenter med nye navn",children:["Flere av komponentene har fått nye navn. Dette byr på breaking changes for de som oppgraderer fra tidligere versjoner av Kvib.",e.jsx(i,{children:j.sort((r,n)=>r.title>n.title?1:-1).map(r=>e.jsx(l,{tittel:r.title,children:r.description},r.title))}),e.jsx("br",{}),e.jsx(h,{as:"h3",fontWeight:700,fontSize:"md",children:"Props med nye navn"}),e.jsx(i,{children:x.sort((r,n)=>r.title>n.title?1:-1).map(r=>e.jsx(l,{tittel:r.title,children:r.description},r.title))})]}),e.jsx(s,{tittel:"Varianter",children:e.jsx(i,{children:g.map(r=>e.jsx(l,{tittel:r.title,children:r.description},r.title))})}),e.jsx(s,{tittel:"Nye komponenter",children:e.jsx(i,{children:m.sort().map(r=>e.jsx(l,{tittel:r},r))})}),e.jsx(s,{tittel:"Fjernede komponenter, hooks og props",children:e.jsx(i,{children:u.sort((r,n)=>r.title>n.title?1:-1).map(r=>e.jsx(l,{tittel:r.title,children:r.description},r.title))})})]});function o(r){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Migrere til Kvib 5"}),`
`,e.jsx(F,{})]})}function A(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o()}export{A as default};
