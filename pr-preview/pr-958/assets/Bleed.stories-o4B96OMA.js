import{j as e}from"./index-Bqoz-m_F.js";import{cb as o,G as r,S as c,aw as l}from"./index-DuafSpvy.js";const d={title:"Komponenter/Layout/Bleed",component:o,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{inline:{description:"The negative margin on the x-axis",table:{type:{summary:"SystemStyleObject['marginInline']"}}},block:{description:"The negative margin on the y-axis",table:{type:{summary:"SystemStyleObject['marginBlock']"}}},inlineStart:{description:"The negative margin on the inline-start axis",table:{type:{summary:"SystemStyleObject['marginInlineStart']"}}},inlineEnd:{description:"The negative margin on the inline-end axis",table:{type:{summary:"SystemStyleObject['marginInlineEnd']"}}},blockStart:{description:"The negative margin on the block-start axis",table:{type:{summary:"SystemStyleObject['marginBlockStart']"}}},blockEnd:{description:"The negative margin on the block-end axis",table:{type:{summary:"SystemStyleObject['marginBlockEnd']"}}}}},m=t=>e.jsxs(r,{padding:"10",rounded:"sm",borderWidth:"1px",children:[e.jsx(o,{inline:"10",...t,children:e.jsx(r,{background:`repeating-linear-gradient(
        125deg,
        #c0c0c0,
        #c0c0c0 1px,
        #f0f0f0 1px,
        #f0f0f0 5px
      )`,height:"20",children:"Bleed content"})}),e.jsx(c,{mt:"6",children:e.jsx(l,{size:"md",children:"Heading"})})]}),p=`
<Bleed>
  ...
</Bleed>
`,n={render:t=>e.jsx(m,{...t}),parameters:{docs:{source:{code:p}}}};var a,i,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <BleedExample {...args} />,
  parameters: {
    docs: {
      source: {
        code: bleedString
      }
    }
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const g=["Preview"],x=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:g,default:d},Symbol.toStringTag,{value:"Module"}));export{x as B,n as P};
