import{j as e}from"./extends-CwFRzn3r.js";import{A as o}from"./chunk-ZVFRDZZY-BKlzBq_u.js";import{I as b}from"./chunk-QINAG4RG-EokTgSxx.js";const x={title:"Layout/Aspect Ratio",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{ratio:{description:"The aspect ratio of the Box. Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`",table:{type:{summary:"ResponsiveValue<number>"}},control:"number"}}},a={args:{ratio:4/3},render:s=>e.jsx(o,{...s,children:e.jsx(b,{alt:"trees",src:"https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"})})},r={args:{ratio:16/9},render:s=>e.jsx(o,{...s,children:e.jsx("iframe",{title:"hønefoss kart",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.224555781148!2d10.234854769824661!3d60.16785279531992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641075a4a064e7d%3A0x32d7e65bc9c0d372!2zSMO4bmVmb3Nz!5e0!3m2!1sno!2sno!4v1694593115187!5m2!1sno!2sno"})})},t={args:{maxW:"560px",ratio:1},render:s=>e.jsx(o,{...s,children:e.jsx("iframe",{title:"kart og kompass",src:"https://www.youtube.com/embed/6V8Ua_4HOaQ?si=4V8GX80XXhWc_Jtr",allowFullScreen:!0})})};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 3
  },
  render: args => <KvibAspectRatio {...args}>
      <Image alt="trees" src="https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" />
    </KvibAspectRatio>
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var n,p,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => <KvibAspectRatio {...args}>
      <iframe title="hønefoss kart" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.224555781148!2d10.234854769824661!3d60.16785279531992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641075a4a064e7d%3A0x32d7e65bc9c0d372!2zSMO4bmVmb3Nz!5e0!3m2!1sno!2sno!4v1694593115187!5m2!1sno!2sno"></iframe>
    </KvibAspectRatio>
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,f,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    maxW: "560px",
    ratio: 1
  },
  render: args => <KvibAspectRatio {...args}>
      <iframe title="kart og kompass" src="https://www.youtube.com/embed/6V8Ua_4HOaQ?si=4V8GX80XXhWc_Jtr" allowFullScreen />
    </KvibAspectRatio>
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const g=["AspectRatio","AspectRatioMap","AspectRatioVideo"],R=Object.freeze(Object.defineProperty({__proto__:null,AspectRatio:a,AspectRatioMap:r,AspectRatioVideo:t,__namedExportsOrder:g,default:x},Symbol.toStringTag,{value:"Module"}));export{R as A,r as a,t as b,a as c};
