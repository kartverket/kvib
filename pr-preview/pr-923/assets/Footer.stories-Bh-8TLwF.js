import{j as i}from"./index-D6_wGsWO.js";import{az as r}from"./index-D3uUSTz6.js";const d={title:"Komponenter/Footer",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{accessibilityUrl:{description:"Link to accessibility statement",control:"text"},excludeContactInfo:{description:"Exclude contact information",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeHelp:{description:"Exclude help",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeNews:{description:"Exclude news",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeOpeningHours:{description:"Exclude opening hours",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludePrivacyLink:{description:"Exclude privacy link",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeSocialMedia:{description:"Exclude social media",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},contactInfoEmailAddress:{control:"text"}}},e={args:{accessibilityUrl:"/",excludeContactInfo:!1,excludeHelp:!1,excludeNews:!1,excludeOpeningHours:!1,excludePrivacyLink:!1,excludeSocialMedia:!1},render:o=>i.jsx(r,{...o})},a={args:{accessibilityUrl:void 0,excludeContactInfo:!0,excludeHelp:!0,excludeNews:!0,excludeOpeningHours:!0,excludePrivacyLink:!0,excludeSocialMedia:!0},render:o=>i.jsx(r,{...o})};var l,t,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    accessibilityUrl: "/",
    excludeContactInfo: false,
    excludeHelp: false,
    excludeNews: false,
    excludeOpeningHours: false,
    excludePrivacyLink: false,
    excludeSocialMedia: false
  },
  render: args => <KvibFooter {...args} />
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var n,c,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    accessibilityUrl: undefined,
    excludeContactInfo: true,
    excludeHelp: true,
    excludeNews: true,
    excludeOpeningHours: true,
    excludePrivacyLink: true,
    excludeSocialMedia: true
  },
  render: args => <KvibFooter {...args} />
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const m=["Preview","FooterNone"],f=Object.freeze(Object.defineProperty({__proto__:null,FooterNone:a,Preview:e,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{f as F,e as P,a};
