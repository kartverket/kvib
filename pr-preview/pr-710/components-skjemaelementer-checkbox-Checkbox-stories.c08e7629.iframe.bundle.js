"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[1557],{"./stories/components/skjemaelementer/checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checkbox:()=>Checkbox,CheckboxColors:()=>CheckboxColors,CheckboxGroup:()=>CheckboxGroup,CheckboxSizes:()=>CheckboxSizes,CheckboxStates:()=>CheckboxStates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _kvib_react_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/checkbox/dist/chunk-CWVAJCXJ.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/checkbox/dist/chunk-CKJ5T3MX.mjs"),_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Skjemaelementer/Checkbox",component:_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{colorScheme:{description:"The color of the Checkbox",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},control:"radio",options:["green","blue"]},size:{description:"The size of the checkbox",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},isDisabled:{description:"If true, the checkbox will be disabled",table:{type:{summary:"true | false"},defaultValue:{summary:!1}},control:"boolean"},isInvalid:{description:"If true, the checkbox will be invalid",table:{type:{summary:"true | false"},defaultValue:{summary:!1}},control:"boolean"},iconColor:{description:"The color of the checkmark",table:{type:{summary:"css | color variable"},defaultValue:{summary:"white"}},control:"color"}}},Checkbox={args:{children:"Dette er en avmerkingsboks"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,children:args.children})},CheckboxColors={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,colorScheme:"blue",children:"Blå"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,colorScheme:"green",children:"Grønn"})]})},CheckboxSizes={args:{children:"Huk av"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,size:"sm",children:args.children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,size:"md",children:args.children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,size:"lg",children:args.children})]})},CheckboxStates={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,children:"Normal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{isDisabled:!0,children:"Disabled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{isInvalid:!0,children:"Invalid"})]})},CheckboxGroup={args:{},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src_layout__WEBPACK_IMPORTED_MODULE_2__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.x,{children:"Grønn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.c,{colorScheme:"green",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,children:"Valg 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,children:"Valg 2"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_3__.x,{children:"Blå"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.c,{colorScheme:"blue",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,children:"Valg 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_1__.X,{...args,children:"Valg 2"})]})]})};Checkbox.parameters={storySource:{source:'{\n  args: {\n    children: "Dette er en avmerkingsboks",\n  },\n  render: (args) => <KvibCheckbox {...args}>{args.children}</KvibCheckbox>,\n}'},...Checkbox.parameters},CheckboxColors.parameters={storySource:{source:'{\n  args: {},\n  render: (args) => (\n    <Stack>\n      <KvibCheckbox {...args} colorScheme="blue">\n        Blå\n      </KvibCheckbox>\n      <KvibCheckbox {...args} colorScheme="green">\n        Grønn\n      </KvibCheckbox>\n    </Stack>\n  ),\n}'},...CheckboxColors.parameters},CheckboxSizes.parameters={storySource:{source:'{\n  args: {\n    children: "Huk av",\n  },\n  render: (args) => (\n    <Stack>\n      <KvibCheckbox {...args} size="sm">\n        {args.children}\n      </KvibCheckbox>\n      <KvibCheckbox {...args} size="md">\n        {args.children}\n      </KvibCheckbox>\n      <KvibCheckbox {...args} size="lg">\n        {args.children}\n      </KvibCheckbox>\n    </Stack>\n  ),\n}'},...CheckboxSizes.parameters},CheckboxStates.parameters={storySource:{source:"{\n  args: {},\n  render: (args) => (\n    <Stack>\n      <KvibCheckbox {...args}>Normal</KvibCheckbox>\n      <KvibCheckbox isDisabled>Disabled</KvibCheckbox>\n      <KvibCheckbox isInvalid>Invalid</KvibCheckbox>\n    </Stack>\n  ),\n}"},...CheckboxStates.parameters},CheckboxGroup.parameters={storySource:{source:'{\n  args: {},\n  render: (args) => (\n    <Stack>\n      <Text>Grønn</Text>\n      <KvibCheckboxGroup colorScheme="green">\n        <KvibCheckbox {...args}>Valg 1</KvibCheckbox>\n        <KvibCheckbox {...args}>Valg 2</KvibCheckbox>\n      </KvibCheckboxGroup>\n      <Text>Blå</Text>\n      <KvibCheckboxGroup colorScheme="blue">\n        <KvibCheckbox {...args}>Valg 1</KvibCheckbox>\n        <KvibCheckbox {...args}>Valg 2</KvibCheckbox>\n      </KvibCheckboxGroup>\n    </Stack>\n  ),\n}'},...CheckboxGroup.parameters},Checkbox.parameters={...Checkbox.parameters,docs:{...Checkbox.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Dette er en avmerkingsboks"\n  },\n  render: args => <KvibCheckbox {...args}>{args.children}</KvibCheckbox>\n}',...Checkbox.parameters?.docs?.source}}},CheckboxColors.parameters={...CheckboxColors.parameters,docs:{...CheckboxColors.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <Stack>\n      <KvibCheckbox {...args} colorScheme="blue">\n        Blå\n      </KvibCheckbox>\n      <KvibCheckbox {...args} colorScheme="green">\n        Grønn\n      </KvibCheckbox>\n    </Stack>\n}',...CheckboxColors.parameters?.docs?.source}}},CheckboxSizes.parameters={...CheckboxSizes.parameters,docs:{...CheckboxSizes.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Huk av"\n  },\n  render: args => <Stack>\n      <KvibCheckbox {...args} size="sm">\n        {args.children}\n      </KvibCheckbox>\n      <KvibCheckbox {...args} size="md">\n        {args.children}\n      </KvibCheckbox>\n      <KvibCheckbox {...args} size="lg">\n        {args.children}\n      </KvibCheckbox>\n    </Stack>\n}',...CheckboxSizes.parameters?.docs?.source}}},CheckboxStates.parameters={...CheckboxStates.parameters,docs:{...CheckboxStates.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <Stack>\n      <KvibCheckbox {...args}>Normal</KvibCheckbox>\n      <KvibCheckbox isDisabled>Disabled</KvibCheckbox>\n      <KvibCheckbox isInvalid>Invalid</KvibCheckbox>\n    </Stack>\n}",...CheckboxStates.parameters?.docs?.source}}},CheckboxGroup.parameters={...CheckboxGroup.parameters,docs:{...CheckboxGroup.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <Stack>\n      <Text>Grønn</Text>\n      <KvibCheckboxGroup colorScheme="green">\n        <KvibCheckbox {...args}>Valg 1</KvibCheckbox>\n        <KvibCheckbox {...args}>Valg 2</KvibCheckbox>\n      </KvibCheckboxGroup>\n      <Text>Blå</Text>\n      <KvibCheckboxGroup colorScheme="blue">\n        <KvibCheckbox {...args}>Valg 1</KvibCheckbox>\n        <KvibCheckbox {...args}>Valg 2</KvibCheckbox>\n      </KvibCheckboxGroup>\n    </Stack>\n}',...CheckboxGroup.parameters?.docs?.source}}};const __namedExportsOrder=["Checkbox","CheckboxColors","CheckboxSizes","CheckboxStates","CheckboxGroup"]}}]);