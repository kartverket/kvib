import{j as s}from"./extends-CwFRzn3r.js";import{F as o}from"./FooterInline-B4BVY31q.js";import{L as p}from"./Link-C3IPjqxf.js";const u={title:"Sideelementer/Footer/Footer-inline",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{accessibilityUrl:{description:"Link to accessibility statement",table:{type:{summary:"string"}},control:"text"},privacyUrl:{description:"Link to privacy statement",table:{type:{summary:"string"}},control:"text"},logoLink:{description:"Href for logo link",table:{type:{summary:"string"},defaulValue:{summary:"/"}},control:"text"}}},e={render:t=>s.jsx(o,{...t})},r={args:{accessibilityUrl:"https://uustatus.no/nb/erklaringer/publisert/f048c5ff-2167-48c5-b706-bd106c15e9c9"},render:t=>s.jsx(o,{...t,children:s.jsx(p,{href:"https://github.com/kartverket/kvib","aria-label":"Besøk Kartverkets Designsystem på Github",fontWeight:"bold",children:"Github"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <KvibFooterInline {...args} />
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    accessibilityUrl: "https://uustatus.no/nb/erklaringer/publisert/f048c5ff-2167-48c5-b706-bd106c15e9c9"
  },
  render: args => <KvibFooterInline {...args}>
      <Link href="https://github.com/kartverket/kvib" aria-label="Besøk Kartverkets Designsystem på Github" fontWeight="bold">
        Github
      </Link>
    </KvibFooterInline>
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const b=["Preview","FooterInlineCustom"],k=Object.freeze(Object.defineProperty({__proto__:null,FooterInlineCustom:r,Preview:e,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{k as F,e as P,r as a};
