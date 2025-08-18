import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{b4 as a,b5 as i,b6 as m}from"./index-6aFi0H-u.js";const l={title:"Komponenter/Stat",component:a,parameters:{docs:{story:{inline:!0}}},argTypes:{size:{description:"The size of the component",table:{type:{summary:" sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}};a.displayName="Stat";i.displayName="StatLabel";m.displayName="StatNumber";const e={render:n=>t.jsxs(a,{...n,children:[t.jsx(i,{children:"Label"}),t.jsx(m,{children:"3200"})]})};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: StatProps) => <KvibStat {...args}>
      <KvibStatLabel>Label</KvibStatLabel>
      <KvibStatNumber>3200</KvibStatNumber>
    </KvibStat>
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const p=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,c as S};
