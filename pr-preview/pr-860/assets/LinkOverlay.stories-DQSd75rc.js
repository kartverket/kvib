import{j as e}from"./extends-CwFRzn3r.js";import{f as x,c as k,a as u}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{T as h}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{H as f}from"./chunk-7OLJDQMT-lazN81OQ.js";import{B as l}from"./chunk-PULVB27S-CgiffgmI.js";var d=x(function(i,o){const{isExternal:a,target:t,rel:K,className:L,...j}=i;return e.jsx(k.a,{...j,ref:o,className:u("chakra-linkbox__overlay",L),rel:a?"noopener noreferrer":K,target:a?"_blank":t,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),y=x(function(i,o){const{className:a,...t}=i;return e.jsx(k.div,{ref:o,position:"relative",...t,className:u("chakra-linkbox",a),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});const B={title:"Navigasjon/LinkOverlay",component:d,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isExternal:{description:"If true, the link will open in new tab",table:{type:{summary:Boolean},defaultValue:{summary:!1}},control:"boolean"}}},s={args:{},render:r=>e.jsxs(y,{as:"article",maxW:"sm",p:"5",borderWidth:"1px",rounded:"md",children:[e.jsx(l,{children:"13 timer siden"}),e.jsx(f,{size:"md",my:"2",children:e.jsx(d,{...r,href:"#",children:"Ikke gå deg vill på bærtur"})}),e.jsx(h,{children:'Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet du hvor du er.'})]})},n={args:{},render:r=>e.jsxs(y,{as:"article",maxW:"sm",p:"5",borderWidth:"1px",rounded:"md",children:[e.jsx(l,{children:"13 timer siden"}),e.jsx(f,{size:"md",my:"2",children:e.jsx(d,{...r,href:"#",children:"Ikke gå deg vill på bærtur"})}),e.jsx(h,{mb:"3",children:'Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet du hvor du er.'}),e.jsx(l,{as:"a",color:"green",href:"#",fontWeight:"bold",children:"En ekstra link"})]})};var v,c,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibLinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <KvibBox>13 timer siden</KvibBox>
      <KvibHeading size="md" my="2">
        <KvibLinkOverlay {...args} href="#">
          Ikke gå deg vill på bærtur
        </KvibLinkOverlay>
      </KvibHeading>
      <KvibText>
        Bær- og soppsesongen er i full gang til skogs og fjells. Last ned Kartverkets gratis mobil-app "Hvor?", så vet
        du hvor du er.
      </KvibText>
    </KvibLinkBox>
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,p,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
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
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const O=["LinkOverlay","LinkOverlayNested"],I=Object.freeze(Object.defineProperty({__proto__:null,LinkOverlay:s,LinkOverlayNested:n,__namedExportsOrder:O,default:B},Symbol.toStringTag,{value:"Module"}));export{I as L,s as a,n as b};
