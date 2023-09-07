"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[9752],{"../../node_modules/@chakra-ui/form-control/dist/chunk-7COXQURZ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>FormLabel});var _chunk_R42ZB7PB_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-R42ZB7PB.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),FormLabel=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function FormLabel2(passedProps,ref){var _a;const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("FormLabel",passedProps),props=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(passedProps),{className,children,requiredIndicator=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RequiredIndicator,{}),optionalIndicator=null,...rest}=props,field=(0,_chunk_R42ZB7PB_mjs__WEBPACK_IMPORTED_MODULE_4__.NJ)(),ownProps=null!=(_a=null==field?void 0:field.getLabelProps(rest,ref))?_a:{ref,...rest};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.label,{...ownProps,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-form__label",props.className),__css:{display:"block",textAlign:"start",...styles},children:[children,(null==field?void 0:field.isRequired)?requiredIndicator:optionalIndicator]})}));FormLabel.displayName="FormLabel";var RequiredIndicator=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function RequiredIndicator2(props,ref){const field=(0,_chunk_R42ZB7PB_mjs__WEBPACK_IMPORTED_MODULE_4__.NJ)(),styles=(0,_chunk_R42ZB7PB_mjs__WEBPACK_IMPORTED_MODULE_4__.e)();if(!(null==field?void 0:field.isRequired))return null;const className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-form__required-indicator",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.span,{...null==field?void 0:field.getRequiredIndicatorProps(props,ref),__css:styles.requiredIndicator,className})}));RequiredIndicator.displayName="RequiredIndicator"},"../../node_modules/@chakra-ui/form-control/dist/chunk-R42ZB7PB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NI:()=>FormControl,NJ:()=>useFormControlContext,Q6:()=>FormHelperText,e:()=>useFormControlStyles});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),[FormControlStylesProvider,useFormControlStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[FormControlProvider,useFormControlContext]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.k)({strict:!1,name:"FormControlContext"});var FormControl=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.G)((function FormControl2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.jC)("Form",props),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__.Lr)(props),{getRootProps,htmlProps:_,...context}=function useFormControlProvider(props){const{id:idProp,isRequired,isInvalid,isDisabled,isReadOnly,...htmlProps}=props,uuid=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),id=idProp||`field-${uuid}`,labelId=`${id}-label`,feedbackId=`${id}-feedback`,helpTextId=`${id}-helptext`,[hasFeedbackText,setHasFeedbackText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[hasHelpText,setHasHelpText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isFocused,setFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),getHelpTextProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({id:helpTextId,...props2,ref:(0,_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__.lq)(forwardedRef,(node=>{node&&setHasHelpText(!0)}))})),[helpTextId]),getLabelProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,ref:forwardedRef,"data-focus":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isFocused),"data-disabled":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isDisabled),"data-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isInvalid),"data-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.PB)(isReadOnly),id:void 0!==props2.id?props2.id:labelId,htmlFor:void 0!==props2.htmlFor?props2.htmlFor:id})),[id,isDisabled,isFocused,isInvalid,isReadOnly,labelId]),getErrorMessageProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({id:feedbackId,...props2,ref:(0,_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__.lq)(forwardedRef,(node=>{node&&setHasFeedbackText(!0)})),"aria-live":"polite"})),[feedbackId]),getRootProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,...htmlProps,ref:forwardedRef,role:"group"})),[htmlProps]),getRequiredIndicatorProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,ref:forwardedRef,role:"presentation","aria-hidden":!0,children:props2.children||"*"})),[]);return{isRequired:!!isRequired,isInvalid:!!isInvalid,isReadOnly:!!isReadOnly,isDisabled:!!isDisabled,isFocused:!!isFocused,onFocus:()=>setFocus(!0),onBlur:()=>setFocus(!1),hasFeedbackText,setHasFeedbackText,hasHelpText,setHasHelpText,id,labelId,feedbackId,helpTextId,htmlProps,getHelpTextProps,getErrorMessageProps,getRootProps,getLabelProps,getRequiredIndicatorProps}}(ownProps),className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-form-control",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormControlProvider,{value:context,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormControlStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__.m.div,{...getRootProps({},ref),className,__css:styles.container})})})}));FormControl.displayName="FormControl";var FormHelperText=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.G)((function FormHelperText2(props,ref){const field=useFormControlContext(),styles=useFormControlStyles(),className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-form__helper-text",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__.m.div,{...null==field?void 0:field.getHelpTextProps(props,ref),__css:styles.helperText,className})}));FormHelperText.displayName="FormHelperText"},"../../node_modules/@chakra-ui/form-control/dist/chunk-XRMX4GAI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useFormControlProps,Y:()=>useFormControl});var _chunk_R42ZB7PB_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-R42ZB7PB.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs");function useFormControl(props){const{isDisabled,isInvalid,isReadOnly,isRequired,...rest}=useFormControlProps(props);return{...rest,disabled:isDisabled,readOnly:isReadOnly,required:isRequired,"aria-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isInvalid),"aria-required":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isRequired),"aria-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isReadOnly)}}function useFormControlProps(props){var _a,_b,_c;const field=(0,_chunk_R42ZB7PB_mjs__WEBPACK_IMPORTED_MODULE_1__.NJ)(),{id,disabled,readOnly,required,isRequired,isInvalid,isReadOnly,isDisabled,onFocus,onBlur,...rest}=props,labelIds=props["aria-describedby"]?[props["aria-describedby"]]:[];return(null==field?void 0:field.hasFeedbackText)&&(null==field?void 0:field.isInvalid)&&labelIds.push(field.feedbackId),(null==field?void 0:field.hasHelpText)&&labelIds.push(field.helpTextId),{...rest,"aria-describedby":labelIds.join(" ")||void 0,id:null!=id?id:null==field?void 0:field.id,isDisabled:null!=(_a=null!=disabled?disabled:isDisabled)?_a:null==field?void 0:field.isDisabled,isReadOnly:null!=(_b=null!=readOnly?readOnly:isReadOnly)?_b:null==field?void 0:field.isReadOnly,isRequired:null!=(_c=null!=required?required:isRequired)?_c:null==field?void 0:field.isRequired,isInvalid:null!=isInvalid?isInvalid:null==field?void 0:field.isInvalid,onFocus:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.v0)(null==field?void 0:field.onFocus,onFocus),onBlur:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.v0)(null==field?void 0:field.onBlur,onBlur)}}},"../../node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-XRMX4GAI.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Input=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Input2(props,ref){const{htmlSize,...rest}=props,styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.jC)("Input",rest),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(rest),input=(0,_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__.Y)(ownProps),_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-input",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.m.input,{size:htmlSize,...input,__css:styles.field,ref,className:_className})}));Input.displayName="Input",Input.id="Input"},"../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Text=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Text2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),aliasedProps=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__.o)({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.p,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"../../node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}__webpack_require__.d(__webpack_exports__,{o:()=>compact})},"../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lq:()=>mergeRefs,qq:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function mergeRefs(...refs){return node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if("function"!=typeof ref)try{ref.current=value}catch(error){throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)}else ref(value)}(ref,node)}))}}function useMergeRefs(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>mergeRefs(...refs)),refs)}},"./stories/components/form-control/Form-control.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisabledFormControl:()=>DisabledFormControl,FormControl:()=>FormControl,InvalidFormControl:()=>InvalidFormControl,ReadOnlyFormControl:()=>ReadOnlyFormControl,RequiredInvalidFormControl:()=>RequiredInvalidFormControl,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Form_control_stories});var Form_control=__webpack_require__("../../packages/react/src/form-control/Form-control.tsx"),Form_label=__webpack_require__("../../packages/react/src/form-control/Form-label.tsx"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_R42ZB7PB=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-R42ZB7PB.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const FormHelperText=(0,chunk_ZJJGQIVY.G)((({helperText,children,...props},ref)=>(0,jsx_runtime.jsxs)(chunk_R42ZB7PB.Q6,{...props,ref,fontSize:"16px",paddingBottom:"8px",children:[helperText,children]})));try{FormHelperText.displayName="FormHelperText",FormHelperText.__docgenInfo={description:"",displayName:"FormHelperText",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},helperText:{defaultValue:{value:"helperText"},description:"HelperText for component",name:"helperText",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/form-control/Form-helper-text.tsx#FormHelperText"]={docgenInfo:FormHelperText.__docgenInfo,name:"FormHelperText",path:"../../packages/react/src/form-control/Form-helper-text.tsx#FormHelperText"})}catch(__react_docgen_typescript_loader_error){}var chunk_6CVSDS6C=__webpack_require__("../../node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs"),chunk_2GBDXOMA=__webpack_require__("../../node_modules/@chakra-ui/icon/dist/chunk-2GBDXOMA.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),chunk_TKWR62NH=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),[FormErrorStylesProvider,useFormErrorStyles]=(0,dist.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),FormErrorMessage=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const styles=(0,chunk_TKWR62NH.jC)("FormError",props),ownProps=(0,styled_system_dist.Lr)(props),field=(0,chunk_R42ZB7PB.NJ)();return(null==field?void 0:field.isInvalid)?(0,jsx_runtime.jsx)(FormErrorStylesProvider,{value:styles,children:(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{...null==field?void 0:field.getErrorMessageProps(ownProps,ref),className:(0,shared_utils_dist.cx)("chakra-form__error-message",props.className),__css:{display:"flex",alignItems:"center",...styles.text}})}):null}));FormErrorMessage.displayName="FormErrorMessage",(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const styles=useFormErrorStyles(),field=(0,chunk_R42ZB7PB.NJ)();if(!(null==field?void 0:field.isInvalid))return null;const _className=(0,shared_utils_dist.cx)("chakra-form__error-icon",props.className);return(0,jsx_runtime.jsx)(chunk_2GBDXOMA.J,{ref,"aria-hidden":!0,...props,__css:styles.icon,className:_className,children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})})).displayName="FormErrorIcon";var chunk_2OOHT3W5=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs");const Form_error_message_FormErrorMessage=(0,chunk_ZJJGQIVY.G)((({errorMessage,children,...props},ref)=>(0,jsx_runtime.jsxs)(FormErrorMessage,{...props,ref,background:"red.50",padding:"8px",borderStyle:"solid",borderColor:"red.100",borderWidth:"2px",borderRadius:"8px",gap:"5px",children:[(0,jsx_runtime.jsx)("span",{className:"material-symbols-outlined",children:"Error"}),(0,jsx_runtime.jsxs)(chunk_2OOHT3W5.x,{children:[errorMessage,children]})]})));try{Form_error_message_FormErrorMessage.displayName="FormErrorMessage",Form_error_message_FormErrorMessage.__docgenInfo={description:"",displayName:"FormErrorMessage",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},errorMessage:{defaultValue:{value:"errorMessage"},description:"errorMessage for component",name:"errorMessage",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/form-control/Form-error-message.tsx#FormErrorMessage"]={docgenInfo:Form_error_message_FormErrorMessage.__docgenInfo,name:"FormErrorMessage",path:"../../packages/react/src/form-control/Form-error-message.tsx#FormErrorMessage"})}catch(__react_docgen_typescript_loader_error){}const Form_control_stories={title:"Komponenter/Form Control",component:Form_control.N,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isRequired:{description:"Toggles if input should be required",table:{type:{summary:"boolean"}},control:"boolean"},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},isReadOnly:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},FormControl={args:{isRequired:!1,isInvalid:!1,isReadOnly:!1,isDisabled:!1},render:args=>(0,jsx_runtime.jsxs)(Form_control.N,{...args,children:[(0,jsx_runtime.jsx)(Form_label.l,{label:"Label (valgfri)"}),(0,jsx_runtime.jsx)(FormHelperText,{helperText:"Hjelpetekst"}),(0,jsx_runtime.jsx)(chunk_6CVSDS6C.I,{placeholder:"Eksempel",size:"md",variant:"outline"}),(0,jsx_runtime.jsx)(Form_error_message_FormErrorMessage,{errorMessage:"Her er feilmelding"})]})},InvalidFormControl={args:{isInvalid:!0},render:args=>(0,jsx_runtime.jsxs)(Form_control.N,{...args,children:[(0,jsx_runtime.jsx)(Form_label.l,{label:"Label (valgfri)"}),(0,jsx_runtime.jsx)(FormHelperText,{helperText:"Hjelpetekst"}),(0,jsx_runtime.jsx)(chunk_6CVSDS6C.I,{placeholder:"Eksempel",size:"md",variant:"outline"}),(0,jsx_runtime.jsx)(Form_error_message_FormErrorMessage,{errorMessage:"Feilmelding"})]})},RequiredInvalidFormControl={args:{isRequired:!0},render:args=>(0,jsx_runtime.jsxs)(Form_control.N,{...args,children:[(0,jsx_runtime.jsx)(Form_label.l,{label:"Label (valgfri)"}),(0,jsx_runtime.jsx)(FormHelperText,{helperText:"Hjelpetekst"}),(0,jsx_runtime.jsx)(chunk_6CVSDS6C.I,{placeholder:"Eksempel",size:"md",variant:"outline"}),(0,jsx_runtime.jsx)(Form_error_message_FormErrorMessage,{errorMessage:"Feilmelding"})]})},ReadOnlyFormControl={args:{isReadOnly:!0},render:args=>(0,jsx_runtime.jsxs)(Form_control.N,{...args,children:[(0,jsx_runtime.jsx)(Form_label.l,{label:"Label (valgfri)"}),(0,jsx_runtime.jsx)(FormHelperText,{helperText:"Hjelpetekst"}),(0,jsx_runtime.jsx)(chunk_6CVSDS6C.I,{placeholder:"Eksempel",size:"md",variant:"outline"}),(0,jsx_runtime.jsx)(Form_error_message_FormErrorMessage,{errorMessage:"Feilmelding"})]})},DisabledFormControl={args:{isDisabled:!0},render:args=>(0,jsx_runtime.jsxs)(Form_control.N,{...args,children:[(0,jsx_runtime.jsx)(Form_label.l,{label:"Label (valgfri)"}),(0,jsx_runtime.jsx)(FormHelperText,{helperText:"Hjelpetekst"}),(0,jsx_runtime.jsx)(chunk_6CVSDS6C.I,{placeholder:"Eksempel",size:"md",variant:"outline"}),(0,jsx_runtime.jsx)(Form_error_message_FormErrorMessage,{errorMessage:"Feilmelding"})]})};FormControl.parameters={...FormControl.parameters,docs:{...FormControl.parameters?.docs,source:{originalSource:'{\n  args: {\n    isRequired: false,\n    isInvalid: false,\n    isReadOnly: false,\n    isDisabled: false\n  },\n  render: args => <KvibFormControl {...args}>\n      <KvibFormLabel label={"Label (valgfri)"} />\n      <KvibFormHelperText helperText={"Hjelpetekst"} />\n      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />\n      <KvibFormErrorMessage errorMessage={"Her er feilmelding"} />\n    </KvibFormControl>\n}',...FormControl.parameters?.docs?.source}}},InvalidFormControl.parameters={...InvalidFormControl.parameters,docs:{...InvalidFormControl.parameters?.docs,source:{originalSource:'{\n  args: {\n    isInvalid: true\n  },\n  render: args => <KvibFormControl {...args}>\n      <KvibFormLabel label={"Label (valgfri)"} />\n      <KvibFormHelperText helperText={"Hjelpetekst"} />\n      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />\n      <KvibFormErrorMessage errorMessage={"Feilmelding"} />\n    </KvibFormControl>\n}',...InvalidFormControl.parameters?.docs?.source}}},RequiredInvalidFormControl.parameters={...RequiredInvalidFormControl.parameters,docs:{...RequiredInvalidFormControl.parameters?.docs,source:{originalSource:'{\n  args: {\n    isRequired: true\n  },\n  render: args => <KvibFormControl {...args}>\n      <KvibFormLabel label={"Label (valgfri)"} />\n      <KvibFormHelperText helperText={"Hjelpetekst"} />\n      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />\n      <KvibFormErrorMessage errorMessage={"Feilmelding"} />\n    </KvibFormControl>\n}',...RequiredInvalidFormControl.parameters?.docs?.source}}},ReadOnlyFormControl.parameters={...ReadOnlyFormControl.parameters,docs:{...ReadOnlyFormControl.parameters?.docs,source:{originalSource:'{\n  args: {\n    isReadOnly: true\n  },\n  render: args => <KvibFormControl {...args}>\n      <KvibFormLabel label={"Label (valgfri)"} />\n      <KvibFormHelperText helperText={"Hjelpetekst"} />\n      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />\n      <KvibFormErrorMessage errorMessage={"Feilmelding"} />\n    </KvibFormControl>\n}',...ReadOnlyFormControl.parameters?.docs?.source}}},DisabledFormControl.parameters={...DisabledFormControl.parameters,docs:{...DisabledFormControl.parameters?.docs,source:{originalSource:'{\n  args: {\n    isDisabled: true\n  },\n  render: args => <KvibFormControl {...args}>\n      <KvibFormLabel label={"Label (valgfri)"} />\n      <KvibFormHelperText helperText={"Hjelpetekst"} />\n      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />\n      <KvibFormErrorMessage errorMessage={"Feilmelding"} />\n    </KvibFormControl>\n}',...DisabledFormControl.parameters?.docs?.source}}};const __namedExportsOrder=["FormControl","InvalidFormControl","RequiredInvalidFormControl","ReadOnlyFormControl","DisabledFormControl"]},"../../packages/react/src/form-control/Form-control.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>FormControl});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-R42ZB7PB.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const FormControl=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.G)((({isRequired,isInvalid,isDisabled,isReadOnly,children,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.NI,{...props,ref,isRequired,isInvalid,isDisabled,isReadOnly,children})));try{FormControl.displayName="FormControl",FormControl.__docgenInfo={description:"",displayName:"FormControl",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/form-control/Form-control.tsx#FormControl"]={docgenInfo:FormControl.__docgenInfo,name:"FormControl",path:"../../packages/react/src/form-control/Form-control.tsx#FormControl"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/react/src/form-control/Form-label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>FormLabel});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-7COXQURZ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const FormLabel=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.G)((({label,children,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.l,{...props,ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.x,{as:"b",fontSize:"md",children:[label,children]})})));try{FormLabel.displayName="FormLabel",FormLabel.__docgenInfo={description:"",displayName:"FormLabel",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},label:{defaultValue:{value:'"label"'},description:"Label for the form component",name:"label",required:!1,type:{name:"string | undefined"}},requiredIndicator:{defaultValue:null,description:"",name:"requiredIndicator",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | undefined"}},optionalIndicator:{defaultValue:null,description:"",name:"optionalIndicator",required:!1,type:{name:"ReactNode"}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/form-control/Form-label.tsx#FormLabel"]={docgenInfo:FormLabel.__docgenInfo,name:"FormLabel",path:"../../packages/react/src/form-control/Form-label.tsx#FormLabel"})}catch(__react_docgen_typescript_loader_error){}}}]);