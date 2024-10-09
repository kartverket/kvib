import{j as e}from"./extends-CwFRzn3r.js";import{B as r}from"./Badge-B6Pk8W3H.js";import{C as b}from"./chunk-BDSTZZXD-DTJULXTz.js";import{C as v,a as u}from"./Card-BeZB5sUt.js";import{B as p}from"./ButtonGroup-BQtxj9tZ.js";import{S as g}from"./chunk-ZHMYA64R-V_96TD_T.js";import{I as h}from"./chunk-QINAG4RG-EokTgSxx.js";import{H as B}from"./chunk-7OLJDQMT-lazN81OQ.js";import{T as K}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{D as x}from"./chunk-W7WUSNWJ-BjdlM_ZX.js";import{B as m}from"./Button-DzfkXRWF.js";const X={title:"Datavisning/Badge",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{variant:{description:"The variant of the badge",table:{type:{summary:"solid | subtle | outline"},defaultValue:{summary:"subtle"}},options:["solid","subtle","outline"],control:"radio"},colorScheme:{description:"The visual color appearance of the badge",table:{type:{summary:"green | blue | red | gray"},defultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"}}},t={args:{children:"Badge"},render:a=>e.jsx(r,{...a})},i={args:{},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{colorScheme:"green",children:"Success"}),e.jsx(r,{colorScheme:"red",children:"Rejected"})]})},n={args:{},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{colorScheme:"blue",children:"New"}),e.jsx(r,{colorScheme:"red",variant:"solid",children:"Not working"})]})},o={args:{},render:()=>e.jsx(r,{colorScheme:"green",children:"Success"})},s={args:{},render:()=>e.jsx(r,{colorScheme:"red",children:"Removed"})},d={args:{},render:()=>e.jsx(r,{colorScheme:"blue",children:"New"})},l={args:{},render:a=>e.jsxs(g,{direction:"column",children:[e.jsxs(v,{...a,maxW:"sm",children:[e.jsxs(u,{children:[e.jsx(r,{colorScheme:"green",ml:"300px",mb:"10px",children:"Åpen"}),e.jsx(h,{src:"https://media.istockphoto.com/id/637589830/photo/electrical-engineer-while-working-laptopl.webp?b=1&s=170667a&w=0&k=20&c=FG3lM0bqCk6In10R9cCIbilzvO0PkwXKDmzeXCCQAkU=",alt:"Boat dock with small boats",borderRadius:"md"}),e.jsxs(g,{mt:"6",spacing:"3",children:[e.jsx(B,{size:"md",children:"NRL gir tryggare luftfart"}),e.jsx(K,{children:"Helikopter og andre som flyg lågt, treng detaljert og påliteleg oversyn over kor det finst hinder for luftfarta. Derfor må alle som eig eit luftfartshinder melde inn dette til Nasjonalt register over luftfartshinder (NRL), som Kartverket driv."})]})]}),e.jsx(x,{}),e.jsx(b,{children:e.jsxs(p,{spacing:"2",children:[e.jsx(m,{variant:"primary",colorScheme:"blue",children:"Les artikkel"}),e.jsx(m,{variant:"ghost",colorScheme:"blue",children:"Legg til i leseliste"})]})})]}),e.jsxs(v,{...a,maxW:"sm",children:[e.jsxs(u,{children:[e.jsx(r,{colorScheme:"red",ml:"300px",mb:"10px",children:"Lukket"}),e.jsx(h,{src:"https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",alt:"Boat dock with small boats",borderRadius:"md"}),e.jsxs(g,{mt:"6",spacing:"3",children:[e.jsx(B,{size:"md",children:"Digitalt løft i havn"}),e.jsx(K,{children:"Kystverket har tildelt 10,5 millioner kroner til prosjektet «Digital tvilling i havn» for å styrke digitaliseringen av havneinfrastrukturen. Dette legger grunnlaget for en mer moderne og smartere havnevirksomhet."})]})]}),e.jsx(x,{}),e.jsx(b,{children:e.jsxs(p,{spacing:"2",children:[e.jsx(m,{variant:"primary",colorScheme:"blue",children:"Les artikkel"}),e.jsx(m,{variant:"ghost",colorScheme:"blue",children:"Legg til i leseliste"})]})})]})]})},c={args:{colorScheme:"green"},render:a=>e.jsxs(g,{direction:"row",children:[e.jsx(r,{...a,variant:"outline",children:"Default"}),e.jsx(r,{...a,variant:"solid",children:"Success"}),e.jsx(r,{...a,variant:"subtle",children:"Removed"})]})};var f,k,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Badge"
  },
  render: args => <KvibBadge {...args} />
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,y,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: () => <>
      <KvibBadge colorScheme="green">Success</KvibBadge>
      <KvibBadge colorScheme="red">Rejected</KvibBadge>
    </>
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,D,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: () => <>
      <KvibBadge colorScheme="blue">New</KvibBadge>
      <KvibBadge colorScheme="red" variant="solid">
        Not working
      </KvibBadge>
    </>
}`,...(R=(D=n.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var H,L,G;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  render: () => <KvibBadge colorScheme="green">Success</KvibBadge>
}`,...(G=(L=o.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var N,T,z;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: () => <KvibBadge colorScheme="red">Removed</KvibBadge>
}`,...(z=(T=s.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var F,M,I;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {},
  render: () => <KvibBadge colorScheme="blue">New</KvibBadge>
}`,...(I=(M=d.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var A,V,W;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStack direction="column">
      <KvibCard {...args} maxW="sm">
        <KvibCardBody>
          <KvibBadge colorScheme="green" ml="300px" mb="10px">
            Åpen
          </KvibBadge>
          <KvibImage src="https://media.istockphoto.com/id/637589830/photo/electrical-engineer-while-working-laptopl.webp?b=1&s=170667a&w=0&k=20&c=FG3lM0bqCk6In10R9cCIbilzvO0PkwXKDmzeXCCQAkU=" alt="Boat dock with small boats" borderRadius="md" />
          <KvibStack mt="6" spacing="3">
            <KvibHeading size="md">NRL gir tryggare luftfart</KvibHeading>
            <KvibText>
              Helikopter og andre som flyg lågt, treng detaljert og påliteleg oversyn over kor det finst hinder for
              luftfarta. Derfor må alle som eig eit luftfartshinder melde inn dette til Nasjonalt register over
              luftfartshinder (NRL), som Kartverket driv.
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
      <KvibCard {...args} maxW="sm">
        <KvibCardBody>
          <KvibBadge colorScheme="red" ml="300px" mb="10px">
            Lukket
          </KvibBadge>
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
    </KvibStack>
}`,...(W=(V=l.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,O,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    colorScheme: "green"
  },
  render: args => <KvibStack direction="row">
      <KvibBadge {...args} variant="outline">
        Default
      </KvibBadge>
      <KvibBadge {...args} variant="solid">
        Success
      </KvibBadge>
      <KvibBadge {...args} variant="subtle">
        Removed
      </KvibBadge>
    </KvibStack>
}`,...(q=(O=c.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const P=["Badge","BadgeTexts","BadgeHensikt","BadgeGreen","BadgeRed","BadgeBlue","BadgeCard","BadgeVariants"],ie=Object.freeze(Object.defineProperty({__proto__:null,Badge:t,BadgeBlue:d,BadgeCard:l,BadgeGreen:o,BadgeHensikt:n,BadgeRed:s,BadgeTexts:i,BadgeVariants:c,__namedExportsOrder:P,default:X},Symbol.toStringTag,{value:"Module"}));export{ie as B,i as a,l as b,t as c};
