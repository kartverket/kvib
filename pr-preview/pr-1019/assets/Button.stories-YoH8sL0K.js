import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t,H as m}from"./index-iDPW5jzC.js";const z={title:"Komponenter/Button",component:t,parameters:{docs:{story:{inline:!0}}},args:{colorPalette:"green",variant:"solid",size:"md",disabled:!1,loading:!1,iconFill:!1,iconAriaIsHidden:!1},argTypes:{size:{description:"Size of the Button",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the Button.",table:{type:{summary:"solid | outline | ghost | plain"}},defaultValue:{summary:"solid"},options:["solid","outline","ghost","plain"],control:{type:"radio"}},colorPalette:{description:"The visual color appearance of the component.",table:{type:{summary:"'green' | 'blue' | 'gray' | 'red'"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},disabled:{description:"If true, the button will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},loading:{description:"If true, the button will show a spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},iconFill:{table:{type:{summary:"boolean"}},control:"boolean"},iconAriaIsHidden:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},leftIcon:{table:{type:{summary:"string"}},control:"text",defaultValue:{summary:""}},rightIcon:{table:{type:{summary:"string"}},control:"text",defaultValue:{summary:""}}}};t.displayName="Button";const r={render:n=>e.jsx(t,{...n,children:"Button"})},a={name:"Solid",parameters:{controls:{exclude:/.*/g}},render:n=>e.jsx(t,{variant:"solid",leftIcon:"save",children:"Lagre"})},o={name:"Outline",parameters:{controls:{exclude:/.*/g}},render:n=>e.jsx(t,{variant:"outline",children:"Avbryt"})},s={name:"Ghost",parameters:{controls:{exclude:/.*/g}},render:n=>e.jsx(t,{variant:"ghost",leftIcon:"edit",children:"Rediger"})},l={name:"Plain",parameters:{controls:{exclude:/.*/g}},render:n=>e.jsx(t,{variant:"plain",leftIcon:"send",children:"Videresend"})};m.displayName="HStack";const i={name:"Neutral",parameters:{controls:{exclude:/.*/g}},render:n=>e.jsxs(m,{gap:"1rem",children:[e.jsx(t,{variant:"solid",colorPalette:"gray",leftIcon:"print",children:"Skriv ut"}),e.jsx(t,{variant:"outline",colorPalette:"gray",leftIcon:"edit",children:"Rediger"}),e.jsx(t,{variant:"ghost",colorPalette:"gray",leftIcon:"send",children:"Videresend"})]})},d={name:"Error/Danger",parameters:{controls:{exclude:/.*/g}},render:n=>e.jsxs(m,{gap:"1rem",children:[e.jsx(t,{variant:"solid",colorPalette:"red",leftIcon:"delete",children:"Slett"}),e.jsx(t,{variant:"outline",colorPalette:"red",leftIcon:"delete",children:"Slett"}),e.jsx(t,{variant:"ghost",colorPalette:"red",leftIcon:"delete",children:"Slett"})]})},c={name:"Loading",parameters:{controls:{exclude:/.*/g}},render:n=>e.jsxs(m,{gap:"1rem",children:[e.jsx(t,{variant:"solid",loading:!0,children:"Laster"}),e.jsx(t,{variant:"outline",loading:!0,children:"Laster"}),e.jsx(t,{variant:"ghost",loading:!0,children:"Laster"})]})},u={name:"Disabled",parameters:{controls:{exclude:/.*/g}},render:n=>e.jsxs(m,{gap:"1rem",children:[e.jsx(t,{variant:"solid",disabled:!0,children:"Lagre"}),e.jsx(t,{variant:"outline",disabled:!0,children:"Avbryt"}),e.jsx(t,{variant:"ghost",disabled:!0,children:"Rediger"})]})};var p,g,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <KvibButton {...args}>Button</KvibButton>
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,B,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Solid",
  parameters: {
    controls: {
      exclude: /.*/g
    }
  },
  render: _ => <KvibButton variant="solid" leftIcon="save">
      Lagre
    </KvibButton>
}`,...(y=(B=a.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var h,f,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Outline",
  parameters: {
    controls: {
      exclude: /.*/g
    }
  },
  render: _ => <KvibButton variant="outline">Avbryt</KvibButton>
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,K,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Ghost",
  parameters: {
    controls: {
      exclude: /.*/g
    }
  },
  render: _ => <KvibButton variant="ghost" leftIcon="edit">
      Rediger
    </KvibButton>
}`,...(j=(K=s.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var I,P,_;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Plain",
  parameters: {
    controls: {
      exclude: /.*/g
    }
  },
  render: _ => <KvibButton variant="plain" leftIcon="send">
      Videresend
    </KvibButton>
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var L,H,k;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Neutral",
  parameters: {
    controls: {
      exclude: /.*/g
    }
  },
  render: _ => <HStack gap="1rem">
      <KvibButton variant="solid" colorPalette="gray" leftIcon="print">
        Skriv ut
      </KvibButton>
      <KvibButton variant="outline" colorPalette="gray" leftIcon="edit">
        Rediger
      </KvibButton>
      <KvibButton variant="ghost" colorPalette="gray" leftIcon="send">
        Videresend
      </KvibButton>
    </HStack>
}`,...(k=(H=i.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var V,D,O;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Error/Danger",
  parameters: {
    controls: {
      exclude: /.*/g
    }
  },
  render: _ => <HStack gap="1rem">
      <KvibButton variant="solid" colorPalette="red" leftIcon="delete">
        Slett
      </KvibButton>
      <KvibButton variant="outline" colorPalette="red" leftIcon="delete">
        Slett
      </KvibButton>
      <KvibButton variant="ghost" colorPalette="red" leftIcon="delete">
        Slett
      </KvibButton>
    </HStack>
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var E,N,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Loading",
  parameters: {
    controls: {
      exclude: /.*/g
    }
  },
  render: _ => <HStack gap="1rem">
      <KvibButton variant="solid" loading>
        Laster
      </KvibButton>
      <KvibButton variant="outline" loading>
        Laster
      </KvibButton>
      <KvibButton variant="ghost" loading>
        Laster
      </KvibButton>
    </HStack>
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var A,w,G;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Disabled",
  parameters: {
    controls: {
      exclude: /.*/g
    }
  },
  render: _ => <HStack gap="1rem">
      <KvibButton variant="solid" disabled>
        Lagre
      </KvibButton>
      <KvibButton variant="outline" disabled>
        Avbryt
      </KvibButton>
      <KvibButton variant="ghost" disabled>
        Rediger
      </KvibButton>
    </HStack>
}`,...(G=(w=u.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};const T=["Preview","SolidButton","OutlineButton","GhostButton","PlainButton","NeutralButton","ErrorDangerButton","LoadingButton","DisabledButton"],q=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:u,ErrorDangerButton:d,GhostButton:s,LoadingButton:c,NeutralButton:i,OutlineButton:o,PlainButton:l,Preview:r,SolidButton:a,__namedExportsOrder:T,default:z},Symbol.toStringTag,{value:"Module"}));export{q as B,u as D,d as E,s as G,c as L,i as N,o as O,r as P,a as S,l as a};
