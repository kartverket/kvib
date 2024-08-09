"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[6874],{"../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,bK:()=>Square,xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square";var Circle=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})}));Circle.displayName="Circle"},"./stories/components/annet/portal/Portal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Portal:()=>Portal,PortalCustom:()=>PortalCustom,PortalNested:()=>PortalNested,PortalNotAppended:()=>PortalNotAppended,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/portal/dist/chunk-34PD6CUK.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Annet/Portal",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.h,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{appendToParentPortal:{description:"If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},containerRef:{description:"The ref to the component where the portal will be attached to.",table:{type:{summary:"RefObject<HTMLElement | null>"}},control:"object"}}},Portal={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.xu,{bg:"green.500",color:"white",children:["Dette er en Box",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.h,{...args,children:"Denne teksten er portaled til enden av document.body!"})]})},PortalCustomExample=({...args})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.xu,{bg:"green.500",color:"white",children:["Dette er en box",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.h,{...args,containerRef:ref,children:"Portal: Denne teksten er portaled til den blå boksen!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.xu,{ref,bg:"blue.400",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"Container: Hei"})})]})};PortalCustomExample.displayName="PortalCustomExample";const PortalCustom={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PortalCustomExample,{...args})},PortalNestedExample=({...args})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.h,{...args,containerRef:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.xu,{bg:"green.500",color:"white",children:["Parent: Hei, velkommen",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.h,{...args,children:"Child: Jeg er festet til min parent portal"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.xu,{bg:"red.500",color:"white",ref})]})};PortalNestedExample.displayName="PortalNestedExample";const PortalNested={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PortalNestedExample,{...args})};function PortalNotAppendedExample({...args}){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.h,{...args,containerRef:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.xu,{bg:"green.500",color:"white",children:["Parent: Hei, velkommen",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.h,{...args,appendToParentPortal:!1,children:"Child: Jeg går til document.body"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{background:"red"},ref})]})}PortalNotAppendedExample.displayName="PortalNotAppendedExample";const PortalNotAppended={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PortalNotAppendedExample,{...args})};Portal.parameters={storySource:{source:'{\n  args: {},\n  render: (args) => (\n    <Box bg="green.500" color="white">\n      Dette er en Box\n      <KvibPortal {...args}>Denne teksten er portaled til enden av document.body!</KvibPortal>\n    </Box>\n  ),\n}'},...Portal.parameters},PortalCustom.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <PortalCustomExample {...args} />,\n}"},...PortalCustom.parameters},PortalNested.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <PortalNestedExample {...args} />,\n}"},...PortalNested.parameters},PortalNotAppended.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => <PortalNotAppendedExample {...args} />,\n}"},...PortalNotAppended.parameters},Portal.parameters={...Portal.parameters,docs:{...Portal.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <Box bg="green.500" color="white">\n      Dette er en Box\n      <KvibPortal {...args}>Denne teksten er portaled til enden av document.body!</KvibPortal>\n    </Box>\n}',...Portal.parameters?.docs?.source}}},PortalCustom.parameters={...PortalCustom.parameters,docs:{...PortalCustom.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <PortalCustomExample {...args} />\n}",...PortalCustom.parameters?.docs?.source}}},PortalNested.parameters={...PortalNested.parameters,docs:{...PortalNested.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <PortalNestedExample {...args} />\n}",...PortalNested.parameters?.docs?.source}}},PortalNotAppended.parameters={...PortalNotAppended.parameters,docs:{...PortalNotAppended.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <PortalNotAppendedExample {...args} />\n}",...PortalNotAppended.parameters?.docs?.source}}};const __namedExportsOrder=["Portal","PortalCustom","PortalNested","PortalNotAppended"]}}]);