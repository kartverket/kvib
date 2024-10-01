import{j as r}from"./extends-CwFRzn3r.js";import{r as g}from"./index-BwDkhjyp.js";import{T as s,a as z,b as E}from"./chunk-RPO2WXNL-DTSHIQcn.js";import{H as l}from"./chunk-3ASUQ6PA-DZH9lOZq.js";const H={title:"Datavisning/Tag",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{variant:{description:"The variant of the Tag",table:{type:{summary:"subtle | solid | outline"},defaultValue:{summary:"subtle"}},options:["subtle","solid","outline"],control:"radio"},colorScheme:{description:"The visual color appearance of the Tag",table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the Tag",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},o={args:{},render:a=>r.jsx(s,{...a,children:"Eksempeltag"})},n={args:{},render:a=>r.jsx(l,{spacing:4,children:["green","blue","red","gray"].map(e=>g.createElement(s,{...a,key:e,colorScheme:e},e))})},t={args:{variant:"solid",colorScheme:"green"},render:a=>r.jsx(l,{spacing:4,children:["sm","md","lg"].map(e=>g.createElement(s,{...a,size:e,key:e},e))})},i={args:{colorScheme:"blue"},render:a=>r.jsx(l,{spacing:4,children:["subtle","solid","outline"].map(e=>g.createElement(s,{...a,variant:e,key:e},e))})},c={args:{colorScheme:"green",variant:"solid",size:"lg"},render:a=>r.jsxs(s,{...a,children:[r.jsx(z,{children:"Green"}),r.jsx(E,{})]})};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibTag {...args}>Eksempeltag</KvibTag>
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,b,T;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibHStack spacing={4}>
      {["green", "blue", "red", "gray"].map(colorScheme => <KvibTag {...args} key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </KvibTag>)}
    </KvibHStack>
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var v,S,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    colorScheme: "green"
  },
  render: args => <KvibHStack spacing={4}>
      {["sm", "md", "lg"].map(size => <KvibTag {...args} size={size} key={size}>
          {size}
        </KvibTag>)}
    </KvibHStack>
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var h,K,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    colorScheme: "blue"
  },
  render: args => <KvibHStack spacing={4}>
      {["subtle", "solid", "outline"].map(variant => <KvibTag {...args} variant={variant} key={variant}>
          {variant}
        </KvibTag>)}
    </KvibHStack>
}`,...(k=(K=i.parameters)==null?void 0:K.docs)==null?void 0:k.source}}};var f,x,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    colorScheme: "green",
    variant: "solid",
    size: "lg"
  },
  render: args => <KvibTag {...args}>
      <KvibTagLabel>Green</KvibTagLabel>
      <KvibTagCloseButton />
    </KvibTag>
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const C=["Tag","TagColors","TagSizes","TagVariants","TagClose"],B=Object.freeze(Object.defineProperty({__proto__:null,Tag:o,TagClose:c,TagColors:n,TagSizes:t,TagVariants:i,__namedExportsOrder:C,default:H},Symbol.toStringTag,{value:"Module"}));export{B as T,n as a,t as b,i as c,c as d,o as e};
