"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[4225],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Grid=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Grid2(props,ref){const{templateAreas,gap,rowGap,columnGap,column,row,autoFlow,autoRows,templateRows,autoColumns,templateColumns,...rest}=props,styles={display:"grid",gridTemplateAreas:templateAreas,gridGap:gap,gridRowGap:rowGap,gridColumnGap:columnGap,gridAutoColumns:autoColumns,gridColumn:column,gridRow:row,gridAutoFlow:autoFlow,gridAutoRows:autoRows,gridTemplateRows:templateRows,gridTemplateColumns:templateColumns};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Grid.displayName="Grid"},"../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,bK:()=>Square,xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square";var Circle=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})}));Circle.displayName="Circle"},"./stories/components/Layout/SimpleGrid/SimpleGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ResponsiveSimpleGrid:()=>ResponsiveSimpleGrid,SimpleGrid:()=>SimpleGrid_stories_SimpleGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SimpleGrid_stories});var chunk_JARCRF6W=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_UIGT7YZF=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs"),chunk_WNDUHNHH=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-WNDUHNHH.mjs"),chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),SimpleGrid=(0,chunk_ZJJGQIVY.G)((function SimpleGrid2(props,ref){const{columns,spacingX,spacingY,spacing,minChildWidth,...rest}=props,theme=(0,chunk_UIGT7YZF.F)(),templateColumns=minChildWidth?function widthToColumns(width,theme){return(0,chunk_G72KV6MB.XQ)(width,(value=>{const _value=(0,chunk_WNDUHNHH.LP)("sizes",value,function toPx(n){return"number"==typeof n?`${n}px`:n}(value))(theme);return null===value?null:`repeat(auto-fit, minmax(${_value}, 1fr))`}))}(minChildWidth,theme):function countToColumns(count){return(0,chunk_G72KV6MB.XQ)(count,(value=>null===value?null:`repeat(${value}, minmax(0, 1fr))`))}(columns);return(0,jsx_runtime.jsx)(chunk_JARCRF6W.r,{ref,gap:spacing,columnGap:spacingX,rowGap:spacingY,templateColumns,...rest})}));SimpleGrid.displayName="SimpleGrid";var chunk_PULVB27S=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs");const SimpleGrid_stories={title:"Komponenter/Layout/SimpleGrid",component:SimpleGrid,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},SimpleGrid_stories_SimpleGrid={render:args=>(0,jsx_runtime.jsxs)(SimpleGrid,{...args,columns:2,spacing:10,children:[(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{backgroundColor:"green.100",height:"80px"}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{backgroundColor:"green.100",height:"80px"}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{backgroundColor:"green.100",height:"80px"}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{backgroundColor:"green.100",height:"80px"}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{backgroundColor:"green.100",height:"80px"})]})},ResponsiveSimpleGrid={render:args=>(0,jsx_runtime.jsxs)(SimpleGrid,{...args,minChildWidth:"120px",spacing:"40px",children:[(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{bg:"red.100",height:"80px"}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{bg:"red.100",height:"80px"}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{bg:"red.100",height:"80px"}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{bg:"red.100",height:"80px"}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{bg:"red.100",height:"80px"}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{bg:"red.100",height:"80px"})]})};SimpleGrid_stories_SimpleGrid.parameters={...SimpleGrid_stories_SimpleGrid.parameters,docs:{...SimpleGrid_stories_SimpleGrid.parameters?.docs,source:{originalSource:'{\n  render: args => <KvibSimpleGrid {...args} columns={2} spacing={10}>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n      <Box backgroundColor="green.100" height="80px"></Box>\n    </KvibSimpleGrid>\n}',...SimpleGrid_stories_SimpleGrid.parameters?.docs?.source}}},ResponsiveSimpleGrid.parameters={...ResponsiveSimpleGrid.parameters,docs:{...ResponsiveSimpleGrid.parameters?.docs,source:{originalSource:'{\n  render: args => <KvibSimpleGrid {...args} minChildWidth="120px" spacing="40px">\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n      <Box bg="red.100" height="80px"></Box>\n    </KvibSimpleGrid>\n}',...ResponsiveSimpleGrid.parameters?.docs?.source}}};const __namedExportsOrder=["SimpleGrid","ResponsiveSimpleGrid"]}}]);