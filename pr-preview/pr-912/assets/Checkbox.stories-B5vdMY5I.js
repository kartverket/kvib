import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{r as p}from"./index-Wp2u197Z.js";import{C as f,a as h,b as x,c as k,d as y}from"./checkbox-CdRhMZCs.js";const l=p.forwardRef(function(c,i){const{icon:d,children:t,inputProps:m,rootRef:u,...b}=c;return e.jsxs(f,{ref:u,...b,children:[e.jsx(h,{ref:i,...m}),e.jsx(x,{children:d||e.jsx(k,{})}),t!=null&&e.jsx(y,{children:t})]})}),C={title:"Komponenter/Checkbox",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},args:{colorPalette:"green",size:"md",disabled:!1,invalid:!1},argTypes:{colorPalette:{description:"The color of the component",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},control:"radio",options:["green","blue"]},size:{description:"The size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},disabled:{description:"If true, the component will be disabled",table:{type:{summary:"true | false"},defaultValue:{summary:"false"}},control:"boolean"},invalid:{description:"If true, the checkbox will be invalid",table:{type:{summary:"true | false"},defaultValue:{summary:!1}},control:"boolean"}}},o={render:r=>e.jsx(l,{defaultChecked:!0,...r,children:"En sjekkboks"})};var s,a,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <KvibCheckbox defaultChecked {...args}>
      En sjekkboks
    </KvibCheckbox>
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const g=["Preview"],w=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:g,default:C},Symbol.toStringTag,{value:"Module"}));export{w as C,o as P};
