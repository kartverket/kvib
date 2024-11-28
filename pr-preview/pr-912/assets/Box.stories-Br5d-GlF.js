import{j as s}from"./jsx-runtime-CQsLhzk5.js";import{B as a}from"./index-BrYXhiCR.js";const m={title:"Komponenter/Box",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}}},r={args:{backgroundColor:"green.50"},render:e=>s.jsx(a,{...e,children:"En veldig enkel boks"})},o={args:{bg:"blue.50",borderRadius:"md",p:"20px",color:"green.900"},render:e=>s.jsx(a,{...e,children:"En box med bruk av diverse props"})},n={args:{_hover:{backgroundColor:"yellow.200"},as:"a",backgroundColor:"yellow.50",border:"1px solid",borderColor:"gray.200",display:"block",href:"https://www.youtube.com/watch?v=Zvz6kFVJpwo&list=PLcU9Unqugm6YuG5NM_av57pJajVhgaV7w",padding:"2",width:"fit-content"},render:e=>s.jsx(a,{...e,children:"En lenke til en video"})};var t,d,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    backgroundColor: "green.50"
  },
  render: args => <KvibBox {...args}>En veldig enkel boks</KvibBox>
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,i,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    bg: "blue.50",
    borderRadius: "md",
    p: "20px",
    color: "green.900"
  },
  render: args => <KvibBox {...args}>En box med bruk av diverse props</KvibBox>
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var g,b,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    _hover: {
      backgroundColor: "yellow.200"
    },
    as: "a",
    backgroundColor: "yellow.50",
    border: "1px solid",
    borderColor: "gray.200",
    display: "block",
    href: "https://www.youtube.com/watch?v=Zvz6kFVJpwo&list=PLcU9Unqugm6YuG5NM_av57pJajVhgaV7w",
    padding: "2",
    width: "fit-content"
  },
  render: args => <KvibBox {...args}>En lenke til en video</KvibBox>
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const x=["Preview","BoxExample","BoxAsLink"],w=Object.freeze(Object.defineProperty({__proto__:null,BoxAsLink:n,BoxExample:o,Preview:r,__namedExportsOrder:x,default:m},Symbol.toStringTag,{value:"Module"}));export{w as B,o as a,n as b};
