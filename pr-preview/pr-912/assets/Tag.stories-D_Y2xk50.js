import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{r as i}from"./index-CcKhGcwW.js";import{T as O,a as R,b as B,c as u,d as G}from"./tag-BSWy3RGp.js";import{C as L}from"./close-button-C8_g2cP4.js";import{H as g}from"./h-stack-CjVo9nnl.js";const s=i.forwardRef(function(e,_){const{startElement:m,endElement:d,onClose:p,closable:V=!!p,children:w,...P}=e;return r.jsxs(O,{ref:_,...P,children:[m&&r.jsx(R,{children:m}),r.jsx(B,{children:w}),d&&r.jsx(u,{children:d}),V&&r.jsx(u,{children:r.jsx(G,{onClick:p})})]})}),M={title:"Komponenter/Tag",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the Tag",table:{type:{summary:"subtle | solid | outline"},defaultValue:{summary:"subtle"}},options:["subtle","solid","outline"],control:"radio"},colorScheme:{description:"The visual color appearance of the Tag",table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the Tag",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},o={render:a=>r.jsx(s,{...a,children:"Eksempeltag"})},n={render:a=>r.jsx(g,{gap:4,children:["green","blue","red","gray"].map(e=>i.createElement(s,{...a,key:e,colorScheme:e},e))})},t={args:{variant:"solid",colorScheme:"green"},render:a=>r.jsx(g,{gap:4,children:["sm","md","lg"].map(e=>i.createElement(s,{...a,size:e,key:e},e))})},l={args:{colorScheme:"blue"},render:a=>r.jsx(g,{gap:4,children:["subtle","solid","outline"].map(e=>i.createElement(s,{...a,variant:e,key:e},e))})},c={args:{colorScheme:"green",variant:"solid",size:"lg"},render:a=>r.jsx(s,{label:"Green",...a,children:r.jsx(L,{})})};var b,T,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <KvibTag {...args}>Eksempeltag</KvibTag>
}`,...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var S,h,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <KvibHStack gap={4}>
      {["green", "blue", "red", "gray"].map(colorScheme => <KvibTag {...args} key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </KvibTag>)}
    </KvibHStack>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var K,f,x;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    colorScheme: "green"
  },
  render: args => <KvibHStack gap={4}>
      {["sm", "md", "lg"].map(size => <KvibTag {...args} size={size} key={size}>
          {size}
        </KvibTag>)}
    </KvibHStack>
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var j,k,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    colorScheme: "blue"
  },
  render: args => <KvibHStack gap={4}>
      {["subtle", "solid", "outline"].map(variant => <KvibTag {...args} variant={variant} key={variant}>
          {variant}
        </KvibTag>)}
    </KvibHStack>
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var z,C,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    colorScheme: "green",
    variant: "solid",
    size: "lg"
  },
  render: args => <KvibTag label="Green" {...args}>
      <KvibTagCloseButton />
    </KvibTag>
}`,...(H=(C=c.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const q=["Preview","TagColors","TagSizes","TagVariants","TagClose"],N=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,TagClose:c,TagColors:n,TagSizes:t,TagVariants:l,__namedExportsOrder:q,default:M},Symbol.toStringTag,{value:"Module"}));export{o as P,N as T,n as a,t as b,l as c,c as d};
