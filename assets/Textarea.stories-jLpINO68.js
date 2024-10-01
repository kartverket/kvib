import{j as e}from"./extends-CwFRzn3r.js";import{r as k}from"./index-BwDkhjyp.js";import{T as r}from"./chunk-4IH3O7BJ-DOzDZvKc.js";import{S as c}from"./chunk-ZHMYA64R-V_96TD_T.js";import{T as F}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{R as _,a as m}from"./chunk-RDF2AYID-DCZN3YCE.js";const q={title:"Skjemaelementer/Textarea",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{errorBorderColor:{description:"The border color when the textarea is invalid. Use color keys in `theme.colors`",table:{type:{summary:"string"}},control:"text"},focusBorderColor:{description:"The border color when the textarea is focused. Use color keys in `theme.colors`",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"If true, the form control will be disabled. This has 2 side effects: - The FormLabel will have `data-disabled` attribute - The form element (e.g, Input) will be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isInvalid:{description:"If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isReadOnly:{description:"If true, the form control will be readonly",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isRequired:{description:"If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},size:{description:"The size of the Textarea",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:"radio"},variant:{description:"The variant of the Textarea",table:{type:{summary:"'outline' | 'flushed' | 'filled' | 'unstyled'"},defaultValue:{summary:"outline"}},options:["outline","flushed","filled","unstyled"],control:"radio"}}},s={args:{placeholder:"Dette er et eksempel på placeholder"},render:a=>e.jsx(r,{...a})},L=({...a})=>{let[d,C]=k.useState(""),E=O=>{let D=O.target.value;C(D)};return e.jsxs(e.Fragment,{children:[e.jsxs(F,{mb:"8px",children:["Value: ",d]}),e.jsx(r,{...a,value:d,onChange:E})]})},t={args:{placeholder:"Placeholder",size:"sm"},render:a=>e.jsx(L,{...a})},P=()=>{const[a,d]=k.useState("horizontal");return e.jsxs(e.Fragment,{children:[e.jsx(_,{defaultValue:a,onChange:d,mb:6,children:e.jsxs(c,{direction:"row",spacing:5,children:[e.jsx(m,{value:"horizontal",children:"Horizontal"}),e.jsx(m,{value:"vertical",children:"Vertical"}),e.jsx(m,{value:"none",children:"None"})]})}),e.jsx(r,{placeholder:"Here is a sample placeholder",size:"sm",resize:a})]})},l={render:()=>e.jsx(P,{})},o={args:{},render:a=>e.jsxs(c,{children:[e.jsx(r,{...a,size:"xs",placeholder:"xs"}),e.jsx(r,{...a,size:"sm",placeholder:"sm"}),e.jsx(r,{...a,size:"md",placeholder:"md"}),e.jsx(r,{...a,size:"lg",placeholder:"lg"})]})},i={args:{},render:a=>e.jsxs(c,{children:[e.jsx(r,{...a,variant:"outline",placeholder:"outline"}),e.jsx(r,{...a,variant:"filled",placeholder:"filled"}),e.jsx(r,{...a,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{...a,variant:"unstyled",placeholder:"unstyled"})]})},n={render:()=>e.jsxs(c,{children:[e.jsx(r,{placeholder:"isInvalid",isInvalid:!0}),e.jsx(r,{placeholder:"isReadOnly",isReadOnly:!0}),e.jsx(r,{placeholder:"isDisabled",isDisabled:!0})]})};var u,p,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Dette er et eksempel på placeholder"
  },
  render: args => <KvibTextarea {...args} />
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder",
    size: "sm"
  },
  render: args => <TextAreaControlledExample {...args} />
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var T,v,g;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TextareaResizeExample />
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,j,z;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack>
      <KvibTextarea {...args} size="xs" placeholder="xs" />
      <KvibTextarea {...args} size="sm" placeholder="sm" />
      <KvibTextarea {...args} size="md" placeholder="md" />
      <KvibTextarea {...args} size="lg" placeholder="lg" />
    </KvibStack>
}`,...(z=(j=o.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var S,K,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack>
      <KvibTextarea {...args} variant="outline" placeholder="outline" />
      <KvibTextarea {...args} variant="filled" placeholder="filled" />
      <KvibTextarea {...args} variant="flushed" placeholder="flushed" />
      <KvibTextarea {...args} variant="unstyled" placeholder="unstyled" />
    </KvibStack>
}`,...(w=(K=i.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var R,I,V;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Stack>
      <KvibTextarea placeholder="isInvalid" isInvalid />
      <KvibTextarea placeholder="isReadOnly" isReadOnly />
      <KvibTextarea placeholder="isDisabled" isDisabled />
    </Stack>
}`,...(V=(I=n.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const A=["Textarea","TextareaControlled","TextareaResize","TextareaSizes","TextareaVariants","TextareaStates"],$=Object.freeze(Object.defineProperty({__proto__:null,Textarea:s,TextareaControlled:t,TextareaResize:l,TextareaSizes:o,TextareaStates:n,TextareaVariants:i,__namedExportsOrder:A,default:q},Symbol.toStringTag,{value:"Module"}));export{$ as T,t as a,l as b,o as c,i as d,n as e,s as f};
