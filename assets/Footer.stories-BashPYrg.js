import{j as u}from"./jsx-runtime-DgHZ7iq2.js";import{ac as a,ad as m}from"./index-CMGylVHX.js";const d={title:"Komponenter/Footer",component:a,parameters:{docs:{story:{inline:!0}}},argTypes:{accessibilityUrl:{description:"Link to accessibility statement",control:"text"},excludeContactInfo:{description:"Exclude contact information",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeHelp:{description:"Exclude help",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeNews:{description:"Exclude news",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeOpeningHours:{description:"Exclude opening hours",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludePrivacyLink:{description:"Exclude privacy link",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},excludeSocialMedia:{description:"Exclude social media",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},contactInfoEmailAddress:{control:"text"},colorPalette:{description:"The color palette of the footer links",table:{type:{summary:"'green' | 'blue' | 'gray'"},defaultValue:{summary:"green"}},control:{type:"radio"},options:["green","blue","gray"]}}};a.displayName="Footer";const e={args:{accessibilityUrl:"/",excludeContactInfo:!1,excludeHelp:!1,excludeNews:!1,excludeOpeningHours:!1,excludePrivacyLink:!1,excludeSocialMedia:!1},render:o=>u.jsx(a,{...o})};m.displayName="FooterInline";const t={argTypes:{accessibilityUrl:{description:"Link to accessibility statement",table:{type:{summary:"string"}},control:"text"},privacyUrl:{description:"Link to privacy statement",table:{type:{summary:"string"}},control:"text"},logoLink:{description:"href for logo link",table:{type:{summary:"string"},defaulValue:{summary:"/"}},control:"text"},colorPalette:{description:"The color palette of the footer links",table:{type:{summary:"'green' | 'blue' | 'gray'"},defaultValue:{summary:"green"}},control:{type:"radio"},options:["green","blue","gray"]}},render:o=>u.jsx(m,{...o})};var r,l,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    },
    colorPalette: {
      description: "The color palette of the footer links",
      table: {
        type: {
          summary: "'green' | 'blue' | 'gray'"
        },
        defaultValue: {
          summary: "green"
        }
      },
      control: {
        type: "radio"
      },
      options: ["green", "blue", "gray"]
    }
  },
  render: args => <KvibFooterInline {...args} />
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const p=["Preview","FooterInline"],b=Object.freeze(Object.defineProperty({__proto__:null,FooterInline:t,Preview:e,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{b as F,e as P,t as a};
