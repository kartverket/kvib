"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[8843,6132],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/range-slider/RangeSlider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_RangeSlider_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/range-slider/RangeSlider.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_RangeSlider_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"range-slider",children:"Range Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"RangeSlider er en slider med to dragbare knapper som brukes til å velge område med verdier."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@kvib/react";\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_RangeSlider_stories__WEBPACK_IMPORTED_MODULE_2__.RangeSlider}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_RangeSlider_stories__WEBPACK_IMPORTED_MODULE_2__.RangeSlider}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"farger",children:"Farger"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_RangeSlider_stories__WEBPACK_IMPORTED_MODULE_2__.RangeSliderColors}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"vertikal-range-slider",children:"Vertikal Range Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_RangeSlider_stories__WEBPACK_IMPORTED_MODULE_2__.RangeSliderOrientation}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"tilpasset-range-slider",children:"Tilpasset Range Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_RangeSlider_stories__WEBPACK_IMPORTED_MODULE_2__.RangeSliderCustomizing}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"discrete-range-slider",children:"Discrete Range Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_RangeSlider_stories__WEBPACK_IMPORTED_MODULE_2__.RangeSliderDiscrete}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"få-tak-i-siste-valgte-verdi-på-slider",children:"Få tak i siste valgte verdi på slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For å få tak i siste valgte verdi fra slideren etter den har blitt oppdatert flere ganger, kan man bruke ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"onChangeEnd"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<RangeSlider aria-label={["min", "max"]} onChangeEnd={(val) => console.log(val)}>\n  <RangeSliderTrack>\n    <RangeSliderFilledTrack />\n  </RangeSliderTrack>\n  <RangeSliderThumb index={0} />\n  <RangeSliderThumb index={1} />\n</RangeSlider>\n'})})]})}}},"./stories/components/range-slider/RangeSlider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RangeSlider:()=>RangeSlider,RangeSliderColors:()=>RangeSliderColors,RangeSliderCustomizing:()=>RangeSliderCustomizing,RangeSliderDiscrete:()=>RangeSliderDiscrete,RangeSliderOrientation:()=>RangeSliderOrientation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/slider/dist/chunk-MGDSBG3R.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/react/src/icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Komponenter/Range Slider",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U2,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The static string to use used for `aria-label` if no visible label is used.",table:{type:{summary:"string[]"}},control:"array"},"aria-labelledby":{description:"The static string `aria-labelledby` that points to the ID of the element that serves as label for the slider",table:{type:{summary:"string[]"}},control:"array"},"aria-valuetext":{description:"The static string to use used for `aria-valuetext`",table:{type:{summary:"string[]"}},control:"array"},defaultValue:{description:"The initial value of the slider in uncontrolled mode",table:{type:{summary:"number[]"}},control:"array"},direction:{description:"The writing mode",table:{type:{summary:'"ltr" | "rtl"'},defaultValue:{summary:"ltr"}},options:["ltr","rtl"],control:"radio"},focusThumbOnChange:{description:"If false, the slider handle will not capture focus when value changes.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},getAriaValueText:{description:"Function that returns the `aria-valuetext` for screen readers. It is mostly used to generate a more human-readable representation of the value for assistive technologies",table:{type:{summary:"(value: number) => string"}},control:"text"},id:{description:"The base id to use for the slider and its components",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the slider will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReadOnly:{description:"If true, the slider will be in `read-only` state",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isReversed:{description:"If true, the value will be incremented or decremented in reverse.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},max:{description:"The maximum allowed value of the slider. Cannot be less than min.",table:{type:{summary:"number"},defaultValue:{summary:100}},control:"number"},min:{description:"The minimum allowed value of the slider. Cannot be greater than max.",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},minStepsBetweenThumbs:{description:"The minimum distance between slider thumbs. Useful for preventing the thumbs from being too close together.",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},name:{description:"The name attribute of the hidden input field. This is particularly useful in forms",table:{type:{summary:"string | string[]"}},control:"array"},step:{description:"The step in which increments/decrements have to be made",table:{type:{summary:"number"},defaultValue:{summary:1}},control:"number"},value:{description:"The value of the slider in controlled mode",table:{type:{summary:"number[]"}},control:"array"}}},RangeSlider={args:{defaultValue:[10,30]},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U2,{"aria-label":["min","max"],...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.ug,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.I2,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:1})]})},RangeSliderColors={args:{defaultValue:[10,40]},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_2__.K,{gap:5,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U2,{...args,"aria-label":["min","max"],colorScheme:"green",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.ug,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.I2,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:1})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U2,{...args,"aria-label":["min","max"],colorScheme:"blue",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.ug,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.I2,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:1})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U2,{...args,"aria-label":["min","max"],colorScheme:"red",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.ug,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.I2,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:1})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U2,{...args,"aria-label":["min","max"],colorScheme:"gray",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.ug,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.I2,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:1})]})]})},RangeSliderOrientation={args:{defaultValue:[20,60],colorScheme:"green",minH:"32",orientation:"vertical"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U2,{"aria-label":["min","max"],...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.ug,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.I2,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:1})]})},RangeSliderCustomizing={args:{defaultValue:[30,80]},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U2,{...args,"aria-label":["min","max"],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.ug,{bg:"red.100",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.I2,{bg:"tomato"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{boxSize:6,index:0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.J,{icon:"equalizer"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{boxSize:6,index:1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.J,{icon:"equalizer"})})]})},RangeSliderDiscrete={args:{defaultValue:[120,240],min:0,max:300,step:30},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.U2,{...args,"aria-label":["min","max"],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.ug,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.I2,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.xW,{index:1})]})};RangeSlider.parameters={...RangeSlider.parameters,docs:{...RangeSlider.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: [10, 30]\n  },\n  render: args => <KvibRangeSlider aria-label={["min", "max"]} {...args}>\n      <RangeSliderTrack>\n        <RangeSliderFilledTrack />\n      </RangeSliderTrack>\n      <RangeSliderThumb index={0} />\n      <RangeSliderThumb index={1} />\n    </KvibRangeSlider>\n}',...RangeSlider.parameters?.docs?.source}}},RangeSliderColors.parameters={...RangeSliderColors.parameters,docs:{...RangeSliderColors.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: [10, 40]\n  },\n  render: args => <KvibStack gap={5}>\n      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="green">\n        <RangeSliderTrack>\n          <RangeSliderFilledTrack />\n        </RangeSliderTrack>\n        <RangeSliderThumb index={0} />\n        <RangeSliderThumb index={1} />\n      </KvibRangeSlider>\n\n      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="blue">\n        <RangeSliderTrack>\n          <RangeSliderFilledTrack />\n        </RangeSliderTrack>\n        <RangeSliderThumb index={0} />\n        <RangeSliderThumb index={1} />\n      </KvibRangeSlider>\n\n      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="red">\n        <RangeSliderTrack>\n          <RangeSliderFilledTrack />\n        </RangeSliderTrack>\n        <RangeSliderThumb index={0} />\n        <RangeSliderThumb index={1} />\n      </KvibRangeSlider>\n\n      <KvibRangeSlider {...args} aria-label={["min", "max"]} colorScheme="gray">\n        <RangeSliderTrack>\n          <RangeSliderFilledTrack />\n        </RangeSliderTrack>\n        <RangeSliderThumb index={0} />\n        <RangeSliderThumb index={1} />\n      </KvibRangeSlider>\n    </KvibStack>\n}',...RangeSliderColors.parameters?.docs?.source}}},RangeSliderOrientation.parameters={...RangeSliderOrientation.parameters,docs:{...RangeSliderOrientation.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: [20, 60],\n    colorScheme: "green",\n    minH: "32",\n    orientation: "vertical"\n  },\n  render: args => <KvibRangeSlider aria-label={["min", "max"]} {...args}>\n      <RangeSliderTrack>\n        <RangeSliderFilledTrack />\n      </RangeSliderTrack>\n      <RangeSliderThumb index={0} />\n      <RangeSliderThumb index={1} />\n    </KvibRangeSlider>\n}',...RangeSliderOrientation.parameters?.docs?.source}}},RangeSliderCustomizing.parameters={...RangeSliderCustomizing.parameters,docs:{...RangeSliderCustomizing.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: [30, 80]\n  },\n  render: args => <KvibRangeSlider {...args} aria-label={["min", "max"]}>\n      <RangeSliderTrack bg="red.100">\n        <RangeSliderFilledTrack bg="tomato" />\n      </RangeSliderTrack>\n      <RangeSliderThumb boxSize={6} index={0}>\n        <Icon icon="equalizer" />\n      </RangeSliderThumb>\n      <RangeSliderThumb boxSize={6} index={1}>\n        <Icon icon="equalizer" />\n      </RangeSliderThumb>\n    </KvibRangeSlider>\n}',...RangeSliderCustomizing.parameters?.docs?.source}}},RangeSliderDiscrete.parameters={...RangeSliderDiscrete.parameters,docs:{...RangeSliderDiscrete.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: [120, 240],\n    min: 0,\n    max: 300,\n    step: 30\n  },\n  render: args => <KvibRangeSlider {...args} aria-label={["min", "max"]}>\n      <RangeSliderTrack>\n        <RangeSliderFilledTrack />\n      </RangeSliderTrack>\n      <RangeSliderThumb index={0} />\n      <RangeSliderThumb index={1} />\n    </KvibRangeSlider>\n}',...RangeSliderDiscrete.parameters?.docs?.source}}};const __namedExportsOrder=["RangeSlider","RangeSliderColors","RangeSliderOrientation","RangeSliderCustomizing","RangeSliderDiscrete"]},"../../packages/react/src/icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Icon=({icon,size,color,weight,grade,isFilled=!1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"material-symbols-rounded",style:{fontSize:size,color,fontVariationSettings:`'FILL' ${isFilled?1:0}, 'wght' ${weight||600}, 'GRAD' ${grade||0}`},children:icon});Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"The icon from Material symbols you want to display",name:"icon",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"The font size of the icon",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"20"},{value:"24"},{value:"40"},{value:"48"}]}},color:{defaultValue:null,description:"The color of the icon",name:"color",required:!1,type:{name:"string | undefined"}},weight:{defaultValue:null,description:"The weight of the icon",name:"weight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"100"},{value:"200"},{value:"300"},{value:"400"},{value:"500"},{value:"600"},{value:"700"}]}},grade:{defaultValue:null,description:"The of grade the icon",name:"grade",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"0"},{value:"200"},{value:"-25"}]}},isFilled:{defaultValue:{value:"false"},description:"Decides whether the icon is filled or not",name:"isFilled",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../packages/react/src/icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}}}]);