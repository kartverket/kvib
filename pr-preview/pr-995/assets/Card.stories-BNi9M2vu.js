import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{C as r,a as d}from"./card-OfHgEyTV.js";const i={title:"Komponenter/Card",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{size:{description:"Size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the component",table:{type:{summary:"elevated | outline | subtle"},defaultValue:{summary:"elevated"}},options:["elevated","outline","subtle"],control:"radio"}}};r.displayName="Card";d.displayName="CardBody";const e={render:n=>t.jsx(r,{...n,children:t.jsx(d,{children:"Card content"})})};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <KvibCard {...args}>
      <KvibCardBody>Card content</KvibCardBody>
    </KvibCard>
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{c as C,e as P};
