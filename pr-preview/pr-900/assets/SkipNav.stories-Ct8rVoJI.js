import{j as c}from"./extends-CwFRzn3r.js";import{r as h}from"./index-BwDkhjyp.js";import{T as C,m as N}from"./emotion-styled.browser.esm-NI0tOKWg.js";import{u as b,m as _,a as P,o as T,r as w,f as v,b as j,c as S}from"./chunk-ZJJGQIVY-Cc1cgHRr.js";import{i as E}from"./index-CfyPTyT-.js";function L(){const e=h.useContext(C);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}function R(){const e=b(),t=L();return{...e,theme:t}}function M(e,t={}){var r;const{styleConfig:o,...n}=t,{theme:i,colorMode:g}=R(),y=_(i,`components.${e}`),a=o||y,x=N({theme:i,colorMode:g},(r=a==null?void 0:a.defaultProps)!=null?r:{},P(T(n,["children"]))),u=h.useRef({});if(a){const p=w(a)(x);E(u.current,p)||(u.current=p)}return u.current}function q(e,t={}){return M(e,t)}var k="chakra-skip-nav";function I(e){return{userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",...e,_focus:{clip:"auto",width:"auto",height:"auto",...e._focus}}}var l=v(function(t,r){const o=q("SkipLink",t),{id:n=k,...i}=j(t);return c.jsx(S.a,{...i,ref:r,href:`#${n}`,__css:I(o)})});l.displayName="SkipNavLink";var O=v(function(t,r){const{id:o=k,...n}=t;return c.jsx(S.div,{ref:r,id:o,tabIndex:-1,style:{outline:0},...n})});O.displayName="SkipNavContent";const z={title:"Komponenter/SkipNav",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{}},s={args:{children:"SkipNav"},render:e=>c.jsxs("div",{children:["Trykk her + tab",c.jsx(l,{...e})]})};var d,m,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "SkipNav"
  },
  render: args => <div>
      Trykk her + tab
      <KvibSkipNavLink {...args} />
    </div>
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const K=["Preview"],F=Object.freeze(Object.defineProperty({__proto__:null,Preview:s,__namedExportsOrder:K,default:z},Symbol.toStringTag,{value:"Module"}));export{s as P,F as S};
