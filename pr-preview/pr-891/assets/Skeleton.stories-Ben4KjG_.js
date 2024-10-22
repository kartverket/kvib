import{j as r}from"./extends-CwFRzn3r.js";import{k as J}from"./emotion-react.browser.esm-Hqbkbmab.js";import{r as S}from"./index-BwDkhjyp.js";import{a as re}from"./hooks-gaHRB8Pq.js";import{c as N}from"./factory-C6UFhaBW.js";import{f as te}from"./forward-ref-BWI-Phbn.js";import{u as oe,o as ne}from"./use-style-config-YUvqttAg.js";import{c as Q}from"./css-var-DE0-P1bc.js";import{c as U}from"./cx-BDMMs1jM.js";import{u as se}from"./use-breakpoint-value-LNxqp4dz.js";import{B as X}from"./box-DeqT4ixr.js";import{S as ae}from"./stack-REYSnkee.js";function ie(e){const t=S.useRef();return S.useEffect(()=>{t.current=e},[e]),t.current}function le(){const e=S.useRef(!0);return S.useEffect(()=>{e.current=!1},[]),e.current}const ce=N("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),K=Q("skeleton-start-color"),T=Q("skeleton-end-color"),de=J({from:{opacity:0},to:{opacity:1}}),me=J({from:{borderColor:K.reference,background:K.reference},to:{borderColor:T.reference,background:T.reference}}),o=te((e,t)=>{const s={...e,fadeDuration:typeof e.fadeDuration=="number"?e.fadeDuration:.4,speed:typeof e.speed=="number"?e.speed:.8},f=oe("Skeleton",s),x=le(),{startColor:y="",endColor:v="",isLoaded:a,fadeDuration:C,speed:j,className:w,fitContent:_,animation:L,...g}=ne(s),[h,l]=re("colors",[y,v]),i=ie(a),k=U("chakra-skeleton",w),b={...h&&{[K.variable]:h},...l&&{[T.variable]:l}};if(a){const n=x||i?"none":`${de} ${C}s`;return r.jsx(N.div,{ref:t,className:k,__css:{animation:n},...g})}return r.jsx(ce,{ref:t,className:k,...g,__css:{width:_?"fit-content":void 0,...f,...b,_dark:{...f._dark,...b},animation:L||`${j}s linear infinite alternate ${me}`}})});o.displayName="Skeleton";function ue(e){return Array(e).fill(1).map((t,s)=>s+1)}const P=3,Y=e=>{const{noOfLines:t=P,spacing:s="0.5rem",skeletonHeight:f="0.5rem",className:x,startColor:y,endColor:v,isLoaded:a,fadeDuration:C,speed:j,variant:w,size:_,colorScheme:L,children:g,...h}=e,l=se(typeof t=="number"?[t]:t)||P,i=ue(l),k=n=>l>1&&n===i.length?"80%":"100%",b=U("chakra-skeleton__group",x);return r.jsx(N.div,{className:b,...h,children:i.map((n,D)=>{if(a&&D>0)return null;const ee=a?null:{mb:n===i.length?"0":s,width:k(n),height:f};return r.jsx(o,{startColor:y,endColor:v,isLoaded:a,fadeDuration:C,speed:j,variant:w,size:_,colorScheme:L,...ee,children:D===0?g:void 0},i.length.toString()+n)})})};Y.displayName="SkeletonText";const Z=({size:e="2rem",...t})=>r.jsx(o,{borderRadius:"full",boxSize:e,...t});Z.displayName="SkeletonCircle";const pe={title:"Tilbakemelding/Skeleton",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{endColor:{description:"The color at the animation end",table:{type:{summary:"string"}},control:"text"},fadeDuration:{description:"The fadeIn duration in seconds. Requires isLoaded toggled to true in order to see the transition.",table:{type:{summary:"number"},defaultValue:{summary:.4}},control:"number"},fitContent:{description:"If true, the skeleton will take the width of it's children",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isLoaded:{description:"If true, it'll render its children with a nice fade transition",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},speed:{description:"The animation speed in seconds",table:{type:{summary:"number"},defaultValue:{summary:.8}},control:"number"},startColor:{description:"The color at the animation start",table:{type:{summary:"string"}},control:"text"}}},c={render:e=>r.jsx(X,{w:"100%",children:r.jsxs(ae,{children:[r.jsx(o,{...e,height:"20px"}),r.jsx(o,{...e,height:"20px"}),r.jsx(o,{...e,height:"20px"})]})})},d={args:{fitContent:!0},render:e=>r.jsxs(o,{...e,children:[r.jsx("div",{children:"Det som er wrapped i Skeleton"}),r.jsx("div",{children:"vil ikke være synlig."})]})},m={render:e=>r.jsxs(X,{padding:"6",boxShadow:"lg",bg:"white",children:[r.jsx(Z,{...e,size:"10"}),r.jsx(Y,{...e,mt:"4",noOfLines:4,spacing:"4",skeletonHeight:"2"})]})},u={args:{startColor:"blue.500",endColor:"green.500",height:"20px"},render:e=>r.jsx(o,{...e})},p={args:{isLoaded:!0},render:e=>r.jsx(o,{...e,children:r.jsx("span",{children:"Denne teksten er ferdiglastet."})})};var V,R,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Box w="100%">
      <KvibStack>
        <KvibSkeleton {...args} height="20px" />
        <KvibSkeleton {...args} height="20px" />
        <KvibSkeleton {...args} height="20px" />
      </KvibStack>
    </Box>
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var B,$,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    fitContent: true
  },
  render: args => <KvibSkeleton {...args}>
      <div>Det som er wrapped i Skeleton</div>
      <div>vil ikke være synlig.</div>
    </KvibSkeleton>
}`,...(z=($=d.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var E,F,I;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Box padding="6" boxShadow="lg" bg="white">
      <KvibSkeletonCircle {...args} size="10" />
      <KvibSkeletonText {...args} mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
}`,...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var H,W,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    startColor: "blue.500",
    endColor: "green.500",
    height: "20px"
  },
  render: args => <KvibSkeleton {...args} />
}`,...(q=(W=u.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var A,M,G;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isLoaded: true
  },
  render: args => <KvibSkeleton {...args}>
      <span>Denne teksten er ferdiglastet.</span>
    </KvibSkeleton>
}`,...(G=(M=p.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};const fe=["Preview","SkeletonWrapped","SkeletonCircle","SkeletonColors","SkeletonLoaded"],Le=Object.freeze(Object.defineProperty({__proto__:null,Preview:c,SkeletonCircle:m,SkeletonColors:u,SkeletonLoaded:p,SkeletonWrapped:d,__namedExportsOrder:fe,default:pe},Symbol.toStringTag,{value:"Module"}));export{c as P,Le as S,d as a,m as b,u as c,p as d};
