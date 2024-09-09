"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[1128],{"./stories/components/tilbakemelding/stepper/Stepper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Stepper:()=>Stepper_stories_Stepper,StepperClick:()=>StepperClick,StepperColors:()=>StepperColors,StepperOrientation:()=>StepperOrientation,StepperProgressbar:()=>StepperProgressbar,StepperSizes:()=>StepperSizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Stepper_stories});var dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),chunk_MFVQSVQB=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-MFVQSVQB.mjs"),[StepContextProvider,useStepContext]=(0,dist.q)({name:"StepContext"}),[StepperStylesProvider,useStepperStyles]=(0,chunk_MFVQSVQB.Wh)("Stepper"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Stepper=(0,chunk_ZJJGQIVY.R)((function Stepper2(props,ref){const styles=(0,chunk_DMO4EI7P.o5)("Stepper",props),{children,index,orientation="horizontal",showLastSeparator=!1,...restProps}=(0,styled_system_dist.MN)(props),stepElements=react.Children.toArray(children),stepCount=stepElements.length;return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.div,{ref,"aria-label":"Progress","data-orientation":orientation,...restProps,__css:styles.stepper,className:(0,shared_utils_dist.cx)("chakra-stepper",props.className),children:(0,jsx_runtime.jsx)(StepperStylesProvider,{value:styles,children:stepElements.map(((child,index2)=>{return(0,jsx_runtime.jsx)(StepContextProvider,{value:{index:index2,status:(step=index2,step<index?"complete":step>index?"incomplete":"active"),orientation,showLastSeparator,count:stepCount,isFirst:0===index2,isLast:index2===stepCount-1},children:child},index2);var step}))})})}));function useSteps(props={}){const{index=0,count}=props,[activeStep,setActiveStep]=(0,react.useState)(index);return{activeStep,setActiveStep,activeStepPercent:activeStep/("number"==typeof count?count-1:0),isActiveStep:step=>step===activeStep,isCompleteStep:step=>step<activeStep,isIncompleteStep:step=>step>activeStep,getStatus:step=>step<activeStep?"complete":step>activeStep?"incomplete":"active",goToNext(){setActiveStep((step=>"number"==typeof count?Math.min(count,step+1):step+1))},goToPrevious(){setActiveStep((step=>Math.max(0,step-1)))}}}var Step=(0,chunk_ZJJGQIVY.R)((function Step2(props,ref){const{orientation,status,showLastSeparator}=useStepContext(),styles=useStepperStyles();return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.div,{ref,"data-status":status,"data-orientation":orientation,"data-stretch":(0,shared_utils_dist.sE)(showLastSeparator),__css:styles.step,...props,className:(0,shared_utils_dist.cx)("chakra-step",props.className)})}));function StepIndicator(props){const{status}=useStepContext(),styles=useStepperStyles();return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.div,{"data-status":status,...props,__css:styles.indicator,className:(0,shared_utils_dist.cx)("chakra-step__indicator",props.className)})}function chunk_ZVCNMXD3_StepStatus(props){const{complete,incomplete,active}=props,context=useStepContext();let render=null;switch(context.status){case"complete":render=(0,shared_utils_dist.Jg)(complete,context);break;case"incomplete":render=(0,shared_utils_dist.Jg)(incomplete,context);break;case"active":render=(0,shared_utils_dist.Jg)(active,context)}return render?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:render}):null}function CheckIcon(props){return(0,jsx_runtime.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",height:"1em",width:"1em",...props,children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}var chunk_2GBDXOMA=__webpack_require__("../../node_modules/@chakra-ui/icon/dist/chunk-2GBDXOMA.mjs");function chunk_2EGA5JYM_StepIcon(props){const{status}=useStepContext(),styles=useStepperStyles(),icon="complete"===status?CheckIcon:void 0;return(0,jsx_runtime.jsx)(chunk_2GBDXOMA.I,{as:icon,__css:styles.icon,...props,className:(0,shared_utils_dist.cx)("chakra-step__icon",props.className)})}var chunk_D3AI6OO6_StepNumber=(0,chunk_ZJJGQIVY.R)((function StepNumber2(props,ref){const{children,...restProps}=props,{status,index}=useStepContext(),styles=useStepperStyles();return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.div,{ref,"data-status":status,__css:styles.number,...restProps,className:(0,shared_utils_dist.cx)("chakra-step__number",props.className),children:children||index+1})})),chunk_PULVB27S=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),StepTitle=(0,chunk_ZJJGQIVY.R)((function StepTitle2(props,ref){const{status}=useStepContext(),styles=useStepperStyles();return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.h3,{ref,"data-status":status,...props,__css:styles.title,className:(0,shared_utils_dist.cx)("chakra-step__title",props.className)})})),StepDescription=(0,chunk_ZJJGQIVY.R)((function StepDescription2(props,ref){const{status}=useStepContext(),styles=useStepperStyles();return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.p,{ref,"data-status":status,...props,className:(0,shared_utils_dist.cx)("chakra-step__description",props.className),__css:styles.description})})),StepSeparator=(0,chunk_ZJJGQIVY.R)((function StepSeparator2(props,ref){const{orientation,status,isLast,showLastSeparator}=useStepContext(),styles=useStepperStyles();return isLast&&!showLastSeparator?null:(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.div,{ref,role:"separator","data-orientation":orientation,"data-status":status,__css:styles.separator,...props,className:(0,shared_utils_dist.cx)("chakra-step__separator",props.className)})})),chunk_ZHMYA64R=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),chunk_2OOHT3W5=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs");const Stepper_stories={title:"Tilbakemelding/Stepper",component:Stepper,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{index:{name:"index*",description:"The active step index",table:{type:{summary:"number"}},control:"number"},children:{description:"The children of the stepper. Must be Step components",table:{type:{summary:"ReactElement[]"}},control:"array"}}},steps=[{title:"Første",description:"Kontaktinfo"},{title:"Andre",description:"Dato og tid"},{title:"Tredje",description:"Velg rom"}],StepperExample=({...args})=>{const{activeStep}=useSteps({index:1,count:steps.length});return(0,jsx_runtime.jsx)(Stepper,{...args,index:activeStep,children:steps.map(((step,index)=>(0,jsx_runtime.jsxs)(Step,{children:[(0,jsx_runtime.jsx)(StepIndicator,{children:(0,jsx_runtime.jsx)(chunk_ZVCNMXD3_StepStatus,{complete:(0,jsx_runtime.jsx)(chunk_2EGA5JYM_StepIcon,{}),incomplete:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{}),active:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{})})}),(0,jsx_runtime.jsxs)(chunk_PULVB27S.az,{flexShrink:"0",children:[(0,jsx_runtime.jsx)(StepTitle,{children:step.title}),(0,jsx_runtime.jsx)(StepDescription,{children:step.description})]}),(0,jsx_runtime.jsx)(StepSeparator,{})]},index)))})};StepperExample.displayName="StepperExample";const Stepper_stories_Stepper={args:{},render:args=>(0,jsx_runtime.jsx)(StepperExample,{...args})},StepperOrientationExample=({...args})=>{const{activeStep}=useSteps({index:1,count:steps.length});return(0,jsx_runtime.jsx)(Stepper,{...args,index:activeStep,orientation:"vertical",height:"400px",gap:"0",children:steps.map(((step,index)=>(0,jsx_runtime.jsxs)(Step,{children:[(0,jsx_runtime.jsx)(StepIndicator,{children:(0,jsx_runtime.jsx)(chunk_ZVCNMXD3_StepStatus,{complete:(0,jsx_runtime.jsx)(chunk_2EGA5JYM_StepIcon,{}),incomplete:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{}),active:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{})})}),(0,jsx_runtime.jsxs)(chunk_PULVB27S.az,{flexShrink:"0",children:[(0,jsx_runtime.jsx)(StepTitle,{children:step.title}),(0,jsx_runtime.jsx)(StepDescription,{children:step.description})]}),(0,jsx_runtime.jsx)(StepSeparator,{})]},index)))})};StepperOrientationExample.displayName="StepperOrientationExample";const StepperOrientation={args:{},render:args=>(0,jsx_runtime.jsx)(StepperOrientationExample,{...args})},StepperSizeExample=({...args})=>{const{activeStep}=useSteps({index:1,count:steps.length});return(0,jsx_runtime.jsx)(Stepper,{...args,size:"lg",index:activeStep,children:steps.map(((step,index)=>(0,jsx_runtime.jsxs)(Step,{children:[(0,jsx_runtime.jsx)(StepIndicator,{children:(0,jsx_runtime.jsx)(chunk_ZVCNMXD3_StepStatus,{complete:(0,jsx_runtime.jsx)(chunk_2EGA5JYM_StepIcon,{}),incomplete:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{}),active:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{})})}),(0,jsx_runtime.jsxs)(chunk_PULVB27S.az,{flexShrink:"0",children:[(0,jsx_runtime.jsx)(StepTitle,{children:step.title}),(0,jsx_runtime.jsx)(StepDescription,{children:step.description})]}),(0,jsx_runtime.jsx)(StepSeparator,{})]},index)))})};StepperSizeExample.displayName="StepperSizeExample";const StepperSizes={args:{},render:args=>(0,jsx_runtime.jsx)(StepperSizeExample,{...args})},StepperColorExample=({...args})=>{const{activeStep}=useSteps({index:1,count:steps.length});return(0,jsx_runtime.jsx)(Stepper,{...args,size:"lg",colorScheme:"red",index:activeStep,children:steps.map(((step,index)=>(0,jsx_runtime.jsxs)(Step,{children:[(0,jsx_runtime.jsx)(StepIndicator,{children:(0,jsx_runtime.jsx)(chunk_ZVCNMXD3_StepStatus,{complete:(0,jsx_runtime.jsx)(chunk_2EGA5JYM_StepIcon,{}),incomplete:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{}),active:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{})})}),(0,jsx_runtime.jsxs)(chunk_PULVB27S.az,{flexShrink:"0",children:[(0,jsx_runtime.jsx)(StepTitle,{children:step.title}),(0,jsx_runtime.jsx)(StepDescription,{children:step.description})]}),(0,jsx_runtime.jsx)(StepSeparator,{})]},index)))})};StepperColorExample.displayName="StepperColorExample";const StepperColors={args:{},render:args=>(0,jsx_runtime.jsx)(StepperColorExample,{...args})},StepperClickExample=({...args})=>{const{activeStep,setActiveStep}=useSteps({index:1,count:steps.length});return(0,jsx_runtime.jsx)(Stepper,{...args,size:"lg",index:activeStep,children:steps.map(((step,index)=>(0,jsx_runtime.jsxs)(Step,{onClick:()=>setActiveStep(index),children:[(0,jsx_runtime.jsx)(StepIndicator,{children:(0,jsx_runtime.jsx)(chunk_ZVCNMXD3_StepStatus,{complete:(0,jsx_runtime.jsx)(chunk_2EGA5JYM_StepIcon,{}),incomplete:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{}),active:(0,jsx_runtime.jsx)(chunk_D3AI6OO6_StepNumber,{})})}),(0,jsx_runtime.jsxs)(chunk_PULVB27S.az,{flexShrink:"0",children:[(0,jsx_runtime.jsx)(StepTitle,{children:step.title}),(0,jsx_runtime.jsx)(StepDescription,{children:step.description})]}),(0,jsx_runtime.jsx)(StepSeparator,{})]},index)))})};StepperClickExample.displayName="StepperClickExample";const StepperClick={args:{},render:args=>(0,jsx_runtime.jsx)(StepperClickExample,{...args})},StepperProgressbarExample=({...args})=>{const{activeStep}=useSteps({index:1,count:steps.length}),activeStepText=steps[activeStep].description;return(0,jsx_runtime.jsxs)(chunk_ZHMYA64R.B,{children:[(0,jsx_runtime.jsx)(Stepper,{...args,size:"sm",index:activeStep,gap:"0",children:steps.map(((_step,index)=>(0,jsx_runtime.jsxs)(Step,{"aria-label":index.toString(),role:"status",children:[(0,jsx_runtime.jsx)(StepIndicator,{children:(0,jsx_runtime.jsx)(chunk_ZVCNMXD3_StepStatus,{complete:(0,jsx_runtime.jsx)(chunk_2EGA5JYM_StepIcon,{})})}),(0,jsx_runtime.jsx)(StepSeparator,{})]},index)))}),(0,jsx_runtime.jsxs)(chunk_2OOHT3W5.E,{children:["Step ",activeStep+1,": ",(0,jsx_runtime.jsx)("b",{children:activeStepText})]})]})};StepperProgressbarExample.displayName="StepperProgressbarExample";const StepperProgressbar={args:{},render:args=>(0,jsx_runtime.jsx)(StepperProgressbarExample,{...args})};Stepper_stories_Stepper.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <StepperExample {...args} />,\n}"},...Stepper_stories_Stepper.parameters},StepperOrientation.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <StepperOrientationExample {...args} />,\n}"},...StepperOrientation.parameters},StepperSizes.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <StepperSizeExample {...args} />,\n}"},...StepperSizes.parameters},StepperColors.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <StepperColorExample {...args} />,\n}"},...StepperColors.parameters},StepperClick.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <StepperClickExample {...args} />,\n}"},...StepperClick.parameters},StepperProgressbar.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <StepperProgressbarExample {...args} />,\n}"},...StepperProgressbar.parameters},Stepper_stories_Stepper.parameters={...Stepper_stories_Stepper.parameters,docs:{...Stepper_stories_Stepper.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <StepperExample {...args} />\n}",...Stepper_stories_Stepper.parameters?.docs?.source}}},StepperOrientation.parameters={...StepperOrientation.parameters,docs:{...StepperOrientation.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <StepperOrientationExample {...args} />\n}",...StepperOrientation.parameters?.docs?.source}}},StepperSizes.parameters={...StepperSizes.parameters,docs:{...StepperSizes.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <StepperSizeExample {...args} />\n}",...StepperSizes.parameters?.docs?.source}}},StepperColors.parameters={...StepperColors.parameters,docs:{...StepperColors.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <StepperColorExample {...args} />\n}",...StepperColors.parameters?.docs?.source}}},StepperClick.parameters={...StepperClick.parameters,docs:{...StepperClick.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <StepperClickExample {...args} />\n}",...StepperClick.parameters?.docs?.source}}},StepperProgressbar.parameters={...StepperProgressbar.parameters,docs:{...StepperProgressbar.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <StepperProgressbarExample {...args} />\n}",...StepperProgressbar.parameters?.docs?.source}}};const __namedExportsOrder=["Stepper","StepperOrientation","StepperSizes","StepperColors","StepperClick","StepperProgressbar"]}}]);