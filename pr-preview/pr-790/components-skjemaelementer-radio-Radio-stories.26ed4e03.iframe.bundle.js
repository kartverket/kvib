"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[7975,4406,1799,6677,4788,2427,264],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,shared_utils_dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lq:()=>mergeRefs,qq:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function mergeRefs(...refs){return node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if("function"!=typeof ref)try{ref.current=value}catch(error){throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)}else ref(value)}(ref,node)}))}}function useMergeRefs(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>mergeRefs(...refs)),refs)}},"./stories/components/skjemaelementer/radio/Radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Radio:()=>Radio,Size:()=>Size,State:()=>State,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/radio/dist/chunk-RDF2AYID.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/radio/dist/chunk-FESYGSQT.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const radioArgTypes={size:{description:"Size of the Radio",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},spacing:{description:"The space between the radio icon and its text",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},aria_describedby:{description:"Refers to the id of the radio's label",table:{type:{summary:"string"},control:{type:"boolean"}}},id:{description:"Refers to the id of the radio",table:{type:{summary:"string"},control:{type:"text"}}},defaultChecked:{description:"If true, the radio wil be initially checked",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},inputProps:{description:"Additional props forwarded to the input element",table:{type:{summary:""}}},isDisabled:{description:"If true, the radio will be disabled",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},variant:{description:"The variant of the radio",table:{type:{summary:"string"}},control:{type:"text"}},isFocusable:{description:"If true, and isDisabled is true, the radio will remain focusable but not interactive",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isChecked:{description:"If true, the radio will be set as checked. You need to pass onChange to update its value (since it is controlled)",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isInvalid:{description:"If true, the radio will be invalid. Sets 'aria-invalid' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isReadOnly:{description:"If true, the radio will be read-only",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isRequired:{description:"If true, the radio button will be required. Sets 'aria-required' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},name:{description:"The name of the input field in a radio",table:{type:{summary:"string"}},control:{type:"text"}},onChange:{description:"The function that is ran when the state of the radio changes",table:{type:{summary:"callback()"}},defaultValue:{summary:"none"}},colorScheme:{description:"Color of the radio",table:{type:{summary:"green | blue | gray | red | orange | purple"},defaultValue:{summary:"Blue"}},options:["green","blue","gray","red","orange","purple"],control:{type:"select"}}},__WEBPACK_DEFAULT_EXPORT__={title:"Skjemaelementer/Radio",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},Radio={argTypes:radioArgTypes,args:{onChange:void 0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.E,{defaultValue:"1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{direction:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,value:"1",children:"En"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,value:"2",children:"To"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,value:"3",children:"Tre"})]})})},Color={args:{size:"lg"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.E,{defaultValue:"green",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{direction:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,value:"green",colorScheme:"green",children:"Grønn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,value:"blue",colorScheme:"blue",children:"Blå"})]})})},Size={args:{colorScheme:"green"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.E,{defaultValue:"3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,size:"sm",value:"1",children:"sm"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,size:"md",value:"2",children:"md"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,size:"lg",value:"3",children:"lg"})]})})},State={argTypes:radioArgTypes,args:{onChange:void 0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.E,{defaultValue:"disabled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{direction:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,value:"1",children:"Vanlig"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,value:"disabled",isDisabled:!0,children:"Disabled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,value:"3",isInvalid:!0,children:"Invalid"})]})})};Radio.parameters={storySource:{source:'{\n  argTypes: radioArgTypes,\n  args: { onChange: undefined },\n  render: (args) => (\n    <KvibRadioGroup defaultValue={"1"}>\n      <KvibStack direction={"row"}>\n        <KvibRadio {...args} value={"1"}>\n          En\n        </KvibRadio>\n        <KvibRadio {...args} value={"2"}>\n          To\n        </KvibRadio>\n        <KvibRadio {...args} value={"3"}>\n          Tre\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n  ),\n}'},...Radio.parameters},Color.parameters={storySource:{source:'{\n  args: { size: "lg" },\n  render: (args) => (\n    <KvibRadioGroup defaultValue="green">\n      <KvibStack direction={"row"}>\n        <KvibRadio {...args} value={"green"} colorScheme={"green"}>\n          Grønn\n        </KvibRadio>\n        <KvibRadio {...args} value={"blue"} colorScheme={"blue"}>\n          Blå\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n  ),\n}'},...Color.parameters},Size.parameters={storySource:{source:'{\n  args: { colorScheme: "green" },\n  render: (args) => (\n    <KvibRadioGroup defaultValue="3">\n      <KvibStack>\n        <KvibRadio {...args} size={"sm"} value="1">\n          sm\n        </KvibRadio>\n        <KvibRadio {...args} size={"md"} value="2">\n          md\n        </KvibRadio>\n        <KvibRadio {...args} size={"lg"} value="3">\n          lg\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n  ),\n}'},...Size.parameters},State.parameters={storySource:{source:'{\n  argTypes: radioArgTypes,\n  args: { onChange: undefined },\n  render: (args) => (\n    <KvibRadioGroup defaultValue={"disabled"}>\n      <KvibStack direction={"row"}>\n        <KvibRadio {...args} value={"1"}>\n          Vanlig\n        </KvibRadio>\n        <KvibRadio {...args} value={"disabled"} isDisabled>\n          Disabled\n        </KvibRadio>\n        <KvibRadio {...args} value={"3"} isInvalid>\n          Invalid\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n  ),\n}'},...State.parameters},Radio.parameters={...Radio.parameters,docs:{...Radio.parameters?.docs,source:{originalSource:'{\n  argTypes: radioArgTypes,\n  args: {\n    onChange: undefined\n  },\n  render: args => <KvibRadioGroup defaultValue={"1"}>\n      <KvibStack direction={"row"}>\n        <KvibRadio {...args} value={"1"}>\n          En\n        </KvibRadio>\n        <KvibRadio {...args} value={"2"}>\n          To\n        </KvibRadio>\n        <KvibRadio {...args} value={"3"}>\n          Tre\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n}',...Radio.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "lg"\n  },\n  render: args => <KvibRadioGroup defaultValue="green">\n      <KvibStack direction={"row"}>\n        <KvibRadio {...args} value={"green"} colorScheme={"green"}>\n          Grønn\n        </KvibRadio>\n        <KvibRadio {...args} value={"blue"} colorScheme={"blue"}>\n          Blå\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n}',...Color.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'{\n  args: {\n    colorScheme: "green"\n  },\n  render: args => <KvibRadioGroup defaultValue="3">\n      <KvibStack>\n        <KvibRadio {...args} size={"sm"} value="1">\n          sm\n        </KvibRadio>\n        <KvibRadio {...args} size={"md"} value="2">\n          md\n        </KvibRadio>\n        <KvibRadio {...args} size={"lg"} value="3">\n          lg\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n}',...Size.parameters?.docs?.source}}},State.parameters={...State.parameters,docs:{...State.parameters?.docs,source:{originalSource:'{\n  argTypes: radioArgTypes,\n  args: {\n    onChange: undefined\n  },\n  render: args => <KvibRadioGroup defaultValue={"disabled"}>\n      <KvibStack direction={"row"}>\n        <KvibRadio {...args} value={"1"}>\n          Vanlig\n        </KvibRadio>\n        <KvibRadio {...args} value={"disabled"} isDisabled>\n          Disabled\n        </KvibRadio>\n        <KvibRadio {...args} value={"3"} isInvalid>\n          Invalid\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n}',...State.parameters?.docs?.source}}};const __namedExportsOrder=["Radio","Color","Size","State"]}}]);