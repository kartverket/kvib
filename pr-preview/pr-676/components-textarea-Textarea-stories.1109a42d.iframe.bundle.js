"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[1006,1195,2993],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/form-control/dist/chunk-56K2BSAJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useFormControlProps,Y:()=>useFormControl});var _chunk_DFWC5MHP_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-DFWC5MHP.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs");function useFormControl(props){const{isDisabled,isInvalid,isReadOnly,isRequired,...rest}=useFormControlProps(props);return{...rest,disabled:isDisabled,readOnly:isReadOnly,required:isRequired,"aria-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isInvalid),"aria-required":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isRequired),"aria-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isReadOnly)}}function useFormControlProps(props){var _a,_b,_c;const field=(0,_chunk_DFWC5MHP_mjs__WEBPACK_IMPORTED_MODULE_1__.NJ)(),{id,disabled,readOnly,required,isRequired,isInvalid,isReadOnly,isDisabled,onFocus,onBlur,...rest}=props,labelIds=props["aria-describedby"]?[props["aria-describedby"]]:[];return(null==field?void 0:field.hasFeedbackText)&&(null==field?void 0:field.isInvalid)&&labelIds.push(field.feedbackId),(null==field?void 0:field.hasHelpText)&&labelIds.push(field.helpTextId),{...rest,"aria-describedby":labelIds.join(" ")||void 0,id:null!=id?id:null==field?void 0:field.id,isDisabled:null!=(_a=null!=disabled?disabled:isDisabled)?_a:null==field?void 0:field.isDisabled,isReadOnly:null!=(_b=null!=readOnly?readOnly:isReadOnly)?_b:null==field?void 0:field.isReadOnly,isRequired:null!=(_c=null!=required?required:isRequired)?_c:null==field?void 0:field.isRequired,isInvalid:null!=isInvalid?isInvalid:null==field?void 0:field.isInvalid,onFocus:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.v0)(null==field?void 0:field.onFocus,onFocus),onBlur:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.v0)(null==field?void 0:field.onBlur,onBlur)}}},"../../node_modules/@chakra-ui/form-control/dist/chunk-DFWC5MHP.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NI:()=>FormControl,NJ:()=>useFormControlContext,Q6:()=>FormHelperText,e:()=>useFormControlStyles});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),[FormControlStylesProvider,useFormControlStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[FormControlProvider,useFormControlContext]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.k)({strict:!1,name:"FormControlContext"});var FormControl=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.G)((function FormControl2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.jC)("Form",props),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__.Lr)(props),{getRootProps,htmlProps:_,...context}=function useFormControlProvider(props){const{id:idProp,isRequired,isInvalid,isDisabled,isReadOnly,...htmlProps}=props,uuid=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),id=idProp||`field-${uuid}`,labelId=`${id}-label`,feedbackId=`${id}-feedback`,helpTextId=`${id}-helptext`,[hasFeedbackText,setHasFeedbackText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[hasHelpText,setHasHelpText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isFocused,setFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),getHelpTextProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({id:helpTextId,...props2,ref:(0,_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__.lq)(forwardedRef,(node=>{node&&setHasHelpText(!0)}))})),[helpTextId]),getLabelProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,ref:forwardedRef,"data-focus":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isFocused),"data-disabled":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isDisabled),"data-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isInvalid),"data-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isReadOnly),id:void 0!==props2.id?props2.id:labelId,htmlFor:void 0!==props2.htmlFor?props2.htmlFor:id})),[id,isDisabled,isFocused,isInvalid,isReadOnly,labelId]),getErrorMessageProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({id:feedbackId,...props2,ref:(0,_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__.lq)(forwardedRef,(node=>{node&&setHasFeedbackText(!0)})),"aria-live":"polite"})),[feedbackId]),getRootProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,...htmlProps,ref:forwardedRef,role:"group","data-focus":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isFocused),"data-disabled":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isDisabled),"data-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isInvalid),"data-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isReadOnly)})),[htmlProps,isDisabled,isFocused,isInvalid,isReadOnly]),getRequiredIndicatorProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,ref:forwardedRef,role:"presentation","aria-hidden":!0,children:props2.children||"*"})),[]);return{isRequired:!!isRequired,isInvalid:!!isInvalid,isReadOnly:!!isReadOnly,isDisabled:!!isDisabled,isFocused:!!isFocused,onFocus:()=>setFocus(!0),onBlur:()=>setFocus(!1),hasFeedbackText,setHasFeedbackText,hasHelpText,setHasHelpText,id,labelId,feedbackId,helpTextId,htmlProps,getHelpTextProps,getErrorMessageProps,getRootProps,getLabelProps,getRequiredIndicatorProps}}(ownProps),className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-form-control",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormControlProvider,{value:context,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormControlStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__.m.div,{...getRootProps({},ref),className,__css:styles.container})})})}));FormControl.displayName="FormControl";var FormHelperText=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.G)((function FormHelperText2(props,ref){const field=useFormControlContext(),styles=useFormControlStyles(),className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-form__helper-text",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__.m.div,{...null==field?void 0:field.getHelpTextProps(props,ref),__css:styles.helperText,className})}));FormHelperText.displayName="FormHelperText"},"../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Text=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Text2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),aliasedProps=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__.o)({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.p,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,shared_utils_dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}__webpack_require__.d(__webpack_exports__,{o:()=>compact})},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lq:()=>mergeRefs,qq:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function mergeRefs(...refs){return node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if("function"!=typeof ref)try{ref.current=value}catch(error){throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)}else ref(value)}(ref,node)}))}}function useMergeRefs(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>mergeRefs(...refs)),refs)}},"../../node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Textarea});var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-56K2BSAJ.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");var omitted=["h","minH","height","minHeight"],Textarea=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>{const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Textarea",props),{className,rows,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),textareaProps=(0,_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__.Y)(rest),textareaStyles=rows?function omit(object,keysToOmit=[]){const clone=Object.assign({},object);for(const key of keysToOmit)key in clone&&delete clone[key];return clone}(styles,omitted):styles;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.textarea,{ref,rows,...textareaProps,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-textarea",className),__css:textareaStyles})}));Textarea.displayName="Textarea"},"./stories/components/textarea/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Textarea:()=>Textarea,TextareaControlled:()=>TextareaControlled,TextareaDisabled:()=>TextareaDisabled,TextareaInvalid:()=>TextareaInvalid,TextareaSizes:()=>TextareaSizes,TextareaVariants:()=>TextareaVariants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Textarea",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{errorBorderColor:{description:"The border color when the textarea is invalid. Use color keys in `theme.colors`",table:{type:{summary:"string"}},control:"text"},focusBorderColor:{description:"The border color when the textarea is focused. Use color keys in `theme.colors`",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the form control will be disabled. This has 2 side effects: - The FormLabel will have `data-disabled` attribute - The form element (e.g, Input) will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isInvalid:{description:"If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isReadOnly:{description:"If true, the form control will be readonly",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isRequired:{description:"If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},size:{description:"The size of the Textarea",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:"radio"},variant:{description:"The variant of the Textarea",table:{type:{summary:"'outline' | 'flushed' | 'filled' | 'unstyled'"},defaultValue:{summary:"outline"}},options:["outline","flushed","filled","unstyled"],control:"radio"}}},Textarea={args:{placeholder:"Dette er et eksempel på placeholder"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args})},TextAreaControlledExample=({...args})=>{let[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.x,{mb:"8px",children:["Value: ",value]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args,value,onChange:e=>{let inputValue=e.target.value;setValue(inputValue)}})]})},TextareaControlled={args:{placeholder:"Placeholder",size:"sm"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextAreaControlledExample,{...args})},TextareaSizes={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args,size:"xs",placeholder:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args,size:"sm",placeholder:"sm"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args,size:"md",placeholder:"md"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args,size:"lg",placeholder:"lg"})]})},TextareaVariants={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args,variant:"outline",placeholder:"outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args,variant:"filled",placeholder:"filled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args,variant:"flushed",placeholder:"flushed"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args,variant:"unstyled",placeholder:"unstyled"})]})},TextareaDisabled={args:{placeholder:"Placeholder",isDisabled:!0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args})},TextareaInvalid={args:{placeholder:"Placeholder",isInvalid:!0},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.g,{...args})};Textarea.parameters={storySource:{source:'{\n  args: { placeholder: "Dette er et eksempel på placeholder" },\n  render: (args) => <KvibTextarea {...args} />,\n}'},...Textarea.parameters},TextareaControlled.parameters={storySource:{source:'{\n  args: { placeholder: "Placeholder", size: "sm" },\n  render: (args) => <TextAreaControlledExample {...args} />,\n}'},...TextareaControlled.parameters},TextareaSizes.parameters={storySource:{source:'{\n  args: {},\n  render: (args) => (\n    <KvibStack>\n      <KvibTextarea {...args} size="xs" placeholder="xs" />\n      <KvibTextarea {...args} size="sm" placeholder="sm" />\n      <KvibTextarea {...args} size="md" placeholder="md" />\n      <KvibTextarea {...args} size="lg" placeholder="lg" />\n    </KvibStack>\n  ),\n}'},...TextareaSizes.parameters},TextareaVariants.parameters={storySource:{source:'{\n  args: {},\n  render: (args) => (\n    <KvibStack>\n      <KvibTextarea {...args} variant="outline" placeholder="outline" />\n      <KvibTextarea {...args} variant="filled" placeholder="filled" />\n      <KvibTextarea {...args} variant="flushed" placeholder="flushed" />\n      <KvibTextarea {...args} variant="unstyled" placeholder="unstyled" />\n    </KvibStack>\n  ),\n}'},...TextareaVariants.parameters},TextareaDisabled.parameters={storySource:{source:'{\n  args: { placeholder: "Placeholder", isDisabled: true },\n  render: (args) => <KvibTextarea {...args} />,\n}'},...TextareaDisabled.parameters},TextareaInvalid.parameters={storySource:{source:'{\n  args: { placeholder: "Placeholder", isInvalid: true },\n  render: (args) => <KvibTextarea {...args} />,\n}'},...TextareaInvalid.parameters},Textarea.parameters={...Textarea.parameters,docs:{...Textarea.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Dette er et eksempel på placeholder"\n  },\n  render: args => <KvibTextarea {...args} />\n}',...Textarea.parameters?.docs?.source}}},TextareaControlled.parameters={...TextareaControlled.parameters,docs:{...TextareaControlled.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Placeholder",\n    size: "sm"\n  },\n  render: args => <TextAreaControlledExample {...args} />\n}',...TextareaControlled.parameters?.docs?.source}}},TextareaSizes.parameters={...TextareaSizes.parameters,docs:{...TextareaSizes.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibStack>\n      <KvibTextarea {...args} size="xs" placeholder="xs" />\n      <KvibTextarea {...args} size="sm" placeholder="sm" />\n      <KvibTextarea {...args} size="md" placeholder="md" />\n      <KvibTextarea {...args} size="lg" placeholder="lg" />\n    </KvibStack>\n}',...TextareaSizes.parameters?.docs?.source}}},TextareaVariants.parameters={...TextareaVariants.parameters,docs:{...TextareaVariants.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibStack>\n      <KvibTextarea {...args} variant="outline" placeholder="outline" />\n      <KvibTextarea {...args} variant="filled" placeholder="filled" />\n      <KvibTextarea {...args} variant="flushed" placeholder="flushed" />\n      <KvibTextarea {...args} variant="unstyled" placeholder="unstyled" />\n    </KvibStack>\n}',...TextareaVariants.parameters?.docs?.source}}},TextareaDisabled.parameters={...TextareaDisabled.parameters,docs:{...TextareaDisabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Placeholder",\n    isDisabled: true\n  },\n  render: args => <KvibTextarea {...args} />\n}',...TextareaDisabled.parameters?.docs?.source}}},TextareaInvalid.parameters={...TextareaInvalid.parameters,docs:{...TextareaInvalid.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Placeholder",\n    isInvalid: true\n  },\n  render: args => <KvibTextarea {...args} />\n}',...TextareaInvalid.parameters?.docs?.source}}};const __namedExportsOrder=["Textarea","TextareaControlled","TextareaSizes","TextareaVariants","TextareaDisabled","TextareaInvalid"]}}]);