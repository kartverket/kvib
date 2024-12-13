import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as p}from"./index-BGZZYR5m.js";import"./chunk-NUUEMKO5-xvjQQE_e.js";import{ai as c,ae as h}from"./index-DDv04Q3m.js";import{d as j,C as t,v as x,T as d}from"./index-CqxO52Wc.js";import{D as m}from"./Dokumentasjonsside-CMcdOm2X.js";import{T as i,L as l,a as n}from"./Tekstblokk-DjQcPiP5.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-X3ie2j66.js";import"../sb-preview/runtime.js";import"./react-18-BzWPIXJh.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const s=r=>e.jsxs(j,{mt:"1.5rem",children:[e.jsx("div",{children:r.beskrivelse}),e.jsx(c,{code:r.kildekode})]});try{s.displayName="Kodeeksempel",s.__docgenInfo={description:"",displayName:"Kodeeksempel",props:{beskrivelse:{defaultValue:null,description:"",name:"beskrivelse",required:!0,type:{name:"ReactNode"}},kildekode:{defaultValue:null,description:"",name:"kildekode",required:!0,type:{name:"string"}}}}}catch{}const g=[{title:"Wrap",description:e.jsxs(e.Fragment,{children:["Er fjernet og tilbys nå gjennom HStack med prop-en ",e.jsx(t,{children:"wrap=wrap"}),"."]})},{title:"forwardRef",description:e.jsxs(e.Fragment,{children:["Er fjernet og erstattet med ",e.jsx(t,{children:"React.forwardRef"}),"."]})},{title:"ControlBox",description:e.jsx(e.Fragment,{children:"Er tatt bort."})},{title:"@chakra-ui/icons",description:e.jsxs(e.Fragment,{children:["Er tatt bort. Chakra anbefaler å heller bruker ",e.jsx(t,{children:"react-icons"}),"eller ",e.jsx(t,{children:"lucide-react"}),"."]})},{title:"AvatarGroup",description:e.jsxs(e.Fragment,{children:["Er tatt bort til fordel for en mer generisk ",e.jsx(t,{children:"Group"}),"."]})},{title:"AvatarBadge",description:e.jsxs(e.Fragment,{children:["Er tatt bort. Anbefaler å bruke ",e.jsx(t,{children:"Float"})," i stedet."]})},{title:"TagLeftIcon og TagRightIcon",description:e.jsxs(e.Fragment,{children:["Er tatt bort til fordel for å heller rendre ikonet direkte i ",e.jsx(t,{children:"Tag"}),"."]})},{title:"focusBorderColor og errorBorderColor",description:e.jsxs(e.Fragment,{children:["Er tatt bort som props. Bruk ",e.jsx(t,{children:"--focus-color"})," og ",e.jsx(t,{children:"--error-color"})," i stedet."]})},{title:"preserveScrollBarGap",description:e.jsx(e.Fragment,{children:"Er tatt bort."})},{title:"allowPinZoom",description:e.jsx(e.Fragment,{children:"Er tatt bort."})},{title:"LinkOverlay sin isExternal-prop",description:e.jsxs(e.Fragment,{children:["Denne er fjernet. Man kan heller inkludere en knapp som en del av div-en som blir overlayet og legge til"," ",e.jsx(t,{children:"external"})," på denne."]})},{title:"align på Text-komponenten",description:e.jsxs(e.Fragment,{children:["Fjernet til fordel for ",e.jsx(t,{children:"textAlign"}),"."]})},{title:"useTheme",description:e.jsxs(e.Fragment,{children:["Er fjernet. Man kan nå hente ut tokens ved å bruke ",e.jsx(t,{children:"useKvibContext"})," og kalle på ",e.jsx(t,{children:"token()"}),".",e.jsx(s,{beskrivelse:"Bruk av tokens tidligere:",kildekode:`
const theme = useTheme()
const largeBreakpoint = theme.breakpoints.lg
`}),e.jsx(s,{beskrivelse:"Nå hentes tokens ut slik:",kildekode:`
const system = useKvibContext();
const largeBreakpoint = system.token("breakpoints.lg");
`})]})}],k=()=>e.jsx(i,{tittel:"Accordion",children:e.jsxs(l,{children:[e.jsxs(n,{tittel:"allowMultiple",children:["Omdøpt til ",e.jsx(t,{children:"multiple"}),"."]}),e.jsxs(n,{tittel:"allowToggle",children:["Omdøpt til ",e.jsx(t,{children:"collapsible"}),"."]}),e.jsxs(n,{tittel:"AccordionButton",children:["Omdøpt til ",e.jsx(t,{children:"AccordionItemTrigger"}),"."]}),e.jsxs(n,{tittel:"AccordionPanel",children:["Omdøpt til ",e.jsx(t,{children:"AccordionItemContent"}),"."]}),e.jsxs(n,{tittel:"AccordionIcon",children:["Omdøpt til ",e.jsx(t,{children:"AccordionItemIndicator"}),"."]})]})}),u=()=>e.jsx(i,{tittel:"Alert",children:e.jsxs(l,{children:[e.jsxs(n,{tittel:"Færre varianter",children:["Variantene ",e.jsx(t,{children:"top-accent"})," og ",e.jsx(t,{children:"left-accent"})," er fjernet. Eneste gyldige varianter er nå"," ",e.jsx(t,{children:"solid"}),", ",e.jsx(t,{children:"subtle"}),", ",e.jsx(t,{children:"outline"})," og ",e.jsx(t,{children:"plain"}),"."]}),e.jsxs(n,{tittel:"AlertIcon",children:["Er fjernet. Standard-ikon settes ut fra status på alerten (infotegn på ",e.jsx(t,{children:"info"}),", ",e.jsx(t,{children:"warning"}),"og ",e.jsx(t,{children:"error"}),", checkmark for ",e.jsx(t,{children:"success"}),"), men kan overstyres gjennom ",e.jsx(t,{children:"icon"}),"-propen på ",e.jsx(t,{children:"Alert"}),"."]})]})}),b=()=>e.jsxs(i,{tittel:"Dialog (tidligere kalt Modal)",children:["AlertDialog og Modal har blitt slått sammen til én komponent som nå heter Dialog. I tillegg barnekomponentene også fått nye navn.",e.jsxs(l,{children:[e.jsxs(n,{tittel:"ModalCloseButton",children:["Omdøpt til ",e.jsx(t,{children:"DialogCloseTrigger"}),"."]}),e.jsxs(n,{tittel:"ModalContent",children:["Omdøpt til ",e.jsx(t,{children:"DialogContent"}),"."]}),e.jsxs(n,{tittel:"ModalHeader",children:["Omdøpt til ",e.jsx(t,{children:"DialogHeader"}),"."]}),e.jsxs(n,{tittel:"ModalFooter",children:["Omdøpt til ",e.jsx(t,{children:"DialogFooter"}),"."]}),e.jsxs(n,{tittel:"ModalOverlay",children:["Omdøpt til ",e.jsx(t,{children:"DialogBackdrop"}),"."]})]})]}),f=()=>e.jsxs(i,{tittel:"Input Group",children:[e.jsxs(l,{children:[e.jsxs(n,{tittel:"InputLeftAddon, InputRightAddon",children:["Er fjernet. Bruk ",e.jsx(t,{children:"InputAddon"}),"-komponenten i stedet."]}),e.jsxs(n,{tittel:"InputLeftElement, InputRightElement",children:["Er fjernet. Bruk propsene ",e.jsx(t,{children:"startElement"})," og ",e.jsx(t,{children:"endElement"})," på ",e.jsx(t,{children:"InputGroup"})," i stedet."]})]}),e.jsx(s,{beskrivelse:e.jsxs(e.Fragment,{children:["Av en eller annen grunn så kan man ikke bruke ",e.jsx(t,{children:"InputGroup"})," når man skal bruke"," ",e.jsx(t,{children:"InputAddon"}),". Her blir man tvunget til å heller bruke ",e.jsx(t,{children:"Group"})," med propen"," ",e.jsx(t,{children:"attached"}),"."]}),kildekode:`
<Group attached>
  <InputAddon>kr</InputAddon>
  <Input placeholder="Beløp" />
</Group>
      `})]}),v=()=>e.jsxs(i,{tittel:"Number Input",children:[e.jsx(s,{beskrivelse:e.jsxs(e.Fragment,{children:["Tidligere kunne man bruke ",e.jsx(t,{children:"NumberInput"})," slik med ",e.jsx(t,{children:"name"})," og ",e.jsx(t,{children:"value"})," som props på ",e.jsx(t,{children:"NumberInputField"}),":"]}),kildekode:`
<NumberInput>
  <NumberInputField name={name} value={name} />
</NumberInput>
      `}),e.jsx(s,{beskrivelse:e.jsxs(e.Fragment,{children:["Nå må man flytte disse propsene til ",e.jsx(t,{children:"NumberInput"}),":"]}),kildekode:`
<NumberInput name={name} value={name}>
  <NumberInputField />
</NumberInput>
      `})]}),S=()=>e.jsxs(i,{tittel:"Show",children:["Tidligere hadde man både ",e.jsx(t,{children:"Show"})," og ",e.jsx(t,{children:"Hide"})," for å vise og skjule innhold. Disse er nå forenklet til én komponent som heter ",e.jsx(t,{children:"Show"}),".",e.jsx(s,{beskrivelse:"Eksempel på bruk",kildekode:`
<Show when={...} fallback={...}>
  <div>Innhold</div>
</Show>
`})]}),F=()=>e.jsxs(i,{tittel:"Steps",children:[e.jsx(t,{children:"Stepper"})," har byttet navn til ",e.jsx(t,{children:"Steps"})," og byr på flere endringer i strukturen for hvordan man bruker denne. Her er det såpass store endringer at vi ikke tilbyr et alias for den gamle skrivemåten siden man uansett må gjøre en del endringer i egen kode for å bruke denne.",e.jsx(s,{beskrivelse:e.jsxs(e.Fragment,{children:["Tidligere har man brukt ",e.jsx(t,{children:"Stepper"})," slik:"]}),kildekode:`
<Stepper index={activeStep}>
  {steps.map((step, index) => (
    <Step key={index}>
      <StepIndicator>
        <StepStatus
          complete={<StepIcon />}
          incomplete={<StepNumber />}
          active={<StepNumber />}
        />
      </StepIndicator>

      <Box flexShrink='0'>
        <StepTitle>{step.title}</StepTitle>
        <StepDescription>{step.description}</StepDescription>
      </Box>

      <StepSeparator />
    </Step>
  ))}
</Stepper>
    `}),e.jsx(s,{beskrivelse:e.jsxs(e.Fragment,{children:["Nå er stepperne og innholdet i de forskjellige splittet opp, slik at man først lister opp alle stegene i en"," ",e.jsx(t,{children:"StepsList"}),", etterfulgt av ",e.jsx(t,{children:"StepsContent"})," som står for innholdet for hvert steg. Det gjøre på følgende måte:"]}),kildekode:`
<Steps defaultValue={1} count={3}>
  <StepsList>
  <StepsItem index={0} title="Steg 1" />
  <StepsItem index={1} title="Steg 2" />
  <StepsItem index={2} title="Steg 3" />
  </StepsList>

  <StepsContent index={0}>Steg 1</StepsContent>
  <StepsContent index={1}>Steg 2</StepsContent>
  <StepsContent index={2}>Steg 3</StepsContent>
  <StepsCompletedContent>Alle steg er ferdige!</StepsCompletedContent>

  <Group>
  <StepsPrevTrigger asChild>
    <Button variant="outline" size="sm">
      Forrige
    </Button>
  </StepsPrevTrigger>
  <StepsNextTrigger asChild>
    <Button variant="outline" size="sm">
      Neste
    </Button>
  </StepsNextTrigger>
  </Group>
</Steps>
    `})]}),T=()=>e.jsx(i,{tittel:"Table",children:e.jsxs(l,{children:[e.jsxs(n,{tittel:"variant",children:[e.jsx(t,{children:'"striped"'}),"-varianten er byttet byttet ut med den propen ",e.jsx(t,{children:"striped"})," som settes på"," ",e.jsx(t,{children:"Table"}),", slik som dette: ",e.jsx(t,{children:"<Table striped>"}),"."]}),e.jsxs(n,{tittel:"placement",children:[e.jsx(t,{children:"placement"})," i ",e.jsx(t,{children:"TableCaption"})," er tatt bort til fordel for å sette CSS-propen"," ",e.jsx(t,{children:"captionSide"}),"."]}),e.jsxs(n,{tittel:"isNumeric",children:["Omdøpt til ",e.jsx(t,{children:"numeric"}),"."]}),e.jsxs(n,{tittel:"numeric",children:[e.jsx(t,{children:"numeric"})," i ",e.jsx(t,{children:"TableColumnHeader"})," er tatt bort til fordel for å sette CSS-propen"," ",e.jsx(t,{children:"textAlign"}),"."]}),e.jsxs(n,{tittel:"Thead",children:["Omdøpt til ",e.jsx(t,{children:"TableHeader"}),"."]}),e.jsxs(n,{tittel:"Tbody",children:["Omdøpt til ",e.jsx(t,{children:"TableBody"}),"."]}),e.jsxs(n,{tittel:"Tr",children:["Omdøpt til ",e.jsx(t,{children:"TableRow"}),"."]}),e.jsxs(n,{tittel:"Th",children:["Omdøpt til ",e.jsx(t,{children:"TableColumnHeader"}),"."]}),e.jsxs(n,{tittel:"Td",children:["Omdøpt til ",e.jsx(t,{children:"TableCell"}),"."]}),e.jsxs(n,{tittel:"Tfoot",children:["Omdøpt til ",e.jsx(t,{children:"TableFooter"}),"."]}),e.jsxs(n,{tittel:"TableOverflow",children:["Omdøpt til ",e.jsx(t,{children:"TableScrollArea"}),"."]})]})}),C=()=>e.jsxs(i,{tittel:"Toast",children:[e.jsxs(l,{children:[e.jsxs(n,{tittel:"createStandaloneToasts og useToast",children:["Er fjernet til fordel for ",e.jsx(t,{children:"toaster.create"}),"."]}),e.jsxs(n,{tittel:"isClosable",children:["Tidligere har ",e.jsx(t,{children:"isClosable"})," blitt brukt som en prop for å bestemme om toasten skal kunne lukkes. Denne er nå fjernet til fordel for ",e.jsx(t,{children:"action"}),"."]})]}),e.jsx(s,{beskrivelse:"Tidligere har man gjort følgende:",kildekode:`
const toast = useToast()

toast({
  title: "Tittel i toast-komponent",
  description: "Beskrivelse",
  status: "success",
})
      `}),e.jsx(s,{beskrivelse:e.jsxs(e.Fragment,{children:["Man tar i bruk ",e.jsx(t,{children:"Toast"})," ved å importere følgende:"]}),kildekode:`
        import { Toaster, toaster } from "@kvib/react";
      `}),e.jsx(s,{beskrivelse:e.jsxs(e.Fragment,{children:["Nå vil man først rendre ",e.jsx(t,{children:"Toaster"})," i appen slik som dette:"]}),kildekode:`
        <Toaster />
      `}),e.jsx(s,{beskrivelse:e.jsxs(e.Fragment,{children:["Deretter kan man trigge en toast ved å bruke ",e.jsx(t,{children:"toaster.create"})," slik:"]}),kildekode:`
toaster.create({
  title: "Tittel i toast-komponent",
  description: "Beskrivelse",
  type: "success",
})
      `}),e.jsx(s,{beskrivelse:e.jsxs(e.Fragment,{children:["Eksempel med ",e.jsx(t,{children:"action"}),"-knapp:"]}),kildekode:`
toaster.success({
  title: "Tittel i toast-komponent",
  description: "Beskrivelse",
  action: {
    label: "Lukk",
    onClick: () => console.log("Lukket toast"),
  },
})
        `})]}),y=()=>e.jsx(i,{tittel:"Tooltip",children:e.jsx(l,{children:e.jsxs(n,{tittel:"label",children:["Omdøpt til ",e.jsx(t,{children:"content"}),"."]})})}),I=()=>e.jsx(i,{tittel:"Typography",children:e.jsx(l,{children:e.jsxs(n,{tittel:"variant",children:["Finnes ikke lengre på bl.a. ",e.jsx(t,{children:"Heading"}),". Bruk kombinasjonen av ",e.jsx(t,{children:"as"})," og ",e.jsx(t,{children:"size"})," for å sette størrelse, som f.eks. ",e.jsx(t,{children:'<Heading as="h1" size="xl">Overskrift</Heading>'}),"."]})})}),B=["Rating","Select","Password Input","File Upload","Checkbox Card","Segment Control","Nested Menu","Color Swatch","Color Picker","Action Bar","Clipboard","Radio Card","Timeline","Toggle Tip","Collapsible","For","Em","Strong","Quote","Span","Bleed","Blockquote"],A=[{title:"Alert Dialog og Modal",description:e.jsxs(e.Fragment,{children:["Slått sammen til én komponent kalt Dialog. Man gjør en Dialog om til en Alert Dialog ved å sette prop-en"," ",e.jsx(t,{children:'role="alertdialog"'}),"."]})},{title:"Divider",description:e.jsx(e.Fragment,{children:"Kalles nå Separator."})},{title:"Form Control",description:e.jsx(e.Fragment,{children:"Kalles nå Field."})},{title:"Wrap",description:e.jsxs(e.Fragment,{children:["Er fjernet og tilbys nå gjennom HStack med prop-en ",e.jsx(t,{children:"wrap=wrap"}),"."]})},{title:"Select",description:e.jsx(e.Fragment,{children:"Select har blitt Select (Native) til fordel for en helt ny Select med Chakra-styling. Select (Native) trigger fortsatt den interne menyen som varierer fra nettleser til nettleser."})},{title:"Show/Hide",description:e.jsx(e.Fragment,{children:"Kalles nå Show."})},{title:"<X>Button",description:e.jsxs(e.Fragment,{children:["Enkelte komponenter som har hatt en Button som child-komponent, slik som Accordion med AccordionButton, har nå blitt omdøpt til ",e.jsx(t,{children:"<X>Trigger"}),"."]})},{title:"<X>CloseButton",description:e.jsxs(e.Fragment,{children:["Alle forskjellige CloseButton-komponenter, som f.eks. ModalCloseButton, har nå blitt samlet under én komponent som heter CloseButton. For Popover stemmer ikke dette helt, der heter den ",e.jsx(t,{children:"PopoverCloseTrigger"}),"."]})},{title:"<X>Overlay",description:e.jsxs(e.Fragment,{children:["Kalles nå ",e.jsx(t,{children:"<X>Backdrop"}),"."]})},{title:"<X>Panel",description:e.jsxs(e.Fragment,{children:["Kalles nå ",e.jsx(t,{children:"<X>Content"}),"."]})},{title:"<X>Icon",description:e.jsxs(e.Fragment,{children:["Kalles nå ",e.jsx(t,{children:"<X>Indicator"}),"."]})},{title:"<X>Label",description:e.jsxs(e.Fragment,{children:["Kalles noen steder, som f.eks. i ",e.jsx(t,{children:"Progress"}),", nå ",e.jsx(t,{children:"<X>ValueText"}),"."]})},{title:"HelperText",description:e.jsxs(e.Fragment,{children:["Kalles nå ",e.jsx(t,{children:"HelpText"}),"."]})},{title:"OrderedList og UnorderedList",description:e.jsxs(e.Fragment,{children:["Har blitt forenklet til ",e.jsx(t,{children:"List"})," med prop-en ",e.jsx(t,{children:"as"})," for å velge mellom ulike typer lister. Her setter man ",e.jsx(t,{children:'as="ol"'})," for en ordnet liste og ",e.jsx(t,{children:'as="ul"'})," for en uordnet liste."]})},{title:"TagLeftIcon og TagRightIcon",description:e.jsxs(e.Fragment,{children:["Er erstattet med å rendre ikonet direkte inne i ",e.jsx(t,{children:"Tag"}),"-komponenten."]})}],D=[{title:"is<X>",description:e.jsxs(e.Fragment,{children:["Alle Chakra-props som tidligere har blitt kalt noe som starter på ",e.jsx(t,{children:"is<X>"}),", som f.eks."," ",e.jsx(t,{children:"isRequired"}),", vil fra nå kun hete ",e.jsx(t,{children:"<x>"}),", altså ",e.jsx(t,{children:"required"}),". Det samme gjelder ",e.jsx(t,{children:"defaultIsOpen"}),", som nå heter ",e.jsx(t,{children:"defaultOpen"}),"."]})},{title:"colorScheme",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"colorPalette"}),". Man kan også bruke variantene av en fargepalett slik"," ",e.jsx(t,{children:'<Box bg="colorPalette.400">...</Box>'})]})},{title:"spacing",description:e.jsxs(e.Fragment,{children:["Har blitt forenklet slik at alle komponenter bruker ",e.jsx(t,{children:"gap"}),". Tidligere har det vært noen som bruker den ene og noen som bruker den andre, men nå er det kun ",e.jsx(t,{children:"gap"})," som gjelder."]})},{title:"spacingX",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"columnGap"}),"."]})},{title:"spacingY",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"rowGap"}),"."]})},{title:"sx",description:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"sx"})," har nå bli erstattet med ",e.jsx(t,{children:"css"}),"."]})},{title:"status",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"type"}),"."]})},{title:"noOfLines",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"lineClamp"}),"."]})},{title:"truncated",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"truncate"}),"."]})},{title:"allowMultiple",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"multiple"}),"."]})},{title:"allowToggle",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"collapsible"}),"."]})},{title:"initialFocusRef og finalFocusRef",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"initialFocusEl"})," og ",e.jsx(t,{children:"finalFocusEl"}),"."]})},{title:"returnFocusOnClose",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"restoreFocus"}),"."]})},{title:"blockScrollOnMount",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"preventScroll"}),"."]})},{title:"onOpen og onClose",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"onOpenChange"}),"."]})},{title:"isFullHeight",description:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Drawer"})," sin ",e.jsx(t,{children:"isFullHeight"})," prop er fjernet. Bruk ",e.jsx(t,{children:"height=100dvh"})," i stedet."]})},{title:"isRound",description:e.jsxs(e.Fragment,{children:["Komponenter som støttet ",e.jsx(t,{children:"isRound"})," støtter nå ",e.jsx(t,{children:"shape=pill"})," i stedet."]})},{title:"_activeLink",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"_currentPage"}),"."]})},{title:"_activeStep",description:e.jsxs(e.Fragment,{children:["Heter nå ",e.jsx(t,{children:"_currentStep"}),"."]})},{title:"as",description:e.jsxs(e.Fragment,{children:["Der man tidligere har kunne inferere props gjennom ",e.jsx(t,{children:"as"}),", slik som"," ",e.jsx(t,{children:'<Button as={ReactRouterLink} to="..." />'})," for å legge til støtte for andre routing-verktøy i en knapp, må man nå bruke ",e.jsx(t,{children:"asChild"})," på rot-komponenten i stedet. Eksempelet over vil da se slik ut:",e.jsx(c,{code:`
<Button asChild>
  <ReactRouterLink to="..." />
</Button>
          `}),e.jsx("br",{}),"Det samme gjelder for andre komponenter som tidligere har støttet ",e.jsx(t,{children:"as"}),". Her er et eksempel på hvordan man tidligere kunne bruke ",e.jsx(t,{children:"as"})," på en ",e.jsx(t,{children:"BreadcrumbLink"}),"-komponent og hvordan man nå må gjøre det:",e.jsx(s,{beskrivelse:"Før gjorde man sånn her:",kildekode:`
<BreadcrumbLink as={NavLink} to={route.pathname}>
  {route.handle}
</BreadcrumbLink>
          `}),e.jsx(s,{beskrivelse:"Nå:",kildekode:`
<BreadcrumbLink asChild>
  <NavLink to={route.pathname}>
    {route.handle}
  </NavLink>
</BreadcrumbLink>
          `})]})}],M=[{title:"Dot-notasjon for komponentene",description:e.jsxs(e.Fragment,{children:["Man kan nå importere én rot-komponent og få tilgang til alle underkomponentene gjennom dot-notasjon. Dette er standarden i Chakra fra nå, men for å unngå enorme mengder med breaking changes har vi valgt å fortsatt tilby komponentene våre som enkeltstående importer, i tillegg til dot-notasjon. Dette tas i bruk ved å importere"," ",e.jsx(t,{children:"Kvib*"}),"-komponentene, som f.eks. ",e.jsx(t,{children:"KvibAccordion"}),". Dette gir tilgang til underkomponentene gjennom dot-notasjon, som f.eks. ",e.jsx(t,{children:"KvibAccordion.Item"}),"."]})}],H=[{title:"primary",description:e.jsx(e.Fragment,{children:e.jsx(t,{children:"solid"})})},{title:"secondary",description:e.jsx(e.Fragment,{children:e.jsx(t,{children:"outline"})})},{title:"tertiary",description:e.jsx(e.Fragment,{children:e.jsx(t,{children:"ghost"})})},{title:"ghost",description:e.jsx(e.Fragment,{children:e.jsx(t,{children:"plain"})})}],N=()=>e.jsxs(m,{tittel:"Kvib 5",beskrivelse:"Versjon 5 av Kvib bygger på Chakra 3 og har en rekke nyheter med seg. I denne oversikten vil vi fremheve de viktigste endringene og hvordan dette påvirker brukerne av tidligere versjoner av Kvib.",children:[e.jsx(x,{status:"info",size:"lg",children:"Dokumentasjonen vår vil være litt utdatert i en tid fremover etter oppdateringen."}),e.jsx(i,{tittel:"Syntaksendringer",children:e.jsx(l,{children:M.sort((r,o)=>r.title>o.title?1:-1).map(r=>e.jsx(n,{tittel:r.title,children:r.description},r.title))})}),e.jsx(d,{as:"h2",children:"Endringer i komponenter"}),e.jsx(k,{}),e.jsx(u,{}),e.jsxs(i,{tittel:"Alert Dialog",children:["Slått sammen med ",e.jsx(t,{children:"Modal"})," i den nye komponenten ",e.jsx(t,{children:"Dialog"}),", hvor man kan sette propen"," ",e.jsx(t,{children:'role="alertdialog"'})," for å få en Alert Dialog som før."]}),e.jsx(b,{}),e.jsx(f,{}),e.jsx(v,{}),e.jsx(S,{}),e.jsx(F,{}),e.jsx(T,{}),e.jsx(C,{}),e.jsx(y,{}),e.jsx(I,{}),e.jsxs(i,{tittel:"Komponenter med nye navn",children:["Flere av komponentene har fått nye navn. Dette byr på breaking changes for de som oppgraderer fra tidligere versjoner av Kvib.",e.jsx(l,{children:A.sort((r,o)=>r.title>o.title?1:-1).map(r=>e.jsx(n,{tittel:r.title,children:r.description},r.title))}),e.jsx("br",{}),e.jsx(d,{as:"h3",fontWeight:700,fontSize:"md",children:"Props med nye navn"}),e.jsx(l,{children:D.sort((r,o)=>r.title>o.title?1:-1).map(r=>e.jsx(n,{tittel:r.title,children:r.description},r.title))})]}),e.jsx(i,{tittel:"Varianter",children:e.jsx(l,{children:H.map(r=>e.jsx(n,{tittel:r.title,children:r.description},r.title))})}),e.jsx(i,{tittel:"Nye komponenter",children:e.jsx(l,{children:B.sort().map(r=>e.jsx(n,{tittel:r},r))})}),e.jsx(i,{tittel:"Fjernede komponenter, hooks og props",children:e.jsx(l,{children:g.sort((r,o)=>r.title>o.title?1:-1).map(r=>e.jsx(n,{tittel:r.title,children:r.description},r.title))})})]});function a(r){return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Migrere til Kvib 5"}),`
`,e.jsx(N,{})]})}function U(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(a,{...r})}):a()}export{U as default};
