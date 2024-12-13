import{j as s}from"./index-D6_wGsWO.js";import{b0 as o}from"./index-DWzSTc1s.js";const l={title:"Komponenter/Search",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{disable:!0}},argTypes:{placeholder:{description:"Placeholder for text",table:{defaultValue:{summary:"Søk her..."}},control:"text"},size:{description:"Input size",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},searchButton:{description:"Add search button to input",table:{defaultValue:{summary:"none"}},options:["none","left","right"],control:{type:"radio"}},colorScheme:{description:"Change Icon color",table:{defaultValue:{summary:"green"}},options:["gray","red","green","blue"],control:{type:"radio"}},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},buttonVariant:{description:"Button variant if an icon is enabled",table:{type:{summary:"primary | secondary | tertiary | ghost"},defaultValue:{summary:"tertiary"}},options:["primary","secondary","tertiary","ghost"],control:{type:"radio"}},buttonWidth:{description:"Button width if an icon is enabled. Cannot be smaller than default, e.g. needs to be more than 2.5rem with size md",table:{type:{summary:"string"}},control:"text"},buttonText:{description:"Button text if an icon is enabled",table:{type:{summary:"string"}},control:"text"}},args:{}},e={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{placeholder:"Søk her...",variant:"outline",disabled:!1},render:n=>s.jsx(o,{...n})};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  args: {
    placeholder: "Søk her...",
    variant: "outline",
    disabled: false
  },
  render: args => <KvibSearch {...args} />
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const i=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,c as S};
