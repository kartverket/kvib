"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[5579],{"../../node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>CardBody});var _chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),CardBody=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function CardBody2(props,ref){const{className,...rest}=props,styles=(0,_chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_2__.v)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-card__body",className),__css:styles.body,...rest})}))},"../../node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CardStylesProvider,v:()=>useCardStyles});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-MFVQSVQB.mjs"),[CardStylesProvider,useCardStyles]=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.eC)("Card")},"../../node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var _chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Card=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Card2(props,ref){const{className,children,direction="column",justify,align,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.Lr)(props),styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.jC)("Card",props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.m.div,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-card",className),__css:{display:"flex",flexDirection:direction,justifyContent:justify,alignItems:align,position:"relative",minWidth:0,wordWrap:"break-word",...styles.container},...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_HAZMUPV3_mjs__WEBPACK_IMPORTED_MODULE_6__.Y,{value:styles,children})})}))},"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/components/overlay/modal/Modal.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Modal});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Modal_stories=__webpack_require__("./stories/components/overlay/modal/Modal.stories.tsx"),Card=__webpack_require__("../../packages/react/src/card/Card.tsx"),chunk_FHHZMTWR=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs");const ModalString='const ModalExample = ({ ...args }) => {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  return (\n    <>\n      <Button onClick={onOpen}>Åpne Modal</Button>\n\n      <Modal isOpen={isOpen} onClose={onClose}>\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>Historiske kart</ModalHeader>\n          <ModalCloseButton />\n          <ModalBody>\n            Vil du ha eit gammalt kart på hytteveggen? Historiske kart kan lastast ned og skrivast ut gratis. Ta ein\n            kikk i vårt arkiv!\n          </ModalBody>\n\n          <ModalFooter>\n            <Button colorScheme="blue" mr={3} onClick={onClose}>\n              Lukk\n            </Button>\n            <Button>Ta en kikk</Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n};',ModalScrollingString='const ModalScrollingExample = ({ ...args }) => {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onOpen}>Åpne modal</Button>\n\n      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>Modal tittel</ModalHeader>\n          <ModalCloseButton />\n          <ModalBody>\n            <Text fontWeight="bold" mb="1rem">\n              Du kan scrolle i innholdet bak modalen\n            </Text>\n          </ModalBody>\n          <ModalFooter>\n            <Button colorScheme="blue" mr={3} onClick={onClose}>\n              Lukk\n            </Button>\n            <Button variant="ghost">Annen handling</Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n};',ModalFocusString='const ModalFocusExample = ({ ...args }) => {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n\n  const initialRef = useRef(null);\n  const finalRef = useRef(null);\n\n  return (\n    <>\n      <Button onClick={onOpen}>Åpne modal</Button>\n      <Button ml={4} ref={finalRef}>\n        Jeg får fokus på close\n      </Button>\n\n      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>Lag konto</ModalHeader>\n          <ModalCloseButton />\n          <ModalBody pb={6}>\n            <FormControl>\n              <FormLabel>Fornavn</FormLabel>\n              <Input ref={initialRef} placeholder="Fornavn" />\n            </FormControl>\n\n            <FormControl>\n              <FormLabel>Etternavn</FormLabel>\n              <Input placeholder="Etternavn" />\n            </FormControl>\n          </ModalBody>\n\n          <ModalFooter>\n            <Button colorScheme="blue" mr={3}>\n              Lagre\n            </Button>\n            <Button onClick={onClose}>Avbryt</Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n};',ModalCenteredString='const ModalCenteredExample = ({ ...args }) => {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onOpen}>Åpne modal</Button>\n\n      <Modal onClose={onClose} isOpen={isOpen} isCentered>\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>Modal Sentrering</ModalHeader>\n          <ModalCloseButton />\n          <ModalBody>\n            Modalen har 3.75rem vertical offset. Den kan endres ved å legge "top" til ModalContent. Hvis du skal\n            sentrere vertikalt legger du isCentered i Modal.\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={onClose}>Lukk</Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n};',ModalTransitionString='const ModalTransitionExample = ({ ...args }) => {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  return (\n    <>\n      <Button onClick={onOpen}>Åpne modal</Button>\n      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>Modal Transition</ModalHeader>\n          <ModalCloseButton />\n          <ModalBody>\n            Modal kommer med scale transition, men du kan endre den med motionPreset-propen. Sett verdien til\n            "slideInBottom", "slideInRight", "scale" eller "none".\n          </ModalBody>\n          <ModalFooter>\n            <Button colorScheme="blue" mr={3} onClick={onClose}>\n              Lukk\n            </Button>\n            <Button variant="ghost">Annen handling</Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n};',ModalSizesString='const ModalSizeExample = ({ ...args }) => {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  const [size, setSize] = useState("md");\n\n  const handleSizeClick = (newSize: SetStateAction<string>) => {\n    setSize(newSize);\n    onOpen();\n  };\n\n  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];\n\n  return (\n    <>\n      {sizes.map((size) => (\n        <Button onClick={() => handleSizeClick(size)} key={size} m={4}>{`Åpne ${size} Modal`}</Button>\n      ))}\n\n      <Modal onClose={onClose} size={size} isOpen={isOpen}>\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>Modal Størrelser</ModalHeader>\n          <ModalCloseButton />\n          <ModalBody>\n            Bruk size-proppen hvis du vil endre størrelse. Verdiene du kan velge mellom er xs, sm, md, lg, xl, eller\n            full.\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={onClose}>Lukk</Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n};',ModalBackdropString='const ModalBackdropExample = ({ ...args }) => {\n  const OverlayOne = () => <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />;\n\n  const OverlayTwo = () => <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;\n\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  const [overlay, setOverlay] = useState(<OverlayOne />);\n\n  return (\n    <>\n      <Button\n        onClick={() => {\n          setOverlay(<OverlayOne />);\n          onOpen();\n        }}\n      >\n        Bruk overlay 1\n      </Button>\n      <Button\n        ml="4"\n        onClick={() => {\n          setOverlay(<OverlayTwo />);\n          onOpen();\n        }}\n      >\n        Bruk overlay 2\n      </Button>\n      <Modal isCentered isOpen={isOpen} onClose={onClose}>\n        {overlay}\n        <ModalContent>\n          <ModalHeader>Bakteppe</ModalHeader>\n          <ModalCloseButton />\n          <ModalBody>\n            <Text>Egendefinerte baktepper!</Text>\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={onClose}>Lukk</Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n};';function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Modal_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"En modal er en dialog som fokuserer brukerens oppmerksomhet på informasjonen i vinduet."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@kvib/react";\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Modal_stories.Modal})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ModalString,dark:!0}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{of:Modal_stories.Modal}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"block-scrolling",children:"Block scrolling"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Modal_stories.ModalScrolling})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ModalScrollingString,dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"fokus",children:"Fokus"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Modal_stories.ModalFocus})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ModalFocusString,dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"sentrering",children:"Sentrering"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Modal_stories.ModalCentered})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ModalCenteredString,dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"transition",children:"Transition"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Modal_stories.ModalTransition})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ModalTransitionString,dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"størrelser",children:"Størrelser"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Modal_stories.ModalSizes})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ModalSizesString,dark:!0}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"bakteppe",children:"Bakteppe"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"outline",borderRadius:"0",children:(0,jsx_runtime.jsx)(chunk_FHHZMTWR.e,{children:(0,jsx_runtime.jsx)(dist.oG,{of:Modal_stories.ModalBackdrop})})}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ModalBackdropString,dark:!0})]})}const Modal=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../packages/react/src/card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Card=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.G)((({...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z,{...props,ref})));try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | (ComponentClass<any, any> & As) | (FunctionComponent<any> & As) | ("search" & As) | ... 175 more ... | undefined'}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}},direction:{defaultValue:null,description:"The flex direction of the card",name:"direction",required:!1,type:{name:"ResponsiveValue<FlexDirection> | undefined"}},align:{defaultValue:null,description:"The flex alignment of the card",name:"align",required:!1,type:{name:"ResponsiveValue<AlignItems> | undefined"}},justify:{defaultValue:null,description:"The flex distribution of the card",name:"justify",required:!1,type:{name:"ResponsiveValue<JustifyContent> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"../../packages/react/src/card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}}}]);