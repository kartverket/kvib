import{j as r}from"./index-D6_wGsWO.js";import{aa as i,ab as n}from"./index-DTsyizwa.js";const m={title:"Komponenter/Data List",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorPalette:{description:"The color palette of the component",table:{type:{summary:"gray | green | blue"},defaultValue:{summary:"gray"}},options:["gray","green","blue"],control:{type:"radio"}},orientation:{description:"The orientation of the list",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"vertical"}},options:["horizontal","vertical"],control:{type:"radio"}},size:{description:"The size of the list",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},p=[{label:"Tallverdi",value:428},{label:"Strengverdi",value:"Verdi"}],c=t=>r.jsx(i,{...t,children:p.map(a=>r.jsx(n,{label:a.label,value:a.value},a.label))}),e={render:t=>r.jsx(c,{...t})};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <DataListExample {...args} />
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const u=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{b as D,e as P};
