import{j as e}from"./extends-CwFRzn3r.js";import{A as t}from"./Alert-CorwDObj.js";import{A as s}from"./chunk-3KCBMPN5-Dapgpkcw.js";import{B as a}from"./chunk-PULVB27S-CgiffgmI.js";import{A as i}from"./chunk-QURMB2UJ-D6nRmiHQ.js";import{A as n}from"./chunk-CUKBNH6U-Bnoln8s6.js";import{V as E}from"./chunk-NTCQBYKE-BJzF3cNd.js";const J={title:"Tilbakemelding/Alert",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{status:{description:"This affects the color scheme and icon used. Setting the colorScheme prop will overide the colorScheme of the status.",table:{type:{summary:"error | success | warning | info"}},options:["error","success","warning","info"],defaultValue:{summary:"info"},control:{type:"radio"}},variant:{description:"The variant of the alert.",table:{type:{summary:"subtle | solid | left-accent | top-accent"}},options:["subtle","solid","left-accent","top-accent"],defaultValue:{summary:"subtle"},control:{type:"radio"}}}},o={args:{status:"info"},parameters:{docs:{canvas:{sourceState:"shown"}}},render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{}),e.jsxs(a,{children:[e.jsx(i,{children:"Dette er tittelen!"}),e.jsx(n,{children:"Dette er beskrivelsen."})]})]})},l={args:{status:"success",variant:"left-accent"},render:r=>e.jsxs(t,{status:"success",...r,children:[e.jsx(s,{}),e.jsx(n,{children:"Endringer lagret"})]})},c={args:{status:"info"},render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{}),e.jsxs(a,{children:[e.jsx(i,{children:"Tips"}),e.jsx(n,{children:"For å sette inn et nytt bilde, kan du bruke filutforskjeren fra menyen på toppen av siden."})]})]})},d={args:{variant:"left-accent",status:"warning"},render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{}),e.jsxs(a,{children:[e.jsx(i,{children:"Du er i ferd med å slette fila permanent"}),e.jsx(n,{children:"Du kan ikke hente den i etterkant"})]})]})},p={args:{status:"error"},render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{}),e.jsxs(a,{children:[e.jsx(i,{children:"Får ikke opprettet forbindelse med serveren"}),e.jsx(n,{children:"Prøv igjen om et par minutter, eller ta kontakt hvis problemet forsetter"})]})]})},m={parameters:{a11y:{disable:!0}},args:{status:"warning"},render:r=>e.jsxs(E,{gap:"1rem",children:[e.jsxs(t,{...r,children:[e.jsx(s,{}),e.jsxs(a,{children:[e.jsx(i,{children:"Jeg er en viktig 'warning'"}),e.jsx(n,{children:"Jeg er viktig"})]})]}),e.jsxs(t,{variant:"solid",...r,children:[e.jsx(s,{}),e.jsxs(a,{children:[e.jsx(i,{children:"Jeg er en enda viktigere 'warning'"}),e.jsx(n,{children:"Jeg er viktigere enn 'waning'-en over!"})]})]})]})};var u,g,A;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "info"
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibAlert {...args}>
      <AlertIcon />
      <Box>
        <AlertTitle>Dette er tittelen!</AlertTitle>
        <AlertDescription>Dette er beskrivelsen.</AlertDescription>
      </Box>
    </KvibAlert>
}`,...(A=(g=o.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var x,v,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "success",
    variant: "left-accent"
  },
  render: args => <KvibAlert status={"success"} {...args}>
      <AlertIcon />
      <AlertDescription>Endringer lagret</AlertDescription>
    </KvibAlert>
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,j,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: "info"
  },
  render: args => <KvibAlert {...args}>
      <AlertIcon />
      <Box>
        <AlertTitle>Tips</AlertTitle>
        <AlertDescription>
          For å sette inn et nytt bilde, kan du bruke filutforskjeren fra menyen på toppen av siden.
        </AlertDescription>
      </Box>
    </KvibAlert>
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var k,D,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "left-accent",
    status: "warning"
  },
  render: args => <KvibAlert {...args}>
      <AlertIcon />
      <Box>
        <AlertTitle>Du er i ferd med å slette fila permanent</AlertTitle>
        <AlertDescription>Du kan ikke hente den i etterkant</AlertDescription>
      </Box>
    </KvibAlert>
}`,...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var T,y,w;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    status: "error"
  },
  render: args => <KvibAlert {...args}>
      <AlertIcon />
      <Box>
        <AlertTitle>Får ikke opprettet forbindelse med serveren</AlertTitle>
        <AlertDescription>Prøv igjen om et par minutter, eller ta kontakt hvis problemet forsetter</AlertDescription>
      </Box>
    </KvibAlert>
}`,...(w=(y=p.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var B,K,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      disable: true
    }
  },
  args: {
    status: "warning"
  },
  render: args => <VStack gap="1rem">
      <KvibAlert {...args}>
        <AlertIcon />
        <Box>
          <AlertTitle>Jeg er en viktig 'warning'</AlertTitle>
          <AlertDescription>Jeg er viktig</AlertDescription>
        </Box>
      </KvibAlert>
      <KvibAlert variant="solid" {...args}>
        <AlertIcon />
        <Box>
          <AlertTitle>Jeg er en enda viktigere 'warning'</AlertTitle>
          <AlertDescription>Jeg er viktigere enn 'waning'-en over!</AlertDescription>
        </Box>
      </KvibAlert>
    </VStack>
}`,...(I=(K=m.parameters)==null?void 0:K.docs)==null?void 0:I.source}}};const V=["Alert","AlertSuccess","AlertInfo","AlertWarning","AlertError","AlertEmphasisWarning"],R=Object.freeze(Object.defineProperty({__proto__:null,Alert:o,AlertEmphasisWarning:m,AlertError:p,AlertInfo:c,AlertSuccess:l,AlertWarning:d,__namedExportsOrder:V,default:J},Symbol.toStringTag,{value:"Module"}));export{R as A,p as a,d as b,l as c,c as d,m as e,o as f};
