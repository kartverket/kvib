import{j as r}from"./extends-CwFRzn3r.js";import{S as i}from"./scale-fade-DpWzeR9a.js";import{B as a}from"./box-Cs-tJ6EH.js";import{c as l}from"./colors-BRrPfCdD.js";const m={title:"Komponenter/Animasjoner/ScaleFade",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{in:{description:"If true, Shows children. Triggers on enter and exit states",table:{type:{summary:"boolean"}},control:"boolean"},unmountOnExit:{description:"If true, unmounts after 'in' is set to 'false' and animation is done",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},reverse:{description:"If true, plays the animation in reverse on exit",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},initialScale:{description:"The size of the children at the start of the animation",table:{type:{summary:"number"},defaultValue:{summary:"0.95"}},control:{type:"number"}}}},u=({...t})=>r.jsx(a,{w:300,h:300,children:r.jsx(i,{...t,children:r.jsx(a,{p:"40px",color:"white",mt:"4",bg:l.green[400],rounded:"md",shadow:"md",children:"Fade"})})}),e={args:{in:!1,unmountOnExit:!1,reverse:!0},render:t=>r.jsx(u,{...t})};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    in: false,
    unmountOnExit: false,
    reverse: true
  },
  render: args => <ScaleFadeEx {...args} />
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const c=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,y as S};
