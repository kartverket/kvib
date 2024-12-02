import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{ba as t,B as j,d as w,bb as C,bc as K}from"./index-CyhnlmWi.js";const L={title:"Komponenter/Skeleton",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{endColor:{description:"The color at the animation end",table:{type:{summary:"string"}},control:"text"},fadeDuration:{description:"The fadeIn duration in seconds. Requires isLoaded toggled to true in order to see the transition.",table:{type:{summary:"number"},defaultValue:{summary:"0.4"}},control:"number"},fitContent:{description:"If true, the skeleton will take the width of it's children",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isLoaded:{description:"If true, it'll render its children with a nice fade transition",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},speed:{description:"The animation speed in seconds",table:{type:{summary:"number"},defaultValue:{summary:"0.8"}},control:"number"},startColor:{description:"The color at the animation start",table:{type:{summary:"string"}},control:"text"}}},n={render:r=>e.jsx(j,{w:"100%",children:e.jsxs(w,{children:[e.jsx(t,{...r,height:"20px"}),e.jsx(t,{...r,height:"20px"}),e.jsx(t,{...r,height:"20px"})]})})},o={render:r=>e.jsxs(t,{...r,children:[e.jsx("div",{children:"Det som er wrapped i Skeleton"}),e.jsx("div",{children:"vil ikke være synlig."})]})},s={render:r=>e.jsxs(j,{padding:"6",boxShadow:"lg",bg:"white",children:[e.jsx(C,{...r,size:"10"}),e.jsx(K,{...r,mt:"4",noOfLines:4,spacing:"4",skeletonHeight:"2"})]})},a={args:{startColor:"blue.500",endColor:"green.500",height:"20px"},render:r=>e.jsx(t,{...r})},i={args:{isLoaded:!0},render:r=>e.jsx(t,{...r,children:e.jsx("span",{children:"Denne teksten er ferdiglastet."})})};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Box w="100%">
      <KvibStack>
        <KvibSkeleton {...args} height="20px" />
        <KvibSkeleton {...args} height="20px" />
        <KvibSkeleton {...args} height="20px" />
      </KvibStack>
    </Box>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <KvibSkeleton {...args}>
      <div>Det som er wrapped i Skeleton</div>
      <div>vil ikke være synlig.</div>
    </KvibSkeleton>
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Box padding="6" boxShadow="lg" bg="white">
      <KvibSkeletonCircle {...args} size="10" />
      <KvibSkeletonText {...args} mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,k,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    startColor: "blue.500",
    endColor: "green.500",
    height: "20px"
  },
  render: args => <KvibSkeleton {...args} />
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var v,f,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isLoaded: true
  },
  render: args => <KvibSkeleton {...args}>
      <span>Denne teksten er ferdiglastet.</span>
    </KvibSkeleton>
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const T=["Preview","SkeletonWrapped","SkeletonCircle","SkeletonColors","SkeletonLoaded"],D=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,SkeletonCircle:s,SkeletonColors:a,SkeletonLoaded:i,SkeletonWrapped:o,__namedExportsOrder:T,default:L},Symbol.toStringTag,{value:"Module"}));export{n as P,D as S,o as a,s as b,a as c,i as d};
