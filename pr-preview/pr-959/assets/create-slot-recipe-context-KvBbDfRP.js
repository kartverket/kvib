import{j as p}from"./jsx-runtime-DgHZ7iq2.js";import{r as S}from"./index-C7I6S4tq.js";import{u as V,b as C,c as g,m as k,a as E}from"./factory-CpD2hwoa.js";import{a as Y}from"./empty-DSVal0bC.js";function _(i){const{key:u,recipe:d}=i,t=V();return S.useMemo(()=>{const y=d||(u!=null?t.getSlotRecipe(u):{});return t.sva(structuredClone(y))},[u,d,t])}const b=i=>i.charAt(0).toUpperCase()+i.slice(1),B=i=>{const{key:u,recipe:d}=i,t=b(u||d.className||"Component"),[y,h]=C({name:`${t}StylesContext`,errorMessage:`use${t}Styles returned is 'undefined'. Seems you forgot to wrap the components in "<${t}.Root />" `}),[N,v]=C({name:`${t}ClassNameContext`,errorMessage:`use${t}ClassNames returned is 'undefined'. Seems you forgot to wrap the components in "<${t}.Root />" `,strict:!1}),[M,f]=C({strict:!1,name:`${t}PropsContext`,providerName:`${t}PropsContext`,defaultValue:{}});function P(e){const{unstyled:r,...s}=e,o=_({key:u,recipe:s.recipe||d}),[n,a]=o.splitVariantProps(s);return{styles:r?Y:o(n),classNames:o.classNameMap,props:a}}function T(e,r={}){const{defaultProps:s}=r,o=n=>{const a=k(s,f(),n),{styles:c,classNames:x,props:l}=P(a);return p.jsx(y,{value:c,children:p.jsx(N,{value:x,children:p.jsx(e,{...l})})})};return o.displayName=e.displayName||e.name,o}return{StylesProvider:y,ClassNamesProvider:N,PropsProvider:M,usePropsContext:f,useRecipeResult:P,withProvider:(e,r,s)=>{const{defaultProps:o,...n}=s??{},a=g(e,{},n),c=S.forwardRef((x,l)=>{var $;const m=k(o??{},f(),x),{styles:R,props:L,classNames:w}=P(m),O=w[r],j=p.jsx(y,{value:R,children:p.jsx(N,{value:w,children:p.jsx(a,{ref:l,...L,css:[R[r],m.css],className:E(m.className,O)})})});return(($=s==null?void 0:s.wrapElement)==null?void 0:$.call(s,j,m))??j});return c.displayName=e.displayName||e.name,c},withContext:(e,r,s)=>{const o=g(e,{},s),n=S.forwardRef((a,c)=>{const x=h(),l=v(),m=l==null?void 0:l[r];return p.jsx(o,{...a,css:[r?x[r]:void 0,a.css],ref:c,className:E(a.className,m)})});return n.displayName=e.displayName||e.name,n},withRootProvider:T,useStyles:h,useClassNames:v}};export{B as c,_ as u};
