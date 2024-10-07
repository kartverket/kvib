import{j as e}from"./extends-CwFRzn3r.js";import{T as i}from"./Timepicker-B5FLSiys.js";import{S as l}from"./chunk-ZHMYA64R-V_96TD_T.js";import{F as A}from"./Form-control-CG1fyGaW.js";import{F as B}from"./Form-label-D-r0Q-vl.js";import{e as C,w as _,d as L}from"./index-CmXSeSNl.js";import{K as O}from"./KvibProvider-BWWu0iq7.js";const D={title:"Skjemaelementer/Timepicker",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{size:{description:"The size of the Timepicker",options:["xs","sm","md","lg"],control:{type:"radio"},table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},width:{description:"The width of the Timepicker",options:["fit-content","full"],control:{type:"radio"},table:{type:{summary:'"fit-content" | "full"'},defaultValue:{summary:"fit-content"}}},variant:{description:"The variant of the Timepicker",options:["outline","filled","flushed","unstyled"],control:{type:"radio"},table:{type:{summary:'"outline" | "filled" | "flushed" | "unstyled"'},defaultValue:{summary:"outline"}}},colorScheme:{description:"The color scheme of the Timepicker",options:["green","blue"],control:{type:"radio"},table:{type:{summary:'"green" | "blue"'},defaultValue:{summary:"green"}}},value:{description:"The current value of the Timepicker",control:{type:"object"},table:{type:{summary:"TimeValue"}}},defaultValue:{description:"The default value of the Timepicker",control:{type:"object"},table:{type:{summary:"TimeValue"}}},onChange:{description:"Callback function when the value changes",action:"onChange",table:{type:{summary:"(value: TimeValue) => void"}}},isDisabled:{description:"If true, the Timepicker will be disabled",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},isInvalid:{description:"If true, the Timepicker will be marked as invalid",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},minuteInterval:{description:"The interval between minutes in the Timepicker",control:{type:"number"},table:{type:{summary:"number"}}},ariaLabel:{description:"Provides an accessible label for the Timepicker",control:"text",table:{type:{summary:"string"}}}}},t={args:{},render:r=>e.jsx(i,{...r})},a={args:{},render:r=>e.jsxs(l,{children:[e.jsx(i,{...r,minuteInterval:15}),e.jsx(i,{...r,minuteInterval:60})]})},s={args:{},render:r=>e.jsxs(l,{children:[e.jsx(i,{...r,variant:"outline"}),e.jsx(i,{...r,variant:"filled"}),e.jsx(i,{...r,variant:"flushed"}),e.jsx(i,{...r,variant:"unstyled"})]})},o={args:{},render:r=>e.jsxs(l,{children:[e.jsx(i,{...r,size:"xs"}),e.jsx(i,{...r,size:"sm"}),e.jsx(i,{...r,size:"md"}),e.jsx(i,{...r,size:"lg",width:"fit-content"}),e.jsx(i,{...r,size:"md",width:"full"})]})},n={args:{},render:r=>e.jsxs(A,{children:[e.jsx(B,{children:"Tid"}),e.jsx(i,{...r})]})},E=C(_({colorScheme:"green"}),L),m={tags:["no-tests"],decorators:[r=>e.jsx(O,{theme:E,children:e.jsx(r,{})})]},G=C(_({colorScheme:"blue"}),L),c={tags:["no-tests"],decorators:[r=>e.jsx(O,{theme:G,children:e.jsx(r,{})})]};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibTimepicker {...args} />
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var T,b,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <KvibTimepicker {...args} minuteInterval={15} />
      <KvibTimepicker {...args} minuteInterval={60} />
    </Stack>
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,k,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <KvibTimepicker {...args} variant="outline" />
      <KvibTimepicker {...args} variant="filled" />
      <KvibTimepicker {...args} variant="flushed" />
      <KvibTimepicker {...args} variant="unstyled" />
    </Stack>
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var y,g,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <KvibTimepicker {...args} size="xs" />
      <KvibTimepicker {...args} size="sm" />
      <KvibTimepicker {...args} size="md" />
      <KvibTimepicker {...args} size="lg" width="fit-content" />
      <KvibTimepicker {...args} size="md" width="full" />
    </Stack>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,j,K;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: args => <FormControl>
      <FormLabel>Tid</FormLabel>
      <KvibTimepicker {...args} />
    </FormControl>
}`,...(K=(j=n.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var z,w,P;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ["no-tests"],
  decorators: [Story => <KvibProvider theme={greenTheme}>
        <Story />
      </KvibProvider>]
}`,...(P=(w=m.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var F,I,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ["no-tests"],
  decorators: [Story => <KvibProvider theme={blueTheme}>
        <Story />
      </KvibProvider>]
}`,...(V=(I=c.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const M=["Timepicker","TimepickerInterval","TimepickerAppearance","TimepickerSize","TimepickerForm","TimepickerGreenProvider","TimepickerBlueProvider"],U=Object.freeze(Object.defineProperty({__proto__:null,Timepicker:t,TimepickerAppearance:s,TimepickerBlueProvider:c,TimepickerForm:n,TimepickerGreenProvider:m,TimepickerInterval:a,TimepickerSize:o,__namedExportsOrder:M,default:D},Symbol.toStringTag,{value:"Module"}));export{U as T,n as a,a as b,s as c,o as d,t as e};
