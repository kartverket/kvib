import{j as d}from"./index-D6_wGsWO.js";import{K as o}from"./index-B2ysUQ6W.js";const l={title:"Komponenter/Badge",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},args:{colorPalette:"gray",variant:"subtle"},argTypes:{variant:{description:"The variant of the badge",table:{type:{summary:"solid | subtle | outline"},defaultValue:{summary:"subtle"}},options:["solid","subtle","outline"],control:"radio"},colorPalette:{description:"The visual color appearance of the badge",table:{type:{summary:"green | blue | red | gray"}},defaultValue:{summary:"gray"},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the badge",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:"radio"}}},e={render:s=>d.jsx(o,{...s,children:"Badge"})};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <KvibBadge {...args}>Badge</KvibBadge>
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const n=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:n,default:l},Symbol.toStringTag,{value:"Module"}));export{u as B,e as P};
