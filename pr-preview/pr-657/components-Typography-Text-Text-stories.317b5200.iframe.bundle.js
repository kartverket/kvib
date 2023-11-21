"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[8016,2993],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Text=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Text2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),aliasedProps=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__.o)({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.p,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,shared_utils_dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}__webpack_require__.d(__webpack_exports__,{o:()=>compact})},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./stories/components/Typography/Text/Text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Text:()=>Text,TextOverride:()=>TextOverride,TextSizes:()=>TextSizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Typografi/Text",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{align:{description:"The CSS `text-align` property",table:{type:{summary:"ResponsiveValue<TextAlign>"}},control:"text"},casing:{description:"The CSS `text-transform` property",table:{type:{summary:"ResponsiveValue<TextTransform>"}},control:"text"}}},Text={args:{children:"Dette er en eksempeltekst"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args})},TextSizes={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.K,{spacing:3,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"6xl",noOfLines:1,children:"(6xl) Kartverkets interaksjon- og designbibliotek"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"5xl",noOfLines:1,children:"(5xl) Kartverkets interaksjon- og designbibliotek"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"4xl",children:"(4xl) Kartverkets interaksjon- og designbibliotek"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"3xl",children:"(3xl) Kartverkets interaksjon- og designbibliotek"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"2xl",children:"(2xl) Kartverkets interaksjon- og designbibliotek"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"xl",children:"(xl) Kartverkets interaksjon- og designbibliotek"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"lg",children:"(lg) Kartverkets interaksjon- og designbibliotek"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"md",children:"(md) Kartverkets interaksjon- og designbibliotek"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"sm",children:"(sm) Kartverkets interaksjon- og designbibliotek"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,fontSize:"xs",children:"(xs) Kartverkets interaksjon- og designbibliotek"})]})},TextOverride={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"b",children:"Bold"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"i",children:"Italic"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"u",children:"Underline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"abbr",children:"I18N"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"cite",children:"Citation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"del",children:"Deleted"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"em",children:"Emphasis"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"ins",children:"Inserted"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"kbd",children:"Ctrl + C"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"mark",children:"Highlighted"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"s",children:"Strikethrough"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"samp",children:"Sample"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"sub",children:"sub"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.x,{...args,as:"sup",children:"sup"})]})};Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Dette er en eksempeltekst"\n  },\n  render: args => <KvibText {...args} />\n}',...Text.parameters?.docs?.source}}},TextSizes.parameters={...TextSizes.parameters,docs:{...TextSizes.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibStack spacing={3}>\n      <KvibText {...args} fontSize="6xl" noOfLines={1}>\n        (6xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="5xl" noOfLines={1}>\n        (5xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="4xl">\n        (4xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="3xl">\n        (3xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="2xl">\n        (2xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="xl">\n        (xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="lg">\n        (lg) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="md">\n        (md) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="sm">\n        (sm) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="xs">\n        (xs) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n    </KvibStack>\n}',...TextSizes.parameters?.docs?.source}}},TextOverride.parameters={...TextOverride.parameters,docs:{...TextOverride.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <>\n      <KvibText {...args} as="b">\n        Bold\n      </KvibText>\n      <br />\n      <KvibText {...args} as="i">\n        Italic\n      </KvibText>\n      <br />\n      <KvibText {...args} as="u">\n        Underline\n      </KvibText>\n      <br />\n      <KvibText {...args} as="abbr">\n        I18N\n      </KvibText>\n      <br />\n      <KvibText {...args} as="cite">\n        Citation\n      </KvibText>\n      <br />\n      <KvibText {...args} as="del">\n        Deleted\n      </KvibText>\n      <br />\n      <KvibText {...args} as="em">\n        Emphasis\n      </KvibText>\n      <br />\n      <KvibText {...args} as="ins">\n        Inserted\n      </KvibText>\n      <br />\n      <KvibText {...args} as="kbd">\n        Ctrl + C\n      </KvibText>\n      <br />\n      <KvibText {...args} as="mark">\n        Highlighted\n      </KvibText>\n      <br />\n      <KvibText {...args} as="s">\n        Strikethrough\n      </KvibText>\n      <br />\n      <KvibText {...args} as="samp">\n        Sample\n      </KvibText>\n      <br />\n      <KvibText {...args} as="sub">\n        sub\n      </KvibText>\n      <br />\n      <KvibText {...args} as="sup">\n        sup\n      </KvibText>\n    </>\n}',...TextOverride.parameters?.docs?.source}}},Text.parameters={storySource:{source:'{\n  args: {\n    children: "Dette er en eksempeltekst"\n  },\n  render: args => <KvibText {...args} />\n}'},...Text.parameters},TextSizes.parameters={storySource:{source:'{\n  args: {},\n  render: args => <KvibStack spacing={3}>\n      <KvibText {...args} fontSize="6xl" noOfLines={1}>\n        (6xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="5xl" noOfLines={1}>\n        (5xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="4xl">\n        (4xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="3xl">\n        (3xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="2xl">\n        (2xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="xl">\n        (xl) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="lg">\n        (lg) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="md">\n        (md) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="sm">\n        (sm) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n      <KvibText {...args} fontSize="xs">\n        (xs) Kartverkets interaksjon- og designbibliotek\n      </KvibText>\n    </KvibStack>\n}'},...TextSizes.parameters},TextOverride.parameters={storySource:{source:'{\n  args: {},\n  render: args => <>\n      <KvibText {...args} as="b">\n        Bold\n      </KvibText>\n      <br />\n      <KvibText {...args} as="i">\n        Italic\n      </KvibText>\n      <br />\n      <KvibText {...args} as="u">\n        Underline\n      </KvibText>\n      <br />\n      <KvibText {...args} as="abbr">\n        I18N\n      </KvibText>\n      <br />\n      <KvibText {...args} as="cite">\n        Citation\n      </KvibText>\n      <br />\n      <KvibText {...args} as="del">\n        Deleted\n      </KvibText>\n      <br />\n      <KvibText {...args} as="em">\n        Emphasis\n      </KvibText>\n      <br />\n      <KvibText {...args} as="ins">\n        Inserted\n      </KvibText>\n      <br />\n      <KvibText {...args} as="kbd">\n        Ctrl + C\n      </KvibText>\n      <br />\n      <KvibText {...args} as="mark">\n        Highlighted\n      </KvibText>\n      <br />\n      <KvibText {...args} as="s">\n        Strikethrough\n      </KvibText>\n      <br />\n      <KvibText {...args} as="samp">\n        Sample\n      </KvibText>\n      <br />\n      <KvibText {...args} as="sub">\n        sub\n      </KvibText>\n      <br />\n      <KvibText {...args} as="sup">\n        sup\n      </KvibText>\n    </>\n}'},...TextOverride.parameters};const __namedExportsOrder=["Text","TextSizes","TextOverride"]}}]);