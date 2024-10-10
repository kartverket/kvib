import{j as r}from"./extends-CwFRzn3r.js";import{S as l}from"./chunk-SR4VX3RF-BplkwScB.js";import{B as t}from"./chunk-PULVB27S-CgiffgmI.js";import{c as i}from"./colors-BRrPfCdD.js";const m={title:"Animasjoner/ScaleFade",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{in:{description:"If true, Shows children. Triggers on enter and exit states",table:{type:{summary:"boolean"}},control:"boolean"},unmountOnExit:{description:"If true, unmounts after 'in' is set to 'false' and animation is done",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},reverse:{description:"If true, plays the animation in reverse on exit",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},initialScale:{description:"The size of the children at the start of the animation",table:{type:{summary:"number"},defaultValue:{summary:"0.95"}},control:{type:"number"}}}},c=({...a})=>r.jsx(t,{w:300,h:300,children:r.jsx(l,{...a,children:r.jsx(t,{p:"40px",color:"white",mt:"4",bg:i.green[400],rounded:"md",shadow:"md",children:"Fade"})})}),e={args:{in:!1,unmountOnExit:!1,reverse:!0},render:a=>r.jsx(c,{...a})};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    in: false,
    unmountOnExit: false,
    reverse: true
  },
  render: args => <ScaleFadeEx {...args} />
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const u=["ScaleFade"],y=Object.freeze(Object.defineProperty({__proto__:null,ScaleFade:e,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{y as S,e as a};
