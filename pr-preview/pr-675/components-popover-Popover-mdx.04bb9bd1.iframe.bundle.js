"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[670],{"../../node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>CardBody});var _chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),CardBody=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function CardBody2(props,ref){const{className,...rest}=props,styles=(0,_chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_2__.v)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-card__body",className),__css:styles.body,...rest})}))},"../../node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CardStylesProvider,v:()=>useCardStyles});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-MFVQSVQB.mjs"),[CardStylesProvider,useCardStyles]=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.eC)("Card")},"../../node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var _chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Card=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Card2(props,ref){const{className,children,direction="column",justify,align,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.Lr)(props),styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("Card",props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-card",className),__css:{display:"flex",flexDirection:direction,justifyContent:justify,alignItems:align,position:"relative",minWidth:0,wordWrap:"break-word",...styles.container},...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_6__.Y,{value:styles,children})})}))},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/popover/Popover.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Popover});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Popover_stories=__webpack_require__("./stories/components/popover/Popover.stories.tsx"),Card=__webpack_require__("../../packages/react/src/card/Card.tsx"),chunk_FHHZMTWR=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs");const PopoverFocusString='const PopoverFocusExample = ({ ...args }) => {\n  const initialFocusRef = useRef(null);\n  return (\n    <Popover initialFocusRef={initialFocusRef} placement="bottom" closeOnBlur={false}>\n      <PopoverTrigger>\n        <Button>Trykk</Button>\n      </PopoverTrigger>\n      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">\n        <PopoverHeader pt={4} fontWeight="bold" border="0">\n          Hjelp med oppsett\n        </PopoverHeader>\n        <PopoverArrow bg="blue.800" />\n        <PopoverCloseButton />\n        <PopoverBody>Det er lurt å sette opp emailbekreftelse for å få bekreftelse på ordren din.</PopoverBody>\n        <PopoverFooter border="0" display="flex" alignItems="center" justifyContent="space-between" pb={4}>\n          <Box fontSize="sm">Steg 2 av 4</Box>\n          <ButtonGroup size="sm">\n            <Button colorScheme="green">Legg til Email</Button>\n            <Button colorScheme="blue" ref={initialFocusRef}>\n              Neste\n            </Button>\n          </ButtonGroup>\n        </PopoverFooter>\n      </PopoverContent>\n    </Popover>\n  );\n};',PopoverTrappingFocusString='type TextInputProps = {\n  label: string;\n  id: string;\n  [x: string]: any;\n};\n\nconst TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {\n  const { id, label, ...restProps } = props;\n  return (\n    <FormControl>\n      <FormLabel htmlFor={id}>{label}</FormLabel>\n      <Input ref={ref} id={id} {...restProps} />\n    </FormControl>\n  );\n});\n\ntype FormProps = {\n  firstFieldRef: Ref<HTMLInputElement>;\n  onCancel: () => void;\n};\n\nconst Form: FC<FormProps> = ({ firstFieldRef, onCancel }) => {\n  return (\n    <Stack spacing={4}>\n      <TextInput label="Fornavn" id="first-name" ref={firstFieldRef} defaultValue="Ola" />\n      <TextInput label="Etternavn" id="last-name" defaultValue="Nordmann" />\n      <ButtonGroup display="flex" justifyContent="flex-end">\n        <Button variant="outline" onClick={onCancel}>\n          Avbryt\n        </Button>\n        <Button isDisabled colorScheme="green">\n          Lagre\n        </Button>\n      </ButtonGroup>\n    </Stack>\n  );\n};\n\nconst PopoverForm = ({ ...args }) => {\n  const { onOpen, onClose, isOpen } = useDisclosure();\n  const firstFieldRef = useRef<HTMLInputElement>(null);\n  return (\n    <>\n      <Box display="inline-block" mr={3}>\n        Ola Nordmann\n      </Box>\n      <Popover\n        isOpen={isOpen}\n        initialFocusRef={firstFieldRef}\n        onOpen={onOpen}\n        onClose={onClose}\n        placement="right"\n        closeOnBlur={false}\n      >\n        <PopoverTrigger>\n          <IconButton size="sm" icon={"edit"} aria-label={"edit"} colorScheme="gray" />\n        </PopoverTrigger>\n        <PopoverContent p={5}>\n          <FocusLock returnFocus persistentFocus={false}>\n            <PopoverArrow />\n            <PopoverCloseButton />\n            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />\n          </FocusLock>\n        </PopoverContent>\n      </Popover>\n    </>\n  );\n};',PopoverControlledString='const ControlledUsage = ({ ...args }) => {\n  const { isOpen, onToggle, onClose } = useDisclosure();\n\n  return (\n    <>\n      <Button mr={5} onClick={onToggle}>\n        Trigger\n      </Button>\n      <Popover\n        returnFocusOnClose={false}\n        isOpen={isOpen}\n        onClose={onClose}\n        placement="right"\n        closeOnBlur={false}\n      >\n        <PopoverTrigger>\n          <Button colorScheme="red">Popover</Button>\n        </PopoverTrigger>\n        <PopoverContent>\n          <PopoverHeader fontWeight="semibold">Bekreftelse</PopoverHeader>\n          <PopoverArrow />\n          <PopoverCloseButton />\n          <PopoverBody>Er du sikker på at du vil fortsette?</PopoverBody>\n          <PopoverFooter display="flex" justifyContent="flex-end">\n            <ButtonGroup size="sm">\n              <Button variant="outline">Avbryt</Button>\n              <Button colorScheme="red">Godkjenn</Button>\n            </ButtonGroup>\n          </PopoverFooter>\n        </PopoverContent>\n      </Popover>\n    </>\n  );\n};',PopoverAnchorString='const WithPopoverAnchor = ({ ...args }) => {\n  const [isEditing, setIsEditing] = useBoolean();\n  const [color, setColor] = useState("red");\n  return (\n    <Popover\n      isOpen={isEditing}\n      onOpen={setIsEditing.on}\n      onClose={setIsEditing.off}\n      closeOnBlur={false}\n      isLazy\n      lazyBehavior="keepMounted"\n    >\n      <FormLabel htmlFor="anchor text">Prøv å redigere teksten</FormLabel>\n      <HStack>\n        <PopoverAnchor>\n          <Input\n            id="anchor text"\n            color={color}\n            w="auto"\n            display="inline-flex"\n            isDisabled={!isEditing}\n            defaultValue="Popover Anchor"\n          />\n        </PopoverAnchor>\n\n        <PopoverTrigger>\n          <Button h="40px" colorScheme="blue">\n            {isEditing ? "Lagre" : "Rediger"}\n          </Button>\n        </PopoverTrigger>\n      </HStack>\n\n      <PopoverContent>\n        <PopoverBody>\n          Farger:\n          <RadioGroup value={color} onChange={(newColor) => setColor(newColor)}>\n            <Stack direction="row">\n              <Radio value="red">rød</Radio>\n              <Radio value="blue">blå</Radio>\n              <Radio value="green">grønn</Radio>\n              <Radio value="purple">lilla</Radio>\n            </Stack>\n          </RadioGroup>\n        </PopoverBody>\n      </PopoverContent>\n    </Popover>\n  );\n};';function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Popover_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"popover",children:"Popover"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Popover er en dialog som flyter rundt en trigger."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import {\n  Popover,\n  PopoverTrigger,\n  PopoverContent,\n  PopoverHeader,\n  PopoverBody,\n  PopoverFooter,\n  PopoverArrow,\n  PopoverCloseButton,\n  PopoverAnchor,\n} from "@kvib/react";\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Popover_stories.Popover}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{of:Popover_stories.Popover}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"fokus-på-element-når-popover-åpnes",children:"Fokus på element når Popover åpnes"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Popover_stories.PopoverFocus})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:PopoverFocusString,dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"fange-fokus-i-popover",children:"Fange fokus i Popover"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:['Hvis Popover har en form, vil du kanskje fange fokus inne i Popoveren og lukke den når brukeren er ferdig og trykker på "Lagre".\nBruk ',(0,jsx_runtime.jsx)(_components.code,{children:"react-focus-lock"})," for å fange fokus inne i ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoveContent"})]}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Popover_stories.PopoverTrappingFocus})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:PopoverTrappingFocusString,dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"kontrollert-bruk",children:"Kontrollert bruk"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Popover_stories.PopoverControlled})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:PopoverControlledString,dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"popover-anchor",children:"Popover Anchor"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Popover_stories.PopoverAnchorExample})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:PopoverAnchorString,dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tilpasse-stil",children:"Tilpasse stil"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Popover_stories.PopoverCustomizing})]})}const Popover=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../packages/react/src/card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Card=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.G)((({...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z,{...props,ref})));try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | (ComponentClass<any, any> & As) | (FunctionComponent<any> & As) | ("a" & As) | ("abbr" & As) | ... 173 more ... | undefined'}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}},direction:{defaultValue:null,description:"The flex direction of the card",name:"direction",required:!1,type:{name:"ResponsiveValue<FlexDirection> | undefined"}},align:{defaultValue:null,description:"The flex alignment of the card",name:"align",required:!1,type:{name:"ResponsiveValue<AlignItems> | undefined"}},justify:{defaultValue:null,description:"The flex distribution of the card",name:"justify",required:!1,type:{name:"ResponsiveValue<JustifyContent> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"../../packages/react/src/card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}}}]);