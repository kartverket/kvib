import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as u}from"./index-CcKhGcwW.js";import{S as r}from"./show-DskmVrvv.js";import{B as m}from"./Button-DGT8yleQ.js";import{V as p}from"./v-stack-bWf0p04U.js";import{B as s}from"./box-C9nK2UO9.js";const d={title:"Komponenter/Show",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{fallback:{description:"The content to show when the condition is false",table:{type:{summary:"ReactNode"}},control:"text"},when:{table:{type:{summary:"T | null | undefined"}}}}},n={render:o=>{const[t,l]=u.useState(0);return e.jsxs(p,{children:[e.jsxs(m,{onClick:()=>l(t+1),w:"fit-content",children:["Øk telleren: ",t]}),e.jsx(r,{...o,when:t<=5,children:e.jsx(s,{p:4,bg:"green.100",w:"fit-content",children:"Denne boksen vises kun når telleren er større enn 5"})}),e.jsx(r,{...o,when:t>5,children:e.jsx(s,{p:4,bg:"red.100",w:"fit-content",children:"Denne boksen vises kun når telleren er større enn 5"})})]})}};var c,i,a;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [count, setCount] = useState(0);
    return <VStack>
        <Button onClick={() => setCount(count + 1)} w="fit-content">
          Øk telleren: {count}
        </Button>
        <KvibShow {...args} when={count <= 5}>
          <Box p={4} bg="green.100" w="fit-content">
            Denne boksen vises kun når telleren er større enn 5
          </Box>
        </KvibShow>
        <KvibShow {...args} when={count > 5}>
          <Box p={4} bg="red.100" w="fit-content">
            Denne boksen vises kun når telleren er større enn 5
          </Box>
        </KvibShow>
      </VStack>;
  }
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const h=["Preview"],g=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:h,default:d},Symbol.toStringTag,{value:"Module"}));export{n as P,g as S};
