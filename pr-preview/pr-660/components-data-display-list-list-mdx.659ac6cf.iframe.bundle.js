"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[4737,7933],{"../../node_modules/@chakra-ui/layout/dist/chunk-46CXQZ4E.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GS:()=>OrderedList,HC:()=>ListItem,QI:()=>UnorderedList,aV:()=>List});var _chakra_ui_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@chakra-ui/icon/dist/chunk-2GBDXOMA.mjs"),_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),[ListStylesProvider,useListStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),List=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function List2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("List",props),{children,styleType="none",stylePosition,spacing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.Lr)(props),validChildren=(0,_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_5__.W)(children),spacingStyle=spacing?{"& > *:not(style) ~ *:not(style)":{mt:spacing}}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.m.ul,{ref,listStyleType:styleType,listStylePosition:stylePosition,role:"list",__css:{...styles.container,...spacingStyle},...rest,children:validChildren})})}));List.displayName="List";var OrderedList=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)(((props,ref)=>{const{as,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(List,{ref,as:"ol",styleType:"decimal",marginStart:"1em",...rest})}));OrderedList.displayName="OrderedList";var UnorderedList=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function UnorderedList2(props,ref){const{as,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(List,{ref,as:"ul",styleType:"initial",marginStart:"1em",...rest})}));UnorderedList.displayName="UnorderedList";var ListItem=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function ListItem2(props,ref){const styles=useListStyles();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.m.li,{ref,...props,__css:styles.item})}));ListItem.displayName="ListItem",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function ListIcon2(props,ref){const styles=useListStyles();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icon__WEBPACK_IMPORTED_MODULE_7__.J,{ref,role:"presentation",...props,__css:styles.icon})})).displayName="ListIcon"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/data-display/list/list.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_List_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/data-display/list/List.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Komponenter/Data Display/List"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"list",children:"List"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Liste for å vise elementer. Den render en ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<ul>"})," som standard."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { List, ListItem, OrderedList, UnorderedList } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_List_stories__WEBPACK_IMPORTED_MODULE_2__.List}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_List_stories__WEBPACK_IMPORTED_MODULE_2__.List}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ordered-list",children:"Ordered list"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_List_stories__WEBPACK_IMPORTED_MODULE_2__.ListOrdered})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./stories/components/data-display/list/List.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{List:()=>List,ListOrdered:()=>ListOrdered,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-46CXQZ4E.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Data Display/List",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.aV,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{spacing:{description:"The space between each list item",table:{type:{summary:String}},control:"text"}}},List={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.QI,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.HC,{children:"Kartgrunnlag for Fastlands-Noreg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.HC,{children:"Eigedomsdata"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.HC,{children:"Tidevatn og vasstand"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.HC,{children:"Høgdedata og djupnedata"})]})},ListOrdered={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.GS,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.HC,{children:"Kartgrunnlag for Fastlands-Noreg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.HC,{children:"Eigedomsdata"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.HC,{children:"Tidevatn og vasstand"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.HC,{children:"Høgdedata og djupnedata"})]})};List.parameters={...List.parameters,docs:{...List.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <KvibUnorderedList {...args}>\n      <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>\n      <KvibListItem>Eigedomsdata</KvibListItem>\n      <KvibListItem>Tidevatn og vasstand</KvibListItem>\n      <KvibListItem>Høgdedata og djupnedata</KvibListItem>\n    </KvibUnorderedList>\n}",...List.parameters?.docs?.source}}},ListOrdered.parameters={...ListOrdered.parameters,docs:{...ListOrdered.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <KvibOrderedList {...args}>\n      <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>\n      <KvibListItem>Eigedomsdata</KvibListItem>\n      <KvibListItem>Tidevatn og vasstand</KvibListItem>\n      <KvibListItem>Høgdedata og djupnedata</KvibListItem>\n    </KvibOrderedList>\n}",...ListOrdered.parameters?.docs?.source}}},List.parameters={storySource:{source:"{\n  args: {},\n  render: args => <KvibUnorderedList {...args}>\n      <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>\n      <KvibListItem>Eigedomsdata</KvibListItem>\n      <KvibListItem>Tidevatn og vasstand</KvibListItem>\n      <KvibListItem>Høgdedata og djupnedata</KvibListItem>\n    </KvibUnorderedList>\n}"},...List.parameters},ListOrdered.parameters={storySource:{source:"{\n  args: {},\n  render: args => <KvibOrderedList {...args}>\n      <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>\n      <KvibListItem>Eigedomsdata</KvibListItem>\n      <KvibListItem>Tidevatn og vasstand</KvibListItem>\n      <KvibListItem>Høgdedata og djupnedata</KvibListItem>\n    </KvibOrderedList>\n}"},...ListOrdered.parameters};const __namedExportsOrder=["List","ListOrdered"]}}]);