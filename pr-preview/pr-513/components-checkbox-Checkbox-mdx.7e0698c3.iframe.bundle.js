"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[6288,5511],{"../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Text=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Text2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),aliasedProps=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__.o)({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.p,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}__webpack_require__.d(__webpack_exports__,{o:()=>compact})},"../../node_modules/@chakra-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useControllableState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs");function useControllableState(props){const{value:valueProp,defaultValue,onChange,shouldUpdate=(prev,next)=>prev!==next}=props,onChangeProp=(0,_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange),shouldUpdateProp=(0,_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(shouldUpdate),[uncontrolledState,setUncontrolledState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),controlled=void 0!==valueProp,value=controlled?valueProp:uncontrolledState,setValue=(0,_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)((next=>{const nextValue="function"==typeof next?next(value):next;shouldUpdateProp(value,nextValue)&&(controlled||setUncontrolledState(nextValue),onChangeProp(nextValue))}),[controlled,onChangeProp,value,shouldUpdateProp]);return[value,setValue]}},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/checkbox/Checkbox.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Checkbox_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/checkbox/Checkbox.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Checkbox_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Her er en oversikt over utvalget av ikonknapper i Kartverkets Designbibliotek. Disse er blant annet bygget opp ved bruk av design tokens fra biblioteket, eksempelvis farger og ikoner. I dokumentasjonen følger beskrivelse av komponenten og bruksområde, sammen med kodeeksempler."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Avmerkingsboks blir brukt der man vil gi brukeren mulighet til å velge flere enn bare ett svaralternativ."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["På ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://chakra-ui.com/docs/components/checkbox/usage",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI"}),' sin nettside finnes det eksempel for hvordan man lager en "Velg alle" avmerkingsboks.']}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Checkbox, CheckboxGroup } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.Checkbox}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.Checkbox}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"farger",children:"Farger"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.CheckboxColors}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"størrelser",children:"Størrelser"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.CheckboxSizes}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.CheckboxStates}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"grupper",children:"Grupper"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Man kan gruppere Checkbox i en CheckboxGroup for å gi alle styling-propsa videre til alle boksene i gruppen"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.CheckboxGroup})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./stories/components/checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checkbox:()=>Checkbox_stories_Checkbox,CheckboxColors:()=>CheckboxColors,CheckboxGroup:()=>Checkbox_stories_CheckboxGroup,CheckboxSizes:()=>CheckboxSizes,CheckboxStates:()=>CheckboxStates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var react=__webpack_require__("../../node_modules/react/index.js");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),[CheckboxGroupProvider,useCheckboxGroupContext]=(0,dist.k)({name:"CheckboxGroupContext",strict:!1}),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function CheckIcon(props){return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...props,children:(0,jsx_runtime.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function IndeterminateIcon(props){return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...props,children:(0,jsx_runtime.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function CheckboxIcon(props){const{isIndeterminate,isChecked,...rest}=props,BaseIcon=isIndeterminate?IndeterminateIcon:CheckIcon;return isChecked||isIndeterminate?(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,jsx_runtime.jsx)(BaseIcon,{...rest})}):null}var chunk_7D6N5TE5=__webpack_require__("../../node_modules/@chakra-ui/checkbox/dist/chunk-7D6N5TE5.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_TKWR62NH=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),controlStyles={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},rootStyles={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},checkAnim=(0,emotion_react_browser_esm.F4)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),indeterminateOpacityAnim=(0,emotion_react_browser_esm.F4)({from:{opacity:0},to:{opacity:1}}),indeterminateScaleAnim=(0,emotion_react_browser_esm.F4)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Checkbox=(0,chunk_ZJJGQIVY.G)((function Checkbox2(props,ref){const group=useCheckboxGroupContext(),mergedProps={...group,...props},styles=(0,chunk_TKWR62NH.jC)("Checkbox",mergedProps),ownProps=(0,styled_system_dist.Lr)(props),{spacing="0.5rem",className,children,iconColor,iconSize,icon=(0,jsx_runtime.jsx)(CheckboxIcon,{}),isChecked:isCheckedProp,isDisabled=null==group?void 0:group.isDisabled,onChange:onChangeProp,inputProps,...rest}=ownProps;let isChecked=isCheckedProp;(null==group?void 0:group.value)&&ownProps.value&&(isChecked=group.value.includes(ownProps.value));let onChange=onChangeProp;(null==group?void 0:group.onChange)&&ownProps.value&&(onChange=(0,shared_utils_dist.PP)(group.onChange,onChangeProp));const{state,getInputProps,getCheckboxProps,getLabelProps,getRootProps}=(0,chunk_7D6N5TE5.O)({...rest,isDisabled,isChecked,onChange}),shouldAnimate=function useInitialAnimationState(isChecked){const[previousIsChecked,setPreviousIsChecked]=(0,react.useState)(isChecked),[shouldAnimate,setShouldAnimate]=(0,react.useState)(!1);return isChecked!==previousIsChecked&&(setShouldAnimate(!0),setPreviousIsChecked(isChecked)),shouldAnimate}(state.isChecked),iconStyles=(0,react.useMemo)((()=>({animation:shouldAnimate?state.isIndeterminate?`${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear`:`${checkAnim} 200ms linear`:void 0,fontSize:iconSize,color:iconColor,...styles.icon})),[iconColor,iconSize,shouldAnimate,state.isIndeterminate,styles.icon]),clonedIcon=(0,react.cloneElement)(icon,{__css:iconStyles,isIndeterminate:state.isIndeterminate,isChecked:state.isChecked});return(0,jsx_runtime.jsxs)(chunk_ZHQNHOQS.m.label,{__css:{...rootStyles,...styles.container},className:(0,shared_utils_dist.cx)("chakra-checkbox",className),...getRootProps(),children:[(0,jsx_runtime.jsx)("input",{className:"chakra-checkbox__input",...getInputProps(inputProps,ref)}),(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{__css:{...controlStyles,...styles.control},className:"chakra-checkbox__control",...getCheckboxProps(),children:clonedIcon}),children&&(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{className:"chakra-checkbox__label",...getLabelProps(),__css:{marginStart:spacing,...styles.label},children})]})}));Checkbox.displayName="Checkbox";var chunk_2OOHT3W5=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-controllable-state/dist/index.mjs");function isInputEvent(value){return value&&(0,shared_utils_dist.Kn)(value)&&(0,shared_utils_dist.Kn)(value.target)}function CheckboxGroup(props){const{colorScheme,size,variant,children,isDisabled}=props,{value,onChange}=function useCheckboxGroup(props={}){const{defaultValue,value:valueProp,onChange,isDisabled,isNative}=props,onChangeProp=(0,react_use_callback_ref_dist.W)(onChange),[value,setValue]=(0,react_use_controllable_state_dist.T)({value:valueProp,defaultValue:defaultValue||[],onChange:onChangeProp}),handleChange=(0,react.useCallback)((eventOrValue=>{if(!value)return;const isChecked=isInputEvent(eventOrValue)?eventOrValue.target.checked:!value.includes(eventOrValue),selectedValue=isInputEvent(eventOrValue)?eventOrValue.target.value:eventOrValue,nextValue=isChecked?[...value,selectedValue]:value.filter((v=>String(v)!==String(selectedValue)));setValue(nextValue)}),[setValue,value]),getCheckboxProps=(0,react.useCallback)(((props2={})=>{const checkedKey=isNative?"checked":"isChecked";return{...props2,[checkedKey]:value.some((val=>String(props2.value)===String(val))),onChange:handleChange}}),[handleChange,isNative,value]);return{value,isDisabled,onChange:handleChange,setValue,getCheckboxProps}}(props),group=(0,react.useMemo)((()=>({size,onChange,colorScheme,value,variant,isDisabled})),[size,onChange,colorScheme,value,variant,isDisabled]);return(0,jsx_runtime.jsx)(CheckboxGroupProvider,{value:group,children})}CheckboxGroup.displayName="CheckboxGroup";var chunk_ZHMYA64R=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs");const Checkbox_stories={title:"Komponenter/Checkbox",component:Checkbox,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{colorScheme:{description:"The color of the Checkbox",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},control:"radio",options:["green","blue"]},size:{description:"The size of the checkbox",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},isDisabled:{description:"If true, the checkbox will be disabled",table:{type:{summary:"true | false"},defaultValue:{summary:!1}},control:"boolean"},iconColor:{description:"The color of the checkmark",table:{type:{summary:"css | color variable"},defaultValue:{summary:"white"}},control:"color"}}},Checkbox_stories_Checkbox={args:{children:"Dette er en avmerkingsboks"},render:args=>(0,jsx_runtime.jsx)(Checkbox,{...args,children:args.children})},CheckboxColors={args:{},render:args=>(0,jsx_runtime.jsxs)(chunk_ZHMYA64R.K,{children:[(0,jsx_runtime.jsx)(Checkbox,{...args,colorScheme:"blue",children:"Blå"}),(0,jsx_runtime.jsx)(Checkbox,{...args,colorScheme:"green",children:"Grønn"})]})},CheckboxSizes={args:{children:"Huk av"},render:args=>(0,jsx_runtime.jsxs)(chunk_ZHMYA64R.K,{children:[(0,jsx_runtime.jsx)(Checkbox,{...args,size:"sm",children:args.children}),(0,jsx_runtime.jsx)(Checkbox,{...args,size:"md",children:args.children}),(0,jsx_runtime.jsx)(Checkbox,{...args,size:"lg",children:args.children})]})},CheckboxStates={args:{},render:args=>(0,jsx_runtime.jsxs)(chunk_ZHMYA64R.K,{children:[(0,jsx_runtime.jsx)(Checkbox,{...args,children:"Normal"}),(0,jsx_runtime.jsx)(Checkbox,{isDisabled:!0,children:"Disabled"}),(0,jsx_runtime.jsx)(Checkbox,{isInvalid:!0,children:"Invalid"})]})},Checkbox_stories_CheckboxGroup={args:{size:"sm"},render:args=>(0,jsx_runtime.jsxs)(chunk_ZHMYA64R.K,{children:[(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{children:"Grønn"}),(0,jsx_runtime.jsxs)(CheckboxGroup,{colorScheme:"green",...args,children:[(0,jsx_runtime.jsx)(Checkbox,{children:"Valg 1"}),(0,jsx_runtime.jsx)(Checkbox,{children:"Valg 2"})]}),(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{children:"Blå"}),(0,jsx_runtime.jsxs)(CheckboxGroup,{colorScheme:"blue",...args,children:[(0,jsx_runtime.jsx)(Checkbox,{children:"Valg 1"}),(0,jsx_runtime.jsx)(Checkbox,{children:"Valg 2"})]})]})};Checkbox_stories_Checkbox.parameters={...Checkbox_stories_Checkbox.parameters,docs:{...Checkbox_stories_Checkbox.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Dette er en avmerkingsboks"\n  },\n  render: args => <KvibCheckbox {...args}>{args.children}</KvibCheckbox>\n}',...Checkbox_stories_Checkbox.parameters?.docs?.source}}},CheckboxColors.parameters={...CheckboxColors.parameters,docs:{...CheckboxColors.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <Stack>\n      <KvibCheckbox {...args} colorScheme="blue">\n        Blå\n      </KvibCheckbox>\n      <KvibCheckbox {...args} colorScheme="green">\n        Grønn\n      </KvibCheckbox>\n    </Stack>\n}',...CheckboxColors.parameters?.docs?.source}}},CheckboxSizes.parameters={...CheckboxSizes.parameters,docs:{...CheckboxSizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Huk av"\n  },\n  render: args => <Stack>\n      <KvibCheckbox {...args} size="sm">\n        {args.children}\n      </KvibCheckbox>\n      <KvibCheckbox {...args} size="md">\n        {args.children}\n      </KvibCheckbox>\n      <KvibCheckbox {...args} size="lg">\n        {args.children}\n      </KvibCheckbox>\n    </Stack>\n}',...CheckboxSizes.parameters?.docs?.source}}},CheckboxStates.parameters={...CheckboxStates.parameters,docs:{...CheckboxStates.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <Stack>\n      <KvibCheckbox {...args}>Normal</KvibCheckbox>\n      <KvibCheckbox isDisabled>Disabled</KvibCheckbox>\n      <KvibCheckbox isInvalid>Invalid</KvibCheckbox>\n    </Stack>\n}",...CheckboxStates.parameters?.docs?.source}}},Checkbox_stories_CheckboxGroup.parameters={...Checkbox_stories_CheckboxGroup.parameters,docs:{...Checkbox_stories_CheckboxGroup.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "sm"\n  },\n  render: args => <Stack>\n      <Text>Grønn</Text>\n      <KvibCheckboxGroup colorScheme="green" {...args}>\n        <KvibCheckbox>Valg 1</KvibCheckbox>\n        <KvibCheckbox>Valg 2</KvibCheckbox>\n      </KvibCheckboxGroup>\n      <Text>Blå</Text>\n      <KvibCheckboxGroup colorScheme="blue" {...args}>\n        <KvibCheckbox>Valg 1</KvibCheckbox>\n        <KvibCheckbox>Valg 2</KvibCheckbox>\n      </KvibCheckboxGroup>\n    </Stack>\n}',...Checkbox_stories_CheckboxGroup.parameters?.docs?.source}}};const __namedExportsOrder=["Checkbox","CheckboxColors","CheckboxSizes","CheckboxStates","CheckboxGroup"]}}]);