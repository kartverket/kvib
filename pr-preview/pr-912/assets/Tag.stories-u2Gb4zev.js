import{j as e}from"./jsx-runtime-CQsLhzk5.js";import"./slider-Bgj0f888.js";import{r as S}from"./index-Wp2u197Z.js";import{aw as j}from"./create-slot-recipe-context-BTQZ2sOO.js";import{T as v,a as P,b as R,c as i,d as _}from"./tag-Iy4bxrEb.js";const p=S.forwardRef(function(a,d){const{startElement:s,endElement:o,onClose:n,closable:u=!!n,children:y,...T}=a,f=j({key:"tag"})(a),{root:b,startElement:E,label:h,endElement:l,closeTrigger:x}=f;return e.jsxs(v,{ref:d,css:b,...T,children:[s&&e.jsx(P,{css:E,children:s}),e.jsx(R,{css:h,children:y}),o&&e.jsx(i,{css:l,children:o}),u&&e.jsx(i,{css:l,children:e.jsx(_,{onClick:n,css:x})})]})}),w={title:"Komponenter/Tag",component:p,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the component.",table:{type:{summary:"solid | outline | plain"}},defaultValue:{summary:"solid"},options:["solid","outline","plain"],control:{type:"radio"}},colorPalette:{description:"The visual color appearance of the Tag",table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the Tag",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},t={render:r=>e.jsx(p,{...r,children:"Eksempeltag"})};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: TagProps) => <KvibTag {...args}>Eksempeltag</KvibTag>
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const k=["Preview"],M=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:k,default:w},Symbol.toStringTag,{value:"Module"}));export{t as P,M as T};
