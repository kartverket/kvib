"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[2879],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,shared_utils_dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./stories/components/spinner/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Spinner:()=>Spinner,SpinnerArea:()=>SpinnerArea,SpinnerColors:()=>SpinnerColors,SpinnerSizes:()=>SpinnerSizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Spinner",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{color:{description:"The color of the spinner",table:{type:{summary:"string"}},control:"text"},emptyColor:{description:"The color of the empty area in the spinner",table:{type:{summary:"string"},defaultValue:{summary:"transparent"}},control:"text"},label:{description:"For accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.",table:{type:{summary:"string"},defaultValue:{summary:"Loading..."}},control:"text"},size:{description:"The size of the Spinner",table:{type:{summary:"xs | sm | md | lg | xl"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg","xl"],control:{type:"radio"}},speed:{description:"The speed of the spinner",table:{type:{summary:"string"},defaultValue:{summary:"0.45s"}},control:"text"},thickness:{description:"The thickness of the spinner",table:{type:{summary:"string"},defaultValue:{summary:"2px"}},control:"text"}}},Spinner={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args})},SpinnerColors={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args,color:"blue"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args,color:"green"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args,color:"red"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args,color:"gray"})]})},SpinnerSizes={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args,size:"sm"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args,size:"md"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args,size:"lg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args,size:"xl"})]})},SpinnerArea={args:{size:"xl",emptyColor:"gray.200",speed:"0.65s",color:"green.500",thickness:"4px"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.$,{...args})};Spinner.parameters={...Spinner.parameters,docs:{...Spinner.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <KvibSpinner {...args} />\n}",...Spinner.parameters?.docs?.source}}},SpinnerColors.parameters={...SpinnerColors.parameters,docs:{...SpinnerColors.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibStack>\n      <KvibSpinner {...args} color="blue" />\n      <KvibSpinner {...args} color="green" />\n      <KvibSpinner {...args} color="red" />\n      <KvibSpinner {...args} color="gray" />\n    </KvibStack>\n}',...SpinnerColors.parameters?.docs?.source}}},SpinnerSizes.parameters={...SpinnerSizes.parameters,docs:{...SpinnerSizes.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibStack>\n      <KvibSpinner {...args} size="xs" />\n      <KvibSpinner {...args} size="sm" />\n      <KvibSpinner {...args} size="md" />\n      <KvibSpinner {...args} size="lg" />\n      <KvibSpinner {...args} size="xl" />\n    </KvibStack>\n}',...SpinnerSizes.parameters?.docs?.source}}},SpinnerArea.parameters={...SpinnerArea.parameters,docs:{...SpinnerArea.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "xl",\n    emptyColor: "gray.200",\n    speed: "0.65s",\n    color: "green.500",\n    thickness: "4px"\n  },\n  render: args => <KvibSpinner {...args} />\n}',...SpinnerArea.parameters?.docs?.source}}},Spinner.parameters={storySource:{source:"{\n  args: {},\n  render: args => <KvibSpinner {...args} />\n}"},...Spinner.parameters},SpinnerColors.parameters={storySource:{source:'{\n  args: {},\n  render: args => <KvibStack>\n      <KvibSpinner {...args} color="blue" />\n      <KvibSpinner {...args} color="green" />\n      <KvibSpinner {...args} color="red" />\n      <KvibSpinner {...args} color="gray" />\n    </KvibStack>\n}'},...SpinnerColors.parameters},SpinnerSizes.parameters={storySource:{source:'{\n  args: {},\n  render: args => <KvibStack>\n      <KvibSpinner {...args} size="xs" />\n      <KvibSpinner {...args} size="sm" />\n      <KvibSpinner {...args} size="md" />\n      <KvibSpinner {...args} size="lg" />\n      <KvibSpinner {...args} size="xl" />\n    </KvibStack>\n}'},...SpinnerSizes.parameters},SpinnerArea.parameters={storySource:{source:'{\n  args: {\n    size: "xl",\n    emptyColor: "gray.200",\n    speed: "0.65s",\n    color: "green.500",\n    thickness: "4px"\n  },\n  render: args => <KvibSpinner {...args} />\n}'},...SpinnerArea.parameters};const __namedExportsOrder=["Spinner","SpinnerColors","SpinnerSizes","SpinnerArea"]}}]);