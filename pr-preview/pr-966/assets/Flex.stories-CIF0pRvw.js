import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{B as n}from"./box-Cm05xU0f.js";import{F as o}from"./flex-BM20q-lB.js";const r=a=>e.jsx(n,{...a,css:{width:"100%",height:"100%",bg:"bg.emphasized",backgroundClip:"padding-box",borderWidth:"1px",backgroundImage:`url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,display:"flex",alignItems:"center",justifyContent:"center"}});try{r.displayName="DecorativeBox",r.__docgenInfo={description:"",displayName:"DecorativeBox",props:{}}}catch{}const m={title:"Komponenter/Layout/Flex",component:o,parameters:{docs:{story:{inline:!0}},layout:"padded"},argTypes:{align:{table:{type:{summary:"SystemStyleObject['alignItems']"}}},justify:{table:{type:{summary:"SystemStyleObject['justifyContent']"}}},wrap:{table:{type:{summary:"SystemStyleObject['flexWrap']"}}},direction:{table:{type:{summary:"SystemStyleObject['flexDirection']"}},control:{type:"select"},options:["row","row-reverse","column","column-reverse"]},basis:{table:{type:{summary:"SystemStyleObject['flexBasis']"}}},grow:{table:{type:{summary:"SystemStyleObject['flexGrow']"}}},shrink:{table:{type:{summary:"SystemStyleObject['flexShrink']"}}},inline:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}}};o.displayName="Flex";const t={render:a=>e.jsxs(o,{gap:"4",...a,children:[e.jsx(r,{height:"10"}),e.jsx(r,{height:"10"}),e.jsx(r,{height:"10"})]})};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Flex gap="4" {...args}>
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const c=["Preview"],g=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{g as F,t as P};
