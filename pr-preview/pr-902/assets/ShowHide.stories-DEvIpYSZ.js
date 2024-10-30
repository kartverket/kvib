import{j as n}from"./extends-CwFRzn3r.js";import{u as v}from"./use-theme-CBfqdygA.js";import{u as x}from"./use-media-query-DZQeksUW.js";import{B as d}from"./box-Cs-tJ6EH.js";const b=(e,r)=>{var t;return((t=e==null?void 0:e.breakpoints)==null?void 0:t[r])??r};function w(e){const{breakpoint:r="",below:t,above:o}=e,a=v(),s=b(a,t),m=b(a,o);let l=r;return s?l=`(max-width: ${s})`:m&&(l=`(min-width: ${m})`),l}function y(e){const{breakpoint:r,hide:t,children:o,ssr:a}=e,[s]=x(r,{ssr:a});return(t?!s:s)?o:null}function c(e){const{children:r,ssr:t}=e,o=w(e);return n.jsx(y,{breakpoint:o,ssr:t,children:r})}c.displayName="Show";const k={title:"Komponenter/Show-Hide",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{above:{description:"A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",table:{type:{summary:"string"}},control:"text"},below:{description:"A value from the breakpoints section in the theme. Will render children from that breakpoint and above. Default breakpoint values: sm, md, lg, xl, 2xl.",table:{type:{summary:"string"}},control:"text"},breakpoint:{description:"A custom css media query that determines when the children are rendered. Will render children if that query resolves to true.",table:{type:{summary:"string"}},control:"text"},ssr:{table:{type:{summary:"Boolean"}},control:"boolean"}}},i={render:e=>n.jsxs(n.Fragment,{children:[n.jsx(c,{...e,above:"md",children:n.jsx(d,{p:4,bg:"yellow.50",children:"Denne teksten vises på store skjermer"})}),n.jsx(c,{...e,below:"md",children:n.jsx(d,{p:4,bg:"blue.50",children:"Denne teksten vises på små skjermer"})})]})};var p,u,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <>
      <KvibShow {...args} above="md">
        <Box p={4} bg="yellow.50">
          Denne teksten vises på store skjermer
        </Box>
      </KvibShow>
      <KvibShow {...args} below="md">
        <Box p={4} bg="blue.50">
          Denne teksten vises på små skjermer
        </Box>
      </KvibShow>
    </>
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const f=["Preview"],D=Object.freeze(Object.defineProperty({__proto__:null,Preview:i,__namedExportsOrder:f,default:k},Symbol.toStringTag,{value:"Module"}));export{i as P,D as S};
