import{B as a,j as e,b as t,S as o,H as d}from"./iframe-B_C8pV-B.js";const m={title:"Komponenter/Layout/Bleed",component:a,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{inline:{description:"The negative margin on the x-axis",table:{type:{summary:"SystemStyleObject['marginInline']"}}},block:{description:"The negative margin on the y-axis",table:{type:{summary:"SystemStyleObject['marginBlock']"}}},inlineStart:{description:"The negative margin on the inline-start axis",table:{type:{summary:"SystemStyleObject['marginInlineStart']"}}},inlineEnd:{description:"The negative margin on the inline-end axis",table:{type:{summary:"SystemStyleObject['marginInlineEnd']"}}},blockStart:{description:"The negative margin on the block-start axis",table:{type:{summary:"SystemStyleObject['marginBlockStart']"}}},blockEnd:{description:"The negative margin on the block-end axis",table:{type:{summary:"SystemStyleObject['marginBlockEnd']"}}}}};a.displayName="Bleed";t.displayName="Box";o.displayName="Stack";d.displayName="Heading";const n={render:l=>e.jsxs(t,{padding:"10",rounded:"sm",borderWidth:"1px",children:[e.jsx(a,{inline:"10",...l,children:e.jsx(t,{background:"orange.50",height:"20",children:"Bleed content"})}),e.jsx(o,{mt:"6",children:e.jsx(d,{size:"md",children:"Heading"})})]})},c=["Preview"];var i,r,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const y=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{y as B,n as P};
