import{j as e}from"./index-D6_wGsWO.js";import{aZ as i,a_ as p,z as v,T as k,B as c,aU as x}from"./index-f5MS2Vzd.js";const b={title:"Komponenter/Link Overlay",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}}},r={render:s=>e.jsxs(p,{as:"article",maxW:"sm",p:"5",borderWidth:"1px",rounded:"md",children:[e.jsx(v,{size:"md",my:"2",children:e.jsx(i,{...s,href:"#",children:"Denne kan trykkes på"})}),e.jsx(k,{children:"Hele komponenten er en knapp"})]})},n={render:s=>e.jsxs(p,{as:"article",maxW:"sm",p:"5",borderWidth:"1px",rounded:"md",children:[e.jsx(c,{children:"13 timer siden"}),e.jsx(v,{size:"md",my:"2",children:e.jsx(i,{...s,href:"#",children:"Ikke gå deg vill på bærtur"})}),e.jsx(k,{mb:"3",children:'Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet du hvor du er.'}),e.jsx(x,{href:"#",children:"En ekstra link"})]})};var a,o,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibHeading size="md" my="2">
        <KvibLinkOverlay {...args} href="#">
          Denne kan trykkes på
        </KvibLinkOverlay>
      </KvibHeading>
      <KvibText>Hele komponenten er en knapp</KvibText>
    </KvibLinkBox>
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <Link href="#">En ekstra link</Link>
    </KvibLinkBox>
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const g=["Preview","LinkOverlayNested"],K=Object.freeze(Object.defineProperty({__proto__:null,LinkOverlayNested:n,Preview:r,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{K as L,r as P};
