import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{L as i,a as v}from"./link-box-8g71a2kv.js";import{H as c}from"./heading-D7346gVA.js";import{T as b}from"./text-DJW8V014.js";import{B as o}from"./box-C9nK2UO9.js";const x={title:"Komponenter/Link Overlay",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isExternal:{description:"If true, the link will open in new tab",table:{type:{summary:"Boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},r={render:s=>e.jsxs(v,{as:"article",maxW:"sm",p:"5",borderWidth:"1px",rounded:"md",children:[e.jsx(c,{size:"md",my:"2",children:e.jsx(i,{...s,href:"#",children:"Denne kan trykkes på"})}),e.jsx(b,{children:"Hele komponenten er en knapp"})]})},n={render:s=>e.jsxs(v,{as:"article",maxW:"sm",p:"5",borderWidth:"1px",rounded:"md",children:[e.jsx(o,{children:"13 timer siden"}),e.jsx(c,{size:"md",my:"2",children:e.jsx(i,{...s,href:"#",children:"Ikke gå deg vill på bærtur"})}),e.jsx(b,{mb:"3",children:'Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet du hvor du er.'}),e.jsx(o,{as:"a",color:"green",href:"#",fontWeight:"bold",children:"En ekstra link"})]})};var a,t,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibHeading size="md" my="2">
        <KvibLinkOverlay {...args} href="#">
          Denne kan trykkes på
        </KvibLinkOverlay>
      </KvibHeading>
      <KvibText>Hele komponenten er en knapp</KvibText>
    </KvibLinkBox>
}`,...(d=(t=r.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const k=["Preview","LinkOverlayNested"],y=Object.freeze(Object.defineProperty({__proto__:null,LinkOverlayNested:n,Preview:r,__namedExportsOrder:k,default:x},Symbol.toStringTag,{value:"Module"}));export{y as L,r as P,n as a};
