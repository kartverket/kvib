import{j as r}from"./extends-CwFRzn3r.js";import{F as i}from"./fade-Bhr0Adt1.js";import{B as n}from"./box-Cs-tJ6EH.js";import{c as m}from"./colors-BRrPfCdD.js";const d={title:"Komponenter/Animasjoner/Fade",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{in:{description:"If true, Shows children. Triggers on enter and exit states",table:{type:{summary:"boolean"}},control:"boolean"},unmountOnExit:{description:"If true, unmounts after 'in' is set to 'false' and animation is done",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},l=({...o})=>r.jsx(n,{w:300,h:300,children:r.jsx(i,{...o,children:r.jsx(n,{p:"40px",color:"white",mt:"4",bg:m.green[400],rounded:"md",shadow:"md",children:"Tittei"})})}),e={args:{in:!1,unmountOnExit:!1},render:o=>r.jsx(l,{...o})};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    in: false,
    unmountOnExit: false
  },
  render: args => <FadeEx {...args} />
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const c=["Preview"],g=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{g as F,e as P};
