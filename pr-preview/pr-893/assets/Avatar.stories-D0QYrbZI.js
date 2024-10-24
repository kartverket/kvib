import{j as e}from"./extends-CwFRzn3r.js";import{r as W}from"./index-BwDkhjyp.js";import{c as oe}from"./context-CBKykClo.js";import{c as f,a as ne}from"./factory-lWLPzty5.js";import{u as ie}from"./use-image-rNdzB_Ea.js";import{f as z}from"./forward-ref-BWI-Phbn.js";import{a as Z,o as J}from"./use-style-config-C4sZEIFb.js";import{c as D}from"./cx-BDMMs1jM.js";import{d as le}from"./attr-sHTFgF0E.js";import{c as ce}from"./call-all-DDzecCnU.js";import{d as me}from"./define-styles-BSAHv3yx.js";import{W as de,a as v}from"./wrap-CsMbKpnG.js";import{g as pe}from"./children-2ZXUntH3.js";import{S as ve}from"./stack-C3a7yBZW.js";const[fe,Q]=oe({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function be(a){const r=a.trim().split(" "),s=r[0]??"",o=r.length>1?r[r.length-1]:"";return s&&o?`${s.charAt(0)}${o.charAt(0)}`:s.charAt(0)}function U(a){const{name:r,getInitials:s,...o}=a,i=Q();return e.jsx(f.div,{role:"img","aria-label":r,...o,__css:i.label,children:r?s==null?void 0:s(r):null})}U.displayName="AvatarName";const X=a=>e.jsxs(f.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...a,children:[e.jsx("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),e.jsx("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]});function ee(a){const{src:r,srcSet:s,onError:o,onLoad:i,getInitials:l,name:n,borderRadius:c,loading:m,iconLabel:d,icon:p=e.jsx(X,{}),ignoreFallback:x,referrerPolicy:b,crossOrigin:u}=a,g=ie({src:r,onError:o,crossOrigin:u,ignoreFallback:x})==="loaded";return!r||!g?n?e.jsx(U,{className:"chakra-avatar__initials",getInitials:l,name:n}):W.cloneElement(p,{role:"img","aria-label":d}):e.jsx(f.img,{src:r,srcSet:s,alt:n??d,onLoad:i,referrerPolicy:b,crossOrigin:u??void 0,className:"chakra-avatar__img",loading:m,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})}ee.displayName="AvatarImage";const ae=me({display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0}),t=z((a,r)=>{const s=Z("Avatar",a),[o,i]=W.useState(!1),{src:l,srcSet:n,name:c,showBorder:m,borderRadius:d="full",onError:p,onLoad:x,getInitials:b=be,icon:u=e.jsx(X,{}),iconLabel:S=" avatar",loading:g,children:K,borderColor:h,ignoreFallback:N,crossOrigin:I,referrerPolicy:_,...se}=J(a),M={borderRadius:d,borderWidth:m?"2px":void 0,...ae,...s.container};return h&&(M.borderColor=h),e.jsx(f.span,{ref:r,...se,className:D("chakra-avatar",a.className),"data-loaded":le(o),__css:M,children:e.jsxs(fe,{value:s,children:[e.jsx(ee,{src:l,srcSet:n,loading:g,onLoad:ce(x,()=>{i(!0)}),onError:p,getInitials:b,name:c,borderRadius:d,icon:u,iconLabel:S,ignoreFallback:N,crossOrigin:I,referrerPolicy:_}),K]})})});t.displayName="Avatar";const xe={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},re=z(function(r,s){const{placement:o="bottom-end",className:i,...l}=r,n=Q(),m={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...xe[o],...n.badge};return e.jsx(f.div,{ref:s,...l,className:D("chakra-avatar__badge",i),__css:m})});re.displayName="AvatarBadge";const te=z(function(r,s){const o=Z("Avatar",r),{children:i,borderColor:l,max:n,spacing:c="-0.75rem",borderRadius:m="full",...d}=J(r),p=pe(i),x=n!=null?p.slice(0,n):p,b=n!=null?p.length-n:0,S=x.reverse().map((h,N)=>{const _={marginEnd:N===0?0:c,size:r.size,borderColor:h.props.borderColor??l,showBorder:!0};return W.cloneElement(h,ne(_))}),g={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...o.group},K={borderRadius:m,marginStart:c,...ae,...o.excessLabel};return e.jsxs(f.div,{ref:s,role:"group",__css:g,...d,className:D("chakra-avatar__group",r.className),children:[b>0&&e.jsx(f.span,{className:"chakra-avatar__excess",__css:K,children:`+${b}`}),S]})});te.displayName="AvatarGroup";const ue={title:"Media/Avatar",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{ignoreFallback:{description:"If true, opt out of the avatar's fallback logic and renders the img at all times.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},loading:{description:"Defines loading strategy",table:{type:{summary:"eager | lazy"}},options:["eager","lazy"],control:"radio"},name:{description:"The name of the person in the avatar. - if src has loaded, the name will be used as the alt attribute of the img - If src is not loaded, the name will be used to create the initials",table:{type:{summary:String}},control:"text"},referrerPolicy:{description:"Defining which referrer is sent when fetching the resource.",table:{type:{summary:"HTMLAttributeReferrerPolicy"}},control:"text"},showBorder:{description:"If true, the Avatar will show a border around it. Best for a group of avatars",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},size:{description:"The size of the Avatar",table:{type:{summary:"2xs | xs | sm | md | lg | xl | 2xl | full"},defaultValue:{summary:"md"}},options:["2xs","xs","sm","md","lg","xl","2xl","full"],control:{type:"radio"}},src:{description:"The image url of the Avatar",table:{type:{summary:"String"}},control:"text"},srcSet:{description:"List of sources to use for different screen resolutions",table:{type:{summary:"String"}},control:"text"}}},A={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:a=>e.jsx(t,{...a,name:"Eksempel Navn"})},y={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:a=>e.jsxs(de,{children:[e.jsx(v,{children:e.jsx(t,{...a,size:"2xs"})}),e.jsx(v,{children:e.jsx(t,{...a,size:"xs"})}),e.jsx(v,{children:e.jsx(t,{...a,size:"sm"})}),e.jsx(v,{children:e.jsx(t,{...a,size:"md"})}),e.jsx(v,{children:e.jsx(t,{...a,size:"lg"})}),e.jsx(v,{children:e.jsx(t,{...a,size:"xl"})}),e.jsx(v,{children:e.jsx(t,{...a,size:"2xl"})})]})},j={args:{},render:a=>e.jsxs(ve,{direction:"row",children:[e.jsx(t,{...a,name:"Eksempel Navn",src:"https://bit.ly/broken-link",bg:"green.500"}),e.jsx(t,{...a,name:"Annet Eksempel",src:"https://bit.ly/broken-link"}),e.jsx(t,{...a,src:"https://bit.ly/broken-link"})]})},k={args:{},render:a=>e.jsx(t,{...a,children:e.jsx(re,{boxSize:"1.25em",bg:"green.500"})})},w={args:{name:"Eksempel Navn"},render:a=>e.jsxs(te,{size:"md",max:2,children:[e.jsx(t,{...a,src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"}),e.jsx(t,{...a}),e.jsx(t,{...a}),e.jsx(t,{...a}),e.jsx(t,{...a})]})};var C,B,E;A.parameters={...A.parameters,docs:{...(C=A.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: "Eksempel Navn",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  render: args => <KvibAvatar {...args} name="Eksempel Navn" />
}`,...(E=(B=A.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var G,H,L;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(H=y.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var P,F,V;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack direction="row">
      <KvibAvatar {...args} name="Eksempel Navn" src="https://bit.ly/broken-link" bg="green.500" />
      <KvibAvatar {...args} name="Annet Eksempel" src="https://bit.ly/broken-link" />
      <KvibAvatar {...args} src="https://bit.ly/broken-link" />
    </KvibStack>
}`,...(V=(F=j.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var T,q,O;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibAvatar {...args}>
      <KvibAvatarBadge boxSize="1.25em" bg="green.500" />
    </KvibAvatar>
}`,...(O=(q=k.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var R,Y,$;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...($=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const ge=["Preview","AvatarSizes","AvatarFallback","AvatarBadge","AvatarGrouping"],Me=Object.freeze(Object.defineProperty({__proto__:null,AvatarBadge:k,AvatarFallback:j,AvatarGrouping:w,AvatarSizes:y,Preview:A,__namedExportsOrder:ge,default:ue},Symbol.toStringTag,{value:"Module"}));export{Me as A,A as P,j as a,y as b,k as c,w as d};
