import{j as r}from"./jsx-runtime-DgHZ7iq2.js";import{N as a,O as i}from"./index-CGNKToUm.js";const n={title:"Komponenter/Data List",component:a,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"The color palette of the component",table:{type:{summary:"gray | green | blue"},defaultValue:{summary:"gray"}},options:["gray","green","blue"],control:{type:"radio"}},orientation:{description:"The orientation of the list",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"vertical"}},options:["horizontal","vertical"],control:{type:"radio"}},size:{description:"The size of the list",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},p=[{label:"Number value",value:428}];a.displayName="DataList";i.displayName="DataListItem";const e={render:m=>r.jsx(a,{...m,children:p.map(t=>r.jsx(i,{label:t.label,value:t.value},t.label))})};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <DataList {...args}>
      {stats.map(item => <DataListItem key={item.label} label={item.label} value={item.value} />)}
    </DataList>
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const u=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:n},Symbol.toStringTag,{value:"Module"}));export{y as D,e as P};
