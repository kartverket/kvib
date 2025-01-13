import{j as r}from"./jsx-runtime-DgHZ7iq2.js";import{aI as a,aJ as l,aK as n,M as m}from"./index-BmU2EDjm.js";const i={title:"Komponenter/Progress",component:a,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"The visual color appearance of the component",table:{type:{summary:'"gray" | "red" | "green" | "blue" | "yellow"'},defaultValue:{summary:"blue"}},options:["gray","red","yellow","green","blue"],control:{type:"radio"}},striped:{description:"If true, the progress bar will show stripe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},animated:{description:"If true, and hasStripe is true, the stripes will be animated",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},max:{description:"The maximum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:"number"},min:{description:"The minimum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"},size:{description:"The size of the Progress",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},value:{description:"The value of the progress indicator. If undefined the progress bar will be in indeterminate state",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"}}};a.displayName="Progress";l.displayName="ProgressBar";a.displayName="ProgressRoot";n.displayName="ProgressValueText";m.displayName="HStack";const e={args:{value:40,width:"12rem",defaultValue:40},render:u=>r.jsx(a,{...u,children:r.jsxs(m,{gap:"5",children:[r.jsx(l,{flex:"1"}),r.jsx(n,{children:"40%"})]})})};var s,t,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: 40,
    width: "12rem",
    defaultValue: 40
  },
  render: args => <Progress {...args}>
      <HStack gap="5">
        <ProgressBar flex="1" />
        <ProgressValueText>40%</ProgressValueText>
      </HStack>
    </Progress>
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const d=["Preview"],g=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{g as P,e as a};
