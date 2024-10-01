import{j as t}from"./extends-CwFRzn3r.js";import{f as y,a as j,c as _}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{m as M}from"./chunk-G72KV6MB-s0NcBBxe.js";import{r as S}from"./index-BwDkhjyp.js";import{I as V}from"./chunk-QINAG4RG-EokTgSxx.js";var r=y(function(e,b){const{ratio:x=4/3,children:g,className:h,...w}=e,A=S.Children.only(g),R=j("chakra-aspect-ratio",h);return t.jsx(_.div,{ref:b,position:"relative",className:R,_before:{height:0,content:'""',display:"block",paddingBottom:M(x,v=>`${1/v*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...w,children:A})});r.displayName="AspectRatio";const k={title:"Layout/Aspect Ratio",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{ratio:{description:"The aspect ratio of the Box. Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`",table:{type:{summary:"ResponsiveValue<number>"}},control:"number"}}},s={args:{ratio:4/3},render:e=>t.jsx(r,{...e,children:t.jsx(V,{alt:"trees",src:"https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"})})},a={args:{ratio:16/9},render:e=>t.jsx(r,{...e,children:t.jsx("iframe",{title:"hønefoss kart",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.224555781148!2d10.234854769824661!3d60.16785279531992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641075a4a064e7d%3A0x32d7e65bc9c0d372!2zSMO4bmVmb3Nz!5e0!3m2!1sno!2sno!4v1694593115187!5m2!1sno!2sno"})})},o={args:{maxW:"560px",ratio:1},render:e=>t.jsx(r,{...e,children:t.jsx("iframe",{title:"kart og kompass",src:"https://www.youtube.com/embed/6V8Ua_4HOaQ?si=4V8GX80XXhWc_Jtr",allowFullScreen:!0})})};var i,c,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 3
  },
  render: args => <KvibAspectRatio {...args}>
      <Image alt="trees" src="https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" />
    </KvibAspectRatio>
}`,...(n=(c=s.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => <KvibAspectRatio {...args}>
      <iframe title="hønefoss kart" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.224555781148!2d10.234854769824661!3d60.16785279531992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641075a4a064e7d%3A0x32d7e65bc9c0d372!2zSMO4bmVmb3Nz!5e0!3m2!1sno!2sno!4v1694593115187!5m2!1sno!2sno"></iframe>
    </KvibAspectRatio>
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,f,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    maxW: "560px",
    ratio: 1
  },
  render: args => <KvibAspectRatio {...args}>
      <iframe title="kart og kompass" src="https://www.youtube.com/embed/6V8Ua_4HOaQ?si=4V8GX80XXhWc_Jtr" allowFullScreen />
    </KvibAspectRatio>
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const D=["AspectRatio","AspectRatioMap","AspectRatioVideo"],N=Object.freeze(Object.defineProperty({__proto__:null,AspectRatio:s,AspectRatioMap:a,AspectRatioVideo:o,__namedExportsOrder:D,default:k},Symbol.toStringTag,{value:"Module"}));export{N as A,a,o as b,s as c};
