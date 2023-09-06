"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[4438,3566],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AV:()=>breakpoints,XQ:()=>mapResponsive,Yq:()=>arrayToObjectNotation});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),breakpoints=Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}function arrayToObjectNotation(values,bps=breakpoints){const result={};return values.forEach(((value,index)=>{const key=bps[index];null!=value&&(result[key]=value)})),result}},"../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");var dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_ZJJGQIVY.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,shared_utils_dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:direction,flexWrap:wrap,gap:hasDivider?void 0:spacing,className:_className,...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/data-display/kbd/Kbd.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Kbd_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/data-display/kbd/Kbd.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Komponenter/Data Display/Kbd"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"keyboard-key-kbd",children:"Keyboard Key (Kbd)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Kbd brukes til å vise hvilken tast eller kombinasjon av taster på tastaturet som vil sette i gang en handling."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Kbd } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Kbd_stories__WEBPACK_IMPORTED_MODULE_2__.Kbd}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"guideline",children:"Guideline"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Alle snarveier skal prøve å passe tastene på brukerens tastatur."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Alle single bokstaver A-Å skal ha stor bokstav."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Alle taster uten bokstaver (enter, esc, shift, osv.) skal ha små bokstaver."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"modifikator",children:"Modifikator"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:'"+"'})})," brukes når en kombinasjon av taster vil aktivere snarveien."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:'"then"'})})," brukes når en sekvens av taster må følge en rekkefølge."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:'"or"'})})," brukes dersom flere taster fungerer likt eller hvis tasten ser annerledes ut på forskjellige tastatur."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Kbd_stories__WEBPACK_IMPORTED_MODULE_2__.KbdModifier})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./stories/components/data-display/kbd/Kbd.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Kbd:()=>Kbd_stories_Kbd,KbdModifier:()=>KbdModifier,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Kbd_stories});var chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_TKWR62NH=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Kbd=(0,chunk_ZJJGQIVY.G)((function Kbd2(props,ref){const styles=(0,chunk_TKWR62NH.mq)("Kbd",props),{className,...rest}=(0,dist.Lr)(props);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.kbd,{ref,className:(0,shared_utils_dist.cx)("chakra-kbd",className),...rest,__css:{fontFamily:"mono",...styles}})}));Kbd.displayName="Kbd";var chunk_ZHMYA64R=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs");const Kbd_stories={title:"Komponenter/Data Display/Kbd",component:Kbd,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},Kbd_stories_Kbd={args:{},render:args=>(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsx)(Kbd,{...args,children:"shift"})," + ",(0,jsx_runtime.jsx)(Kbd,{...args,children:"H"})]})},KbdModifier={args:{},render:args=>(0,jsx_runtime.jsxs)(chunk_ZHMYA64R.K,{children:[(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsx)(Kbd,{...args,children:"shift"})," + ",(0,jsx_runtime.jsx)(Kbd,{...args,children:"H"})]}),(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsx)(Kbd,{...args,children:"shift"})," then ",(0,jsx_runtime.jsx)(Kbd,{...args,children:"H"})]}),(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsx)(Kbd,{...args,children:"alt"})," or ",(0,jsx_runtime.jsx)(Kbd,{...args,children:"option"})]})]})};Kbd_stories_Kbd.parameters={...Kbd_stories_Kbd.parameters,docs:{...Kbd_stories_Kbd.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <span>\n      <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>\n    </span>\n}",...Kbd_stories_Kbd.parameters?.docs?.source}}},KbdModifier.parameters={...KbdModifier.parameters,docs:{...KbdModifier.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <KvibStack>\n      <span>\n        <KvibKbd {...args}>shift</KvibKbd> + <KvibKbd {...args}>H</KvibKbd>\n      </span>\n      <span>\n        <KvibKbd {...args}>shift</KvibKbd> then <KvibKbd {...args}>H</KvibKbd>\n      </span>\n      <span>\n        <KvibKbd {...args}>alt</KvibKbd> or <KvibKbd {...args}>option</KvibKbd>\n      </span>\n    </KvibStack>\n}",...KbdModifier.parameters?.docs?.source}}};const __namedExportsOrder=["Kbd","KbdModifier"]}}]);