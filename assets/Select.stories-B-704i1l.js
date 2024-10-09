import{j as e}from"./extends-CwFRzn3r.js";import{S as l}from"./chunk-3RSXBRAN-D74awGdd.js";import{F as I}from"./Form-control-CG1fyGaW.js";import{F as A}from"./Form-label-D-r0Q-vl.js";import{S as T}from"./chunk-ZHMYA64R-V_96TD_T.js";import{I as C}from"./Icon-tbSQqMaw.js";const V={title:"Skjemaelementer/Select",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{errorBorderColor:{description:"The border color when the select is invalid. Use color keys in `theme.colors`",table:{type:{summary:"string"}},control:"text"},focusBorderColor:{description:"The border color when the select is focused. Use color keys in `theme.colors`",table:{type:{summary:"string"}},control:"text"},icon:{description:"The icon element to use in the select",table:{type:{summary:"ReactElement<any, string | JSXElementConstructor<any>>"}},control:"text"},iconColor:{description:"The color of the icon",table:{type:{summary:"string"}},control:"text"},iconSize:{description:"The size (width and height) of the icon",table:{type:{summary:"string"}},control:"text"},isDisabled:{description:"",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isInvalid:{description:"If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isRequired:{description:"If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},rootProps:{description:"Props to forward to the root div element",table:{type:{summary:"RootProps"}},control:"text"},size:{description:"The size of the Select",table:{type:{summary:'"lg" | "md" | "sm" | "xs"'},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:"radio"},variant:{description:"The variant of the Select",table:{type:{summary:'"outline" | "filled" | "flushed" | "unstyled"'},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:"radio"}}},a={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{},render:r=>e.jsxs(l,{...r,placeholder:"Velg alternativ","aria-label":"select",children:[e.jsx("option",{value:"option1",children:"Alternativ 1"}),e.jsx("option",{value:"option2",children:"Alternativ 2"}),e.jsx("option",{value:"option3",children:"Alternativ 3"})]})},t={args:{"aria-label":"select form"},render:r=>e.jsxs(I,{children:[e.jsx(A,{htmlFor:"select",children:"Velg alternativ"}),e.jsxs(l,{...r,children:[e.jsx("option",{value:"option1",children:"Alternativ 1"}),e.jsx("option",{value:"option2",children:"Alternativ 2"}),e.jsx("option",{value:"option3",children:"Alternativ 3"})]})]})},o={args:{},render:r=>e.jsxs(T,{spacing:3,children:[e.jsx(l,{...r,placeholder:"extra small",size:"xs","aria-label":"select extra small"}),e.jsx(l,{...r,placeholder:"small",size:"sm","aria-label":"select small"}),e.jsx(l,{...r,placeholder:"medium",size:"md","aria-label":"select medium"}),e.jsx(l,{...r,placeholder:"large",size:"lg","aria-label":"select large"})]})},s={args:{},render:r=>e.jsxs(T,{spacing:3,children:[e.jsx(l,{...r,variant:"outline",placeholder:"Outline","aria-label":"select outline"}),e.jsx(l,{...r,variant:"filled",placeholder:"Filled","aria-label":"select filled"}),e.jsx(l,{...r,variant:"flushed",placeholder:"Flushed","aria-label":"select flushed"}),e.jsx(l,{...r,variant:"unstyled",placeholder:"Unstyled","aria-label":"select unstyled"})]})},n={args:{},render:r=>e.jsx(l,{...r,icon:e.jsx(C,{icon:"expand_circle_down",weight:300}),placeholder:"Woohoo! Nytt ikon","aria-label":"select change Icon"})},i={args:{borderColor:"green.500",color:"blue.700",focusBorderColor:"blue.300","aria-label":"select override style",placeholder:"Overstyring av stil"},render:r=>e.jsx(l,{...r})};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  args: {},
  render: args => <KvibSelect {...args} placeholder="Velg alternativ" aria-label="select">
      <option value="option1">Alternativ 1</option>
      <option value="option2">Alternativ 2</option>
      <option value="option3">Alternativ 3</option>
    </KvibSelect>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    "aria-label": "select form"
  },
  render: args => <FormControl>
      <FormLabel htmlFor="select">Velg alternativ</FormLabel>
      <KvibSelect {...args}>
        <option value="option1">Alternativ 1</option>
        <option value="option2">Alternativ 2</option>
        <option value="option3">Alternativ 3</option>
      </KvibSelect>
    </FormControl>
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,v,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack spacing={3}>
      <KvibSelect {...args} placeholder="extra small" size="xs" aria-label="select extra small" />
      <KvibSelect {...args} placeholder="small" size="sm" aria-label="select small" />
      <KvibSelect {...args} placeholder="medium" size="md" aria-label="select medium" />
      <KvibSelect {...args} placeholder="large" size="lg" aria-label="select large" />
    </KvibStack>
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var S,y,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack spacing={3}>
      <KvibSelect {...args} variant="outline" placeholder="Outline" aria-label="select outline" />
      <KvibSelect {...args} variant="filled" placeholder="Filled" aria-label="select filled" />
      <KvibSelect {...args} variant="flushed" placeholder="Flushed" aria-label="select flushed" />
      <KvibSelect {...args} variant="unstyled" placeholder="Unstyled" aria-label="select unstyled" />
    </KvibStack>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,j,F;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibSelect {...args} icon={<Icon icon="expand_circle_down" weight={300} />} placeholder="Woohoo! Nytt ikon" aria-label="select change Icon" />
}`,...(F=(j=n.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var K,w,z;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    borderColor: "green.500",
    color: "blue.700",
    focusBorderColor: "blue.300",
    "aria-label": "select override style",
    placeholder: "Overstyring av stil"
  },
  render: args => <KvibSelect {...args} />
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const k=["Select","SelectForm","SelectSizes","SelectVariants","SelectIcon","SelectStyles"],P=Object.freeze(Object.defineProperty({__proto__:null,Select:a,SelectForm:t,SelectIcon:n,SelectSizes:o,SelectStyles:i,SelectVariants:s,__namedExportsOrder:k,default:V},Symbol.toStringTag,{value:"Module"}));export{P as S,s as a,t as b,a as c};
