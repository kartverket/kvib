import{j as r}from"./extends-CwFRzn3r.js";import{g as re,p as se,s as ae}from"./progress.utils-BkPD76D4.js";import{f as D}from"./forward-ref-BWI-Phbn.js";import{c as G}from"./factory-lWLPzty5.js";import{o as oe,a as ie}from"./use-style-config-C4sZEIFb.js";import{c as le}from"./context-CBKykClo.js";import{B as te}from"./box-Cs-tJ6EH.js";import{S as p}from"./stack-C3a7yBZW.js";const[ne,me]=le({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),ge=D((e,d)=>{const{min:u,max:h,value:S,isIndeterminate:y,role:v,...g}=e,c=re({value:S,min:u,max:h,isIndeterminate:y,role:v}),x={height:"100%",...me().filledTrack};return r.jsx(G.div,{ref:d,style:{width:`${c.percent}%`,...g.style},...c.bind,...g,__css:x})}),s=D((e,d)=>{var j;const{value:u,min:h=0,max:S=100,hasStripe:y,isAnimated:v,children:g,borderRadius:c,isIndeterminate:b,"aria-label":x,"aria-labelledby":H,"aria-valuetext":J,title:Q,role:U,...X}=oe(e),P=ie("Progress",e),f=c??((j=P.track)==null?void 0:j.borderRadius),Y={animation:`${ae} 1s linear infinite`},Z={...!b&&y&&v&&Y,...b&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${se} 1s ease infinite normal none running`}},ee={overflow:"hidden",position:"relative",...P.track};return r.jsx(G.div,{ref:d,borderRadius:f,__css:ee,...X,children:r.jsxs(ne,{value:P,children:[r.jsx(ge,{"aria-label":x,"aria-labelledby":H,"aria-valuetext":J,min:h,max:S,value:u,isIndeterminate:b,css:Z,borderRadius:f,title:Q,role:U}),g]})})});s.displayName="Progress";const ce={title:"Komponenter/Progress",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorScheme:{description:"The visual color appearance of the component",table:{type:{summary:'"gray" | "red" | "green" | "blue" | "yellow"'},defaultValue:{summary:"blue"}},options:["gray","red","yellow","green","blue"],control:{type:"radio"}},hasStripe:{description:"If true, the progress bar will show stripe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isAnimated:{description:"If true, and hasStripe is true, the stripes will be animated",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isIndeterminate:{description:"If true, the progress will be indeterminate and the value prop will be ignored",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},max:{description:"The maximum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:"number"},min:{description:"The minimum value of the progress",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"},size:{description:"The size of the Progress",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},value:{description:"The value of the progress indicator. If undefined the progress bar will be in indeterminate state",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"}}},a={args:{value:80},render:e=>r.jsx(te,{w:"100%",children:r.jsx(s,{...e,"aria-label":"progress bar"})})},o={args:{value:60,hasStripe:!0},render:e=>r.jsx(s,{...e,"aria-label":"progress bar striped"})},i={args:{value:60,hasStripe:!0,isAnimated:!0},render:e=>r.jsx(s,{...e,"aria-label":"progress bar striped animated"})},l={args:{value:20,colorScheme:"green",h:"1rem",w:"16rem"},render:e=>r.jsxs(p,{spacing:5,children:[r.jsx(s,{...e,size:"sm","aria-label":"progress bar small"}),r.jsx(s,{...e,size:"md","aria-label":"progress bar medium"}),r.jsx(s,{...e,size:"lg","aria-label":"progress bar large"}),r.jsx(s,{...e,height:"32px","aria-label":"progress bar 32px"})]})},t={args:{value:40,size:"md",h:"1rem",w:"16rem"},render:e=>r.jsxs(p,{spacing:5,children:[r.jsx(s,{...e,colorScheme:"green","aria-label":"progress bar green"}),r.jsx(s,{...e,colorScheme:"blue","aria-label":"progress bar blue"}),r.jsx(s,{...e,colorScheme:"red","aria-label":"progress bar red"}),r.jsx(s,{...e,colorScheme:"gray","aria-label":"progress bar gray"}),r.jsx(s,{...e,colorScheme:"yellow","aria-label":"progress bar yellow"})]})},n={args:{value:40},render:e=>r.jsxs(p,{spacing:5,children:[r.jsx(s,{...e,colorScheme:"blue","aria-label":"progress bar blue"}),r.jsx(s,{...e,colorScheme:"red","aria-label":"progress bar red"}),r.jsx(s,{...e,colorScheme:"gray","aria-label":"progress bar gray"}),r.jsx(s,{...e,colorScheme:"yellow","aria-label":"progress bar yellow"}),r.jsx(s,{...e,size:"sm","aria-label":"progress bar small"}),r.jsx(s,{...e,size:"md","aria-label":"progress bar medium"}),r.jsx(s,{...e,size:"lg","aria-label":"progress bar large"}),r.jsx(s,{...e,height:"32px","aria-label":"progress bar 32px"})]})},m={args:{size:"md"},render:e=>r.jsxs(p,{children:[r.jsx(s,{...e,isIndeterminate:!0,"aria-label":"progress bar indeterminate"}),",",r.jsx(s,{...e,hasStripe:!0,isAnimated:!0,"aria-label":"progress bar animated stripe",value:40}),","]})};var K,w,z;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 80
  },
  render: args => <Box w="100%">
      <KvibProgress {...args} aria-label="progress bar" />
    </Box>
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
}`,...(I=(_=i.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var B,C,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: 20,
    colorScheme: "green",
    h: "1rem",
    w: "16rem"
  },
  render: args => <KvibStack spacing={5}>
      <KvibProgress {...args} size="sm" aria-label="progress bar small" />
      <KvibProgress {...args} size="md" aria-label="progress bar medium" />
      <KvibProgress {...args} size="lg" aria-label="progress bar large" />
      <KvibProgress {...args} height="32px" aria-label="progress bar 32px" />
    </KvibStack>
}`,...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var L,M,O;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: "md",
    h: "1rem",
    w: "16rem"
  },
  render: args => <KvibStack spacing={5}>
      <KvibProgress {...args} colorScheme="green" aria-label="progress bar green" />
      <KvibProgress {...args} colorScheme="blue" aria-label="progress bar blue" />
      <KvibProgress {...args} colorScheme="red" aria-label="progress bar red" />
      <KvibProgress {...args} colorScheme="gray" aria-label="progress bar gray" />
      <KvibProgress {...args} colorScheme="yellow" aria-label="progress bar yellow" />
    </KvibStack>
}`,...(O=(M=t.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var $,E,F;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: 40
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
}`,...(q=(W=m.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const be=["Preview","ProgressStripe","ProgressStripeAnimated","ProgressSizes","ProgressColors","ProgressLook","ProgressVariation"],je=Object.freeze(Object.defineProperty({__proto__:null,Preview:a,ProgressColors:t,ProgressLook:n,ProgressSizes:l,ProgressStripe:o,ProgressStripeAnimated:i,ProgressVariation:m,__namedExportsOrder:be,default:ce},Symbol.toStringTag,{value:"Module"}));export{je as P,n as a,m as b,a as c};
