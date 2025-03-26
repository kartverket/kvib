import{j as s}from"./jsx-runtime-CLpGMVip.js";import{aP as t}from"./index-RGZpRyuC.js";const l={title:"Komponenter/Rating",component:t,parameters:{docs:{story:{inline:!0}}},argTypes:{size:{description:"Size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},count:{description:"The total number of ratings.",table:{type:{summary:"number"},defaultValue:{summary:"5"}},control:"number"},defaultValue:{description:"The default value of the rating",table:{type:{summary:"number"}},control:"number"},colorPalette:{description:"Color palette of the component",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},allowHalf:{description:"Whether to allow half stars.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{count:5,defaultValue:4}};t.displayName="Rating";const e={render:n=>s.jsx(t,{...n})};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Rating {...args} />
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const m=["Preview"],p=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,p as R};
