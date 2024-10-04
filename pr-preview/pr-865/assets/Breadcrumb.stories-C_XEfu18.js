import{j as r}from"./extends-CwFRzn3r.js";import{c as w}from"./index-CHDWSgKD.js";import{f as g,a as j,c as l,o as A}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{g as O}from"./index-2ZXUntH3.js";import{a as H}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{r as K}from"./index-BwDkhjyp.js";var[M,k]=w({name:"BreadcrumbStylesContext",errorMessage:`useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),c=g(function(a,m){const{isCurrentPage:e,as:s,className:o,href:n,...p}=a,u=k(),b={ref:m,as:s,className:j("chakra-breadcrumb__link",o),...p};return e?r.jsx(l.span,{"aria-current":"page",__css:u.link,...b}):r.jsx(l.a,{__css:u.link,href:n,...b})});c.displayName="BreadcrumbLink";var _=g(function(a,m){const{spacing:e,...s}=a,o=k(),n={mx:e,...o.separator};return r.jsx(l.span,{ref:m,role:"presentation",...s,__css:n})});_.displayName="BreadcrumbSeparator";var d=g(function(a,m){const{isCurrentPage:e,separator:s,isLastChild:o,spacing:n,children:p,className:u,...b}=a,v=O(p).map(t=>t.type===c?K.cloneElement(t,{isCurrentPage:e}):t.type===_?K.cloneElement(t,{spacing:n,children:t.props.children||s}):t),x={display:"inline-flex",alignItems:"center",...k().item},y=j("chakra-breadcrumb__list-item",u);return r.jsxs(l.li,{ref:m,className:y,...b,__css:x,children:[v,!o&&r.jsx(_,{spacing:n,children:s})]})});d.displayName="BreadcrumbItem";var f=g(function(a,m){const e=H("Breadcrumb",a),s=A(a),{children:o,spacing:n="0.5rem",separator:p="/",className:u,listProps:b,...S}=s,v=O(o),C=v.length,x=v.map((t,T)=>K.cloneElement(t,{separator:p,spacing:n,isLastChild:C===T+1})),y=j("chakra-breadcrumb",u);return r.jsx(l.nav,{ref:m,"aria-label":"breadcrumb",className:y,__css:e.container,...S,children:r.jsx(M,{value:e,children:r.jsx(l.ol,{className:"chakra-breadcrumb__list",...b,__css:{display:"flex",alignItems:"center",...e.list},children:x})})})});f.displayName="Breadcrumb";const D={title:"Navigasjon/Breadcrumb",component:f,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{separator:{description:"The visual separator between each breadcrumb item",table:{type:{summary:"type ONLY_FOR_FORMAT = | string | ReactElement<any, string | JSXElementConstructor<any>>"}},control:"text"},spacing:{description:"The left and right margin applied to the separator",table:{type:{summary:"string | number | boolean | (string & {}) | ResponsiveArray<string | number | (string & {})> | Partial<Record<string, string | number | (string & {})>> | ResponsiveArray<...> | Partial<...> | ((theme: Record<...>) => ResponsiveValue<...>)"}},control:"text"}}},B={args:{},render:i=>r.jsxs(f,{...i,children:[r.jsx(d,{children:r.jsx(c,{href:"#",children:"Home"})}),r.jsx(d,{children:r.jsx(c,{href:"#",children:"Docs"})}),r.jsx(d,{isCurrentPage:!0,children:r.jsx(c,{href:"#",children:"Breadcrumb"})})]})},h={args:{},render:i=>r.jsxs(f,{...i,separator:"-",children:[r.jsx(d,{children:r.jsx(c,{href:"#",children:"Home"})}),r.jsx(d,{children:r.jsx(c,{href:"#",children:"About"})}),r.jsx(d,{isCurrentPage:!0,children:r.jsx(c,{href:"#",children:"Contact"})})]})};var L,I,N;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
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
}`,...(N=(I=B.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var P,R,E;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
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
}`,...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const F=["Breadcrumb","BreadcrumbSeparator"],q=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:B,BreadcrumbSeparator:h,__namedExportsOrder:F,default:D},Symbol.toStringTag,{value:"Module"}));export{q as B,B as a,h as b};
