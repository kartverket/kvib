"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[165,389],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/button/dist/chunk-T6ZDZOLO.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>ButtonGroupProvider,i:()=>useButtonGroup});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),[ButtonGroupProvider,useButtonGroup]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__.k)({strict:!1,name:"ButtonGroupContext"})},"../../node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("../../node_modules/react/index.js");var chunk_T6ZDZOLO=__webpack_require__("../../node_modules/@chakra-ui/button/dist/chunk-T6ZDZOLO.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ButtonIcon(props){const{children,className,...rest}=props,_children=(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{"aria-hidden":!0,focusable:!1}):children,_className=(0,dist.cx)("chakra-button__icon",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...rest,className:_className,children:_children})}ButtonIcon.displayName="ButtonIcon";var chunk_5PH6ULNP=__webpack_require__("../../node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs");function ButtonSpinner(props){const{label,placement,spacing="0.5rem",children=(0,jsx_runtime.jsx)(chunk_5PH6ULNP.$,{color:"currentColor",width:"1em",height:"1em"}),className,__css,...rest}=props,_className=(0,dist.cx)("chakra-button__spinner",className),marginProp="start"===placement?"marginEnd":"marginStart",spinnerStyles=(0,react.useMemo)((()=>({display:"flex",alignItems:"center",position:label?"relative":"absolute",[marginProp]:label?spacing:0,fontSize:"1em",lineHeight:"normal",...__css})),[__css,label,marginProp,spacing]);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:_className,...rest,__css:spinnerStyles,children})}ButtonSpinner.displayName="ButtonSpinner";var react_use_merge_refs_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),Button=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const group=(0,chunk_T6ZDZOLO.i)(),styles=(0,chunk_DMO4EI7P.mq)("Button",{...group,...props}),{isDisabled=null==group?void 0:group.isDisabled,isLoading,isActive,children,leftIcon,rightIcon,loadingText,iconSpacing="0.5rem",type,spinner,spinnerPlacement="start",className,as,...rest}=(0,styled_system_dist.Lr)(props),buttonStyles=(0,react.useMemo)((()=>{const _focus={...null==styles?void 0:styles._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...styles,...!!group&&{_focus}}}),[styles,group]),{ref:_ref,type:defaultType}=function useButtonType(value){const[isButton,setIsButton]=(0,react.useState)(!value);return{ref:(0,react.useCallback)((node=>{node&&setIsButton("BUTTON"===node.tagName)}),[]),type:isButton?"button":void 0}}(as),contentProps={rightIcon,leftIcon,iconSpacing,children};return(0,jsx_runtime.jsxs)(chunk_ZHQNHOQS.m.button,{ref:(0,react_use_merge_refs_dist.qq)(ref,_ref),as,type:null!=type?type:defaultType,"data-active":(0,dist.PB)(isActive),"data-loading":(0,dist.PB)(isLoading),__css:buttonStyles,className:(0,dist.cx)("chakra-button",className),...rest,disabled:isDisabled||isLoading,children:[isLoading&&"start"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:loadingText,placement:"start",spacing:iconSpacing,children:spinner}),isLoading?loadingText||(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{opacity:0,children:(0,jsx_runtime.jsx)(ButtonContent,{...contentProps})}):(0,jsx_runtime.jsx)(ButtonContent,{...contentProps}),isLoading&&"end"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:loadingText,placement:"end",spacing:iconSpacing,children:spinner})]})}));function ButtonContent(props){const{leftIcon,rightIcon,children,iconSpacing}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leftIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginEnd:iconSpacing,children:leftIcon}),children,rightIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginStart:iconSpacing,children:rightIcon})]})}Button.displayName="Button"},"../../node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>HStack});var _chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),HStack=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__.K,{align:"center",...props,direction:"row",ref})));HStack.displayName="HStack"},"../../node_modules/@chakra-ui/layout/dist/chunk-7ELO524Q.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Wrap,U:()=>WrapItem});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Wrap=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Wrap2(props,ref){const{spacing="0.5rem",spacingX,spacingY,children,justify,direction,align,className,shouldWrapChildren,...rest}=props,_children=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>shouldWrapChildren?react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WrapItem,{children:child},index))):children),[children,shouldWrapChildren]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-wrap",className),...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:justify,alignItems:align,flexDirection:direction,listStyleType:"none",gap:spacing,columnGap:spacingX,rowGap:spacingY,padding:"0"},children:_children})})}));Wrap.displayName="Wrap";var WrapItem=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function WrapItem2(props,ref){const{className,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.li,{ref,__css:{display:"flex",alignItems:"flex-start"},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-wrap__listitem",className),...rest})}));WrapItem.displayName="WrapItem"},"../../node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Center,u:()=>AbsoluteCenter});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Center=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Center.displayName="Center";var centerStyles={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},AbsoluteCenter=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function AbsoluteCenter2(props,ref){const{axis="both",...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m.div,{ref,__css:centerStyles[axis],...rest,position:"absolute"})}))},"../../node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>VStack});var _chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),VStack=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_ZHMYA64R_mjs__WEBPACK_IMPORTED_MODULE_2__.K,{align:"center",...props,direction:"column",ref})));VStack.displayName="VStack"},"../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,shared_utils_dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@chakra-ui/tooltip/dist/chunk-KICXRNWJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var scale={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},chunk_3XANSPY5=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/chunk-3XANSPY5.mjs");function getScrollParent(el){return["html","body","#document"].includes(el.localName)?el.ownerDocument.body:(0,chunk_3XANSPY5.Re)(el)&&function isScrollParent(el){const win=el.ownerDocument.defaultView||window,{overflow,overflowX,overflowY}=win.getComputedStyle(el);return/auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX)}(el)?el:getScrollParent(function getParent(el){return"html"===el.localName?el:el.assignedSlot||el.parentElement||el.ownerDocument.documentElement}(el))}var chunk_LUYFNC5G=__webpack_require__("../../node_modules/@chakra-ui/popper/dist/chunk-LUYFNC5G.mjs"),chunk_6WT2JRWX=__webpack_require__("../../node_modules/@chakra-ui/popper/dist/chunk-6WT2JRWX.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-disclosure/dist/index.mjs"),react_use_event_listener_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs"),react_use_merge_refs_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),getDoc=ref=>{var _a;return(null==(_a=ref.current)?void 0:_a.ownerDocument)||document},getWin=ref=>{var _a,_b;return(null==(_b=null==(_a=ref.current)?void 0:_a.ownerDocument)?void 0:_b.defaultView)||window};function useTooltip(props={}){const{openDelay=0,closeDelay=0,closeOnClick=!0,closeOnMouseDown,closeOnScroll,closeOnPointerDown=closeOnMouseDown,closeOnEsc=!0,onOpen:onOpenProp,onClose:onCloseProp,placement,id,isOpen:isOpenProp,defaultIsOpen,arrowSize=10,arrowShadowColor,arrowPadding,modifiers,isDisabled,gutter,offset,direction,...htmlProps}=props,{isOpen,onOpen,onClose}=(0,dist.q)({isOpen:isOpenProp,defaultIsOpen,onOpen:onOpenProp,onClose:onCloseProp}),{referenceRef,getPopperProps,getArrowInnerProps,getArrowProps}=(0,chunk_LUYFNC5G.D)({enabled:isOpen,placement,arrowPadding,modifiers,gutter,offset,direction}),uuid=(0,react.useId)(),tooltipId=`tooltip-${null!=id?id:uuid}`,ref=(0,react.useRef)(null),enterTimeout=(0,react.useRef)(),clearEnterTimeout=(0,react.useCallback)((()=>{enterTimeout.current&&(clearTimeout(enterTimeout.current),enterTimeout.current=void 0)}),[]),exitTimeout=(0,react.useRef)(),clearExitTimeout=(0,react.useCallback)((()=>{exitTimeout.current&&(clearTimeout(exitTimeout.current),exitTimeout.current=void 0)}),[]),closeNow=(0,react.useCallback)((()=>{clearExitTimeout(),onClose()}),[onClose,clearExitTimeout]),dispatchCloseEvent=function useCloseEvent(ref,close){return(0,react.useEffect)((()=>{const doc=getDoc(ref);return doc.addEventListener(closeEventName,close),()=>doc.removeEventListener(closeEventName,close)}),[close,ref]),()=>{const doc=getDoc(ref),win=getWin(ref);doc.dispatchEvent(new win.CustomEvent(closeEventName))}}(ref,closeNow),openWithDelay=(0,react.useCallback)((()=>{if(!isDisabled&&!enterTimeout.current){isOpen&&dispatchCloseEvent();const win=getWin(ref);enterTimeout.current=win.setTimeout(onOpen,openDelay)}}),[dispatchCloseEvent,isDisabled,isOpen,onOpen,openDelay]),closeWithDelay=(0,react.useCallback)((()=>{clearEnterTimeout();const win=getWin(ref);exitTimeout.current=win.setTimeout(closeNow,closeDelay)}),[closeDelay,closeNow,clearEnterTimeout]),onClick=(0,react.useCallback)((()=>{isOpen&&closeOnClick&&closeWithDelay()}),[closeOnClick,closeWithDelay,isOpen]),onPointerDown=(0,react.useCallback)((()=>{isOpen&&closeOnPointerDown&&closeWithDelay()}),[closeOnPointerDown,closeWithDelay,isOpen]),onKeyDown=(0,react.useCallback)((event=>{isOpen&&"Escape"===event.key&&closeWithDelay()}),[isOpen,closeWithDelay]);(0,react_use_event_listener_dist.O)((()=>getDoc(ref)),"keydown",closeOnEsc?onKeyDown:void 0),(0,react_use_event_listener_dist.O)((()=>{const node=ref.current;if(!node)return null;const scrollParent=getScrollParent(node);return"body"===scrollParent.localName?getWin(ref):scrollParent}),"scroll",(()=>{isOpen&&closeOnScroll&&closeNow()}),{passive:!0,capture:!0}),(0,react.useEffect)((()=>{isDisabled&&(clearEnterTimeout(),isOpen&&onClose())}),[isDisabled,isOpen,onClose,clearEnterTimeout]),(0,react.useEffect)((()=>()=>{clearEnterTimeout(),clearExitTimeout()}),[clearEnterTimeout,clearExitTimeout]),(0,react_use_event_listener_dist.O)((()=>ref.current),"pointerleave",closeWithDelay);const getTriggerProps=(0,react.useCallback)(((props2={},_ref=null)=>({...props2,ref:(0,react_use_merge_refs_dist.lq)(ref,_ref,referenceRef),onPointerEnter:(0,shared_utils_dist.v0)(props2.onPointerEnter,(e=>{"touch"!==e.pointerType&&openWithDelay()})),onClick:(0,shared_utils_dist.v0)(props2.onClick,onClick),onPointerDown:(0,shared_utils_dist.v0)(props2.onPointerDown,onPointerDown),onFocus:(0,shared_utils_dist.v0)(props2.onFocus,openWithDelay),onBlur:(0,shared_utils_dist.v0)(props2.onBlur,closeWithDelay),"aria-describedby":isOpen?tooltipId:void 0})),[openWithDelay,closeWithDelay,onPointerDown,isOpen,tooltipId,onClick,referenceRef]),getTooltipPositionerProps=(0,react.useCallback)(((props2={},forwardedRef=null)=>getPopperProps({...props2,style:{...props2.style,[chunk_6WT2JRWX.Dq.arrowSize.var]:arrowSize?`${arrowSize}px`:void 0,[chunk_6WT2JRWX.Dq.arrowShadowColor.var]:arrowShadowColor}},forwardedRef)),[getPopperProps,arrowSize,arrowShadowColor]),getTooltipProps=(0,react.useCallback)(((props2={},ref2=null)=>{const styles={...props2.style,position:"relative",transformOrigin:chunk_6WT2JRWX.Dq.transformOrigin.varRef};return{ref:ref2,...htmlProps,...props2,id:tooltipId,role:"tooltip",style:styles}}),[htmlProps,tooltipId]);return{isOpen,show:openWithDelay,hide:closeWithDelay,getTriggerProps,getTooltipProps,getTooltipPositionerProps,getArrowProps,getArrowInnerProps}}var closeEventName="chakra-ui:close-tooltip";var chunk_34PD6CUK=__webpack_require__("../../node_modules/@chakra-ui/portal/dist/chunk-34PD6CUK.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_UIGT7YZF=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs"),motion=__webpack_require__("../../node_modules/framer-motion/dist/es/render/dom/motion.mjs"),AnimatePresence=__webpack_require__("../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");var MotionDiv=(0,chunk_ZHQNHOQS.m)(motion.E.div),Tooltip=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{var _a,_b;const styles=(0,chunk_DMO4EI7P.mq)("Tooltip",props),ownProps=(0,styled_system_dist.Lr)(props),theme=(0,chunk_UIGT7YZF.F)(),{children,label,shouldWrapChildren,"aria-label":ariaLabel,hasArrow,bg,portalProps,background,backgroundColor,bgColor,motionProps,...rest}=ownProps,userDefinedBg=null!=(_b=null!=(_a=null!=background?background:backgroundColor)?_a:bg)?_b:bgColor;if(userDefinedBg){styles.bg=userDefinedBg;const bgVar=(0,styled_system_dist.K1)(theme,"colors",userDefinedBg);styles[chunk_6WT2JRWX.Dq.arrowBg.var]=bgVar}const tooltip=useTooltip({...rest,direction:theme.direction});let trigger;if("string"==typeof children||shouldWrapChildren)trigger=(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{display:"inline-block",tabIndex:0,...tooltip.getTriggerProps(),children});else{const child=react.Children.only(children);trigger=(0,react.cloneElement)(child,tooltip.getTriggerProps(child.props,child.ref))}const hasAriaLabel=!!ariaLabel,_tooltipProps=tooltip.getTooltipProps({},ref),tooltipProps=hasAriaLabel?function omit(object,keysToOmit=[]){const clone=Object.assign({},object);for(const key of keysToOmit)key in clone&&delete clone[key];return clone}(_tooltipProps,["role","id"]):_tooltipProps,srOnlyProps=function pick(object,keysToPick){const result={};for(const key of keysToPick)key in object&&(result[key]=object[key]);return result}(_tooltipProps,["role","id"]);return label?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[trigger,(0,jsx_runtime.jsx)(AnimatePresence.M,{children:tooltip.isOpen&&(0,jsx_runtime.jsx)(chunk_34PD6CUK.h,{...portalProps,children:(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{...tooltip.getTooltipPositionerProps(),__css:{zIndex:styles.zIndex,pointerEvents:"none"},children:(0,jsx_runtime.jsxs)(MotionDiv,{variants:scale,initial:"exit",animate:"enter",exit:"exit",...motionProps,...tooltipProps,__css:styles,children:[label,hasAriaLabel&&(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{srOnly:!0,...srOnlyProps,children:ariaLabel}),hasArrow&&(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:styles.bg}})})]})})})})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})}));Tooltip.displayName="Tooltip"}}]);