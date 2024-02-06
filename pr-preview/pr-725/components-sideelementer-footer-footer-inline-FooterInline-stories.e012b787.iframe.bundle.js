"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[4819],{"../../node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Link=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Link2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Link",props),{className,isExternal,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.a,{target:isExternal?"_blank":void 0,rel:isExternal?"noopener":void 0,ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-link",className),...rest,__css:styles})}));Link.displayName="Link"},"../../node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Flex=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex"},"./stories/components/sideelementer/footer/footer-inline/FooterInline.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FooterInline:()=>FooterInline_stories_FooterInline,FooterInlineCustom:()=>FooterInlineCustom,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FooterInline_stories});var chunk_KRPLQIP4=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs"),Link=__webpack_require__("../../packages/react/src/link/Link.tsx"),Logo=__webpack_require__("../../packages/react/src/logo/Logo.tsx"),colors=__webpack_require__("../../packages/react/src/theme/tokens/colors.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const FooterInline=({logoLink,accessibilityUrl,privacyUrl="https://kartverket.no/om-kartverket/personvern",children})=>(0,jsx_runtime.jsxs)(chunk_KRPLQIP4.k,{borderTop:`1px solid ${colors.O.gray[300]}`,marginTop:"1rem",justifyContent:"space-between",paddingTop:"10px",gap:"2rem",children:[(0,jsx_runtime.jsx)(Link.r,{href:logoLink,isExternal:!1,children:(0,jsx_runtime.jsx)(Logo.T,{size:130,variant:"horizontal"})}),(0,jsx_runtime.jsxs)(chunk_KRPLQIP4.k,{alignItems:"center",gap:"1rem",wrap:"wrap",children:[children,accessibilityUrl&&(0,jsx_runtime.jsx)(Link.r,{href:accessibilityUrl,"aria-label":"Besøk denne sidens tilgjengelighetserklæring",fontWeight:"bold",children:"Tilgjengelighetserklæring"}),(0,jsx_runtime.jsx)(Link.r,{href:privacyUrl,"aria-label":"Besøk Kartverket sin personvernserklæring",fontWeight:"bold",children:"Personvern"})]})]});FooterInline.displayName="FooterInline";try{FooterInline.displayName="FooterInline",FooterInline.__docgenInfo={description:"",displayName:"FooterInline",props:{logoLink:{defaultValue:null,description:"",name:"logoLink",required:!1,type:{name:"string | undefined"}},accessibilityUrl:{defaultValue:null,description:"",name:"accessibilityUrl",required:!1,type:{name:"string | undefined"}},privacyUrl:{defaultValue:{value:"https://kartverket.no/om-kartverket/personvern"},description:"The contact info email-adress",name:"privacyUrl",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/footer-inline/FooterInline.tsx#FooterInline"]={docgenInfo:FooterInline.__docgenInfo,name:"FooterInline",path:"../../packages/react/src/footer-inline/FooterInline.tsx#FooterInline"})}catch(__react_docgen_typescript_loader_error){}const FooterInline_stories={title:"Sideelementer/Footer/Footer-inline",component:FooterInline,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{accessibilityUrl:{description:"Link to accessibility statement",table:{type:{summary:"string"}},control:"text"},privacyUrl:{description:"Link to privacy statement",table:{type:{summary:"string"}},control:"text"},logoLink:{description:"Href for logo link",table:{type:{summary:"string"},defaulValue:{summary:"/"}},control:"text"}}},FooterInline_stories_FooterInline={args:{},render:args=>(0,jsx_runtime.jsx)(FooterInline,{...args})},FooterInlineCustom={args:{accessibilityUrl:"https://uustatus.no/nb/erklaringer/publisert/f048c5ff-2167-48c5-b706-bd106c15e9c9"},render:args=>(0,jsx_runtime.jsx)(FooterInline,{...args,children:(0,jsx_runtime.jsx)(Link.r,{href:"https://github.com/kartverket/kvib","aria-label":"Besøk Kartverkets Designsystem på Github",fontWeight:"bold",children:"Github"})})};FooterInline_stories_FooterInline.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <KvibFooterInline {...args} />,\n}"},...FooterInline_stories_FooterInline.parameters},FooterInlineCustom.parameters={storySource:{source:'{\n  args: { accessibilityUrl: "https://uustatus.no/nb/erklaringer/publisert/f048c5ff-2167-48c5-b706-bd106c15e9c9" },\n  render: (args) => (\n    <KvibFooterInline {...args}>\n      <Link\n        href="https://github.com/kartverket/kvib"\n        aria-label="Besøk Kartverkets Designsystem på Github"\n        fontWeight="bold"\n      >\n        Github\n      </Link>\n    </KvibFooterInline>\n  ),\n}'},...FooterInlineCustom.parameters},FooterInline_stories_FooterInline.parameters={...FooterInline_stories_FooterInline.parameters,docs:{...FooterInline_stories_FooterInline.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <KvibFooterInline {...args} />\n}",...FooterInline_stories_FooterInline.parameters?.docs?.source}}},FooterInlineCustom.parameters={...FooterInlineCustom.parameters,docs:{...FooterInlineCustom.parameters?.docs,source:{originalSource:'{\n  args: {\n    accessibilityUrl: "https://uustatus.no/nb/erklaringer/publisert/f048c5ff-2167-48c5-b706-bd106c15e9c9"\n  },\n  render: args => <KvibFooterInline {...args}>\n      <Link href="https://github.com/kartverket/kvib" aria-label="Besøk Kartverkets Designsystem på Github" fontWeight="bold">\n        Github\n      </Link>\n    </KvibFooterInline>\n}',...FooterInlineCustom.parameters?.docs?.source}}};const __namedExportsOrder=["FooterInline","FooterInlineCustom"]},"../../packages/react/src/link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Link=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.G)((({children,...props},ref)=>{const isExternal=void 0!==props.isExternal?props.isExternal:Boolean(props.href?.match(/^https?:\/\//));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.r,{...props,ref,isExternal,children:[children,isExternal&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"material-symbols-rounded",style:{fontSize:"18px",verticalAlign:"middle",marginLeft:"4px"},"aria-label":"launch-ikon",role:"link",children:"launch"})]})}));try{Link.displayName="Link",Link.__docgenInfo={description:"Link to different sites or parts of site\n\nYou can specify the `color` prop to get different link designs.",displayName:"Link",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | (ComponentClass<any, any> & As) | (FunctionComponent<any> & As) | ("search" & As) | ... 174 more ... | undefined'}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}},colorScheme:{defaultValue:{value:"green"},description:"The color of the link.",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"green"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"../../packages/react/src/link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/react/src/logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Logo});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const LogoHorizontal=({width,height})=>(0,jsx_runtime.jsxs)("svg",{width,height,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 184 64",children:[(0,jsx_runtime.jsx)("path",{d:"M40.938 2.1h-34.6c-1.7 0-3.1 1.4-3.1 3.1v21.2c2.7-2.1 6.1-4.9 12.2-3.4 5.3 1.3 6.4 5.4 14.8 10 5.1 2.8 9.9.6 13.8-1.6V5.2c0-1.7-1.4-3.1-3.1-3.1z",fill:"#1A833B"}),(0,jsx_runtime.jsx)("path",{d:"M32.938 42.4c-1.7-.2-3.1-.8-4.4-1.7-2.9-1.8-5.7-4.7-11.7-7.8-4.7-2.3-9.4-.5-13.6 1.9v23.7c0 1.7 1.4 3.1 3.1 3.1h34.5c1.7 0 3.1-1.4 3.1-3.1V39.1c-3.6 2.1-7.1 3.9-11 3.3z",fill:"#1A589F"}),(0,jsx_runtime.jsx)("path",{d:"M30.238 32.9c-8.3-4.6-9.5-8.7-14.8-10-6.1-1.5-9.5 1.4-12.2 3.4V34.7c4.2-2.4 8.9-4.3 13.6-1.9 6 3.1 8.8 6 11.7 7.8 1.3.8 2.7 1.4 4.4 1.7 3.9.6 7.4-1.1 11.1-3.2V31.2c-3.9 2.4-8.7 4.6-13.8 1.7z",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{d:"M55.04 50.9V31.3h2.4v19.6h-2.4zm5.1-10.4 7.8 10.4h-3l-7.5-10.4 7.5-9.2h3l-7.8 9.2zM80.838 51.4c-1-.3-1.7-1.1-1.9-2.1-1.4 1.4-2.5 1.9-4.1 1.9-3.5 0-4.6-2.1-4.6-4.1 0-3.2 2.8-5.1 7.5-5.1h1v-1c0-1.3-.1-1.8-.5-2.2-.5-.5-1-.8-1.9-.8-1.6 0-3.6.9-4.5 1.7l-1.1-1.5c1.9-1.3 3.9-1.9 6-1.9 2 0 3.3.8 3.9 2.2.3.8.3 1.9.3 3.1l-.1 4.7c-.1 2.3.1 2.9 1.1 3.5l-1.1 1.6zm-3.2-7.8c-3.6 0-4.9 1.2-4.9 3.4 0 1.7.8 2.6 2.5 2.6 1.5 0 2.8-.9 3.5-2.2l.1-3.7c-.4-.1-.9-.1-1.2-.1zM92.14 38.8c-.1-.1-.4-.1-.6-.1-.9 0-1.7.4-2.4 1-.7.7-.8 1.1-.8 2.3v8.9h-2.2v-11c0-1.9-.4-2.8-.5-3l2.2-.6c.1.2.5 1.3.5 2.3 1-1.5 2.5-2.4 4-2.4.3 0 .7.1.8.1l-1 2.5zM102.239 38.3h-3v9.2c0 1.6.4 2.1 1.8 2.1.6 0 1-.1 1.4-.3l.3 1.4c-.7.4-1.5.6-2.5.6-.7 0-1.3-.1-1.9-.4-1-.5-1.4-1.4-1.4-2.8v-9.8h-1.9v-1.7h1.9c0-1.2.2-3.1.2-3.6l2.3-.5c-.1.5-.3 2.4-.3 4.1h3.6l-.5 1.7zM112.64 51h-2.2l-5.1-14.2 2.3-.5 3.3 9.8c.3 1 .6 2.2.7 2.4h.1c.1-.2.3-1.3.7-2.4l3.3-9.4h2.4l-5.5 14.3zM122.641 44.1v.3c0 1.3.2 2.4.7 3.1.8 1.2 2.1 1.7 3.5 1.7s2.5-.4 3.5-1.3l.9 1.4c-1.3 1.1-3 1.8-4.8 1.8-3.9 0-6.3-2.9-6.3-7.6 0-2.4.5-3.9 1.7-5.4 1.1-1.3 2.5-2 4.3-2 1.5 0 2.9.5 3.9 1.5 1.2 1.3 1.6 2.6 1.6 6v.3h-9v.2zm5.8-4.8c-.5-.8-1.5-1.3-2.6-1.3-2 0-3.2 1.5-3.3 4.4h6.5c.1-1.5-.1-2.4-.6-3.1zM141.738 38.8c-.1-.1-.4-.1-.6-.1-.9 0-1.7.4-2.4 1-.7.7-.8 1.1-.8 2.3v8.9h-2.2v-11c0-1.9-.4-2.8-.5-3l2.2-.6c.1.2.5 1.3.5 2.3 1-1.5 2.5-2.4 4-2.4.3 0 .7.1.8.1l-1 2.5zM145.638 50.9V33.4c0-1.7-.3-2.7-.4-2.9l2.2-.4c.1.2.4 1.4.4 3.4V51h-2.2v-.1zm8.9 0-6.5-8 5.4-6.2h2.8l-5.6 6.2 6.9 8h-3zM161.438 44.1v.3c0 1.3.199 2.4.699 3.1.8 1.2 2.1 1.7 3.5 1.7s2.5-.4 3.5-1.3l.901 1.4c-1.3 1.1-3 1.8-4.8 1.8-3.9 0-6.3-2.9-6.3-7.6 0-2.4.499-3.9 1.699-5.4 1.1-1.3 2.5-2 4.301-2 1.5 0 2.9.5 3.9 1.5 1.2 1.3 1.6 2.6 1.6 6v.3h-9v.2zm5.9-4.8c-.5-.8-1.5-1.3-2.6-1.3-2 0-3.201 1.5-3.3 4.4h6.5c0-1.5-.2-2.4-.6-3.1zM179.938 38.3h-3v9.2c0 1.6.4 2.1 1.8 2.1.6 0 1-.1 1.4-.3l.3 1.4c-.7.4-1.5.6-2.5.6-.7 0-1.3-.1-1.9-.4-1-.5-1.4-1.4-1.4-2.8v-9.8h-1.9v-1.7h1.9c0-1.2.2-3.1.2-3.6l2.3-.5c-.1.5-.3 2.4-.3 4.1h3.6l-.5 1.7z",fill:"#000"})]});LogoHorizontal.displayName="LogoHorizontal";try{LogoHorizontal.displayName="LogoHorizontal",LogoHorizontal.__docgenInfo={description:"",displayName:"LogoHorizontal",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/assets/logo_horizontal.tsx#LogoHorizontal"]={docgenInfo:LogoHorizontal.__docgenInfo,name:"LogoHorizontal",path:"../../packages/react/assets/logo_horizontal.tsx#LogoHorizontal"})}catch(__react_docgen_typescript_loader_error){}const LogoVertical=({width,height})=>(0,jsx_runtime.jsxs)("svg",{width,height,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 125 91",children:[(0,jsx_runtime.jsx)("path",{d:"M77.334 2.1h-34.5c-1.7 0-3.1 1.4-3.1 3.1v21.2c2.7-2.1 6.1-4.9 12.2-3.4 5.3 1.3 6.4 5.4 14.8 10 5.1 2.8 9.9.6 13.8-1.6V5.3c0-1.8-1.4-3.2-3.2-3.2z",fill:"#1A833B"}),(0,jsx_runtime.jsx)("path",{d:"M69.434 42.4c-1.7-.2-3.1-.8-4.4-1.7-2.9-1.8-5.7-4.7-11.7-7.8-4.7-2.3-9.4-.5-13.6 1.9v23.7c0 1.7 1.4 3.1 3.1 3.1h34.5c1.7 0 3.1-1.4 3.1-3.1V39.2c-3.6 2.1-7.1 3.8-11 3.2z",fill:"#1A589F"}),(0,jsx_runtime.jsx)("path",{d:"M66.734 33c-8.3-4.6-9.5-8.7-14.8-10-6.1-1.5-9.5 1.4-12.2 3.4V34.8c4.2-2.4 8.9-4.3 13.6-1.9 6 3.1 8.8 6 11.7 7.8 1.3.8 2.7 1.4 4.4 1.7 3.9.6 7.4-1.1 11.1-3.2V31.3c-3.9 2.3-8.7 4.5-13.8 1.7z",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{d:"M2.836 87.5V68.4h2.4v19.1h-2.4zm5.1-10.1 7.6 10.1h-2.9l-7.3-10.1 7.4-9h2.9l-7.7 9zM27.236 88c-.9-.3-1.6-1.1-1.9-2-1.3 1.3-2.4 1.9-4 1.9-3.4 0-4.5-2.1-4.5-4 0-3.1 2.7-5 7.4-5h1v-1c0-1.2-.1-1.7-.4-2.2-.4-.5-1-.8-1.9-.8-1.6 0-3.5.8-4.4 1.6l-1.1-1.6c1.8-1.2 3.8-1.9 5.8-1.9 1.9 0 3.3.8 3.8 2.2.3.8.3 1.8.3 3.1l-.1 4.8c-.1 2.3.1 2.8 1.1 3.4l-1.1 1.5zm-3.2-7.6c-3.5 0-4.8 1.2-4.8 3.3 0 1.6.8 2.5 2.4 2.5 1.4 0 2.7-.9 3.4-2.2l.1-3.6h-1.1zM38.435 75.7c-.1-.1-.4-.1-.6-.1-.8 0-1.7.4-2.3 1-.6.6-.8 1.1-.8 2.2v8.7h-2.2V76.8c0-1.8-.4-2.8-.5-3l2.2-.6c.1.2.5 1.2.4 2.3 1-1.4 2.5-2.3 3.9-2.3.3 0 .7.1.8.1l-.9 2.4zM47.034 75.3h-2.9v8.9c0 1.5.4 2.1 1.8 2.1.6 0 1-.1 1.4-.3l.3 1.4c-.7.4-1.5.6-2.5.6-.7 0-1.3-.1-1.8-.4-1-.5-1.3-1.4-1.3-2.8v-9.5h-1.8v-1.6h1.8c0-1.2.2-3.1.2-3.5l2.3-.5c-.1.4-.3 2.4-.3 4h3.5l-.7 1.6zM55.737 87.6h-2.1l-5-13.9 2.2-.5 3.2 9.6c.3 1 .6 2.1.7 2.4h.1c.1-.2.3-1.2.7-2.3l3.2-9.2h2.3l-5.3 13.9zM65.436 80.9v.3c0 1.3.2 2.3.6 3 .8 1.2 2.1 1.7 3.5 1.7 1.3 0 2.4-.4 3.4-1.3l.8 1.4c-1.2 1.1-2.9 1.7-4.7 1.7-3.8 0-6.2-2.8-6.2-7.4 0-2.3.5-3.8 1.7-5.2 1.1-1.3 2.5-1.9 4.1-1.9 1.5 0 2.8.5 3.8 1.5 1.2 1.2 1.6 2.5 1.6 5.8v.3h-8.6v.1zm5.7-4.7c-.5-.8-1.4-1.2-2.5-1.2-2 0-3.1 1.4-3.2 4.3h6.3c0-1.5-.2-2.4-.6-3.1zM84.134 75.7c-.1-.1-.4-.1-.6-.1-.8 0-1.7.4-2.3 1-.6.6-.8 1.1-.8 2.2v8.7h-2.2V76.8c0-1.8-.4-2.8-.5-3l2.2-.6c.1.2.5 1.2.4 2.3 1-1.4 2.5-2.3 3.9-2.3.3 0 .7.1.8.1l-.9 2.4zM87.338 87.5V70.4c0-1.6-.3-2.6-.4-2.8l2.2-.4c.1.2.4 1.4.4 3.3v17.1h-2.2v-.1zm8.6 0-6.4-7.9 5.3-6h2.7l-5.5 6 6.7 7.9h-2.8zM102.737 80.9v.3c0 1.3.2 2.3.6 3 .8 1.2 2.1 1.7 3.5 1.7 1.3 0 2.4-.4 3.4-1.3l.8 1.4c-1.2 1.1-2.9 1.7-4.7 1.7-3.8 0-6.2-2.8-6.2-7.4 0-2.3.5-3.8 1.7-5.2 1.1-1.3 2.5-1.9 4.1-1.9 1.5 0 2.8.5 3.8 1.5 1.2 1.2 1.6 2.5 1.6 5.8v.3h-8.6v.1zm5.7-4.7c-.5-.8-1.4-1.2-2.5-1.2-2 0-3.1 1.4-3.2 4.3h6.3c0-1.5-.2-2.4-.6-3.1zM120.636 75.3h-2.9v8.9c0 1.5.4 2.1 1.8 2.1.6 0 1-.1 1.4-.3l.3 1.4c-.7.4-1.5.6-2.5.6-.7 0-1.3-.1-1.8-.4-1-.5-1.3-1.4-1.3-2.8v-9.5h-1.8v-1.6h1.8c0-1.2.2-3.1.2-3.5l2.3-.5c-.1.4-.3 2.4-.3 4h3.5l-.7 1.6z",fill:"#222"})]});LogoVertical.displayName="LogoVertical";try{LogoVertical.displayName="LogoVertical",LogoVertical.__docgenInfo={description:"",displayName:"LogoVertical",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/assets/logo_vertical.tsx#LogoVertical"]={docgenInfo:LogoVertical.__docgenInfo,name:"LogoVertical",path:"../../packages/react/assets/logo_vertical.tsx#LogoVertical"})}catch(__react_docgen_typescript_loader_error){}const Logo=({variant="vertical",size})=>{const{width,height}=computeDimensions(variant,size);return"horizontal"===variant?(0,jsx_runtime.jsx)(LogoHorizontal,{width,height}):(0,jsx_runtime.jsx)(LogoVertical,{width,height})};Logo.displayName="Logo";const computeDimensions=(variant,size)=>{const width=size??("horizontal"===variant?184:125);return{width,height:width*("horizontal"===variant?64/184:.728)}};try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{variant:{defaultValue:{value:"vertical"},description:"The variant of the logo",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:{value:"184/125"},description:"The size of the logo. Width in pixels.",name:"size",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"../../packages/react/src/logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}}}]);