import{j as o}from"./extends-CwFRzn3r.js";import{u as j}from"./chunk-57I6FYPZ-CwnaZWLD.js";import{u as S}from"./chunk-UIGT7YZF-XoNRsZNz.js";import{B as p}from"./chunk-PULVB27S-CgiffgmI.js";function f(e){const{breakpoint:r,hide:n,children:t,ssr:d}=e,[s]=j(r,{ssr:d});return(n?!s:s)?t:null}var u=(e,r)=>{var n,t;return(t=(n=e==null?void 0:e.breakpoints)==null?void 0:n[r])!=null?t:r};function y(e){const{breakpoint:r="",below:n,above:t}=e,d=S(),s=u(d,n),c=u(d,t);let l=r;return s?l=`(max-width: ${s})`:c&&(l=`(min-width: ${c})`),l}function g(e){const{children:r,ssr:n}=e,t=y(e);return o.jsx(f,{breakpoint:t,hide:!0,ssr:n,children:r})}g.displayName="Hide";function m(e){const{children:r,ssr:n}=e,t=y(e);return o.jsx(f,{breakpoint:t,ssr:n,children:r})}m.displayName="Show";const B={title:"Annet/Show-Hide",component:m,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{above:{description:"A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",table:{type:{summary:"string"}},control:"text"},below:{description:"A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",table:{type:{summary:"string"}},control:"text"},breakpoint:{description:"A custom css media query that determines when the children are rendered. Will render children if that query resolves to true.",table:{type:{summary:"string"}},control:"text"},ssr:{table:{type:{summary:Boolean}},control:"boolean"}}},i={args:{},render:e=>o.jsx(m,{...e,breakpoint:"(max-width: 400px)",children:o.jsx(p,{children:"Teksten dukker opp på skjermer med 400px eller mindre."})})},a={args:{},render:e=>o.jsxs(o.Fragment,{children:[o.jsx(m,{...e,above:"sm",children:o.jsx(p,{children:'Denne teksten dukker opp på skjermer med "sm" eller større bredde.'})}),o.jsx(g,{...e,below:"md",children:o.jsx(p,{children:'Denne teksten forsvinner på skjermer med "md" eller mindre bredde.'})})]})};var b,h,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibShow {...args} breakpoint="(max-width: 400px)">
      <Box>Teksten dukker opp på skjermer med 400px eller mindre.</Box>
    </KvibShow>
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,v,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: args => <>
      <KvibShow {...args} above="sm">
        <Box>Denne teksten dukker opp på skjermer med "sm" eller større bredde.</Box>
      </KvibShow>
      <KvibHide {...args} below="md">
        <Box>Denne teksten forsvinner på skjermer med "md" eller mindre bredde.</Box>
      </KvibHide>
    </>
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const H=["Show","ShowHide"],A=Object.freeze(Object.defineProperty({__proto__:null,Show:i,ShowHide:a,__namedExportsOrder:H,default:B},Symbol.toStringTag,{value:"Module"}));export{A as S,i as a,a as b};
