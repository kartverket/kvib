"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[598,9918],{"../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,bK:()=>Square,xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square";var Circle=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})}));Circle.displayName="Circle"},"../../node_modules/@chakra-ui/media-query/dist/chunk-57I6FYPZ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>useMediaQuery});var _chakra_ui_react_env__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-env/dist/chunk-VMD3UMGK.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useMediaQuery(query,options={}){const{ssr=!0,fallback}=options,{getWindow}=(0,_chakra_ui_react_env__WEBPACK_IMPORTED_MODULE_1__.O)(),queries=Array.isArray(query)?query:[query];let fallbackValues=Array.isArray(fallback)?fallback:[fallback];fallbackValues=fallbackValues.filter((v=>null!=v));const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>queries.map(((query2,index)=>({media:query2,matches:ssr?!!fallbackValues[index]:getWindow().matchMedia(query2).matches})))));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const win=getWindow();setValue(queries.map((query2=>({media:query2,matches:win.matchMedia(query2).matches}))));const mql=queries.map((query2=>win.matchMedia(query2))),handler=evt=>{setValue((prev=>prev.slice().map((item=>item.media===evt.media?{...item,matches:evt.matches}:item))))};return mql.forEach((mql2=>{"function"==typeof mql2.addListener?mql2.addListener(handler):mql2.addEventListener("change",handler)})),()=>{mql.forEach((mql2=>{"function"==typeof mql2.removeListener?mql2.removeListener(handler):mql2.removeEventListener("change",handler)}))}}),[getWindow]),value.map((item=>item.matches))}},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/show-hide/ShowHide.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_ShowHide_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/show-hide/ShowHide.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_ShowHide_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"show-hide",children:"Show-Hide"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Show og Hide er wrapperkomponenter som render eller ikke render child-elementer hvis media query som er spesifisert passer."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Show, Hide } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ShowHide_stories__WEBPACK_IMPORTED_MODULE_2__.Show}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_ShowHide_stories__WEBPACK_IMPORTED_MODULE_2__.Show}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"above--below",children:"Above / Below"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ShowHide_stories__WEBPACK_IMPORTED_MODULE_2__.ShowHide})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./stories/components/show-hide/ShowHide.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Show:()=>ShowHide_stories_Show,ShowHide:()=>ShowHide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ShowHide_stories});var chunk_57I6FYPZ=__webpack_require__("../../node_modules/@chakra-ui/media-query/dist/chunk-57I6FYPZ.mjs");function Visibility(props){const{breakpoint,hide,children,ssr}=props,[show]=(0,chunk_57I6FYPZ.a)(breakpoint,{ssr});return(hide?!show:show)?children:null}var chunk_UIGT7YZF=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs"),getBreakpoint=(theme,value)=>{var _a,_b;return null!=(_b=null==(_a=null==theme?void 0:theme.breakpoints)?void 0:_a[value])?_b:value};function useQuery(props){const{breakpoint="",below,above}=props,theme=(0,chunk_UIGT7YZF.F)(),bpBelow=getBreakpoint(theme,below),bpAbove=getBreakpoint(theme,above);let query=breakpoint;return bpBelow?query=`(max-width: ${bpBelow})`:bpAbove&&(query=`(min-width: ${bpAbove})`),query}var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function Show(props){const{children,ssr}=props,query=useQuery(props);return(0,jsx_runtime.jsx)(Visibility,{breakpoint:query,ssr,children})}Show.displayName="Show";var chunk_PULVB27S=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs");function Hide(props){const{children,ssr}=props,query=useQuery(props);return(0,jsx_runtime.jsx)(Visibility,{breakpoint:query,hide:!0,ssr,children})}Hide.displayName="Hide";const ShowHide_stories={title:"Komponenter/Show-Hide",component:Show,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{above:{description:"A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",table:{type:{summary:"string"}},control:"text"},below:{description:"A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",table:{type:{summary:"string"}},control:"text"},breakpoint:{description:"A custom css media query that determines when the children are rendered. Will render children if that query resolves to true.",table:{type:{summary:"string"}},control:"text"},ssr:{table:{type:{summary:Boolean}},control:"boolean"}}},ShowHide_stories_Show={args:{},render:args=>(0,jsx_runtime.jsx)(Show,{...args,breakpoint:"(max-width: 400px)",children:(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:"Teksten dukker opp på skjermer med 400px eller mindre."})})},ShowHide={args:{},render:args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Show,{...args,above:"sm",children:(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:'Denne teksten dukker opp på skjermer med "sm" eller større bredde.'})}),(0,jsx_runtime.jsx)(Hide,{...args,below:"md",children:(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:'Denne teksten forsvinner på skjermer med "md" eller mindre bredde.'})})]})};ShowHide_stories_Show.parameters={...ShowHide_stories_Show.parameters,docs:{...ShowHide_stories_Show.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibShow {...args} breakpoint="(max-width: 400px)">\n      <Box>Teksten dukker opp på skjermer med 400px eller mindre.</Box>\n    </KvibShow>\n}',...ShowHide_stories_Show.parameters?.docs?.source}}},ShowHide.parameters={...ShowHide.parameters,docs:{...ShowHide.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <>\n      <KvibShow {...args} above="sm">\n        <Box>Denne teksten dukker opp på skjermer med "sm" eller større bredde.</Box>\n      </KvibShow>\n      <KvibHide {...args} below="md">\n        <Box>Denne teksten forsvinner på skjermer med "md" eller mindre bredde.</Box>\n      </KvibHide>\n    </>\n}',...ShowHide.parameters?.docs?.source}}};const __namedExportsOrder=["Show","ShowHide"]}}]);