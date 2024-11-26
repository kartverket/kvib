import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{r as i}from"./index-CcKhGcwW.js";import{u as q}from"./create-slot-recipe-context-CYF_0Bn9.js";import{T as A,a as D,b as F,c as T,d as I}from"./tag-BSWy3RGp.js";import{C as J}from"./close-button-C8_g2cP4.js";import{H as g}from"./h-stack-CjVo9nnl.js";const s=i.forwardRef(function(e,P){const{startElement:m,endElement:d,onClose:p,closable:V=!!p,children:w,...O}=e,u=q({key:"tag"})(e);console.log("Tag",u);const{root:B,startElement:G,label:L,endElement:b,closeTrigger:M}=u;return r.jsxs(A,{ref:P,css:B,...O,children:[m&&r.jsx(D,{css:G,children:m}),r.jsx(F,{css:L,children:w}),d&&r.jsx(T,{css:b,children:d}),V&&r.jsx(T,{css:b,children:r.jsx(I,{onClick:p,css:M})})]})}),N={title:"Komponenter/Tag",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the Tag",table:{type:{summary:"subtle | solid | outline"},defaultValue:{summary:"subtle"}},options:["subtle","solid","outline"],control:"radio"},colorScheme:{description:"The visual color appearance of the Tag",table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the Tag",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},o={render:a=>r.jsx(s,{...a,children:"Eksempeltag"})},t={render:a=>r.jsx(g,{gap:4,children:["green","blue","red","gray"].map(e=>i.createElement(s,{...a,key:e,colorScheme:e},e))})},n={args:{variant:"solid",colorScheme:"green"},render:a=>r.jsx(g,{gap:4,children:["sm","md","lg"].map(e=>i.createElement(s,{...a,size:e,key:e},e))})},l={args:{colorScheme:"blue"},render:a=>r.jsx(g,{gap:4,children:["subtle","solid","outline"].map(e=>i.createElement(s,{...a,variant:e,key:e},e))})},c={args:{colorScheme:"green",variant:"solid",size:"lg"},render:a=>r.jsx(s,{label:"Green",...a,children:r.jsx(J,{})})};var S,v,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <KvibTag {...args}>Eksempeltag</KvibTag>
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,f,K;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <KvibHStack gap={4}>
      {["green", "blue", "red", "gray"].map(colorScheme => <KvibTag {...args} key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </KvibTag>)}
    </KvibHStack>
}`,...(K=(f=t.parameters)==null?void 0:f.docs)==null?void 0:K.source}}};var k,x,E;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    colorScheme: "green"
  },
  render: args => <KvibHStack gap={4}>
      {["sm", "md", "lg"].map(size => <KvibTag {...args} size={size} key={size}>
          {size}
        </KvibTag>)}
    </KvibHStack>
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var j,z,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    colorScheme: "blue"
  },
  render: args => <KvibHStack gap={4}>
      {["subtle", "solid", "outline"].map(variant => <KvibTag {...args} variant={variant} key={variant}>
          {variant}
        </KvibTag>)}
    </KvibHStack>
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var H,R,_;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    colorScheme: "green",
    variant: "solid",
    size: "lg"
  },
  render: args => <KvibTag label="Green" {...args}>
      <KvibTagCloseButton />
    </KvibTag>
}`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const Q=["Preview","TagColors","TagSizes","TagVariants","TagClose"],re=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,TagClose:c,TagColors:t,TagSizes:n,TagVariants:l,__namedExportsOrder:Q,default:N},Symbol.toStringTag,{value:"Module"}));export{o as P,re as T,t as a,n as b,l as c,c as d};
