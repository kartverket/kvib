"use strict";(self.webpackChunk_kvib_designsystem=self.webpackChunk_kvib_designsystem||[]).push([[5325,7898],{"../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XQ:()=>mapResponsive});var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs");Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}},"../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("../../node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:(0,chunk_G72KV6MB.XQ)(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/data-display/badge/Badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Badge_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/data-display/badge/Badge.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Komponenter/Data Display/Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Et Badge brukes til å fremheve elementers status slik at brukeren raskt gjenkjenner tilstanden."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { Badge } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Badge}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Badge}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"farger",children:"Farger"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.BadgeColors}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"varianter",children:"Varianter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.BadgeVariants})]})}}},"./stories/components/data-display/badge/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Badge:()=>Badge_stories_Badge,BadgeColors:()=>BadgeColors,BadgeVariants:()=>BadgeVariants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badge_stories});var chunk_QEVFQ4EU=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_3LE6AY5Q=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Badge=(0,chunk_QEVFQ4EU.G)((function Badge2(props,ref){const styles=(0,chunk_T2VHL7RE.mq)("Badge",props),{className,...rest}=(0,dist.Lr)(props);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{ref,className:(0,shared_utils_dist.cx)("chakra-badge",props.className),...rest,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...styles}})}));Badge.displayName="Badge";const Badge_Badge=(0,chunk_QEVFQ4EU.G)((({...props},ref)=>(0,jsx_runtime.jsx)(Badge,{...props,ref})));try{Badge_Badge.displayName="Badge",Badge_Badge.__docgenInfo={description:"",displayName:"Badge",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | (ComponentClass<any, any> & As) | (FunctionComponent<any> & As) | ("a" & As) | ("abbr" & As) | ... 172 more ... | undefined'}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}},colorScheme:{defaultValue:{value:"gray"},description:"The color of the badge.",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"green"'},{value:'"blue"'},{value:'"gray"'},{value:'"red"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/badge/Badge.tsx#Badge"]={docgenInfo:Badge_Badge.__docgenInfo,name:"Badge",path:"../../packages/react/src/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}var chunk_O5CRURSQ=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs");const Badge_stories={title:"Komponenter/Data Display/Badge",component:Badge_Badge,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the badge",table:{type:{summary:"solid | subtle | outline"},defaultValue:{summary:"subtle"}},options:["solid","subtle","outline"],control:"radio"},colorScheme:{description:"The visual color appearance of the badge",table:{type:{summary:"green | blue | red | gray"},defultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"}}},Badge_stories_Badge={args:{children:"Badge"},render:args=>(0,jsx_runtime.jsx)(Badge_Badge,{...args})},BadgeColors={args:{},render:args=>(0,jsx_runtime.jsxs)(chunk_O5CRURSQ.K,{direction:"row",children:[(0,jsx_runtime.jsx)(Badge_Badge,{children:"Default"}),(0,jsx_runtime.jsx)(Badge_Badge,{...args,colorScheme:"green",children:"Success"}),(0,jsx_runtime.jsx)(Badge_Badge,{...args,colorScheme:"red",children:"Removed"}),(0,jsx_runtime.jsx)(Badge_Badge,{...args,colorScheme:"blue",children:"New"})]})},BadgeVariants={args:{colorScheme:"green"},render:args=>(0,jsx_runtime.jsxs)(chunk_O5CRURSQ.K,{direction:"row",children:[(0,jsx_runtime.jsx)(Badge_Badge,{...args,variant:"outline",children:"Default"}),(0,jsx_runtime.jsx)(Badge_Badge,{...args,variant:"solid",children:"Success"}),(0,jsx_runtime.jsx)(Badge_Badge,{...args,variant:"subtle",children:"Removed"})]})};Badge_stories_Badge.parameters={...Badge_stories_Badge.parameters,docs:{...Badge_stories_Badge.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Badge"\n  },\n  render: args => <KvibBadge {...args} />\n}',...Badge_stories_Badge.parameters?.docs?.source}}},BadgeColors.parameters={...BadgeColors.parameters,docs:{...BadgeColors.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibStack direction="row">\n      <KvibBadge>Default</KvibBadge>\n      <KvibBadge {...args} colorScheme="green">\n        Success\n      </KvibBadge>\n      <KvibBadge {...args} colorScheme="red">\n        Removed\n      </KvibBadge>\n      <KvibBadge {...args} colorScheme="blue">\n        New\n      </KvibBadge>\n    </KvibStack>\n}',...BadgeColors.parameters?.docs?.source}}},BadgeVariants.parameters={...BadgeVariants.parameters,docs:{...BadgeVariants.parameters?.docs,source:{originalSource:'{\n  args: {\n    colorScheme: "green"\n  },\n  render: args => <KvibStack direction="row">\n      <KvibBadge {...args} variant="outline">\n        Default\n      </KvibBadge>\n      <KvibBadge {...args} variant="solid">\n        Success\n      </KvibBadge>\n      <KvibBadge {...args} variant="subtle">\n        Removed\n      </KvibBadge>\n    </KvibStack>\n}',...BadgeVariants.parameters?.docs?.source}}};const __namedExportsOrder=["Badge","BadgeColors","BadgeVariants"]}}]);