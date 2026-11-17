import{bC as o,bf as h,j as n,aG as i,v as l}from"./iframe-B_C8pV-B.js";const d={title:"Komponenter/Show",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{fallback:{description:"The content to show when the condition is false",table:{type:{summary:"ReactNode"}},control:"text"},when:{description:"If `true`, it will render the `children` prop",table:{type:{summary:"T | null | undefined"}}}}};o.displayName="Show";l.displayName="Button";i.displayName="VStack";const e={render:r=>{const[t,u]=h.useState(1);return n.jsxs(i,{children:[n.jsxs(l,{onClick:()=>u(t+1),w:"fit-content",colorPalette:r.colorPalette,children:["Value: ",t]}),n.jsx(o,{...r,when:t<=3,children:"Content visible when 3 or less"}),n.jsx(o,{...r,when:t>3,children:"Content visible when more than 3"})]})}},p=["Preview"];var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const m=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{e as P,m as S};
