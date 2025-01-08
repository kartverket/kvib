import{j as a}from"./index-Bqoz-m_F.js";import{bb as n,P as i,bc as o}from"./index-DuafSpvy.js";const d={title:"Komponenter/Radio",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{size:{description:"Size of the Radio",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},defaultChecked:{description:"If true, the radio wil be initially checked",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},disabled:{description:"If true, the radio will be disabled",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},variant:{description:"The variant of the radio",table:{type:{summary:"string"}},control:{type:"text"}},readOnly:{description:"If true, the radio will be read-only",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},onChange:{description:"The function that is ran when the state of the radio changes",table:{type:{summary:"callback()"}},defaultValue:{summary:"none"}},colorPalette:{description:"Color of the radio",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red","orange","purple"],control:{type:"radio"}}}},e={render:s=>a.jsx(n,{defaultValue:"1",...s,children:a.jsxs(i,{gap:"6",children:[a.jsx(o,{value:"1",children:"Valg 1"}),a.jsx(o,{value:"2",children:"Valg 2"})]})})};var r,t,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: RadioGroupProps) => <RadioGroup defaultValue={"1"} {...args}>
      <HStack gap="6">
        <Radio value="1">Valg 1</Radio>
        <Radio value="2">Valg 2</Radio>
      </HStack>
    </RadioGroup>
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const u=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{e as P,c as R};
