import{j as t}from"./extends-CwFRzn3r.js";import{r as R}from"./index-BwDkhjyp.js";import{f as j}from"./forward-ref-BWI-Phbn.js";import{c as _}from"./factory-lWLPzty5.js";import{c as M}from"./cx-BDMMs1jM.js";import{m as S}from"./responsive-BbUtuhhZ.js";import{I as V}from"./image-CU6Rr-ts.js";const a=j(function(e,u){const{ratio:b=4/3,children:g,className:w,...h}=e,A=R.Children.only(g),v=M("chakra-aspect-ratio",w);return t.jsx(_.div,{ref:u,position:"relative",className:v,_before:{height:0,content:'""',display:"block",paddingBottom:S(b,y=>`${1/y*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...h,children:A})});a.displayName="AspectRatio";const k={title:"Layout/Aspect Ratio",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{ratio:{description:"The aspect ratio of the Box. Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`",table:{type:{summary:"ResponsiveValue<number>"}},control:"number"}}},s={args:{ratio:4/3,w:"560px"},render:e=>t.jsx(a,{...e,children:t.jsx(V,{alt:"trees",src:"https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"})})},r={args:{ratio:16/9,w:"560px"},render:e=>t.jsx(a,{...e,children:t.jsx("iframe",{title:"hønefoss kart",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.224555781148!2d10.234854769824661!3d60.16785279531992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641075a4a064e7d%3A0x32d7e65bc9c0d372!2zSMO4bmVmb3Nz!5e0!3m2!1sno!2sno!4v1694593115187!5m2!1sno!2sno"})})},o={args:{w:"400px",maxW:"560px",ratio:1},render:e=>t.jsx(a,{...e,children:t.jsx("iframe",{title:"kart og kompass",src:"https://www.youtube.com/embed/6V8Ua_4HOaQ?si=4V8GX80XXhWc_Jtr",allowFullScreen:!0})})};var i,n,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 3,
    w: "560px"
  },
  render: args => <KvibAspectRatio {...args}>
      <Image alt="trees" src="https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" />
    </KvibAspectRatio>
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    w: "560px"
  },
  render: args => <KvibAspectRatio {...args}>
      <iframe title="hønefoss kart" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.224555781148!2d10.234854769824661!3d60.16785279531992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641075a4a064e7d%3A0x32d7e65bc9c0d372!2zSMO4bmVmb3Nz!5e0!3m2!1sno!2sno!4v1694593115187!5m2!1sno!2sno"></iframe>
    </KvibAspectRatio>
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,f,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    w: "400px",
    maxW: "560px",
    ratio: 1
  },
  render: args => <KvibAspectRatio {...args}>
      <iframe title="kart og kompass" src="https://www.youtube.com/embed/6V8Ua_4HOaQ?si=4V8GX80XXhWc_Jtr" allowFullScreen />
    </KvibAspectRatio>
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const D=["Preview","AspectRatioMap","AspectRatioVideo"],X=Object.freeze(Object.defineProperty({__proto__:null,AspectRatioMap:r,AspectRatioVideo:o,Preview:s,__namedExportsOrder:D,default:k},Symbol.toStringTag,{value:"Module"}));export{X as A,s as P,r as a,o as b};
