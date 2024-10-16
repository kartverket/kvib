import{j as r}from"./extends-CwFRzn3r.js";import{C as f}from"./center-D672Tu8u.js";import{B as z}from"./box-B7h7acUJ.js";import{f as h}from"./forward-ref-BWI-Phbn.js";import{T as j}from"./text-rUwQV1v4.js";const d=h(function(t,a){const{size:c,centerContent:i=!0,...y}=t,v=i?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return r.jsx(z,{ref:a,boxSize:c,__css:{...v,flexShrink:0,flexGrow:0},...y})});d.displayName="Square";const k=h(function(t,a){const{size:c,...i}=t;return r.jsx(d,{size:c,ref:a,borderRadius:"9999px",...i})});k.displayName="Circle";const _={title:"Layout/Center",component:f,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={args:{backgroundColor:"green.50",padding:"6"},render:e=>r.jsx(f,{...e,children:"En boks med sentrert innhold"})},o={args:{size:"40px",backgroundColor:"green.400",color:"white"},render:e=>r.jsx(d,{...e,children:r.jsx(j,{children:"S"})})},s={args:{size:"40px",backgroundColor:"red.400",color:"white"},render:e=>r.jsx(k,{...e,children:r.jsx(j,{children:"C"})})};var l,u,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const q=["Center","Square","Circle"],R=Object.freeze(Object.defineProperty({__proto__:null,Center:n,Circle:s,Square:o,__namedExportsOrder:q,default:_},Symbol.toStringTag,{value:"Module"}));export{R as C,o as S,n as a,s as b};
