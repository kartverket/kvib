import{j as c}from"./index-D6_wGsWO.js";import{aS as u,aT as d}from"./index-C4Tll0EB.js";const m={title:"Komponenter/Footer",component:u,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{accessibilityUrl:{description:"Link to accessibility statement",control:"text"},excludeContactInfo:{description:"Exclude contact information",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeHelp:{description:"Exclude help",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeNews:{description:"Exclude news",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeOpeningHours:{description:"Exclude opening hours",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludePrivacyLink:{description:"Exclude privacy link",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeSocialMedia:{description:"Exclude social media",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},contactInfoEmailAddress:{control:"text"}}},e={args:{accessibilityUrl:"/",excludeContactInfo:!1,excludeHelp:!1,excludeNews:!1,excludeOpeningHours:!1,excludePrivacyLink:!1,excludeSocialMedia:!1},render:a=>c.jsx(u,{...a})},t={argTypes:{accessibilityUrl:{description:"Link to accessibility statement",table:{type:{summary:"string"}},control:"text"},privacyUrl:{description:"Link to privacy statement",table:{type:{summary:"string"}},control:"text"},logoLink:{description:"href for logo link",table:{type:{summary:"string"},defaulValue:{summary:"/"}},control:"text"}},render:a=>c.jsx(d,{...a})};var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var l,s,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    accessibilityUrl: {
      description: "Link to accessibility statement",
      table: {
        type: {
          summary: "string"
        }
      },
      control: "text"
    },
    privacyUrl: {
      description: "Link to privacy statement",
      table: {
        type: {
          summary: "string"
        }
      },
      control: "text"
    },
    logoLink: {
      description: "href for logo link",
      table: {
        type: {
          summary: "string"
        },
        defaulValue: {
          summary: "/"
        }
      },
      control: "text"
    }
  },
  render: args => <KvibFooterInline {...args} />
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const p=["Preview","FooterInline"],x=Object.freeze(Object.defineProperty({__proto__:null,FooterInline:t,Preview:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{x as F,e as P,t as a};
