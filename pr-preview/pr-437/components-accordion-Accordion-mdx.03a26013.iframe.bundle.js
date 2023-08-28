"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[3931,6437],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/accordion/Accordion.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Accordion_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/accordion/Accordion.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Accordion_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"accordion",children:"Accordion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Accordion"})," er greit å bruke for å redusere overveldene innhold og scrolling. Det kan hjelpe brukeren med å få oversikt."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Selv om ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Accordion"})," kan være fint for å presentere komplekst innhold, passer det ikke til alt. Ikke gjem kjerneinnhold som brukeren lurer på. Hvis brukerne åpner alle fanene kan det være et tydelig tegn på å la innholdet være åpent. Da reduserer man klikk og det kan være enklere for brukeren å scrolle nedover siden."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Husk, det er mange myter om at brukere “ikke scroller nedover“. Så lenge innholdet oppleves relevant er bruker villig til å scrolle videre - Opplever du at det er mye innhold, se om dere kan gjøre en innholdsjobb i steden for. Når det er sagt, test ut og bruk komponenten til det behovet du ønsker å møte."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Accordion_stories__WEBPACK_IMPORTED_MODULE_2__.Accordion}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Accordion_stories__WEBPACK_IMPORTED_MODULE_2__.Accordion}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props-for-accordionitem",children:"Props for AccordionItem"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Accordion_stories__WEBPACK_IMPORTED_MODULE_2__.AccordionItem}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Accordion_stories__WEBPACK_IMPORTED_MODULE_2__.AccordionItem}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"eksempel-for-allowmultiple",children:"Eksempel for allowMultiple"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Accordion_stories__WEBPACK_IMPORTED_MODULE_2__.AccordionAllowMultiple}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"eksempel-for-reducemotion",children:"Eksempel for reduceMotion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Accordion_stories__WEBPACK_IMPORTED_MODULE_2__.AccordionReduceMotion})]})}}},"./stories/components/accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Accordion:()=>Accordion,AccordionAllowMultiple:()=>AccordionAllowMultiple,AccordionItem:()=>AccordionItem,AccordionReduceMotion:()=>AccordionReduceMotion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/accordion/dist/chunk-3VH7AMBV.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/accordion/dist/chunk-I3JYRBXX.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/accordion/dist/chunk-APVWO53B.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/accordion/dist/chunk-WA4Q3J7T.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Accordion ",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},Accordion={argTypes:{allowMultiple:{description:"If true, multiple items can be expanded at once.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},allowToggle:{description:"If true, expanded items may be collapsed again.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},defaultIndex:{description:"Sets the initial index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},index:{description:"Sets the index for the expanded accordion item.",table:{type:{summary:"string"}},control:"text"},onChange:{description:"Callback for when the accordion expands/collapses.",table:{type:{summary:"function"}},control:"boolean"},reduceMotion:{description:"If true, disables height animation and transition.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}},args:{allowMultiple:!0,allowToggle:!1,onChange:void 0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.Q,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{children:"Tittel 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.H,{children:"Innhold 1"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.Q,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{children:"Tittel 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.H,{children:"Innhold 2"})]})]})},AccordionItem={argTypes:{id:{description:"Unique id for the AccordionItem.",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the AccordionItem will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isFocusable:{description:"If true, the AccordionItem will be focusable.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}},args:{isDisabled:!1,isFocusable:!1},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.Q,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{children:"Klikk meg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.H,{children:"Tekst skrift tekst"})]})})},AccordionAllowMultiple={args:{allowMultiple:!0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.Q,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{children:"Hvordan søker jeg?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.H,{children:['Du kan søke opp en eiendom ved å bruke eiendommens adresse eller matrikkelnummer. Søket starter når du har skrevet inn minst tre tegn. Er du usikker på skrivemåten skriver du så langt du er sikker. For å snevre inn antall treff, kan du fylle ut feltet for "Sted". Et matrikkelnummer består av tall i følgende rekkefølge: kommunenummer, gårdsnummer, bruksnummer, festenummer, seksjonsnummer.'," "]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.Q,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{children:"Kan jeg se informasjon om andre eiendommer enn min egen?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.H,{children:"Ja. Eiendomsdata fra grunnbok og matrikkel er, med få unntak, tilgjengelig for alle. Det vil si at du kan søke på hvilken som helst eiendom, og logge inn for å se en utskrift fra grunnboken. Informasjonen er offentlig tilgjengelig og grunneier eller andre parter blir ikke varslet dersom det blir gjort søk på eiendommen."})]})]})},AccordionReduceMotion={args:{reduceMotion:!0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.Q,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{children:"Overskrift 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.H,{children:"Eksempel 1"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.Q,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{children:"Overskrift 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.H,{children:"Eksempel 2"})]})]})};Accordion.parameters={...Accordion.parameters,docs:{...Accordion.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    allowMultiple: {\n      description: "If true, multiple items can be expanded at once.",\n      table: {\n        type: {\n          summary: "boolean"\n        },\n        defaultValue: {\n          summary: false\n        }\n      },\n      control: "boolean"\n    },\n    allowToggle: {\n      description: "If true, expanded items may be collapsed again.",\n      table: {\n        type: {\n          summary: "boolean"\n        },\n        defaultValue: {\n          summary: false\n        }\n      },\n      control: "boolean"\n    },\n    defaultIndex: {\n      description: "Sets the initial index for the expanded accordion item.",\n      table: {\n        type: {\n          summary: "string"\n        }\n      },\n      control: "text"\n    },\n    index: {\n      description: "Sets the index for the expanded accordion item.",\n      table: {\n        type: {\n          summary: "string"\n        }\n      },\n      control: "text"\n    },\n    onChange: {\n      description: "Callback for when the accordion expands/collapses.",\n      table: {\n        type: {\n          summary: "function"\n        }\n      },\n      control: "boolean"\n    },\n    reduceMotion: {\n      description: "If true, disables height animation and transition.",\n      table: {\n        type: {\n          summary: "boolean"\n        },\n        defaultValue: {\n          summary: false\n        }\n      },\n      control: "boolean"\n    }\n  },\n  args: {\n    allowMultiple: true,\n    allowToggle: false,\n    onChange: undefined\n  },\n  render: args => <KvibAccordion {...args}>\n      <AccItem>\n        <AccordionButton>Tittel 1</AccordionButton>\n        <AccordionPanel>Innhold 1</AccordionPanel>\n      </AccItem>\n      <AccItem>\n        <AccordionButton>Tittel 2</AccordionButton>\n        <AccordionPanel>Innhold 2</AccordionPanel>\n      </AccItem>\n    </KvibAccordion>\n}',...Accordion.parameters?.docs?.source}}},AccordionItem.parameters={...AccordionItem.parameters,docs:{...AccordionItem.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    id: {\n      description: "Unique id for the AccordionItem.",\n      table: {\n        type: {\n          summary: "string"\n        }\n      },\n      control: "text"\n    },\n    isDisabled: {\n      description: "If true, the AccordionItem will be disabled.",\n      table: {\n        type: {\n          summary: "boolean"\n        },\n        defaultValue: {\n          summary: false\n        }\n      },\n      control: "boolean"\n    },\n    isFocusable: {\n      description: "If true, the AccordionItem will be focusable.",\n      table: {\n        type: {\n          summary: "boolean"\n        },\n        defaultValue: {\n          summary: false\n        }\n      },\n      control: "boolean"\n    }\n  },\n  args: {\n    isDisabled: false,\n    isFocusable: false\n  },\n  render: args => <KvibAccordion>\n      <AccItem {...args}>\n        <AccordionButton>Klikk meg</AccordionButton>\n        <AccordionPanel>Tekst skrift tekst</AccordionPanel>\n      </AccItem>\n    </KvibAccordion>\n}',...AccordionItem.parameters?.docs?.source}}},AccordionAllowMultiple.parameters={...AccordionAllowMultiple.parameters,docs:{...AccordionAllowMultiple.parameters?.docs,source:{originalSource:'{\n  args: {\n    allowMultiple: true\n  },\n  render: args => <KvibAccordion {...args}>\n      <AccItem>\n        <AccordionButton>Hvordan søker jeg?</AccordionButton>\n        <AccordionPanel>\n          Du kan søke opp en eiendom ved å bruke eiendommens adresse eller matrikkelnummer. Søket starter når du har\n          skrevet inn minst tre tegn. Er du usikker på skrivemåten skriver du så langt du er sikker. For å snevre inn\n          antall treff, kan du fylle ut feltet for "Sted". Et matrikkelnummer består av tall i følgende rekkefølge:\n          kommunenummer, gårdsnummer, bruksnummer, festenummer, seksjonsnummer.{" "}\n        </AccordionPanel>\n      </AccItem>\n      <AccItem>\n        <AccordionButton>Kan jeg se informasjon om andre eiendommer enn min egen?</AccordionButton>\n        <AccordionPanel>\n          Ja. Eiendomsdata fra grunnbok og matrikkel er, med få unntak, tilgjengelig for alle. Det vil si at du kan søke\n          på hvilken som helst eiendom, og logge inn for å se en utskrift fra grunnboken. Informasjonen er offentlig\n          tilgjengelig og grunneier eller andre parter blir ikke varslet dersom det blir gjort søk på eiendommen.\n        </AccordionPanel>\n      </AccItem>\n    </KvibAccordion>\n}',...AccordionAllowMultiple.parameters?.docs?.source}}},AccordionReduceMotion.parameters={...AccordionReduceMotion.parameters,docs:{...AccordionReduceMotion.parameters?.docs,source:{originalSource:"{\n  args: {\n    reduceMotion: true\n  },\n  render: args => <KvibAccordion {...args}>\n      <AccItem>\n        <AccordionButton>Overskrift 1</AccordionButton>\n        <AccordionPanel>Eksempel 1</AccordionPanel>\n      </AccItem>\n      <AccItem>\n        <AccordionButton>Overskrift 2</AccordionButton>\n        <AccordionPanel>Eksempel 2</AccordionPanel>\n      </AccItem>\n    </KvibAccordion>\n}",...AccordionReduceMotion.parameters?.docs?.source}}};const __namedExportsOrder=["Accordion","AccordionItem","AccordionAllowMultiple","AccordionReduceMotion"]}}]);