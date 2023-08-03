"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[8777],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XQ:()=>mapResponsive});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs");Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}},"../../node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Center,u:()=>AbsoluteCenter});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Center=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Center.displayName="Center";var centerStyles={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},AbsoluteCenter=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function AbsoluteCenter2(props,ref){const{axis="both",...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m.div,{ref,__css:centerStyles[axis],...rest,position:"absolute"})}))},"../../node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,bK:()=>Square,xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square";var Circle=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})}));Circle.displayName="Circle"},"../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:(0,chunk_G72KV6MB.XQ)(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Text=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Text2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),aliasedProps=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__.o)({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.p,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"../../node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Divider=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Divider2(props,ref){const{borderLeftWidth,borderBottomWidth,borderTopWidth,borderRightWidth,borderWidth,borderStyle,borderColor,...styles}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Divider",props),{className,orientation="horizontal",__css,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),dividerStyles={vertical:{borderLeftWidth:borderLeftWidth||borderRightWidth||borderWidth||"1px",height:"100%"},horizontal:{borderBottomWidth:borderBottomWidth||borderTopWidth||borderWidth||"1px",width:"100%"}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.hr,{ref,"aria-orientation":orientation,...rest,__css:{...styles,border:"0",borderColor,borderStyle,...dividerStyles[orientation],...__css},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-divider",className)})}));Divider.displayName="Divider"},"../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}__webpack_require__.d(__webpack_exports__,{o:()=>compact})},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./stories/components/data-display/divider/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Divider:()=>Divider,DividerColorsWidths:()=>DividerColorsWidths,DividerContent:()=>DividerContent,DividerVariants:()=>DividerVariants,DividerVertical:()=>DividerVertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-3V5HNFOM.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Data Display/Divider",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the Divider",table:{type:{summary:"solid | dashed"},defaultValue:{summary:"solid"}},options:["solid","dashed"],control:"radio"},orientation:{description:"The orientation of the Divider",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:"radio"}}},Divider={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.i,{...args})},DividerVariants={args:{borderColor:"blue.600"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.K,{spacing:"4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.i,{...args,variant:"solid"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.i,{...args,variant:"dashed"})]})},DividerColorsWidths={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.K,{spacing:"4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.i,{...args,borderWidth:"1px",borderColor:"blue.500"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.i,{...args,borderWidth:"2px",borderColor:"green.500"})]})},DividerVertical={args:{borderColor:"blue.600"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.M,{height:"50px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.i,{...args,orientation:"vertical"})})},DividerContent={args:{borderColor:"blue.600"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.xu,{position:"relative",padding:"10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.i,{...args}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.u,{bg:"white",px:"4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__.x,{children:"KVIB"})})]})};Divider.parameters={...Divider.parameters,docs:{...Divider.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <KvibDivider {...args} />\n}",...Divider.parameters?.docs?.source}}},DividerVariants.parameters={...DividerVariants.parameters,docs:{...DividerVariants.parameters?.docs,source:{originalSource:'{\n  args: {\n    borderColor: "blue.600"\n  },\n  render: args => <KvibStack spacing="4">\n      <KvibDivider {...args} variant="solid" />\n      <KvibDivider {...args} variant="dashed" />\n    </KvibStack>\n}',...DividerVariants.parameters?.docs?.source}}},DividerColorsWidths.parameters={...DividerColorsWidths.parameters,docs:{...DividerColorsWidths.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibStack spacing="4">\n      <KvibDivider {...args} borderWidth="1px" borderColor="blue.500" />\n      <KvibDivider {...args} borderWidth="2px" borderColor="green.500" />\n    </KvibStack>\n}',...DividerColorsWidths.parameters?.docs?.source}}},DividerVertical.parameters={...DividerVertical.parameters,docs:{...DividerVertical.parameters?.docs,source:{originalSource:'{\n  args: {\n    borderColor: "blue.600"\n  },\n  render: args => <KvibCenter height="50px">\n      <KvibDivider {...args} orientation="vertical" />\n    </KvibCenter>\n}',...DividerVertical.parameters?.docs?.source}}},DividerContent.parameters={...DividerContent.parameters,docs:{...DividerContent.parameters?.docs,source:{originalSource:'{\n  args: {\n    borderColor: "blue.600"\n  },\n  render: args => <KvibBox position="relative" padding="10">\n      <KvibDivider {...args} />\n      <KvibAbsoluteCenter bg="white" px="4">\n        <KvibTekst>KVIB</KvibTekst>\n      </KvibAbsoluteCenter>\n    </KvibBox>\n}',...DividerContent.parameters?.docs?.source}}};const __namedExportsOrder=["Divider","DividerVariants","DividerColorsWidths","DividerVertical","DividerContent"]}}]);