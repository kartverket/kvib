import{j as r}from"./extends-CwFRzn3r.js";import{g as re,p as se,s as ae}from"./progress.utils-BkPD76D4.js";import{f as D}from"./forward-ref-BWI-Phbn.js";import{c as G}from"./factory-C6UFhaBW.js";import{o as oe,a as ie}from"./use-style-config-YUvqttAg.js";import{c as le}from"./context-CBKykClo.js";import{S as p}from"./stack-REYSnkee.js";const[te,ne]=le({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),me=D((e,d)=>{const{min:u,max:h,value:S,isIndeterminate:y,role:v,...g}=e,b=re({value:S,min:u,max:h,isIndeterminate:y,role:v}),P={height:"100%",...ne().filledTrack};return r.jsx(G.div,{ref:d,style:{width:`${b.percent}%`,...g.style},...b.bind,...g,__css:P})}),s=D((e,d)=>{var j;const{value:u,min:h=0,max:S=100,hasStripe:y,isAnimated:v,children:g,borderRadius:b,isIndeterminate:c,"aria-label":P,"aria-labelledby":H,"aria-valuetext":J,title:Q,role:U,...X}=oe(e),x=ie("Progress",e),f=b??((j=x.track)==null?void 0:j.borderRadius),Y={animation:`${ae} 1s linear infinite`},Z={...!c&&y&&v&&Y,...c&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${se} 1s ease infinite normal none running`}},ee={overflow:"hidden",position:"relative",...x.track};return r.jsx(G.div,{ref:d,borderRadius:f,__css:ee,...X,children:r.jsxs(te,{value:x,children:[r.jsx(me,{"aria-label":P,"aria-labelledby":H,"aria-valuetext":J,min:h,max:S,value:u,isIndeterminate:c,css:Z,borderRadius:f,title:Q,role:U}),g]})})});s.displayName="Progress";const ge={title:"Tilbakemelding/Progress",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorScheme:{description:"The visual color appearance of the component",table:{type:{summary:'"gray" | "red" | "green" | "blue" | "yellow"'},defaultValue:{summary:"blue"}},options:["gray","red","yellow","green","blue"],control:{type:"radio"}},hasStripe:{description:"If true, the progress bar will show stripe",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isAnimated:{description:"If true, and hasStripe is true, the stripes will be animated",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isIndeterminate:{description:"If true, the progress will be indeterminate and the value prop will be ignored",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},max:{description:"The maximum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:100}},control:"number"},min:{description:"The minimum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},size:{description:"The size of the Progress",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},value:{description:"The value of the progress indicator. If undefined the progress bar will be in indeterminate state",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"}}},a={args:{value:80},render:e=>r.jsx(s,{...e,"aria-label":"progress bar"})},o={args:{value:60,hasStripe:!0},render:e=>r.jsx(s,{...e,"aria-label":"progress bar striped"})},i={args:{value:60,hasStripe:!0,isAnimated:!0},render:e=>r.jsx(s,{...e,"aria-label":"progress bar striped animated"})},l={args:{value:20,colorScheme:"green"},render:e=>r.jsxs(p,{spacing:5,children:[r.jsx(s,{...e,size:"sm","aria-label":"progress bar small"}),r.jsx(s,{...e,size:"md","aria-label":"progress bar medium"}),r.jsx(s,{...e,size:"lg","aria-label":"progress bar large"}),r.jsx(s,{...e,height:"32px","aria-label":"progress bar 32px"})]})},t={args:{value:40,size:"md"},render:e=>r.jsxs(p,{spacing:5,children:[r.jsx(s,{...e,colorScheme:"green","aria-label":"progress bar green"}),r.jsx(s,{...e,colorScheme:"blue","aria-label":"progress bar blue"}),r.jsx(s,{...e,colorScheme:"red","aria-label":"progress bar red"}),r.jsx(s,{...e,colorScheme:"gray","aria-label":"progress bar gray"}),r.jsx(s,{...e,colorScheme:"yellow","aria-label":"progress bar yellow"})]})},n={args:{value:40,size:"md"},render:e=>r.jsxs(p,{spacing:5,children:[r.jsx(s,{...e,colorScheme:"blue","aria-label":"progress bar blue"}),r.jsx(s,{...e,colorScheme:"red","aria-label":"progress bar red"}),r.jsx(s,{...e,colorScheme:"gray","aria-label":"progress bar gray"}),r.jsx(s,{...e,colorScheme:"yellow","aria-label":"progress bar yellow"}),r.jsx(s,{...e,size:"sm","aria-label":"progress bar small"}),r.jsx(s,{...e,size:"md","aria-label":"progress bar medium"}),r.jsx(s,{...e,size:"lg","aria-label":"progress bar large"}),r.jsx(s,{...e,height:"32px","aria-label":"progress bar 32px"})]})},m={args:{size:"md"},render:e=>r.jsxs(p,{children:[r.jsx(s,{...e,isIndeterminate:!0,"aria-label":"progress bar indeterminate"}),",",r.jsx(s,{...e,hasStripe:!0,isAnimated:!0,"aria-label":"progress bar animated stripe",value:40}),","]})};var K,w,z;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 80
  },
  render: args => <KvibProgress {...args} aria-label="progress bar" />
}`,...(z=(w=a.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var k,A,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 60,
    hasStripe: true
  },
  render: args => <KvibProgress {...args} aria-label="progress bar striped" />
}`,...(T=(A=o.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var V,_,I;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 60,
    hasStripe: true,
    isAnimated: true
  },
  render: args => <KvibProgress {...args} aria-label="progress bar striped animated" />
}`,...(I=(_=i.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var C,R,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 20,
    colorScheme: "green"
  },
  render: args => <KvibStack spacing={5}>
      <KvibProgress {...args} size="sm" aria-label="progress bar small" />
      <KvibProgress {...args} size="md" aria-label="progress bar medium" />
      <KvibProgress {...args} size="lg" aria-label="progress bar large" />
      <KvibProgress {...args} height="32px" aria-label="progress bar 32px" />
    </KvibStack>
}`,...(L=(R=l.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var M,O,$;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: "md"
  },
  render: args => <KvibStack spacing={5}>
      <KvibProgress {...args} colorScheme="green" aria-label="progress bar green" />
      <KvibProgress {...args} colorScheme="blue" aria-label="progress bar blue" />
      <KvibProgress {...args} colorScheme="red" aria-label="progress bar red" />
      <KvibProgress {...args} colorScheme="gray" aria-label="progress bar gray" />
      <KvibProgress {...args} colorScheme="yellow" aria-label="progress bar yellow" />
    </KvibStack>
}`,...($=(O=t.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var B,E,F;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: "md"
  },
  render: args => <KvibStack spacing={5}>
      <KvibProgress {...args} colorScheme="blue" aria-label="progress bar blue" />
      <KvibProgress {...args} colorScheme="red" aria-label="progress bar red" />
      <KvibProgress {...args} colorScheme="gray" aria-label="progress bar gray" />
      <KvibProgress {...args} colorScheme="yellow" aria-label="progress bar yellow" />
      <KvibProgress {...args} size="sm" aria-label="progress bar small" />
      <KvibProgress {...args} size="md" aria-label="progress bar medium" />
      <KvibProgress {...args} size="lg" aria-label="progress bar large" />
      <KvibProgress {...args} height="32px" aria-label="progress bar 32px" />
    </KvibStack>
}`,...(F=(E=n.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var N,W,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <KvibStack>
      <KvibProgress {...args} isIndeterminate aria-label="progress bar indeterminate" />,
      <KvibProgress {...args} hasStripe isAnimated aria-label="progress bar animated stripe" value={40} />,
    </KvibStack>
}`,...(q=(W=m.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const be=["Preview","ProgressStripe","ProgressStripeAnimated","ProgressSizes","ProgressColors","ProgressLook","ProgressVariation"],xe=Object.freeze(Object.defineProperty({__proto__:null,Preview:a,ProgressColors:t,ProgressLook:n,ProgressSizes:l,ProgressStripe:o,ProgressStripeAnimated:i,ProgressVariation:m,__namedExportsOrder:be,default:ge},Symbol.toStringTag,{value:"Module"}));export{xe as P,n as a,m as b,a as c};
