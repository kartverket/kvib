import{j as r}from"./jsx-runtime-CLpGMVip.js";import{A as t}from"./aspect-ratio-nViayLny.js";import{I as i}from"./image-BE6uk9BE.js";const n={title:"Komponenter/Layout/Aspect Ratio",component:t,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{ratio:{description:"The aspect ratio of the Box. Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`",table:{type:{summary:"ResponsiveValue<number>"}},control:"number"},w:{table:{disable:!0}}}};t.displayName="AspectRatio";i.displayName="Image";const e={args:{ratio:4/3,w:"560px"},render:p=>r.jsx(t,{...p,children:r.jsx(i,{alt:"trees",src:"https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"})})};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 3,
    w: "560px"
  },
  render: args => <KvibAspectRatio {...args}>
      <Image alt="trees" src="https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" />
    </KvibAspectRatio>
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:n},Symbol.toStringTag,{value:"Module"}));export{d as A,e as P};
