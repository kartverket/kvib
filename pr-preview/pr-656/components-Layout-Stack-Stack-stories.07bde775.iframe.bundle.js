"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[6457],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,bK:()=>Square,xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square";var Circle=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})}));Circle.displayName="Circle"},"../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,shared_utils_dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./stories/components/Layout/Stack/Stack.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ResponsiveStack:()=>ResponsiveStack,Stack:()=>Stack,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Layout/Stack",component:_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_1__.K,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{align:{description:"Short for alingItems",table:{type:{summary:"normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline | first baseline | last baseline | safe center | unsafe center | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["normal","stretch","center","start","end","flex-start","flex-end","self-start","self-end","baseline","first baseline","last baseline","safe center","unsafe center","inherit","initial","revert","revert-layer","unset"]},direction:{description:"Direction to stack items",table:{type:{summary:"column | row"}},defaultValue:{summary:"column"},control:{type:"radio"},options:["column","row"]},divider:{description:"If true, each stack item will be followed by a divider",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isInline:{description:"If true, the items will be stacked horizontally",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},justify:{description:"Short for justifyContent",table:{type:{summary:"center | start | end | flex-start | flex-end | left | right | normal | space-between | space-around | space-evenly | stretch | safe center | unsafe center | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["center","start","end","flex-start","flex-end","left","right","normal","space-between","space-around","space-evenly","stretch","safe center","unsafe center","inherit","initial","revert","revert-layer","unset"]},shouldWrapChildren:{description:"If true, the children will be wrapped in a Box",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},spacing:{description:"The space between each child",table:{type:{summary:"px | rem"}},defaultValue:{summary:""},control:{type:"string"}},wrap:{description:"short for flexWrap",table:{type:{summary:"nowrap | wrap | wrap-reverse | inherit | initial | revert | revert-layer | unset"}},defaultValue:{summary:""},control:{type:"select"},options:["nowrap","wrap","wrap-reverse","inherit","initial","revert","revert-layer","unset"]}}},Stack={args:{direction:"row"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_1__.K,{...args,spacing:"24px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})},ResponsiveStack={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_1__.K,{...args,direction:["column","row"],spacing:"24px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{width:"40px",height:"40px",backgroundColor:"green.200",children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{width:"40px",height:"40px",backgroundColor:"blue.200",children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.xu,{width:"40px",height:"40px",backgroundColor:"red.200",children:"3"})]})};Stack.parameters={...Stack.parameters,docs:{...Stack.parameters?.docs,source:{originalSource:'{\n  args: {\n    direction: "row"\n  },\n  render: args => <KvibStack {...args} spacing="24px">\n      <Box width="40px" height="40px" backgroundColor="green.200">\n        1\n      </Box>\n      <Box width="40px" height="40px" backgroundColor="blue.200">\n        2\n      </Box>\n      <Box width="40px" height="40px" backgroundColor="red.200">\n        3\n      </Box>\n    </KvibStack>\n}',...Stack.parameters?.docs?.source}}},ResponsiveStack.parameters={...ResponsiveStack.parameters,docs:{...ResponsiveStack.parameters?.docs,source:{originalSource:'{\n  render: args => <KvibStack {...args} direction={["column", "row"]} spacing="24px">\n      <Box width="40px" height="40px" backgroundColor="green.200">\n        1\n      </Box>\n      <Box width="40px" height="40px" backgroundColor="blue.200">\n        2\n      </Box>\n      <Box width="40px" height="40px" backgroundColor="red.200">\n        3\n      </Box>\n    </KvibStack>\n}',...ResponsiveStack.parameters?.docs?.source}}},Stack.parameters={storySource:{source:'{\n  args: {\n    direction: "row"\n  },\n  render: args => <KvibStack {...args} spacing="24px">\n      <Box width="40px" height="40px" backgroundColor="green.200">\n        1\n      </Box>\n      <Box width="40px" height="40px" backgroundColor="blue.200">\n        2\n      </Box>\n      <Box width="40px" height="40px" backgroundColor="red.200">\n        3\n      </Box>\n    </KvibStack>\n}'},...Stack.parameters},ResponsiveStack.parameters={storySource:{source:'{\n  render: args => <KvibStack {...args} direction={["column", "row"]} spacing="24px">\n      <Box width="40px" height="40px" backgroundColor="green.200">\n        1\n      </Box>\n      <Box width="40px" height="40px" backgroundColor="blue.200">\n        2\n      </Box>\n      <Box width="40px" height="40px" backgroundColor="red.200">\n        3\n      </Box>\n    </KvibStack>\n}'},...ResponsiveStack.parameters};const __namedExportsOrder=["Stack","ResponsiveStack"]}}]);