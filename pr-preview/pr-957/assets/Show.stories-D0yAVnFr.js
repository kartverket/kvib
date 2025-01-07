import{j as e}from"./index-D6_wGsWO.js";import{bz as r,V as u,t as d,B as s}from"./index-BEiQEnoY.js";import{r as p}from"./index-C7I6S4tq.js";const h={title:"Komponenter/Show",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{fallback:{description:"The content to show when the condition is false",table:{type:{summary:"ReactNode"}},control:"text"},when:{description:"If `true`, it will render the `children` prop",table:{type:{summary:"T | null | undefined"}}}}},n={render:o=>{const[t,l]=p.useState(0);return e.jsxs(u,{children:[e.jsxs(d,{onClick:()=>l(t+1),w:"fit-content",children:["Øk telleren: ",t]}),e.jsx(r,{...o,when:t<=5,children:e.jsx(s,{p:4,bg:"green.100",w:"fit-content",children:"Denne boksen vises kun når telleren er mindre enn 5"})}),e.jsx(r,{...o,when:t>5,children:e.jsx(s,{p:4,bg:"red.100",w:"fit-content",children:"Denne boksen vises kun når telleren er større enn 5"})})]})}};var i,c,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [count, setCount] = useState(0);
    return <VStack>
        <Button onClick={() => setCount(count + 1)} w="fit-content">
          Øk telleren: {count}
        </Button>
        <KvibShow {...args} when={count <= 5}>
          <Box p={4} bg="green.100" w="fit-content">
            Denne boksen vises kun når telleren er mindre enn 5
          </Box>
        </KvibShow>
        <KvibShow {...args} when={count > 5}>
          <Box p={4} bg="red.100" w="fit-content">
            Denne boksen vises kun når telleren er større enn 5
          </Box>
        </KvibShow>
      </VStack>;
  }
}`,...(a=(c=n.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const m=["Preview"],S=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:m,default:h},Symbol.toStringTag,{value:"Module"}));export{n as P,S};
