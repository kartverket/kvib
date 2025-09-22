import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as n}from"./index-Czj1CPHY.js";import{F as v}from"./flex-DUV5s85r.js";import{S as K}from"./stack-Ul3ip2Cd.js";const k={title:"Komponenter/Text",component:n,parameters:{docs:{story:{inline:!0}}},argTypes:{fontSize:{description:"Size of the text",table:{type:{summary:"string"}},control:"text"},textStyle:{description:"Use either fontSize or textStyle to set the size of the text",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'"},defaultValue:{summary:"md"}},control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl"]},truncate:{description:"Truncate text with ellipsis after a single line",table:{type:{summary:"boolean"}},control:"boolean"},lineClamp:{description:"Limit the number of lines displayed",table:{type:{summary:"number"}},control:"number"},fontWeight:{description:"Font weight of the text",table:{type:{summary:"50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900"}},control:"select",options:[50,100,200,300,400,500,600,700,800,900]}}};n.displayName="Text";v.displayName="Flex";const i={args:{children:"Example text"},render:t=>e.jsx(v,{maxW:"sm",children:e.jsx(n,{...t})})},s={args:{},render:t=>e.jsxs(K,{gap:3,children:[e.jsx(n,{...t,fontSize:"6xl",maxLines:1,children:"(6xl) Kartverkets interaksjon- og designbibliotek"}),e.jsx(n,{...t,fontSize:"5xl",maxLines:1,children:"(5xl) Kartverkets interaksjon- og designbibliotek"}),e.jsx(n,{...t,fontSize:"4xl",children:"(4xl) Kartverkets interaksjon- og designbibliotek"}),e.jsx(n,{...t,fontSize:"3xl",children:"(3xl) Kartverkets interaksjon- og designbibliotek"}),e.jsx(n,{...t,fontSize:"2xl",children:"(2xl) Kartverkets interaksjon- og designbibliotek"}),e.jsx(n,{...t,fontSize:"xl",children:"(xl) Kartverkets interaksjon- og designbibliotek"}),e.jsx(n,{...t,fontSize:"lg",children:"(lg) Kartverkets interaksjon- og designbibliotek"}),e.jsx(n,{...t,fontSize:"md",children:"(md) Kartverkets interaksjon- og designbibliotek"}),e.jsx(n,{...t,fontSize:"sm",children:"(sm) Kartverkets interaksjon- og designbibliotek"}),e.jsx(n,{...t,fontSize:"xs",children:"(xs) Kartverkets interaksjon- og designbibliotek"})]})},r={args:{},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...t,as:"b",children:"Bold"}),e.jsx("br",{}),e.jsx(n,{...t,as:"i",children:"Italic"}),e.jsx("br",{}),e.jsx(n,{...t,as:"u",children:"Underline"}),e.jsx("br",{}),e.jsx(n,{...t,as:"abbr",children:"I18N"}),e.jsx("br",{}),e.jsx(n,{...t,as:"cite",children:"Citation"}),e.jsx("br",{}),e.jsx(n,{...t,as:"del",children:"Deleted"}),e.jsx("br",{}),e.jsx(n,{...t,as:"em",children:"Emphasis"}),e.jsx("br",{}),e.jsx(n,{...t,as:"ins",children:"Inserted"}),e.jsx("br",{}),e.jsx(n,{...t,as:"kbd",children:"Ctrl + C"}),e.jsx("br",{}),e.jsx(n,{...t,as:"mark",children:"Highlighted"}),e.jsx("br",{}),e.jsx(n,{...t,as:"s",children:"Strikethrough"}),e.jsx("br",{}),e.jsx(n,{...t,as:"samp",children:"Sample"}),e.jsx("br",{}),e.jsx(n,{...t,as:"sub",children:"sub"}),e.jsx("br",{}),e.jsx(n,{...t,as:"sup",children:"sup"})]})};var a,o,x;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "Example text"
  },
  render: args => <Flex maxW="sm">
      <KvibText {...args} />
    </Flex>
}`,...(x=(o=i.parameters)==null?void 0:o.docs)==null?void 0:x.source}}};var l,b,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack gap={3}>
      <KvibText {...args} fontSize="6xl" maxLines={1}>
        (6xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="5xl" maxLines={1}>
        (5xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="4xl">
        (4xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="3xl">
        (3xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="2xl">
        (2xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="xl">
        (xl) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="lg">
        (lg) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="md">
        (md) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="sm">
        (sm) Kartverkets interaksjon- og designbibliotek
      </KvibText>
      <KvibText {...args} fontSize="xs">
        (xs) Kartverkets interaksjon- og designbibliotek
      </KvibText>
    </KvibStack>
}`,...(d=(b=s.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var m,c,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <>
      <KvibText {...args} as="b">
        Bold
      </KvibText>
      <br />
      <KvibText {...args} as="i">
        Italic
      </KvibText>
      <br />
      <KvibText {...args} as="u">
        Underline
      </KvibText>
      <br />
      <KvibText {...args} as="abbr">
        I18N
      </KvibText>
      <br />
      <KvibText {...args} as="cite">
        Citation
      </KvibText>
      <br />
      <KvibText {...args} as="del">
        Deleted
      </KvibText>
      <br />
      <KvibText {...args} as="em">
        Emphasis
      </KvibText>
      <br />
      <KvibText {...args} as="ins">
        Inserted
      </KvibText>
      <br />
      <KvibText {...args} as="kbd">
        Ctrl + C
      </KvibText>
      <br />
      <KvibText {...args} as="mark">
        Highlighted
      </KvibText>
      <br />
      <KvibText {...args} as="s">
        Strikethrough
      </KvibText>
      <br />
      <KvibText {...args} as="samp">
        Sample
      </KvibText>
      <br />
      <KvibText {...args} as="sub">
        sub
      </KvibText>
      <br />
      <KvibText {...args} as="sup">
        sup
      </KvibText>
    </>
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const j=["Preview","TextSizes","TextOverride"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:i,TextOverride:r,TextSizes:s,__namedExportsOrder:j,default:k},Symbol.toStringTag,{value:"Module"}));export{i as P,u as T};
