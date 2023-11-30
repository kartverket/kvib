"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[6373,8469],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/slider/Slider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Slider_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/slider/Slider.stories.tsx"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/react/src/alert/Alert.tsx"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",a:"a"},(0,_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Slider_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"slider",children:"Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Her er en oversikt over Slider-komponenten, og hvordan denne bygges opp av flere andre komponenter."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__.b,{status:"warning",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_6__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"En Slider skal alltid stå sammen med en Label. Dersom det mot formodning avviker fra dette må aria-label benyttes."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import {   Slider,\n           SliderTrack,\n           SliderFilledTrack,\n           SliderThumb,\n           SliderMark\n           } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"slider-1",children:"Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Slider_stories__WEBPACK_IMPORTED_MODULE_2__.Slider}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Slider_stories__WEBPACK_IMPORTED_MODULE_2__.Slider}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sliderthumb-props",children:"SliderThumb Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["SliderThumb er bygget på Box komponenten, så alle props til Box kan benyttes i SliderThumb for å endre styling. Se ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/komponenter-layout-box--docs",children:"dokumentasjonen for Box for beskrivelse og eksempler"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sliderfilledtrack-props",children:"SliderFilledTrack Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["SliderFilledTrack er bygget på Box komponenten, så alle props til Box kan benyttes i SliderFilledTrack for å endre styling. Se ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/komponenter-layout-box--docs",children:"dokumentasjonen for Box for beskrivelse og eksempler"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"slidertrack-props",children:"SliderTrack Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["SliderTrack er bygget på Box komponenten, så alle props til Box kan benyttes i SliderTrack for å endre styling. Se ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/komponenter-layout-box--docs",children:"dokumentasjonen for Box for beskrivelse og eksempler"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"diskret-slider-med-step",children:"Diskret slider med step"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Slider_stories__WEBPACK_IMPORTED_MODULE_2__.SliderDiscrete}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"slider-med-tooltip-og-marks",children:"Slider med tooltip og marks"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Slider_stories__WEBPACK_IMPORTED_MODULE_2__.SliderTooltip,sourceState:!1}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'const SliderWithTooltip = () => {\n  const [sliderValue, setSliderValue] = React.useState(5);\n  const [showTooltip, setShowTooltip] = React.useState(false);\n  return (\n    <KvibSlider\n      id="slider"\n      aria-label="sliderWithTooltip"\n      defaultValue={5}\n      onChange={(v) => setSliderValue(v)}\n      onMouseEnter={() => setShowTooltip(true)}\n      onMouseLeave={() => setShowTooltip(false)}\n    >\n      <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">\n        25%\n      </SliderMark>\n      <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">\n        50%\n      </SliderMark>\n      <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">\n        75%\n      </SliderMark>\n      <SliderTrack>\n        <SliderFilledTrack />\n      </SliderTrack>\n      <Tooltip hasArrow placement="top" isOpen={showTooltip} label={`${sliderValue}%`}>\n        <SliderThumb />\n      </Tooltip>\n    </KvibSlider>\n  );\n};\n'})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./stories/components/slider/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Slider:()=>Slider,SliderDiscrete:()=>SliderDiscrete,SliderTooltip:()=>SliderTooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/slider/dist/chunk-6KSEUUNN.mjs"),_kvib_react_src_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/tooltip/dist/chunk-TK6VMDNP.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Slider",component:_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.iR,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The static string to use used for `aria-label` if no visible label is used.",table:{type:{summary:"string"}},control:{type:"text"}},"aria-labelledby":{description:"The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider.",table:{type:{summary:"string"}},control:{type:"text"}},"aria-valuetext":{description:"The static string to use used for `aria-valuetext`",table:{type:{summary:"string"}},control:{type:"text"}},getAriaValueText:{description:"Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",table:{type:{summary:"(value: number) => string"}},control:{type:"text"}},id:{description:"The base id to use for the slider and its components",table:{type:{summary:"string"}},control:{type:"text"}},colorScheme:{description:"Color of slider",table:{type:{summary:"green | blue| gray | red"},defaultValue:{summary:"blue"}},options:["green","blue","gray","red"],control:{type:"radio"}},size:{description:"Size of slider",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:{type:"number"}},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:{type:"number"}},isDisabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},defaultValue:{description:"The initial value of the slider in uncontrolled mode",table:{type:{summary:"number"}},control:{type:"number"}}}},Slider={args:{"aria-label":"sliderDefault",id:"slider"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.iR,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Uj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Ms,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.gs,{})]})},SliderDiscrete={args:{"aria-label":"sliderDiscrete",defaultValue:30,id:"slider",step:10},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.iR,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Uj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Ms,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.gs,{})]})},SliderWithTooltip=()=>{const[sliderValue,setSliderValue]=react__WEBPACK_IMPORTED_MODULE_0__.useState(5),[showTooltip,setShowTooltip]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.iR,{id:"slider","aria-label":"sliderWithTooltip",defaultValue:5,onChange:v=>setSliderValue(v),onMouseEnter:()=>setShowTooltip(!0),onMouseLeave:()=>setShowTooltip(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.jz,{value:25,mt:"1",ml:"-2.5",fontSize:"sm",children:"25%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.jz,{value:50,mt:"1",ml:"-2.5",fontSize:"sm",children:"50%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.jz,{value:75,mt:"1",ml:"-2.5",fontSize:"sm",children:"75%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Uj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Ms,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_tooltip__WEBPACK_IMPORTED_MODULE_3__.u,{hasArrow:!0,placement:"top",isOpen:showTooltip,label:`${sliderValue}%`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.gs,{})})]})};SliderWithTooltip.displayName="SliderWithTooltip";const SliderTooltip={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SliderWithTooltip,{})};Slider.parameters={...Slider.parameters,docs:{...Slider.parameters?.docs,source:{originalSource:'{\n  args: {\n    "aria-label": "sliderDefault",\n    id: "slider"\n  },\n  render: args => <KvibSlider {...args}>\n      <SliderTrack>\n        <SliderFilledTrack />\n      </SliderTrack>\n      <SliderThumb />\n    </KvibSlider>\n}',...Slider.parameters?.docs?.source}}},SliderDiscrete.parameters={...SliderDiscrete.parameters,docs:{...SliderDiscrete.parameters?.docs,source:{originalSource:'{\n  args: {\n    "aria-label": "sliderDiscrete",\n    defaultValue: 30,\n    id: "slider",\n    step: 10\n  },\n  render: args => <KvibSlider {...args}>\n      <SliderTrack>\n        <SliderFilledTrack />\n      </SliderTrack>\n      <SliderThumb />\n    </KvibSlider>\n}',...SliderDiscrete.parameters?.docs?.source}}},SliderTooltip.parameters={...SliderTooltip.parameters,docs:{...SliderTooltip.parameters?.docs,source:{originalSource:"{\n  render: () => <SliderWithTooltip />\n}",...SliderTooltip.parameters?.docs?.source}}},Slider.parameters={storySource:{source:'{\n  args: {\n    "aria-label": "sliderDefault",\n    id: "slider"\n  },\n  render: args => <KvibSlider {...args}>\n      <SliderTrack>\n        <SliderFilledTrack />\n      </SliderTrack>\n      <SliderThumb />\n    </KvibSlider>\n}'},...Slider.parameters},SliderDiscrete.parameters={storySource:{source:'{\n  args: {\n    "aria-label": "sliderDiscrete",\n    defaultValue: 30,\n    id: "slider",\n    step: 10\n  },\n  render: args => <KvibSlider {...args}>\n      <SliderTrack>\n        <SliderFilledTrack />\n      </SliderTrack>\n      <SliderThumb />\n    </KvibSlider>\n}'},...SliderDiscrete.parameters},SliderTooltip.parameters={storySource:{source:"{\n  render: () => <SliderWithTooltip />\n}"},...SliderTooltip.parameters};const __namedExportsOrder=["Slider","SliderDiscrete","SliderTooltip"]},"../../packages/react/src/alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Alert});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Alert=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.G)((({...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.b,{...props,ref})));try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | ("a" & As) | ("abbr" & As) | ("address" & As) | ("area" & As) | ("article" & As) | ("aside" & As) | ("audio" & As) | ... 170 more ... | undefined'}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"../../packages/react/src/alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}}}]);