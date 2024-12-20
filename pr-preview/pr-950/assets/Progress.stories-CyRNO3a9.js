import{j as r}from"./index-D6_wGsWO.js";import{bu as o,H as n,bv as m,bw as u}from"./index-DFbqK9I0.js";const i={title:"Komponenter/Progress",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorPalette:{description:"The visual color appearance of the component",table:{type:{summary:'"gray" | "red" | "green" | "blue" | "yellow"'},defaultValue:{summary:"blue"}},options:["gray","red","yellow","green","blue"],control:{type:"radio"}},hasStripe:{description:"If true, the progress bar will show stripe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isAnimated:{description:"If true, and hasStripe is true, the stripes will be animated",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isIndeterminate:{description:"If true, the progress will be indeterminate and the value prop will be ignored",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},max:{description:"The maximum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:"number"},min:{description:"The minimum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"},size:{description:"The size of the Progress",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},value:{description:"The value of the progress indicator. If undefined the progress bar will be in indeterminate state",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"}}},e={args:{value:40,width:"12rem"},render:l=>r.jsx(o,{defaultValue:40,...l,children:r.jsxs(n,{gap:"5",children:[r.jsx(m,{flex:"1"}),r.jsx(u,{children:"40%"})]})})};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    value: 40,
    width: "12rem"
  },
  render: (args: ProgressProps) => <ProgressRoot defaultValue={40} {...args}>
      <HStack gap="5">
        <ProgressBar flex="1" />
        <ProgressValueText>40%</ProgressValueText>
      </HStack>
    </ProgressRoot>
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const d=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{b as P,e as a};