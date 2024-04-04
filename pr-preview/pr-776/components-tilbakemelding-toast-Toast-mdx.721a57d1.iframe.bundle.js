"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[1157],{"./stories/components/tilbakemelding/toast/Toast.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Toast});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Toast_stories=__webpack_require__("./stories/components/tilbakemelding/toast/Toast.stories.tsx"),Alert=__webpack_require__("../../packages/react/src/alert/Alert.tsx"),chunk_ALC6QPCI=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs"),chunk_QURMB2UJ=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-QURMB2UJ.mjs"),chunk_CUKBNH6U=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-CUKBNH6U.mjs"),Card=__webpack_require__("../../packages/react/src/card/Card.tsx"),chunk_FHHZMTWR=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs"),templates=__webpack_require__("./stories/templates/index.ts");const ToastExample='\nconst ToastExample = (props) => {\nconst toast = useToast()\n  \n  return (\n    <Button\n      colorScheme="green"\n      onClick={() => toast({...props})\n      }\n    >\n    Trykk for tilbakemelding\n    </Button>\n)\n<ToastExample\n    title="Skjema innsendt"\n    description="Takk for opplysningene"\n    status="success"\n    duration=9000\n    icon="check">\n</ToastExample>\n',ToastStatus='\n<ToastExample\n    duration={4000}\n    title="Error"\n    description="Noe gikk galt"\n    status="error"\n    >Trykk for toast\n</ToastExample>\n',ToastPosition='\n<ToastExample\n    position="top-left"\n    title="Top-left"\n    duration="5000"\n    >Top-left\n</ToastExample>\n';function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Toast_stories}),"\n",(0,jsx_runtime.jsxs)(templates.Zu,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"toast",children:"Toast"}),(0,jsx_runtime.jsx)(_components.p,{children:"Toast brukes for å gi brukeren tilbakemelding etter en handling. Toast skal forsvinne enten når den blir lukket,\neller av seg selv etterhvert. Flere toasts kan være på skjermen samtidig."}),(0,jsx_runtime.jsxs)(_components.p,{children:["På ",(0,jsx_runtime.jsx)(_components.a,{href:"https://chakra-ui.com/docs/components/toast",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra-ui.com"})," finner du noen niche brukseksempler."]}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { useToast } from "@kvib/react";\n'})}),(0,jsx_runtime.jsx)(_components.h2,{id:"status",children:"Status"}),(0,jsx_runtime.jsxs)(Alert.b,{status:"warning",children:[(0,jsx_runtime.jsx)(chunk_ALC6QPCI.z,{}),(0,jsx_runtime.jsx)(chunk_QURMB2UJ.C,{children:"Feil farge"}),(0,jsx_runtime.jsx)(chunk_CUKBNH6U.X,{children:(0,jsx_runtime.jsx)(_components.p,{children:'Farge for "warning" toast er ikke helt riktig enda (for lite kontrast mot hvit tekst)'})})]}),(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Toast_stories.ToastStatus})})}),(0,jsx_runtime.jsx)(dist.Hw,{code:ToastStatus,dark:!0}),(0,jsx_runtime.jsx)(_components.h2,{id:"positions",children:"Positions"}),(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Toast_stories.ToastPosition})})}),(0,jsx_runtime.jsx)(dist.Hw,{code:ToastPosition,dark:!0}),(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Toast_stories.Toast})})}),(0,jsx_runtime.jsx)(dist.Hw,{code:ToastExample,dark:!0}),(0,jsx_runtime.jsx)(dist.ZX,{of:Toast_stories.Toast})]})]})}const Toast=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./stories/templates/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mf:()=>DocsAnatomy,Zu:()=>DocsContainer,I4:()=>DocsHeading,Z$:()=>DocsStory,x2:()=>Feedback});var chunk_PULVB27S=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DocsContainer=({children})=>(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{padding:"0 1rem",children});DocsContainer.displayName="DocsContainer";try{DocsContainer.displayName="DocsContainer",DocsContainer.__docgenInfo={description:"",displayName:"DocsContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/templates/DocsContainer.tsx#DocsContainer"]={docgenInfo:DocsContainer.__docgenInfo,name:"DocsContainer",path:"stories/templates/DocsContainer.tsx#DocsContainer"})}catch(__react_docgen_typescript_loader_error){}var chunk_QINAG4RG=__webpack_require__("../../node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs");const DocsAnatomy=({imgPath})=>(0,jsx_runtime.jsx)(chunk_QINAG4RG.E,{width:"100%",padding:[0,"1rem","3rem"],src:imgPath,backgroundColor:"white"});DocsAnatomy.displayName="DocsAnatomy";try{DocsAnatomy.displayName="DocsAnatomy",DocsAnatomy.__docgenInfo={description:"",displayName:"DocsAnatomy",props:{imgPath:{defaultValue:null,description:"",name:"imgPath",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/templates/DocsAnatomy.tsx#DocsAnatomy"]={docgenInfo:DocsAnatomy.__docgenInfo,name:"DocsAnatomy",path:"stories/templates/DocsAnatomy.tsx#DocsAnatomy"})}catch(__react_docgen_typescript_loader_error){}var chunk_NEK3OOAM=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-NEK3OOAM.mjs"),chunk_7OLJDQMT=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs"),chunk_2OOHT3W5=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs");const DocsStory=({title,description,story,isVertical})=>(0,jsx_runtime.jsxs)(chunk_NEK3OOAM.M,{columns:[1,1,isVertical?1:2],spacing:[0,0,isVertical?0:"2rem"],children:[(0,jsx_runtime.jsxs)(chunk_PULVB27S.xu,{marginTop:"25px",children:[(0,jsx_runtime.jsx)(chunk_7OLJDQMT.X,{size:"md",as:"h3",id:title,children:title}),(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{children:description})]}),(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{children:story})]});DocsStory.displayName="DocsStory";try{DocsStory.displayName="DocsStory",DocsStory.__docgenInfo={description:"",displayName:"DocsStory",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string | Element"}},story:{defaultValue:null,description:"",name:"story",required:!0,type:{name:"any"}},isVertical:{defaultValue:null,description:"",name:"isVertical",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/templates/DocsStory.tsx#DocsStory"]={docgenInfo:DocsStory.__docgenInfo,name:"DocsStory",path:"stories/templates/DocsStory.tsx#DocsStory"})}catch(__react_docgen_typescript_loader_error){}const DocsHeading=({children,light})=>(0,jsx_runtime.jsx)(chunk_PULVB27S.xu,{backgroundColor:light?"transparent":"gray.900",height:"3rem",borderRadius:"none",paddingLeft:"1rem",alignItems:"center",display:"flex",marginBottom:"2rem",marginTop:"4rem",className:"docs-heading",children:(0,jsx_runtime.jsx)(chunk_7OLJDQMT.X,{margin:"0",color:light?"gray.900":"white",size:light?"md":"sm",as:"h2",id:children,children})});DocsHeading.displayName="DocsHeading";try{DocsHeading.displayName="DocsHeading",DocsHeading.__docgenInfo={description:"",displayName:"DocsHeading",props:{light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/templates/DocsHeading.tsx#DocsHeading"]={docgenInfo:DocsHeading.__docgenInfo,name:"DocsHeading",path:"stories/templates/DocsHeading.tsx#DocsHeading"})}catch(__react_docgen_typescript_loader_error){}var Card=__webpack_require__("../../packages/react/src/card/Card.tsx"),chunk_FHHZMTWR=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs"),chunk_KRPLQIP4=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs"),Button=__webpack_require__("../../packages/react/src/button/Button.tsx");const Feedback=({component,width})=>{const issueUrl=`https://github.com/kartverket/kvib/issues/new?labels=innspill+%F0%9F%A5%B0%2Ckomponenter+%F0%9F%A7%A9&projects=&template=update-component.yml&title=%5BInnspill+til+komponent%5D%3A+%3C${component}%20/%3E`;return(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",backgroundColor:"gray.100",borderColor:"gray.400",width:width||["fit-content","fit-content","auto"],margin:"2rem 0",children:(0,jsx_runtime.jsxs)(chunk_FHHZMTWR.e,{display:"flex",flexDirection:["column","column","row"],gap:"1rem",justifyContent:"space-between",padding:"1rem",alignItems:["flex-start","flex-start","center"],children:[(0,jsx_runtime.jsxs)(chunk_KRPLQIP4.k,{gap:".5rem",children:[(0,jsx_runtime.jsx)(chunk_QINAG4RG.E,{src:"assets/Lightbulb.svg"}),(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{margin:"0",fontWeight:"medium",fontSize:"md",children:"Har du innspill til komponenten?"})]}),(0,jsx_runtime.jsxs)(chunk_KRPLQIP4.k,{gap:".5rem",alignItems:"center",flexWrap:"wrap",children:[(0,jsx_runtime.jsx)(Button.z,{href:issueUrl,as:"a",target:"_blank",colorScheme:"blue",variant:"secondary",children:"Send forslag"}),(0,jsx_runtime.jsx)(chunk_2OOHT3W5.x,{margin:"0",fontSize:"md",children:"eller"}),(0,jsx_runtime.jsx)(Button.z,{as:"a",href:"/?path=/docs/info-bidra-hurtigveiledning--docs",colorScheme:"blue",variant:"secondary",children:"Bidra med PR"})]})]})})};Feedback.displayName="Feedback";try{Feedback.displayName="Feedback",Feedback.__docgenInfo={description:"",displayName:"Feedback",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/templates/Feedback.tsx#Feedback"]={docgenInfo:Feedback.__docgenInfo,name:"Feedback",path:"stories/templates/Feedback.tsx#Feedback"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/react/src/alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Alert});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Alert=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.G)((({...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.b,{...props,ref})));try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | ("p" & As) | (ComponentClass<any, any> & As) | (FunctionComponent<any> & As) | ("a" & As) | ... 174 more ... | undefined'}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"../../packages/react/src/alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/react/src/card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Card=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.G)((({...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z,{...props,ref})));try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | ("p" & As) | (ComponentClass<any, any> & As) | (FunctionComponent<any> & As) | ("a" & As) | ... 174 more ... | undefined'}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}},direction:{defaultValue:null,description:"The flex direction of the card",name:"direction",required:!1,type:{name:"ResponsiveValue<FlexDirection> | undefined"}},align:{defaultValue:null,description:"The flex alignment of the card",name:"align",required:!1,type:{name:"ResponsiveValue<AlignItems> | undefined"}},justify:{defaultValue:null,description:"The flex distribution of the card",name:"justify",required:!1,type:{name:"ResponsiveValue<JustifyContent> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"../../packages/react/src/card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}}}]);