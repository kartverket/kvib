import{j as s}from"./jsx-runtime-CLpGMVip.js";import{aS as t}from"./index-BrXXMyjU.js";const l={title:"Komponenter/Segmented Control",component:t,parameters:{docs:{story:{inline:!0}}},argTypes:{defaultValue:{description:"The initial value of the segment group when it is first rendered. Use when you do not need to control the state of the segment group.",table:{type:{summary:"string"}}},size:{description:"Size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},orientation:{description:"Orientation of the component",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:{type:"radio"}},value:{description:"The value of the checked segment",table:{type:{summary:"string"}}},onValueChange:{description:"Callback invoked when the value changes",table:{type:{summary:"(details: ValueChangeDetails) => void"}}}}};t.displayName="SegmentedControl";const e={args:{items:[{value:"one",label:"Item 1"},{value:"two",label:"Item 2"}]},render:a=>s.jsx(t,{...a})};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "one",
      label: "Item 1"
    }, {
      value: "two",
      label: "Item 2"
    }]
  },
  render: args => <SegmentedControl {...args} />
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const i=["Preview"],u=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,u as S};
