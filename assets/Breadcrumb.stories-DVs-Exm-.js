import{j as r}from"./extends-CwFRzn3r.js";import{r as _}from"./index-BwDkhjyp.js";import{c as A}from"./context-CBKykClo.js";import{f}from"./forward-ref-BWI-Phbn.js";import{a as H,o as M}from"./use-style-config-YUvqttAg.js";import{c as b}from"./factory-C6UFhaBW.js";import{g as w}from"./children-2ZXUntH3.js";import{c as k}from"./cx-BDMMs1jM.js";import{d as O}from"./define-styles-BSAHv3yx.js";const[D,S]=A({name:"BreadcrumbStylesContext",errorMessage:`useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),g=f(function(a,o){const e=H("Breadcrumb",a),s=M(a),{children:m,spacing:n="0.5rem",separator:p="/",className:u,listProps:l,...C}=s,v=w(m),x=v.length,y=v.map((t,T)=>_.cloneElement(t,{separator:p,spacing:n,isLastChild:x===T+1})),K=k("chakra-breadcrumb",u);return r.jsx(b.nav,{ref:o,"aria-label":"breadcrumb",className:K,__css:e.container,...C,children:r.jsx(D,{value:e,children:r.jsx(b.ol,{className:"chakra-breadcrumb__list",...l,__css:{display:"flex",alignItems:"center",...e.list},children:y})})})});g.displayName="Breadcrumb";const c=f(function(a,o){const{isCurrentPage:e,as:s,className:m,href:n,...p}=a,u=S(),l={ref:o,as:s,className:k("chakra-breadcrumb__link",m),...p};return e?r.jsx(b.span,{"aria-current":"page",__css:u.link,...l}):r.jsx(b.a,{__css:u.link,href:n,...l})});c.displayName="BreadcrumbLink";const j=f(function(a,o){const{spacing:e,...s}=a,m=S(),n=O({mx:e,...m.separator});return r.jsx(b.span,{ref:o,role:"presentation",...s,__css:n})});j.displayName="BreadcrumbSeparator";const d=f(function(a,o){const{isCurrentPage:e,separator:s,isLastChild:m,spacing:n,children:p,className:u,...l}=a,v=w(p).map(t=>t.type===c?_.cloneElement(t,{isCurrentPage:e}):t.type===j?_.cloneElement(t,{spacing:n,children:t.props.children||s}):t),x=S(),y=O({display:"inline-flex",alignItems:"center",...x.item}),K=k("chakra-breadcrumb__list-item",u);return r.jsxs(b.li,{ref:o,className:K,...l,__css:y,children:[v,!m&&r.jsx(j,{spacing:n,children:s})]})});d.displayName="BreadcrumbItem";const F={title:"Navigasjon/Breadcrumb",component:g,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{separator:{description:"The visual separator between each breadcrumb item",table:{type:{summary:"type ONLY_FOR_FORMAT = | string | ReactElement<any, string | JSXElementConstructor<any>>"}},control:"text"},spacing:{description:"The left and right margin applied to the separator",table:{type:{summary:"string | number | boolean | (string & {}) | ResponsiveArray<string | number | (string & {})> | Partial<Record<string, string | number | (string & {})>> | ResponsiveArray<...> | Partial<...> | ((theme: Record<...>) => ResponsiveValue<...>)"}},control:"text"}}},h={render:i=>r.jsxs(g,{...i,children:[r.jsx(d,{children:r.jsx(c,{href:"#",children:"Home"})}),r.jsx(d,{children:r.jsx(c,{href:"#",children:"Docs"})}),r.jsx(d,{isCurrentPage:!0,children:r.jsx(c,{href:"#",children:"Breadcrumb"})})]})},B={render:i=>r.jsxs(g,{...i,separator:"-",children:[r.jsx(d,{children:r.jsx(c,{href:"#",children:"Home"})}),r.jsx(d,{children:r.jsx(c,{href:"#",children:"About"})}),r.jsx(d,{isCurrentPage:!0,children:r.jsx(c,{href:"#",children:"Contact"})})]})};var L,I,P;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <KvibBreadcrumb {...args}>
      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">Docs</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem isCurrentPage>
        <KvibBreadcrumbLink href="#">Breadcrumb</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>
    </KvibBreadcrumb>
}`,...(P=(I=h.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var N,R,E;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <KvibBreadcrumb {...args} separator="-">
      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">About</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem isCurrentPage>
        <KvibBreadcrumbLink href="#">Contact</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>
    </KvibBreadcrumb>
}`,...(E=(R=B.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const V=["Preview","BreadcrumbSeparator"],W=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbSeparator:B,Preview:h,__namedExportsOrder:V,default:F},Symbol.toStringTag,{value:"Module"}));export{W as B,h as P,B as a};
