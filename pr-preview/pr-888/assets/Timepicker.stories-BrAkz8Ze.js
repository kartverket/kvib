import{j as e}from"./extends-CwFRzn3r.js";import{T as t}from"./Timepicker-DRzc4PJw.js";import{e as C,w as _,d as L}from"./index-CfE5Katq.js";import{S as l}from"./stack-REYSnkee.js";import{F as A}from"./Form-control-Dfay2bjP.js";import{F as B}from"./Form-label-B-qAuQLc.js";import{K as O}from"./KvibProvider-Dof16g_l.js";const D={title:"Skjemaelementer/Timepicker",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{size:{description:"The size of the Timepicker",options:["xs","sm","md","lg"],control:{type:"radio"},table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},width:{description:"The width of the Timepicker",options:["fit-content","full"],control:{type:"radio"},table:{type:{summary:'"fit-content" | "full"'},defaultValue:{summary:"fit-content"}}},variant:{description:"The variant of the Timepicker",options:["outline","filled","flushed","unstyled"],control:{type:"radio"},table:{type:{summary:'"outline" | "filled" | "flushed" | "unstyled"'},defaultValue:{summary:"outline"}}},colorScheme:{description:"The color scheme of the Timepicker",options:["green","blue"],control:{type:"radio"},table:{type:{summary:'"green" | "blue"'},defaultValue:{summary:"green"}}},value:{description:"The current value of the Timepicker",control:{type:"object"},table:{type:{summary:"TimeValue"}}},defaultValue:{description:"The default value of the Timepicker",control:{type:"object"},table:{type:{summary:"TimeValue"}}},onChange:{description:"Callback function when the value changes",action:"onChange",table:{type:{summary:"(value: TimeValue) => void"}}},isDisabled:{description:"If true, the Timepicker will be disabled",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},isInvalid:{description:"If true, the Timepicker will be marked as invalid",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},minuteInterval:{description:"The interval between minutes in the Timepicker",control:{type:"number"},table:{type:{summary:"number"}}},ariaLabel:{description:"Provides an accessible label for the Timepicker",control:"text",table:{type:{summary:"string"}}}}},i={render:r=>e.jsx(t,{...r})},a={render:r=>e.jsxs(l,{children:[e.jsx(t,{...r,minuteInterval:15}),e.jsx(t,{...r,minuteInterval:60})]})},s={render:r=>e.jsxs(l,{children:[e.jsx(t,{...r,variant:"outline"}),e.jsx(t,{...r,variant:"filled"}),e.jsx(t,{...r,variant:"flushed"}),e.jsx(t,{...r,variant:"unstyled"})]})},o={render:r=>e.jsxs(l,{children:[e.jsx(t,{...r,size:"xs"}),e.jsx(t,{...r,size:"sm"}),e.jsx(t,{...r,size:"md"}),e.jsx(t,{...r,size:"lg",width:"fit-content"}),e.jsx(t,{...r,size:"md",width:"full"})]})},n={render:r=>e.jsxs(A,{children:[e.jsx(B,{children:"Tid"}),e.jsx(t,{...r})]})},E=C(_({colorScheme:"green"}),L),m={tags:["no-tests"],decorators:[r=>e.jsx(O,{theme:E,children:e.jsx(r,{})})]},G=C(_({colorScheme:"blue"}),L),c={tags:["no-tests"],decorators:[r=>e.jsx(O,{theme:G,children:e.jsx(r,{})})]};var d,p,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <KvibTimepicker {...args} />
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var T,b,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Stack>
      <KvibTimepicker {...args} minuteInterval={15} />
      <KvibTimepicker {...args} minuteInterval={60} />
    </Stack>
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,f,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Stack>
      <KvibTimepicker {...args} variant="outline" />
      <KvibTimepicker {...args} variant="filled" />
      <KvibTimepicker {...args} variant="flushed" />
      <KvibTimepicker {...args} variant="unstyled" />
    </Stack>
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var k,g,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Stack>
      <KvibTimepicker {...args} size="xs" />
      <KvibTimepicker {...args} size="sm" />
      <KvibTimepicker {...args} size="md" />
      <KvibTimepicker {...args} size="lg" width="fit-content" />
      <KvibTimepicker {...args} size="md" width="full" />
    </Stack>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,j,K;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(V=(I=c.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const M=["Preview","TimepickerInterval","TimepickerAppearance","TimepickerSize","TimepickerForm","TimepickerGreenProvider","TimepickerBlueProvider"],W=Object.freeze(Object.defineProperty({__proto__:null,Preview:i,TimepickerAppearance:s,TimepickerBlueProvider:c,TimepickerForm:n,TimepickerGreenProvider:m,TimepickerInterval:a,TimepickerSize:o,__namedExportsOrder:M,default:D},Symbol.toStringTag,{value:"Module"}));export{i as P,W as T,n as a,a as b,s as c,o as d};
