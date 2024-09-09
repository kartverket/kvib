"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[3186],{"../../node_modules/@chakra-ui/modal/dist/chunk-5FG5SY5K.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>ModalHeader});var _chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),ModalHeader=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)(((props,ref)=>{const{className,...rest}=props,{headerId,setHeaderMounted}=(0,_chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__.k3)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(setHeaderMounted(!0),()=>setHeaderMounted(!1))),[setHeaderMounted]);const _className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-modal__header",className),headerStyles={flex:0,...(0,_chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__.x5)().header};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.B.header,{ref,className:_className,id:headerId,...rest,__css:headerStyles})}));ModalHeader.displayName="ModalHeader"},"../../node_modules/@chakra-ui/modal/dist/chunk-CYRBRIA2.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>modalManager,y:()=>useModalManager});var __defProp=Object.defineProperty,__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),react=__webpack_require__("../../node_modules/react/index.js"),modalManager=new class{constructor(){__publicField(this,"modals"),this.modals=new Map}add(modal){return this.modals.set(modal,this.modals.size+1),this.modals.size}remove(modal){this.modals.delete(modal)}isTopModal(modal){return!!modal&&this.modals.get(modal)===this.modals.size}};function useModalManager(ref,isOpen){const[index,setIndex]=(0,react.useState)(0);return(0,react.useEffect)((()=>{const node=ref.current;if(node){if(isOpen){const index2=modalManager.add(node);setIndex(index2)}return()=>{modalManager.remove(node),setIndex(0)}}}),[isOpen,ref]),index}},"../../node_modules/@chakra-ui/modal/dist/chunk-JQMJHPZH.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ModalOverlay});var _chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_transition__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/transition/dist/chunk-TR226DUX.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/framer-motion/dist/es/render/dom/motion.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),MotionDiv=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.B)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div),ModalOverlay=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.R)(((props,ref)=>{const{className,transition,motionProps:_motionProps,...rest}=props,_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-modal__overlay",className),overlayStyle={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...(0,_chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_5__.x5)().overlay},{motionPreset}=(0,_chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_5__.k3)(),defaultMotionProps="none"===motionPreset?{}:_chakra_ui_transition__WEBPACK_IMPORTED_MODULE_6__.l,motionProps=_motionProps||defaultMotionProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MotionDiv,{...motionProps,__css:overlayStyle,ref,className:_className,...rest})}));ModalOverlay.displayName="ModalOverlay"},"../../node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aF:()=>Modal,k3:()=>useModalContext,x5:()=>useModalStyles});var chunk_CYRBRIA2=__webpack_require__("../../node_modules/@chakra-ui/modal/dist/chunk-CYRBRIA2.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_use_merge_refs_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),getDefaultParent=function(originalTarget){return"undefined"==typeof document?null:(Array.isArray(originalTarget)?originalTarget[0]:originalTarget).ownerDocument.body},counterMap=new WeakMap,uncontrolledNodes=new WeakMap,markerMap={},lockCount=0,unwrapHost=function(node){return node&&(node.host||unwrapHost(node.parentNode))},applyAttributeToOthers=function(originalTarget,parentNode,markerName,controlAttribute){var targets=function(parent,targets){return targets.map((function(target){if(parent.contains(target))return target;var correctedTarget=unwrapHost(target);return correctedTarget&&parent.contains(correctedTarget)?correctedTarget:(console.error("aria-hidden",target,"in not contained inside",parent,". Doing nothing"),null)})).filter((function(x){return Boolean(x)}))}(parentNode,Array.isArray(originalTarget)?originalTarget:[originalTarget]);markerMap[markerName]||(markerMap[markerName]=new WeakMap);var markerCounter=markerMap[markerName],hiddenNodes=[],elementsToKeep=new Set,elementsToStop=new Set(targets),keep=function(el){el&&!elementsToKeep.has(el)&&(elementsToKeep.add(el),keep(el.parentNode))};targets.forEach(keep);var deep=function(parent){parent&&!elementsToStop.has(parent)&&Array.prototype.forEach.call(parent.children,(function(node){if(elementsToKeep.has(node))deep(node);else try{var attr=node.getAttribute(controlAttribute),alreadyHidden=null!==attr&&"false"!==attr,counterValue=(counterMap.get(node)||0)+1,markerValue=(markerCounter.get(node)||0)+1;counterMap.set(node,counterValue),markerCounter.set(node,markerValue),hiddenNodes.push(node),1===counterValue&&alreadyHidden&&uncontrolledNodes.set(node,!0),1===markerValue&&node.setAttribute(markerName,"true"),alreadyHidden||node.setAttribute(controlAttribute,"true")}catch(e){console.error("aria-hidden: cannot operate on ",node,e)}}))};return deep(parentNode),elementsToKeep.clear(),lockCount++,function(){hiddenNodes.forEach((function(node){var counterValue=counterMap.get(node)-1,markerValue=markerCounter.get(node)-1;counterMap.set(node,counterValue),markerCounter.set(node,markerValue),counterValue||(uncontrolledNodes.has(node)||node.removeAttribute(controlAttribute),uncontrolledNodes.delete(node)),markerValue||node.removeAttribute(markerName)})),--lockCount||(counterMap=new WeakMap,counterMap=new WeakMap,uncontrolledNodes=new WeakMap,markerMap={})}},hideOthers=function(originalTarget,parentNode,markerName){void 0===markerName&&(markerName="data-aria-hidden");var targets=Array.from(Array.isArray(originalTarget)?originalTarget:[originalTarget]),activeParentNode=parentNode||getDefaultParent(originalTarget);return activeParentNode?(targets.push.apply(targets,Array.from(activeParentNode.querySelectorAll("[aria-live]"))),applyAttributeToOthers(targets,activeParentNode,markerName,"aria-hidden")):function(){return null}},react=__webpack_require__("../../node_modules/react/index.js");function useModal(props){const{isOpen,onClose,id,closeOnOverlayClick=!0,closeOnEsc=!0,useInert=!0,onOverlayClick:onOverlayClickProp,onEsc}=props,dialogRef=(0,react.useRef)(null),overlayRef=(0,react.useRef)(null),[dialogId,headerId,bodyId]=function useIds(idProp,...prefixes){const reactId=(0,react.useId)(),id=idProp||reactId;return(0,react.useMemo)((()=>prefixes.map((prefix=>`${prefix}-${id}`))),[id,prefixes])}(id,"chakra-modal","chakra-modal--header","chakra-modal--body");!function useAriaHidden(ref,shouldHide){const currentElement=ref.current;(0,react.useEffect)((()=>{if(ref.current&&shouldHide)return hideOthers(ref.current)}),[shouldHide,ref,currentElement])}(dialogRef,isOpen&&useInert);const index=(0,chunk_CYRBRIA2.y)(dialogRef,isOpen),mouseDownTarget=(0,react.useRef)(null),onMouseDown=(0,react.useCallback)((event=>{mouseDownTarget.current=event.target}),[]),onKeyDown=(0,react.useCallback)((event=>{"Escape"===event.key&&(event.stopPropagation(),closeOnEsc&&(null==onClose||onClose()),null==onEsc||onEsc())}),[closeOnEsc,onClose,onEsc]),[headerMounted,setHeaderMounted]=(0,react.useState)(!1),[bodyMounted,setBodyMounted]=(0,react.useState)(!1),getDialogProps=(0,react.useCallback)(((props2={},ref=null)=>({role:"dialog",...props2,ref:(0,react_use_merge_refs_dist.Px)(ref,dialogRef),id:dialogId,tabIndex:-1,"aria-modal":!0,"aria-labelledby":headerMounted?headerId:void 0,"aria-describedby":bodyMounted?bodyId:void 0,onClick:(0,dist.Hj)(props2.onClick,(event=>event.stopPropagation()))})),[bodyId,bodyMounted,dialogId,headerId,headerMounted]),onOverlayClick=(0,react.useCallback)((event=>{event.stopPropagation(),mouseDownTarget.current===event.target&&chunk_CYRBRIA2.J.isTopModal(dialogRef.current)&&(closeOnOverlayClick&&(null==onClose||onClose()),null==onOverlayClickProp||onOverlayClickProp())}),[onClose,closeOnOverlayClick,onOverlayClickProp]),getDialogContainerProps=(0,react.useCallback)(((props2={},ref=null)=>({...props2,ref:(0,react_use_merge_refs_dist.Px)(ref,overlayRef),onClick:(0,dist.Hj)(props2.onClick,onOverlayClick),onKeyDown:(0,dist.Hj)(props2.onKeyDown,onKeyDown),onMouseDown:(0,dist.Hj)(props2.onMouseDown,onMouseDown)})),[onKeyDown,onMouseDown,onOverlayClick]);return{isOpen,onClose,headerId,bodyId,setBodyMounted,setHeaderMounted,dialogRef,overlayRef,getDialogProps,getDialogContainerProps,index}}var chunk_34PD6CUK=__webpack_require__("../../node_modules/@chakra-ui/portal/dist/chunk-34PD6CUK.mjs"),react_context_dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),chunk_DMO4EI7P=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),AnimatePresence=__webpack_require__("../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),[ModalStylesProvider,useModalStyles]=(0,react_context_dist.q)({name:"ModalStylesContext",errorMessage:"useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" "}),[ModalContextProvider,useModalContext]=(0,react_context_dist.q)({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),Modal=props=>{const modalProps={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale",lockFocusAcrossFrames:!0,...props},{portalProps,children,autoFocus,trapFocus,initialFocusRef,finalFocusRef,returnFocusOnClose,blockScrollOnMount,allowPinchZoom,preserveScrollBarGap,motionPreset,lockFocusAcrossFrames,onCloseComplete}=modalProps,styles=(0,chunk_DMO4EI7P.o5)("Modal",modalProps),context={...useModal(modalProps),autoFocus,trapFocus,initialFocusRef,finalFocusRef,returnFocusOnClose,blockScrollOnMount,allowPinchZoom,preserveScrollBarGap,motionPreset,lockFocusAcrossFrames};return(0,jsx_runtime.jsx)(ModalContextProvider,{value:context,children:(0,jsx_runtime.jsx)(ModalStylesProvider,{value:styles,children:(0,jsx_runtime.jsx)(AnimatePresence.N,{onExitComplete:onCloseComplete,children:context.isOpen&&(0,jsx_runtime.jsx)(chunk_34PD6CUK.Z,{...portalProps,children})})})})};Modal.displayName="Modal"},"../../node_modules/@chakra-ui/modal/dist/chunk-NABYTFTG.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>ModalFocusScope});var _a,chunk_MSA2NPQT=__webpack_require__("../../node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs"),chunk_CYRBRIA2=__webpack_require__("../../node_modules/@chakra-ui/modal/dist/chunk-CYRBRIA2.mjs"),es2015=__webpack_require__("../../node_modules/react-focus-lock/dist/es2015/index.js"),dist=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),FocusTrap=null!=(_a=es2015.Ay.default)?_a:es2015.Ay,FocusLock=props=>{const{initialFocusRef,finalFocusRef,contentRef,restoreFocus,children,isDisabled,autoFocus,persistentFocus,lockFocusAcrossFrames}=props,onActivation=(0,react.useCallback)((()=>{if(null==initialFocusRef?void 0:initialFocusRef.current)initialFocusRef.current.focus();else if(null==contentRef?void 0:contentRef.current){0===(0,dist.ep)(contentRef.current).length&&requestAnimationFrame((()=>{var _a2;null==(_a2=contentRef.current)||_a2.focus()}))}}),[initialFocusRef,contentRef]),onDeactivation=(0,react.useCallback)((()=>{var _a2;null==(_a2=null==finalFocusRef?void 0:finalFocusRef.current)||_a2.focus()}),[finalFocusRef]),returnFocus=restoreFocus&&!finalFocusRef;return(0,jsx_runtime.jsx)(FocusTrap,{crossFrame:lockFocusAcrossFrames,persistentFocus,autoFocus,disabled:isDisabled,onActivation,onDeactivation,returnFocus,children})};FocusLock.displayName="FocusLock";var use_presence=__webpack_require__("../../node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs");var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}Object.create;function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var useMergeRef=__webpack_require__("../../node_modules/use-callback-ref/dist/es2015/useMergeRef.js"),effectCar=(0,__webpack_require__("../../node_modules/use-sidecar/dist/es2015/medium.js").f)(),nothing=function(){},RemoveScroll=react.forwardRef((function(props,parentRef){var ref=react.useRef(null),_a=react.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),callbacks=_a[0],setCallbacks=_a[1],forwardProps=props.forwardProps,children=props.children,className=props.className,removeScrollBar=props.removeScrollBar,enabled=props.enabled,shards=props.shards,sideCar=props.sideCar,noIsolation=props.noIsolation,inert=props.inert,allowPinchZoom=props.allowPinchZoom,_b=props.as,Container=void 0===_b?"div":_b,gapMode=props.gapMode,rest=__rest(props,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),SideCar=sideCar,containerRef=(0,useMergeRef.S)([ref,parentRef]),containerProps=__assign(__assign({},rest),callbacks);return react.createElement(react.Fragment,null,enabled&&react.createElement(SideCar,{sideCar:effectCar,removeScrollBar,shards,noIsolation,inert,setCallbacks,allowPinchZoom:!!allowPinchZoom,lockRef:ref,gapMode}),forwardProps?react.cloneElement(react.Children.only(children),__assign(__assign({},containerProps),{ref:containerRef})):react.createElement(Container,__assign({},containerProps,{className,ref:containerRef}),children))}));RemoveScroll.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},RemoveScroll.classNames={fullWidth:"width-before-scroll-bar",zeroRight:"right-scroll-bar-position"};var currentNonce,tslib_tslib_es6=__webpack_require__("../../node_modules/use-sidecar/node_modules/tslib/tslib.es6.mjs"),SideCar=function(_a){var sideCar=_a.sideCar,rest=(0,tslib_tslib_es6.Tt)(_a,["sideCar"]);if(!sideCar)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var Target=sideCar.read();if(!Target)throw new Error("Sidecar medium not found");return react.createElement(Target,(0,tslib_tslib_es6.Cl)({},rest))};SideCar.isSideCarExport=!0;function makeStyleTag(){if(!document)return null;var tag=document.createElement("style");tag.type="text/css";var nonce=currentNonce||__webpack_require__.nc;return nonce&&tag.setAttribute("nonce",nonce),tag}var stylesheetSingleton=function(){var counter=0,stylesheet=null;return{add:function(style){0==counter&&(stylesheet=makeStyleTag())&&(!function injectStyles(tag,css){tag.styleSheet?tag.styleSheet.cssText=css:tag.appendChild(document.createTextNode(css))}(stylesheet,style),function insertStyleTag(tag){(document.head||document.getElementsByTagName("head")[0]).appendChild(tag)}(stylesheet)),counter++},remove:function(){! --counter&&stylesheet&&(stylesheet.parentNode&&stylesheet.parentNode.removeChild(stylesheet),stylesheet=null)}}},styleSingleton=function(){var sheet,useStyle=(sheet=stylesheetSingleton(),function(styles,isDynamic){react.useEffect((function(){return sheet.add(styles),function(){sheet.remove()}}),[styles&&isDynamic])});return function(_a){var styles=_a.styles,dynamic=_a.dynamic;return useStyle(styles,dynamic),null}},zeroGap={left:0,top:0,right:0,gap:0},parse=function(x){return parseInt(x||"",10)||0},getGapWidth=function(gapMode){if(void 0===gapMode&&(gapMode="margin"),"undefined"==typeof window)return zeroGap;var offsets=function(gapMode){var cs=window.getComputedStyle(document.body),left=cs["padding"===gapMode?"paddingLeft":"marginLeft"],top=cs["padding"===gapMode?"paddingTop":"marginTop"],right=cs["padding"===gapMode?"paddingRight":"marginRight"];return[parse(left),parse(top),parse(right)]}(gapMode),documentWidth=document.documentElement.clientWidth,windowWidth=window.innerWidth;return{left:offsets[0],top:offsets[1],right:offsets[2],gap:Math.max(0,windowWidth-documentWidth+offsets[2]-offsets[0])}},Style=styleSingleton(),lockAttribute="data-scroll-locked",getStyles=function(_a,allowRelative,gapMode,important){var left=_a.left,top=_a.top,right=_a.right,gap=_a.gap;return void 0===gapMode&&(gapMode="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(important,";\n   padding-right: ").concat(gap,"px ").concat(important,";\n  }\n  body[").concat(lockAttribute,"] {\n    overflow: hidden ").concat(important,";\n    overscroll-behavior: contain;\n    ").concat([allowRelative&&"position: relative ".concat(important,";"),"margin"===gapMode&&"\n    padding-left: ".concat(left,"px;\n    padding-top: ").concat(top,"px;\n    padding-right: ").concat(right,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap,"px ").concat(important,";\n    "),"padding"===gapMode&&"padding-right: ".concat(gap,"px ").concat(important,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat("right-scroll-bar-position"," {\n    right: ").concat(gap,"px ").concat(important,";\n  }\n  \n  .").concat("width-before-scroll-bar"," {\n    margin-right: ").concat(gap,"px ").concat(important,";\n  }\n  \n  .").concat("right-scroll-bar-position"," .").concat("right-scroll-bar-position"," {\n    right: 0 ").concat(important,";\n  }\n  \n  .").concat("width-before-scroll-bar"," .").concat("width-before-scroll-bar"," {\n    margin-right: 0 ").concat(important,";\n  }\n  \n  body[").concat(lockAttribute,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(gap,"px;\n  }\n")},getCurrentUseCounter=function(){var counter=parseInt(document.body.getAttribute(lockAttribute)||"0",10);return isFinite(counter)?counter:0},RemoveScrollBar=function(_a){var noRelative=_a.noRelative,noImportant=_a.noImportant,_b=_a.gapMode,gapMode=void 0===_b?"margin":_b;react.useEffect((function(){return document.body.setAttribute(lockAttribute,(getCurrentUseCounter()+1).toString()),function(){var newCounter=getCurrentUseCounter()-1;newCounter<=0?document.body.removeAttribute(lockAttribute):document.body.setAttribute(lockAttribute,newCounter.toString())}}),[]);var gap=react.useMemo((function(){return getGapWidth(gapMode)}),[gapMode]);return react.createElement(Style,{styles:getStyles(gap,!noRelative,gapMode,noImportant?"":"!important")})},passiveSupported=!1;if("undefined"!=typeof window)try{var options=Object.defineProperty({},"passive",{get:function(){return passiveSupported=!0,!0}});window.addEventListener("test",options,options),window.removeEventListener("test",options,options)}catch(err){passiveSupported=!1}var nonPassive=!!passiveSupported&&{passive:!1},elementCanBeScrolled=function(node,overflow){if(!(node instanceof Element))return!1;var styles=window.getComputedStyle(node);return"hidden"!==styles[overflow]&&!(styles.overflowY===styles.overflowX&&!function(node){return"TEXTAREA"===node.tagName}(node)&&"visible"===styles[overflow])},locationCouldBeScrolled=function(axis,node){var ownerDocument=node.ownerDocument,current=node;do{if("undefined"!=typeof ShadowRoot&&current instanceof ShadowRoot&&(current=current.host),elementCouldBeScrolled(axis,current)){var _a=getScrollVariables(axis,current);if(_a[1]>_a[2])return!0}current=current.parentNode}while(current&&current!==ownerDocument.body);return!1},elementCouldBeScrolled=function(axis,node){return"v"===axis?function(node){return elementCanBeScrolled(node,"overflowY")}(node):function(node){return elementCanBeScrolled(node,"overflowX")}(node)},getScrollVariables=function(axis,node){return"v"===axis?function(_a){return[_a.scrollTop,_a.scrollHeight,_a.clientHeight]}(node):function(_a){return[_a.scrollLeft,_a.scrollWidth,_a.clientWidth]}(node)},getTouchXY=function(event){return"changedTouches"in event?[event.changedTouches[0].clientX,event.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(event){return[event.deltaX,event.deltaY]},extractRef=function(ref){return ref&&"current"in ref?ref.current:ref},generateStyle=function(id){return"\n  .block-interactivity-".concat(id," {pointer-events: none;}\n  .allow-interactivity-").concat(id," {pointer-events: all;}\n")},idCounter=0,lockStack=[];function getOutermostShadowParent(node){for(var shadowParent=null;null!==node;)node instanceof ShadowRoot&&(shadowParent=node.host,node=node.host),node=node.parentNode;return shadowParent}const sidecar=function exportSidecar(medium,exported){return medium.useMedium(exported),SideCar}(effectCar,(function RemoveScrollSideCar(props){var shouldPreventQueue=react.useRef([]),touchStartRef=react.useRef([0,0]),activeAxis=react.useRef(),id=react.useState(idCounter++)[0],Style=react.useState(styleSingleton)[0],lastProps=react.useRef(props);react.useEffect((function(){lastProps.current=props}),[props]),react.useEffect((function(){if(props.inert){document.body.classList.add("block-interactivity-".concat(id));var allow_1=__spreadArray([props.lockRef.current],(props.shards||[]).map(extractRef),!0).filter(Boolean);return allow_1.forEach((function(el){return el.classList.add("allow-interactivity-".concat(id))})),function(){document.body.classList.remove("block-interactivity-".concat(id)),allow_1.forEach((function(el){return el.classList.remove("allow-interactivity-".concat(id))}))}}}),[props.inert,props.lockRef.current,props.shards]);var shouldCancelEvent=react.useCallback((function(event,parent){if("touches"in event&&2===event.touches.length)return!lastProps.current.allowPinchZoom;var currentAxis,touch=getTouchXY(event),touchStart=touchStartRef.current,deltaX="deltaX"in event?event.deltaX:touchStart[0]-touch[0],deltaY="deltaY"in event?event.deltaY:touchStart[1]-touch[1],target=event.target,moveDirection=Math.abs(deltaX)>Math.abs(deltaY)?"h":"v";if("touches"in event&&"h"===moveDirection&&"range"===target.type)return!1;var canBeScrolledInMainDirection=locationCouldBeScrolled(moveDirection,target);if(!canBeScrolledInMainDirection)return!0;if(canBeScrolledInMainDirection?currentAxis=moveDirection:(currentAxis="v"===moveDirection?"h":"v",canBeScrolledInMainDirection=locationCouldBeScrolled(moveDirection,target)),!canBeScrolledInMainDirection)return!1;if(!activeAxis.current&&"changedTouches"in event&&(deltaX||deltaY)&&(activeAxis.current=currentAxis),!currentAxis)return!0;var cancelingAxis=activeAxis.current||currentAxis;return function(axis,endTarget,event,sourceDelta,noOverscroll){var directionFactor=function(axis,direction){return"h"===axis&&"rtl"===direction?-1:1}(axis,window.getComputedStyle(endTarget).direction),delta=directionFactor*sourceDelta,target=event.target,targetInLock=endTarget.contains(target),shouldCancelScroll=!1,isDeltaPositive=delta>0,availableScroll=0,availableScrollTop=0;do{var _a=getScrollVariables(axis,target),position=_a[0],elementScroll=_a[1]-_a[2]-directionFactor*position;(position||elementScroll)&&elementCouldBeScrolled(axis,target)&&(availableScroll+=elementScroll,availableScrollTop+=position),target=target instanceof ShadowRoot?target.host:target.parentNode}while(!targetInLock&&target!==document.body||targetInLock&&(endTarget.contains(target)||endTarget===target));return(isDeltaPositive&&(noOverscroll&&Math.abs(availableScroll)<1||!noOverscroll&&delta>availableScroll)||!isDeltaPositive&&(noOverscroll&&Math.abs(availableScrollTop)<1||!noOverscroll&&-delta>availableScrollTop))&&(shouldCancelScroll=!0),shouldCancelScroll}(cancelingAxis,parent,event,"h"===cancelingAxis?deltaX:deltaY,!0)}),[]),shouldPrevent=react.useCallback((function(_event){var event=_event;if(lockStack.length&&lockStack[lockStack.length-1]===Style){var delta="deltaY"in event?getDeltaXY(event):getTouchXY(event),sourceEvent=shouldPreventQueue.current.filter((function(e){return e.name===event.type&&(e.target===event.target||event.target===e.shadowParent)&&(x=e.delta,y=delta,x[0]===y[0]&&x[1]===y[1]);var x,y}))[0];if(sourceEvent&&sourceEvent.should)event.cancelable&&event.preventDefault();else if(!sourceEvent){var shardNodes=(lastProps.current.shards||[]).map(extractRef).filter(Boolean).filter((function(node){return node.contains(event.target)}));(shardNodes.length>0?shouldCancelEvent(event,shardNodes[0]):!lastProps.current.noIsolation)&&event.cancelable&&event.preventDefault()}}}),[]),shouldCancel=react.useCallback((function(name,delta,target,should){var event={name,delta,target,should,shadowParent:getOutermostShadowParent(target)};shouldPreventQueue.current.push(event),setTimeout((function(){shouldPreventQueue.current=shouldPreventQueue.current.filter((function(e){return e!==event}))}),1)}),[]),scrollTouchStart=react.useCallback((function(event){touchStartRef.current=getTouchXY(event),activeAxis.current=void 0}),[]),scrollWheel=react.useCallback((function(event){shouldCancel(event.type,getDeltaXY(event),event.target,shouldCancelEvent(event,props.lockRef.current))}),[]),scrollTouchMove=react.useCallback((function(event){shouldCancel(event.type,getTouchXY(event),event.target,shouldCancelEvent(event,props.lockRef.current))}),[]);react.useEffect((function(){return lockStack.push(Style),props.setCallbacks({onScrollCapture:scrollWheel,onWheelCapture:scrollWheel,onTouchMoveCapture:scrollTouchMove}),document.addEventListener("wheel",shouldPrevent,nonPassive),document.addEventListener("touchmove",shouldPrevent,nonPassive),document.addEventListener("touchstart",scrollTouchStart,nonPassive),function(){lockStack=lockStack.filter((function(inst){return inst!==Style})),document.removeEventListener("wheel",shouldPrevent,nonPassive),document.removeEventListener("touchmove",shouldPrevent,nonPassive),document.removeEventListener("touchstart",scrollTouchStart,nonPassive)}}),[]);var removeScrollBar=props.removeScrollBar,inert=props.inert;return react.createElement(react.Fragment,null,inert?react.createElement(Style,{styles:generateStyle(id)}):null,removeScrollBar?react.createElement(RemoveScrollBar,{gapMode:props.gapMode}):null)}));var ReactRemoveScroll=react.forwardRef((function(props,ref){return react.createElement(RemoveScroll,__assign({},props,{ref,sideCar:sidecar}))}));ReactRemoveScroll.classNames=RemoveScroll.classNames;const Combination=ReactRemoveScroll;function ModalFocusScope(props){const{autoFocus,trapFocus,dialogRef,initialFocusRef,blockScrollOnMount,allowPinchZoom,finalFocusRef,returnFocusOnClose,preserveScrollBarGap,lockFocusAcrossFrames,isOpen}=(0,chunk_MSA2NPQT.k3)(),[isPresent,safeToRemove]=(0,use_presence.xQ)();(0,react.useEffect)((()=>{!isPresent&&safeToRemove&&setTimeout(safeToRemove)}),[isPresent,safeToRemove]);const index=(0,chunk_CYRBRIA2.y)(dialogRef,isOpen);return(0,jsx_runtime.jsx)(FocusLock,{autoFocus,isDisabled:!trapFocus,initialFocusRef,finalFocusRef,restoreFocus:returnFocusOnClose,contentRef:dialogRef,lockFocusAcrossFrames,children:(0,jsx_runtime.jsx)(Combination,{removeScrollBar:!preserveScrollBarGap,allowPinchZoom,enabled:1===index&&blockScrollOnMount,forwardProps:!0,children:props.children})})}},"../../node_modules/@chakra-ui/modal/dist/chunk-OFOVX77R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ModalBody});var _chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),ModalBody=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)(((props,ref)=>{const{className,...rest}=props,{bodyId,setBodyMounted}=(0,_chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__.k3)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(setBodyMounted(!0),()=>setBodyMounted(!1))),[setBodyMounted]);const _className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-modal__body",className),styles=(0,_chunk_MSA2NPQT_mjs__WEBPACK_IMPORTED_MODULE_3__.x5)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.B.div,{ref,className:_className,id:bodyId,...rest,__css:styles.body})}));ModalBody.displayName="ModalBody"},"../../node_modules/@chakra-ui/transition/dist/chunk-6NHXDBFO.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jv:()=>getSlideTransition,jd:()=>TRANSITION_DEFAULTS,xf:()=>TRANSITION_EASINGS,yA:()=>withDelay});var TRANSITION_EASINGS={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},TRANSITION_VARIANTS={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function getSlideTransition(options){var _a;switch(null!=(_a=null==options?void 0:options.direction)?_a:"right"){case"right":default:return TRANSITION_VARIANTS.slideRight;case"left":return TRANSITION_VARIANTS.slideLeft;case"bottom":return TRANSITION_VARIANTS.slideDown;case"top":return TRANSITION_VARIANTS.slideUp}}var TRANSITION_DEFAULTS={enter:{duration:.2,ease:TRANSITION_EASINGS.easeOut},exit:{duration:.1,ease:TRANSITION_EASINGS.easeIn}},withDelay={enter:(transition,delay)=>({...transition,delay:"number"==typeof delay?delay:null==delay?void 0:delay.enter}),exit:(transition,delay)=>({...transition,delay:"number"==typeof delay?delay:null==delay?void 0:delay.exit})}},"../../node_modules/@chakra-ui/transition/dist/chunk-TR226DUX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>fadeConfig,z:()=>Fade});var _chunk_6NHXDBFO_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/transition/dist/chunk-6NHXDBFO.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/framer-motion/dist/es/render/dom/motion.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),fadeConfig={initial:"exit",animate:"enter",exit:"exit",variants:{enter:({transition,transitionEnd,delay}={})=>{var _a;return{opacity:1,transition:null!=(_a=null==transition?void 0:transition.enter)?_a:_chunk_6NHXDBFO_mjs__WEBPACK_IMPORTED_MODULE_2__.yA.enter(_chunk_6NHXDBFO_mjs__WEBPACK_IMPORTED_MODULE_2__.jd.enter,delay),transitionEnd:null==transitionEnd?void 0:transitionEnd.enter}},exit:({transition,transitionEnd,delay}={})=>{var _a;return{opacity:0,transition:null!=(_a=null==transition?void 0:transition.exit)?_a:_chunk_6NHXDBFO_mjs__WEBPACK_IMPORTED_MODULE_2__.yA.exit(_chunk_6NHXDBFO_mjs__WEBPACK_IMPORTED_MODULE_2__.jd.exit,delay),transitionEnd:null==transitionEnd?void 0:transitionEnd.exit}}}},Fade=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Fade2(props,ref){const{unmountOnExit,in:isOpen,className,transition,transitionEnd,delay,...rest}=props,animate=isOpen||unmountOnExit?"enter":"exit",show=!unmountOnExit||isOpen&&unmountOnExit,custom={transition,transitionEnd,delay};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.N,{custom,children:show&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.P.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-fade",className),custom,...fadeConfig,animate,...rest})})}));Fade.displayName="Fade"}}]);