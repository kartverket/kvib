import{j as a}from"./extends-CwFRzn3r.js";import{c as na}from"./index-CHDWSgKD.js";import{f as W,c as v,a as z,o as J,d as oa,e as ia}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{u as la}from"./chunk-SPIKMR6I-lNfAZPIg.js";import{r as D}from"./index-BwDkhjyp.js";import{a as Q}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{g as ca}from"./index-2ZXUntH3.js";import{W as ma,a as p}from"./chunk-7ELO524Q-Fc7yoYFC.js";import{S as da}from"./chunk-ZHMYA64R-V_96TD_T.js";var[pa,U]=na({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),va={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},X=W(function(r,t){const{placement:n="bottom-end",className:o,...l}=r,i=U(),m={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...va[n],...i.badge};return a.jsx(v.div,{ref:t,...l,className:z("chakra-avatar__badge",o),__css:m})});X.displayName="AvatarBadge";function ba(e){var r;const t=e.split(" "),n=(r=t[0])!=null?r:"",o=t.length>1?t[t.length-1]:"";return n&&o?`${n.charAt(0)}${o.charAt(0)}`:n.charAt(0)}function aa(e){const{name:r,getInitials:t,...n}=e,o=U();return a.jsx(v.div,{role:"img","aria-label":r,...n,__css:o.label,children:r?t==null?void 0:t(r):null})}aa.displayName="AvatarName";var ea=e=>a.jsxs(v.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[a.jsx("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),a.jsx("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]});function ra(e){const{src:r,srcSet:t,onError:n,onLoad:o,getInitials:l,name:i,borderRadius:c,loading:m,iconLabel:b,icon:d=a.jsx(ea,{}),ignoreFallback:x,referrerPolicy:u,crossOrigin:f}=e,g=la({src:r,onError:n,crossOrigin:f,ignoreFallback:x})==="loaded";return!r||!g?i?a.jsx(aa,{className:"chakra-avatar__initials",getInitials:l,name:i}):D.cloneElement(d,{role:"img","aria-label":b}):a.jsx(v.img,{src:r,srcSet:t,alt:i,onLoad:o,referrerPolicy:u,crossOrigin:f??void 0,className:"chakra-avatar__img",loading:m,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})}ra.displayName="AvatarImage";var ta={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},s=W((e,r)=>{const t=Q("Avatar",e),[n,o]=D.useState(!1),{src:l,srcSet:i,name:c,showBorder:m,borderRadius:b="full",onError:d,onLoad:x,getInitials:u=ba,icon:f=a.jsx(ea,{}),iconLabel:S=" avatar",loading:g,children:K,borderColor:h,ignoreFallback:N,crossOrigin:_,referrerPolicy:M,...I}=J(e),C={borderRadius:b,borderWidth:m?"2px":void 0,...ta,...t.container};return h&&(C.borderColor=h),a.jsx(v.span,{ref:r,...I,className:z("chakra-avatar",e.className),"data-loaded":oa(n),__css:C,children:a.jsxs(pa,{value:t,children:[a.jsx(ra,{src:l,srcSet:i,loading:g,onLoad:ia(x,()=>{o(!0)}),onError:d,getInitials:u,name:c,borderRadius:b,icon:f,iconLabel:S,ignoreFallback:N,crossOrigin:_,referrerPolicy:M}),K]})})});s.displayName="Avatar";function ua(e){const r=Object.assign({},e);for(let t in r)r[t]===void 0&&delete r[t];return r}var sa=W(function(r,t){const n=Q("Avatar",r),{children:o,borderColor:l,max:i,spacing:c="-0.75rem",borderRadius:m="full",...b}=J(r),d=ca(o),x=i!=null?d.slice(0,i):d,u=i!=null?d.length-i:0,S=x.reverse().map((h,N)=>{var _;const I={marginEnd:N===0?0:c,size:r.size,borderColor:(_=h.props.borderColor)!=null?_:l,showBorder:!0};return D.cloneElement(h,ua(I))}),g={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...n.group},K={borderRadius:m,marginStart:c,...ta,...n.excessLabel};return a.jsxs(v.div,{ref:t,role:"group",__css:g,...b,className:z("chakra-avatar__group",r.className),children:[u>0&&a.jsx(v.span,{className:"chakra-avatar__excess",__css:K,children:`+${u}`}),S]})});sa.displayName="AvatarGroup";const fa={title:"Media/Avatar",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{ignoreFallback:{description:"If true, opt out of the avatar's fallback logic and renders the img at all times.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},loading:{description:"Defines loading strategy",table:{type:{summary:"eager | lazy"}},options:["eager","lazy"],control:"radio"},name:{description:"The name of the person in the avatar. - if src has loaded, the name will be used as the alt attribute of the img - If src is not loaded, the name will be used to create the initials",table:{type:{summary:String}},control:"text"},referrerPolicy:{description:"Defining which referrer is sent when fetching the resource.",table:{type:{summary:"HTMLAttributeReferrerPolicy"}},control:"text"},showBorder:{description:"If true, the Avatar will show a border around it. Best for a group of avatars",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},size:{description:"The size of the Avatar",table:{type:{summary:"2xs | xs | sm | md | lg | xl | 2xl | full"},defaultValue:{summary:"md"}},options:["2xs","xs","sm","md","lg","xl","2xl","full"],control:{type:"radio"}},src:{description:"The image url of the Avatar",table:{type:{summary:"String"}},control:"text"},srcSet:{description:"List of sources to use for different screen resolutions",table:{type:{summary:"String"}},control:"text"}}},A={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:e=>a.jsx(s,{...e,name:"Eksempel Navn"})},y={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:e=>a.jsxs(ma,{children:[a.jsx(p,{children:a.jsx(s,{...e,size:"2xs"})}),a.jsx(p,{children:a.jsx(s,{...e,size:"xs"})}),a.jsx(p,{children:a.jsx(s,{...e,size:"sm"})}),a.jsx(p,{children:a.jsx(s,{...e,size:"md"})}),a.jsx(p,{children:a.jsx(s,{...e,size:"lg"})}),a.jsx(p,{children:a.jsx(s,{...e,size:"xl"})}),a.jsx(p,{children:a.jsx(s,{...e,size:"2xl"})})]})},j={args:{},render:e=>a.jsxs(da,{direction:"row",children:[a.jsx(s,{...e,name:"Eksempel Navn",src:"https://bit.ly/broken-link",bg:"green.500"}),a.jsx(s,{...e,name:"Annet Eksempel",src:"https://bit.ly/broken-link"}),a.jsx(s,{...e,src:"https://bit.ly/broken-link"})]})},k={args:{},render:e=>a.jsx(s,{...e,children:a.jsx(X,{boxSize:"1.25em",bg:"green.500"})})},w={args:{name:"Eksempel Navn"},render:e=>a.jsxs(sa,{size:"md",max:2,children:[a.jsx(s,{...e,src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"}),a.jsx(s,{...e}),a.jsx(s,{...e}),a.jsx(s,{...e}),a.jsx(s,{...e})]})};var B,E,G;A.parameters={...A.parameters,docs:{...(B=A.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    name: "Eksempel Navn",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  render: args => <KvibAvatar {...args} name="Eksempel Navn" />
}`,...(G=(E=A.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var H,L,F;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    name: "Eksempel Navn",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  render: args => <KvibWrap>
      <KvibWrapItem>
        <KvibAvatar {...args} size="2xs" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="xs" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="sm" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="md" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="lg" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="xl" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="2xl" />
      </KvibWrapItem>
    </KvibWrap>
}`,...(F=(L=y.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var V,P,T;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack direction="row">
      <KvibAvatar {...args} name="Eksempel Navn" src="https://bit.ly/broken-link" bg="green.500" />
      <KvibAvatar {...args} name="Annet Eksempel" src="https://bit.ly/broken-link" />
      <KvibAvatar {...args} src="https://bit.ly/broken-link" />
    </KvibStack>
}`,...(T=(P=j.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var O,q,R;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibAvatar {...args}>
      <KvibAvatarBadge boxSize="1.25em" bg="green.500" />
    </KvibAvatar>
}`,...(R=(q=k.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var Y,$,Z;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    name: "Eksempel Navn"
  },
  render: args => <KvibAvatarGroup size="md" max={2}>
      <KvibAvatar {...args} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" />
      <KvibAvatar {...args} />
      <KvibAvatar {...args} />
      <KvibAvatar {...args} />
      <KvibAvatar {...args} />
    </KvibAvatarGroup>
}`,...(Z=($=w.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};const xa=["Avatar","AvatarSizes","AvatarFallback","AvatarBadge","AvatarGrouping"],_a=Object.freeze(Object.defineProperty({__proto__:null,Avatar:A,AvatarBadge:k,AvatarFallback:j,AvatarGrouping:w,AvatarSizes:y,__namedExportsOrder:xa,default:fa},Symbol.toStringTag,{value:"Module"}));export{_a as A,j as a,y as b,k as c,w as d,A as e};
