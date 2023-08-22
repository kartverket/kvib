# @kvib/react

## 1.22.0

### Minor Changes

- c0c58a70b: Legger til SearchAsync-komponent - dette gjør at det er mulig med en dropdown i et søkefelt.

## 1.21.4

### Patch Changes

- 31bc5e7a7: Øker størrelse på ikoner for IconButton
- 4932a44bb: Fjern forwardRef for PinInput som ikke tar imot ref

## 1.21.3

### Patch Changes

- 05d8140f1: Endret Ikon størrelse i Button. xs og sm 20px, md og lg 24px.
- 2d0afc623: Samkjører standard fargetema på tvers av komponenter
- 5880398ff: Legger til manglende className på Icon

## 1.21.2

### Patch Changes

- 851fd8b38: Legger til gap i feilmelding på Form Control.

## 1.21.1

### Patch Changes

- 2ecee595d: Oppdatert komponent eksport fil.

## 1.21.0

### Minor Changes

- 453a2899d: Oppdatert dokumentasjon for FileUpload.

## 1.20.0

### Minor Changes

- c5a75f839: Oppdatert dokumentasjon for Search.

## 1.19.2

### Patch Changes

- 57e033863: Oppdatert FormControl label, errorMessage og hjelpetekst til å kunne bruke både prop og skrive tekst i komponent eks. <FormLabel>Eksempel tekst</FormLabel> | <FormLabel label="Eksempel tekst"/>.

## 1.19.1

### Patch Changes

- 3588e9219: Button med variant="outline" vil ikke lenger endre størrelse ved hover.

## 1.19.0

### Minor Changes

- e6b71f675: Oppdaterer dokumentasjon for List.

## 1.18.0

### Minor Changes

- 976d2829c: Oppdaterer dokumentasjon for Kbd.

## 1.17.0

### Minor Changes

- 1ad5d14ba: Legger til Card og oppdaterer dokumentasjon.

## 1.16.0

### Minor Changes

- c3a333378: Oppdaterer dokumentasjon for Table.

## 1.15.0

### Minor Changes

- 27880d614: Oppdaterer dokumentasjon for Stat.

## 1.14.1

### Patch Changes

- 08d32385d: Rydder opp i button slik at den ikke lenger har en warning om iconFill.

## 1.14.0

### Minor Changes

- 963ffeff8: la til Datepicker som eget komponent i npm-pakken.

## 1.13.0

### Minor Changes

- 01481680c: Oppdaterer dokumentasjon for Divider.

## 1.12.0

### Minor Changes

- 8cedf7a75: Oppdaterer dokumentasjon for Code.

## 1.11.1

### Patch Changes

- 616ddd12b: Oppdaterer Link. Fjerner padding og endrer fra border til outline på :focus.

## 1.11.0

### Minor Changes

- 35f725bdd: Badge er lagt til og dokumentasjon er oppdatert. Kritiske endringer: -**colorScheme** tar verdiene: "green", "blue", "gray" (default), "red".

## 1.10.2

### Patch Changes

- 9dde818c2: Changed Input Export.

## 1.10.1

### Patch Changes

- db3d130a4: Removed Input-Group, Element, Addon from Storybook. Enabled export from Chakra.

## 1.10.0

### Minor Changes

- e56e8e9a9: Enabled InputGroups, InputAddons, InputElements.

## 1.9.0

### Minor Changes

- 0d68e97e9: Added Input, FormControl, NumberInput, PinInput Components.

## 1.8.0

### Minor Changes

- b12dc0244: IconButton og Button komponentene har nå mulighet for å sette ikoner som fylt via propen: **iconFill**.

## 1.7.0

### Minor Changes

- 101242e35: ButtonGroup-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert.Kritiske endringer:

  - **colorScheme** er lagt til med verdier: "green" (default), "blue", "gray", "red".

## 1.6.0

### Minor Changes

- 458e1a81d: Icon-komponent er tilgjengelig. Dokumentasjon er oppdatert.

## 1.5.0

### Minor Changes

- 5ba55d2c8: Bugfix:

  - IconButton: **colorScheme** og **variant** er ikke lenger required prop.
  - Link: aria-attributes for ikon er oppdatert. **colorScheme** er ikke lenger required prop.
  - Tabs: importert manglende komponenter; TabList, TabPanels, Tab, TabPanel

## 1.4.0

### Minor Changes

- 0045b6ccf: Videreeksporterer useToastOptions

## 1.3.1

### Patch Changes

- 1368ee9a0: Videresender et par funksjoner fra theme-utils (extendTheme og withDefaultColorScheme)

## 1.3.0

### Minor Changes

- a9fc68200: Oppdaterte dokumentasjon for tab-komponenten

## 1.2.0

### Minor Changes

- 58aefa8ea: Tabs-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert.
  Kritiske endringer:
  - **colorScheme** tar verdiene: "green" (default) og "blue".

## 1.1.0

### Minor Changes

- 403c6e020: Link-komponent er nå tilgjengelig med Kartverkets Design. Dokumemtasjon er oppdatert.
  Kritiske endringer:
  - **colorScheme** verdier er: "green", "blue".

## 1.0.0

### Major Changes

- bd83d1b41: Designbiblioteket inneholder nå diverse komponenter som alle har Kartverkets farger og font. Komponentene er klare til bruk.
- IconButton er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert. Kritiske endringer:
  - **variant** tar verdiene: "solid"(default),"outline", "link", "ghost"
  - **colorScheme** tar verdiene: "green" (default), "blue", "gray", "red"
  - **icon**: er av typen String, ikke lenger et element.

## 0.36.0

### Minor Changes

- 7f6bda20d: AbsoluteCenter og StackDivider er tilgjengelig i Designbiblioteket.

- Button-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert.
  Kritiske endringer:
  - **colorScheme** tar verdiene: "green" (default), "blue", "gray", "red".
  - **rightIcon**/ **leftIcon**: er av typen String, ikke lenger et element.

## 0.35.0

### Minor Changes

- 1dc1c1d70: Lilla-fargepalett er nå tilgjengelig.

## 0.34.1

### Patch Changes

- 1ad95109d: Bugfix: Eksportert typografi på riktig måte.

## 0.34.0

### Minor Changes

- 250f0e82d: Eksportert

  - InputGroup
  - InputAddon
  - InputLeftAddon
  - InputRightAddon
  - InputLeftElement
  - InputRightElement

## 0.33.0

### Minor Changes

- 5dfa06a47: Tilpasset farge-tokens til kartverketsdesign

## 0.32.0

### Minor Changes

- 88424baa5: Legge til riktig verdi for shadow outline

## 0.31.0

### Minor Changes

- 65d02b192: Fjerne custom KVIB theming fra kvibifiserte komponenter

## 0.30.0

### Minor Changes

- db4e916d0: Revertert kvibifiserte komponenter: Button og Radio (+ Radiogroup)

## 0.29.0

### Minor Changes

- 96eacd306: Eksportert følgende komponenter:

  Disclosure

  - Accordion
  - Tabs
  - VisuallyHidden

  Navigation

  - Breadcrumbs
  - Link
  - LinkBox
  - SkipNavLink
  - Stepper

  Media and icons

  - Avatar
  - Icon
  - Image

## 0.28.0

### Minor Changes

- 7ec3f9fea: Eksportert chakra-tokens, med unntak av fonts:
  -blur
  -borders
  -breakpoints-colors
  raidus
  -shadows
  -sizes
  -spacing
  -transitions
  -typography
  -z-index

## 0.27.0

### Minor Changes

- 191b6d340: Eksportert flere Typografi-komponenter (Highlight) og alle Overlay-komponenter

  - Alert Dialog
  - Drawer
  - Menu
  - Modal
  - Popover
  - Tooltip

## 0.26.0

### Minor Changes

- 96e14fee6: Eksportert chakra utility hooks:
  -useBoolean,
  -UseBreakpointValue,
  -useClipboard,
  -useConst,
  -useControllable,
  -useDimensions,
  -useDisclosure,
  -useMergeRefs,
  -useMediaQuery,
  -useOutsideClick,
  -usePrefersReducedMotionuseTheme,
  -useToken

## 0.25.0

### Minor Changes

- d9441ced5: exported chakra components:
  -Close-Button,
  -Portal,
  -Transitions
  -Hide/show

## 0.24.0

### Minor Changes

- 06648ef2b: Eksportert alle komponenter i hovedindexfilen

## 0.23.0

### Minor Changes

- d808ad6c3: Lagt til feedback-komponenter:

  - Alert
  - Circular Progress
  - Progress
  - Skeleton
  - Spinner
  - Toast

## 0.22.0

### Minor Changes

- 5c3b951d0: Eksportert alle data display-komponenter:

  - Badge
  - Card
  - Divider
  - Kbd
  - List
  - Stat
  - Table
  - Tag

## 0.21.0

### Minor Changes

- 4f0d6db23: - Endret navn på `/foundations`-mappe til `/tokens`
  - Videreeksportert flere `Layout`-komponenter
  - Videreeksportert alle `Forms`-komponenter

## 0.20.0

### Minor Changes

- f9f680def: **Heading:**
  Lagt til title1-4 som mulige verdier for size i Heading-komponenten. Dokumentert Chakra sine 4xl-xl sizes i Storybook.\\

  **Text**
  Text-komponenten tar imot textStyles. Fjernet title1-4 som tekststil. Dokumententert fontSizes 6xl-xs i Storybook.

## 0.19.0

### Minor Changes

- 6ae53e243: La til første versjon av radioknapp. Denne har default chakra-styling med kv farger

## 0.18.0

### Minor Changes

- 01429f371: Lagt til TextLink-komponenten og endret tokenverdi for shadows.outline.

## 0.17.0

### Minor Changes

- 19c018453: Lagt til noen flere tokens for border, radius og shadow.

## 0.16.0

### Minor Changes

- a4ba933ea: Legge tilbake extendTheme og en del chakra-tokens

## 0.15.0

### Minor Changes

- dc33e020b: Legge tilbake chakra line-height og rename KVIB sine.

## 0.14.0

### Minor Changes

- f2f9fceb2: Lagt til layout-komponentene Box, Center, Container, Flex, Grid, Simple Grid, Stack, Wrap og dokumentert disse i Storybook.

## 0.13.1

### Patch Changes

- 190377067: Fikset feil i tekststil responsiv letter-spacing for title1

## 0.13.0

### Minor Changes

- 641f45ac7: Lagt til tokens for borders + dokumentert spacings, sizes, z-index.

## 0.12.0

### Minor Changes

- 4967381be: Lagt til fargen "black" og dokumentert farger i Storybook.

## 0.11.1

### Patch Changes

- 1da963e44: Restrukturert @kvib/react

## 0.11.0

### Minor Changes

- 5262589d8: Lagt til tokens for typografi (font size, font weight, line height, letterspacing), og laget Text og Heading-komponent og dokumentert disse i Storybook.

  Har også prefixet alle tokens (css-variabler) med `kvib` og fjernet `extendTheme` slik at det er kun de tokensa vi definerer som gjelder.

## 0.10.1

### Patch Changes

- c94b224d7: Fjerne `position: relative` fra knappe-komponenten.

## 0.10.0

### Minor Changes

- 3b147bda6: Fikse typo "string" til string for knappen.

## 0.9.0

### Minor Changes

- 2a940b7cb: Omitter propsa for leftIcon og rightIcon samt flere ubrukte props

## 0.8.0

### Minor Changes

- ceff882fb: Lagt til design tokens for breakpoints

## 0.7.1

### Patch Changes

- 7ec16f62c: Småfiks på utseende for knappene.

## 0.7.0

### Minor Changes

- 945ace3b5: Lagt til design tokens for radius og endret tokens for skygger

## 0.6.0

### Minor Changes

- 65d41f00d: Lagt til design tokens for shadows

## 0.5.0

### Minor Changes

- ee9ae4abd: Oppdaterte readme

## 0.4.0

### Minor Changes

- 25e9cb440: Laget knappe-komponent og tatt i bruk Material Symbols ikoner

## 0.3.0

### Minor Changes

- b039200ff: Endret markup og stiling på knappe-komponenten. Lagt til loading state.

## 0.2.0

### Minor Changes

- ced38ed92: Button-komponentens komponenttype er nå overridable. Bruker styling fra css-pakka.

## 0.1.2

### Patch Changes

- 32d56a66c: Endre publish-packages script til å bygge alle pakker under /packages

## 0.1.1

### Patch Changes

- 40fedd7a1: Inkluder dist-mappen i turbobygg

## 0.1.0

### Minor Changes

- 1996bbcce: Første prototype av React-komponenter for KVIB
