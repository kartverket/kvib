import{j as e}from"./extends-CwFRzn3r.js";import{u as O,b as $,A as r}from"./avatar-CQjBFWBG.js";import{W as J,a as t}from"./wrap-DvF2RbdH.js";import{f as _}from"./forward-ref-BWI-Phbn.js";import{c as g,a as Q}from"./factory-C6UFhaBW.js";import{c as N}from"./cx-BDMMs1jM.js";import{r as U}from"./index-BwDkhjyp.js";import{a as X,o as Z}from"./use-style-config-YUvqttAg.js";import{g as ee}from"./children-2ZXUntH3.js";import{S as ae}from"./stack-REYSnkee.js";const re={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},C=_(function(s,d){const{placement:p="bottom-end",className:b,...v}=s,n=O(),x={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...re[p],...n.badge};return e.jsx(g.div,{ref:d,...v,className:N("chakra-avatar__badge",b),__css:x})});C.displayName="AvatarBadge";const V=_(function(s,d){const p=X("Avatar",s),{children:b,borderColor:v,max:n,spacing:f="-0.75rem",borderRadius:x="full",...P}=Z(s),u=ee(b),T=n!=null?u.slice(0,n):u,h=n!=null?u.length-n:0,q=T.reverse().map((A,R)=>{const L={marginEnd:R===0?0:f,size:s.size,borderColor:A.props.borderColor??v,showBorder:!0};return U.cloneElement(A,Q(L))}),Y={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...p.group},F={borderRadius:x,marginStart:f,...$,...p.excessLabel};return e.jsxs(g.div,{ref:d,role:"group",__css:Y,...P,className:N("chakra-avatar__group",s.className),children:[h>0&&e.jsx(g.span,{className:"chakra-avatar__excess",__css:F,children:`+${h}`}),q]})});V.displayName="AvatarGroup";const te={title:"Media/Avatar",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{ignoreFallback:{description:"If true, opt out of the avatar's fallback logic and renders the img at all times.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},loading:{description:"Defines loading strategy",table:{type:{summary:"eager | lazy"}},options:["eager","lazy"],control:"radio"},name:{description:"The name of the person in the avatar. - if src has loaded, the name will be used as the alt attribute of the img - If src is not loaded, the name will be used to create the initials",table:{type:{summary:String}},control:"text"},referrerPolicy:{description:"Defining which referrer is sent when fetching the resource.",table:{type:{summary:"HTMLAttributeReferrerPolicy"}},control:"text"},showBorder:{description:"If true, the Avatar will show a border around it. Best for a group of avatars",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},size:{description:"The size of the Avatar",table:{type:{summary:"2xs | xs | sm | md | lg | xl | 2xl | full"},defaultValue:{summary:"md"}},options:["2xs","xs","sm","md","lg","xl","2xl","full"],control:{type:"radio"}},src:{description:"The image url of the Avatar",table:{type:{summary:"String"}},control:"text"},srcSet:{description:"List of sources to use for different screen resolutions",table:{type:{summary:"String"}},control:"text"}}},o={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:a=>e.jsx(r,{...a,name:"Eksempel Navn"})},i={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:a=>e.jsxs(J,{children:[e.jsx(t,{children:e.jsx(r,{...a,size:"2xs"})}),e.jsx(t,{children:e.jsx(r,{...a,size:"xs"})}),e.jsx(t,{children:e.jsx(r,{...a,size:"sm"})}),e.jsx(t,{children:e.jsx(r,{...a,size:"md"})}),e.jsx(t,{children:e.jsx(r,{...a,size:"lg"})}),e.jsx(t,{children:e.jsx(r,{...a,size:"xl"})}),e.jsx(t,{children:e.jsx(r,{...a,size:"2xl"})})]})},l={args:{},render:a=>e.jsxs(ae,{direction:"row",children:[e.jsx(r,{...a,name:"Eksempel Navn",src:"https://bit.ly/broken-link",bg:"green.500"}),e.jsx(r,{...a,name:"Annet Eksempel",src:"https://bit.ly/broken-link"}),e.jsx(r,{...a,src:"https://bit.ly/broken-link"})]})},c={args:{},render:a=>e.jsx(r,{...a,children:e.jsx(C,{boxSize:"1.25em",bg:"green.500"})})},m={args:{name:"Eksempel Navn"},render:a=>e.jsxs(V,{size:"md",max:2,children:[e.jsx(r,{...a,src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"}),e.jsx(r,{...a}),e.jsx(r,{...a}),e.jsx(r,{...a}),e.jsx(r,{...a})]})};var y,j,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: "Eksempel Navn",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  render: args => <KvibAvatar {...args} name="Eksempel Navn" />
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var K,k,S;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var z,D,W;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack direction="row">
      <KvibAvatar {...args} name="Eksempel Navn" src="https://bit.ly/broken-link" bg="green.500" />
      <KvibAvatar {...args} name="Annet Eksempel" src="https://bit.ly/broken-link" />
      <KvibAvatar {...args} src="https://bit.ly/broken-link" />
    </KvibStack>
}`,...(W=(D=l.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var M,B,I;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibAvatar {...args}>
      <KvibAvatarBadge boxSize="1.25em" bg="green.500" />
    </KvibAvatar>
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var E,G,H;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const se=["Preview","AvatarSizes","AvatarFallback","AvatarBadge","AvatarGrouping"],ue=Object.freeze(Object.defineProperty({__proto__:null,AvatarBadge:c,AvatarFallback:l,AvatarGrouping:m,AvatarSizes:i,Preview:o,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{ue as A,o as P,l as a,i as b,c,m as d};
