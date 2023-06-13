"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[7123,5761],{"../../node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Center});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Center=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Center.displayName="Center";var centerStyles={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function AbsoluteCenter2(props,ref){const{axis="both",...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m.div,{ref,__css:centerStyles[axis],...rest,position:"absolute"})}))},"../../node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,bK:()=>Square,xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square";var Circle=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})}));Circle.displayName="Circle"},"../../node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Text=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Text2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),aliasedProps=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__.o)({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.p,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}__webpack_require__.d(__webpack_exports__,{o:()=>compact})},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/Layout/Flex/Flex.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Flex_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/Layout/Flex/Flex.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",strong:"strong",br:"br",a:"a",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Flex_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"flex",children:"Flex"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Flex er en boks med display satt til flex og kommer med en rekke hjelpsomme forkortelser. Den rendres som et ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"div"})," element."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Flex_stories__WEBPACK_IMPORTED_MODULE_2__.Flex}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Flex, Spacer } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Flex:"})," En ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Box"})," with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"display: flex"}),".",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Spacer:"})," Er en justerbar tomt rom som kan brukes til å justere avstanden mellom underelementene i ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Flex"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Se ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://chakra-ui.com/docs/components/flex/props",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakras dokumentasjonsside for Flex"})," for tillate props."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"flere-eksempler",children:"Flere eksempler"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"flex-med-spacer",children:"Flex med Spacer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Flex_stories__WEBPACK_IMPORTED_MODULE_2__.FlexWithSpacer}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Se ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://chakra-ui.com/docs/components/flex/usage",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra sine dokumentasjonssider"})," for flere eksempler og info."]})]})}}},"./stories/components/Layout/Flex/Flex.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Flex:()=>Flex_stories_Flex,FlexWithSpacer:()=>FlexWithSpacer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Flex_stories});var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Flex=(0,chunk_QEVFQ4EU.G)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex";var chunk_3V5HNFOM=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs"),chunk_6CSUKJP7=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),Spacer=(0,chunk_3LE6AY5Q.m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});Spacer.displayName="Spacer";var chunk_P74GIWPW=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs");const Flex_stories={title:"Komponenter/Layout/Flex",component:Flex,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},Flex_stories_Flex={render:args=>(0,jsx_runtime.jsxs)(Flex,{...args,children:[(0,jsx_runtime.jsx)(chunk_3V5HNFOM.M,{width:"100px",backgroundColor:"green.100",children:(0,jsx_runtime.jsx)(chunk_P74GIWPW.x,{children:"Text 1"})}),(0,jsx_runtime.jsx)(chunk_3V5HNFOM.M,{width:"100px",height:"150px",backgroundColor:"blue.100",children:(0,jsx_runtime.jsx)(chunk_P74GIWPW.x,{children:"Text 2"})}),(0,jsx_runtime.jsx)(chunk_6CSUKJP7.xu,{flex:"1",backgroundColor:"yellow.100",children:(0,jsx_runtime.jsx)(chunk_P74GIWPW.x,{children:"Text 3"})})]})},FlexWithSpacer={render:args=>(0,jsx_runtime.jsxs)(Flex,{...args,children:[(0,jsx_runtime.jsx)(chunk_6CSUKJP7.xu,{padding:"4",backgroundColor:"green.100",children:"Box 1"}),(0,jsx_runtime.jsx)(Spacer,{}),(0,jsx_runtime.jsx)(chunk_6CSUKJP7.xu,{padding:"4",backgroundColor:"blue.100",children:"Box 2"})]})};Flex_stories_Flex.parameters={...Flex_stories_Flex.parameters,docs:{...Flex_stories_Flex.parameters?.docs,source:{originalSource:'{\n  render: args => <KvibFlex {...args}>\n      <Center width="100px" backgroundColor="green.100">\n        <Text>Text 1</Text>\n      </Center>\n      <Center width="100px" height="150px" backgroundColor="blue.100">\n        <Text>Text 2</Text>\n      </Center>\n      <Box flex="1" backgroundColor="yellow.100">\n        <Text>Text 3</Text>\n      </Box>\n    </KvibFlex>\n}',...Flex_stories_Flex.parameters?.docs?.source}}},FlexWithSpacer.parameters={...FlexWithSpacer.parameters,docs:{...FlexWithSpacer.parameters?.docs,source:{originalSource:'{\n  render: args => <KvibFlex {...args}>\n      <Box padding="4" backgroundColor="green.100">\n        Box 1\n      </Box>\n      <Spacer />\n      <Box padding="4" backgroundColor="blue.100">\n        Box 2\n      </Box>\n    </KvibFlex>\n}',...FlexWithSpacer.parameters?.docs?.source}}};const __namedExportsOrder=["Flex","FlexWithSpacer"]}}]);