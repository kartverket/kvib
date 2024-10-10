import{j as e}from"./extends-CwFRzn3r.js";import{u as x,V as k,S as o}from"./show-Cebc5zLS.js";import{B as s}from"./box-B7h7acUJ.js";function c(r){const{children:h,ssr:b}=r,u=x(r);return e.jsx(k,{breakpoint:u,hide:!0,ssr:b,children:h})}c.displayName="Hide";const v={title:"Annet/Show-Hide",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{above:{description:"A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",table:{type:{summary:"string"}},control:"text"},below:{description:"A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",table:{type:{summary:"string"}},control:"text"},breakpoint:{description:"A custom css media query that determines when the children are rendered. Will render children if that query resolves to true.",table:{type:{summary:"string"}},control:"text"},ssr:{table:{type:{summary:Boolean}},control:"boolean"}}},t={args:{},render:r=>e.jsx(o,{...r,breakpoint:"(max-width: 400px)",children:e.jsx(s,{children:"Teksten dukker opp på skjermer med 400px eller mindre."})})},n={args:{},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,above:"sm",children:e.jsx(s,{children:'Denne teksten dukker opp på skjermer med "sm" eller større bredde.'})}),e.jsx(c,{...r,below:"md",children:e.jsx(s,{children:'Denne teksten forsvinner på skjermer med "md" eller mindre bredde.'})})]})};var a,i,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibShow {...args} breakpoint="(max-width: 400px)">
      <Box>Teksten dukker opp på skjermer med 400px eller mindre.</Box>
    </KvibShow>
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <>
      <KvibShow {...args} above="sm">
        <Box>Denne teksten dukker opp på skjermer med "sm" eller større bredde.</Box>
      </KvibShow>
      <KvibHide {...args} below="md">
        <Box>Denne teksten forsvinner på skjermer med "md" eller mindre bredde.</Box>
      </KvibHide>
    </>
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const g=["Show","ShowHide"],y=Object.freeze(Object.defineProperty({__proto__:null,Show:t,ShowHide:n,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{y as S,t as a,n as b};
