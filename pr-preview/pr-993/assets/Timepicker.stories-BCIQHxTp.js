import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{bp as t}from"./index-BYbB6rBR.js";const n={title:"Komponenter/Timepicker",component:t,parameters:{docs:{story:{inline:!0}}},argTypes:{size:{description:"The size of the Timepicker",options:["xs","sm","md","lg"],control:{type:"radio"},table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},width:{description:"The width of the Timepicker",options:["fit-content","full"],control:{type:"radio"},table:{type:{summary:'"fit-content" | "full"'},defaultValue:{summary:"fit-content"}}},variant:{description:"The variant of the Timepicker",options:["outline","filled","flushed","unstyled"],control:{type:"radio"},table:{type:{summary:'"outline" | "filled" | "flushed" | "unstyled"'},defaultValue:{summary:"outline"}}},colorPalette:{description:"The color scheme of the Timepicker",options:["green","blue"],control:{type:"radio"},table:{type:{summary:'"green" | "blue"'},defaultValue:{summary:"green"}}},value:{description:"The current value of the Timepicker",control:{type:"object"},table:{type:{summary:"TimeValue"}}},defaultValue:{description:"The default value of the Timepicker",control:{type:"object"},table:{type:{summary:"TimeValue"}}},onChange:{description:"Callback function when the value changes",action:"onChange",table:{type:{summary:"(value: TimeValue) => void"}}},disabled:{description:"If true, the Timepicker will be disabled",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{description:"If true, the Timepicker will be marked as invalid",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},minuteInterval:{description:"The interval between minutes in the Timepicker",control:{type:"number"},table:{type:{summary:"number"}}},ariaLabel:{description:"Provides an accessible label for the Timepicker",control:"text",table:{type:{summary:"string"}}}}};t.displayName="Timepicker";const e={render:o=>l.jsx(t,{...o})};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <KvibTimepicker {...args} />
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const s=["Preview"],p=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:s,default:n},Symbol.toStringTag,{value:"Module"}));export{e as P,p as T};
