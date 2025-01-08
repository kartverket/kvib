import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{B as o}from"./bleed-Be2diQ6W.js";import{B as r}from"./box-Bmov6X-Z.js";import{S as m}from"./stack-DR__wOga.js";import{H as l}from"./heading-c0bs7S-P.js";const c={title:"Komponenter/Layout/Bleed",component:o,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{inline:{description:"The negative margin on the x-axis",table:{type:{summary:"SystemStyleObject['marginInline']"}}},block:{description:"The negative margin on the y-axis",table:{type:{summary:"SystemStyleObject['marginBlock']"}}},inlineStart:{description:"The negative margin on the inline-start axis",table:{type:{summary:"SystemStyleObject['marginInlineStart']"}}},inlineEnd:{description:"The negative margin on the inline-end axis",table:{type:{summary:"SystemStyleObject['marginInlineEnd']"}}},blockStart:{description:"The negative margin on the block-start axis",table:{type:{summary:"SystemStyleObject['marginBlockStart']"}}},blockEnd:{description:"The negative margin on the block-end axis",table:{type:{summary:"SystemStyleObject['marginBlockEnd']"}}}}},d=n=>e.jsxs(r,{padding:"10",rounded:"sm",borderWidth:"1px",children:[e.jsx(o,{inline:"10",...n,children:e.jsx(r,{background:`repeating-linear-gradient(
        125deg,
        #c0c0c0,
        #c0c0c0 1px,
        #f0f0f0 1px,
        #f0f0f0 5px
      )`,height:"20",children:"Bleed content"})}),e.jsx(m,{mt:"6",children:e.jsx(l,{size:"md",children:"Heading"})})]}),p=`
<Bleed>
  ...
</Bleed>
`,t={render:n=>e.jsx(d,{...n}),parameters:{docs:{source:{code:p}}}};var a,i,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <BleedExample {...args} />,
  parameters: {
    docs: {
      source: {
        code: bleedString
      }
    }
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const g=["Preview"],h=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:g,default:c},Symbol.toStringTag,{value:"Module"}));export{h as B,t as P};
