import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{S as r}from"./spinner-B3k6pLP6.js";const l={title:"Komponenter/Spinner",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"The color palette of the component",table:{type:{summary:"green | blue | gray"},defaultValue:{summary:"green"}},control:{type:"radio"},options:["green","blue","gray"]},color:{description:"The color of the component",table:{type:{summary:"string"},defaultValue:{summary:"currentColor"}},control:"text"},size:{description:"The size of the component",table:{type:{summary:" sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}};r.displayName="Spinner";const e={args:{colorPalette:"green",color:"colorPalette.500",size:"md"},render:a=>s.jsx(r,{...a})};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    colorPalette: "green",
    color: "colorPalette.500",
    size: "md"
  },
  render: args => <KvibSpinner {...args} />
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const m=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,c as S};
