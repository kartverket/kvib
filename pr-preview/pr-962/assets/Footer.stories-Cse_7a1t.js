import{j as u}from"./jsx-runtime-DgHZ7iq2.js";import{ac as n,ad as d}from"./index-i3c0vUEJ.js";const m={title:"Komponenter/Footer",component:n,parameters:{docs:{story:{inline:!0}}},argTypes:{accessibilityUrl:{description:"Link to accessibility statement",control:"text"},excludeContactInfo:{description:"Exclude contact information",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeHelp:{description:"Exclude help",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeNews:{description:"Exclude news",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeOpeningHours:{description:"Exclude opening hours",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludePrivacyLink:{description:"Exclude privacy link",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeSocialMedia:{description:"Exclude social media",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},contactInfoEmailAddress:{control:"text"}}};n.displayName="Footer";const e={args:{accessibilityUrl:"/",excludeContactInfo:!1,excludeHelp:!1,excludeNews:!1,excludeOpeningHours:!1,excludePrivacyLink:!1,excludeSocialMedia:!1},render:a=>u.jsx(n,{...a})};d.displayName="FooterInline";const t={argTypes:{accessibilityUrl:{description:"Link to accessibility statement",table:{type:{summary:"string"}},control:"text"},privacyUrl:{description:"Link to privacy statement",table:{type:{summary:"string"}},control:"text"},logoLink:{description:"href for logo link",table:{type:{summary:"string"},defaulValue:{summary:"/"}},control:"text"}},render:a=>u.jsx(d,{...a})};var o,r,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const p=["Preview","FooterInline"],x=Object.freeze(Object.defineProperty({__proto__:null,FooterInline:t,Preview:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{x as F,e as P,t as a};
