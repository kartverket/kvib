import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-Bj2TM2QZ.js";import{u as Y,d as h,c as g,a as k,m as E}from"./factory-pl1wLBYD.js";import{a as _}from"./empty-DSVal0bC.js";function A(m){const{key:i,recipe:x}=m,t=Y();return u.useMemo(()=>{const N=x||(i!=null?t.getSlotRecipe(i):{});return t.sva(structuredClone(N))},[i,x,t])}const F=m=>m.charAt(0).toUpperCase()+m.slice(1),D=m=>{const{key:i,recipe:x}=m,t=F(i||x.className||"Component"),[N,v]=h({name:`${t}StylesContext`,errorMessage:`use${t}Styles returned is 'undefined'. Seems you forgot to wrap the components in "<${t}.Root />" `}),[C,R]=h({name:`${t}ClassNameContext`,errorMessage:`use${t}ClassNames returned is 'undefined'. Seems you forgot to wrap the components in "<${t}.Root />" `,strict:!1}),[T,P]=h({strict:!1,name:`${t}PropsContext`,providerName:`${t}PropsContext`,defaultValue:{}});function S(s){const{unstyled:o,...e}=s,r=A({key:i,recipe:e.recipe||x}),[a,n]=u.useMemo(()=>r.splitVariantProps(e),[e,r]);return{styles:u.useMemo(()=>o?_:r(a),[o,a,r]),classNames:r.classNameMap,props:n}}function L(s,o={}){const{defaultProps:e}=o,r=a=>{const n=P(),c=u.useMemo(()=>E(e,n,a),[n,a]),{styles:d,classNames:l,props:y}=S(c);return p.jsx(N,{value:d,children:p.jsx(C,{value:l,children:p.jsx(s,{...y})})})};return r.displayName=s.displayName||s.name,r}return{StylesProvider:N,ClassNamesProvider:C,PropsProvider:T,usePropsContext:P,useRecipeResult:S,withProvider:(s,o,e)=>{const{defaultProps:r,...a}=e??{},n=g(s,{},a),c=u.forwardRef((d,l)=>{var $;const y=P(),f=u.useMemo(()=>E(r??{},y,d),[y,d]),{styles:w,props:O,classNames:j}=S(f),V=j[o],M=p.jsx(N,{value:w,children:p.jsx(C,{value:j,children:p.jsx(n,{ref:l,...O,css:[w[o],f.css],className:k(f.className,V)})})});return(($=e==null?void 0:e.wrapElement)==null?void 0:$.call(e,M,f))??M});return c.displayName=s.displayName||s.name,c},withContext:(s,o,e)=>{const r=g(s,{},e),a=u.forwardRef((n,c)=>{const d=v(),l=R(),y=l==null?void 0:l[o];return p.jsx(r,{...n,css:[o?d[o]:void 0,n.css],ref:c,className:k(n.className,y)})});return a.displayName=s.displayName||s.name,a},withRootProvider:L,useStyles:v,useClassNames:R}};export{D as c,A as u};
