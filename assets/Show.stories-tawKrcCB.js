import{j as e}from"./index-D6_wGsWO.js";import{w as r,V as u,t as d,B as s}from"./index-C4Tll0EB.js";import{r as p}from"./index-C7I6S4tq.js";const w={title:"Komponenter/Show",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{fallback:{description:"The content to show when the condition is false",table:{type:{summary:"ReactNode"}},control:"text"},when:{table:{type:{summary:"T | null | undefined"}}}}},n={render:o=>{const[t,l]=p.useState(0);return e.jsxs(u,{children:[e.jsxs(d,{onClick:()=>l(t+1),w:"fit-content",children:["Øk telleren: ",t]}),e.jsx(r,{...o,when:t<=5,children:e.jsx(s,{p:4,bg:"green.100",w:"fit-content",children:"Denne boksen vises kun når telleren er større enn 5"})}),e.jsx(r,{...o,when:t>5,children:e.jsx(s,{p:4,bg:"red.100",w:"fit-content",children:"Denne boksen vises kun når telleren er større enn 5"})})]})}};var c,a,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const h=["Preview"],x=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:h,default:w},Symbol.toStringTag,{value:"Module"}));export{n as P,x as S};
