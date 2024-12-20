import{j as a}from"./index-D6_wGsWO.js";import{bF as l}from"./index-DFbqK9I0.js";const s={title:"Komponenter/Segmented Control",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{defaultValue:{description:"The initial value of the segment group when it is first rendered. Use when you do not need to control the state of the segment group.",table:{type:{summary:"string"}}},colorPalette:{description:"Color palette of the component",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},size:{description:"Size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},orientation:{description:"Orientation of the component",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:{type:"radio"}},value:{description:"The value of the checked segment",table:{type:{summary:"string"}}},onValueChange:{description:"Callback invoked when the value changes",table:{type:{summary:"(details: ValueChangeDetails) => void"}}}}},i=t=>a.jsx(l,{...t}),e={args:{items:[{value:"en",label:"En"},{value:"to",label:"To"},{value:"tre",label:"Tre"}]},render:t=>a.jsx(i,{...t})};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "en",
      label: "En"
    }, {
      value: "to",
      label: "To"
    }, {
      value: "tre",
      label: "Tre"
    }]
  },
  render: args => <SegmentedControlExample {...args} />
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const m=["Preview"],p=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:s},Symbol.toStringTag,{value:"Module"}));export{e as P,p as S};
