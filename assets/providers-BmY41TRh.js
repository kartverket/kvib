import{j as S}from"./extends-CwFRzn3r.js";import{G as x}from"./emotion-react.browser.esm-0Zac8NuU.js";import{r as C}from"./index-BwDkhjyp.js";import{i as _,g as M,b as O,d as w,u as R,r as z,e as $}from"./factory-DBKMNJMh.js";import{c as v}from"./context-CBKykClo.js";import{c as b}from"./calc-C4XOv3Qc.js";import{c as G}from"./css-var-DE0-P1bc.js";import{p as W}from"./pick-DBnSFT3T.js";import{m as F}from"./emotion-styled.browser.esm-KUABWefE.js";import{b as E,m as I}from"./use-style-config-B2siLCbt.js";import{a as K}from"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";function j(e,s,n={}){const{stop:r,getKey:o}=n;function c(t,f=[]){if(_(t)||Array.isArray(t)){const i={};for(const[u,k]of Object.entries(t)){const a=(o==null?void 0:o(u))??u,l=[...f,a];if(r!=null&&r(t,l))return s(t,f);i[a]=c(k,l)}return i}return s(t,f)}return c(e)}const B=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function H(e){return W(e,B)}function L(e){return e.semanticTokens}function N(e){const{__cssMap:s,__cssVars:n,__breakpoints:r,...o}=e;return o}function q(e){const s=H(e),n=L(e),r=M(e),o=t=>r.includes(t)||t==="default",c={};return j(s,(t,f)=>{t!=null&&(c[f.join(".")]={isSemantic:!1,value:t})}),j(n,(t,f)=>{t!=null&&(c[f.join(".")]={isSemantic:!0,value:t})},{stop:t=>Object.keys(t).every(o)}),c}function V(e,s){return G(String(e).replace(/\./g,"-"),void 0,s)}function A(e){var f;const s=q(e),n=(f=e.config)==null?void 0:f.cssVarPrefix,r=O(e);let o={};const c={};function t(i,u){const a=[String(i).split(".")[0],u].join(".");if(!s[a])return u;const{reference:p}=V(a,n);return p}for(const[i,u]of Object.entries(s)){const{isSemantic:k,value:a}=u,{variable:l,reference:p}=V(i,n);if(!k){if(i.startsWith("space")){const m=i.split("."),[d,...y]=m,g=`${d}.-${y.join(".")}`,h=b.negate(a),P=b.negate(p);c[g]={value:h,var:l,varRef:P}}o[l]=a,c[i]={value:a,var:l,varRef:p};continue}const T=_(a)?a:{default:a};o=F(o,Object.entries(T).reduce((m,[d,y])=>{if(!y)return m;const g=t(i,`${y}`);if(d==="default")return m[l]=g,m;const h=(r==null?void 0:r[d])??d;return m[h]={[l]:g},m},{})),c[i]={value:p,var:l,varRef:p}}return{cssVars:o,cssMap:c}}function D(e){const s=N(e),{cssMap:n,cssVars:r}=A(s),o={"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},c=w(s);return Object.assign(s,{__cssVars:{...o,...r},__cssMap:n,__breakpoints:E(s.breakpoints),__isStyleProp:c}),s}function ce(e){const{cssVarsRoot:s,theme:n,children:r}=e,o=C.useMemo(()=>D(n),[n]);return S.jsxs(K,{theme:o,children:[S.jsx(J,{root:s}),r]})}function J({root:e=":host, :root"}){const s=[e,"[data-theme]"].join(",");return S.jsx(x,{styles:n=>({[s]:n.__cssVars})})}v({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function ae(e){return v({name:`${e}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `})}function ie(){const{colorMode:e}=R();return S.jsx(x,{styles:s=>{const n=I(s,"styles.global"),r=z(n,{theme:s,colorMode:e});return r?$(r)(s):void 0}})}export{ie as G,ce as T,ae as c};