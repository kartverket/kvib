import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{I as h}from"./toggle-tip-K2HiigeD.js";import{r as c}from"./index-CcKhGcwW.js";import{S as T,a as g,F as w,b as L,c as P,d as N,e as R}from"./stat-DGy9Wjvm.js";import{B as j}from"./badge-a-vhsMzP.js";import{G as U}from"./group-DiEFhqFk.js";import{B as k}from"./box-C9nK2UO9.js";const S=c.forwardRef(function(e,a){const{info:n,children:l,...d}=e;return t.jsxs(T,{...d,ref:a,children:[l,n&&t.jsx(h,{children:n})]})}),b=c.forwardRef(function(e,a){const{value:n,formatOptions:l,children:d,...K}=e;return t.jsx(g,{...K,ref:a,children:d||n!=null&&t.jsx(w,{value:n,...l})})}),B=c.forwardRef(function(e,a){return t.jsxs(j,{colorPalette:"green",gap:"0",...e,ref:a,children:[t.jsx(L,{}),e.children]})}),F=c.forwardRef(function(e,a){return t.jsxs(j,{colorPalette:"red",gap:"0",...e,ref:a,children:[t.jsx(P,{}),e.children]})}),i=N,I=R,_={title:"Komponenter/Stat",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},o={render:r=>t.jsx(k,{children:t.jsxs(i,{...r,children:[t.jsx(S,{children:"Utgifter"}),t.jsx(b,{children:"3200kr"}),t.jsx(I,{children:"Feb 12 - Feb 28"})]})})},s={render:r=>t.jsxs(U,{children:[t.jsxs(i,{...r,children:[t.jsx(S,{children:"Sendt"}),t.jsx(b,{children:"345,670"}),t.jsx(B,{variant:"plain",px:"0",children:"23.36%"})]}),t.jsxs(i,{...r,children:[t.jsx(S,{children:"Klikk"}),t.jsx(b,{children:"45"}),t.jsx(F,{variant:"plain",px:"0",children:"9.05%"})]})]})};var p,x,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: StatProps) => <Box>
      <KvibStat {...args}>
        <KvibStatLabel>Utgifter</KvibStatLabel>
        <KvibStatNumber>3200kr</KvibStatNumber>
        <KvibStatHelpText>Feb 12 - Feb 28</KvibStatHelpText>
      </KvibStat>
    </Box>
}`,...(m=(x=o.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var u,v,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: StatProps) => <KvibStatGroup>
      <KvibStat {...args}>
        <KvibStatLabel>Sendt</KvibStatLabel>
        <KvibStatNumber>345,670</KvibStatNumber>
        <StatUpTrend variant="plain" px="0">
          23.36%
        </StatUpTrend>
      </KvibStat>

      <KvibStat {...args}>
        <KvibStatLabel>Klikk</KvibStatLabel>
        <KvibStatNumber>45</KvibStatNumber>
        <StatDownTrend variant="plain" px="0">
          9.05%
        </StatDownTrend>
      </KvibStat>
    </KvibStatGroup>
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const D=["Preview","StatIndicator"],z=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,StatIndicator:s,__namedExportsOrder:D,default:_},Symbol.toStringTag,{value:"Module"}));export{o as P,z as S,s as a};
