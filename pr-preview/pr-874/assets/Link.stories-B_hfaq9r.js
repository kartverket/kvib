import{j as r}from"./extends-CwFRzn3r.js";import{L as n}from"./Link-qONIDx3u.js";import{V as u}from"./chunk-NTCQBYKE-BJzF3cNd.js";const b={title:"Navigasjon/Link",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{children:{description:"This is the linktext",table:{type:{summary:"string"}},control:"text"},isExternal:{description:"If true, an icon will be included.",table:{type:{summary:Boolean},defaultValue:{summary:!1}},control:"boolean"},href:{description:"This is the link.",table:{type:{summary:"string"}},control:"text"}}},t={args:{children:"Dette er en lenke",href:"/?path=/"},render:e=>r.jsx(n,{...e,children:e.children})},s={args:{colorScheme:"blue"},render:e=>r.jsxs(u,{children:[r.jsx(n,{href:"/?path=/",...e,children:"Dette er en intern lenke"}),r.jsx(n,{isExternal:!0,href:"https://chakra-ui.com/docs/components",...e,children:"Dette er en ekstern lenke"})]})},a={args:{children:"Dette er en lenke",href:"/?path=/"},render:e=>r.jsxs(u,{children:[r.jsx(n,{...e,children:e.children}),r.jsx(n,{colorScheme:"blue",...e,children:e.children})]})};var i,o,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Dette er en lenke",
    href: "/?path=/"
  },
  render: args => <KvibLink {...args}>{args.children}</KvibLink>
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,h,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    colorScheme: "blue"
  },
  render: args => <VStack>
      <KvibLink href="/?path=/" {...args}>
        Dette er en intern lenke
      </KvibLink>
      <KvibLink isExternal href="https://chakra-ui.com/docs/components" {...args}>
        Dette er en ekstern lenke
      </KvibLink>
    </VStack>
}`,...(d=(h=s.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var m,p,k;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Dette er en lenke",
    href: "/?path=/"
  },
  render: args => <VStack>
      <KvibLink {...args}>{args.children}</KvibLink>
      <KvibLink colorScheme="blue" {...args}>
        {args.children}
      </KvibLink>
    </VStack>
}`,...(k=(p=a.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const g=["Link","LinkStates","LinkColorscheme"],x=Object.freeze(Object.defineProperty({__proto__:null,Link:t,LinkColorscheme:a,LinkStates:s,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{x as L,a,t as b};
