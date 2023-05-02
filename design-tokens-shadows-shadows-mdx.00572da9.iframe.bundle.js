"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[767],{"../../node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Center});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Center=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Center.displayName="Center";var centerStyles={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function AbsoluteCenter2(props,ref){const{axis="both",...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m.div,{ref,__css:centerStyles[axis],...rest,position:"absolute"})}))},"../../node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})})).displayName="Circle"},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/design-tokens/shadows/shadows.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>shadows_shadows});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),chunk_6CSUKJP7=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),TableContainer=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{var _a;const{overflow,overflowX,className,...rest}=props;return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,className:(0,shared_utils_dist.cx)("chakra-table__container",className),...rest,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(_a=null!=overflow?overflow:overflowX)?_a:"auto",overflowY:"hidden",maxWidth:"100%"}})})),chunk_T2VHL7RE=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),react_context_dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),[TableStylesProvider,useTableStyles]=(0,react_context_dist.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),Table=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=(0,chunk_T2VHL7RE.jC)("Table",props),{className,layout,...tableProps}=(0,styled_system_dist.Lr)(props);return(0,jsx_runtime.jsx)(TableStylesProvider,{value:styles,children:(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.table,{ref,__css:{tableLayout:layout,...styles.table},className:(0,shared_utils_dist.cx)("chakra-table",className),...tableProps})})}));Table.displayName="Table";var Thead=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.thead,{...props,ref,__css:styles.thead})})),Tr=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.tr,{...props,ref,__css:styles.tr})})),Th=(0,chunk_QEVFQ4EU.G)((({isNumeric,...rest},ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.th,{...rest,ref,__css:styles.th,"data-is-numeric":isNumeric})})),Tbody=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.tbody,{...props,ref,__css:styles.tbody})})),Td=(0,chunk_QEVFQ4EU.G)((({isNumeric,...rest},ref)=>{const styles=useTableStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.td,{...rest,ref,__css:styles.td,"data-is-numeric":isNumeric})})),chunk_3V5HNFOM=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs"),shadows=__webpack_require__("../../packages/react/src/theme/foundations/shadows.ts");const example=shadow=>(0,jsx_runtime.jsx)(chunk_6CSUKJP7.xu,{backgroundColor:"white",width:"80px",height:"80px",boxShadow:shadow,borderRadius:"4px"});example.displayName="example";const ShadowsTable=()=>(0,jsx_runtime.jsx)(TableContainer,{children:(0,jsx_runtime.jsxs)(Table,{variant:"simple",size:"lg",width:"100%",children:[(0,jsx_runtime.jsx)(Thead,{textAlign:"left",children:(0,jsx_runtime.jsxs)(Tr,{children:[(0,jsx_runtime.jsx)(Th,{children:"Eksempel"}),(0,jsx_runtime.jsx)(Th,{children:"Verdi"}),(0,jsx_runtime.jsx)(Th,{children:"Kode"})]})}),(0,jsx_runtime.jsx)(Tbody,{children:Object.entries(shadows.q).map((([size,value])=>(0,jsx_runtime.jsxs)(Tr,{children:[(0,jsx_runtime.jsx)(Td,{children:(0,jsx_runtime.jsx)(chunk_3V5HNFOM.M,{children:example(value)})}),(0,jsx_runtime.jsx)(Td,{children:`${size} / ${value}`}),(0,jsx_runtime.jsx)(Td,{children:`var(--kvib-shadows-${size})`})]},size)))})]})});ShadowsTable.displayName="ShadowsTable";const shadows_shadows=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Design Tokens/Skygge"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"skygger",children:"Skygger"}),"\n",(0,jsx_runtime.jsx)(ShadowsTable,{})]})}}}}]);