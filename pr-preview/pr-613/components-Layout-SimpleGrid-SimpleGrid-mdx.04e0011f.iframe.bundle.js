"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[5085,4225],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Grid=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Grid2(props,ref){const{templateAreas,gap,rowGap,columnGap,column,row,autoFlow,autoRows,templateRows,autoColumns,templateColumns,...rest}=props,styles={display:"grid",gridTemplateAreas:templateAreas,gridGap:gap,gridRowGap:rowGap,gridColumnGap:columnGap,gridAutoColumns:autoColumns,gridColumn:column,gridRow:row,gridAutoFlow:autoFlow,gridAutoRows:autoRows,gridTemplateRows:templateRows,gridTemplateColumns:templateColumns};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Grid.displayName="Grid"},"../../node_modules/@chakra-ui/layout/dist/chunk-NEK3OOAM.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>SimpleGrid});var _chunk_JARCRF6W_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-7FWEOSAE.mjs"),_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),SimpleGrid=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function SimpleGrid2(props,ref){const{columns,spacingX,spacingY,spacing,minChildWidth,...rest}=props,theme=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.F)(),templateColumns=minChildWidth?function widthToColumns(width,theme){return(0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_4__.XQ)(width,(value=>{const _value=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.LP)("sizes",value,function toPx(n){return"number"==typeof n?`${n}px`:n}(value))(theme);return null===value?null:`repeat(auto-fit, minmax(${_value}, 1fr))`}))}(minChildWidth,theme):function countToColumns(count){return(0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_4__.XQ)(count,(value=>null===value?null:`repeat(${value}, minmax(0, 1fr))`))}(columns);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_JARCRF6W_mjs__WEBPACK_IMPORTED_MODULE_3__.r,{ref,gap:spacing,columnGap:spacingX,rowGap:spacingY,templateColumns,...rest})}));SimpleGrid.displayName="SimpleGrid"},"../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,bK:()=>Square,xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square";var Circle=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})}));Circle.displayName="Circle"},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/Layout/SimpleGrid/SimpleGrid.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_SimpleGrid_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/Layout/SimpleGrid/SimpleGrid.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a",h3:"h3"},(0,_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_SimpleGrid_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"grid",children:"Grid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Grid er en layout for å lage grid layouts."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_SimpleGrid_stories__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { SimpleGrid } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Se ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://chakra-ui.com/docs/components/simple-grid/props",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakras dokumentasjonsside for Simple Grid"})," for tillate props."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"flere-eksempler",children:"Flere eksempler"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"responsive-simple-grid",children:"Responsive Simple Grid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_SimpleGrid_stories__WEBPACK_IMPORTED_MODULE_2__.ResponsiveSimpleGrid}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Se ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://chakra-ui.com/docs/components/simple-grid/usage",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra sine dokumentasjonssider"})," for flere eksempler og info."]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./stories/components/Layout/SimpleGrid/SimpleGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ResponsiveSimpleGrid:()=>ResponsiveSimpleGrid,SimpleGrid:()=>SimpleGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-NEK3OOAM.mjs"),_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Layout/SimpleGrid",component:_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_1__.M,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},SimpleGrid={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_1__.M,{...args,columns:2,spacing:10,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{backgroundColor:"green.100",height:"80px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{backgroundColor:"green.100",height:"80px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{backgroundColor:"green.100",height:"80px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{backgroundColor:"green.100",height:"80px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{backgroundColor:"green.100",height:"80px"})]})},ResponsiveSimpleGrid={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_1__.M,{...args,minChildWidth:"120px",spacing:"40px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{bg:"red.100",height:"80px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{bg:"red.100",height:"80px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{bg:"red.100",height:"80px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{bg:"red.100",height:"80px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{bg:"red.100",height:"80px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{bg:"red.100",height:"80px"})]})};SimpleGrid.parameters={...SimpleGrid.parameters,docs:{...SimpleGrid.parameters?.docs,source:{originalSource:'{\n  render: args => <KvibSimpleGrid {...args} columns={2} spacing={10}>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n    </KvibSimpleGrid>\n}',...SimpleGrid.parameters?.docs?.source}}},ResponsiveSimpleGrid.parameters={...ResponsiveSimpleGrid.parameters,docs:{...ResponsiveSimpleGrid.parameters?.docs,source:{originalSource:'{\n  render: args => <KvibSimpleGrid {...args} minChildWidth="120px" spacing="40px">\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n    </KvibSimpleGrid>\n}',...ResponsiveSimpleGrid.parameters?.docs?.source}}},SimpleGrid.parameters={storySource:{source:'{\n  render: args => <KvibSimpleGrid {...args} columns={2} spacing={10}>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n    </KvibSimpleGrid>\n}'},...SimpleGrid.parameters},ResponsiveSimpleGrid.parameters={storySource:{source:'{\n  render: args => <KvibSimpleGrid {...args} minChildWidth="120px" spacing="40px">\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n    </KvibSimpleGrid>\n}'},...ResponsiveSimpleGrid.parameters};const __namedExportsOrder=["SimpleGrid","ResponsiveSimpleGrid"]}}]);