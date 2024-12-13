import{j as s}from"./index-D6_wGsWO.js";import{b1 as o,aK as p}from"./index-BTO1GrQj.js";const u={title:"Komponenter/Footer Inline",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{accessibilityUrl:{description:"Link to accessibility statement",table:{type:{summary:"string"}},control:"text"},privacyUrl:{description:"Link to privacy statement",table:{type:{summary:"string"}},control:"text"},logoLink:{description:"Href for logo link",table:{type:{summary:"string"},defaulValue:{summary:"/"}},control:"text"}}},e={render:r=>s.jsx(o,{...r})},t={args:{accessibilityUrl:"https://uustatus.no/nb/erklaringer/publisert/f048c5ff-2167-48c5-b706-bd106c15e9c9"},render:r=>s.jsx(o,{...r,children:s.jsx(p,{href:"https://github.com/kartverket/kvib","aria-label":"Besøk Kartverkets Designsystem på Github",fontWeight:"bold",children:"Github"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <KvibFooterInline {...args} />
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    accessibilityUrl: "https://uustatus.no/nb/erklaringer/publisert/f048c5ff-2167-48c5-b706-bd106c15e9c9"
  },
  render: args => <KvibFooterInline {...args}>
      <Link href="https://github.com/kartverket/kvib" aria-label="Besøk Kartverkets Designsystem på Github" fontWeight="bold">
        Github
      </Link>
    </KvibFooterInline>
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const b=["Preview","FooterInlineCustom"],k=Object.freeze(Object.defineProperty({__proto__:null,FooterInlineCustom:t,Preview:e,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{k as F,e as P,t as a};
