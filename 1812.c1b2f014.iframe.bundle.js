"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[1812],{"../../node_modules/@chakra-ui/progress/dist/chunk-TXZFUZNG.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SD:()=>getProgressProps,_4:()=>stripe,e$:()=>rotate,qB:()=>progress,t0:()=>spin});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");var spin=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.i7)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),rotate=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.i7)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),progress=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.i7)({"0%":{left:"-40%"},"100%":{left:"100%"}}),stripe=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.i7)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function getProgressProps(options){const{value=0,min,max,valueText,getValueText,isIndeterminate,role="progressbar"}=options,percent=function valueToPercent(value,min,max){return 100*(value-min)/(max-min)}(value,min,max);return{bind:{"data-indeterminate":isIndeterminate?"":void 0,"aria-valuemax":max,"aria-valuemin":min,"aria-valuenow":isIndeterminate?void 0:value,"aria-valuetext":(()=>{if(null!=value)return"function"==typeof getValueText?getValueText(value,percent):valueText})(),role},percent,value}}},"./stories/components/tilbakemelding/circular-progress/CircularProgress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CircularProgress:()=>CircularProgress_stories_CircularProgress,CircularProgressColors:()=>CircularProgressColors,CircularProgressIndeterminate:()=>CircularProgressIndeterminate,CircularProgressLabel:()=>CircularProgress_stories_CircularProgressLabel,CircularProgressSizes:()=>CircularProgressSizes,CircularProgressThickness:()=>CircularProgressThickness,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CircularProgress_stories});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Circle=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.circle,{cx:50,cy:50,r:42,fill:"transparent",...props});Circle.displayName="Circle";var chunk_TXZFUZNG=__webpack_require__("../../node_modules/@chakra-ui/progress/dist/chunk-TXZFUZNG.mjs"),Shape=props=>{const{size,isIndeterminate,...rest}=props;return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.svg,{viewBox:"0 0 100 100",__css:{width:size,height:size,animation:isIndeterminate?`${chunk_TXZFUZNG.e$} 2s linear infinite`:void 0},...rest})};Shape.displayName="Shape";var CircularProgress=(0,__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs").R)(((props,ref)=>{var _a;const{size="48px",max=100,min=0,valueText,getValueText,value,capIsRound,children,thickness="10px",color="#0078d4",trackColor="#edebe9",isIndeterminate,...rest}=props,progress=(0,chunk_TXZFUZNG.SD)({min,max,value,valueText,getValueText,isIndeterminate}),determinant=isIndeterminate?void 0:2.64*(null!=(_a=progress.percent)?_a:0),strokeDasharray=null==determinant?void 0:`${determinant} ${264-determinant}`,indicatorProps=isIndeterminate?{css:{animation:`${chunk_TXZFUZNG.t0} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},rootStyles={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:size};return(0,jsx_runtime.jsxs)(chunk_ZHQNHOQS.B.div,{ref,className:"chakra-progress",...progress.bind,...rest,__css:rootStyles,children:[(0,jsx_runtime.jsxs)(Shape,{size,isIndeterminate,children:[(0,jsx_runtime.jsx)(Circle,{stroke:trackColor,strokeWidth:thickness,className:"chakra-progress__track"}),(0,jsx_runtime.jsx)(Circle,{stroke:color,strokeWidth:thickness,className:"chakra-progress__indicator",strokeLinecap:capIsRound?"round":void 0,opacity:0!==progress.value||isIndeterminate?void 0:0,...indicatorProps})]}),children]})}));CircularProgress.displayName="CircularProgress";var chunk_3ASUQ6PA=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs"),CircularProgressLabel=(0,chunk_ZHQNHOQS.B)("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});CircularProgressLabel.displayName="CircularProgressLabel";const CircularProgress_stories={title:"Tilbakemelding/Circular Progress",component:CircularProgress,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{capIsRound:{description:"If true, the cap of the progress indicator will be rounded.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},color:{description:"A function that returns the desired valueText to use in place of the value",table:{type:{summary:"(value: number, percent: number) => string"}},control:"text"},getValueText:{description:"The color of the progress indicator. Use a color key in the theme object",table:{type:{summary:"string"}},control:"text"},isIndeterminate:{description:"If true, the cap of the progress indicator will be rounded.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},max:{description:"Maximum value defining 100% progress made (must be higher than 'min')",table:{type:{summary:"number"},defaultValue:{summary:100}},control:"number"},min:{description:"Minimum value defining 'no progress' (must be lower than 'max')",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},size:{description:"The size of the circular progress in CSS units",table:{type:{summary:"string | number"}},control:"text"},thickness:{description:"This defines the stroke width of the svg circle.",table:{type:{summary:"string | number"},defaultValue:{summary:"10px"}},control:"text"},trackColor:{description:"The color name of the progress track. Use a color key in the theme object",table:{type:{summary:"string"}},control:"text"},value:{description:"Current progress (must be between min/max)",table:{type:{summary:"number"}},control:"number"},valueText:{description:"The desired valueText to use in place of the value",table:{type:{summary:"string"}},control:"text"}}},CircularProgress_stories_CircularProgress={args:{value:80},render:args=>(0,jsx_runtime.jsx)(CircularProgress,{...args,"aria-label":"progress bar"})},CircularProgressSizes={args:{value:30},render:args=>(0,jsx_runtime.jsxs)(chunk_3ASUQ6PA.z,{children:[(0,jsx_runtime.jsx)(CircularProgress,{...args,size:"80px","aria-label":"progress bar 80px"}),(0,jsx_runtime.jsx)(CircularProgress,{...args,size:"120px","aria-label":"progress bar 120px"})]})},CircularProgressThickness={args:{value:70},render:args=>(0,jsx_runtime.jsxs)(chunk_3ASUQ6PA.z,{children:[(0,jsx_runtime.jsx)(CircularProgress,{...args,thickness:"4px","aria-label":"progress bar thin"}),(0,jsx_runtime.jsx)(CircularProgress,{...args,thickness:"10px","aria-label":"progress bar thick"})]})},CircularProgressColors={args:{value:70},render:args=>(0,jsx_runtime.jsxs)(chunk_3ASUQ6PA.z,{children:[(0,jsx_runtime.jsx)(CircularProgress,{...args,color:"green.400","aria-label":"progress bar green"}),(0,jsx_runtime.jsx)(CircularProgress,{...args,color:"blue.400","aria-label":"progress bar blue"})]})},CircularProgress_stories_CircularProgressLabel={args:{color:"green.400"},render:args=>(0,jsx_runtime.jsxs)(chunk_3ASUQ6PA.z,{children:[(0,jsx_runtime.jsx)(CircularProgress,{...args,value:70,"aria-label":"progress bar labeled 70%",children:(0,jsx_runtime.jsx)(CircularProgressLabel,{children:"70%"})}),(0,jsx_runtime.jsx)(CircularProgress,{...args,value:30,"aria-label":"progress bar labeled 30%",children:(0,jsx_runtime.jsx)(CircularProgressLabel,{children:"30%"})})]})},CircularProgressIndeterminate={args:{},render:args=>(0,jsx_runtime.jsx)(CircularProgress,{...args,isIndeterminate:!0,"aria-label":"progress bar indeterminate"})};CircularProgress_stories_CircularProgress.parameters={storySource:{source:'{\n  args: { value: 80 },\n  render: (args) => <KvibCircularProgress {...args} aria-label="progress bar" />,\n}'},...CircularProgress_stories_CircularProgress.parameters},CircularProgressSizes.parameters={storySource:{source:'{\n  args: { value: 30 },\n  render: (args) => (\n    <KvibHStack>\n      <KvibCircularProgress {...args} size="80px" aria-label="progress bar 80px" />\n      <KvibCircularProgress {...args} size="120px" aria-label="progress bar 120px" />\n    </KvibHStack>\n  ),\n}'},...CircularProgressSizes.parameters},CircularProgressThickness.parameters={storySource:{source:'{\n  args: { value: 70 },\n  render: (args) => (\n    <KvibHStack>\n      <KvibCircularProgress {...args} thickness="4px" aria-label="progress bar thin" />\n      <KvibCircularProgress {...args} thickness="10px" aria-label="progress bar thick" />\n    </KvibHStack>\n  ),\n}'},...CircularProgressThickness.parameters},CircularProgressColors.parameters={storySource:{source:'{\n  args: { value: 70 },\n  render: (args) => (\n    <KvibHStack>\n      <KvibCircularProgress {...args} color="green.400" aria-label="progress bar green" />\n      <KvibCircularProgress {...args} color="blue.400" aria-label="progress bar blue" />\n    </KvibHStack>\n  ),\n}'},...CircularProgressColors.parameters},CircularProgress_stories_CircularProgressLabel.parameters={storySource:{source:'{\n  args: { color: "green.400" },\n  render: (args) => (\n    <KvibHStack>\n      <KvibCircularProgress {...args} value={70} aria-label="progress bar labeled 70%">\n        <KvibCircularProgressLabel>70%</KvibCircularProgressLabel>\n      </KvibCircularProgress>\n      <KvibCircularProgress {...args} value={30} aria-label="progress bar labeled 30%">\n        <KvibCircularProgressLabel>30%</KvibCircularProgressLabel>\n      </KvibCircularProgress>\n    </KvibHStack>\n  ),\n}'},...CircularProgress_stories_CircularProgressLabel.parameters},CircularProgressIndeterminate.parameters={storySource:{source:'{\n  args: {},\n  render: (args) => <KvibCircularProgress {...args} isIndeterminate aria-label="progress bar indeterminate" />,\n}'},...CircularProgressIndeterminate.parameters},CircularProgress_stories_CircularProgress.parameters={...CircularProgress_stories_CircularProgress.parameters,docs:{...CircularProgress_stories_CircularProgress.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: 80\n  },\n  render: args => <KvibCircularProgress {...args} aria-label="progress bar" />\n}',...CircularProgress_stories_CircularProgress.parameters?.docs?.source}}},CircularProgressSizes.parameters={...CircularProgressSizes.parameters,docs:{...CircularProgressSizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: 30\n  },\n  render: args => <KvibHStack>\n      <KvibCircularProgress {...args} size="80px" aria-label="progress bar 80px" />\n      <KvibCircularProgress {...args} size="120px" aria-label="progress bar 120px" />\n    </KvibHStack>\n}',...CircularProgressSizes.parameters?.docs?.source}}},CircularProgressThickness.parameters={...CircularProgressThickness.parameters,docs:{...CircularProgressThickness.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: 70\n  },\n  render: args => <KvibHStack>\n      <KvibCircularProgress {...args} thickness="4px" aria-label="progress bar thin" />\n      <KvibCircularProgress {...args} thickness="10px" aria-label="progress bar thick" />\n    </KvibHStack>\n}',...CircularProgressThickness.parameters?.docs?.source}}},CircularProgressColors.parameters={...CircularProgressColors.parameters,docs:{...CircularProgressColors.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: 70\n  },\n  render: args => <KvibHStack>\n      <KvibCircularProgress {...args} color="green.400" aria-label="progress bar green" />\n      <KvibCircularProgress {...args} color="blue.400" aria-label="progress bar blue" />\n    </KvibHStack>\n}',...CircularProgressColors.parameters?.docs?.source}}},CircularProgress_stories_CircularProgressLabel.parameters={...CircularProgress_stories_CircularProgressLabel.parameters,docs:{...CircularProgress_stories_CircularProgressLabel.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "green.400"\n  },\n  render: args => <KvibHStack>\n      <KvibCircularProgress {...args} value={70} aria-label="progress bar labeled 70%">\n        <KvibCircularProgressLabel>70%</KvibCircularProgressLabel>\n      </KvibCircularProgress>\n      <KvibCircularProgress {...args} value={30} aria-label="progress bar labeled 30%">\n        <KvibCircularProgressLabel>30%</KvibCircularProgressLabel>\n      </KvibCircularProgress>\n    </KvibHStack>\n}',...CircularProgress_stories_CircularProgressLabel.parameters?.docs?.source}}},CircularProgressIndeterminate.parameters={...CircularProgressIndeterminate.parameters,docs:{...CircularProgressIndeterminate.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibCircularProgress {...args} isIndeterminate aria-label="progress bar indeterminate" />\n}',...CircularProgressIndeterminate.parameters?.docs?.source}}};const __namedExportsOrder=["CircularProgress","CircularProgressSizes","CircularProgressThickness","CircularProgressColors","CircularProgressLabel","CircularProgressIndeterminate"]}}]);