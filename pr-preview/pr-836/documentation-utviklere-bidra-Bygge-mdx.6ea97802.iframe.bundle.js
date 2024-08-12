"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[2452],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,ZX:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ZX,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./stories/documentation/utviklere/bidra/Bygge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/react/src/alert/Alert.tsx"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs"),_kvib_react_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/react/src/provider/KvibProvider.tsx"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",code:"code",em:"em",ul:"ul",strong:"strong",a:"a",pre:"pre"},(0,_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"For utviklere/Bidra med kode/Bygge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"bygge-komponenten-",children:"Bygge komponenten 🛠"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Under følger en beskrivelse av hvordan en komponent kan bygges.\nI de fleste tilfeller innebærer dette bare å justere på props, men i enkelte tilfeller kan det være ønskelig å bygge selve react-komponenten litt annerledes enn Chakra har gjort.\nLink-komponenten brukes som eksempel under."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["I ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"packages/react/src"}),": finn mappen med navnet på komponenten, dvs link."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["I denne mappen (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"packages/react/src/link"}),") lag én fil, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Link.tsx"})," (i tillegg til ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"index.tsx"})," som ligger der fra før).\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Link.tsx"})," skal brukes for å tilpasse komponenten med f.eks. egne props, og index.tsx brukes for å eksportere alt fra ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:".tsx"}),"-filen."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["I ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Link.tsx"}),": Begynn med å definere hvilke props som skal være gjeldende for din komponent, samt hvilke typer hver prop kan ta. Dette kan gjøres på to måter:"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Alternativ 1- bygg på Chakras props"}),": Importer Chakra sine props (her; LinkProps), og fjern unødvendige props og legg evt. til egendefinerte props.\nDu må også definere en prop fra Chakra på nytt dersom du skal endre på hvilke verdier denne propen kan ta.\nI koden under har vi fjernet chakra sin egen ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"colorScheme"}),", og heller lagt til vår egendefinerte ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"colorScheme"})," som kun tar verdiene “green” og “blue”."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{style:{color:"orange"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Tips:"})})})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.em,{children:["Når du skal bygge selve komponenten er det lurt å benytte ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://chakra-ui.com/docs/components",target:"_blank",rel:"nofollow noopener noreferrer",children:"komponent-dokumentasjonen\ntil Chakra "}),"."]})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"I de fleste tilfeller kan du kopiere eksempelkoden deres, og tilpasse/bygge\nvidere på denne."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'import {LinkProps as ChakraLinkProps} from "@chakra-ui/react";\n\nexport type LinkProps = Omit < ChakraLinkProps, "colorScheme" >\n& {\n    colorScheme: "green" | "blue";\n};\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Alternativ 2- definer egne props fra bunnen"}),": Her må man definere alle props fra bunnen av."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'export type LinkProps = {\n    colorScheme?: "green" | "blue", //denne er ikke required pga. "?"\n    href: string, //denne er required. Kommer feilmelding dersom denne ikke settes i komponenten.\n    children?: string,\n};\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.b,{status:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"required"})," props er ikke det samme som å sette default. Eksempelvis colorScheme er ikke required fordi man ønsker ikke\nat brukeren må sette colorScheme dersom hen vil ha default-verdien. Hvordan sette default-verdi kommer i senere steg\ni denne guiden."]})]}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol,{start:"4",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Videre i ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Link.tsx"})," skal du bygge opp komponenten ved å bruke propsa du definerte i steg 3. De propsene du endrer på sendes manuelt videre til Chakra-komponenten, de andre kan videresendes ved å bruke ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"“…props”"}),"- syntaksen.\nVed å tilegne props verdier settes default for komponenten, som er kjekt å gjøre dersom propen er satt som required."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.b,{status:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Under ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/for-utviklere-bidra-med-kode-style--docs",children:"“Style komponenten”"})," nevnes defaultProps som en del av .ts-filen. Default\nsom settes i selve komponenten i.tsx-filen overkjører defaultPropsa som settes i styling .ts-filen."]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol,{start:"5",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Flere av Chakra-komponentene har en litt annen variant for å kunne opprettes. Disse komponentene kan opprettes med funksjonen ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"forwardRef(props, ref)"})," fra ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chakra-ui/react"}),".\nI tillegg til å ta imot ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"props"}),", tas det også imot en ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"ref"}),", som refererer til det underliggende html-element brukt i komponenten.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"ref"})," skal sendes uendret videre til den underliggende Chakra-komponenten (se eksempelet under).\nPå denne måten kan man manipulere DOM-en direkte, for eksempel for å flytte fokus til et element (dette har ikke react innebygget støtte for).\nMer informasjon om forwardRef finner du på ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://react.dev/reference/react/forwardRef",target:"_blank",rel:"nofollow noopener noreferrer",children:"forwardRef-react"}),"\nog ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://chakra-ui.com/community/recipes/as-prop",target:"_blank",rel:"nofollow noopener noreferrer",children:"The as prop and Custom component"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'export const Link = forwardRef < LinkProps, "a">(({children, colorScheme = "green", ...props}, ref) => {\n    const isExternal = props.isExternal !== undefined ? props.isExternal : Boolean(props.href?.match(/^https?:\\/\\//));\n    return (\n        <ChakraLink {...props} ref={ref} colorScheme={colorScheme} isExternal={isExternal}>\n            {children}\n            {isExternal && (\n                <span\n                    className="material-symbols-rounded"\n                    style={{fontSize: "18px", verticalAlign: "middle", marginLeft: "4px"}}\n                    aria-label="Ekstern lenke"\n                >\n        launch\n        </span>\n            )}\n        </ChakraLink>\n    );\n});\n'})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Tilslutt; eksporter alt fra ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Link.tsx"})," i ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"index.tsx"}),", og fjern komponenten og props som blir eksportert fra Chakra i denne filen. Hvis det er flere komponenter og props i ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"index.tsx"}),"; fjern kun de du har overskrevet."]}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_6__.u,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_4__.b,{status:"warning",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_kvib_react_src__WEBPACK_IMPORTED_MODULE_5__.z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Viktig at forwardRef brukes fra chakra-ui og ikke fra react."})]})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_kvib_kvib_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../packages/react/src/alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Alert});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Alert=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.G)((({...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.b,{...props,ref})));try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As) | ("object" & As) | ("p" & As) | (ComponentClass<any, any> & As) | (FunctionComponent<any> & As) | ("a" & As) | ... 174 more ... | undefined'}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/react/src/alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"../../packages/react/src/alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}}}]);