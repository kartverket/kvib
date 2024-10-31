import{j as e}from"./extends-CwFRzn3r.js";import{a as r,R as l}from"./radio-Cpsvm0ym.js";import{S as s}from"./stack-BdCvkUuU.js";const K={title:"Komponenter/Radio",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{size:{description:"Size of the Radio",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},spacing:{description:"The space between the radio icon and its text",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},aria_describedby:{description:"Refers to the id of the radio's label",table:{type:{summary:"string"},control:{type:"boolean"}}},id:{description:"Refers to the id of the radio",table:{type:{summary:"string"},control:{type:"text"}}},defaultChecked:{description:"If true, the radio wil be initially checked",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},inputProps:{description:"Additional props forwarded to the input element",table:{type:{summary:""}}},isDisabled:{description:"If true, the radio will be disabled",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},variant:{description:"The variant of the radio",table:{type:{summary:"string"}},control:{type:"text"}},isFocusable:{description:"If true, and isDisabled is true, the radio will remain focusable but not interactive",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isChecked:{description:"If true, the radio will be set as checked. You need to pass onChange to update its value (since it is controlled)",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isInvalid:{description:"If true, the radio will be invalid. Sets 'aria-invalid' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isReadOnly:{description:"If true, the radio will be read-only",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isRequired:{description:"If true, the radio button will be required. Sets 'aria-required' to true",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},name:{description:"The name of the input field in a radio",table:{type:{summary:"string"}},control:{type:"text"}},onChange:{description:"The function that is ran when the state of the radio changes",table:{type:{summary:"callback()"}},defaultValue:{summary:"none"}},colorScheme:{description:"Color of the radio",table:{type:{summary:"green | blue | gray | red | orange | purple"},defaultValue:{summary:"Blue"}},options:["green","blue","gray","red","orange","purple"],control:{type:"select"}}}},o={args:{onChange:void 0},render:a=>e.jsx(l,{defaultValue:"1",children:e.jsxs(s,{direction:"row",children:[e.jsx(r,{...a,value:"1",children:"En"}),e.jsx(r,{...a,value:"2",children:"To"}),e.jsx(r,{...a,value:"3",children:"Tre"})]})})},i={args:{size:"lg"},render:a=>e.jsx(l,{defaultValue:"green",children:e.jsxs(s,{direction:"row",children:[e.jsx(r,{...a,value:"green",colorScheme:"green",children:"Grønn"}),e.jsx(r,{...a,value:"blue",colorScheme:"blue",children:"Blå"})]})})},n={args:{colorScheme:"green"},render:a=>e.jsx(l,{defaultValue:"3",children:e.jsxs(s,{children:[e.jsx(r,{...a,size:"sm",value:"1",children:"sm"}),e.jsx(r,{...a,size:"md",value:"2",children:"md"}),e.jsx(r,{...a,size:"lg",value:"3",children:"lg"})]})})},t={args:{onChange:void 0},render:a=>e.jsx(l,{defaultValue:"disabled",children:e.jsxs(s,{direction:"row",children:[e.jsx(r,{...a,value:"1",children:"Vanlig"}),e.jsx(r,{...a,value:"disabled",isDisabled:!0,children:"Disabled"}),e.jsx(r,{...a,value:"3",isInvalid:!0,children:"Invalid"})]})})};var d,u,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    onChange: undefined
  },
  render: args => <KvibRadioGroup defaultValue={"1"}>
      <KvibStack direction={"row"}>
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
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,b,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: args => <KvibRadioGroup defaultValue="green">
      <KvibStack direction={"row"}>
        <KvibRadio {...args} value={"green"} colorScheme={"green"}>
          Grønn
        </KvibRadio>
        <KvibRadio {...args} value={"blue"} colorScheme={"blue"}>
          Blå
        </KvibRadio>
      </KvibStack>
    </KvibRadioGroup>
}`,...(p=(b=i.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var v,y,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    colorScheme: "green"
  },
  render: args => <KvibRadioGroup defaultValue="3">
      <KvibStack>
        <KvibRadio {...args} size={"sm"} value="1">
          sm
        </KvibRadio>
        <KvibRadio {...args} size={"md"} value="2">
          md
        </KvibRadio>
        <KvibRadio {...args} size={"lg"} value="3">
          lg
        </KvibRadio>
      </KvibStack>
    </KvibRadioGroup>
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,f,R;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onChange: undefined
  },
  render: args => <KvibRadioGroup defaultValue={"disabled"}>
      <KvibStack direction={"row"}>
        <KvibRadio {...args} value={"1"}>
          Vanlig
        </KvibRadio>
        <KvibRadio {...args} value={"disabled"} isDisabled>
          Disabled
        </KvibRadio>
        <KvibRadio {...args} value={"3"} isInvalid>
          Invalid
        </KvibRadio>
      </KvibStack>
    </KvibRadioGroup>
}`,...(R=(f=t.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};const S=["Preview","Color","Size","State"],w=Object.freeze(Object.defineProperty({__proto__:null,Color:i,Preview:o,Size:n,State:t,__namedExportsOrder:S,default:K},Symbol.toStringTag,{value:"Module"}));export{i as C,o as P,w as R,n as S,t as a};
