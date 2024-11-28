import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{I as c}from"./toggle-tip-BBA6gFvc.js";import{r as m}from"./index-Wp2u197Z.js";import{P as g,a as b,b as f,c as y,d as P}from"./progress-Cm-s0-jH.js";const h=m.forwardRef(function(a,o){return e.jsx(g,{...a,ref:o,children:e.jsx(b,{})})}),x=m.forwardRef(function(a,o){const{children:p,info:t,...d}=a;return e.jsxs(f,{...d,ref:o,children:[p,t&&e.jsx(c,{children:t})]})}),u=y,v=P,j={title:"Komponenter/Progress",component:u,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorPalette:{description:"The visual color appearance of the component",table:{type:{summary:'"gray" | "red" | "green" | "blue" | "yellow"'},defaultValue:{summary:"blue"}},options:["gray","red","yellow","green","blue"],control:{type:"radio"}},hasStripe:{description:"If true, the progress bar will show stripe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isAnimated:{description:"If true, and hasStripe is true, the stripes will be animated",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isIndeterminate:{description:"If true, the progress will be indeterminate and the value prop will be ignored",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},max:{description:"The maximum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:"number"},min:{description:"The minimum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"},size:{description:"The size of the Progress",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},value:{description:"The value of the progress indicator. If undefined the progress bar will be in indeterminate state",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"}}},r={args:{value:80},render:s=>e.jsxs(u,{...s,"aria-label":"progress bar",children:[e.jsx(x,{}),e.jsx(v,{}),e.jsx(h,{})]})};var n,l,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    value: 80
  },
  render: (args: ProgressProps) => <KvibProgress {...args} aria-label="progress bar">
      <ProgressLabel />
      <ProgressValueText />
      <ProgressBar />
    </KvibProgress>
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const w=["Preview"],R=Object.freeze(Object.defineProperty({__proto__:null,Preview:r,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{R as P,r as a};
