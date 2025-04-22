import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./bleed-XXdFbytk.js";import{B as t}from"./box-BGguGcLy.js";import{S as s}from"./stack-mCRVjjbS.js";import{H as d}from"./heading-DMt6CN8-.js";const l={title:"Komponenter/Layout/Bleed",component:a,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{inline:{description:"The negative margin on the x-axis",table:{type:{summary:"SystemStyleObject['marginInline']"}}},block:{description:"The negative margin on the y-axis",table:{type:{summary:"SystemStyleObject['marginBlock']"}}},inlineStart:{description:"The negative margin on the inline-start axis",table:{type:{summary:"SystemStyleObject['marginInlineStart']"}}},inlineEnd:{description:"The negative margin on the inline-end axis",table:{type:{summary:"SystemStyleObject['marginInlineEnd']"}}},blockStart:{description:"The negative margin on the block-start axis",table:{type:{summary:"SystemStyleObject['marginBlockStart']"}}},blockEnd:{description:"The negative margin on the block-end axis",table:{type:{summary:"SystemStyleObject['marginBlockEnd']"}}}}};a.displayName="Bleed";t.displayName="Box";s.displayName="Stack";d.displayName="Heading";const n={render:m=>e.jsxs(t,{padding:"10",rounded:"sm",borderWidth:"1px",children:[e.jsx(a,{inline:"10",...m,children:e.jsx(t,{background:"orange.50",height:"20",children:"Bleed content"})}),e.jsx(s,{mt:"6",children:e.jsx(d,{size:"md",children:"Heading"})})]})};var i,r,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Box padding="10" rounded="sm" borderWidth="1px">
      <Bleed inline="10" {...args}>
        <Box background="orange.50" height="20">
          Bleed content
        </Box>
      </Bleed>

      <Stack mt="6">
        <Heading size="md">Heading</Heading>
      </Stack>
    </Box>
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const c=["Preview"],x=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{x as B,n as P};
