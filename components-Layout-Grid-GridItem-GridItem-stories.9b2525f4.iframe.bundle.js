"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[4687],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a1:()=>arrayToObjectNotation,bk:()=>mapResponsive,fi:()=>breakpoints});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Gv)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Grid});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Grid=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.R)((function Grid2(props,ref){const{templateAreas,gap,rowGap,columnGap,column,row,autoFlow,autoRows,templateRows,autoColumns,templateColumns,...rest}=props,styles={display:"grid",gridTemplateAreas:templateAreas,gridGap:gap,gridRowGap:rowGap,gridColumnGap:columnGap,gridAutoColumns:autoColumns,gridColumn:column,gridRow:row,gridAutoFlow:autoFlow,gridAutoRows:autoRows,gridTemplateRows:templateRows,gridTemplateColumns:templateColumns};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.B.div,{ref,__css:styles,...rest})}));Grid.displayName="Grid"},"../../node_modules/@chakra-ui/layout/dist/chunk-ZPFGWTBB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GridItem});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function spanFn(span){return(0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_1__.bk)(span,(value=>"auto"===value?"auto":`span ${value}/span ${value}`))}var GridItem=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)((function GridItem2(props,ref){const{area,colSpan,colStart,colEnd,rowEnd,rowSpan,rowStart,...rest}=props,styles=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_3__.o)({gridArea:area,gridColumn:spanFn(colSpan),gridRow:spanFn(rowSpan),gridColumnStart:colStart,gridColumnEnd:colEnd,gridRowStart:rowStart,gridRowEnd:rowEnd});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.B.div,{ref,__css:styles,...rest})}));GridItem.displayName="GridItem"},"../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}__webpack_require__.d(__webpack_exports__,{o:()=>compact})},"./stories/components/Layout/Grid/GridItem/GridItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Grid:()=>Grid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZPFGWTBB.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Grid/GridItem",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{area:{description:"Shorthand prop for gridArea",table:{type:{summary:"ResponsiveValue<GridArea>"}},control:"text"},colEnd:{description:"The column number where the grid item should end",table:{type:{summary:"ResponsiveValue<number | 'auto'>"}},control:{type:"text"}},colSpan:{description:"The number of columns the grid item should span",table:{type:{summary:"ResponsiveValue<number | 'auto'>"}},control:{type:"text"}},colStart:{description:"The column number the grid item should start",table:{type:{summary:"ResponsiveValue<number | 'auto'>"}},control:{type:"text"}},rowEnd:{description:"The row number where the grid item should end",table:{type:{summary:"ResponsiveValue<number | 'auto'>"}},control:{type:"text"}},rowSpan:{description:"The number of rows the grid item should span",table:{type:{summary:"ResponsiveValue<number | 'auto'>"}},control:{type:"text"}},rowStart:{description:"The row number the grid item should start",table:{type:{summary:"ResponsiveValue<number | 'auto'>"}},control:{type:"text"}}}},Grid={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.x,{templateColumns:"repeat(5, 1fr)",gap:6,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{...args,w:"100%",h:10,bgColor:"blue.100"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{...args,w:"100%",h:10,bgColor:"blue.100"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{...args,w:"100%",h:10,bgColor:"blue.100"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{...args,w:"100%",h:10,bgColor:"blue.100"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{...args,w:"100%",h:10,bgColor:"blue.100"})]})};Grid.parameters={storySource:{source:'{\n  args: {},\n  render: (args) => (\n    <KvibGrid templateColumns="repeat(5, 1fr)" gap={6}>\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n    </KvibGrid>\n  ),\n}'},...Grid.parameters},Grid.parameters={...Grid.parameters,docs:{...Grid.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibGrid templateColumns="repeat(5, 1fr)" gap={6}>\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n      <GridItem {...args} w="100%" h={10} bgColor="blue.100" />\n    </KvibGrid>\n}',...Grid.parameters?.docs?.source}}};const __namedExportsOrder=["Grid"]}}]);