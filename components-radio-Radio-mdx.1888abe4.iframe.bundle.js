"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[7542,95],{"../../node_modules/@chakra-ui/radio/dist/chunk-FESYGSQT.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup,X:()=>useRadioGroupContext});var dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_use_merge_refs_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js");function useRadioGroup(props={}){const{onChange:onChangeProp,value:valueProp,defaultValue,name:nameProp,isDisabled,isFocusable,isNative,...htmlProps}=props,[valueState,setValue]=(0,react.useState)(defaultValue||""),isControlled=void 0!==valueProp,value=isControlled?valueProp:valueState,ref=(0,react.useRef)(null),focus=(0,react.useCallback)((()=>{const rootNode=ref.current;if(!rootNode)return;let query="input:not(:disabled):checked";const firstEnabledAndCheckedInput=rootNode.querySelector(query);if(firstEnabledAndCheckedInput)return void firstEnabledAndCheckedInput.focus();query="input:not(:disabled)";const firstEnabledInput=rootNode.querySelector(query);null==firstEnabledInput||firstEnabledInput.focus()}),[]),uuid=(0,react.useId)(),name=nameProp||`radio-${uuid}`,onChange=(0,react.useCallback)((eventOrValue=>{const nextValue=function isInputEvent(value){return value&&(0,dist.Kn)(value)&&(0,dist.Kn)(value.target)}(eventOrValue)?eventOrValue.target.value:eventOrValue;isControlled||setValue(nextValue),null==onChangeProp||onChangeProp(String(nextValue))}),[onChangeProp,isControlled]);return{getRootProps:(0,react.useCallback)(((props2={},forwardedRef=null)=>({...props2,ref:(0,react_use_merge_refs_dist.lq)(forwardedRef,ref),role:"radiogroup"})),[]),getRadioProps:(0,react.useCallback)(((props2={},ref2=null)=>{const checkedKey=isNative?"checked":"isChecked";return{...props2,ref:ref2,name,[checkedKey]:null!=value?props2.value===value:void 0,onChange(event){onChange(event)},"data-radiogroup":!0}}),[isNative,name,onChange,value]),name,ref,focus,setValue,value,onChange,isDisabled,isFocusable,htmlProps}}var chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_context_dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),[RadioGroupProvider,useRadioGroupContext]=(0,react_context_dist.k)({name:"RadioGroupContext",strict:!1}),RadioGroup=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{colorScheme,size,variant,children,className,isDisabled,isFocusable,...rest}=props,{value,onChange,getRootProps,name,htmlProps}=useRadioGroup(rest),group=(0,react.useMemo)((()=>({name,size,onChange,colorScheme,value,variant,isDisabled,isFocusable})),[name,size,onChange,colorScheme,value,variant,isDisabled,isFocusable]);return(0,jsx_runtime.jsx)(RadioGroupProvider,{value:group,children:(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{...getRootProps(htmlProps,ref),className:(0,dist.cx)("chakra-radio-group",className),children})})}));RadioGroup.displayName="RadioGroup"},"../../node_modules/@chakra-ui/radio/dist/chunk-RDF2AYID.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Radio});var chunk_FESYGSQT=__webpack_require__("../../node_modules/@chakra-ui/radio/dist/chunk-FESYGSQT.mjs"),chunk_OSN4JR34=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-OSN4JR34.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),focus_visible_dist=__webpack_require__("../../node_modules/@zag-js/focus-visible/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),visuallyHiddenStyle={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function stopEvent(event){event.preventDefault(),event.stopPropagation()}var chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");var Radio=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{var _a;const group=(0,chunk_FESYGSQT.X)(),{onChange:onChangeProp,value:valueProp}=props,styles=(0,chunk_DMO4EI7P.jC)("Radio",{...group,...props}),ownProps=(0,styled_system_dist.Lr)(props),{spacing="0.5rem",children,isDisabled=null==group?void 0:group.isDisabled,isFocusable=null==group?void 0:group.isFocusable,inputProps:htmlInputProps,...rest}=ownProps;let isChecked=props.isChecked;null!=(null==group?void 0:group.value)&&null!=valueProp&&(isChecked=group.value===valueProp);let onChange=onChangeProp;(null==group?void 0:group.onChange)&&null!=valueProp&&(onChange=(0,dist.PP)(group.onChange,onChangeProp));const name=null!=(_a=null==props?void 0:props.name)?_a:null==group?void 0:group.name,{getInputProps,getCheckboxProps,getLabelProps,getRootProps,htmlProps}=function useRadio(props={}){const{defaultChecked,isChecked:isCheckedProp,isFocusable,isDisabled:isDisabledProp,isReadOnly:isReadOnlyProp,isRequired:isRequiredProp,onChange,isInvalid:isInvalidProp,name,value,id:idProp,"data-radiogroup":dataRadioGroup,"aria-describedby":ariaDescribedBy,...htmlProps}=props,uuid=`radio-${(0,react.useId)()}`,formControl=(0,chunk_OSN4JR34.NJ)(),group=(0,chunk_FESYGSQT.X)();let id=!formControl||group||dataRadioGroup?uuid:formControl.id;id=null!=idProp?idProp:id;const isDisabled=null!=isDisabledProp?isDisabledProp:null==formControl?void 0:formControl.isDisabled,isReadOnly=null!=isReadOnlyProp?isReadOnlyProp:null==formControl?void 0:formControl.isReadOnly,isRequired=null!=isRequiredProp?isRequiredProp:null==formControl?void 0:formControl.isRequired,isInvalid=null!=isInvalidProp?isInvalidProp:null==formControl?void 0:formControl.isInvalid,[isFocusVisible,setIsFocusVisible]=(0,react.useState)(!1),[isFocused,setFocused]=(0,react.useState)(!1),[isHovered,setHovering]=(0,react.useState)(!1),[isActive,setActive]=(0,react.useState)(!1),[isCheckedState,setChecked]=(0,react.useState)(Boolean(defaultChecked)),isControlled=void 0!==isCheckedProp,isChecked=isControlled?isCheckedProp:isCheckedState;(0,react.useEffect)((()=>(0,focus_visible_dist.BT)(setIsFocusVisible)),[]);const handleChange=(0,react.useCallback)((event=>{isReadOnly||isDisabled?event.preventDefault():(isControlled||setChecked(event.target.checked),null==onChange||onChange(event))}),[isControlled,isDisabled,isReadOnly,onChange]),onKeyDown=(0,react.useCallback)((event=>{" "===event.key&&setActive(!0)}),[setActive]),onKeyUp=(0,react.useCallback)((event=>{" "===event.key&&setActive(!1)}),[setActive]),getRadioProps=(0,react.useCallback)(((props2={},ref=null)=>({...props2,ref,"data-active":(0,dist.PB)(isActive),"data-hover":(0,dist.PB)(isHovered),"data-disabled":(0,dist.PB)(isDisabled),"data-invalid":(0,dist.PB)(isInvalid),"data-checked":(0,dist.PB)(isChecked),"data-focus":(0,dist.PB)(isFocused),"data-focus-visible":(0,dist.PB)(isFocused&&isFocusVisible),"data-readonly":(0,dist.PB)(isReadOnly),"aria-hidden":!0,onMouseDown:(0,dist.v0)(props2.onMouseDown,(()=>setActive(!0))),onMouseUp:(0,dist.v0)(props2.onMouseUp,(()=>setActive(!1))),onMouseEnter:(0,dist.v0)(props2.onMouseEnter,(()=>setHovering(!0))),onMouseLeave:(0,dist.v0)(props2.onMouseLeave,(()=>setHovering(!1)))})),[isActive,isHovered,isDisabled,isInvalid,isChecked,isFocused,isReadOnly,isFocusVisible]),{onFocus,onBlur}=null!=formControl?formControl:{},getInputProps=(0,react.useCallback)(((props2={},ref=null)=>{const trulyDisabled=isDisabled&&!isFocusable;return{...props2,id,ref,type:"radio",name,value,onChange:(0,dist.v0)(props2.onChange,handleChange),onBlur:(0,dist.v0)(onBlur,props2.onBlur,(()=>setFocused(!1))),onFocus:(0,dist.v0)(onFocus,props2.onFocus,(()=>setFocused(!0))),onKeyDown:(0,dist.v0)(props2.onKeyDown,onKeyDown),onKeyUp:(0,dist.v0)(props2.onKeyUp,onKeyUp),checked:isChecked,disabled:trulyDisabled,readOnly:isReadOnly,required:isRequired,"aria-invalid":(0,dist.Qm)(isInvalid),"aria-disabled":(0,dist.Qm)(trulyDisabled),"aria-required":(0,dist.Qm)(isRequired),"data-readonly":(0,dist.PB)(isReadOnly),"aria-describedby":ariaDescribedBy,style:visuallyHiddenStyle}}),[isDisabled,isFocusable,id,name,value,handleChange,onBlur,onFocus,onKeyDown,onKeyUp,isChecked,isReadOnly,isRequired,isInvalid,ariaDescribedBy]);return{state:{isInvalid,isFocused,isChecked,isActive,isHovered,isDisabled,isReadOnly,isRequired},getCheckboxProps:getRadioProps,getRadioProps,getInputProps,getLabelProps:(props2={},ref=null)=>({...props2,ref,onMouseDown:(0,dist.v0)(props2.onMouseDown,stopEvent),"data-disabled":(0,dist.PB)(isDisabled),"data-checked":(0,dist.PB)(isChecked),"data-invalid":(0,dist.PB)(isInvalid)}),getRootProps:(props2,ref=null)=>({...props2,ref,"data-disabled":(0,dist.PB)(isDisabled),"data-checked":(0,dist.PB)(isChecked),"data-invalid":(0,dist.PB)(isInvalid)}),htmlProps}}({...rest,isChecked,isFocusable,isDisabled,onChange,name}),[layoutProps,otherProps]=function split(object,keys){const picked={},omitted={};for(const[key,value]of Object.entries(object))keys.includes(key)?picked[key]=value:omitted[key]=value;return[picked,omitted]}(htmlProps,styled_system_dist.oE),checkboxProps=getCheckboxProps(otherProps),inputProps=getInputProps(htmlInputProps,ref),labelProps=getLabelProps(),rootProps=Object.assign({},layoutProps,getRootProps()),rootStyles={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...styles.container},checkboxStyles={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...styles.control},labelStyles={userSelect:"none",marginStart:spacing,...styles.label};return(0,jsx_runtime.jsxs)(chunk_ZHQNHOQS.m.label,{className:"chakra-radio",...rootProps,__css:rootStyles,children:[(0,jsx_runtime.jsx)("input",{className:"chakra-radio__input",...inputProps}),(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{className:"chakra-radio__control",...checkboxProps,__css:checkboxStyles}),children&&(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{className:"chakra-radio__label",...labelProps,__css:labelStyles,children})]})}));Radio.displayName="Radio"},"../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lq:()=>mergeRefs,qq:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function mergeRefs(...refs){return node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if("function"!=typeof ref)try{ref.current=value}catch(error){throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)}else ref(value)}(ref,node)}))}}function useMergeRefs(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>mergeRefs(...refs)),refs)}},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/radio/Radio.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Radio_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/radio/Radio.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Radio_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"radio",children:"Radio"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Radioknapper skal benyttes der en bruker kun skal kunne gjøre ett enkelt valg, og ikke flervalg.\nVed et nytt valg skal eventuelle tidligere valg fjernes automatisk. Feilmelding radioknapp skal brukes for å visualisere\nfeil i avkrysningen, dersom dette har skjedd (f.eks. ikke krysset av for et alternativ)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Radio brukes med komponenten RadioGroup. Man må sette value på Radioknappene for at de skal kunne vise hvilken som er valgt.\nHvis man setter isChecked til true, må man oppdatere knappene med onChange."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Radio } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Radio_stories__WEBPACK_IMPORTED_MODULE_2__.Radio}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Radio_stories__WEBPACK_IMPORTED_MODULE_2__.Radio}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"farge",children:"Farge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Radio_stories__WEBPACK_IMPORTED_MODULE_2__.Color}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"størrelse",children:"Størrelse"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Radio_stories__WEBPACK_IMPORTED_MODULE_2__.Size})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./stories/components/radio/Radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Radio:()=>Radio,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/radio/dist/chunk-RDF2AYID.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/radio/dist/chunk-FESYGSQT.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Radio",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},Radio={argTypes:{size:{description:"Size of the Radio",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},spacing:{description:"The space between the radio icon and its text",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},aria_describedby:{description:"Refers to the id of the radio's label",table:{type:{summary:"string"},control:{type:"boolean"}}},id:{description:"Refers to the id of the radio",table:{type:{summary:"string"},control:{type:"text"}}},defaultChecked:{description:"If true, the radio wil be initially checked",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},inputProps:{description:"Additional props forwarded to the input element",table:{type:{summary:""}}},isDisabled:{description:"If true, the radio will be disabled",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},variant:{description:"The variant of the radio",table:{type:{summary:"string"}},control:{type:"text"}},isFocusable:{description:"If true, and isDisabled is true, the radio will remain focusable but not interactive",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isChecked:{description:"If true, the radio will be set as checked. You need to pass onChange to update its value (since it is controlled)",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isInvalid:{description:"If true, the radio will be invalid. Sets 'aria-invalid' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isReadOnly:{description:"If true, the radio will be read-only",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isRequired:{description:"If true, the radio button will be required. Sets 'aria-required' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},name:{description:"The name of the input field in a radio",table:{type:{summary:"string"}},control:{type:"text"}},onChange:{description:"The function that is ran when the state of the radio changes",table:{type:{summary:"callback()"}},defaultValue:{summary:"none"}},colorScheme:{description:"Color of the radio",table:{type:{summary:"green | blue | gray | red | orange | purple"},defaultValue:{summary:"Blue"}},options:["green","blue","gray","red","orange","purple"],control:{type:"select"}}},args:{onChange:void 0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,children:"Alternativ"})},Color={args:{size:"lg"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{direction:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,defaultChecked:!0,colorScheme:"green",children:"Grønn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,defaultChecked:!0,colorScheme:"blue",children:"Blå"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,defaultChecked:!0,colorScheme:"gray",children:"Grå"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,defaultChecked:!0,colorScheme:"red",children:"Rød"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,defaultChecked:!0,colorScheme:"orange",children:"Oransje"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,defaultChecked:!0,colorScheme:"purple",children:"Lilla"})]})})},Size={args:{colorScheme:"green"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.E,{defaultValue:"3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,size:"sm",value:"1",children:"sm"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,size:"md",value:"2",children:"md"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.Y,{...args,size:"lg",value:"3",children:"lg"})]})})};Radio.parameters={...Radio.parameters,docs:{...Radio.parameters?.docs,source:{originalSource:"{\n  argTypes: radioArgTypes,\n  args: {\n    onChange: undefined\n  },\n  render: args => <KvibRadio {...args}>Alternativ</KvibRadio>\n}",...Radio.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "lg"\n  },\n  render: args => <KvibRadioGroup>\n      <KvibStack direction={"row"}>\n        <KvibRadio {...args} defaultChecked colorScheme={"green"}>\n          Grønn\n        </KvibRadio>\n        <KvibRadio {...args} defaultChecked colorScheme={"blue"}>\n          Blå\n        </KvibRadio>\n        <KvibRadio {...args} defaultChecked colorScheme={"gray"}>\n          Grå\n        </KvibRadio>\n        <KvibRadio {...args} defaultChecked colorScheme={"red"}>\n          Rød\n        </KvibRadio>\n        <KvibRadio {...args} defaultChecked colorScheme={"orange"}>\n          Oransje\n        </KvibRadio>\n        <KvibRadio {...args} defaultChecked colorScheme={"purple"}>\n          Lilla\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n}',...Color.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'{\n  args: {\n    colorScheme: "green"\n  },\n  render: args => <KvibRadioGroup defaultValue="3">\n      <KvibStack>\n        <KvibRadio {...args} size={"sm"} value="1">\n          sm\n        </KvibRadio>\n        <KvibRadio {...args} size={"md"} value="2">\n          md\n        </KvibRadio>\n        <KvibRadio {...args} size={"lg"} value="3">\n          lg\n        </KvibRadio>\n      </KvibStack>\n    </KvibRadioGroup>\n}',...Size.parameters?.docs?.source}}};const __namedExportsOrder=["Radio","Color","Size"]}}]);