import{j as l}from"./index-D6_wGsWO.js";import{t as n}from"./index-B9GIEwwi.js";const s={title:"Komponenter/Button",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},args:{colorPalette:"green",variant:"solid",size:"md",disabled:!1,loading:!1,iconFill:!1,iconAriaIsHidden:!1},argTypes:{size:{description:"Size of the Button",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the Button.",table:{type:{summary:"solid | outline | ghost | plain"}},defaultValue:{summary:"solid"},options:["solid","outline","ghost","plain"],control:{type:"radio"}},colorPalette:{description:"The visual color appearance of the component.",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},disabled:{description:"If true, the button will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},loading:{description:"If true, the button will show a spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},iconFill:{table:{type:{summary:"boolean"}},control:"boolean"},iconAriaIsHidden:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},leftIcon:{table:{type:{summary:"string"}},control:"text",defaultValue:{summary:""}},rightIcon:{table:{type:{summary:"string"}},control:"text",defaultValue:{summary:""}}}},e={args:{children:"Klikk her"},parameters:{docs:{canvas:{sourceState:"shown"}}},render:function(t){return l.jsx(n,{...t,children:t.children})}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Klikk her"
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: function Render(args) {
    return <KvibButton {...args}>{args.children}</KvibButton>;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const i=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{c as B,e as P};
