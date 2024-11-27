import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{R as t,a as n}from"./radio-BTMdk4OB.js";import{S as s}from"./stack-IaJndBAh.js";const d={title:"Komponenter/Radio",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{size:{description:"Size of the Radio",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},defaultChecked:{description:"If true, the radio wil be initially checked",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},inputProps:{description:"Additional props forwarded to the input element",table:{type:{summary:""}}},disabled:{description:"If true, the radio will be disabled",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},variant:{description:"The variant of the radio",table:{type:{summary:"string"}},control:{type:"text"}},focusable:{description:"If true, and isDisabled is true, the radio will remain focusable but not interactive",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},checked:{description:"If true, the radio will be set as checked. You need to pass onChange to update its value (since it is controlled)",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},invalid:{description:"If true, the radio will be invalid. Sets 'aria-invalid' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},readOnly:{description:"If true, the radio will be read-only",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},required:{description:"If true, the radio button will be required. Sets 'aria-required' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},onChange:{description:"The function that is ran when the state of the radio changes",table:{type:{summary:"callback()"}},defaultValue:{summary:"none"}},colorPalette:{description:"Color of the radio",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red","orange","purple"],control:{type:"select"}}}},a={args:{onChange:void 0},render:o=>e.jsx(n,{defaultValue:"1",children:e.jsxs(s,{direction:"column",children:[e.jsx(t,{...o,value:"1",children:"En"}),e.jsx(t,{...o,value:"2",children:"To"}),e.jsx(t,{...o,value:"3",children:"Tre"})]})})};var r,l,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    onChange: undefined
  },
  render: (args: RadioProps) => <KvibRadioGroup defaultValue={"1"}>
      <KvibStack direction={"column"}>
        <KvibRadio {...args} value={"1"}>
          En
        </KvibRadio>
        <KvibRadio {...args} value={"2"}>
          To
        </KvibRadio>
        <KvibRadio {...args} value={"3"}>
          Tre
        </KvibRadio>
      </KvibStack>
    </KvibRadioGroup>
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const u=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:a,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{a as P,b as R};
