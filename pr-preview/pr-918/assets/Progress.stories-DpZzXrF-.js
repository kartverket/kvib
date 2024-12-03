import{j as r}from"./jsx-runtime-CQsLhzk5.js";import{b6 as t,b7 as n,b8 as m,b9 as i}from"./index-BM5ggu4W.js";const u={title:"Komponenter/Progress",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorPalette:{description:"The visual color appearance of the component",table:{type:{summary:'"gray" | "red" | "green" | "blue" | "yellow"'},defaultValue:{summary:"blue"}},options:["gray","red","yellow","green","blue"],control:{type:"radio"}},hasStripe:{description:"If true, the progress bar will show stripe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isAnimated:{description:"If true, and hasStripe is true, the stripes will be animated",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isIndeterminate:{description:"If true, the progress will be indeterminate and the value prop will be ignored",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},max:{description:"The maximum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:"number"},min:{description:"The minimum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"},size:{description:"The size of the Progress",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},value:{description:"The value of the progress indicator. If undefined the progress bar will be in indeterminate state",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"}}},e={args:{value:80},render:l=>r.jsxs(t,{...l,"aria-label":"progress bar",children:[r.jsx(n,{}),r.jsx(m,{}),r.jsx(i,{})]})};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: 80
  },
  render: (args: ProgressProps) => <KvibProgress {...args} aria-label="progress bar">
      <ProgressLabel />
      <ProgressValueText />
      <ProgressBar />
    </KvibProgress>
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const p=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{c as P,e as a};
