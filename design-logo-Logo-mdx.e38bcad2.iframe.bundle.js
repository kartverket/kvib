"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[6636,4781],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:(0,chunk_G72KV6MB.XQ)(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/design/logo/Logo.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Logo_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/design/logo/Logo.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Logo_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"logo",children:"Logo"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Logo } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Logo_stories__WEBPACK_IMPORTED_MODULE_2__.Logo}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Logo_stories__WEBPACK_IMPORTED_MODULE_2__.Logo}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"horisontal",children:"Horisontal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Logo_stories__WEBPACK_IMPORTED_MODULE_2__.LogoHorizontal}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"størrelser",children:"Størrelser"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Logo_stories__WEBPACK_IMPORTED_MODULE_2__.LogoSizes})]})}}},"./stories/design/logo/Logo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Logo:()=>Logo_stories_Logo,LogoHorizontal:()=>Logo_stories_LogoHorizontal,LogoSizes:()=>LogoSizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Logo_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const LogoHorizontal=({width,height})=>(0,jsx_runtime.jsxs)("svg",{width,height,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 184 64",children:[(0,jsx_runtime.jsx)("path",{d:"M40.938 2.1h-34.6c-1.7 0-3.1 1.4-3.1 3.1v21.2c2.7-2.1 6.1-4.9 12.2-3.4 5.3 1.3 6.4 5.4 14.8 10 5.1 2.8 9.9.6 13.8-1.6V5.2c0-1.7-1.4-3.1-3.1-3.1z",fill:"#1A833B"}),(0,jsx_runtime.jsx)("path",{d:"M32.938 42.4c-1.7-.2-3.1-.8-4.4-1.7-2.9-1.8-5.7-4.7-11.7-7.8-4.7-2.3-9.4-.5-13.6 1.9v23.7c0 1.7 1.4 3.1 3.1 3.1h34.5c1.7 0 3.1-1.4 3.1-3.1V39.1c-3.6 2.1-7.1 3.9-11 3.3z",fill:"#1A589F"}),(0,jsx_runtime.jsx)("path",{d:"M30.238 32.9c-8.3-4.6-9.5-8.7-14.8-10-6.1-1.5-9.5 1.4-12.2 3.4V34.7c4.2-2.4 8.9-4.3 13.6-1.9 6 3.1 8.8 6 11.7 7.8 1.3.8 2.7 1.4 4.4 1.7 3.9.6 7.4-1.1 11.1-3.2V31.2c-3.9 2.4-8.7 4.6-13.8 1.7z",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{d:"M55.04 50.9V31.3h2.4v19.6h-2.4zm5.1-10.4 7.8 10.4h-3l-7.5-10.4 7.5-9.2h3l-7.8 9.2zM80.838 51.4c-1-.3-1.7-1.1-1.9-2.1-1.4 1.4-2.5 1.9-4.1 1.9-3.5 0-4.6-2.1-4.6-4.1 0-3.2 2.8-5.1 7.5-5.1h1v-1c0-1.3-.1-1.8-.5-2.2-.5-.5-1-.8-1.9-.8-1.6 0-3.6.9-4.5 1.7l-1.1-1.5c1.9-1.3 3.9-1.9 6-1.9 2 0 3.3.8 3.9 2.2.3.8.3 1.9.3 3.1l-.1 4.7c-.1 2.3.1 2.9 1.1 3.5l-1.1 1.6zm-3.2-7.8c-3.6 0-4.9 1.2-4.9 3.4 0 1.7.8 2.6 2.5 2.6 1.5 0 2.8-.9 3.5-2.2l.1-3.7c-.4-.1-.9-.1-1.2-.1zM92.14 38.8c-.1-.1-.4-.1-.6-.1-.9 0-1.7.4-2.4 1-.7.7-.8 1.1-.8 2.3v8.9h-2.2v-11c0-1.9-.4-2.8-.5-3l2.2-.6c.1.2.5 1.3.5 2.3 1-1.5 2.5-2.4 4-2.4.3 0 .7.1.8.1l-1 2.5zM102.239 38.3h-3v9.2c0 1.6.4 2.1 1.8 2.1.6 0 1-.1 1.4-.3l.3 1.4c-.7.4-1.5.6-2.5.6-.7 0-1.3-.1-1.9-.4-1-.5-1.4-1.4-1.4-2.8v-9.8h-1.9v-1.7h1.9c0-1.2.2-3.1.2-3.6l2.3-.5c-.1.5-.3 2.4-.3 4.1h3.6l-.5 1.7zM112.64 51h-2.2l-5.1-14.2 2.3-.5 3.3 9.8c.3 1 .6 2.2.7 2.4h.1c.1-.2.3-1.3.7-2.4l3.3-9.4h2.4l-5.5 14.3zM122.641 44.1v.3c0 1.3.2 2.4.7 3.1.8 1.2 2.1 1.7 3.5 1.7s2.5-.4 3.5-1.3l.9 1.4c-1.3 1.1-3 1.8-4.8 1.8-3.9 0-6.3-2.9-6.3-7.6 0-2.4.5-3.9 1.7-5.4 1.1-1.3 2.5-2 4.3-2 1.5 0 2.9.5 3.9 1.5 1.2 1.3 1.6 2.6 1.6 6v.3h-9v.2zm5.8-4.8c-.5-.8-1.5-1.3-2.6-1.3-2 0-3.2 1.5-3.3 4.4h6.5c.1-1.5-.1-2.4-.6-3.1zM141.738 38.8c-.1-.1-.4-.1-.6-.1-.9 0-1.7.4-2.4 1-.7.7-.8 1.1-.8 2.3v8.9h-2.2v-11c0-1.9-.4-2.8-.5-3l2.2-.6c.1.2.5 1.3.5 2.3 1-1.5 2.5-2.4 4-2.4.3 0 .7.1.8.1l-1 2.5zM145.638 50.9V33.4c0-1.7-.3-2.7-.4-2.9l2.2-.4c.1.2.4 1.4.4 3.4V51h-2.2v-.1zm8.9 0-6.5-8 5.4-6.2h2.8l-5.6 6.2 6.9 8h-3zM161.438 44.1v.3c0 1.3.199 2.4.699 3.1.8 1.2 2.1 1.7 3.5 1.7s2.5-.4 3.5-1.3l.901 1.4c-1.3 1.1-3 1.8-4.8 1.8-3.9 0-6.3-2.9-6.3-7.6 0-2.4.499-3.9 1.699-5.4 1.1-1.3 2.5-2 4.301-2 1.5 0 2.9.5 3.9 1.5 1.2 1.3 1.6 2.6 1.6 6v.3h-9v.2zm5.9-4.8c-.5-.8-1.5-1.3-2.6-1.3-2 0-3.201 1.5-3.3 4.4h6.5c0-1.5-.2-2.4-.6-3.1zM179.938 38.3h-3v9.2c0 1.6.4 2.1 1.8 2.1.6 0 1-.1 1.4-.3l.3 1.4c-.7.4-1.5.6-2.5.6-.7 0-1.3-.1-1.9-.4-1-.5-1.4-1.4-1.4-2.8v-9.8h-1.9v-1.7h1.9c0-1.2.2-3.1.2-3.6l2.3-.5c-.1.5-.3 2.4-.3 4.1h3.6l-.5 1.7z",fill:"#000"})]});LogoHorizontal.displayName="LogoHorizontal";try{LogoHorizontal.displayName="LogoHorizontal",LogoHorizontal.__docgenInfo={description:"",displayName:"LogoHorizontal",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/assets/logo_horizontal.tsx#LogoHorizontal"]={docgenInfo:LogoHorizontal.__docgenInfo,name:"LogoHorizontal",path:"../../packages/react/assets/logo_horizontal.tsx#LogoHorizontal"})}catch(__react_docgen_typescript_loader_error){}const LogoVertical=({width,height})=>(0,jsx_runtime.jsxs)("svg",{width,height,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 125 91",children:[(0,jsx_runtime.jsx)("path",{d:"M77.334 2.1h-34.5c-1.7 0-3.1 1.4-3.1 3.1v21.2c2.7-2.1 6.1-4.9 12.2-3.4 5.3 1.3 6.4 5.4 14.8 10 5.1 2.8 9.9.6 13.8-1.6V5.3c0-1.8-1.4-3.2-3.2-3.2z",fill:"#1A833B"}),(0,jsx_runtime.jsx)("path",{d:"M69.434 42.4c-1.7-.2-3.1-.8-4.4-1.7-2.9-1.8-5.7-4.7-11.7-7.8-4.7-2.3-9.4-.5-13.6 1.9v23.7c0 1.7 1.4 3.1 3.1 3.1h34.5c1.7 0 3.1-1.4 3.1-3.1V39.2c-3.6 2.1-7.1 3.8-11 3.2z",fill:"#1A589F"}),(0,jsx_runtime.jsx)("path",{d:"M66.734 33c-8.3-4.6-9.5-8.7-14.8-10-6.1-1.5-9.5 1.4-12.2 3.4V34.8c4.2-2.4 8.9-4.3 13.6-1.9 6 3.1 8.8 6 11.7 7.8 1.3.8 2.7 1.4 4.4 1.7 3.9.6 7.4-1.1 11.1-3.2V31.3c-3.9 2.3-8.7 4.5-13.8 1.7z",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{d:"M2.836 87.5V68.4h2.4v19.1h-2.4zm5.1-10.1 7.6 10.1h-2.9l-7.3-10.1 7.4-9h2.9l-7.7 9zM27.236 88c-.9-.3-1.6-1.1-1.9-2-1.3 1.3-2.4 1.9-4 1.9-3.4 0-4.5-2.1-4.5-4 0-3.1 2.7-5 7.4-5h1v-1c0-1.2-.1-1.7-.4-2.2-.4-.5-1-.8-1.9-.8-1.6 0-3.5.8-4.4 1.6l-1.1-1.6c1.8-1.2 3.8-1.9 5.8-1.9 1.9 0 3.3.8 3.8 2.2.3.8.3 1.8.3 3.1l-.1 4.8c-.1 2.3.1 2.8 1.1 3.4l-1.1 1.5zm-3.2-7.6c-3.5 0-4.8 1.2-4.8 3.3 0 1.6.8 2.5 2.4 2.5 1.4 0 2.7-.9 3.4-2.2l.1-3.6h-1.1zM38.435 75.7c-.1-.1-.4-.1-.6-.1-.8 0-1.7.4-2.3 1-.6.6-.8 1.1-.8 2.2v8.7h-2.2V76.8c0-1.8-.4-2.8-.5-3l2.2-.6c.1.2.5 1.2.4 2.3 1-1.4 2.5-2.3 3.9-2.3.3 0 .7.1.8.1l-.9 2.4zM47.034 75.3h-2.9v8.9c0 1.5.4 2.1 1.8 2.1.6 0 1-.1 1.4-.3l.3 1.4c-.7.4-1.5.6-2.5.6-.7 0-1.3-.1-1.8-.4-1-.5-1.3-1.4-1.3-2.8v-9.5h-1.8v-1.6h1.8c0-1.2.2-3.1.2-3.5l2.3-.5c-.1.4-.3 2.4-.3 4h3.5l-.7 1.6zM55.737 87.6h-2.1l-5-13.9 2.2-.5 3.2 9.6c.3 1 .6 2.1.7 2.4h.1c.1-.2.3-1.2.7-2.3l3.2-9.2h2.3l-5.3 13.9zM65.436 80.9v.3c0 1.3.2 2.3.6 3 .8 1.2 2.1 1.7 3.5 1.7 1.3 0 2.4-.4 3.4-1.3l.8 1.4c-1.2 1.1-2.9 1.7-4.7 1.7-3.8 0-6.2-2.8-6.2-7.4 0-2.3.5-3.8 1.7-5.2 1.1-1.3 2.5-1.9 4.1-1.9 1.5 0 2.8.5 3.8 1.5 1.2 1.2 1.6 2.5 1.6 5.8v.3h-8.6v.1zm5.7-4.7c-.5-.8-1.4-1.2-2.5-1.2-2 0-3.1 1.4-3.2 4.3h6.3c0-1.5-.2-2.4-.6-3.1zM84.134 75.7c-.1-.1-.4-.1-.6-.1-.8 0-1.7.4-2.3 1-.6.6-.8 1.1-.8 2.2v8.7h-2.2V76.8c0-1.8-.4-2.8-.5-3l2.2-.6c.1.2.5 1.2.4 2.3 1-1.4 2.5-2.3 3.9-2.3.3 0 .7.1.8.1l-.9 2.4zM87.338 87.5V70.4c0-1.6-.3-2.6-.4-2.8l2.2-.4c.1.2.4 1.4.4 3.3v17.1h-2.2v-.1zm8.6 0-6.4-7.9 5.3-6h2.7l-5.5 6 6.7 7.9h-2.8zM102.737 80.9v.3c0 1.3.2 2.3.6 3 .8 1.2 2.1 1.7 3.5 1.7 1.3 0 2.4-.4 3.4-1.3l.8 1.4c-1.2 1.1-2.9 1.7-4.7 1.7-3.8 0-6.2-2.8-6.2-7.4 0-2.3.5-3.8 1.7-5.2 1.1-1.3 2.5-1.9 4.1-1.9 1.5 0 2.8.5 3.8 1.5 1.2 1.2 1.6 2.5 1.6 5.8v.3h-8.6v.1zm5.7-4.7c-.5-.8-1.4-1.2-2.5-1.2-2 0-3.1 1.4-3.2 4.3h6.3c0-1.5-.2-2.4-.6-3.1zM120.636 75.3h-2.9v8.9c0 1.5.4 2.1 1.8 2.1.6 0 1-.1 1.4-.3l.3 1.4c-.7.4-1.5.6-2.5.6-.7 0-1.3-.1-1.8-.4-1-.5-1.3-1.4-1.3-2.8v-9.5h-1.8v-1.6h1.8c0-1.2.2-3.1.2-3.5l2.3-.5c-.1.4-.3 2.4-.3 4h3.5l-.7 1.6z",fill:"#222"})]});LogoVertical.displayName="LogoVertical";try{LogoVertical.displayName="LogoVertical",LogoVertical.__docgenInfo={description:"",displayName:"LogoVertical",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/assets/logo_vertical.tsx#LogoVertical"]={docgenInfo:LogoVertical.__docgenInfo,name:"LogoVertical",path:"../../packages/react/assets/logo_vertical.tsx#LogoVertical"})}catch(__react_docgen_typescript_loader_error){}const Logo=({variant="vertical",size})=>{const{width,height}=computeDimensions(variant,size);return"horizontal"===variant?(0,jsx_runtime.jsx)(LogoHorizontal,{width,height}):(0,jsx_runtime.jsx)(LogoVertical,{width,height})};Logo.displayName="Logo";const computeDimensions=(variant,size)=>{const width=size??("horizontal"===variant?184:125);return{width,height:width*("horizontal"===variant?64/184:.728)}};try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{variant:{defaultValue:{value:"vertical"},description:"The variant of the logo",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"vertical"'},{value:'"horizontal"'}]}},size:{defaultValue:{value:"184/125"},description:"The size of the logo. Width in pixels.",name:"size",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"../../packages/react/src/logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}var chunk_O5CRURSQ=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs");const Logo_stories={title:"Design Fundament/Logo",component:Logo,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{table:{type:{summary:"vertical | horizontal"},defaultValue:{summary:"vertical"}},options:["vertical","horizontal"],control:{type:"radio"}},size:{table:{type:{summary:"number"}},control:"number"}}},Logo_stories_Logo={args:{},render:args=>(0,jsx_runtime.jsx)(Logo,{...args})},Logo_stories_LogoHorizontal={args:{variant:"horizontal"},render:args=>(0,jsx_runtime.jsx)(Logo,{...args})},LogoSizes={args:{variant:"horizontal"},render:args=>(0,jsx_runtime.jsxs)(chunk_O5CRURSQ.K,{children:[(0,jsx_runtime.jsx)(Logo,{...args,size:100}),(0,jsx_runtime.jsx)(Logo,{...args,size:200}),(0,jsx_runtime.jsx)(Logo,{...args,size:300})]})};Logo_stories_Logo.parameters={...Logo_stories_Logo.parameters,docs:{...Logo_stories_Logo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <KvibLogo {...args} />\n}",...Logo_stories_Logo.parameters?.docs?.source}}},Logo_stories_LogoHorizontal.parameters={...Logo_stories_LogoHorizontal.parameters,docs:{...Logo_stories_LogoHorizontal.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "horizontal"\n  },\n  render: args => <KvibLogo {...args} />\n}',...Logo_stories_LogoHorizontal.parameters?.docs?.source}}},LogoSizes.parameters={...LogoSizes.parameters,docs:{...LogoSizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    variant: "horizontal"\n  },\n  render: args => <KvibStack>\n      <KvibLogo {...args} size={100} />\n      <KvibLogo {...args} size={200} />\n      <KvibLogo {...args} size={300} />\n    </KvibStack>\n}',...LogoSizes.parameters?.docs?.source}}};const __namedExportsOrder=["Logo","LogoHorizontal","LogoSizes"]}}]);