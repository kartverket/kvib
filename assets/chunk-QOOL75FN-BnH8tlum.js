import{f as p,a as B,c as m,o as S}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{j as n}from"./extends-CwFRzn3r.js";import{g as k}from"./index-2ZXUntH3.js";import{r as h}from"./index-BwDkhjyp.js";import{c as j}from"./index-CHDWSgKD.js";import{a as P}from"./chunk-DMO4EI7P-D6u3hnqn.js";var[E,x]=j({name:"BreadcrumbStylesContext",errorMessage:`useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),v=p(function(e,c){const{isCurrentPage:r,as:s,className:o,href:a,...d}=e,i=x(),l={ref:c,as:s,className:B("chakra-breadcrumb__link",o),...d};return r?n.jsx(m.span,{"aria-current":"page",__css:i.link,...l}):n.jsx(m.a,{__css:i.link,href:a,...l})});v.displayName="BreadcrumbLink";var _=p(function(e,c){const{spacing:r,...s}=e,o=x(),a={mx:r,...o.separator};return n.jsx(m.span,{ref:c,role:"presentation",...s,__css:a})});_.displayName="BreadcrumbSeparator";var I=p(function(e,c){const{isCurrentPage:r,separator:s,isLastChild:o,spacing:a,children:d,className:i,...l}=e,u=k(d).map(t=>t.type===v?h.cloneElement(t,{isCurrentPage:r}):t.type===_?h.cloneElement(t,{spacing:a,children:t.props.children||s}):t),f={display:"inline-flex",alignItems:"center",...x().item},y=B("chakra-breadcrumb__list-item",i);return n.jsxs(m.li,{ref:c,className:y,...l,__css:f,children:[u,!o&&n.jsx(_,{spacing:a,children:s})]})});I.displayName="BreadcrumbItem";var L=p(function(e,c){const r=P("Breadcrumb",e),s=S(e),{children:o,spacing:a="0.5rem",separator:d="/",className:i,listProps:l,...g}=s,u=k(o),N=u.length,f=u.map((t,C)=>h.cloneElement(t,{separator:d,spacing:a,isLastChild:N===C+1})),y=B("chakra-breadcrumb",i);return n.jsx(m.nav,{ref:c,"aria-label":"breadcrumb",className:y,__css:r.container,...g,children:n.jsx(E,{value:r,children:n.jsx(m.ol,{className:"chakra-breadcrumb__list",...l,__css:{display:"flex",alignItems:"center",...r.list},children:f})})})});L.displayName="Breadcrumb";export{L as B,I as a,v as b};