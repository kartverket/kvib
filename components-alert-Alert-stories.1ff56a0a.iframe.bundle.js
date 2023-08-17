"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[1732],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XQ:()=>mapResponsive});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs");Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}},"../../node_modules/@chakra-ui/layout/dist/chunk-MUMUYFOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>VStack});var _chunk_O5CRURSQ_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),VStack=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_O5CRURSQ_mjs__WEBPACK_IMPORTED_MODULE_2__.K,{align:"center",...props,direction:"column",ref})));VStack.displayName="VStack"},"../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:(0,chunk_G72KV6MB.XQ)(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./stories/components/alert/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,AlertColors:()=>AlertColors,AlertComposition:()=>AlertComposition,AlertStatus:()=>AlertStatus,AlertVariants:()=>AlertVariants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-RWQIUCJP.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-TEHNKISS.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-FRKYNQ2N.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-FBQ6TKVQ.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-MUMUYFOI.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/react/src/icon/Icon.tsx"),_kvib_react_src_theme_tokens__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/react/src/theme/tokens/colors.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Alert",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{colorScheme:{description:"",options:["green","blue","gray","red","orange","purple"],defaultValue:{summary:"blue"},control:{type:"radio"}},status:{description:"This affects the color scheme and icon used. Setting the colorScheme prop will overide the colorScheme of the status.",options:["error","success","warning","info"],defaultValue:{summary:"info"},control:{type:"radio"}},variant:{description:"",options:["subtle","solid","left-accent","top-accent"],defaultValue:{summary:"subtle"},control:{type:"radio"}}}},Alert={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]})},AlertStatus={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__.g,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{status:"success",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{status:"info",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{status:"warning",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{status:"error",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]})]})},AlertColors={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__.g,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{colorScheme:"green",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{colorScheme:"blue",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{colorScheme:"gray",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{colorScheme:"red",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{colorScheme:"orange",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{colorScheme:"purple",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]})]})},AlertVariants={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__.g,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{variant:"subtle",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{variant:"solid",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{variant:"left-accent",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{variant:"top-accent",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{children:"This is the alert title!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{children:"This is the alert description."})]})]})},AlertComposition={args:{colorScheme:"blue"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.b,{status:"success",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",minHeight:"200px",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.z,{boxSize:"40px",mr:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.C,{mt:4,mb:1,fontSize:"lg",children:"Sammensatt alert!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.X,{maxWidth:"m",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__.g,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Du kan sette sammen din egen alert, med egen layout, og til og med inkludere andre komponenter inni denne."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_6__.J,{icon:"favorite",size:48,color:_kvib_react_src_theme_tokens__WEBPACK_IMPORTED_MODULE_7__.O.red[500],isFilled:!0})]})})]})};Alert.parameters={...Alert.parameters,docs:{...Alert.parameters?.docs,source:{originalSource:"{\n  render: args => <ChakraAlert {...args}>\n      <AlertIcon />\n      <AlertTitle>This is the alert title!</AlertTitle>\n      <AlertDescription>This is the alert description.</AlertDescription>\n    </ChakraAlert>\n}",...Alert.parameters?.docs?.source}}},AlertStatus.parameters={...AlertStatus.parameters,docs:{...AlertStatus.parameters?.docs,source:{originalSource:'{\n  render: args => <VStack>\n      <ChakraAlert status={"success"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert status={"info"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert status={"warning"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert status={"error"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n    </VStack>\n}',...AlertStatus.parameters?.docs?.source}}},AlertColors.parameters={...AlertColors.parameters,docs:{...AlertColors.parameters?.docs,source:{originalSource:'{\n  render: args => <VStack>\n      <ChakraAlert colorScheme={"green"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert colorScheme={"blue"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert colorScheme={"gray"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert colorScheme={"red"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert colorScheme={"orange"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert colorScheme={"purple"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n    </VStack>\n}',...AlertColors.parameters?.docs?.source}}},AlertVariants.parameters={...AlertVariants.parameters,docs:{...AlertVariants.parameters?.docs,source:{originalSource:'{\n  render: args => <VStack>\n      <ChakraAlert variant={"subtle"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert variant={"solid"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert variant={"left-accent"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n      <ChakraAlert variant={"top-accent"} {...args}>\n        <AlertIcon />\n        <AlertTitle>This is the alert title!</AlertTitle>\n        <AlertDescription>This is the alert description.</AlertDescription>\n      </ChakraAlert>\n    </VStack>\n}',...AlertVariants.parameters?.docs?.source}}},AlertComposition.parameters={...AlertComposition.parameters,docs:{...AlertComposition.parameters?.docs,source:{originalSource:'{\n  args: {\n    colorScheme: "blue"\n  },\n  render: args => <ChakraAlert status="success" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" minHeight="200px" {...args}>\n      <AlertIcon boxSize="40px" mr={0} />\n      <AlertTitle mt={4} mb={1} fontSize="lg">\n        Sammensatt alert!\n      </AlertTitle>\n      <AlertDescription maxWidth="m">\n        <VStack>\n          <p>\n            Du kan sette sammen din egen alert, med egen layout, og til og med inkludere andre komponenter inni denne.\n          </p>\n          <Icon icon="favorite" size={48} color={colors.red[500]} isFilled />\n        </VStack>\n      </AlertDescription>\n    </ChakraAlert>\n}',...AlertComposition.parameters?.docs?.source}}};const __namedExportsOrder=["Alert","AlertStatus","AlertColors","AlertVariants","AlertComposition"]},"../../packages/react/src/icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Icon=({icon,size,color,weight,grade,isFilled=!1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"material-symbols-rounded",style:{fontSize:size,color,fontVariationSettings:`'FILL' ${isFilled?1:0}, 'wght' ${weight||600}, 'GRAD' ${grade||0}`},children:icon});Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"The icon from Material symbols you want to display",name:"icon",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"The font size of the icon",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"20"},{value:"24"},{value:"40"},{value:"48"}]}},color:{defaultValue:null,description:"The color of the icon",name:"color",required:!1,type:{name:"string | undefined"}},weight:{defaultValue:null,description:"The weight of the icon",name:"weight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"100"},{value:"200"},{value:"300"},{value:"400"},{value:"500"},{value:"600"},{value:"700"}]}},grade:{defaultValue:null,description:"The of grade the icon",name:"grade",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"0"},{value:"200"},{value:"-25"}]}},isFilled:{defaultValue:{value:"false"},description:"Decides whether the icon is filled or not",name:"isFilled",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../packages/react/src/icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}}}]);