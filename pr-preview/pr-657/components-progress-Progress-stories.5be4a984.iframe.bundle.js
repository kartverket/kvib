"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[9747,2993],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,shared_utils_dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/progress/dist/chunk-TXZFUZNG.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ag:()=>stripe,O2:()=>spin,U1:()=>rotate,Wt:()=>getProgressProps,YD:()=>progress});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");var spin=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),rotate=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),progress=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}}),stripe=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function getProgressProps(options){const{value=0,min,max,valueText,getValueText,isIndeterminate,role="progressbar"}=options,percent=function valueToPercent(value,min,max){return 100*(value-min)/(max-min)}(value,min,max);return{bind:{"data-indeterminate":isIndeterminate?"":void 0,"aria-valuemax":max,"aria-valuemin":min,"aria-valuenow":isIndeterminate?void 0:value,"aria-valuetext":(()=>{if(null!=value)return"function"==typeof getValueText?getValueText(value,percent):valueText})(),role},percent,value}}},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./stories/components/progress/Progress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Progress:()=>Progress_stories_Progress,ProgressAnimated:()=>ProgressAnimated,ProgressColors:()=>ProgressColors,ProgressSizes:()=>ProgressSizes,ProgressStripe:()=>ProgressStripe,ProgressStripeAnimated:()=>ProgressStripeAnimated,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Progress_stories});var chunk_TXZFUZNG=__webpack_require__("../../node_modules/@chakra-ui/progress/dist/chunk-TXZFUZNG.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_DMO4EI7P=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),react_context_dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),[ProgressStylesProvider,useProgressStyles]=(0,react_context_dist.k)({name:"ProgressStylesContext",errorMessage:"useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Progress />\" "}),ProgressFilledTrack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{min,max,value,isIndeterminate,role,...rest}=props,progress2=(0,chunk_TXZFUZNG.Wt)({value,min,max,isIndeterminate,role}),trackStyles={height:"100%",...useProgressStyles().filledTrack};return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,style:{width:`${progress2.percent}%`,...rest.style},...progress2.bind,...rest,__css:trackStyles})})),Progress=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{var _a;const{value,min=0,max=100,hasStripe,isAnimated,children,borderRadius:propBorderRadius,isIndeterminate,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledBy,"aria-valuetext":ariaValueText,title,role,...rest}=(0,dist.Lr)(props),styles=(0,chunk_DMO4EI7P.jC)("Progress",props),borderRadius=null!=propBorderRadius?propBorderRadius:null==(_a=styles.track)?void 0:_a.borderRadius,stripeAnimation={animation:`${chunk_TXZFUZNG.Ag} 1s linear infinite`},css={...!isIndeterminate&&hasStripe&&isAnimated&&stripeAnimation,...isIndeterminate&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${chunk_TXZFUZNG.YD} 1s ease infinite normal none running`}},trackStyles={overflow:"hidden",position:"relative",...styles.track};return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,borderRadius,__css:trackStyles,...rest,children:(0,jsx_runtime.jsxs)(ProgressStylesProvider,{value:styles,children:[(0,jsx_runtime.jsx)(ProgressFilledTrack,{"aria-label":ariaLabel,"aria-labelledby":ariaLabelledBy,"aria-valuetext":ariaValueText,min,max,value,isIndeterminate,css,borderRadius,title,role}),children]})})}));Progress.displayName="Progress";var chunk_ZHMYA64R=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs");const Progress_stories={title:"Komponenter/Progress",component:Progress,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{colorScheme:{description:"The visual color appearance of the component",table:{type:{summary:'"gray" | "red" | "green" | "blue"'},defaultValue:{summary:"blue"}},options:["gray","red","yellow","green","blue"],control:{type:"radio"}},hasStripe:{description:"If true, the progress bar will show stripe",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isAnimated:{description:"If true, and hasStripe is true, the stripes will be animated",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isIndeterminate:{description:"If true, the progress will be indeterminate and the value prop will be ignored",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},max:{description:"The maximum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:100}},control:"number"},min:{description:"The minimum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},size:{description:"The size of the Progress",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},value:{description:"The value of the progress indicator. If undefined the progress bar will be in indeterminate state",table:{type:{summary:"number"}},control:"number"}}},Progress_stories_Progress={args:{value:80},render:args=>(0,jsx_runtime.jsx)(Progress,{...args,"aria-label":"progress bar"})},ProgressStripe={args:{value:60,hasStripe:!0},render:args=>(0,jsx_runtime.jsx)(Progress,{...args,"aria-label":"progress bar striped"})},ProgressStripeAnimated={args:{value:60,hasStripe:!0,isAnimated:!0},render:args=>(0,jsx_runtime.jsx)(Progress,{...args,"aria-label":"progress bar striped animated"})},ProgressSizes={args:{value:20,colorScheme:"green"},render:args=>(0,jsx_runtime.jsxs)(chunk_ZHMYA64R.K,{spacing:5,children:[(0,jsx_runtime.jsx)(Progress,{...args,size:"sm","aria-label":"progress bar small"}),(0,jsx_runtime.jsx)(Progress,{...args,size:"md","aria-label":"progress bar medium"}),(0,jsx_runtime.jsx)(Progress,{...args,size:"lg","aria-label":"progress bar large"}),(0,jsx_runtime.jsx)(Progress,{...args,height:"32px","aria-label":"progress bar 32px"})]})},ProgressColors={args:{value:40,size:"sm"},render:args=>(0,jsx_runtime.jsxs)(chunk_ZHMYA64R.K,{spacing:5,children:[(0,jsx_runtime.jsx)(Progress,{...args,colorScheme:"green","aria-label":"progress bar green"}),(0,jsx_runtime.jsx)(Progress,{...args,colorScheme:"blue","aria-label":"progress bar blue"}),(0,jsx_runtime.jsx)(Progress,{...args,colorScheme:"red","aria-label":"progress bar red"}),(0,jsx_runtime.jsx)(Progress,{...args,colorScheme:"gray","aria-label":"progress bar gray"})]})},ProgressAnimated={args:{isIndeterminate:!0,size:"xs"},render:args=>(0,jsx_runtime.jsx)(Progress,{...args,"aria-label":"progress bar indeterminate"})};Progress_stories_Progress.parameters={...Progress_stories_Progress.parameters,docs:{...Progress_stories_Progress.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: 80\n  },\n  render: args => <KvibProgress {...args} aria-label="progress bar" />\n}',...Progress_stories_Progress.parameters?.docs?.source}}},ProgressStripe.parameters={...ProgressStripe.parameters,docs:{...ProgressStripe.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: 60,\n    hasStripe: true\n  },\n  render: args => <KvibProgress {...args} aria-label="progress bar striped" />\n}',...ProgressStripe.parameters?.docs?.source}}},ProgressStripeAnimated.parameters={...ProgressStripeAnimated.parameters,docs:{...ProgressStripeAnimated.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: 60,\n    hasStripe: true,\n    isAnimated: true\n  },\n  render: args => <KvibProgress {...args} aria-label="progress bar striped animated" />\n}',...ProgressStripeAnimated.parameters?.docs?.source}}},ProgressSizes.parameters={...ProgressSizes.parameters,docs:{...ProgressSizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: 20,\n    colorScheme: "green"\n  },\n  render: args => <KvibStack spacing={5}>\n      <KvibProgress {...args} size="sm" aria-label="progress bar small" />\n      <KvibProgress {...args} size="md" aria-label="progress bar medium" />\n      <KvibProgress {...args} size="lg" aria-label="progress bar large" />\n      <KvibProgress {...args} height="32px" aria-label="progress bar 32px" />\n    </KvibStack>\n}',...ProgressSizes.parameters?.docs?.source}}},ProgressColors.parameters={...ProgressColors.parameters,docs:{...ProgressColors.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: 40,\n    size: "sm"\n  },\n  render: args => <KvibStack spacing={5}>\n      <KvibProgress {...args} colorScheme="green" aria-label="progress bar green" />\n      <KvibProgress {...args} colorScheme="blue" aria-label="progress bar blue" />\n      <KvibProgress {...args} colorScheme="red" aria-label="progress bar red" />\n      <KvibProgress {...args} colorScheme="gray" aria-label="progress bar gray" />\n    </KvibStack>\n}',...ProgressColors.parameters?.docs?.source}}},ProgressAnimated.parameters={...ProgressAnimated.parameters,docs:{...ProgressAnimated.parameters?.docs,source:{originalSource:'{\n  args: {\n    isIndeterminate: true,\n    size: "xs"\n  },\n  render: args => <KvibProgress {...args} aria-label="progress bar indeterminate" />\n}',...ProgressAnimated.parameters?.docs?.source}}},Progress_stories_Progress.parameters={storySource:{source:'{\n  args: {\n    value: 80\n  },\n  render: args => <KvibProgress {...args} aria-label="progress bar" />\n}'},...Progress_stories_Progress.parameters},ProgressStripe.parameters={storySource:{source:'{\n  args: {\n    value: 60,\n    hasStripe: true\n  },\n  render: args => <KvibProgress {...args} aria-label="progress bar striped" />\n}'},...ProgressStripe.parameters},ProgressStripeAnimated.parameters={storySource:{source:'{\n  args: {\n    value: 60,\n    hasStripe: true,\n    isAnimated: true\n  },\n  render: args => <KvibProgress {...args} aria-label="progress bar striped animated" />\n}'},...ProgressStripeAnimated.parameters},ProgressSizes.parameters={storySource:{source:'{\n  args: {\n    value: 20,\n    colorScheme: "green"\n  },\n  render: args => <KvibStack spacing={5}>\n      <KvibProgress {...args} size="sm" aria-label="progress bar small" />\n      <KvibProgress {...args} size="md" aria-label="progress bar medium" />\n      <KvibProgress {...args} size="lg" aria-label="progress bar large" />\n      <KvibProgress {...args} height="32px" aria-label="progress bar 32px" />\n    </KvibStack>\n}'},...ProgressSizes.parameters},ProgressColors.parameters={storySource:{source:'{\n  args: {\n    value: 40,\n    size: "sm"\n  },\n  render: args => <KvibStack spacing={5}>\n      <KvibProgress {...args} colorScheme="green" aria-label="progress bar green" />\n      <KvibProgress {...args} colorScheme="blue" aria-label="progress bar blue" />\n      <KvibProgress {...args} colorScheme="red" aria-label="progress bar red" />\n      <KvibProgress {...args} colorScheme="gray" aria-label="progress bar gray" />\n    </KvibStack>\n}'},...ProgressColors.parameters},ProgressAnimated.parameters={storySource:{source:'{\n  args: {\n    isIndeterminate: true,\n    size: "xs"\n  },\n  render: args => <KvibProgress {...args} aria-label="progress bar indeterminate" />\n}'},...ProgressAnimated.parameters};const __namedExportsOrder=["Progress","ProgressStripe","ProgressStripeAnimated","ProgressSizes","ProgressColors","ProgressAnimated"]}}]);