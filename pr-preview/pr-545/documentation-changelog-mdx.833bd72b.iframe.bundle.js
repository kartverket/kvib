"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[4559],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,ZX:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ZX,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/documentation/changelog.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>changelog});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");const CHANGELOG_namespaceObject='# @kvib/react\n\n## 2.5.5\n\n### Patch Changes\n\n- 8f3dd0d95: Bumpet @fountsource/mulish og @types/react avhengigheter til siste versjon\n\n## 2.5.4\n\n### Patch Changes\n\n- 2329a2f71: Bumping packages patch and minor:\n\n  - @fontsource-variable/mulish from 5.0.8 to 5.0.12\n  - @types/react from 18.0.26 to 18.2.25\n  - @types/react-dom from 18.0.9 to 18.2.10\n  - chakra-react-select from 4.7.2 to 4.7.3\n\n- 1a7fe9433: **Resolving moderate severity:** Bumping postcss from 8.4.28 to 8.4.31\n\n## 2.5.3\n\n### Patch Changes\n\n- 5250e6567: Importerer material-symbols slik at man ikke trenger å gjøre det selv i prosjektet.\n\n## 2.5.2\n\n### Patch Changes\n\n- 5a96c2ae7: Bumping packages major:\n\n  - @testing-library/jest-dom from 5.16.5 to 6.1.3\n  - @testing-library/react from 13.4.0 to 14.0.0\n  - clsx from 1.2.1 to 2.0.0\n  - tsup from 6.6.3 to 7.2.0\n\n- 34cc5ec20: Bump @chakra-ui/react from 2.8.0 to 2.8.1\n- 2522343ea: Bumping packages patch and minor:\n\n  - @types/react from 18.0.26 to 18.2.24.\n  - @types/react-dom from 18.0.9 to 18.2.8\n  - chakra-react-select from 4.7.0 to 4.7.2\n  - framer-motion from 10.5.0 to 10.16.4\n  - material-symbols from 0.5.4 to 0.13.0\n\n## 2.5.1\n\n### Patch Changes\n\n- 381ee4f64: Endret <IconButton/> variant fra "link" til "tertiary". Fikset styling bug.\n- 421da26e6: Fjernet <Text/> komponent i <FormLabel/>, endret struktur i dokumentasjon.\n- d538128e0: Legger til en manglende import som skal løse alle problemer med ikoner i noen prosjekter.\n\n## 2.5.0\n\n### Minor Changes\n\n- d66501ace: Legger til fargepaletter til kart: `import { mapColors, mapColorsRGBA } from "@kvib/react/src/theme/tokens";`.\n\n## 2.4.0\n\n### Minor Changes\n\n- b413753fb: SearchAsync:\n\n  - Oppdateres til å støtte multiselect.\n  - Props har blitt oppdatert og typer forenklet (dobbeltsjekk i prosjektet ditt om det lager problemer):\n    - Alle typer for props er nå inkludert i KVIB.\n    - `isMulti` legges til.\n    - `onChange`: Ny type basert på om `isMulti=true`\n    - `loadOptions` er forenklet\n    - `defaultOptions` støtter nå boolean.\n\n### Patch Changes\n\n- 501a36e6b: Bumped @fontsource/mulish from 4.5.14 to 5.0.8\n\n## 2.3.1\n\n### Patch Changes\n\n- 93836b893: Fikset IconButton kompatibilitet bug med ButtonGroups.\n\n## 2.3.0\n\n### Minor Changes\n\n- c40e50336: Legger til nytt komponent: Header🎉\n\n## 2.2.1\n\n### Patch Changes\n\n- 4bd8a6306: - Lagt til ny prop contactInfoEmailAddress i footer. Default verdi er post@kartverket.no\n\n## 2.2.0\n\n### Minor Changes\n\n- d37350658: - Ny defaultverdi for weight prop på ikon (600 -> 300)\n  - Ikon skalerer med størrelsen på IconButton og Button\n\n## 2.1.1\n\n### Patch Changes\n\n- 331b7421f: Eksporterer MaterialSymbol-typen for ikoner.\n\n## 2.1.0\n\n### Minor Changes\n\n- f105e5be6: - Legger til id i SearchAsync.\n\n  **Breaking changes på SearchAsync:**\n\n  - Endrer type på handleFromChange i SearchAsync. Trenger ikke lenger å importere SingleValue.\n  - Endrer navn på prop "handleFromChange" til "onChange".\n\n## 2.0.0\n\n### Major Changes\n\n- 7c58cd3e8: **Breaking changes på Button og IconButton:**\n\n  - Endrer navn på verdier i proppen "variant" på knapper.\n\n  Solid -> Primary, Outline -> Secondary, Link -> Tertiary, Ghost -> Ghost.\n\n## 1.25.0\n\n### Minor Changes\n\n- ddac6e33b: Oppdatert default størrelse for labelen i Form Control fra lg til md\n\n## 1.24.2\n\n### Patch Changes\n\n- 5b4b1735c: - Legger til typer på Icon.\n  - Fjerner google fonts kall.\n\n## 1.24.1\n\n### Patch Changes\n\n- d45d542e3: Legger til footer i KVIB-pakka.\n\n## 1.24.0\n\n### Minor Changes\n\n- 0142d8f35: Footer-komponent lagt til\n\n## 1.23.1\n\n### Patch Changes\n\n- ed962be03: Fjerner hvit bakgrunn på outlined Button.\n\n## 1.23.0\n\n### Minor Changes\n\n- a0cb57e2e: Legger til logokomponent.\n\n## 1.22.0\n\n### Minor Changes\n\n- c0c58a70b: Legger til SearchAsync-komponent - dette gjør at det er mulig med en dropdown i et søkefelt.\n\n## 1.21.4\n\n### Patch Changes\n\n- 31bc5e7a7: Øker størrelse på ikoner for IconButton\n- 4932a44bb: Fjern forwardRef for PinInput som ikke tar imot ref\n\n## 1.21.3\n\n### Patch Changes\n\n- 05d8140f1: Endret Ikon størrelse i Button. xs og sm 20px, md og lg 24px.\n- 2d0afc623: Samkjører standard fargetema på tvers av komponenter\n- 5880398ff: Legger til manglende className på Icon\n\n## 1.21.2\n\n### Patch Changes\n\n- 851fd8b38: Legger til gap i feilmelding på Form Control.\n\n## 1.21.1\n\n### Patch Changes\n\n- 2ecee595d: Oppdatert komponent eksport fil.\n\n## 1.21.0\n\n### Minor Changes\n\n- 453a2899d: Oppdatert dokumentasjon for FileUpload.\n\n## 1.20.0\n\n### Minor Changes\n\n- c5a75f839: Oppdatert dokumentasjon for Search.\n\n## 1.19.2\n\n### Patch Changes\n\n- 57e033863: Oppdatert FormControl label, errorMessage og hjelpetekst til å kunne bruke både prop og skrive tekst i komponent eks. <FormLabel>Eksempel tekst</FormLabel> | <FormLabel label="Eksempel tekst"/>.\n\n## 1.19.1\n\n### Patch Changes\n\n- 3588e9219: Button med variant="outline" vil ikke lenger endre størrelse ved hover.\n\n## 1.19.0\n\n### Minor Changes\n\n- e6b71f675: Oppdaterer dokumentasjon for List.\n\n## 1.18.0\n\n### Minor Changes\n\n- 976d2829c: Oppdaterer dokumentasjon for Kbd.\n\n## 1.17.0\n\n### Minor Changes\n\n- 1ad5d14ba: Legger til Card og oppdaterer dokumentasjon.\n\n## 1.16.0\n\n### Minor Changes\n\n- c3a333378: Oppdaterer dokumentasjon for Table.\n\n## 1.15.0\n\n### Minor Changes\n\n- 27880d614: Oppdaterer dokumentasjon for Stat.\n\n## 1.14.1\n\n### Patch Changes\n\n- 08d32385d: Rydder opp i button slik at den ikke lenger har en warning om iconFill.\n\n## 1.14.0\n\n### Minor Changes\n\n- 963ffeff8: la til Datepicker som eget komponent i npm-pakken.\n\n## 1.13.0\n\n### Minor Changes\n\n- 01481680c: Oppdaterer dokumentasjon for Divider.\n\n## 1.12.0\n\n### Minor Changes\n\n- 8cedf7a75: Oppdaterer dokumentasjon for Code.\n\n## 1.11.1\n\n### Patch Changes\n\n- 616ddd12b: Oppdaterer Link. Fjerner padding og endrer fra border til outline på :focus.\n\n## 1.11.0\n\n### Minor Changes\n\n- 35f725bdd: Badge er lagt til og dokumentasjon er oppdatert. Kritiske endringer: -**colorScheme** tar verdiene: "green", "blue", "gray" (default), "red".\n\n## 1.10.2\n\n### Patch Changes\n\n- 9dde818c2: Changed Input Export.\n\n## 1.10.1\n\n### Patch Changes\n\n- db3d130a4: Removed Input-Group, Element, Addon from Storybook. Enabled export from Chakra.\n\n## 1.10.0\n\n### Minor Changes\n\n- e56e8e9a9: Enabled InputGroups, InputAddons, InputElements.\n\n## 1.9.0\n\n### Minor Changes\n\n- 0d68e97e9: Added Input, FormControl, NumberInput, PinInput Components.\n\n## 1.8.0\n\n### Minor Changes\n\n- b12dc0244: IconButton og Button komponentene har nå mulighet for å sette ikoner som fylt via propen: **iconFill**.\n\n## 1.7.0\n\n### Minor Changes\n\n- 101242e35: ButtonGroup-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert.Kritiske endringer:\n\n  - **colorScheme** er lagt til med verdier: "green" (default), "blue", "gray", "red".\n\n## 1.6.0\n\n### Minor Changes\n\n- 458e1a81d: Icon-komponent er tilgjengelig. Dokumentasjon er oppdatert.\n\n## 1.5.0\n\n### Minor Changes\n\n- 5ba55d2c8: Bugfix:\n\n  - IconButton: **colorScheme** og **variant** er ikke lenger required prop.\n  - Link: aria-attributes for ikon er oppdatert. **colorScheme** er ikke lenger required prop.\n  - Tabs: importert manglende komponenter; TabList, TabPanels, Tab, TabPanel\n\n## 1.4.0\n\n### Minor Changes\n\n- 0045b6ccf: Videreeksporterer useToastOptions\n\n## 1.3.1\n\n### Patch Changes\n\n- 1368ee9a0: Videresender et par funksjoner fra theme-utils (extendTheme og withDefaultColorScheme)\n\n## 1.3.0\n\n### Minor Changes\n\n- a9fc68200: Oppdaterte dokumentasjon for tab-komponenten\n\n## 1.2.0\n\n### Minor Changes\n\n- 58aefa8ea: Tabs-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert.\n  Kritiske endringer:\n  - **colorScheme** tar verdiene: "green" (default) og "blue".\n\n## 1.1.0\n\n### Minor Changes\n\n- 403c6e020: Link-komponent er nå tilgjengelig med Kartverkets Design. Dokumemtasjon er oppdatert.\n  Kritiske endringer:\n  - **colorScheme** verdier er: "green", "blue".\n\n## 1.0.0\n\n### Major Changes\n\n- bd83d1b41: Designbiblioteket inneholder nå diverse komponenter som alle har Kartverkets farger og font. Komponentene er klare til bruk.\n- IconButton er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert. Kritiske endringer:\n  - **variant** tar verdiene: "solid"(default),"outline", "link", "ghost"\n  - **colorScheme** tar verdiene: "green" (default), "blue", "gray", "red"\n  - **icon**: er av typen String, ikke lenger et element.\n\n## 0.36.0\n\n### Minor Changes\n\n- 7f6bda20d: AbsoluteCenter og StackDivider er tilgjengelig i Designbiblioteket.\n\n- Button-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert.\n  Kritiske endringer:\n  - **colorScheme** tar verdiene: "green" (default), "blue", "gray", "red".\n  - **rightIcon**/ **leftIcon**: er av typen String, ikke lenger et element.\n\n## 0.35.0\n\n### Minor Changes\n\n- 1dc1c1d70: Lilla-fargepalett er nå tilgjengelig.\n\n## 0.34.1\n\n### Patch Changes\n\n- 1ad95109d: Bugfix: Eksportert typografi på riktig måte.\n\n## 0.34.0\n\n### Minor Changes\n\n- 250f0e82d: Eksportert\n\n  - InputGroup\n  - InputAddon\n  - InputLeftAddon\n  - InputRightAddon\n  - InputLeftElement\n  - InputRightElement\n\n## 0.33.0\n\n### Minor Changes\n\n- 5dfa06a47: Tilpasset farge-tokens til kartverketsdesign\n\n## 0.32.0\n\n### Minor Changes\n\n- 88424baa5: Legge til riktig verdi for shadow outline\n\n## 0.31.0\n\n### Minor Changes\n\n- 65d02b192: Fjerne custom KVIB theming fra kvibifiserte komponenter\n\n## 0.30.0\n\n### Minor Changes\n\n- db4e916d0: Revertert kvibifiserte komponenter: Button og Radio (+ Radiogroup)\n\n## 0.29.0\n\n### Minor Changes\n\n- 96eacd306: Eksportert følgende komponenter:\n\n  Disclosure\n\n  - Accordion\n  - Tabs\n  - VisuallyHidden\n\n  Navigation\n\n  - Breadcrumbs\n  - Link\n  - LinkBox\n  - SkipNavLink\n  - Stepper\n\n  Media and icons\n\n  - Avatar\n  - Icon\n  - Image\n\n## 0.28.0\n\n### Minor Changes\n\n- 7ec3f9fea: Eksportert chakra-tokens, med unntak av fonts:\n  -blur\n  -borders\n  -breakpoints-colors\n  raidus\n  -shadows\n  -sizes\n  -spacing\n  -transitions\n  -typography\n  -z-index\n\n## 0.27.0\n\n### Minor Changes\n\n- 191b6d340: Eksportert flere Typografi-komponenter (Highlight) og alle Overlay-komponenter\n\n  - Alert Dialog\n  - Drawer\n  - Menu\n  - Modal\n  - Popover\n  - Tooltip\n\n## 0.26.0\n\n### Minor Changes\n\n- 96e14fee6: Eksportert chakra utility hooks:\n  -useBoolean,\n  -UseBreakpointValue,\n  -useClipboard,\n  -useConst,\n  -useControllable,\n  -useDimensions,\n  -useDisclosure,\n  -useMergeRefs,\n  -useMediaQuery,\n  -useOutsideClick,\n  -usePrefersReducedMotionuseTheme,\n  -useToken\n\n## 0.25.0\n\n### Minor Changes\n\n- d9441ced5: exported chakra components:\n  -Close-Button,\n  -Portal,\n  -Transitions\n  -Hide/show\n\n## 0.24.0\n\n### Minor Changes\n\n- 06648ef2b: Eksportert alle komponenter i hovedindexfilen\n\n## 0.23.0\n\n### Minor Changes\n\n- d808ad6c3: Lagt til feedback-komponenter:\n\n  - Alert\n  - Circular Progress\n  - Progress\n  - Skeleton\n  - Spinner\n  - Toast\n\n## 0.22.0\n\n### Minor Changes\n\n- 5c3b951d0: Eksportert alle data display-komponenter:\n\n  - Badge\n  - Card\n  - Divider\n  - Kbd\n  - List\n  - Stat\n  - Table\n  - Tag\n\n## 0.21.0\n\n### Minor Changes\n\n- 4f0d6db23: - Endret navn på `/foundations`-mappe til `/tokens`\n  - Videreeksportert flere `Layout`-komponenter\n  - Videreeksportert alle `Forms`-komponenter\n\n## 0.20.0\n\n### Minor Changes\n\n- f9f680def: **Heading:**\n  Lagt til title1-4 som mulige verdier for size i Heading-komponenten. Dokumentert Chakra sine 4xl-xl sizes i Storybook.\\\\\n\n  **Text**\n  Text-komponenten tar imot textStyles. Fjernet title1-4 som tekststil. Dokumententert fontSizes 6xl-xs i Storybook.\n\n## 0.19.0\n\n### Minor Changes\n\n- 6ae53e243: La til første versjon av radioknapp. Denne har default chakra-styling med kv farger\n\n## 0.18.0\n\n### Minor Changes\n\n- 01429f371: Lagt til TextLink-komponenten og endret tokenverdi for shadows.outline.\n\n## 0.17.0\n\n### Minor Changes\n\n- 19c018453: Lagt til noen flere tokens for border, radius og shadow.\n\n## 0.16.0\n\n### Minor Changes\n\n- a4ba933ea: Legge tilbake extendTheme og en del chakra-tokens\n\n## 0.15.0\n\n### Minor Changes\n\n- dc33e020b: Legge tilbake chakra line-height og rename KVIB sine.\n\n## 0.14.0\n\n### Minor Changes\n\n- f2f9fceb2: Lagt til layout-komponentene Box, Center, Container, Flex, Grid, Simple Grid, Stack, Wrap og dokumentert disse i Storybook.\n\n## 0.13.1\n\n### Patch Changes\n\n- 190377067: Fikset feil i tekststil responsiv letter-spacing for title1\n\n## 0.13.0\n\n### Minor Changes\n\n- 641f45ac7: Lagt til tokens for borders + dokumentert spacings, sizes, z-index.\n\n## 0.12.0\n\n### Minor Changes\n\n- 4967381be: Lagt til fargen "black" og dokumentert farger i Storybook.\n\n## 0.11.1\n\n### Patch Changes\n\n- 1da963e44: Restrukturert @kvib/react\n\n## 0.11.0\n\n### Minor Changes\n\n- 5262589d8: Lagt til tokens for typografi (font size, font weight, line height, letterspacing), og laget Text og Heading-komponent og dokumentert disse i Storybook.\n\n  Har også prefixet alle tokens (css-variabler) med `kvib` og fjernet `extendTheme` slik at det er kun de tokensa vi definerer som gjelder.\n\n## 0.10.1\n\n### Patch Changes\n\n- c94b224d7: Fjerne `position: relative` fra knappe-komponenten.\n\n## 0.10.0\n\n### Minor Changes\n\n- 3b147bda6: Fikse typo "string" til string for knappen.\n\n## 0.9.0\n\n### Minor Changes\n\n- 2a940b7cb: Omitter propsa for leftIcon og rightIcon samt flere ubrukte props\n\n## 0.8.0\n\n### Minor Changes\n\n- ceff882fb: Lagt til design tokens for breakpoints\n\n## 0.7.1\n\n### Patch Changes\n\n- 7ec16f62c: Småfiks på utseende for knappene.\n\n## 0.7.0\n\n### Minor Changes\n\n- 945ace3b5: Lagt til design tokens for radius og endret tokens for skygger\n\n## 0.6.0\n\n### Minor Changes\n\n- 65d41f00d: Lagt til design tokens for shadows\n\n## 0.5.0\n\n### Minor Changes\n\n- ee9ae4abd: Oppdaterte readme\n\n## 0.4.0\n\n### Minor Changes\n\n- 25e9cb440: Laget knappe-komponent og tatt i bruk Material Symbols ikoner\n\n## 0.3.0\n\n### Minor Changes\n\n- b039200ff: Endret markup og stiling på knappe-komponenten. Lagt til loading state.\n\n## 0.2.0\n\n### Minor Changes\n\n- ced38ed92: Button-komponentens komponenttype er nå overridable. Bruker styling fra css-pakka.\n\n## 0.1.2\n\n### Patch Changes\n\n- 32d56a66c: Endre publish-packages script til å bygge alle pakker under /packages\n\n## 0.1.1\n\n### Patch Changes\n\n- 40fedd7a1: Inkluder dist-mappen i turbobygg\n\n## 0.1.0\n\n### Minor Changes\n\n- 1996bbcce: Første prototype av React-komponenter for KVIB\n';function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Info/Changelog"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"kvib-changelog",children:"KVIB Changelog"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:CHANGELOG_namespaceObject})]})}const changelog=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);