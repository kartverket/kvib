import{j as r}from"./extends-CwFRzn3r.js";import{S as i}from"./slide-fade-DTA8_nFh.js";import{B as o}from"./box-CwIaBbUI.js";import{c as l}from"./colors-BRrPfCdD.js";const m={title:"Komponenter/Animasjoner/SlideFade",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{in:{description:"If true, Shows children. Triggers on enter and exit states",table:{type:{summary:"boolean"}},control:"boolean"},unmountOnExit:{description:"If true, unmounts after 'in' is set to 'false' and animation is done",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},reverse:{description:"If true, plays the animation in reverse on exit",table:{type:{summary:"boolean"},defaultValue:{summary:"true "}},control:"boolean"},offsetX:{description:"If true, plays the animation in reverse on exit",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"},offsetY:{description:"If true, plays the animation in reverse on exit",table:{type:{summary:"number"},defaultValue:{summary:"8"}},control:"number"}}},u=({...t})=>r.jsx(o,{w:300,h:300,children:r.jsx(i,{...t,children:r.jsx(o,{p:"40px",color:"white",mt:"4",bg:l.green[400],rounded:"md",shadow:"md",children:"Hei"})})}),e={args:{in:!1},render:t=>r.jsx(u,{...t})};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    in: false
  },
  render: args => <SlideFadeEx {...args} />
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const d=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,b as S};