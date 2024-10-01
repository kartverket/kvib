import{j as t}from"./extends-CwFRzn3r.js";import{u as S}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{f as k,o as m,c as u}from"./chunk-ZJJGQIVY-CoI1iMVy.js";var l="chakra-skip-nav";function f(e){return{userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",...e,_focus:{clip:"auto",width:"auto",height:"auto",...e._focus}}}var s=k(function(r,n){const i=S("SkipLink",r),{id:o=l,...v}=m(r);return t.jsx(u.a,{...v,ref:n,href:`#${o}`,__css:f(i)})});s.displayName="SkipNavLink";var h=k(function(r,n){const{id:i=l,...o}=r;return t.jsx(u.div,{ref:n,id:i,tabIndex:-1,style:{outline:0},...o})});h.displayName="SkipNavContent";const g={title:"Navigasjon/SkipNav",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{}},a={args:{children:"SkipNav"},render:e=>t.jsxs("div",{children:["Trykk her + tab",t.jsx(s,{...e})]})};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "SkipNav"
  },
  render: args => <div>
      Trykk her + tab
      <KvibSkipNavLink {...args} />
    </div>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const N=["SkipNavLink"],_=Object.freeze(Object.defineProperty({__proto__:null,SkipNavLink:a,__namedExportsOrder:N,default:g},Symbol.toStringTag,{value:"Module"}));export{_ as S,a};
