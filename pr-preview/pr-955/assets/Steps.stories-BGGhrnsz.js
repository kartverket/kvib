import{j as e}from"./index-D6_wGsWO.js";import{bV as d,bW as l,bX as r,bY as n,bZ as c,b_ as m,b$ as x,t as o,c0 as S}from"./index-BQkUhusG.js";const u={title:"Komponenter/Steps",component:d,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{children:{description:"The children of the stepper. Must be Step components",table:{type:{summary:"ReactElement[]"}}}}},g=({...s})=>e.jsxs(d,{w:"16rem",defaultValue:1,count:2,...s,children:[e.jsxs(l,{children:[e.jsx(r,{index:0,title:"Steg 1"}),e.jsx(r,{index:1,title:"Steg 2"})]}),e.jsx(n,{index:0,children:"Innhold i første steg"}),e.jsx(n,{index:1,children:"Annet innhold i andre steg"}),e.jsx(c,{children:"Ferdig med alle stegene"}),e.jsxs(m,{children:[e.jsx(x,{asChild:!0,children:e.jsx(o,{size:"sm",children:"Forrige"})}),e.jsx(S,{asChild:!0,children:e.jsx(o,{size:"sm",children:"Neste"})})]})]}),t={tags:["skip-test"],render:s=>e.jsx(g,{...s})};var a,i,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ["skip-test"],
  render: (args: StepsProps) => <StepperExample {...args} />
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const h=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:h,default:u},Symbol.toStringTag,{value:"Module"}));export{t as P,f as S};
