"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[5624],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XQ:()=>mapResponsive});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs");Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}},"../../node_modules/@chakra-ui/layout/dist/chunk-HUQHYERK.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>HStack});var _chunk_O5CRURSQ_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),HStack=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_O5CRURSQ_mjs__WEBPACK_IMPORTED_MODULE_2__.K,{align:"center",...props,direction:"row",ref})));HStack.displayName="HStack"},"../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:(0,chunk_G72KV6MB.XQ)(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./stories/components/data-display/tag/Tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tag:()=>Tag_stories_Tag,TagClose:()=>TagClose,TagColors:()=>TagColors,TagSizes:()=>TagSizes,TagVariants:()=>TagVariants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tag_stories});var chunk_DKFDJSXF=__webpack_require__("../../node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),[TagStylesProvider,useTagStyles]=(0,dist.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),Tag=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=(0,chunk_T2VHL7RE.jC)("Tag",props),ownProps=(0,styled_system_dist.Lr)(props),containerStyles={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...styles.container};return(0,jsx_runtime.jsx)(TagStylesProvider,{value:styles,children:(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{ref,...ownProps,__css:containerStyles})})}));Tag.displayName="Tag";var TagLabel=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=useTagStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{ref,noOfLines:1,...props,__css:styles.label})}));TagLabel.displayName="TagLabel",(0,chunk_QEVFQ4EU.G)(((props,ref)=>(0,jsx_runtime.jsx)(chunk_DKFDJSXF.J,{ref,verticalAlign:"top",marginEnd:"0.5rem",...props}))).displayName="TagLeftIcon",(0,chunk_QEVFQ4EU.G)(((props,ref)=>(0,jsx_runtime.jsx)(chunk_DKFDJSXF.J,{ref,verticalAlign:"top",marginStart:"0.5rem",...props}))).displayName="TagRightIcon";var TagCloseIcon=props=>(0,jsx_runtime.jsx)(chunk_DKFDJSXF.J,{verticalAlign:"inherit",viewBox:"0 0 512 512",...props,children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});TagCloseIcon.displayName="TagCloseIcon";var TagCloseButton=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isDisabled,children,...rest}=props,btnStyles={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...useTagStyles().closeButton};return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.button,{ref,"aria-label":"close",...rest,type:"button",disabled:isDisabled,__css:btnStyles,children:children||(0,jsx_runtime.jsx)(TagCloseIcon,{})})}));TagCloseButton.displayName="TagCloseButton";var chunk_HUQHYERK=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-HUQHYERK.mjs"),react=__webpack_require__("../../node_modules/react/index.js");const Tag_stories={title:"Komponenter/Data Display/Tag",component:Tag,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the Tag",table:{type:{summary:"subtle | solid | outline"},defaultValue:{summary:"subtle"}},options:["subtle","solid","outline"],control:"radio"},colorScheme:{description:"The visual color appearance of the Tag",table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the Tag",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},Tag_stories_Tag={args:{},render:args=>(0,jsx_runtime.jsx)(Tag,{...args,children:"Eksempeltag"})},TagColors={args:{},render:args=>(0,jsx_runtime.jsx)(chunk_HUQHYERK.U,{spacing:4,children:["green","blue","red","gray"].map((colorScheme=>(0,react.createElement)(Tag,{...args,key:colorScheme,colorScheme},colorScheme)))})},TagSizes={args:{variant:"solid",colorScheme:"green"},render:args=>(0,jsx_runtime.jsx)(chunk_HUQHYERK.U,{spacing:4,children:["sm","md","lg"].map((size=>(0,react.createElement)(Tag,{...args,size,key:size},size)))})},TagVariants={args:{colorScheme:"blue"},render:args=>(0,jsx_runtime.jsx)(chunk_HUQHYERK.U,{spacing:4,children:["subtle","solid","outline"].map((variant=>(0,react.createElement)(Tag,{...args,variant,key:variant},variant)))})},TagClose={args:{colorScheme:"green",variant:"solid",size:"lg"},render:args=>(0,jsx_runtime.jsxs)(Tag,{...args,children:[(0,jsx_runtime.jsx)(TagLabel,{children:"Green"}),(0,jsx_runtime.jsx)(TagCloseButton,{})]})};Tag_stories_Tag.parameters={...Tag_stories_Tag.parameters,docs:{...Tag_stories_Tag.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <KvibTag {...args}>Eksempeltag</KvibTag>\n}",...Tag_stories_Tag.parameters?.docs?.source}}},TagColors.parameters={...TagColors.parameters,docs:{...TagColors.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibHStack spacing={4}>\n      {["green", "blue", "red", "gray"].map(colorScheme => <KvibTag {...args} key={colorScheme} colorScheme={colorScheme}>\n          {colorScheme}\n        </KvibTag>)}\n    </KvibHStack>\n}',...TagColors.parameters?.docs?.source}}},TagSizes.parameters={...TagSizes.parameters,docs:{...TagSizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "solid",\n    colorScheme: "green"\n  },\n  render: args => <KvibHStack spacing={4}>\n      {["sm", "md", "lg"].map(size => <KvibTag {...args} size={size} key={size}>\n          {size}\n        </KvibTag>)}\n    </KvibHStack>\n}',...TagSizes.parameters?.docs?.source}}},TagVariants.parameters={...TagVariants.parameters,docs:{...TagVariants.parameters?.docs,source:{originalSource:'{\n  args: {\n    colorScheme: "blue"\n  },\n  render: args => <KvibHStack spacing={4}>\n      {["subtle", "solid", "outline"].map(variant => <KvibTag {...args} variant={variant} key={variant}>\n          {variant}\n        </KvibTag>)}\n    </KvibHStack>\n}',...TagVariants.parameters?.docs?.source}}},TagClose.parameters={...TagClose.parameters,docs:{...TagClose.parameters?.docs,source:{originalSource:'{\n  args: {\n    colorScheme: "green",\n    variant: "solid",\n    size: "lg"\n  },\n  render: args => <KvibTag {...args}>\n      <KvibTagLabel>Green</KvibTagLabel>\n      <KvibTagCloseButton />\n    </KvibTag>\n}',...TagClose.parameters?.docs?.source}}};const __namedExportsOrder=["Tag","TagColors","TagSizes","TagVariants","TagClose"]}}]);