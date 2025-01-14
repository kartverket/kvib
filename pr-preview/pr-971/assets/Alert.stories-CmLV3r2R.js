import{j as o}from"./jsx-runtime-DQFEoQHt.js";import{m as e}from"./index-Ddbt0_vl.js";const S={title:"Komponenter/Alert",component:e,parameters:{docs:{story:{inline:!0}}},argTypes:{title:{description:"The title of the alert.",table:{type:{summary:"string"}},defaultValue:{summary:""},control:{type:"text"}},status:{description:"The status of the alert. This changes the color of the alert.",table:{type:{summary:"error | success | warning | info | neutral"}},options:["error","success","warning","info","neutral"],defaultValue:{summary:"info"},control:{type:"radio"}},variant:{description:"The variant of the alert.",table:{type:{summary:"subtle | surface | outline | solid"}},options:["subtle","solid","outline","surface"],defaultValue:{summary:"subtle"},control:{type:"radio"}},size:{description:"The size of the alert.",table:{type:{summary:"sm | md | lg"}},options:["sm","md","lg"],control:{type:"radio"}}}};e.displayName="Alert";const t={args:{title:"Alert title",status:"info",variant:"subtle",size:"md"},render:r=>o.jsx(e,{...r,children:"Informative description."})},a={name:"Informative",render:r=>o.jsx(e,{title:"Oppdaterte kart er tilgjengelig",status:"info",children:"Sjekk de nyeste kartdataene før du starter planleggingen."})},s={name:"Success",render:r=>o.jsx(e,{title:"Gratulerer! Eiendomsregistreringen er fullført",status:"success",children:"Din eiendom er nå registrert, og du kan gå videre med planleggingen av dine prosjekter."})},n={name:"Warning",render:r=>o.jsx(e,{title:"Vi har tekniske problemer",status:"warning",children:"Det kan føre til at du blir avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene."})},i={name:"Error",render:r=>o.jsx(e,{title:"Vi klarer ikke å lagre skjemaet",status:"error",children:"Vi har mistet forbindelsen med serveren og får ikke lagret skjemaet. Vent litt og prøv en gang til."})};var l,m,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Alert title",
    status: "info",
    variant: "subtle",
    size: "md"
  },
  render: args => <KvibAlert {...args}>Informative description.</KvibAlert>
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Informative",
  render: _ => <KvibAlert title="Oppdaterte kart er tilgjengelig" status="info">
      Sjekk de nyeste kartdataene før du starter planleggingen.
    </KvibAlert>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Success",
  render: _ => <KvibAlert title="Gratulerer! Eiendomsregistreringen er fullført" status="success">
      Din eiendom er nå registrert, og du kan gå videre med planleggingen av dine prosjekter.
    </KvibAlert>
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var k,v,A;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Warning",
  render: _ => <KvibAlert title="Vi har tekniske problemer" status="warning">
      Det kan føre til at du blir avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene.
    </KvibAlert>
}`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var y,j,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Error",
  render: _ => <KvibAlert title="Vi klarer ikke å lagre skjemaet" status="error">
      Vi har mistet forbindelsen med serveren og får ikke lagret skjemaet. Vent litt og prøv en gang til.
    </KvibAlert>
}`,...(h=(j=i.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};const _=["Preview","InformativeAlert","SuccessAlert","WarningAlert","ErrorAlert"],x=Object.freeze(Object.defineProperty({__proto__:null,ErrorAlert:i,InformativeAlert:a,Preview:t,SuccessAlert:s,WarningAlert:n,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{x as A,i as E,a as I,t as P,s as S,n as W};
