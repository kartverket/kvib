import{j as s}from"./jsx-runtime-DQFEoQHt.js";import{aR as t}from"./index-RaQcFt_0.js";const i={title:"Komponenter/Search",component:t,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{placeholder:{description:"Placeholder for text",table:{defaultValue:{summary:"Søk her..."}},control:"text"},size:{description:"Input size",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},searchButton:{description:"Add search button to input",table:{defaultValue:{summary:"none"}},options:["none","left","right"],control:{type:"radio"}},colorScheme:{description:"Change Icon color",table:{defaultValue:{summary:"green"}},options:["gray","red","green","blue"],control:{type:"radio"}},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},buttonVariant:{description:"Button variant if an icon is enabled",table:{type:{summary:"primary | secondary | tertiary | ghost"},defaultValue:{summary:"tertiary"}},options:["primary","secondary","tertiary","ghost"],control:{type:"radio"}},buttonWidth:{description:"Button width if an icon is enabled. Cannot be smaller than default, e.g. needs to be more than 2.5rem with size md",table:{type:{summary:"string"}},control:"text"},buttonText:{description:"Button text if an icon is enabled",table:{type:{summary:"string"}},control:"text"}}};t.displayName="Search";const e={args:{placeholder:"Search",variant:"outline"},render:n=>s.jsx(t,{...n})};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "outline"
  },
  render: args => <KvibSearch {...args} />
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const l=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,c as S};
