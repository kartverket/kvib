"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[4559],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,ZX:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ZX,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/documentation/changelog.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>changelog});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");const changelog=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Info/Changelog"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"kvib-changelog",children:"KVIB Changelog"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:'# @kvib/react\n\n## 1.10.2\n\n### Patch Changes\n\n- 9dde818c2: Changed Input Export.\n\n## 1.10.1\n\n### Patch Changes\n\n- db3d130a4: Removed Input-Group, Element, Addon from Storybook. Enabled export from Chakra.\n\n## 1.10.0\n\n### Minor Changes\n\n- e56e8e9a9: Enabled InputGroups, InputAddons, InputElements.\n\n## 1.9.0\n\n### Minor Changes\n\n- 0d68e97e9: Added Input, FormControl, NumberInput, PinInput Components.\n\n## 1.8.0\n\n### Minor Changes\n\n- b12dc0244: IconButton og Button komponentene har nå mulighet for å sette ikoner som fylt via propen: **iconFill**.\n\n## 1.7.0\n\n### Minor Changes\n\n- 101242e35: ButtonGroup-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert.Kritiske endringer:\n\n  - **colorScheme** er lagt til med verdier: "green" (default), "blue", "gray", "red".\n\n## 1.6.0\n\n### Minor Changes\n\n- 458e1a81d: Icon-komponent er tilgjengelig. Dokumentasjon er oppdatert.\n\n## 1.5.0\n\n### Minor Changes\n\n- 5ba55d2c8: Bugfix:\n\n  - IconButton: **colorScheme** og **variant** er ikke lenger required prop.\n  - Link: aria-attributes for ikon er oppdatert. **colorScheme** er ikke lenger required prop.\n  - Tabs: importert manglende komponenter; TabList, TabPanels, Tab, TabPanel\n\n## 1.4.0\n\n### Minor Changes\n\n- 0045b6ccf: Videreeksporterer useToastOptions\n\n## 1.3.1\n\n### Patch Changes\n\n- 1368ee9a0: Videresender et par funksjoner fra theme-utils (extendTheme og withDefaultColorScheme)\n\n## 1.3.0\n\n### Minor Changes\n\n- a9fc68200: Oppdaterte dokumentasjon for tab-komponenten\n\n## 1.2.0\n\n### Minor Changes\n\n- 58aefa8ea: Tabs-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert.\n  Kritiske endringer:\n  - **colorScheme** tar verdiene: "green" (default) og "blue".\n\n## 1.1.0\n\n### Minor Changes\n\n- 403c6e020: Link-komponent er nå tilgjengelig med Kartverkets Design. Dokumemtasjon er oppdatert.\n  Kritiske endringer:\n  - **colorScheme** verdier er: "green", "blue".\n\n## 1.0.0\n\n### Major Changes\n\n- bd83d1b41: Designbiblioteket inneholder nå diverse komponenter som alle har Kartverkets farger og font. Komponentene er klare til bruk.\n- IconButton er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert. Kritiske endringer:\n  - **variant** tar verdiene: "solid"(default),"outline", "link", "ghost"\n  - **colorScheme** tar verdiene: "green" (default), "blue", "gray", "red"\n  - **icon**: er av typen String, ikke lenger et element.\n\n## 0.36.0\n\n### Minor Changes\n\n- 7f6bda20d: AbsoluteCenter og StackDivider er tilgjengelig i Designbiblioteket.\n\n- Button-komponent er tilgjengelig med Kartverkets Design. Dokumentasjon er oppdatert.\n  Kritiske endringer:\n  - **colorScheme** tar verdiene: "green" (default), "blue", "gray", "red".\n  - **rightIcon**/ **leftIcon**: er av typen String, ikke lenger et element.\n\n## 0.35.0\n\n### Minor Changes\n\n- 1dc1c1d70: Lilla-fargepalett er nå tilgjengelig.\n\n## 0.34.1\n\n### Patch Changes\n\n- 1ad95109d: Bugfix: Eksportert typografi på riktig måte.\n\n## 0.34.0\n\n### Minor Changes\n\n- 250f0e82d: Eksportert\n\n  - InputGroup\n  - InputAddon\n  - InputLeftAddon\n  - InputRightAddon\n  - InputLeftElement\n  - InputRightElement\n\n## 0.33.0\n\n### Minor Changes\n\n- 5dfa06a47: Tilpasset farge-tokens til kartverketsdesign\n\n## 0.32.0\n\n### Minor Changes\n\n- 88424baa5: Legge til riktig verdi for shadow outline\n\n## 0.31.0\n\n### Minor Changes\n\n- 65d02b192: Fjerne custom KVIB theming fra kvibifiserte komponenter\n\n## 0.30.0\n\n### Minor Changes\n\n- db4e916d0: Revertert kvibifiserte komponenter: Button og Radio (+ Radiogroup)\n\n## 0.29.0\n\n### Minor Changes\n\n- 96eacd306: Eksportert følgende komponenter:\n\n  Disclosure\n\n  - Accordion\n  - Tabs\n  - VisuallyHidden\n\n  Navigation\n\n  - Breadcrumbs\n  - Link\n  - LinkBox\n  - SkipNavLink\n  - Stepper\n\n  Media and icons\n\n  - Avatar\n  - Icon\n  - Image\n\n## 0.28.0\n\n### Minor Changes\n\n- 7ec3f9fea: Eksportert chakra-tokens, med unntak av fonts:\n  -blur\n  -borders\n  -breakpoints-colors\n  raidus\n  -shadows\n  -sizes\n  -spacing\n  -transitions\n  -typography\n  -z-index\n\n## 0.27.0\n\n### Minor Changes\n\n- 191b6d340: Eksportert flere Typografi-komponenter (Highlight) og alle Overlay-komponenter\n\n  - Alert Dialog\n  - Drawer\n  - Menu\n  - Modal\n  - Popover\n  - Tooltip\n\n## 0.26.0\n\n### Minor Changes\n\n- 96e14fee6: Eksportert chakra utility hooks:\n  -useBoolean,\n  -UseBreakpointValue,\n  -useClipboard,\n  -useConst,\n  -useControllable,\n  -useDimensions,\n  -useDisclosure,\n  -useMergeRefs,\n  -useMediaQuery,\n  -useOutsideClick,\n  -usePrefersReducedMotionuseTheme,\n  -useToken\n\n## 0.25.0\n\n### Minor Changes\n\n- d9441ced5: exported chakra components:\n  -Close-Button,\n  -Portal,\n  -Transitions\n  -Hide/show\n\n## 0.24.0\n\n### Minor Changes\n\n- 06648ef2b: Eksportert alle komponenter i hovedindexfilen\n\n## 0.23.0\n\n### Minor Changes\n\n- d808ad6c3: Lagt til feedback-komponenter:\n\n  - Alert\n  - Circular Progress\n  - Progress\n  - Skeleton\n  - Spinner\n  - Toast\n\n## 0.22.0\n\n### Minor Changes\n\n- 5c3b951d0: Eksportert alle data display-komponenter:\n\n  - Badge\n  - Card\n  - Divider\n  - Kbd\n  - List\n  - Stat\n  - Table\n  - Tag\n\n## 0.21.0\n\n### Minor Changes\n\n- 4f0d6db23: - Endret navn på `/foundations`-mappe til `/tokens`\n  - Videreeksportert flere `Layout`-komponenter\n  - Videreeksportert alle `Forms`-komponenter\n\n## 0.20.0\n\n### Minor Changes\n\n- f9f680def: **Heading:**\n  Lagt til title1-4 som mulige verdier for size i Heading-komponenten. Dokumentert Chakra sine 4xl-xl sizes i Storybook.\\\\\n\n  **Text**\n  Text-komponenten tar imot textStyles. Fjernet title1-4 som tekststil. Dokumententert fontSizes 6xl-xs i Storybook.\n\n## 0.19.0\n\n### Minor Changes\n\n- 6ae53e243: La til første versjon av radioknapp. Denne har default chakra-styling med kv farger\n\n## 0.18.0\n\n### Minor Changes\n\n- 01429f371: Lagt til TextLink-komponenten og endret tokenverdi for shadows.outline.\n\n## 0.17.0\n\n### Minor Changes\n\n- 19c018453: Lagt til noen flere tokens for border, radius og shadow.\n\n## 0.16.0\n\n### Minor Changes\n\n- a4ba933ea: Legge tilbake extendTheme og en del chakra-tokens\n\n## 0.15.0\n\n### Minor Changes\n\n- dc33e020b: Legge tilbake chakra line-height og rename KVIB sine.\n\n## 0.14.0\n\n### Minor Changes\n\n- f2f9fceb2: Lagt til layout-komponentene Box, Center, Container, Flex, Grid, Simple Grid, Stack, Wrap og dokumentert disse i Storybook.\n\n## 0.13.1\n\n### Patch Changes\n\n- 190377067: Fikset feil i tekststil responsiv letter-spacing for title1\n\n## 0.13.0\n\n### Minor Changes\n\n- 641f45ac7: Lagt til tokens for borders + dokumentert spacings, sizes, z-index.\n\n## 0.12.0\n\n### Minor Changes\n\n- 4967381be: Lagt til fargen "black" og dokumentert farger i Storybook.\n\n## 0.11.1\n\n### Patch Changes\n\n- 1da963e44: Restrukturert @kvib/react\n\n## 0.11.0\n\n### Minor Changes\n\n- 5262589d8: Lagt til tokens for typografi (font size, font weight, line height, letterspacing), og laget Text og Heading-komponent og dokumentert disse i Storybook.\n\n  Har også prefixet alle tokens (css-variabler) med `kvib` og fjernet `extendTheme` slik at det er kun de tokensa vi definerer som gjelder.\n\n## 0.10.1\n\n### Patch Changes\n\n- c94b224d7: Fjerne `position: relative` fra knappe-komponenten.\n\n## 0.10.0\n\n### Minor Changes\n\n- 3b147bda6: Fikse typo "string" til string for knappen.\n\n## 0.9.0\n\n### Minor Changes\n\n- 2a940b7cb: Omitter propsa for leftIcon og rightIcon samt flere ubrukte props\n\n## 0.8.0\n\n### Minor Changes\n\n- ceff882fb: Lagt til design tokens for breakpoints\n\n## 0.7.1\n\n### Patch Changes\n\n- 7ec16f62c: Småfiks på utseende for knappene.\n\n## 0.7.0\n\n### Minor Changes\n\n- 945ace3b5: Lagt til design tokens for radius og endret tokens for skygger\n\n## 0.6.0\n\n### Minor Changes\n\n- 65d41f00d: Lagt til design tokens for shadows\n\n## 0.5.0\n\n### Minor Changes\n\n- ee9ae4abd: Oppdaterte readme\n\n## 0.4.0\n\n### Minor Changes\n\n- 25e9cb440: Laget knappe-komponent og tatt i bruk Material Symbols ikoner\n\n## 0.3.0\n\n### Minor Changes\n\n- b039200ff: Endret markup og stiling på knappe-komponenten. Lagt til loading state.\n\n## 0.2.0\n\n### Minor Changes\n\n- ced38ed92: Button-komponentens komponenttype er nå overridable. Bruker styling fra css-pakka.\n\n## 0.1.2\n\n### Patch Changes\n\n- 32d56a66c: Endre publish-packages script til å bygge alle pakker under /packages\n\n## 0.1.1\n\n### Patch Changes\n\n- 40fedd7a1: Inkluder dist-mappen i turbobygg\n\n## 0.1.0\n\n### Minor Changes\n\n- 1996bbcce: Første prototype av React-komponenter for KVIB\n'})]})}}}}]);