import{j as r}from"./extends-CwFRzn3r.js";import{g as re,p as se,s as ae}from"./chunk-TXZFUZNG-6OG37utO.js";import{a as oe}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{f as q,c as D,o as le}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{c as ie}from"./index-CHDWSgKD.js";import{S as d}from"./chunk-ZHMYA64R-V_96TD_T.js";var[te,ne]=ie({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),ge=q((e,u)=>{const{min:b,max:h,value:S,isIndeterminate:v,role:y,...c}=e,p=re({value:S,min:b,max:h,isIndeterminate:v,role:y}),a={height:"100%",...ne().filledTrack};return r.jsx(D.div,{ref:u,style:{width:`${p.percent}%`,...c.style},...p.bind,...c,__css:a})}),s=q((e,u)=>{var b;const{value:h,min:S=0,max:v=100,hasStripe:y,isAnimated:c,children:p,borderRadius:P,isIndeterminate:a,"aria-label":G,"aria-labelledby":H,"aria-valuetext":J,title:Q,role:U,...X}=le(e),x=oe("Progress",e),f=P??((b=x.track)==null?void 0:b.borderRadius),Y={animation:`${ae} 1s linear infinite`},Z={...!a&&y&&c&&Y,...a&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${se} 1s ease infinite normal none running`}},ee={overflow:"hidden",position:"relative",...x.track};return r.jsx(D.div,{ref:u,borderRadius:f,__css:ee,...X,children:r.jsxs(te,{value:x,children:[r.jsx(ge,{"aria-label":G,"aria-labelledby":H,"aria-valuetext":J,min:S,max:v,value:h,isIndeterminate:a,css:Z,borderRadius:f,title:Q,role:U}),p]})})});s.displayName="Progress";const me={title:"Tilbakemelding/Progress",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorScheme:{description:"The visual color appearance of the component",table:{type:{summary:'"gray" | "red" | "green" | "blue" | "yellow"'},defaultValue:{summary:"blue"}},options:["gray","red","yellow","green","blue"],control:{type:"radio"}},hasStripe:{description:"If true, the progress bar will show stripe",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isAnimated:{description:"If true, and hasStripe is true, the stripes will be animated",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isIndeterminate:{description:"If true, the progress will be indeterminate and the value prop will be ignored",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},max:{description:"The maximum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:100}},control:"number"},min:{description:"The minimum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:0}},control:"number"},size:{description:"The size of the Progress",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},value:{description:"The value of the progress indicator. If undefined the progress bar will be in indeterminate state",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"}}},o={args:{value:80},render:e=>r.jsx(s,{...e,"aria-label":"progress bar"})},l={args:{value:60,hasStripe:!0},render:e=>r.jsx(s,{...e,"aria-label":"progress bar striped"})},i={args:{value:60,hasStripe:!0,isAnimated:!0},render:e=>r.jsx(s,{...e,"aria-label":"progress bar striped animated"})},t={args:{value:20,colorScheme:"green"},render:e=>r.jsxs(d,{spacing:5,children:[r.jsx(s,{...e,size:"sm","aria-label":"progress bar small"}),r.jsx(s,{...e,size:"md","aria-label":"progress bar medium"}),r.jsx(s,{...e,size:"lg","aria-label":"progress bar large"}),r.jsx(s,{...e,height:"32px","aria-label":"progress bar 32px"})]})},n={args:{value:40,size:"md"},render:e=>r.jsxs(d,{spacing:5,children:[r.jsx(s,{...e,colorScheme:"green","aria-label":"progress bar green"}),r.jsx(s,{...e,colorScheme:"blue","aria-label":"progress bar blue"}),r.jsx(s,{...e,colorScheme:"red","aria-label":"progress bar red"}),r.jsx(s,{...e,colorScheme:"gray","aria-label":"progress bar gray"}),r.jsx(s,{...e,colorScheme:"yellow","aria-label":"progress bar yellow"})]})},g={args:{value:40,size:"md"},render:e=>r.jsxs(d,{spacing:5,children:[r.jsx(s,{...e,colorScheme:"blue","aria-label":"progress bar blue"}),r.jsx(s,{...e,colorScheme:"red","aria-label":"progress bar red"}),r.jsx(s,{...e,colorScheme:"gray","aria-label":"progress bar gray"}),r.jsx(s,{...e,colorScheme:"yellow","aria-label":"progress bar yellow"}),r.jsx(s,{...e,size:"sm","aria-label":"progress bar small"}),r.jsx(s,{...e,size:"md","aria-label":"progress bar medium"}),r.jsx(s,{...e,size:"lg","aria-label":"progress bar large"}),r.jsx(s,{...e,height:"32px","aria-label":"progress bar 32px"})]})},m={args:{size:"md"},render:e=>r.jsxs(d,{children:[r.jsx(s,{...e,isIndeterminate:!0,"aria-label":"progress bar indeterminate"}),",",r.jsx(s,{...e,hasStripe:!0,isAnimated:!0,"aria-label":"progress bar animated stripe",value:40}),","]})};var j,K,z;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 80
  },
  render: args => <KvibProgress {...args} aria-label="progress bar" />
}`,...(z=(K=o.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var w,k,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 60,
    hasStripe: true
  },
  render: args => <KvibProgress {...args} aria-label="progress bar striped" />
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var T,V,_;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 60,
    hasStripe: true,
    isAnimated: true
  },
  render: args => <KvibProgress {...args} aria-label="progress bar striped animated" />
}`,...(_=(V=i.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var I,C,R;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(C=t.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var L,$,M;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=($=n.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var O,B,E;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(B=g.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,N,W;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <KvibStack>
      <KvibProgress {...args} isIndeterminate aria-label="progress bar indeterminate" />,
      <KvibProgress {...args} hasStripe isAnimated aria-label="progress bar animated stripe" value={40} />,
    </KvibStack>
}`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const be=["Progress","ProgressStripe","ProgressStripeAnimated","ProgressSizes","ProgressColors","ProgressLook","ProgressVariation"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Progress:o,ProgressColors:n,ProgressLook:g,ProgressSizes:t,ProgressStripe:l,ProgressStripeAnimated:i,ProgressVariation:m,__namedExportsOrder:be,default:me},Symbol.toStringTag,{value:"Module"}));export{Pe as P,g as a,m as b,o as c};
