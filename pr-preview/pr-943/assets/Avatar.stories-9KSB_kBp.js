import{j as n}from"./index-D6_wGsWO.js";import{J as s}from"./index-BX2HAd5b.js";const i={title:"Komponenter/Avatar",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},args:{name:"Hans Hansen",src:"https://bit.ly/broken-link",size:"md"},argTypes:{name:{description:"The name of the person in the avatar. - if src has loaded, the name will be used as the alt attribute of the img - If src is not loaded, the name will be used to create the initials",table:{type:{summary:"string"}},control:"text"},size:{description:"The size of the Avatar",table:{type:{summary:"2xs | xs | sm | md | lg | xl | 2xl"},defaultValue:{summary:"md"}},options:["2xs","xs","sm","md","lg","xl","2xl"],control:{type:"radio"}},src:{description:"The image url of the Avatar",table:{type:{summary:"String"}},control:"text"}}},e={render:o=>n.jsx(s,{...o})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: AvatarProps) => <KvibAvatar {...args} />
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const m=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{d as A,e as P};
