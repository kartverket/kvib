import{j as s}from"./jsx-runtime-DgHZ7iq2.js";import{ae as a}from"./index-CMGylVHX.js";const n={title:"Komponenter/Header",component:a,parameters:{docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{justifyContent:{table:{type:{summary:"start | center | space-between"},defaultValue:{summary:"space-between"}},options:["start","center","space-between"],control:{type:"radio"}},logoLinkDisabled:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},logoLink:{table:{type:{summary:"string"},defaultValue:{summary:"/"}},control:"text"},logoLinkProps:{table:{summary:"object"},defaultValue:{summary:void 0}},showMenuButton:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},showChildrenInMenu:{table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},collapseBreakpoint:{table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"sm"}},options:["sm","md","lg"],control:{type:"radio"}},gap:{table:{type:{summary:"number"},defaultValue:{summary:"90"}},control:"number"},logoVariant:{table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:{type:"radio"}}},args:{onMenuButtonClick:void 0}};a.displayName="Header";const e={args:{logoAltText:"Kartverket-logo"},render:l=>s.jsx(a,{...l})};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket-logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const m=["Preview"],p=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:n},Symbol.toStringTag,{value:"Module"}));export{p as H,e as P};
