"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[7341,6068],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/image/dist/chunk-HR33I6FK.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>useImage,z:()=>shouldShowFallbackImage});var _chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useImage(props){const{loading,src,srcSet,onLoad,onError,crossOrigin,sizes,ignoreFallback}=props,[status,setStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("pending");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setStatus(src?"loading":"pending")}),[src]);const imageRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),load=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(!src)return;flush();const img=new Image;img.src=src,crossOrigin&&(img.crossOrigin=crossOrigin),srcSet&&(img.srcset=srcSet),sizes&&(img.sizes=sizes),loading&&(img.loading=loading),img.onload=event=>{flush(),setStatus("loaded"),null==onLoad||onLoad(event)},img.onerror=error=>{flush(),setStatus("failed"),null==onError||onError(error)},imageRef.current=img}),[src,crossOrigin,srcSet,sizes,onLoad,onError,loading]),flush=()=>{imageRef.current&&(imageRef.current.onload=null,imageRef.current.onerror=null,imageRef.current=null)};return(0,_chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__.G)((()=>{if(!ignoreFallback)return"loading"===status&&load(),()=>{flush()}}),[status,load,ignoreFallback]),ignoreFallback?"loaded":status}var shouldShowFallbackImage=(status,fallbackStrategy)=>"loaded"!==status&&"beforeLoadOrError"===fallbackStrategy||"failed"===status&&"onError"===fallbackStrategy},"../../node_modules/@chakra-ui/layout/dist/chunk-CRIDK7KT.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Wrap,U:()=>WrapItem});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function px(value){return"number"==typeof value?`${value}px`:value}var Wrap=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Wrap2(props,ref){const{spacing="0.5rem",spacingX,spacingY,children,justify,direction,align,className,shouldWrapChildren,...rest}=props,styles=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const{spacingX:x=spacing,spacingY:y=spacing}={spacingX,spacingY};return{"--chakra-wrap-x-spacing":theme=>(0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_3__.XQ)(x,(value=>px((0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.fr)("space",value)(theme)))),"--chakra-wrap-y-spacing":theme=>(0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_3__.XQ)(y,(value=>px((0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.fr)("space",value)(theme)))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:justify,alignItems:align,flexDirection:direction,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[spacing,spacingX,spacingY,justify,align,direction]),childrenToRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>shouldWrapChildren?react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,((child,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WrapItem,{children:child},index))):children),[children,shouldWrapChildren]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-wrap",className),overflow:"hidden",...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.ul,{className:"chakra-wrap__list",__css:styles,children:childrenToRender})})}));Wrap.displayName="Wrap";var WrapItem=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function WrapItem2(props,ref){const{className,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.li,{ref,__css:{display:"flex",alignItems:"flex-start"},className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-wrap__listitem",className),...rest})}));WrapItem.displayName="WrapItem"},"../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:(0,chunk_G72KV6MB.XQ)(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/avatar/Avatar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/avatar/Avatar.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Komponenter/Avatar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"avatar",children:"Avatar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Avatar brukes til å representere brukere. Den viser frem profilbilde, initialer eller fallback-ikon."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Avatar, AvatarAvatar, AvatarGroup } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.Avatar}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.Avatar}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"størrelser",children:"Størrelser"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.AvatarSizes}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"fallback-avatar",children:"Fallback Avatar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Det er to fallbacks dersom det er en error når avataren skal lastes:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Dersom Avataren har proppen ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"name"}),", vil initialene vises."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Dersom Avataren ikke har ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"name"}),", vil default-avataren vises."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.AvatarFallback}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"avatar-med-badge",children:"Avatar med badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.AvatarBadge}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"avatar-gruppering",children:"Avatar gruppering"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.AvatarGrouping})]})}}},"./stories/components/avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Avatar:()=>Avatar_stories_Avatar,AvatarBadge:()=>Avatar_stories_AvatarBadge,AvatarFallback:()=>AvatarFallback,AvatarGrouping:()=>AvatarGrouping,AvatarSizes:()=>AvatarSizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),[AvatarStylesProvider,useAvatarStyles]=(0,dist.k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function initials(name){var _a;const names=name.split(" "),firstName=null!=(_a=names.at(0))?_a:"",lastName=names.length>1?names.at(-1):"";return firstName&&lastName?`${firstName.charAt(0)}${lastName.charAt(0)}`:firstName.charAt(0)}function AvatarName(props){const{name,getInitials,...rest}=props,styles=useAvatarStyles();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{role:"img","aria-label":name,...rest,__css:styles.label,children:name?null==getInitials?void 0:getInitials(name):null})}AvatarName.displayName="AvatarName";var GenericAvatarIcon=props=>(0,jsx_runtime.jsxs)(chunk_3LE6AY5Q.m.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...props,children:[(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),chunk_HR33I6FK=__webpack_require__("../../node_modules/@chakra-ui/image/dist/chunk-HR33I6FK.mjs"),react=__webpack_require__("../../node_modules/react/index.js");function AvatarImage(props){const{src,srcSet,onError,onLoad,getInitials,name,borderRadius,loading,iconLabel,icon=(0,jsx_runtime.jsx)(GenericAvatarIcon,{}),ignoreFallback,referrerPolicy,crossOrigin}=props,status=(0,chunk_HR33I6FK.d)({src,onError,crossOrigin,ignoreFallback});return!src||!("loaded"===status)?name?(0,jsx_runtime.jsx)(AvatarName,{className:"chakra-avatar__initials",getInitials,name}):(0,react.cloneElement)(icon,{role:"img","aria-label":iconLabel}):(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.img,{src,srcSet,alt:name,onLoad,referrerPolicy,crossOrigin:null!=crossOrigin?crossOrigin:void 0,className:"chakra-avatar__img",loading,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius}})}AvatarImage.displayName="AvatarImage";var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),baseStyle={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},Avatar=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=(0,chunk_T2VHL7RE.jC)("Avatar",props),[isLoaded,setIsLoaded]=(0,react.useState)(!1),{src,srcSet,name,showBorder,borderRadius="full",onError,onLoad:onLoadProp,getInitials=initials,icon=(0,jsx_runtime.jsx)(GenericAvatarIcon,{}),iconLabel=" avatar",loading,children,borderColor,ignoreFallback,crossOrigin,...rest}=(0,styled_system_dist.Lr)(props),avatarStyles={borderRadius,borderWidth:showBorder?"2px":void 0,...baseStyle,...styles.container};return borderColor&&(avatarStyles.borderColor=borderColor),(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{ref,...rest,className:(0,shared_utils_dist.cx)("chakra-avatar",props.className),"data-loaded":(0,shared_utils_dist.PB)(isLoaded),__css:avatarStyles,children:(0,jsx_runtime.jsxs)(AvatarStylesProvider,{value:styles,children:[(0,jsx_runtime.jsx)(AvatarImage,{src,srcSet,loading,onLoad:(0,shared_utils_dist.v0)(onLoadProp,(()=>{setIsLoaded(!0)})),onError,getInitials,name,borderRadius,icon,iconLabel,ignoreFallback,crossOrigin}),children]})})}));Avatar.displayName="Avatar";var chunk_CRIDK7KT=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-CRIDK7KT.mjs"),chunk_O5CRURSQ=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),placementMap={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},AvatarBadge=(0,chunk_QEVFQ4EU.G)((function AvatarBadge2(props,ref){const{placement="bottom-end",className,...rest}=props,styles=useAvatarStyles(),badgeStyles={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...placementMap[placement],...styles.badge};return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,...rest,className:(0,shared_utils_dist.cx)("chakra-avatar__badge",className),__css:badgeStyles})}));AvatarBadge.displayName="AvatarBadge";var react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs");var AvatarGroup=(0,chunk_QEVFQ4EU.G)((function AvatarGroup2(props,ref){const styles=(0,chunk_T2VHL7RE.jC)("Avatar",props),{children,borderColor,max,spacing="-0.75rem",borderRadius="full",...rest}=(0,styled_system_dist.Lr)(props),validChildren=(0,react_children_utils_dist.W)(children),childrenWithinMax=null!=max?validChildren.slice(0,max):validChildren,excess=null!=max?validChildren.length-max:0,clones=childrenWithinMax.reverse().map(((child,index)=>{var _a;const childProps={marginEnd:0===index?0:spacing,size:props.size,borderColor:null!=(_a=child.props.borderColor)?_a:borderColor,showBorder:!0};return(0,react.cloneElement)(child,function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}(childProps))})),groupStyles={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...styles.group},excessStyles={borderRadius,marginStart:spacing,...baseStyle,...styles.excessLabel};return(0,jsx_runtime.jsxs)(chunk_3LE6AY5Q.m.div,{ref,role:"group",__css:groupStyles,...rest,className:(0,shared_utils_dist.cx)("chakra-avatar__group",props.className),children:[excess>0&&(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{className:"chakra-avatar__excess",__css:excessStyles,children:`+${excess}`}),clones]})}));AvatarGroup.displayName="AvatarGroup";const Avatar_stories={title:"Komponenter/Avatar",component:Avatar,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{ignoreFallback:{description:"If true, opt out of the avatar's fallback logic and renders the img at all times.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},loading:{description:"Defines loading strategy",table:{type:{summary:"eager | lazy"}},options:["eager","lazy"],control:"radio"},name:{description:"The name of the person in the avatar. - if src has loaded, the name will be used as the alt attribute of the img - If src is not loaded, the name will be used to create the initials",table:{type:{summary:String}},control:"text"},referrerPolicy:{description:"Defining which referrer is sent when fetching the resource.",table:{type:{summary:"HTMLAttributeReferrerPolicy"}},control:"text"},showBorder:{description:"If true, the Avatar will show a border around it. Best for a group of avatars",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},size:{description:"The size of the Avatar",table:{type:{summary:"2xs | xs | sm | md | lg | xl | 2xl | full"},defaultValue:{summary:"md"}},options:["2xs","xs","sm","md","lg","xl","2xl","full"],control:{type:"radio"}},src:{description:"The image url of the Avatar",table:{type:{summary:"String"}},control:"text"},srcSet:{description:"List of sources to use for different screen resolutions",table:{type:{summary:"String"}},control:"text"}}},Avatar_stories_Avatar={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:args=>(0,jsx_runtime.jsx)(Avatar,{...args,name:"Eksempel Navn"})},AvatarSizes={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:args=>(0,jsx_runtime.jsxs)(chunk_CRIDK7KT.E,{children:[(0,jsx_runtime.jsx)(chunk_CRIDK7KT.U,{children:(0,jsx_runtime.jsx)(Avatar,{...args,size:"2xs"})}),(0,jsx_runtime.jsx)(chunk_CRIDK7KT.U,{children:(0,jsx_runtime.jsx)(Avatar,{...args,size:"xs"})}),(0,jsx_runtime.jsx)(chunk_CRIDK7KT.U,{children:(0,jsx_runtime.jsx)(Avatar,{...args,size:"sm"})}),(0,jsx_runtime.jsx)(chunk_CRIDK7KT.U,{children:(0,jsx_runtime.jsx)(Avatar,{...args,size:"md"})}),(0,jsx_runtime.jsx)(chunk_CRIDK7KT.U,{children:(0,jsx_runtime.jsx)(Avatar,{...args,size:"lg"})}),(0,jsx_runtime.jsx)(chunk_CRIDK7KT.U,{children:(0,jsx_runtime.jsx)(Avatar,{...args,size:"xl"})}),(0,jsx_runtime.jsx)(chunk_CRIDK7KT.U,{children:(0,jsx_runtime.jsx)(Avatar,{...args,size:"2xl"})})]})},AvatarFallback={args:{},render:args=>(0,jsx_runtime.jsxs)(chunk_O5CRURSQ.K,{direction:"row",children:[(0,jsx_runtime.jsx)(Avatar,{...args,name:"Eksempel Navn",src:"https://bit.ly/broken-link",bg:"green.500"}),(0,jsx_runtime.jsx)(Avatar,{...args,name:"Annet Eksempel",src:"https://bit.ly/broken-link"}),(0,jsx_runtime.jsx)(Avatar,{...args,src:"https://bit.ly/broken-link"})]})},Avatar_stories_AvatarBadge={args:{},render:args=>(0,jsx_runtime.jsx)(Avatar,{...args,children:(0,jsx_runtime.jsx)(AvatarBadge,{boxSize:"1.25em",bg:"green.500"})})},AvatarGrouping={args:{name:"Eksempel Navn"},render:args=>(0,jsx_runtime.jsxs)(AvatarGroup,{size:"md",max:2,children:[(0,jsx_runtime.jsx)(Avatar,{...args,src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"}),(0,jsx_runtime.jsx)(Avatar,{...args}),(0,jsx_runtime.jsx)(Avatar,{...args}),(0,jsx_runtime.jsx)(Avatar,{...args}),(0,jsx_runtime.jsx)(Avatar,{...args})]})};Avatar_stories_Avatar.parameters={...Avatar_stories_Avatar.parameters,docs:{...Avatar_stories_Avatar.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "Eksempel Navn",\n    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"\n  },\n  render: args => <KvibAvatar {...args} name="Eksempel Navn" />\n}',...Avatar_stories_Avatar.parameters?.docs?.source}}},AvatarSizes.parameters={...AvatarSizes.parameters,docs:{...AvatarSizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "Eksempel Navn",\n    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"\n  },\n  render: args => <KvibWrap>\n      <KvibWrapItem>\n        <KvibAvatar {...args} size="2xs" />\n      </KvibWrapItem>\n      <KvibWrapItem>\n        <KvibAvatar {...args} size="xs" />\n      </KvibWrapItem>\n      <KvibWrapItem>\n        <KvibAvatar {...args} size="sm" />\n      </KvibWrapItem>\n      <KvibWrapItem>\n        <KvibAvatar {...args} size="md" />\n      </KvibWrapItem>\n      <KvibWrapItem>\n        <KvibAvatar {...args} size="lg" />\n      </KvibWrapItem>\n      <KvibWrapItem>\n        <KvibAvatar {...args} size="xl" />\n      </KvibWrapItem>\n      <KvibWrapItem>\n        <KvibAvatar {...args} size="2xl" />\n      </KvibWrapItem>\n    </KvibWrap>\n}',...AvatarSizes.parameters?.docs?.source}}},AvatarFallback.parameters={...AvatarFallback.parameters,docs:{...AvatarFallback.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibStack direction="row">\n      <KvibAvatar {...args} name="Eksempel Navn" src="https://bit.ly/broken-link" bg="green.500" />\n      <KvibAvatar {...args} name="Annet Eksempel" src="https://bit.ly/broken-link" />\n      <KvibAvatar {...args} src="https://bit.ly/broken-link" />\n    </KvibStack>\n}',...AvatarFallback.parameters?.docs?.source}}},Avatar_stories_AvatarBadge.parameters={...Avatar_stories_AvatarBadge.parameters,docs:{...Avatar_stories_AvatarBadge.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibAvatar {...args}>\n      <KvibAvatarBadge boxSize="1.25em" bg="green.500" />\n    </KvibAvatar>\n}',...Avatar_stories_AvatarBadge.parameters?.docs?.source}}},AvatarGrouping.parameters={...AvatarGrouping.parameters,docs:{...AvatarGrouping.parameters?.docs,source:{originalSource:'{\n  args: {\n    name: "Eksempel Navn"\n  },\n  render: args => <KvibAvatarGroup size="md" max={2}>\n      <KvibAvatar {...args} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" />\n      <KvibAvatar {...args} />\n      <KvibAvatar {...args} />\n      <KvibAvatar {...args} />\n      <KvibAvatar {...args} />\n    </KvibAvatarGroup>\n}',...AvatarGrouping.parameters?.docs?.source}}};const __namedExportsOrder=["Avatar","AvatarSizes","AvatarFallback","AvatarBadge","AvatarGrouping"]}}]);