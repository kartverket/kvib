import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as T}from"./index-CcKhGcwW.js";import{C as z}from"./circle-DyiK1bSb.js";import{S as p}from"./skeleton-SUkWNsh_.js";import{S as _}from"./stack-Bh3oWNRR.js";import{B}from"./box-C9nK2UO9.js";const P=T.forwardRef(function(l,d){const{size:c,...m}=l;return e.jsx(z,{size:c,asChild:!0,ref:d,children:e.jsx(p,{...m})})}),R=T.forwardRef(function(l,d){const{noOfLines:c=3,gap:m,...O}=l;return e.jsx(_,{gap:m,width:"full",ref:d,children:Array.from({length:c}).map((I,D)=>e.jsx(p,{height:"4",...l,_last:{maxW:"80%"},...O},D))})}),t=p,V={title:"Komponenter/Skeleton",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{endColor:{description:"The color at the animation end",table:{type:{summary:"string"}},control:"text"},fadeDuration:{description:"The fadeIn duration in seconds. Requires isLoaded toggled to true in order to see the transition.",table:{type:{summary:"number"},defaultValue:{summary:"0.4"}},control:"number"},fitContent:{description:"If true, the skeleton will take the width of it's children",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isLoaded:{description:"If true, it'll render its children with a nice fade transition",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},speed:{description:"The animation speed in seconds",table:{type:{summary:"number"},defaultValue:{summary:"0.8"}},control:"number"},startColor:{description:"The color at the animation start",table:{type:{summary:"string"}},control:"text"}}},o={render:r=>e.jsx(B,{w:"100%",children:e.jsxs(_,{children:[e.jsx(t,{...r,height:"20px"}),e.jsx(t,{...r,height:"20px"}),e.jsx(t,{...r,height:"20px"})]})})},n={render:r=>e.jsxs(t,{...r,children:[e.jsx("div",{children:"Det som er wrapped i Skeleton"}),e.jsx("div",{children:"vil ikke være synlig."})]})},s={render:r=>e.jsxs(B,{padding:"6",boxShadow:"lg",bg:"white",children:[e.jsx(P,{...r,size:"10"}),e.jsx(R,{...r,mt:"4",noOfLines:4,spacing:"4",skeletonHeight:"2"})]})},a={args:{startColor:"blue.500",endColor:"green.500",height:"20px"},render:r=>e.jsx(t,{...r})},i={args:{isLoaded:!0},render:r=>e.jsx(t,{...r,children:e.jsx("span",{children:"Denne teksten er ferdiglastet."})})};var u,g,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Box w="100%">
      <KvibStack>
        <KvibSkeleton {...args} height="20px" />
        <KvibSkeleton {...args} height="20px" />
        <KvibSkeleton {...args} height="20px" />
      </KvibStack>
    </Box>
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,x,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <KvibSkeleton {...args}>
      <div>Det som er wrapped i Skeleton</div>
      <div>vil ikke være synlig.</div>
    </KvibSkeleton>
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var b,f,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Box padding="6" boxShadow="lg" bg="white">
      <KvibSkeletonCircle {...args} size="10" />
      <KvibSkeletonText {...args} mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,j,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    startColor: "blue.500",
    endColor: "green.500",
    height: "20px"
  },
  render: args => <KvibSkeleton {...args} />
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,K,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isLoaded: true
  },
  render: args => <KvibSkeleton {...args}>
      <span>Denne teksten er ferdiglastet.</span>
    </KvibSkeleton>
}`,...(L=(K=i.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const E=["Preview","SkeletonWrapped","SkeletonCircle","SkeletonColors","SkeletonLoaded"],F=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,SkeletonCircle:s,SkeletonColors:a,SkeletonLoaded:i,SkeletonWrapped:n,__namedExportsOrder:E,default:V},Symbol.toStringTag,{value:"Module"}));export{o as P,F as S,n as a,s as b,a as c,i as d};
