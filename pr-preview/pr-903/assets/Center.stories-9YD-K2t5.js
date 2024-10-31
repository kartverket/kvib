import{j as r}from"./extends-CwFRzn3r.js";import{C as f}from"./center-Ds0pdlwh.js";import{B as y}from"./box-CwIaBbUI.js";import{f as h}from"./forward-ref-BWI-Phbn.js";import{T as j}from"./text-D14Jyc6W.js";const d=h(function(t,a){const{size:c,centerContent:i=!0,...k}=t,w=i?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return r.jsx(y,{ref:a,boxSize:c,__css:{...w,flexShrink:0,flexGrow:0},...k})});d.displayName="Square";const v=h(function(t,a){const{size:c,...i}=t;return r.jsx(d,{size:c,ref:a,borderRadius:"9999px",...i})});v.displayName="Circle";const z={title:"Komponenter/Center",component:f,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={args:{backgroundColor:"green.50",padding:"6"},render:e=>r.jsx(f,{...e,children:"En boks med sentrert innhold"})},o={args:{size:"40px",backgroundColor:"green.400",color:"white"},render:e=>r.jsx(d,{...e,children:r.jsx(j,{children:"S"})})},s={args:{size:"40px",backgroundColor:"red.400",color:"white"},render:e=>r.jsx(v,{...e,children:r.jsx(j,{children:"C"})})};var l,u,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    backgroundColor: "green.50",
    padding: "6"
  },
  render: args => <KvibCenter {...args}>En boks med sentrert innhold</KvibCenter>
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "40px",
    backgroundColor: "green.400",
    color: "white"
  },
  render: args => <KvibSquare {...args}>
      <Text>S</Text>
    </KvibSquare>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,b,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "40px",
    backgroundColor: "red.400",
    color: "white"
  },
  render: args => <KvibCircle {...args}>
      <Text>C</Text>
    </KvibCircle>
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const _=["Preview","Square","Circle"],O=Object.freeze(Object.defineProperty({__proto__:null,Circle:s,Preview:n,Square:o,__namedExportsOrder:_,default:z},Symbol.toStringTag,{value:"Module"}));export{O as C,n as P,o as S,s as a};
