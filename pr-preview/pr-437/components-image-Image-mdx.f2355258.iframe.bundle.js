"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[6722,8857],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/image/dist/chunk-HR33I6FK.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>useImage,z:()=>shouldShowFallbackImage});var _chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useImage(props){const{loading,src,srcSet,onLoad,onError,crossOrigin,sizes,ignoreFallback}=props,[status,setStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("pending");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setStatus(src?"loading":"pending")}),[src]);const imageRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),load=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{if(!src)return;flush();const img=new Image;img.src=src,crossOrigin&&(img.crossOrigin=crossOrigin),srcSet&&(img.srcset=srcSet),sizes&&(img.sizes=sizes),loading&&(img.loading=loading),img.onload=event=>{flush(),setStatus("loaded"),null==onLoad||onLoad(event)},img.onerror=error=>{flush(),setStatus("failed"),null==onError||onError(error)},imageRef.current=img}),[src,crossOrigin,srcSet,sizes,onLoad,onError,loading]),flush=()=>{imageRef.current&&(imageRef.current.onload=null,imageRef.current.onerror=null,imageRef.current=null)};return(0,_chakra_ui_react_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__.G)((()=>{if(!ignoreFallback)return"loading"===status&&load(),()=>{flush()}}),[status,load,ignoreFallback]),ignoreFallback?"loaded":status}var shouldShowFallbackImage=(status,fallbackStrategy)=>"loaded"!==status&&"beforeLoadOrError"===fallbackStrategy||"failed"===status&&"onError"===fallbackStrategy},"../../node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Image});var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),NativeImage=(0,chunk_QEVFQ4EU.G)((function NativeImage2(props,ref){const{htmlWidth,htmlHeight,alt,...rest}=props;return(0,jsx_runtime.jsx)("img",{width:htmlWidth,height:htmlHeight,ref,alt,...rest})}));NativeImage.displayName="NativeImage";var chunk_HR33I6FK=__webpack_require__("../../node_modules/@chakra-ui/image/dist/chunk-HR33I6FK.mjs"),chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs");function omit(object,keysToOmit=[]){const clone=Object.assign({},object);for(const key of keysToOmit)key in clone&&delete clone[key];return clone}var Image=(0,chunk_QEVFQ4EU.G)((function Image2(props,ref){const{fallbackSrc,fallback,src,srcSet,align,fit,loading,ignoreFallback,crossOrigin,fallbackStrategy="beforeLoadOrError",referrerPolicy,...rest}=props,shouldIgnoreFallbackImage=null!=loading||ignoreFallback||!(void 0!==fallbackSrc||void 0!==fallback),status=(0,chunk_HR33I6FK.d)({...props,crossOrigin,ignoreFallback:shouldIgnoreFallbackImage}),showFallbackImage=(0,chunk_HR33I6FK.z)(status,fallbackStrategy),shared={ref,objectFit:fit,objectPosition:align,...shouldIgnoreFallbackImage?rest:omit(rest,["onError","onLoad"])};return showFallbackImage?fallback||(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.img,{as:NativeImage,className:"chakra-image__placeholder",src:fallbackSrc,...shared}):(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.img,{as:NativeImage,src,srcSet,crossOrigin,loading,referrerPolicy,className:"chakra-image",...shared})}));Image.displayName="Image"},"../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:(0,chunk_G72KV6MB.XQ)(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/image/Image.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Image_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/image/Image.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Image_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"image",children:"Image"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Image brukes til å vise frem bilder med støtte for fallback."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Image } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Image_stories__WEBPACK_IMPORTED_MODULE_2__.Image}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Image_stories__WEBPACK_IMPORTED_MODULE_2__.Image}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"størrelser",children:"Størrelser"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Image_stories__WEBPACK_IMPORTED_MODULE_2__.ImageSizes}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"image-med-border-radius",children:"Image med border radius"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Image_stories__WEBPACK_IMPORTED_MODULE_2__.ImageBorderRadius}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"fallback",children:"Fallback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Image_stories__WEBPACK_IMPORTED_MODULE_2__.ImageFallback})]})}}},"./stories/components/image/Image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Image:()=>Image,ImageBorderRadius:()=>ImageBorderRadius,ImageFallback:()=>ImageFallback,ImageSizes:()=>ImageSizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Image",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{align:{description:"How to align the image within its bounds. It maps to css `object-position` property.",table:{type:{summary:"ResponsiveValue<ObjectPosition<Length>>"}},control:"text"},crossOrigin:{description:"The key used to set the crossOrigin on the HTMLImageElement into which the image will be loaded. This tells the browser to request cross-origin access when trying to download the image data.",table:{type:{summary:'"" | "anonymous" | "use-credentials"'}},control:"text"},fallback:{description:"Fallback element to show if image is loading or image fails.",table:{type:{summary:"ReactElement<any, string | JSXElementConstructor<any>>"}},control:"text"},fallbackSrc:{description:"Fallback image src to show if image is loading or image fails. Note 🚨: We recommend you use a local image",table:{type:{summary:"string"}},control:"text"},fallbackStrategy:{description:"- beforeLoadOrError(default): loads the fallbackImage while loading the src - onError: loads the fallbackImage only if there is an error fetching the src",table:{type:{summary:"FallbackStrategy"},defaultValue:{summary:"beforeLoadOrError"}},control:"text"},fit:{description:"How the image to fit within its bounds. It maps to css `object-fit` property.",table:{type:{summary:"ResponsiveValue<ObjectFit>"}},control:"text"},htmlHeight:{description:"The native HTML height attribute to the passed to the img",table:{type:{summary:"string | number"}},control:"text"},htmlWidth:{description:"The native HTML width attribute to the passed to the img",table:{type:{summary:"string | number"}},control:"text"},ignoreFallback:{description:"If true, opt out of the fallbackSrc logic and use as img.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},loading:{table:{type:{summary:"eager | lazy"}},options:["eager","lazy"],control:{type:"radio"}},onError:{description:"A callback for when there was an error loading the image src",table:{type:{summary:"ReactEventHandler<HTMLImageElement>"}},control:"text"},onLoad:{description:"A callback for when the image src has been loaded",table:{type:{summary:"ReactEventHandler<HTMLImageElement>"}},control:"text"},sizes:{description:"The image sizes attribute",table:{type:{summary:"string"}},control:"text"},src:{description:"The image src attribute",table:{type:{summary:"string"}},control:"text"},srcSet:{description:"The image srcset attribute",table:{type:{summary:"string"}},control:"text"}},args:{onError:void 0,onLoad:void 0}},Image={args:{boxSize:"400px",fit:"contain",src:"https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{...args,alt:"Map with pins"})},ImageSizes={args:{fit:"cover",src:"https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.K,{direction:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{boxSize:"100px",...args,alt:"Map with pins"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{boxSize:"150px",...args,alt:"Map with pins"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{boxSize:"200px",...args,alt:"Map with pins"})]})},ImageBorderRadius={args:{boxSize:"150px",borderRadius:"full",fit:"cover",src:"https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{...args,alt:"Map with pins"})},ImageFallback={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.E,{...args,alt:"Map with pins",src:"utilgjengelig.png",fallbackSrc:"https://via.placeholder.com/150"})};Image.parameters={...Image.parameters,docs:{...Image.parameters?.docs,source:{originalSource:'{\n  args: {\n    boxSize: "400px",\n    fit: "contain",\n    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"\n  },\n  render: args => <KvibImage {...args} alt="Map with pins" />\n}',...Image.parameters?.docs?.source}}},ImageSizes.parameters={...ImageSizes.parameters,docs:{...ImageSizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    fit: "cover",\n    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"\n  },\n  render: args => <KvibStack direction="row">\n      <KvibImage boxSize="100px" {...args} alt="Map with pins" />\n      <KvibImage boxSize="150px" {...args} alt="Map with pins" />\n      <KvibImage boxSize="200px" {...args} alt="Map with pins" />\n    </KvibStack>\n}',...ImageSizes.parameters?.docs?.source}}},ImageBorderRadius.parameters={...ImageBorderRadius.parameters,docs:{...ImageBorderRadius.parameters?.docs,source:{originalSource:'{\n  args: {\n    boxSize: "150px",\n    borderRadius: "full",\n    fit: "cover",\n    src: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"\n  },\n  render: args => <KvibImage {...args} alt="Map with pins" />\n}',...ImageBorderRadius.parameters?.docs?.source}}},ImageFallback.parameters={...ImageFallback.parameters,docs:{...ImageFallback.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibImage {...args} alt="Map with pins" src="utilgjengelig.png" fallbackSrc="https://via.placeholder.com/150" />\n}',...ImageFallback.parameters?.docs?.source}}};const __namedExportsOrder=["Image","ImageSizes","ImageBorderRadius","ImageFallback"]}}]);