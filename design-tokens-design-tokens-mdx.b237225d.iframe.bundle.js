"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[266],{"../../node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Center});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Center=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Center.displayName="Center";var centerStyles={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function AbsoluteCenter2(props,ref){const{axis="both",...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m.div,{ref,__css:centerStyles[axis],...rest,position:"absolute"})}))},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/design-tokens/design-tokens.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>design_tokens});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),Box=(0,chunk_3LE6AY5Q.m)("div");Box.displayName="Box";var Square=(0,chunk_QEVFQ4EU.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,jsx_runtime.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square",(0,chunk_QEVFQ4EU.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,jsx_runtime.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})})).displayName="Circle";var shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),TableContainer=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{var _a;const{overflow,overflowX,className,...rest}=props;return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,className:(0,shared_utils_dist.cx)("chakra-table__container",className),...rest,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(_a=null!=overflow?overflow:overflowX)?_a:"auto",overflowY:"hidden",maxWidth:"100%"}})})),chunk_T2VHL7RE=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),react_context_dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),[TableStylesProvider,useTableStyles]=(0,react_context_dist.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),Table=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=(0,chunk_T2VHL7RE.jC)("Table",props),{className,layout,...tableProps}=(0,styled_system_dist.Lr)(props);return(0,jsx_runtime.jsx)(TableStylesProvider,{value:styles,children:(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.table,{ref,__css:{tableLayout:layout,...styles.table},className:(0,shared_utils_dist.cx)("chakra-table",className),...tableProps})})}));Table.displayName="Table";var Thead=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.thead,{...props,ref,__css:styles.thead})})),Tr=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.tr,{...props,ref,__css:styles.tr})})),Th=(0,chunk_QEVFQ4EU.G)((({isNumeric,...rest},ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.th,{...rest,ref,__css:styles.th,"data-is-numeric":isNumeric})})),Tbody=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.tbody,{...props,ref,__css:styles.tbody})})),Td=(0,chunk_QEVFQ4EU.G)((({isNumeric,...rest},ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.td,{...rest,ref,__css:styles.td,"data-is-numeric":isNumeric})})),chunk_3V5HNFOM=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs"),Code=(0,chunk_QEVFQ4EU.G)((function Code2(props,ref){const styles=(0,chunk_T2VHL7RE.mq)("Code",props),{className,...rest}=(0,styled_system_dist.Lr)(props);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.code,{ref,className:(0,shared_utils_dist.cx)("chakra-code",props.className),...rest,__css:{display:"inline-block",...styles}})}));Code.displayName="Code";var radii=__webpack_require__("../../packages/react/src/theme/foundations/radii.ts");const example=radii=>(0,jsx_runtime.jsx)(Box,{border:"1px solid black",backgroundColor:"white",width:"80px",height:"80px",borderRadius:radii});example.displayName="example";const Radii=()=>(0,jsx_runtime.jsx)(TableContainer,{children:(0,jsx_runtime.jsxs)(Table,{variant:"simple",width:"100%",children:[(0,jsx_runtime.jsx)(Thead,{textAlign:"left",children:(0,jsx_runtime.jsxs)(Tr,{children:[(0,jsx_runtime.jsx)(Th,{width:"20%",children:"Eksempel"}),(0,jsx_runtime.jsx)(Th,{width:"50%",children:"Verdi"}),(0,jsx_runtime.jsx)(Th,{width:"30%",children:"Kode"})]})}),(0,jsx_runtime.jsx)(Tbody,{children:Object.entries(radii.p).map((([size,value])=>(0,jsx_runtime.jsxs)(Tr,{children:[(0,jsx_runtime.jsx)(Td,{backgroundColor:"white",children:(0,jsx_runtime.jsx)(chunk_3V5HNFOM.M,{children:example(value)})}),(0,jsx_runtime.jsx)(Td,{backgroundColor:"white",children:`${size} / ${value}`}),(0,jsx_runtime.jsx)(Td,{backgroundColor:"white",children:(0,jsx_runtime.jsx)(Code,{children:`var(--kvib-radii-${size})`})})]},size)))})]})});Radii.displayName="Radii";var shadows=__webpack_require__("../../packages/react/src/theme/foundations/shadows.ts");const Shadows_example=shadow=>(0,jsx_runtime.jsx)(Box,{backgroundColor:"white",width:"80px",height:"80px",boxShadow:shadow,borderRadius:"4px"});Shadows_example.displayName="example";const Shadows=()=>(0,jsx_runtime.jsx)(TableContainer,{children:(0,jsx_runtime.jsxs)(Table,{variant:"simple",width:"100%",children:[(0,jsx_runtime.jsx)(Thead,{textAlign:"left",children:(0,jsx_runtime.jsxs)(Tr,{children:[(0,jsx_runtime.jsx)(Th,{width:"20%",children:"Eksempel"}),(0,jsx_runtime.jsx)(Th,{width:"50%",children:"Verdi"}),(0,jsx_runtime.jsx)(Th,{width:"30%",children:"Kode"})]})}),(0,jsx_runtime.jsx)(Tbody,{children:Object.entries(shadows.q).map((([size,value])=>(0,jsx_runtime.jsxs)(Tr,{children:[(0,jsx_runtime.jsx)(Td,{backgroundColor:"#F7FAFC",children:(0,jsx_runtime.jsx)(chunk_3V5HNFOM.M,{children:Shadows_example(value)})}),(0,jsx_runtime.jsx)(Td,{backgroundColor:"white",children:`${size} / ${value}`}),(0,jsx_runtime.jsx)(Td,{backgroundColor:"white",children:(0,jsx_runtime.jsx)(Code,{children:`var(--kvib-shadows-${size})`})})]},size)))})]})});Shadows.displayName="Shadows";const design_tokens=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",strong:"strong",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Design tokens"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"design-tokens",children:"Design tokens"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Nedenfor finner du en oversikt over alle KVIBs design tokens."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"skygger",children:"Skygger"}),"\n",(0,jsx_runtime.jsx)(Shadows,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"radius",children:"Radius"}),"\n",(0,jsx_runtime.jsx)(Radii,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"ikoner",children:"Ikoner"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"KVIB bruker ikoner fra Material Symbols."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Oversikt over alle ikoner finner du her ",(0,jsx_runtime.jsx)(_components.a,{href:"https://fonts.google.com/icons",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://fonts.google.com/icons"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Material Symbols er lagt til KVIB som avhengig, så det er ikke behov å laste det ned separat."})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"eksempler-på-bruk",children:"Eksempler på bruk"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<span class="material-symbols-outlined">search</span>\n<span class="material-symbols-outlined">home</span>\n<span class="material-symbols-outlined">settings</span>\n<span class="material-symbols-outlined">favorite</span>\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Dersom komponenten har støtte for ikon (for eksempel: ",(0,jsx_runtime.jsx)(_components.code,{children:"icon"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"leftIcon"})," eller ",(0,jsx_runtime.jsx)(_components.code,{children:"rightIcon"}),"), så kan du sende inn navnet på ikonet du ønsker på følgende måte:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<Button leftIcon="add">Knappetekst</Button>\n'})})]})}}}}]);