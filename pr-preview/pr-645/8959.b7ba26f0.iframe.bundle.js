"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[8959],{"../../node_modules/@chakra-ui/form-control/dist/chunk-56K2BSAJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useFormControlProps,Y:()=>useFormControl});var _chunk_DFWC5MHP_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-DFWC5MHP.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs");function useFormControl(props){const{isDisabled,isInvalid,isReadOnly,isRequired,...rest}=useFormControlProps(props);return{...rest,disabled:isDisabled,readOnly:isReadOnly,required:isRequired,"aria-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isInvalid),"aria-required":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isRequired),"aria-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Qm)(isReadOnly)}}function useFormControlProps(props){var _a,_b,_c;const field=(0,_chunk_DFWC5MHP_mjs__WEBPACK_IMPORTED_MODULE_1__.NJ)(),{id,disabled,readOnly,required,isRequired,isInvalid,isReadOnly,isDisabled,onFocus,onBlur,...rest}=props,labelIds=props["aria-describedby"]?[props["aria-describedby"]]:[];return(null==field?void 0:field.hasFeedbackText)&&(null==field?void 0:field.isInvalid)&&labelIds.push(field.feedbackId),(null==field?void 0:field.hasHelpText)&&labelIds.push(field.helpTextId),{...rest,"aria-describedby":labelIds.join(" ")||void 0,id:null!=id?id:null==field?void 0:field.id,isDisabled:null!=(_a=null!=disabled?disabled:isDisabled)?_a:null==field?void 0:field.isDisabled,isReadOnly:null!=(_b=null!=readOnly?readOnly:isReadOnly)?_b:null==field?void 0:field.isReadOnly,isRequired:null!=(_c=null!=required?required:isRequired)?_c:null==field?void 0:field.isRequired,isInvalid:null!=isInvalid?isInvalid:null==field?void 0:field.isInvalid,onFocus:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.v0)(null==field?void 0:field.onFocus,onFocus),onBlur:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.v0)(null==field?void 0:field.onBlur,onBlur)}}},"../../node_modules/@chakra-ui/hooks/dist/chunk-BBVTFCMB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>useBoolean});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useBoolean(initialState=!1){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);return[value,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({on:()=>setValue(!0),off:()=>setValue(!1),toggle:()=>setValue((prev=>!prev))})),[])]}},"../../node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/form-control/dist/chunk-56K2BSAJ.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Input=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Input2(props,ref){const{htmlSize,...rest}=props,styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.jC)("Input",rest),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(rest),input=(0,_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__.Y)(ownProps),_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-input",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.m.input,{size:htmlSize,...input,__css:styles.field,ref,className:_className})}));Input.displayName="Input",Input.id="Input"},"../../node_modules/@chakra-ui/lazy-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function lazyDisclosure(options){const{wasSelected,enabled,isSelected,mode="unmount"}=options;return!enabled||(!!isSelected||!("keepMounted"!==mode||!wasSelected))}__webpack_require__.d(__webpack_exports__,{k:()=>lazyDisclosure})},"../../node_modules/@chakra-ui/popover/dist/chunk-24I2HV4N.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>PopoverContent});var chunk_Z3POGKNI=__webpack_require__("../../node_modules/@chakra-ui/popover/dist/chunk-Z3POGKNI.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),motion=__webpack_require__("../../node_modules/framer-motion/dist/es/render/dom/motion.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function mergeVariants(variants){if(variants)return{enter:{...variants.enter,visibility:"visible"},exit:{...variants.exit,transitionEnd:{visibility:"hidden"}}}}var scaleFade={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},MotionSection=(0,chunk_ZHQNHOQS.m)(motion.E.section),PopoverTransition=(0,chunk_ZJJGQIVY.G)((function PopoverTransition2(props,ref){const{variants=scaleFade,...rest}=props,{isOpen}=(0,chunk_Z3POGKNI.lp)();return(0,jsx_runtime.jsx)(MotionSection,{ref,variants:mergeVariants(variants),initial:!1,animate:isOpen?"enter":"exit",...rest})}));PopoverTransition.displayName="PopoverTransition";var dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),PopoverContent=(0,chunk_ZJJGQIVY.G)((function PopoverContent2(props,ref){const{rootProps,motionProps,...contentProps}=props,{getPopoverProps,getPopoverPositionerProps,onAnimationComplete}=(0,chunk_Z3POGKNI.lp)(),styles=(0,chunk_Z3POGKNI.SV)(),contentStyles={position:"relative",display:"flex",flexDirection:"column",...styles.content};return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{...getPopoverPositionerProps(rootProps),__css:styles.popper,className:"chakra-popover__popper",children:(0,jsx_runtime.jsx)(PopoverTransition,{...motionProps,...getPopoverProps(contentProps,ref),onAnimationComplete:(0,dist.PP)(onAnimationComplete,contentProps.onAnimationComplete),className:(0,dist.cx)("chakra-popover__content",props.className),__css:contentStyles})})}));PopoverContent.displayName="PopoverContent"},"../../node_modules/@chakra-ui/popover/dist/chunk-3WRTUQ76.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-animation-state/dist/index.mjs"),react_use_focus_on_pointer_down_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-focus-on-pointer-down/dist/index.mjs"),react_use_focus_effect_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-focus-effect/dist/index.mjs"),react_use_disclosure_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-disclosure/dist/index.mjs"),chunk_LUYFNC5G=__webpack_require__("../../node_modules/@chakra-ui/popper/dist/chunk-LUYFNC5G.mjs"),chunk_6WT2JRWX=__webpack_require__("../../node_modules/@chakra-ui/popper/dist/chunk-6WT2JRWX.mjs"),react_use_merge_refs_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),lazy_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/lazy-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),TRIGGER={click:"click",hover:"hover"};function contains(parent,child){return parent===child||(null==parent?void 0:parent.contains(child))}function getRelatedTarget(event){var _a;const activeEl=event.currentTarget.ownerDocument.activeElement;return null!=(_a=event.relatedTarget)?_a:activeEl}var chunk_Z3POGKNI=__webpack_require__("../../node_modules/@chakra-ui/popover/dist/chunk-Z3POGKNI.mjs"),chunk_DMO4EI7P=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_UIGT7YZF=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function Popover(props){const styles=(0,chunk_DMO4EI7P.jC)("Popover",props),{children,...rest}=(0,styled_system_dist.Lr)(props),context=function usePopover(props={}){const{closeOnBlur=!0,closeOnEsc=!0,initialFocusRef,id,returnFocusOnClose=!0,autoFocus=!0,arrowSize,arrowShadowColor,trigger=TRIGGER.click,openDelay=200,closeDelay=200,isLazy,lazyBehavior="unmount",computePositionOnMount,...popperProps}=props,{isOpen,onClose,onOpen,onToggle}=(0,react_use_disclosure_dist.q)(props),anchorRef=(0,react.useRef)(null),triggerRef=(0,react.useRef)(null),popoverRef=(0,react.useRef)(null),isHoveringRef=(0,react.useRef)(!1),hasBeenOpened=(0,react.useRef)(!1);isOpen&&(hasBeenOpened.current=!0);const[hasHeader,setHasHeader]=(0,react.useState)(!1),[hasBody,setHasBody]=(0,react.useState)(!1),uuid=(0,react.useId)(),uid=null!=id?id:uuid,[triggerId,popoverId,headerId,bodyId]=["popover-trigger","popover-content","popover-header","popover-body"].map((id2=>`${id2}-${uid}`)),{referenceRef,getArrowProps,getPopperProps,getArrowInnerProps,forceUpdate}=(0,chunk_LUYFNC5G.D)({...popperProps,enabled:isOpen||!!computePositionOnMount}),animated=(0,dist.h)({isOpen,ref:popoverRef});(0,react_use_focus_on_pointer_down_dist.s)({enabled:isOpen,ref:triggerRef}),(0,react_use_focus_effect_dist.C)(popoverRef,{focusRef:triggerRef,visible:isOpen,shouldFocus:returnFocusOnClose&&trigger===TRIGGER.click}),(0,react_use_focus_effect_dist.G)(popoverRef,{focusRef:initialFocusRef,visible:isOpen,shouldFocus:autoFocus&&trigger===TRIGGER.click});const shouldRenderChildren=(0,lazy_utils_dist.k)({wasSelected:hasBeenOpened.current,enabled:isLazy,mode:lazyBehavior,isSelected:animated.present}),getPopoverProps=(0,react.useCallback)(((props2={},_ref=null)=>{const popoverProps={...props2,style:{...props2.style,transformOrigin:chunk_6WT2JRWX.Dq.transformOrigin.varRef,[chunk_6WT2JRWX.Dq.arrowSize.var]:arrowSize?`${arrowSize}px`:void 0,[chunk_6WT2JRWX.Dq.arrowShadowColor.var]:arrowShadowColor},ref:(0,react_use_merge_refs_dist.lq)(popoverRef,_ref),children:shouldRenderChildren?props2.children:null,id:popoverId,tabIndex:-1,role:"dialog",onKeyDown:(0,shared_utils_dist.v0)(props2.onKeyDown,(event=>{closeOnEsc&&"Escape"===event.key&&onClose()})),onBlur:(0,shared_utils_dist.v0)(props2.onBlur,(event=>{const relatedTarget=getRelatedTarget(event),targetIsPopover=contains(popoverRef.current,relatedTarget),targetIsTrigger=contains(triggerRef.current,relatedTarget);isOpen&&closeOnBlur&&!targetIsPopover&&!targetIsTrigger&&onClose()})),"aria-labelledby":hasHeader?headerId:void 0,"aria-describedby":hasBody?bodyId:void 0};return trigger===TRIGGER.hover&&(popoverProps.role="tooltip",popoverProps.onMouseEnter=(0,shared_utils_dist.v0)(props2.onMouseEnter,(()=>{isHoveringRef.current=!0})),popoverProps.onMouseLeave=(0,shared_utils_dist.v0)(props2.onMouseLeave,(event=>{null!==event.nativeEvent.relatedTarget&&(isHoveringRef.current=!1,setTimeout((()=>onClose()),closeDelay))}))),popoverProps}),[shouldRenderChildren,popoverId,hasHeader,headerId,hasBody,bodyId,trigger,closeOnEsc,onClose,isOpen,closeOnBlur,closeDelay,arrowShadowColor,arrowSize]),getPopoverPositionerProps=(0,react.useCallback)(((props2={},forwardedRef=null)=>getPopperProps({...props2,style:{visibility:isOpen?"visible":"hidden",...props2.style}},forwardedRef)),[isOpen,getPopperProps]),getAnchorProps=(0,react.useCallback)(((props2,_ref=null)=>({...props2,ref:(0,react_use_merge_refs_dist.lq)(_ref,anchorRef,referenceRef)})),[anchorRef,referenceRef]),openTimeout=(0,react.useRef)(),closeTimeout=(0,react.useRef)(),maybeReferenceRef=(0,react.useCallback)((node=>{null==anchorRef.current&&referenceRef(node)}),[referenceRef]),getTriggerProps=(0,react.useCallback)(((props2={},_ref=null)=>{const triggerProps={...props2,ref:(0,react_use_merge_refs_dist.lq)(triggerRef,_ref,maybeReferenceRef),id:triggerId,"aria-haspopup":"dialog","aria-expanded":isOpen,"aria-controls":popoverId};return trigger===TRIGGER.click&&(triggerProps.onClick=(0,shared_utils_dist.v0)(props2.onClick,onToggle)),trigger===TRIGGER.hover&&(triggerProps.onFocus=(0,shared_utils_dist.v0)(props2.onFocus,(()=>{void 0===openTimeout.current&&onOpen()})),triggerProps.onBlur=(0,shared_utils_dist.v0)(props2.onBlur,(event=>{const relatedTarget=getRelatedTarget(event),isValidBlur=!contains(popoverRef.current,relatedTarget);isOpen&&closeOnBlur&&isValidBlur&&onClose()})),triggerProps.onKeyDown=(0,shared_utils_dist.v0)(props2.onKeyDown,(event=>{"Escape"===event.key&&onClose()})),triggerProps.onMouseEnter=(0,shared_utils_dist.v0)(props2.onMouseEnter,(()=>{isHoveringRef.current=!0,openTimeout.current=window.setTimeout((()=>onOpen()),openDelay)})),triggerProps.onMouseLeave=(0,shared_utils_dist.v0)(props2.onMouseLeave,(()=>{isHoveringRef.current=!1,openTimeout.current&&(clearTimeout(openTimeout.current),openTimeout.current=void 0),closeTimeout.current=window.setTimeout((()=>{!1===isHoveringRef.current&&onClose()}),closeDelay)}))),triggerProps}),[triggerId,isOpen,popoverId,trigger,maybeReferenceRef,onToggle,onOpen,closeOnBlur,onClose,openDelay,closeDelay]);(0,react.useEffect)((()=>()=>{openTimeout.current&&clearTimeout(openTimeout.current),closeTimeout.current&&clearTimeout(closeTimeout.current)}),[]);const getHeaderProps=(0,react.useCallback)(((props2={},ref=null)=>({...props2,id:headerId,ref:(0,react_use_merge_refs_dist.lq)(ref,(node=>{setHasHeader(!!node)}))})),[headerId]),getBodyProps=(0,react.useCallback)(((props2={},ref=null)=>({...props2,id:bodyId,ref:(0,react_use_merge_refs_dist.lq)(ref,(node=>{setHasBody(!!node)}))})),[bodyId]);return{forceUpdate,isOpen,onAnimationComplete:animated.onComplete,onClose,getAnchorProps,getArrowProps,getArrowInnerProps,getPopoverPositionerProps,getPopoverProps,getTriggerProps,getHeaderProps,getBodyProps}}({...rest,direction:(0,chunk_UIGT7YZF.F)().direction});return(0,jsx_runtime.jsx)(chunk_Z3POGKNI.H2,{value:context,children:(0,jsx_runtime.jsx)(chunk_Z3POGKNI.WG,{value:styles,children:(0,shared_utils_dist.Pu)(children,{isOpen:context.isOpen,onClose:context.onClose,forceUpdate:context.forceUpdate})})})}Popover.displayName="Popover"},"../../node_modules/@chakra-ui/popover/dist/chunk-DY5QRMBO.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>PopoverAnchor});var _chunk_Z3POGKNI_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/popover/dist/chunk-Z3POGKNI.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function PopoverAnchor(props){const child=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(props.children),{getAnchorProps}=(0,_chunk_Z3POGKNI_mjs__WEBPACK_IMPORTED_MODULE_1__.lp)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,getAnchorProps(child.props,child.ref))}PopoverAnchor.displayName="PopoverAnchor"},"../../node_modules/@chakra-ui/popover/dist/chunk-OFUG2FGD.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>PopoverTrigger});var _chunk_Z3POGKNI_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/popover/dist/chunk-Z3POGKNI.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function PopoverTrigger(props){const child=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(props.children),{getTriggerProps}=(0,_chunk_Z3POGKNI_mjs__WEBPACK_IMPORTED_MODULE_1__.lp)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,getTriggerProps(child.props,child.ref))}PopoverTrigger.displayName="PopoverTrigger"},"../../node_modules/@chakra-ui/popover/dist/chunk-Z3POGKNI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H2:()=>PopoverProvider,SV:()=>usePopoverStyles,WG:()=>PopoverStylesProvider,lp:()=>usePopoverContext});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),[PopoverProvider,usePopoverContext]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__.k)({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[PopoverStylesProvider,usePopoverStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__.k)({name:"PopoverStylesContext",errorMessage:"usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Popover />\" "})},"../../node_modules/@chakra-ui/react-use-animation-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>useAnimationState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs"),_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/chunk-3XANSPY5.mjs");function useAnimationState(props){const{isOpen,ref}=props,[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpen),[once,setOnce]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{once||(setMounted(isOpen),setOnce(!0))}),[isOpen,once,mounted]),(0,_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_1__.O)((()=>ref.current),"animationend",(()=>{setMounted(isOpen)}));return{present:!(!isOpen&&!mounted),onComplete(){var _a;const evt=new((0,_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_2__.kR)(ref.current).CustomEvent)("animationend",{bubbles:!0});null==(_a=ref.current)||_a.dispatchEvent(evt)}}}},"../../node_modules/@chakra-ui/react-use-focus-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>useFocusOnHide,G:()=>useFocusOnShow});var _chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/chunk-3XANSPY5.mjs"),_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/chunk-ROURZMX4.mjs"),_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/index.mjs"),_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs"),_chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),_chakra_ui_react_use_update_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/react-use-update-effect/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useFocusOnHide(containerRef,options){const{shouldFocus:shouldFocusProp,visible,focusRef}=options,shouldFocus=shouldFocusProp&&!visible;(0,_chakra_ui_react_use_update_effect__WEBPACK_IMPORTED_MODULE_3__.r)((()=>{if(!shouldFocus)return;if(function preventReturnFocus(containerRef){const el=containerRef.current;if(!el)return!1;const activeElement=(0,_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_1__.vY)(el);return!!activeElement&&!el.contains(activeElement)&&!!(0,_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_2__.Wq)(activeElement)}(containerRef))return;const el=(null==focusRef?void 0:focusRef.current)||containerRef.current;let rafId;return el?(rafId=requestAnimationFrame((()=>{el.focus({preventScroll:!0})})),()=>{cancelAnimationFrame(rafId)}):void 0}),[shouldFocus,containerRef,focusRef])}var defaultOptions={preventScroll:!0,shouldFocus:!1};function useFocusOnShow(target,options=defaultOptions){const{focusRef,preventScroll,shouldFocus,visible}=options,element=function isRefObject(val){return"current"in val}(target)?target.current:target,autoFocusValue=shouldFocus&&visible,autoFocusRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(autoFocusValue),lastVisibleRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(visible);(0,_chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_4__.G)((()=>{!lastVisibleRef.current&&visible&&(autoFocusRef.current=autoFocusValue),lastVisibleRef.current=visible}),[visible,autoFocusValue]);const onFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(visible&&element&&autoFocusRef.current&&(autoFocusRef.current=!1,!element.contains(document.activeElement)))if(null==focusRef?void 0:focusRef.current)requestAnimationFrame((()=>{var _a;null==(_a=focusRef.current)||_a.focus({preventScroll})}));else{const tabbableEls=(0,_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_5__.t5)(element);tabbableEls.length>0&&requestAnimationFrame((()=>{tabbableEls[0].focus({preventScroll})}))}}),[visible,preventScroll,element,focusRef]);(0,_chakra_ui_react_use_update_effect__WEBPACK_IMPORTED_MODULE_3__.r)((()=>{onFocus()}),[onFocus]),(0,_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_6__.O)(element,"transitionend",onFocus)}},"../../node_modules/@chakra-ui/react-use-focus-on-pointer-down/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useFocusOnPointerDown});var _chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs");var isDom=()=>"undefined"!=typeof window;var pt=v=>isDom()&&v.test(function getPlatform(){var _a;const agent=navigator.userAgentData;return null!=(_a=null==agent?void 0:agent.platform)?_a:navigator.platform}()),isSafari=()=>{return pt(/mac|iphone|ipad|ipod/i)&&(v=/apple/i,isDom()&&v.test(navigator.vendor));var v};function useFocusOnPointerDown(props){const{ref,elements,enabled}=props,doc=()=>{var _a,_b;return null!=(_b=null==(_a=ref.current)?void 0:_a.ownerDocument)?_b:document};(0,_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_0__.O)(doc,"pointerdown",(event=>{if(!isSafari()||!enabled)return;const target=event.target,isValidTarget=(null!=elements?elements:[ref]).some((elementOrRef=>{const el=function isRefObject(val){return"current"in val}(elementOrRef)?elementOrRef.current:elementOrRef;return(null==el?void 0:el.contains(target))||el===target}));doc().activeElement!==target&&isValidTarget&&(event.preventDefault(),target.focus())}))}}}]);