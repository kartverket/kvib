import{j as t}from"./index-Bqoz-m_F.js";import{ca as s,aE as n}from"./index-DuafSpvy.js";const c={title:"Komponenter/Layout/Aspect Ratio",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{ratio:{description:"The aspect ratio of the Box. Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`",table:{type:{summary:"ResponsiveValue<number>"}},control:"number"},w:{table:{disable:!0}}}},p=`
<AspectRatio>
  <Image
    src="..."
  />
</AspectRatio>
`,e={args:{ratio:4/3,w:"560px"},render:i=>t.jsx(s,{...i,children:t.jsx(n,{alt:"trees",src:"https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"})}),parameters:{docs:{source:{code:p}}}};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 3,
    w: "560px"
  },
  render: args => <KvibAspectRatio {...args}>
      <Image alt="trees" src="https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" />
    </KvibAspectRatio>,
  parameters: {
    docs: {
      source: {
        code: aspectRatioString
      }
    }
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const m=["Preview"],l=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{l as A,e as P};
