"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[8005],{"../../node_modules/@chakra-ui/editable/dist/chunk-6XCKNNTK.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>commonStyles});var commonStyles={fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent"}},"../../node_modules/@chakra-ui/editable/dist/chunk-7XO4TBDN.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>EditableInput});var _chunk_6XCKNNTK_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-6XCKNNTK.mjs"),_chunk_WYY72ITE_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-WYY72ITE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),EditableInput=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function EditableInput2(props,ref){const{getInputProps}=(0,_chunk_WYY72ITE_mjs__WEBPACK_IMPORTED_MODULE_2__.V)(),styles=(0,_chunk_WYY72ITE_mjs__WEBPACK_IMPORTED_MODULE_2__.d4)(),inputProps=getInputProps(props,ref),_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("chakra-editable__input",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.input,{...inputProps,__css:{outline:0,..._chunk_6XCKNNTK_mjs__WEBPACK_IMPORTED_MODULE_5__.i,...styles.input},className:_className})}));EditableInput.displayName="EditableInput"},"../../node_modules/@chakra-ui/editable/dist/chunk-ROCN3PRT.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Editable});var dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-focus-on-pointer-down/dist/index.mjs"),react_use_safe_layout_effect_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),react_use_update_effect_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-update-effect/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-controllable-state/dist/index.mjs"),react_use_merge_refs_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js");function contains(parent,child){return!!parent&&(parent===child||parent.contains(child))}var chunk_WYY72ITE=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-WYY72ITE.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Editable=(0,chunk_ZJJGQIVY.G)((function Editable2(props,ref){const styles=(0,chunk_DMO4EI7P.jC)("Editable",props),ownProps=(0,styled_system_dist.Lr)(props),{htmlProps,...context}=function useEditable(props={}){const{onChange:onChangeProp,onCancel:onCancelProp,onSubmit:onSubmitProp,onBlur:onBlurProp,value:valueProp,isDisabled,defaultValue,startWithEditView,isPreviewFocusable=!0,submitOnBlur=!0,selectAllOnFocus=!0,placeholder,onEdit:onEditCallback,finalFocusRef,...htmlProps}=props,onEditProp=(0,react_use_callback_ref_dist.W)(onEditCallback),defaultIsEditing=Boolean(startWithEditView&&!isDisabled),[isEditing,setIsEditing]=(0,react.useState)(defaultIsEditing),[value,setValue]=(0,react_use_controllable_state_dist.T)({defaultValue:defaultValue||"",value:valueProp,onChange:onChangeProp}),[prevValue,setPrevValue]=(0,react.useState)(value),inputRef=(0,react.useRef)(null),previewRef=(0,react.useRef)(null),editButtonRef=(0,react.useRef)(null),cancelButtonRef=(0,react.useRef)(null),submitButtonRef=(0,react.useRef)(null);(0,dist.s)({ref:inputRef,enabled:isEditing,elements:[cancelButtonRef,submitButtonRef]});const isInteractive=!isEditing&&!isDisabled;(0,react_use_safe_layout_effect_dist.G)((()=>{var _a,_b;isEditing&&(null==(_a=inputRef.current)||_a.focus(),selectAllOnFocus&&(null==(_b=inputRef.current)||_b.select()))}),[]),(0,react_use_update_effect_dist.r)((()=>{var _a,_b,_c,_d;isEditing?(null==(_c=inputRef.current)||_c.focus(),selectAllOnFocus&&(null==(_d=inputRef.current)||_d.select()),null==onEditProp||onEditProp()):finalFocusRef?null==(_a=finalFocusRef.current)||_a.focus():null==(_b=editButtonRef.current)||_b.focus()}),[isEditing,onEditProp,selectAllOnFocus]);const onEdit=(0,react.useCallback)((()=>{isInteractive&&setIsEditing(!0)}),[isInteractive]),onUpdatePrevValue=(0,react.useCallback)((()=>{setPrevValue(value)}),[value]),onCancel=(0,react.useCallback)((()=>{setIsEditing(!1),setValue(prevValue),null==onCancelProp||onCancelProp(prevValue),null==onBlurProp||onBlurProp(prevValue)}),[onCancelProp,onBlurProp,setValue,prevValue]),onSubmit=(0,react.useCallback)((()=>{setIsEditing(!1),setPrevValue(value),null==onSubmitProp||onSubmitProp(value),null==onBlurProp||onBlurProp(prevValue)}),[value,onSubmitProp,onBlurProp,prevValue]);(0,react.useEffect)((()=>{if(isEditing)return;const inputEl=inputRef.current;(null==inputEl?void 0:inputEl.ownerDocument.activeElement)===inputEl&&(null==inputEl||inputEl.blur())}),[isEditing]);const onChange=(0,react.useCallback)((event=>{setValue(event.currentTarget.value)}),[setValue]),onKeyDown=(0,react.useCallback)((event=>{const eventKey=event.key,action={Escape:onCancel,Enter:event2=>{event2.shiftKey||event2.metaKey||onSubmit()}}[eventKey];action&&(event.preventDefault(),action(event))}),[onCancel,onSubmit]),onKeyDownWithoutSubmit=(0,react.useCallback)((event=>{const eventKey=event.key,action={Escape:onCancel}[eventKey];action&&(event.preventDefault(),action(event))}),[onCancel]),isValueEmpty=0===value.length,onBlur=(0,react.useCallback)((event=>{var _a;if(!isEditing)return;const doc=event.currentTarget.ownerDocument,relatedTarget=null!=(_a=event.relatedTarget)?_a:doc.activeElement,targetIsCancel=contains(cancelButtonRef.current,relatedTarget),targetIsSubmit=contains(submitButtonRef.current,relatedTarget);!targetIsCancel&&!targetIsSubmit&&(submitOnBlur?onSubmit():onCancel())}),[submitOnBlur,onSubmit,onCancel,isEditing]),getPreviewProps=(0,react.useCallback)(((props2={},ref=null)=>{const tabIndex=isInteractive&&isPreviewFocusable?0:void 0;return{...props2,ref:(0,react_use_merge_refs_dist.lq)(ref,previewRef),children:isValueEmpty?placeholder:value,hidden:isEditing,"aria-disabled":(0,shared_utils_dist.Qm)(isDisabled),tabIndex,onFocus:(0,shared_utils_dist.v0)(props2.onFocus,onEdit,onUpdatePrevValue)}}),[isDisabled,isEditing,isInteractive,isPreviewFocusable,isValueEmpty,onEdit,onUpdatePrevValue,placeholder,value]),getInputProps=(0,react.useCallback)(((props2={},ref=null)=>({...props2,hidden:!isEditing,placeholder,ref:(0,react_use_merge_refs_dist.lq)(ref,inputRef),disabled:isDisabled,"aria-disabled":(0,shared_utils_dist.Qm)(isDisabled),value,onBlur:(0,shared_utils_dist.v0)(props2.onBlur,onBlur),onChange:(0,shared_utils_dist.v0)(props2.onChange,onChange),onKeyDown:(0,shared_utils_dist.v0)(props2.onKeyDown,onKeyDown),onFocus:(0,shared_utils_dist.v0)(props2.onFocus,onUpdatePrevValue)})),[isDisabled,isEditing,onBlur,onChange,onKeyDown,onUpdatePrevValue,placeholder,value]),getTextareaProps=(0,react.useCallback)(((props2={},ref=null)=>({...props2,hidden:!isEditing,placeholder,ref:(0,react_use_merge_refs_dist.lq)(ref,inputRef),disabled:isDisabled,"aria-disabled":(0,shared_utils_dist.Qm)(isDisabled),value,onBlur:(0,shared_utils_dist.v0)(props2.onBlur,onBlur),onChange:(0,shared_utils_dist.v0)(props2.onChange,onChange),onKeyDown:(0,shared_utils_dist.v0)(props2.onKeyDown,onKeyDownWithoutSubmit),onFocus:(0,shared_utils_dist.v0)(props2.onFocus,onUpdatePrevValue)})),[isDisabled,isEditing,onBlur,onChange,onKeyDownWithoutSubmit,onUpdatePrevValue,placeholder,value]),getEditButtonProps=(0,react.useCallback)(((props2={},ref=null)=>({"aria-label":"Edit",...props2,type:"button",onClick:(0,shared_utils_dist.v0)(props2.onClick,onEdit),ref:(0,react_use_merge_refs_dist.lq)(ref,editButtonRef),disabled:isDisabled})),[onEdit,isDisabled]),getSubmitButtonProps=(0,react.useCallback)(((props2={},ref=null)=>({...props2,"aria-label":"Submit",ref:(0,react_use_merge_refs_dist.lq)(submitButtonRef,ref),type:"button",onClick:(0,shared_utils_dist.v0)(props2.onClick,onSubmit),disabled:isDisabled})),[onSubmit,isDisabled]),getCancelButtonProps=(0,react.useCallback)(((props2={},ref=null)=>({"aria-label":"Cancel",id:"cancel",...props2,ref:(0,react_use_merge_refs_dist.lq)(cancelButtonRef,ref),type:"button",onClick:(0,shared_utils_dist.v0)(props2.onClick,onCancel),disabled:isDisabled})),[onCancel,isDisabled]);return{isEditing,isDisabled,isValueEmpty,value,onEdit,onCancel,onSubmit,getPreviewProps,getInputProps,getTextareaProps,getEditButtonProps,getSubmitButtonProps,getCancelButtonProps,htmlProps}}(ownProps),{isEditing,onSubmit,onCancel,onEdit}=context,_className=(0,shared_utils_dist.cx)("chakra-editable",props.className),children=(0,shared_utils_dist.Pu)(props.children,{isEditing,onSubmit,onCancel,onEdit});return(0,jsx_runtime.jsx)(chunk_WYY72ITE.ZQ,{value:context,children:(0,jsx_runtime.jsx)(chunk_WYY72ITE.Me,{value:styles,children:(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,...htmlProps,className:_className,children})})})}));Editable.displayName="Editable"},"../../node_modules/@chakra-ui/editable/dist/chunk-USE7AZZJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>EditablePreview});var _chunk_6XCKNNTK_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-6XCKNNTK.mjs"),_chunk_WYY72ITE_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-WYY72ITE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),EditablePreview=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function EditablePreview2(props,ref){const{getPreviewProps}=(0,_chunk_WYY72ITE_mjs__WEBPACK_IMPORTED_MODULE_2__.V)(),styles=(0,_chunk_WYY72ITE_mjs__WEBPACK_IMPORTED_MODULE_2__.d4)(),previewProps=getPreviewProps(props,ref),_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("chakra-editable__preview",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.span,{...previewProps,__css:{cursor:"text",display:"inline-block",..._chunk_6XCKNNTK_mjs__WEBPACK_IMPORTED_MODULE_5__.i,...styles.preview},className:_className})}));EditablePreview.displayName="EditablePreview"},"../../node_modules/@chakra-ui/editable/dist/chunk-WYY72ITE.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Me:()=>EditableStylesProvider,V:()=>useEditableContext,ZQ:()=>EditableProvider,d4:()=>useEditableStyles});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),[EditableStylesProvider,useEditableStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__.k)({name:"EditableStylesContext",errorMessage:"useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Editable />\" "}),[EditableProvider,useEditableContext]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__.k)({name:"EditableContext",errorMessage:"useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"})},"../../node_modules/@chakra-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useControllableState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs");function useControllableState(props){const{value:valueProp,defaultValue,onChange,shouldUpdate=(prev,next)=>prev!==next}=props,onChangeProp=(0,_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(onChange),shouldUpdateProp=(0,_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(shouldUpdate),[uncontrolledState,setUncontrolledState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),controlled=void 0!==valueProp,value=controlled?valueProp:uncontrolledState,setValue=(0,_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)((next=>{const nextValue="function"==typeof next?next(value):next;shouldUpdateProp(value,nextValue)&&(controlled||setUncontrolledState(nextValue),onChangeProp(nextValue))}),[controlled,onChangeProp,value,shouldUpdateProp]);return[value,setValue]}},"../../node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useEventListener});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs");function useEventListener(target,event,handler,options){const listener=(0,_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(handler);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const node="function"==typeof target?target():null!=target?target:document;if(handler&&node)return node.addEventListener(event,listener,options),()=>{node.removeEventListener(event,listener,options)}}),[event,target,options,listener,handler]),()=>{const node="function"==typeof target?target():null!=target?target:document;null==node||node.removeEventListener(event,listener,options)}}},"../../node_modules/@chakra-ui/react-use-focus-on-pointer-down/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useFocusOnPointerDown});var _chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs");var isDom=()=>"undefined"!=typeof window;var pt=v=>isDom()&&v.test(function getPlatform(){var _a;const agent=navigator.userAgentData;return null!=(_a=null==agent?void 0:agent.platform)?_a:navigator.platform}()),isSafari=()=>{return pt(/mac|iphone|ipad|ipod/i)&&(v=/apple/i,isDom()&&v.test(navigator.vendor));var v};function useFocusOnPointerDown(props){const{ref,elements,enabled}=props,doc=()=>{var _a,_b;return null!=(_b=null==(_a=ref.current)?void 0:_a.ownerDocument)?_b:document};(0,_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_0__.O)(doc,"pointerdown",(event=>{if(!isSafari()||!enabled)return;const target=event.target,isValidTarget=(null!=elements?elements:[ref]).some((elementOrRef=>{const el=function isRefObject(val){return"current"in val}(elementOrRef)?elementOrRef.current:elementOrRef;return(null==el?void 0:el.contains(target))||el===target}));doc().activeElement!==target&&isValidTarget&&(event.preventDefault(),target.focus())}))}},"./stories/components/skjemaelementer/editable/Editable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Editable:()=>Editable,EditableTextarea:()=>Editable_stories_EditableTextarea,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Editable_stories});var chunk_ROCN3PRT=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-ROCN3PRT.mjs"),chunk_USE7AZZJ=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-USE7AZZJ.mjs"),chunk_7XO4TBDN=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-7XO4TBDN.mjs"),chunk_6XCKNNTK=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-6XCKNNTK.mjs"),chunk_WYY72ITE=__webpack_require__("../../node_modules/@chakra-ui/editable/dist/chunk-WYY72ITE.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),EditableTextarea=(0,chunk_ZJJGQIVY.G)((function EditableTextarea2(props,ref){const{getTextareaProps}=(0,chunk_WYY72ITE.V)(),styles=(0,chunk_WYY72ITE.d4)(),textareaProps=getTextareaProps(props,ref),_className=(0,dist.cx)("chakra-editable__textarea",props.className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.textarea,{...textareaProps,__css:{outline:0,...chunk_6XCKNNTK.i,...styles.textarea},className:_className})}));EditableTextarea.displayName="EditableTextarea";const Editable_stories={title:"Skjemaelementer/Editable",component:chunk_ROCN3PRT.C,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{defaultValue:{description:"The initial value of the Editable in both edit & preview mode",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the Editable will be disabled.",table:{type:{summary:"boolean"}},control:"boolean"},isPreviewFocusable:{description:"If true, the read only view, has a tabIndex set to 0 so it can receive focus via the keyboard or click.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},onCancel:{description:"Callback invoked when user cancels input with the Esc key. It provides the last confirmed value as argument.",table:{type:{summary:"(previousValue: string) => void"}},control:"text"},onChange:{description:"Callback invoked when user changes input.",table:{type:{summary:"(nextValue: string) => void"}},control:"text"},onEdit:{description:"Callback invoked once the user enters edit mode.",table:{type:{summary:"() => void"}},control:"text"},onSubmit:{description:"Callback invoked when user confirms value with enter key or by blurring input.",table:{type:{summary:"(nextValue: string) => void"}},control:"text"},placeholder:{description:"The placeholder text when the value is empty.",table:{type:{summary:"string"}},control:"text"},selectAllOnFocus:{description:"If true, the input's text will be highlighted on focus.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},startWithEditView:{description:"If true, the Editable will start with edit mode by default.",table:{type:{summary:"boolean"}},control:"boolean"},submitOnBlur:{description:"If true, it'll update the value onBlur and turn off the edit mode.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},value:{description:"The value of the Editable in both edit & preview mode",table:{type:{summary:"string"}},control:"text"}},args:{onCancel:void 0,onChange:void 0,onEdit:void 0,onSubmit:void 0}},Editable={args:{defaultValue:"Redigerbar tekst"},render:args=>(0,jsx_runtime.jsxs)(chunk_ROCN3PRT.C,{...args,children:[(0,jsx_runtime.jsx)(chunk_USE7AZZJ.w,{}),(0,jsx_runtime.jsx)(chunk_7XO4TBDN.V,{})]})},Editable_stories_EditableTextarea={args:{defaultValue:"Redigerbar tekst"},render:args=>(0,jsx_runtime.jsxs)(chunk_ROCN3PRT.C,{...args,children:[(0,jsx_runtime.jsx)(chunk_USE7AZZJ.w,{}),(0,jsx_runtime.jsx)(EditableTextarea,{})]})};Editable.parameters={storySource:{source:'{\n  args: { defaultValue: "Redigerbar tekst" },\n  render: (args) => (\n    <KvibEditable {...args}>\n      <KvibEditablePreview />\n      <KvibEditableInput />\n    </KvibEditable>\n  ),\n}'},...Editable.parameters},Editable_stories_EditableTextarea.parameters={storySource:{source:'{\n  args: { defaultValue: "Redigerbar tekst" },\n  render: (args) => (\n    <KvibEditable {...args}>\n      <KvibEditablePreview />\n      <KvibEditableTextarea />\n    </KvibEditable>\n  ),\n}'},...Editable_stories_EditableTextarea.parameters},Editable.parameters={...Editable.parameters,docs:{...Editable.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: "Redigerbar tekst"\n  },\n  render: args => <KvibEditable {...args}>\n      <KvibEditablePreview />\n      <KvibEditableInput />\n    </KvibEditable>\n}',...Editable.parameters?.docs?.source}}},Editable_stories_EditableTextarea.parameters={...Editable_stories_EditableTextarea.parameters,docs:{...Editable_stories_EditableTextarea.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: "Redigerbar tekst"\n  },\n  render: args => <KvibEditable {...args}>\n      <KvibEditablePreview />\n      <KvibEditableTextarea />\n    </KvibEditable>\n}',...Editable_stories_EditableTextarea.parameters?.docs?.source}}};const __namedExportsOrder=["Editable","EditableTextarea"]}}]);