"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[590],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-2N6VWMFO.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>SimpleGrid});var _chunk_JARCRF6W_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-WNDUHNHH.mjs"),_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),SimpleGrid=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function SimpleGrid2(props,ref){const{columns,spacingX,spacingY,spacing,minChildWidth,...rest}=props,theme=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.F)(),templateColumns=minChildWidth?function widthToColumns(width,theme){return(0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_4__.XQ)(width,(value=>{const _value=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.LP)("sizes",value,function toPx(n){return"number"==typeof n?`${n}px`:n}(value))(theme);return null===value?null:`repeat(auto-fit, minmax(${_value}, 1fr))`}))}(minChildWidth,theme):function countToColumns(count){return(0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_4__.XQ)(count,(value=>null===value?null:`repeat(${value}, minmax(0, 1fr))`))}(columns);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_JARCRF6W_mjs__WEBPACK_IMPORTED_MODULE_3__.r,{ref,gap:spacing,columnGap:spacingX,rowGap:spacingY,templateColumns,...rest})}));SimpleGrid.displayName="SimpleGrid"},"../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Text=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Text2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),aliasedProps=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__.o)({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.p,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"../../node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Heading=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Heading2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Heading",props),{className,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.h2,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-heading",props.className),...rest,__css:styles})}));Heading.displayName="Heading"},"../../node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Center,u:()=>AbsoluteCenter});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Center=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Center.displayName="Center";var centerStyles={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},AbsoluteCenter=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function AbsoluteCenter2(props,ref){const{axis="both",...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m.div,{ref,__css:centerStyles[axis],...rest,position:"absolute"})}))},"../../node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Grid=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Grid2(props,ref){const{templateAreas,gap,rowGap,columnGap,column,row,autoFlow,autoRows,templateRows,autoColumns,templateColumns,...rest}=props,styles={display:"grid",gridTemplateAreas:templateAreas,gridGap:gap,gridRowGap:rowGap,gridColumnGap:columnGap,gridAutoColumns:autoColumns,gridColumn:column,gridRow:row,gridAutoFlow:autoFlow,gridAutoRows:autoRows,gridTemplateRows:templateRows,gridTemplateColumns:templateColumns};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Grid.displayName="Grid"},"../../node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Code});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Code=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Code2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Code",props),{className,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.code,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-code",props.className),...rest,__css:{display:"inline-block",...styles}})}));Code.displayName="Code"},"../../node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>VStack});var _chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),VStack=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__.K,{align:"center",...props,direction:"column",ref})));VStack.displayName="VStack"},"../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,bK:()=>Square,xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square";var Circle=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})}));Circle.displayName="Circle"},"../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,shared_utils_dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}__webpack_require__.d(__webpack_exports__,{o:()=>compact})},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@chakra-ui/table/dist/chunk-DRZNIHMG.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Thead});var _chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Thead=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>{const styles=(0,_chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__.p)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.thead,{...props,ref,__css:styles.thead})}))},"../../node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Table,p:()=>useTableStyles});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),[TableStylesProvider,useTableStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),Table=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)(((props,ref)=>{const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("Table",props),{className,layout,...tableProps}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TableStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.table,{ref,__css:{tableLayout:layout,...styles.table},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-table",className),...tableProps})})}));Table.displayName="Table"},"../../node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tr:()=>Tr});var _chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Tr=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>{const styles=(0,_chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__.p)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.tr,{...props,ref,__css:styles.tr})}))},"../../node_modules/@chakra-ui/table/dist/chunk-J4QO5GAJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Tbody});var _chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Tbody=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>{const styles=(0,_chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__.p)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.tbody,{...props,ref,__css:styles.tbody})}))},"../../node_modules/@chakra-ui/table/dist/chunk-MGVPL3OH.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Th:()=>Th});var _chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Th=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((({isNumeric,...rest},ref)=>{const styles=(0,_chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__.p)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.th,{...rest,ref,__css:styles.th,"data-is-numeric":isNumeric})}))},"../../node_modules/@chakra-ui/table/dist/chunk-OA6OURRG.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>TableContainer});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),TableContainer=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>{var _a;const{overflow,overflowX,className,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("chakra-table__container",className),...rest,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(_a=null!=overflow?overflow:overflowX)?_a:"auto",overflowY:"hidden",maxWidth:"100%"}})}))},"../../node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Td:()=>Td});var _chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Td=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((({isNumeric,...rest},ref)=>{const styles=(0,_chunk_GEJVU65N_mjs__WEBPACK_IMPORTED_MODULE_2__.p)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.td,{...rest,ref,__css:styles.td,"data-is-numeric":isNumeric})}))},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,ZX:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ZX,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/design/design-tokens/design-tokens.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>design_tokens});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),chunk_PULVB27S=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs");__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-OA6OURRG.mjs"),__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs"),__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-DRZNIHMG.mjs"),__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs"),__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-MGVPL3OH.mjs"),__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-J4QO5GAJ.mjs"),__webpack_require__("../../node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs"),__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs"),__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs"),__webpack_require__("../../packages/react/src/theme/tokens/radius.ts");const example=radii=>(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{border:"2px solid #4DB450",backgroundColor:"#E9F4EC",width:"80px",height:"80px",borderRadius:radii});example.displayName="example";__webpack_require__("../../packages/react/src/theme/tokens/shadows.ts");const Shadows_example=shadow=>(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{backgroundColor:"white",width:"80px",height:"80px",boxShadow:shadow,borderRadius:"4px"});Shadows_example.displayName="example";__webpack_require__("../../packages/react/src/theme/tokens/breakpoints.ts");var chunk_NTCQBYKE=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs"),chunk_2OOHT3W5=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),chunk_7OLJDQMT=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),chunk_2N6VWMFO=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2N6VWMFO.mjs"),colors=__webpack_require__("../../packages/react/src/theme/tokens/colors.ts"),typography=__webpack_require__("../../packages/react/src/theme/tokens/typography.ts");const renderColors=(name,colorScale)=>{if("string"==typeof colorScale){const hex=colorScale;return(0,jsx_runtime.jsxs)(chunk_NTCQBYKE.g,{alignItems:"flex-start",spacing:"4px",borderRadius:"6px",border:`1px solid ${colors.O.gray[100]}`,children:[(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{backgroundColor:hex,height:"60px",width:"100%"}),(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{fontWeight:typography.vC.bold,fontSize:typography.CH.sm,paddingLeft:"6px",children:name}),(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{fontSize:typography.CH.xs,paddingLeft:"6px",children:hex})]})}return Object.entries(colorScale).map((([value,hex])=>(0,jsx_runtime.jsxs)(chunk_NTCQBYKE.g,{alignItems:"flex-start",spacing:"2px",borderRadius:"6px",border:`1px solid ${colors.O.gray[100]}`,children:[(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{backgroundColor:hex,height:"60px",width:"100%"}),(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{fontWeight:typography.vC.bold,fontSize:typography.CH.sm,paddingLeft:"6px",children:`${name}-${value}`}),(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{fontSize:typography.CH.xs,paddingLeft:"6px",children:hex})]},value)))},Colors=()=>(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{marginBottom:"40px",children:Object.entries(colors.O).map((([name,colorScale])=>{return(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{marginTop:"20px",children:[(0,jsx_runtime.jsx)(chunk_7OLJDQMT.X,{as:"h3",children:(word=name,word.charAt(0).toUpperCase()+word.slice(1))}),(0,jsx_runtime.jsx)(chunk_2N6VWMFO.M,{columns:10,spacing:"8px",children:renderColors(name,colorScale)})]},name);var word}))});Colors.displayName="Colors";__webpack_require__("../../packages/react/src/theme/tokens/borders.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",br:"br",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Design Fundament/Design tokens"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"design-tokens",children:"Design tokens"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Nedenfor finner du en oversikt over alle KVIBs design tokens."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"farger",children:"Farger"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Fargene brukes som CSS-variabler på følgende måte: ",(0,jsx_runtime.jsx)(_components.code,{children:"var(--kvib-colors-green-50)"}),".",(0,jsx_runtime.jsx)(_components.br,{}),"\n","I komponenter brukes de slik: ",(0,jsx_runtime.jsx)(_components.code,{children:'backgroundColor="green.50"'}),"."]}),"\n",(0,jsx_runtime.jsx)(Colors,{}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://chakra-ui.com/docs/styled-system/theme#colors",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://chakra-ui.com/docs/styled-system/theme#colors"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"typografi",children:"Typografi"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://chakra-ui.com/docs/styled-system/theme#typography",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://chakra-ui.com/docs/styled-system/theme#typography"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"breakpoints",children:"Breakpoints"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://chakra-ui.com/docs/styled-system/theme#breakpoints",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://chakra-ui.com/docs/styled-system/theme#breakpoints"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"spacings",children:"Spacings"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://chakra-ui.com/docs/styled-system/theme#spacing",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://chakra-ui.com/docs/styled-system/theme#spacing"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://chakra-ui.com/docs/styled-system/theme#sizes",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://chakra-ui.com/docs/styled-system/theme#sizes"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"radius",children:"Radius"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://chakra-ui.com/docs/styled-system/theme#border-radius",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://chakra-ui.com/docs/styled-system/theme#border-radius"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"z-index",children:"Z-index"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://chakra-ui.com/docs/styled-system/theme#z-index-values",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://chakra-ui.com/docs/styled-system/theme#z-index-values"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"transitions",children:"Transitions"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/foundations/transition.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/foundations/transition.ts"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://chakra-ui.com/docs/components/transitions",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://chakra-ui.com/docs/components/transitions"})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"borders",children:"Borders"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/foundations/borders.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/foundations/borders.ts"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"skygger",children:"Skygger"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/foundations/shadows.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/foundations/shadows.ts"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"blurs",children:"Blurs"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/foundations/blur.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/foundations/blur.ts"})})]})}const design_tokens=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);