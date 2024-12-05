import{j as a}from"./index-D6_wGsWO.js";import{aS as i,H as s,aT as t}from"./index-D3uUSTz6.js";const d={title:"Komponenter/Radio",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{size:{description:"Size of the Radio",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},defaultChecked:{description:"If true, the radio wil be initially checked",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},inputProps:{description:"Additional props forwarded to the input element",table:{type:{summary:""}}},disabled:{description:"If true, the radio will be disabled",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},variant:{description:"The variant of the radio",table:{type:{summary:"string"}},control:{type:"text"}},focusable:{description:"If true, and isDisabled is true, the radio will remain focusable but not interactive",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},checked:{description:"If true, the radio will be set as checked. You need to pass onChange to update its value (since it is controlled)",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},invalid:{description:"If true, the radio will be invalid. Sets 'aria-invalid' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},readOnly:{description:"If true, the radio will be read-only",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},required:{description:"If true, the radio button will be required. Sets 'aria-required' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},onChange:{description:"The function that is ran when the state of the radio changes",table:{type:{summary:"callback()"}},defaultValue:{summary:"none"}},colorPalette:{description:"Color of the radio",table:{type:{summary:"green | blue | gray | red"}},defaultValue:{summary:"green"},options:["green","blue","gray","red","orange","purple"],control:{type:"select"}}}},e={render:n=>a.jsx(i,{defaultValue:"1",...n,children:a.jsxs(s,{gap:"6",children:[a.jsx(t,{colorPalette:"blue",value:"1",children:"Valg 1"}),a.jsx(t,{value:"2",children:"Valg 2"})]})})};var o,r,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: RadioGroupProps) => <RadioGroup defaultValue={"1"} {...args}>
      <HStack gap="6">
        <Radio colorPalette="blue" value="1">
          Valg 1
        </Radio>
        <Radio value="2">Valg 2</Radio>
      </HStack>
    </RadioGroup>
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const u=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{e as P,c as R};
