import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as i}from"./index-CcKhGcwW.js";import{S as a}from"./show-DskmVrvv.js";import{B as u}from"./Button-Dxbqg6-Q.js";import{T as m}from"./text-DJW8V014.js";import{B as p}from"./box-C9nK2UO9.js";const d={title:"Komponenter/Show",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{fallback:{description:"The content to show when the condition is false",table:{type:{summary:"ReactNode"}},control:"text"},when:{table:{type:{summary:"T | null | undefined"}}}}},t={render:l=>{const[n,c]=i.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>c(n+1),children:"Øk telleren"}),e.jsxs(m,{children:["Teller: ",n]}),e.jsx(a,{...l,when:n>5,children:e.jsx(p,{p:4,bg:"yellow.50",children:"Denne teksten vises kun når telleren er større enn 5"})})]})}};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [count, setCount] = useState(0);
    return <>
        <Button onClick={() => setCount(count + 1)}>Øk telleren</Button>
        <Text>Teller: {count}</Text>
        <KvibShow {...args} when={count > 5}>
          <Box p={4} bg="yellow.50">
            Denne teksten vises kun når telleren er større enn 5
          </Box>
        </KvibShow>
      </>;
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const h=["Preview"],T=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:h,default:d},Symbol.toStringTag,{value:"Module"}));export{t as P,T as S};
