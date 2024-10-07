import{j as e}from"./extends-CwFRzn3r.js";import{u as $,b as J,A as r}from"./chunk-V7PAE35Z-BI7W5cr-.js";import{f as N,c as g,a as C,o as Q}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{a as U}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{g as X}from"./index-2ZXUntH3.js";import{r as Z}from"./index-BwDkhjyp.js";import{W as ee,a as s}from"./chunk-7ELO524Q-Fc7yoYFC.js";import{S as ae}from"./chunk-ZHMYA64R-V_96TD_T.js";var re={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},V=N(function(t,n){const{placement:d="bottom-end",className:b,...v}=t,o=$(),x={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...re[d],...o.badge};return e.jsx(g.div,{ref:n,...v,className:C("chakra-avatar__badge",b),__css:x})});V.displayName="AvatarBadge";function te(a){const t=Object.assign({},a);for(let n in t)t[n]===void 0&&delete t[n];return t}var T=N(function(t,n){const d=U("Avatar",t),{children:b,borderColor:v,max:o,spacing:f="-0.75rem",borderRadius:x="full",...q}=Q(t),u=X(b),Y=o!=null?u.slice(0,o):u,h=o!=null?u.length-o:0,F=Y.reverse().map((A,R)=>{var y;const L={marginEnd:R===0?0:f,size:t.size,borderColor:(y=A.props.borderColor)!=null?y:v,showBorder:!0};return Z.cloneElement(A,te(L))}),P={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...d.group},O={borderRadius:x,marginStart:f,...J,...d.excessLabel};return e.jsxs(g.div,{ref:n,role:"group",__css:P,...q,className:C("chakra-avatar__group",t.className),children:[h>0&&e.jsx(g.span,{className:"chakra-avatar__excess",__css:O,children:`+${h}`}),F]})});T.displayName="AvatarGroup";const se={title:"Media/Avatar",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{ignoreFallback:{description:"If true, opt out of the avatar's fallback logic and renders the img at all times.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},loading:{description:"Defines loading strategy",table:{type:{summary:"eager | lazy"}},options:["eager","lazy"],control:"radio"},name:{description:"The name of the person in the avatar. - if src has loaded, the name will be used as the alt attribute of the img - If src is not loaded, the name will be used to create the initials",table:{type:{summary:String}},control:"text"},referrerPolicy:{description:"Defining which referrer is sent when fetching the resource.",table:{type:{summary:"HTMLAttributeReferrerPolicy"}},control:"text"},showBorder:{description:"If true, the Avatar will show a border around it. Best for a group of avatars",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},size:{description:"The size of the Avatar",table:{type:{summary:"2xs | xs | sm | md | lg | xl | 2xl | full"},defaultValue:{summary:"md"}},options:["2xs","xs","sm","md","lg","xl","2xl","full"],control:{type:"radio"}},src:{description:"The image url of the Avatar",table:{type:{summary:"String"}},control:"text"},srcSet:{description:"List of sources to use for different screen resolutions",table:{type:{summary:"String"}},control:"text"}}},i={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:a=>e.jsx(r,{...a,name:"Eksempel Navn"})},l={args:{name:"Eksempel Navn",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"},render:a=>e.jsxs(ee,{children:[e.jsx(s,{children:e.jsx(r,{...a,size:"2xs"})}),e.jsx(s,{children:e.jsx(r,{...a,size:"xs"})}),e.jsx(s,{children:e.jsx(r,{...a,size:"sm"})}),e.jsx(s,{children:e.jsx(r,{...a,size:"md"})}),e.jsx(s,{children:e.jsx(r,{...a,size:"lg"})}),e.jsx(s,{children:e.jsx(r,{...a,size:"xl"})}),e.jsx(s,{children:e.jsx(r,{...a,size:"2xl"})})]})},c={args:{},render:a=>e.jsxs(ae,{direction:"row",children:[e.jsx(r,{...a,name:"Eksempel Navn",src:"https://bit.ly/broken-link",bg:"green.500"}),e.jsx(r,{...a,name:"Annet Eksempel",src:"https://bit.ly/broken-link"}),e.jsx(r,{...a,src:"https://bit.ly/broken-link"})]})},m={args:{},render:a=>e.jsx(r,{...a,children:e.jsx(V,{boxSize:"1.25em",bg:"green.500"})})},p={args:{name:"Eksempel Navn"},render:a=>e.jsxs(T,{size:"md",max:2,children:[e.jsx(r,{...a,src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"}),e.jsx(r,{...a}),e.jsx(r,{...a}),e.jsx(r,{...a}),e.jsx(r,{...a})]})};var j,K,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: "Eksempel Navn",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  render: args => <KvibAvatar {...args} name="Eksempel Navn" />
}`,...(w=(K=i.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var k,S,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var D,W,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack direction="row">
      <KvibAvatar {...args} name="Eksempel Navn" src="https://bit.ly/broken-link" bg="green.500" />
      <KvibAvatar {...args} name="Annet Eksempel" src="https://bit.ly/broken-link" />
      <KvibAvatar {...args} src="https://bit.ly/broken-link" />
    </KvibStack>
}`,...(M=(W=c.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var B,I,E;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibAvatar {...args}>
      <KvibAvatarBadge boxSize="1.25em" bg="green.500" />
    </KvibAvatar>
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var G,H,_;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(_=(H=p.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const ne=["Avatar","AvatarSizes","AvatarFallback","AvatarBadge","AvatarGrouping"],xe=Object.freeze(Object.defineProperty({__proto__:null,Avatar:i,AvatarBadge:m,AvatarFallback:c,AvatarGrouping:p,AvatarSizes:l,__namedExportsOrder:ne,default:se},Symbol.toStringTag,{value:"Module"}));export{xe as A,c as a,l as b,m as c,p as d,i as e};
