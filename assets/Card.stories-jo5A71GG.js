import{j as e}from"./extends-CwFRzn3r.js";import{r as F}from"./index-BwDkhjyp.js";import{u as E,C as i,a as t}from"./Card-CjsZQyOM.js";import{f as I}from"./forward-ref-BWI-Phbn.js";import{c as q}from"./factory-lWLPzty5.js";import{c as P}from"./cx-BDMMs1jM.js";import{T as n}from"./text-CypcOzo0.js";import{S as u}from"./stack-C3a7yBZW.js";import{H as v}from"./heading-CZK5ruZ7.js";import{I as _}from"./image-CU6Rr-ts.js";import{D as Y}from"./divider-DJk7Djzd.js";import{C as g}from"./card-footer-C2gRFENz.js";import{B as O}from"./ButtonGroup-DIYU158p.js";import{B as b}from"./Button-BsQrLbgE.js";const p=I(function(a,A){const{className:W,...R}=a,L=E();return e.jsx(q.div,{ref:A,className:P("chakra-card__header",W),__css:L.header,...R})}),N={title:"Komponenter/Card",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{direction:{table:{type:{summary:"ResponsiveValue<FlexDirection>"}},control:"text"},align:{table:{type:{summary:"ResponsiveValue<AlignItems>"}},control:"text"},justify:{table:{type:{summary:"ResponsiveValue<JustifyContent>"}},control:"text"},size:{description:"Size of the Card",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the Card",table:{type:{summary:"elevated | outline | filled | unstyled"},defaultValue:{summary:"elevated"}},options:["elevated","outline","filled","unstyled"],control:"radio"}}},s={parameters:{docs:{canvas:{sourceState:"shown"}}},render:r=>e.jsx(i,{...r,children:e.jsx(t,{children:e.jsx(n,{children:"Se alle endringer på eiendomsgrenser i år."})})})},o={args:{size:"sm"},render:r=>e.jsx(u,{spacing:"4",children:["elevated","outline","filled","unstyled"].map(a=>F.createElement(i,{...r,key:a,variant:a},e.jsx(p,{children:e.jsx(v,{size:"md",children:a})}),e.jsx(t,{children:e.jsxs(n,{children:["variant = ",a]})})))})},d={render:r=>e.jsx(u,{spacing:"4",children:["sm","md","lg"].map(a=>F.createElement(i,{...r,key:a,size:a},e.jsx(p,{children:e.jsx(v,{size:"md",children:a})}),e.jsx(t,{children:e.jsxs(n,{children:["size = ",a]})})))})},l={render:r=>e.jsxs(i,{...r,maxW:"sm",children:[e.jsxs(t,{children:[e.jsx(_,{src:"https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",alt:"Boat dock with small boats",borderRadius:"md"}),e.jsxs(u,{mt:"6",spacing:"3",children:[e.jsx(v,{size:"md",children:"Digitalt løft i havn"}),e.jsx(n,{children:"Kystverket har tildelt 10,5 millioner kroner til prosjektet «Digital tvilling i havn» for å styrke digitaliseringen av havneinfrastrukturen. Dette legger grunnlaget for en mer moderne og smartere havnevirksomhet."})]})]}),e.jsx(Y,{}),e.jsx(g,{children:e.jsxs(O,{spacing:"2",children:[e.jsx(b,{variant:"primary",colorScheme:"blue",children:"Les artikkel"}),e.jsx(b,{variant:"ghost",colorScheme:"blue",children:"Legg til i leseliste"})]})})]})},c={render:r=>e.jsxs(i,{...r,align:"center",children:[e.jsx(p,{children:e.jsx(v,{size:"md",children:"Kundeportal"})}),e.jsx(t,{children:e.jsx(n,{children:"Se et utdrag av bruk den siste måneden."})}),e.jsx(g,{children:e.jsx(b,{colorScheme:"blue",children:"Se utdrag"})})]})},m={render:r=>e.jsxs(i,{...r,direction:"row",overflow:"hidden",variant:"outline",children:[e.jsx(_,{objectFit:"cover",maxW:{base:"100%",sm:"200px"},src:"https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",alt:"Boat dock with small boats"}),e.jsxs(u,{children:[e.jsxs(t,{children:[e.jsx(v,{size:"md",children:"Digitalt løft i havn"}),e.jsx(n,{py:"2",children:"Kystverket har tildelt 10,5 millioner kroner til prosjektet «Digital tvilling i havn» for å styrke digitaliseringen av havneinfrastrukturen. Dette legger grunnlaget for en mer moderne og smartere havnevirksomhet."})]}),e.jsx(g,{children:e.jsx(b,{variant:"primary",colorScheme:"blue",children:"Les artikkel"})})]})]})};var h,x,K;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibCard {...args}>
      <KvibCardBody>
        <KvibText>Se alle endringer på eiendomsgrenser i år.</KvibText>
      </KvibCardBody>
    </KvibCard>
}`,...(K=(x=s.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var f,C,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: args => <KvibStack spacing="4">
      {["elevated", "outline", "filled", "unstyled"].map(variant => <KvibCard {...args} key={variant} variant={variant}>
          <KvibCardHeader>
            <KvibHeading size="md">{variant}</KvibHeading>
          </KvibCardHeader>
          <KvibCardBody>
            <KvibText>variant = {variant}</KvibText>
          </KvibCardBody>
        </KvibCard>)}
    </KvibStack>
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var j,k,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <KvibStack spacing="4">
      {["sm", "md", "lg"].map(size => <KvibCard {...args} key={size} size={size}>
          <KvibCardHeader>
            <KvibHeading size="md">{size}</KvibHeading>
          </KvibCardHeader>
          <KvibCardBody>
            <KvibText>size = {size}</KvibText>
          </KvibCardBody>
        </KvibCard>)}
    </KvibStack>
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var B,H,D;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <KvibCard {...args} maxW="sm">
      <KvibCardBody>
        <KvibImage src="https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Boat dock with small boats" borderRadius="md" />
        <KvibStack mt="6" spacing="3">
          <KvibHeading size="md">Digitalt løft i havn</KvibHeading>
          <KvibText>
            Kystverket har tildelt 10,5 millioner kroner til prosjektet «Digital tvilling i havn» for å styrke
            digitaliseringen av havneinfrastrukturen. Dette legger grunnlaget for en mer moderne og smartere
            havnevirksomhet.
          </KvibText>
        </KvibStack>
      </KvibCardBody>
      <KvibDivider />
      <KvibCardFooter>
        <KvibButtonGroup spacing="2">
          <KvibButton variant="primary" colorScheme="blue">
            Les artikkel
          </KvibButton>
          <KvibButton variant="ghost" colorScheme="blue">
            Legg til i leseliste
          </KvibButton>
        </KvibButtonGroup>
      </KvibCardFooter>
    </KvibCard>
}`,...(D=(H=l.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var w,z,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <KvibCard {...args} align="center">
      <KvibCardHeader>
        <KvibHeading size="md">Kundeportal</KvibHeading>
      </KvibCardHeader>
      <KvibCardBody>
        <KvibText>Se et utdrag av bruk den siste måneden.</KvibText>
      </KvibCardBody>
      <KvibCardFooter>
        <KvibButton colorScheme="blue">Se utdrag</KvibButton>
      </KvibCardFooter>
    </KvibCard>
}`,...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var M,G,V;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <KvibCard {...args} direction="row" overflow="hidden" variant="outline">
      <KvibImage objectFit="cover" maxW={{
      base: "100%",
      sm: "200px"
    }} src="https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Boat dock with small boats" />

      <KvibStack>
        <KvibCardBody>
          <KvibHeading size="md">Digitalt løft i havn</KvibHeading>

          <KvibText py="2">
            Kystverket har tildelt 10,5 millioner kroner til prosjektet «Digital tvilling i havn» for å styrke
            digitaliseringen av havneinfrastrukturen. Dette legger grunnlaget for en mer moderne og smartere
            havnevirksomhet.
          </KvibText>
        </KvibCardBody>

        <KvibCardFooter>
          <KvibButton variant="primary" colorScheme="blue">
            Les artikkel
          </KvibButton>
        </KvibCardFooter>
      </KvibStack>
    </KvibCard>
}`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};const J=["Preview","CardVariants","CardSizes","CardComposition","CardCentering","CardHorizontal"],le=Object.freeze(Object.defineProperty({__proto__:null,CardCentering:c,CardComposition:l,CardHorizontal:m,CardSizes:d,CardVariants:o,Preview:s,__namedExportsOrder:J,default:N},Symbol.toStringTag,{value:"Module"}));export{le as C,s as P,o as a,l as b,m as c};
