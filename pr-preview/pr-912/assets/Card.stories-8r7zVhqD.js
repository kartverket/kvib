import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{C as n,a as d}from"./card-sQbwxR_z.js";import{T as i}from"./text-DJW8V014.js";const m={title:"Komponenter/Card",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},args:{variant:"elevated",size:"md"},argTypes:{size:{description:"Size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the component",table:{type:{summary:"elevated | outline | subtle"},defaultValue:{summary:"elevated"}},options:["elevated","outline","subtle"],control:"radio"}}},e={parameters:{docs:{canvas:{sourceState:"shown"}}},render:s=>r.jsx(n,{...s,children:r.jsx(d,{children:r.jsx(i,{children:"Se alle endringer på eiendomsgrenser i år."})})})};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibCard {...args}>
      <KvibCardBody>
        <KvibText>Se alle endringer på eiendomsgrenser i år.</KvibText>
      </KvibCardBody>
    </KvibCard>
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const l=["Preview"],v=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:m},Symbol.toStringTag,{value:"Module"}));export{v as C,e as P};