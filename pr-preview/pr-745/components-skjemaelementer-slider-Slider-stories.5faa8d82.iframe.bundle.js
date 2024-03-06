"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[4853,1799],{"../../node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lq:()=>mergeRefs,qq:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function mergeRefs(...refs){return node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if("function"!=typeof ref)try{ref.current=value}catch(error){throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)}else ref(value)}(ref,node)}))}}function useMergeRefs(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>mergeRefs(...refs)),refs)}},"./stories/components/skjemaelementer/slider/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Slider:()=>Slider,SliderDiscrete:()=>SliderDiscrete,SliderTooltip:()=>SliderTooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/slider/dist/chunk-6KSEUUNN.mjs"),_kvib_react_src_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/tooltip/dist/chunk-TK6VMDNP.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Skjemaelementer/Slider",component:_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.iR,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The static string to use used for `aria-label` if no visible label is used.",table:{type:{summary:"string"}},control:{type:"text"}},"aria-labelledby":{description:"The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider.",table:{type:{summary:"string"}},control:{type:"text"}},"aria-valuetext":{description:"The static string to use used for `aria-valuetext`",table:{type:{summary:"string"}},control:{type:"text"}},getAriaValueText:{description:"Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",table:{type:{summary:"(value: number) => string"}},control:{type:"text"}},id:{description:"The base id to use for the slider and its components",table:{type:{summary:"string"}},control:{type:"text"}},colorScheme:{description:"Color of slider",table:{type:{summary:"green | blue| gray | red"},defaultValue:{summary:"blue"}},options:["green","blue","gray","red"],control:{type:"radio"}},size:{description:"Size of slider",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:{type:"number"}},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:{type:"number"}},isDisabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},defaultValue:{description:"The initial value of the slider in uncontrolled mode",table:{type:{summary:"number"}},control:{type:"number"}}}},Slider={args:{"aria-label":"sliderDefault",id:"slider"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.iR,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Uj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Ms,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.gs,{})]})},SliderDiscrete={args:{"aria-label":"sliderDiscrete",defaultValue:30,id:"slider",step:10},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.iR,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Uj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Ms,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.gs,{})]})},SliderWithTooltip=()=>{const[sliderValue,setSliderValue]=react__WEBPACK_IMPORTED_MODULE_0__.useState(5),[showTooltip,setShowTooltip]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.iR,{id:"slider","aria-label":"sliderWithTooltip",defaultValue:5,onChange:v=>setSliderValue(v),onMouseEnter:()=>setShowTooltip(!0),onMouseLeave:()=>setShowTooltip(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.jz,{value:25,mt:"1",ml:"-2.5",fontSize:"sm",children:"25%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.jz,{value:50,mt:"1",ml:"-2.5",fontSize:"sm",children:"50%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.jz,{value:75,mt:"1",ml:"-2.5",fontSize:"sm",children:"75%"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Uj,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.Ms,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_tooltip__WEBPACK_IMPORTED_MODULE_3__.u,{hasArrow:!0,placement:"top",isOpen:showTooltip,label:`${sliderValue}%`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src_slider__WEBPACK_IMPORTED_MODULE_2__.gs,{})})]})};SliderWithTooltip.displayName="SliderWithTooltip";const SliderTooltip={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SliderWithTooltip,{})};Slider.parameters={storySource:{source:'{\n  args: {\n    "aria-label": "sliderDefault",\n    id: "slider",\n  },\n  render: (args) => (\n    <KvibSlider {...args}>\n      <SliderTrack>\n        <SliderFilledTrack />\n      </SliderTrack>\n      <SliderThumb />\n    </KvibSlider>\n  ),\n}'},...Slider.parameters},SliderDiscrete.parameters={storySource:{source:'{\n  args: {\n    "aria-label": "sliderDiscrete",\n    defaultValue: 30,\n    id: "slider",\n    step: 10,\n  },\n  render: (args) => (\n    <KvibSlider {...args}>\n      <SliderTrack>\n        <SliderFilledTrack />\n      </SliderTrack>\n      <SliderThumb />\n    </KvibSlider>\n  ),\n}'},...SliderDiscrete.parameters},SliderTooltip.parameters={storySource:{source:"{\n  render: () => <SliderWithTooltip />,\n}"},...SliderTooltip.parameters},Slider.parameters={...Slider.parameters,docs:{...Slider.parameters?.docs,source:{originalSource:'{\n  args: {\n    "aria-label": "sliderDefault",\n    id: "slider"\n  },\n  render: args => <KvibSlider {...args}>\n      <SliderTrack>\n        <SliderFilledTrack />\n      </SliderTrack>\n      <SliderThumb />\n    </KvibSlider>\n}',...Slider.parameters?.docs?.source}}},SliderDiscrete.parameters={...SliderDiscrete.parameters,docs:{...SliderDiscrete.parameters?.docs,source:{originalSource:'{\n  args: {\n    "aria-label": "sliderDiscrete",\n    defaultValue: 30,\n    id: "slider",\n    step: 10\n  },\n  render: args => <KvibSlider {...args}>\n      <SliderTrack>\n        <SliderFilledTrack />\n      </SliderTrack>\n      <SliderThumb />\n    </KvibSlider>\n}',...SliderDiscrete.parameters?.docs?.source}}},SliderTooltip.parameters={...SliderTooltip.parameters,docs:{...SliderTooltip.parameters?.docs,source:{originalSource:"{\n  render: () => <SliderWithTooltip />\n}",...SliderTooltip.parameters?.docs?.source}}};const __namedExportsOrder=["Slider","SliderDiscrete","SliderTooltip"]}}]);