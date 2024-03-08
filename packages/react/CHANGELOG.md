# @kvib/react

## 3.5.6

### Patch Changes

- 0ab5cef: TEST! Changed Slack Workflow, updated turbo.

## 3.5.5

### Patch Changes

- 20caf33: Workflow Test, Opprettet theme fil for FileUpload.

## 3.5.4

### Patch Changes

- 4f31802: Justert Hover og Invalid theme farger på Radio og Checkbox komponent.

## 3.5.3

### Patch Changes

- 942e0e6: Oppdatert @types/react til 18.2.58, @react-stately/datepicker til 3.9.2, material-symbols til 0.15.0, react-aria til 3.32.1 og react-stately til 3.30.1
- 1fcef91: Changed default theme for Timepicker component, background bugfix.

## 3.5.2

### Patch Changes

- d1b84dc: Oppdatert @types/react til 18.2.55, @types/react-dom til 18.2.19, @tsup til 8.0.2 ig @material-symbols til 0.14.7

## 3.5.1

### Patch Changes

- fd97efe: Bump date-fns to 3.31 and material-symbols to 0.14.6

## 3.5.0

### Minor Changes

- 7b894c3: Breadcrumbs har nå samme styling som lenker, med grønn eller blå styling farge avhengig av valgt theme.

### Patch Changes

- 43d234f: Oppdatert @types/react til 18.2.48 og date-fns til 3.3.0

## 3.4.2

### Patch Changes

- 59ed3e7: Oppdaterer date-fns til 3.2.0, material-sumbols til 0.14.5, react-aria til 3.31.1 og react-stately til 3.29.1

## 3.4.1

### Patch Changes

- 42672ed: Lagt til prop for personvernerklæring i footer-inline
- 178bf2a: Oppdaterer @types/react til v 18.2.47, data-fns til v 3.1.0 og material-symbols til v 0.14.4
- 8ce5869: Oppdatert date-fns til versjon 3.0.6

## 3.4.0

### Minor Changes

- a5cade9: La til mulighet for alle størrelser på ikoner

### Patch Changes

- fb8f5ca: Timepicker får nå riktig farge ved bruke av blått fargetema i KVIB-provider.
- 64cb7e1: Oppdatert @babel/core, @babel/preset-env, @types/react og chromatic.

## 3.3.0

### Minor Changes

- 34c28cb: Endrer typesignaturen til onChange på datePicker til å være standard onChange for input.

### Patch Changes

- 156780f: Bumping packages patch and minor:

  - @types/react from 18.2.41 to 18.2.45
  - @types/react-dom from 18.2.17 to 18.2.18
  - @react-stately/datepicker from 3.9.0 to 3.9.1
  - typescript from 5.3.2 to 5.3.3
  - @fontsource/mulish from 5.0.15 to 5.0.16
  - material-symbols from 0.14.1 to 0.14.3
  - react-aria from 3.30.0 to 3.31.0
  - react-stately from 3.28.0 to 3.29.0

- b0aab6f: Removed type search, added role search.
- bbb46c7: Changed invalid checkbox backgroundColor to red.

## 3.2.0

### Minor Changes

- 6515b4c: Legger til Timepicker.

### Patch Changes

- 0b341a4: Legger til autofill av props i Datepicker.

## 3.1.0

### Minor Changes

- dd3ce42: Forbedrer datepicker:

  - Fikser opp i oppførsel med og uten form (isDisabled, isRequired, isInvalid).
  - Lukker Datepicker etter valgt dato.
  - Legger til colorscheme + bedre fargevalg.

### Patch Changes

- f806798: Bumping @types/react from 18.2.38 to 18.2.41

## 3.0.0

### Major Changes

- a09ac7feb: Legger til støtte for å legge til tekst på søkeknappen i Search. Bruk `buttonText`.

  Breaking changes:

  - Fjerner `leftSearchButton` og `rightSearchButton` til fordel for å legge til ny prop.
  - Legger til ny prop `searchButton?: "left" | "right" | "none";`

### Patch Changes

- cb60b4369: Bumping packages patch and minor:

  - esbuild from 0.19.6 to 0.19.8
  - @types/react from 18.2.37 to 18.2.38
  - @types/react-dom from 18.2.15 to 18.2.17
  - tsup from 8.0.0 to 8.0.1
  - typescript from 5.0.2 to 5.3.2

## 2.6.7

### Patch Changes

- d5127a8a1: Bumping tsup from 7.2.0 to 8.0.0
- d5127a8a1: Bumping material-symbols from 0.14.0 to 0.14.1.

## 2.6.6

### Patch Changes

- 21691c4c9: Search: Legger til muligheten for å velge variant på søkeknapp.

## 2.6.5

### Patch Changes

- 85a15c2cd: Fikser import bug i Datepicker.

## 2.6.4

### Patch Changes

- e013f34f8: SearchAsync - Legger til to nye props: isDisabled og focusBorderColor.
- c325a9326: Bumping packages patch and minor:

  - @types/react from 18.2.36 to 18.2.37
  - @types/react-dom from 18.2.14 to 18.2.15
  - @chakra-ui/react from 2.8.1 to 2.8.2
  - material-symbols from 0.13.2 to 0.14.0

## 2.6.3

### Patch Changes

- bbe7e0cc9: Bumping @types/react from 18.2.33 to 18.2.36
- d913e50cd: Fikser bug hvor secondary Button endret størrelse på "focus".

## 2.6.2

### Patch Changes

- 66849b68d: Datepicker: Endrer onChange til å returnere Date på både desktop og mobil (native).

## 2.6.1

### Patch Changes

- b0581f12c: SearchAsync: Legger til noOptionsMessage-prop.
- 4fe2942fc: Bumping packages patch and minor:

  - @types/react from 18.2.31 to 18.2.33
  - chakra-react-select from 4.7.5 to 4.7.6
  - material-symbols from 0.13.1 to 0.13.2

## 2.6.0

### Minor Changes

- 8ffcc7faa: Legger til ikoner i Search.
- 690def8f5: Nytt komponent: FooterInline - Footer til bunnen av en nettside som ikke skal ta hele bredden.
- e8b7660a9: Ny versjon av datepicker.

### Patch Changes

- a0361e91f: Oppdatert @types/react, @types/react-dom og @fontsource/mulish
- 6cfa0c41e: Bumping packages patch and minor:

  - Chakra-react-select from 4.7.4 to 4.7.5.
  - material-symbols from 0.13.0 to 0.13.1
  - @types/react from 18.2.30 to 18.2.31
  - @fontsource/mulish from 5.0.14 to 5.0.15

## 2.5.6

### Patch Changes

- c195cadec: Bumping packages patch and minor:

  - @types/react from 18.2.25 to 18.2.28.
  - @types/react-dom from 18.2.11 to 18.2.13.
  - chakra-react-select from 4.7.3 to 4.7.4.

## 2.5.5

### Patch Changes

- 8f3dd0d95: Bumpet @fountsource/mulish og @types/react avhengigheter til siste versjon

## 2.5.4

### Patch Changes

- 2329a2f71: Bumping packages patch and minor:

  - @fontsource-variable/mulish from 5.0.8 to 5.0.12
  - @types/react from 18.0.26 to 18.2.25
  - @types/react-dom from 18.0.9 to 18.2.10
  - chakra-react-select from 4.7.2 to 4.7.3

- 1a7fe9433: **Resolving moderate severity:** Bumping postcss from 8.4.28 to 8.4.31

## 2.5.3

### Patch Changes

- 5250e6567: Importerer material-symbols slik at man ikke trenger å gjøre det selv i prosjektet.

## 2.5.2

### Patch Changes

- 5a96c2ae7: Bumping packages major:

  - @testing-library/jest-dom from 5.16.5 to 6.1.3
  - @testing-library/react from 13.4.0 to 14.0.0
  - clsx from 1.2.1 to 2.0.0
  - tsup from 6.6.3 to 7.2.0

- 34cc5ec20: Bump @chakra-ui/react from 2.8.0 to 2.8.1
- 2522343ea: Bumping packages patch and minor:

  - @types/react from 18.0.26 to 18.2.24.
  - @types/react-dom from 18.0.9 to 18.2.8
  - chakra-react-select from 4.7.0 to 4.7.2
  - framer-motion from 10.5.0 to 10.16.4
  - material-symbols from 0.5.4 to 0.13.0

## 2.5.1

### Patch Changes

- 381ee4f64: Endret <IconButton/> variant fra "link" til "tertiary". Fikset styling bug.
- 421da26e6: Fjernet <Text/> komponent i <FormLabel/>, endret struktur i dokumentasjon.
- d538128e0: Legger til en manglende import som skal løse alle problemer med ikoner i noen prosjekter.

## 2.5.0

### Minor Changes

- d66501ace: Legger til fargepaletter til kart: `import { mapColors, mapColorsRGBA } from "@kvib/react/src/theme/tokens";`.

## 2.4.0

### Minor Changes

- b413753fb: SearchAsync:

  - Oppdateres til å støtte multiselect.
  - Props har blitt oppdatert og typer forenklet (dobbeltsjekk i prosjektet ditt om det lager problemer):
    - Alle typer for props er nå inkludert i KVIB.
    - `isMulti` legges til.
    - `onChange`: Ny type basert på om `isMulti=true`
    - `loadOptions` er forenklet
    - `defaultOptions` støtter nå boolean.

### Patch Changes

- 501a36e6b: Bumped @fontsource/mulish from 4.5.14 to 5.0.8

## 2.3.1

### Patch Changes

- 93836b893: Fikset IconButton kompatibilitet bug med ButtonGroups.

## 2.3.0

### Minor Changes

- c40e50336: Legger til nytt komponent: Header🎉

## 2.2.1

### Patch Changes

- 4bd8a6306: - Lagt til ny prop contactInfoEmailAddress i footer. Default verdi er post@kartverket.no

## 2.2.0

### Minor Changes

- d37350658: - Ny defaultverdi for weight prop på ikon (600 -> 300)
  - Ikon skalerer med størrelsen på IconButton og Button

## 2.1.1

### Patch Changes

- 331b7421f: Eksporterer MaterialSymbol-typen for ikoner.

## 2.1.0

### Minor Changes

- f105e5be6: - Legger til id i SearchAsync.

  **Breaking changes på SearchAsync:**

  - Endrer type på handleFromChange i SearchAsync. Trenger ikke lenger å importere SingleValue.
  - Endrer navn på prop "handleFromChange" til "onChange".

## 2.0.0

### Major Changes

- 7c58cd3e8: **Breaking changes på Button og IconButton:**

  - Endrer navn på verdier i proppen "variant" på knapper.

  Solid -> Primary, Outline -> Secondary, Link -> Tertiary, Ghost -> Ghost.

## 1.25.0

### Minor Changes

- ddac6e33b: Oppdatert default størrelse for labelen i Form Control fra lg til md

## 1.24.2

### Patch Changes

- 5b4b1735c: - Legger til typer på Icon.
  - Fjerner google fonts kall.

## 1.24.1

### Patch Changes

- d45d542e3: Legger til footer i KVIB-pakka.

## 1.24.0

### Minor Changes

- 0142d8f35: Footer-komponent lagt til

## 1.23.1

### Patch Changes

- ed962be03: Fjerner hvit bakgrunn på outlined Button.

## 1.23.0

### Minor Changes

- a0cb57e2e: Legger til logokomponent.

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
