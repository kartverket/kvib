import{j as n}from"./jsx-runtime-DQFEoQHt.js";import{b0 as o,B as c,b1 as l}from"./index-DyEURmN4.js";import{r as h}from"./index-CbFAwPTn.js";const d={title:"Komponenter/Show",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{fallback:{description:"The content to show when the condition is false",table:{type:{summary:"ReactNode"}},control:"text"},when:{description:"If `true`, it will render the `children` prop",table:{type:{summary:"T | null | undefined"}}}}};o.displayName="Show";c.displayName="Button";l.displayName="VStack";const e={render:r=>{const[t,u]=h.useState(1);return n.jsxs(l,{children:[n.jsxs(c,{onClick:()=>u(t+1),w:"fit-content",colorPalette:r.colorPalette,children:["Value: ",t]}),n.jsx(o,{...r,when:t<=3,children:"Content visible when 3 or less"}),n.jsx(o,{...r,when:t>3,children:"Content visible when more than 3"})]})}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [count, setCount] = useState(1);
    return <VStack>
        <Button onClick={() => setCount(count + 1)} w="fit-content" colorPalette={args.colorPalette}>
          Value: {count}
        </Button>
        <KvibShow {...args} when={count <= 3}>
          Content visible when 3 or less
        </KvibShow>
        <KvibShow {...args} when={count > 3}>
          Content visible when more than 3
        </KvibShow>
      </VStack>;
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const m=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{e as P,b as S};
