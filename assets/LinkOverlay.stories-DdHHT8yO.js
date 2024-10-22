import{j as e}from"./extends-CwFRzn3r.js";import{f as b}from"./forward-ref-BWI-Phbn.js";import{c as g}from"./factory-C6UFhaBW.js";import{c as u}from"./cx-BDMMs1jM.js";import{H as h}from"./heading--NES2npU.js";import{T as f}from"./text-ByHKaHOl.js";import{B as d}from"./box-DeqT4ixr.js";const l=b(function(a,i){const{isExternal:o,target:t,rel:K,className:j,...L}=a;return e.jsx(g.a,{...L,ref:i,className:u("chakra-linkbox__overlay",j),rel:o?"noopener noreferrer":K,target:o?"_blank":t,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),y=b(function(a,i){const{className:o,...t}=a;return e.jsx(g.div,{ref:i,position:"relative",...t,className:u("chakra-linkbox",o),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})}),B={title:"Navigasjon/LinkOverlay",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isExternal:{description:"If true, the link will open in new tab",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},n={render:r=>e.jsxs(y,{as:"article",maxW:"sm",p:"5",borderWidth:"1px",rounded:"md",children:[e.jsx(h,{size:"md",my:"2",children:e.jsx(l,{...r,href:"#",children:"Denne kan trykkes på"})}),e.jsx(f,{children:"Hele komponenten er en knapp"})]})},s={render:r=>e.jsxs(y,{as:"article",maxW:"sm",p:"5",borderWidth:"1px",rounded:"md",children:[e.jsx(d,{children:"13 timer siden"}),e.jsx(h,{size:"md",my:"2",children:e.jsx(l,{...r,href:"#",children:"Ikke gå deg vill på bærtur"})}),e.jsx(f,{mb:"3",children:'Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet du hvor du er.'}),e.jsx(d,{as:"a",color:"green",href:"#",fontWeight:"bold",children:"En ekstra link"})]})};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibHeading size="md" my="2">
        <KvibLinkOverlay {...args} href="#">
          Denne kan trykkes på
        </KvibLinkOverlay>
      </KvibHeading>
      <KvibText>Hele komponenten er en knapp</KvibText>
    </KvibLinkBox>
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,k,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibBox>13 timer siden</KvibBox>
      <KvibHeading size="md" my="2">
        <KvibLinkOverlay {...args} href="#">
          Ikke gå deg vill på bærtur
        </KvibLinkOverlay>
      </KvibHeading>
      <KvibText mb="3">
        Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet
        du hvor du er.
      </KvibText>
      <KvibBox as="a" color="green" href="#" fontWeight="bold">
        En ekstra link
      </KvibBox>
    </KvibLinkBox>
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const _=["Preview","LinkOverlayNested"],E=Object.freeze(Object.defineProperty({__proto__:null,LinkOverlayNested:s,Preview:n,__namedExportsOrder:_,default:B},Symbol.toStringTag,{value:"Module"}));export{E as L,n as P,s as a};
