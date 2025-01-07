import{j as e}from"./index-D6_wGsWO.js";import{bE as s,bF as i,bG as m}from"./index-BEiQEnoY.js";const l={title:"Komponenter/Stat",component:s,parameters:{docs:{story:{inline:!0}}},argTypes:{size:{description:"The size of the component",table:{type:{summary:" sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},t={render:n=>e.jsxs(s,{...n,children:[e.jsx(i,{children:"Utgifter"}),e.jsx(m,{children:"3200kr"})]})};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: StatProps) => <KvibStat {...args}>
      <KvibStatLabel>Utgifter</KvibStatLabel>
      <KvibStatNumber>3200kr</KvibStatNumber>
    </KvibStat>
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const p=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{t as P,b as S};
