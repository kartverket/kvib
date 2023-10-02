"use strict";(self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[]).push([[5368],{"../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./stories/components/breadcrumb/Breadcrumb.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Breadcrumb:()=>Breadcrumb_stories_Breadcrumb,BreadcrumbSeparator:()=>Breadcrumb_stories_BreadcrumbSeparator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumb_stories});var dist=__webpack_require__("../../node_modules/@chakra-ui/react-context/dist/index.mjs"),[BreadcrumbStylesProvider,useBreadcrumbStyles]=(0,dist.k)({name:"BreadcrumbStylesContext",errorMessage:"useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Breadcrumb />\" "}),shared_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("../../node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),chunk_ZJJGQIVY=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_TKWR62NH=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs"),styled_system_dist=__webpack_require__("../../node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_ZHQNHOQS=__webpack_require__("../../node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Breadcrumb=(0,chunk_ZJJGQIVY.G)((function Breadcrumb2(props,ref){const styles=(0,chunk_TKWR62NH.jC)("Breadcrumb",props),ownProps=(0,styled_system_dist.Lr)(props),{children,spacing="0.5rem",separator="/",className,listProps,...rest}=ownProps,validChildren=(0,react_children_utils_dist.W)(children),count=validChildren.length,clones=validChildren.map(((child,index)=>(0,react.cloneElement)(child,{separator,spacing,isLastChild:count===index+1}))),_className=(0,shared_utils_dist.cx)("chakra-breadcrumb",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.nav,{ref,"aria-label":"breadcrumb",className:_className,__css:styles.container,...rest,children:(0,jsx_runtime.jsx)(BreadcrumbStylesProvider,{value:styles,children:(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.ol,{className:"chakra-breadcrumb__list",...listProps,__css:{display:"flex",alignItems:"center",...styles.list},children:clones})})})}));Breadcrumb.displayName="Breadcrumb";var BreadcrumbLink=(0,chunk_ZJJGQIVY.G)((function BreadcrumbLink2(props,ref){const{isCurrentPage,as,className,href,...rest}=props,styles=useBreadcrumbStyles(),sharedProps={ref,as,className:(0,shared_utils_dist.cx)("chakra-breadcrumb__link",className),...rest};return isCurrentPage?(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{"aria-current":"page",__css:styles.link,...sharedProps}):(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.a,{__css:styles.link,href,...sharedProps})}));BreadcrumbLink.displayName="BreadcrumbLink";var BreadcrumbSeparator=(0,chunk_ZJJGQIVY.G)((function BreadcrumbSeparator2(props,ref){const{spacing,...rest}=props,separatorStyles={mx:spacing,...useBreadcrumbStyles().separator};return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.m.span,{ref,role:"presentation",...rest,__css:separatorStyles})}));BreadcrumbSeparator.displayName="BreadcrumbSeparator";var BreadcrumbItem=(0,chunk_ZJJGQIVY.G)((function BreadcrumbItem2(props,ref){const{isCurrentPage,separator,isLastChild,spacing,children,className,...rest}=props,clones=(0,react_children_utils_dist.W)(children).map((child=>child.type===BreadcrumbLink?(0,react.cloneElement)(child,{isCurrentPage}):child.type===BreadcrumbSeparator?(0,react.cloneElement)(child,{spacing,children:child.props.children||separator}):child)),itemStyles={display:"inline-flex",alignItems:"center",...useBreadcrumbStyles().item},_className=(0,shared_utils_dist.cx)("chakra-breadcrumb__list-item",className);return(0,jsx_runtime.jsxs)(chunk_ZHQNHOQS.m.li,{ref,className:_className,...rest,__css:itemStyles,children:[clones,!isLastChild&&(0,jsx_runtime.jsx)(BreadcrumbSeparator,{spacing,children:separator})]})}));BreadcrumbItem.displayName="BreadcrumbItem";const Breadcrumb_stories={title:"Komponenter/Breadcrumb",component:Breadcrumb,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{separator:{description:"The visual separator between each breadcrumb item",table:{type:{summary:"type ONLY_FOR_FORMAT = | string | ReactElement<any, string | JSXElementConstructor<any>>"}},control:"text"},spacing:{description:"The left and right margin applied to the separator",table:{type:{summary:"string | number | boolean | (string & {}) | ResponsiveArray<string | number | (string & {})> | Partial<Record<string, string | number | (string & {})>> | ResponsiveArray<...> | Partial<...> | ((theme: Record<...>) => ResponsiveValue<...>)"}},control:"text"}}},Breadcrumb_stories_Breadcrumb={args:{},render:args=>(0,jsx_runtime.jsxs)(Breadcrumb,{...args,children:[(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"#",children:"Home"})}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"#",children:"Docs"})}),(0,jsx_runtime.jsx)(BreadcrumbItem,{isCurrentPage:!0,children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"#",children:"Breadcrumb"})})]})},Breadcrumb_stories_BreadcrumbSeparator={args:{},render:args=>(0,jsx_runtime.jsxs)(Breadcrumb,{...args,separator:"-",children:[(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"#",children:"Home"})}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"#",children:"About"})}),(0,jsx_runtime.jsx)(BreadcrumbItem,{isCurrentPage:!0,children:(0,jsx_runtime.jsx)(BreadcrumbLink,{href:"#",children:"Contact"})})]})};Breadcrumb_stories_Breadcrumb.parameters={...Breadcrumb_stories_Breadcrumb.parameters,docs:{...Breadcrumb_stories_Breadcrumb.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibBreadcrumb {...args}>\n      <KvibBreadcrumbItem>\n        <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>\n      </KvibBreadcrumbItem>\n\n      <KvibBreadcrumbItem>\n        <KvibBreadcrumbLink href="#">Docs</KvibBreadcrumbLink>\n      </KvibBreadcrumbItem>\n\n      <KvibBreadcrumbItem isCurrentPage>\n        <KvibBreadcrumbLink href="#">Breadcrumb</KvibBreadcrumbLink>\n      </KvibBreadcrumbItem>\n    </KvibBreadcrumb>\n}',...Breadcrumb_stories_Breadcrumb.parameters?.docs?.source}}},Breadcrumb_stories_BreadcrumbSeparator.parameters={...Breadcrumb_stories_BreadcrumbSeparator.parameters,docs:{...Breadcrumb_stories_BreadcrumbSeparator.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: args => <KvibBreadcrumb {...args} separator="-">\n      <KvibBreadcrumbItem>\n        <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>\n      </KvibBreadcrumbItem>\n\n      <KvibBreadcrumbItem>\n        <KvibBreadcrumbLink href="#">About</KvibBreadcrumbLink>\n      </KvibBreadcrumbItem>\n\n      <KvibBreadcrumbItem isCurrentPage>\n        <KvibBreadcrumbLink href="#">Contact</KvibBreadcrumbLink>\n      </KvibBreadcrumbItem>\n    </KvibBreadcrumb>\n}',...Breadcrumb_stories_BreadcrumbSeparator.parameters?.docs?.source}}};const __namedExportsOrder=["Breadcrumb","BreadcrumbSeparator"]}}]);