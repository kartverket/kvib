import{j as r}from"./extends-CwFRzn3r.js";import{r as b}from"./index-BwDkhjyp.js";import{c as N,F as J,f as ee,o as re,a as Q}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{u as te}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{a as oe}from"./chunk-7FWEOSAE-DBqCpNZ5.js";import{k as U}from"./emotion-react.browser.esm-DOaDIBza.js";import{u as ne}from"./chunk-KC77MHL3-DdPeEU-Q.js";import{S as se}from"./chunk-ZHMYA64R-V_96TD_T.js";import{B as ae}from"./chunk-PULVB27S-CgiffgmI.js";function ie(){const e=b.useRef(!0);return b.useEffect(()=>{e.current=!1},[]),e.current}function le(e){const t=b.useRef();return b.useEffect(()=>{t.current=e},[e]),t.current}var de=N("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),K=J("skeleton-start-color"),T=J("skeleton-end-color"),ce=U({from:{opacity:0},to:{opacity:1}}),ue=U({from:{borderColor:K.reference,background:K.reference},to:{borderColor:T.reference,background:T.reference}}),o=ee((e,t)=>{const s={...e,fadeDuration:typeof e.fadeDuration=="number"?e.fadeDuration:.4,speed:typeof e.speed=="number"?e.speed:.8},p=te("Skeleton",s),v=ie(),{startColor:x="",endColor:y="",isLoaded:a,fadeDuration:C,speed:j,className:_,fitContent:w,...f}=re(s),[g,k]=oe("colors",[x,y]),h=le(a),n=Q("chakra-skeleton",_),S={...g&&{[K.variable]:g},...k&&{[T.variable]:k}};if(a){const L=v||h?"none":`${ce} ${C}s`;return r.jsx(N.div,{ref:t,className:n,__css:{animation:L},...f})}return r.jsx(de,{ref:t,className:n,...f,__css:{width:w?"fit-content":void 0,...p,...S,_dark:{...p._dark,...S},animation:`${j}s linear infinite alternate ${ue}`}})});o.displayName="Skeleton";var X=({size:e="2rem",...t})=>r.jsx(o,{borderRadius:"full",boxSize:e,...t});X.displayName="SkeletonCircle";function me(e){return Array(e).fill(1).map((t,s)=>s+1)}var V=3,Y=e=>{const{noOfLines:t=V,spacing:s="0.5rem",skeletonHeight:p="0.5rem",className:v,startColor:x,endColor:y,isLoaded:a,fadeDuration:C,speed:j,variant:_,size:w,colorScheme:f,children:g,...k}=e,h=ne(typeof t=="number"?[t]:t)||V,n=me(h),S=i=>h>1&&i===n.length?"80%":"100%",L=Q("chakra-skeleton__group",v);return r.jsx(N.div,{className:L,...k,children:n.map((i,D)=>{if(a&&D>0)return null;const Z=a?null:{mb:i===n.length?"0":s,width:S(i),height:p};return r.jsx(o,{startColor:x,endColor:y,isLoaded:a,fadeDuration:C,speed:j,variant:_,size:w,colorScheme:f,...Z,children:D===0?g:void 0},n.length.toString()+i)})})};Y.displayName="SkeletonText";const pe={title:"Tilbakemelding/Skeleton",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{endColor:{description:"The color at the animation end",table:{type:{summary:"string"}},control:"text"},fadeDuration:{description:"The fadeIn duration in seconds. Requires isLoaded toggled to true in order to see the transition.",table:{type:{summary:"number"},defaultValue:{summary:.4}},control:"number"},fitContent:{description:"If true, the skeleton will take the width of it's children",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isLoaded:{description:"If true, it'll render its children with a nice fade transition",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},speed:{description:"The animation speed in seconds",table:{type:{summary:"number"},defaultValue:{summary:.8}},control:"number"},startColor:{description:"The color at the animation start",table:{type:{summary:"string"}},control:"text"}}},l={args:{},render:e=>r.jsxs(se,{children:[r.jsx(o,{...e,height:"20px"}),r.jsx(o,{...e,height:"20px"}),r.jsx(o,{...e,height:"20px"})]})},d={args:{fitContent:!0},render:e=>r.jsxs(o,{...e,children:[r.jsx("div",{children:"Det som er wrapped i Skeleton"}),r.jsx("div",{children:"vil ikke være synlig."})]})},c={args:{},render:e=>r.jsxs(ae,{padding:"6",boxShadow:"lg",bg:"white",children:[r.jsx(X,{...e,size:"10"}),r.jsx(Y,{...e,mt:"4",noOfLines:4,spacing:"4",skeletonHeight:"2"})]})},u={args:{startColor:"blue.500",endColor:"green.500",height:"20px"},render:e=>r.jsx(o,{...e})},m={args:{isLoaded:!0},render:e=>r.jsx(o,{...e,children:r.jsx("span",{children:"Denne teksten er ferdiglastet."})})};var R,O,$;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack>
      <KvibSkeleton {...args} height="20px" />
      <KvibSkeleton {...args} height="20px" />
      <KvibSkeleton {...args} height="20px" />
    </KvibStack>
}`,...($=(O=l.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var z,E,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    fitContent: true
  },
  render: args => <KvibSkeleton {...args}>
      <div>Det som er wrapped i Skeleton</div>
      <div>vil ikke være synlig.</div>
    </KvibSkeleton>
}`,...(P=(E=d.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var B,F,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: args => <Box padding="6" boxShadow="lg" bg="white">
      <KvibSkeletonCircle {...args} size="10" />
      <KvibSkeletonText {...args} mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var H,W,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    startColor: "blue.500",
    endColor: "green.500",
    height: "20px"
  },
  render: args => <KvibSkeleton {...args} />
}`,...(q=(W=u.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var A,M,G;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isLoaded: true
  },
  render: args => <KvibSkeleton {...args}>
      <span>Denne teksten er ferdiglastet.</span>
    </KvibSkeleton>
}`,...(G=(M=m.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};const fe=["Skeleton","SkeletonWrapped","SkeletonCircle","SkeletonColors","SkeletonLoaded"],je=Object.freeze(Object.defineProperty({__proto__:null,Skeleton:l,SkeletonCircle:c,SkeletonColors:u,SkeletonLoaded:m,SkeletonWrapped:d,__namedExportsOrder:fe,default:pe},Symbol.toStringTag,{value:"Module"}));export{je as S,d as a,c as b,u as c,m as d,l as e};
