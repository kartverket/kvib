import{bH as a,j as t,bI as n,bJ as i}from"./iframe-B_C8pV-B.js";const l={title:"Komponenter/Stat",component:a,parameters:{docs:{story:{inline:!0}}},argTypes:{size:{description:"The size of the component",table:{type:{summary:" sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}};a.displayName="Stat";n.displayName="StatLabel";i.displayName="StatNumber";const e={render:m=>t.jsxs(a,{...m,children:[t.jsx(n,{children:"Label"}),t.jsx(i,{children:"3200"})]})},d=["Preview"];var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: StatProps) => <KvibStat {...args}>
      <KvibStatLabel>Label</KvibStatLabel>
      <KvibStatNumber>3200</KvibStatNumber>
    </KvibStat>
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const b=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,b as S};
