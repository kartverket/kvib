"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[4543],{"../../node_modules/@chakra-ui/dom-utils/dist/chunk-ROURZMX4.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EB:()=>isFocusable,Wq:()=>isTabbable});var _chunk_3XANSPY5_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/chunk-3XANSPY5.mjs"),hasTabIndex=element=>element.hasAttribute("tabindex"),hasNegativeTabIndex=element=>hasTabIndex(element)&&-1===element.tabIndex;function isHidden(element){return!(!element.parentElement||!isHidden(element.parentElement))||element.hidden}function isFocusable(element){if(!(0,_chunk_3XANSPY5_mjs__WEBPACK_IMPORTED_MODULE_0__.Re)(element)||isHidden(element)||function isDisabled(element){return!0===Boolean(element.getAttribute("disabled"))||!0===Boolean(element.getAttribute("aria-disabled"))}(element))return!1;const{localName}=element;if(["input","select","textarea","button"].indexOf(localName)>=0)return!0;const others={a:()=>element.hasAttribute("href"),audio:()=>element.hasAttribute("controls"),video:()=>element.hasAttribute("controls")};return localName in others?others[localName]():!!function isContentEditable(element){const value=element.getAttribute("contenteditable");return"false"!==value&&null!=value}(element)||hasTabIndex(element)}function isTabbable(element){return!!element&&((0,_chunk_3XANSPY5_mjs__WEBPACK_IMPORTED_MODULE_0__.Re)(element)&&isFocusable(element)&&!hasNegativeTabIndex(element))}},"../../node_modules/@chakra-ui/dom-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t5:()=>getAllFocusable});var _chunk_ROURZMX4_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/chunk-ROURZMX4.mjs"),focusableElSelector=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"].join(),isVisible=el=>el.offsetWidth>0&&el.offsetHeight>0;function getAllFocusable(container){const focusableEls=Array.from(container.querySelectorAll(focusableElSelector));return focusableEls.unshift(container),focusableEls.filter((el=>(0,_chunk_ROURZMX4_mjs__WEBPACK_IMPORTED_MODULE_0__.EB)(el)&&isVisible(el)))}},"../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,bK:()=>Square,xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square";var Circle=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})}));Circle.displayName="Circle"},"../../node_modules/@chakra-ui/menu/dist/chunk-HB6KBUMZ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>MenuIcon});var _chunk_UZJ3TPNQ_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/menu/dist/chunk-UZJ3TPNQ.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),MenuIcon=props=>{const{className,children,...rest}=props,styles=(0,_chunk_UZJ3TPNQ_mjs__WEBPACK_IMPORTED_MODULE_2__.x)(),child=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),clone=(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{focusable:"false","aria-hidden":!0,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("chakra-menu__icon",child.props.className)}):null,_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("chakra-menu__icon-wrapper",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.span,{className:_className,...rest,__css:styles.icon,children:clone})};MenuIcon.displayName="MenuIcon"},"../../node_modules/@chakra-ui/menu/dist/chunk-SANI5SUM.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{wN:()=>MenuDescendantsProvider,Kb:()=>MenuProvider,H9:()=>useMenu,zZ:()=>useMenuButton,Xh:()=>useMenuContext,iX:()=>useMenuItem,_l:()=>useMenuList,gO:()=>useMenuOption,Vg:()=>useMenuOptionGroup,Qh:()=>useMenuPositioner});var react=__webpack_require__("../../node_modules/react/index.js");function useShortcut(props={}){const{timeout=300,preventDefault=()=>!0}=props,[keys,setKeys]=(0,react.useState)([]),timeoutRef=(0,react.useRef)(),flush=()=>{timeoutRef.current&&(clearTimeout(timeoutRef.current),timeoutRef.current=null)};return(0,react.useEffect)((()=>flush),[]),function onKeyDown(fn){return event=>{if("Backspace"===event.key){const keysCopy=[...keys];return keysCopy.pop(),void setKeys(keysCopy)}if(function isPrintableCharacter(event){const{key}=event;return 1===key.length||key.length>1&&/[^a-zA-Z0-9]/.test(key)}(event)){const keysCopy=keys.concat(event.key);preventDefault(event)&&(event.preventDefault(),event.stopPropagation()),setKeys(keysCopy),fn(keysCopy.join("")),flush(),timeoutRef.current=setTimeout((()=>{setKeys([]),timeoutRef.current=null}),timeout)}}}}var chunk_AXLEE3EK=__webpack_require__("../../node_modules/@chakra-ui/clickable/dist/chunk-AXLEE3EK.mjs"),chunk_OCNORRQU=__webpack_require__("../../node_modules/@chakra-ui/descendant/dist/chunk-OCNORRQU.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-focus-effect/dist/index.mjs"),chunk_LUYFNC5G=__webpack_require__("../../node_modules/@chakra-ui/popper/dist/chunk-LUYFNC5G.mjs"),react_use_disclosure_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-disclosure/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs");function isValidEvent(event,ref){var _a;const target=event.target;if(target){if(!getOwnerDocument(target).contains(target))return!1}return!(null==(_a=ref.current)?void 0:_a.contains(target))}function getOwnerDocument(node){var _a;return null!=(_a=null==node?void 0:node.ownerDocument)?_a:document}var react_use_animation_state_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-animation-state/dist/index.mjs"),react_context_dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-controllable-state/dist/index.mjs"),react_use_update_effect_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-update-effect/dist/index.mjs"),react_use_merge_refs_dist=__webpack_require__("../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),lazy_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/lazy-utils/dist/index.mjs"),[MenuDescendantsProvider,useMenuDescendantsContext,useMenuDescendants,useMenuDescendant]=(0,chunk_OCNORRQU.n)(),[MenuProvider,useMenuContext]=(0,react_context_dist.k)({strict:!1,name:"MenuContext"});function chunk_SANI5SUM_getOwnerDocument(node){var _a;return null!=(_a=null==node?void 0:node.ownerDocument)?_a:document}function isActiveElement(element){return chunk_SANI5SUM_getOwnerDocument(element).activeElement===element}function useMenu(props={}){const{id,closeOnSelect=!0,closeOnBlur=!0,initialFocusRef,autoSelect=!0,isLazy,isOpen:isOpenProp,defaultIsOpen,onClose:onCloseProp,onOpen:onOpenProp,placement="bottom-start",lazyBehavior="unmount",direction,computePositionOnMount=!1,...popperProps}=props,menuRef=(0,react.useRef)(null),buttonRef=(0,react.useRef)(null),descendants=useMenuDescendants(),focusMenu=(0,react.useCallback)((()=>{requestAnimationFrame((()=>{var _a;null==(_a=menuRef.current)||_a.focus({preventScroll:!1})}))}),[]),focusFirstItem=(0,react.useCallback)((()=>{const id2=setTimeout((()=>{var _a;if(initialFocusRef)null==(_a=initialFocusRef.current)||_a.focus();else{const first=descendants.firstEnabled();first&&setFocusedIndex(first.index)}}));timeoutIds.current.add(id2)}),[descendants,initialFocusRef]),focusLastItem=(0,react.useCallback)((()=>{const id2=setTimeout((()=>{const last=descendants.lastEnabled();last&&setFocusedIndex(last.index)}));timeoutIds.current.add(id2)}),[descendants]),onOpenInternal=(0,react.useCallback)((()=>{null==onOpenProp||onOpenProp(),autoSelect?focusFirstItem():focusMenu()}),[autoSelect,focusFirstItem,focusMenu,onOpenProp]),{isOpen,onOpen,onClose,onToggle}=(0,react_use_disclosure_dist.q)({isOpen:isOpenProp,defaultIsOpen,onClose:onCloseProp,onOpen:onOpenInternal});!function useOutsideClick(props){const{ref,handler,enabled=!0}=props,savedHandler=(0,react_use_callback_ref_dist.W)(handler),state=(0,react.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;(0,react.useEffect)((()=>{if(!enabled)return;const onPointerDown=e=>{isValidEvent(e,ref)&&(state.isPointerDown=!0)},onMouseUp=event=>{state.ignoreEmulatedMouseEvents?state.ignoreEmulatedMouseEvents=!1:state.isPointerDown&&handler&&isValidEvent(event,ref)&&(state.isPointerDown=!1,savedHandler(event))},onTouchEnd=event=>{state.ignoreEmulatedMouseEvents=!0,handler&&state.isPointerDown&&isValidEvent(event,ref)&&(state.isPointerDown=!1,savedHandler(event))},doc=getOwnerDocument(ref.current);return doc.addEventListener("mousedown",onPointerDown,!0),doc.addEventListener("mouseup",onMouseUp,!0),doc.addEventListener("touchstart",onPointerDown,!0),doc.addEventListener("touchend",onTouchEnd,!0),()=>{doc.removeEventListener("mousedown",onPointerDown,!0),doc.removeEventListener("mouseup",onMouseUp,!0),doc.removeEventListener("touchstart",onPointerDown,!0),doc.removeEventListener("touchend",onTouchEnd,!0)}}),[handler,ref,savedHandler,state,enabled])}({enabled:isOpen&&closeOnBlur,ref:menuRef,handler:event=>{var _a;(null==(_a=buttonRef.current)?void 0:_a.contains(event.target))||onClose()}});const popper=(0,chunk_LUYFNC5G.D)({...popperProps,enabled:isOpen||computePositionOnMount,placement,direction}),[focusedIndex,setFocusedIndex]=(0,react.useState)(-1);(0,react_use_update_effect_dist.r)((()=>{isOpen||setFocusedIndex(-1)}),[isOpen]),(0,dist.C)(menuRef,{focusRef:buttonRef,visible:isOpen,shouldFocus:!0});const animationState=(0,react_use_animation_state_dist.h)({isOpen,ref:menuRef}),[buttonId,menuId]=function useIds(idProp,...prefixes){const reactId=(0,react.useId)(),id=idProp||reactId;return(0,react.useMemo)((()=>prefixes.map((prefix=>`${prefix}-${id}`))),[id,prefixes])}(id,"menu-button","menu-list"),openAndFocusMenu=(0,react.useCallback)((()=>{onOpen(),focusMenu()}),[onOpen,focusMenu]),timeoutIds=(0,react.useRef)(new Set([]));(0,react.useEffect)((()=>{const ids=timeoutIds.current;return()=>{ids.forEach((id2=>clearTimeout(id2))),ids.clear()}}),[]);const openAndFocusFirstItem=(0,react.useCallback)((()=>{onOpen(),focusFirstItem()}),[focusFirstItem,onOpen]),openAndFocusLastItem=(0,react.useCallback)((()=>{onOpen(),focusLastItem()}),[onOpen,focusLastItem]),refocus=(0,react.useCallback)((()=>{var _a,_b;const doc=chunk_SANI5SUM_getOwnerDocument(menuRef.current),hasFocusWithin=null==(_a=menuRef.current)?void 0:_a.contains(doc.activeElement);if(!(isOpen&&!hasFocusWithin))return;const node=null==(_b=descendants.item(focusedIndex))?void 0:_b.node;null==node||node.focus({preventScroll:!0})}),[isOpen,focusedIndex,descendants]),rafId=(0,react.useRef)(null);return{openAndFocusMenu,openAndFocusFirstItem,openAndFocusLastItem,onTransitionEnd:refocus,unstable__animationState:animationState,descendants,popper,buttonId,menuId,forceUpdate:popper.forceUpdate,orientation:"vertical",isOpen,onToggle,onOpen,onClose,menuRef,buttonRef,focusedIndex,closeOnSelect,closeOnBlur,autoSelect,setFocusedIndex,isLazy,lazyBehavior,initialFocusRef,rafId}}function useMenuButton(props={},externalRef=null){const menu=useMenuContext(),{onToggle,popper,openAndFocusFirstItem,openAndFocusLastItem}=menu,onKeyDown=(0,react.useCallback)((event=>{const eventKey=event.key,action={Enter:openAndFocusFirstItem,ArrowDown:openAndFocusFirstItem,ArrowUp:openAndFocusLastItem}[eventKey];action&&(event.preventDefault(),event.stopPropagation(),action(event))}),[openAndFocusFirstItem,openAndFocusLastItem]);return{...props,ref:(0,react_use_merge_refs_dist.lq)(menu.buttonRef,externalRef,popper.referenceRef),id:menu.buttonId,"data-active":(0,shared_utils_dist.PB)(menu.isOpen),"aria-expanded":menu.isOpen,"aria-haspopup":"menu","aria-controls":menu.menuId,onClick:(0,shared_utils_dist.v0)(props.onClick,onToggle),onKeyDown:(0,shared_utils_dist.v0)(props.onKeyDown,onKeyDown)}}function isTargetMenuItem(target){var _a;return function isHTMLElement(el){var _a;if(!function isElement(el){return null!=el&&"object"==typeof el&&"nodeType"in el&&el.nodeType===Node.ELEMENT_NODE}(el))return!1;const win=null!=(_a=el.ownerDocument.defaultView)?_a:window;return el instanceof win.HTMLElement}(target)&&!!(null==(_a=null==target?void 0:target.getAttribute("role"))?void 0:_a.startsWith("menuitem"))}function useMenuList(props={},ref=null){const menu=useMenuContext();if(!menu)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex,setFocusedIndex,menuRef,isOpen,onClose,menuId,isLazy,lazyBehavior,unstable__animationState:animated}=menu,descendants=useMenuDescendantsContext(),createTypeaheadHandler=useShortcut({preventDefault:event=>" "!==event.key&&isTargetMenuItem(event.target)}),onKeyDown=(0,react.useCallback)((event=>{if(!event.currentTarget.contains(event.target))return;const eventKey=event.key,fn={Tab:event2=>event2.preventDefault(),Escape:onClose,ArrowDown:()=>{const next=descendants.nextEnabled(focusedIndex);next&&setFocusedIndex(next.index)},ArrowUp:()=>{const prev=descendants.prevEnabled(focusedIndex);prev&&setFocusedIndex(prev.index)}}[eventKey];if(fn)return event.preventDefault(),void fn(event);const onTypeahead=createTypeaheadHandler((character=>{const nextItem=function getNextItemFromSearch(items,searchString,itemToString,currentItem){if(null==searchString)return currentItem;if(!currentItem)return items.find((item=>itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())));const matchingItems=items.filter((item=>itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())));if(matchingItems.length>0){let nextIndex;return matchingItems.includes(currentItem)?(nextIndex=matchingItems.indexOf(currentItem)+1,nextIndex===matchingItems.length&&(nextIndex=0),matchingItems[nextIndex]):(nextIndex=items.indexOf(matchingItems[0]),items[nextIndex])}return currentItem}(descendants.values(),character,(item=>{var _a,_b;return null!=(_b=null==(_a=null==item?void 0:item.node)?void 0:_a.textContent)?_b:""}),descendants.item(focusedIndex));if(nextItem){const index=descendants.indexOf(nextItem.node);setFocusedIndex(index)}}));isTargetMenuItem(event.target)&&onTypeahead(event)}),[descendants,focusedIndex,createTypeaheadHandler,onClose,setFocusedIndex]),hasBeenOpened=(0,react.useRef)(!1);isOpen&&(hasBeenOpened.current=!0);const shouldRenderChildren=(0,lazy_utils_dist.k)({wasSelected:hasBeenOpened.current,enabled:isLazy,mode:lazyBehavior,isSelected:animated.present});return{...props,ref:(0,react_use_merge_refs_dist.lq)(menuRef,ref),children:shouldRenderChildren?props.children:null,tabIndex:-1,role:"menu",id:menuId,style:{...props.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:(0,shared_utils_dist.v0)(props.onKeyDown,onKeyDown)}}function useMenuPositioner(props={}){const{popper,isOpen}=useMenuContext();return popper.getPopperProps({...props,style:{visibility:isOpen?"visible":"hidden",...props.style}})}function useMenuItem(props={},externalRef=null){const{onMouseEnter:onMouseEnterProp,onMouseMove:onMouseMoveProp,onMouseLeave:onMouseLeaveProp,onClick:onClickProp,onFocus:onFocusProp,isDisabled,isFocusable,closeOnSelect,type:typeProp,...htmlProps}=props,menu=useMenuContext(),{setFocusedIndex,focusedIndex,closeOnSelect:menuCloseOnSelect,onClose,menuRef,isOpen,menuId,rafId}=menu,ref=(0,react.useRef)(null),id=`${menuId}-menuitem-${(0,react.useId)()}`,{index,register}=useMenuDescendant({disabled:isDisabled&&!isFocusable}),onMouseEnter=(0,react.useCallback)((event=>{null==onMouseEnterProp||onMouseEnterProp(event),isDisabled||setFocusedIndex(index)}),[setFocusedIndex,index,isDisabled,onMouseEnterProp]),onMouseMove=(0,react.useCallback)((event=>{null==onMouseMoveProp||onMouseMoveProp(event),ref.current&&!isActiveElement(ref.current)&&onMouseEnter(event)}),[onMouseEnter,onMouseMoveProp]),onMouseLeave=(0,react.useCallback)((event=>{null==onMouseLeaveProp||onMouseLeaveProp(event),isDisabled||setFocusedIndex(-1)}),[setFocusedIndex,isDisabled,onMouseLeaveProp]),onClick=(0,react.useCallback)((event=>{null==onClickProp||onClickProp(event),isTargetMenuItem(event.currentTarget)&&(null!=closeOnSelect?closeOnSelect:menuCloseOnSelect)&&onClose()}),[onClose,onClickProp,menuCloseOnSelect,closeOnSelect]),onFocus=(0,react.useCallback)((event=>{null==onFocusProp||onFocusProp(event),setFocusedIndex(index)}),[setFocusedIndex,onFocusProp,index]),isFocused=index===focusedIndex,trulyDisabled=isDisabled&&!isFocusable;(0,react_use_update_effect_dist.r)((()=>{if(isOpen)return isFocused&&!trulyDisabled&&ref.current?(rafId.current&&cancelAnimationFrame(rafId.current),rafId.current=requestAnimationFrame((()=>{var _a;null==(_a=ref.current)||_a.focus({preventScroll:!0}),rafId.current=null}))):menuRef.current&&!isActiveElement(menuRef.current)&&menuRef.current.focus({preventScroll:!0}),()=>{rafId.current&&cancelAnimationFrame(rafId.current)}}),[isFocused,trulyDisabled,menuRef,isOpen]);const clickableProps=(0,chunk_AXLEE3EK.h)({onClick,onFocus,onMouseEnter,onMouseMove,onMouseLeave,ref:(0,react_use_merge_refs_dist.lq)(register,ref,externalRef),isDisabled,isFocusable});return{...htmlProps,...clickableProps,type:null!=typeProp?typeProp:clickableProps.type,id,role:"menuitem",tabIndex:isFocused?0:-1}}function useMenuOption(props={},ref=null){const{type="radio",isChecked,...rest}=props;return{...useMenuItem(rest,ref),role:`menuitem${type}`,"aria-checked":isChecked}}function useMenuOptionGroup(props={}){const{children,type="radio",value:valueProp,defaultValue,onChange:onChangeProp,...htmlProps}=props,fallback="radio"===type?"":[],[value,setValue]=(0,react_use_controllable_state_dist.T)({defaultValue:null!=defaultValue?defaultValue:fallback,value:valueProp,onChange:onChangeProp}),onChange=(0,react.useCallback)((selectedValue=>{if("radio"===type&&"string"==typeof value&&setValue(selectedValue),"checkbox"===type&&Array.isArray(value)){const nextValue=value.includes(selectedValue)?value.filter((item=>item!==selectedValue)):value.concat(selectedValue);setValue(nextValue)}}),[value,setValue,type]);return{...htmlProps,children:(0,react_children_utils_dist.W)(children).map((child=>{if("MenuItemOption"!==child.type.id)return child;const isChecked="radio"===type?child.props.value===value:value.includes(child.props.value);return(0,react.cloneElement)(child,{type,onClick:event=>{var _a,_b;onChange(child.props.value),null==(_b=(_a=child.props).onClick)||_b.call(_a,event)},isChecked})}))}}},"../../node_modules/@chakra-ui/menu/dist/chunk-UZJ3TPNQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Menu,x:()=>useMenuStyles});var _chunk_SANI5SUM_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/menu/dist/chunk-SANI5SUM.mjs"),_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),[MenuStylesProvider,useMenuStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.k)({name:"MenuStylesContext",errorMessage:"useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Menu />\" "}),Menu=props=>{const{children}=props,styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("Menu",props),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.Lr)(props),{direction}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.F)(),{descendants,...ctx}=(0,_chunk_SANI5SUM_mjs__WEBPACK_IMPORTED_MODULE_6__.H9)({...ownProps,direction}),context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>ctx),[ctx]),{isOpen,onClose,forceUpdate}=context;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunk_SANI5SUM_mjs__WEBPACK_IMPORTED_MODULE_6__.wN,{value:descendants,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunk_SANI5SUM_mjs__WEBPACK_IMPORTED_MODULE_6__.Kb,{value:context,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuStylesProvider,{value:styles,children:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_7__.Pu)(children,{isOpen,onClose,forceUpdate})})})})};Menu.displayName="Menu"},"../../node_modules/@chakra-ui/react-use-animation-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>useAnimationState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs"),_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/chunk-3XANSPY5.mjs");function useAnimationState(props){const{isOpen,ref}=props,[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpen),[once,setOnce]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{once||(setMounted(isOpen),setOnce(!0))}),[isOpen,once,mounted]),(0,_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_1__.O)((()=>ref.current),"animationend",(()=>{setMounted(isOpen)}));return{present:!(!isOpen&&!mounted),onComplete(){var _a;const evt=new((0,_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_2__.kR)(ref.current).CustomEvent)("animationend",{bubbles:!0});null==(_a=ref.current)||_a.dispatchEvent(evt)}}}},"../../node_modules/@chakra-ui/react-use-focus-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>useFocusOnHide,G:()=>useFocusOnShow});var _chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/chunk-3XANSPY5.mjs"),_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/chunk-ROURZMX4.mjs"),_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/dom-utils/dist/index.mjs"),_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs"),_chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),_chakra_ui_react_use_update_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/react-use-update-effect/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useFocusOnHide(containerRef,options){const{shouldFocus:shouldFocusProp,visible,focusRef}=options,shouldFocus=shouldFocusProp&&!visible;(0,_chakra_ui_react_use_update_effect__WEBPACK_IMPORTED_MODULE_3__.r)((()=>{if(!shouldFocus)return;if(function preventReturnFocus(containerRef){const el=containerRef.current;if(!el)return!1;const activeElement=(0,_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_1__.vY)(el);return!!activeElement&&!el.contains(activeElement)&&!!(0,_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_2__.Wq)(activeElement)}(containerRef))return;const el=(null==focusRef?void 0:focusRef.current)||containerRef.current;let rafId;return el?(rafId=requestAnimationFrame((()=>{el.focus({preventScroll:!0})})),()=>{cancelAnimationFrame(rafId)}):void 0}),[shouldFocus,containerRef,focusRef])}var defaultOptions={preventScroll:!0,shouldFocus:!1};function useFocusOnShow(target,options=defaultOptions){const{focusRef,preventScroll,shouldFocus,visible}=options,element=function isRefObject(val){return"current"in val}(target)?target.current:target,autoFocusValue=shouldFocus&&visible,autoFocusRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(autoFocusValue),lastVisibleRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(visible);(0,_chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_4__.G)((()=>{!lastVisibleRef.current&&visible&&(autoFocusRef.current=autoFocusValue),lastVisibleRef.current=visible}),[visible,autoFocusValue]);const onFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(visible&&element&&autoFocusRef.current&&(autoFocusRef.current=!1,!element.contains(document.activeElement)))if(null==focusRef?void 0:focusRef.current)requestAnimationFrame((()=>{var _a;null==(_a=focusRef.current)||_a.focus({preventScroll})}));else{const tabbableEls=(0,_chakra_ui_dom_utils__WEBPACK_IMPORTED_MODULE_5__.t5)(element);tabbableEls.length>0&&requestAnimationFrame((()=>{tabbableEls[0].focus({preventScroll})}))}}),[visible,preventScroll,element,focusRef]);(0,_chakra_ui_react_use_update_effect__WEBPACK_IMPORTED_MODULE_3__.r)((()=>{onFocus()}),[onFocus]),(0,_chakra_ui_react_use_event_listener__WEBPACK_IMPORTED_MODULE_6__.O)(element,"transitionend",onFocus)}}}]);