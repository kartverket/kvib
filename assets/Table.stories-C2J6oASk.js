import{j as e}from"./extends-CwFRzn3r.js";import{u as g,a as d,T as l,b as T,c as n,d as r,e as v,f as i}from"./tr-B1Ot1Dcr.js";import{f as S}from"./forward-ref-BWI-Phbn.js";import{c as C}from"./factory-DBKMNJMh.js";const m=S((s,a)=>{const{placement:o="bottom",...z}=s,k=g();return e.jsx(C.caption,{...z,ref:a,__css:{...k.caption,captionSide:o}})});m.displayName="TableCaption";const _=S((s,a)=>{const o=g();return e.jsx(C.tfoot,{...s,ref:a,__css:o.tfoot})}),R={title:"Komponenter/Table",component:d,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"closed"}}},argTypes:{variant:{description:"The variant of the Table",table:{type:{summary:"simple | striped | unstyled"},defaultValue:{summary:"simple"}},options:["simple","striped","unstyled"],control:"radio"},colorScheme:{description:"The visual color appearance of the component",table:{type:{summary:"green | blue | red | gray"},defaultValue:{summary:"gray"}},options:["green","blue","red","gray"],control:"radio"},size:{description:"The size of the Table",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}},t={render:s=>e.jsx(l,{children:e.jsxs(d,{...s,children:[e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(r,{children:"Tekstkolonne"}),e.jsx(r,{isNumeric:!0,children:"Numerisk"})]})}),e.jsxs(v,{children:[e.jsxs(n,{children:[e.jsx(i,{children:"Rad 1"}),e.jsx(i,{isNumeric:!0,children:"1"})]}),e.jsxs(n,{children:[e.jsx(i,{children:"Rad 2"}),e.jsx(i,{isNumeric:!0,children:"2"})]})]})]})})},b={args:{variant:"striped",colorScheme:"green",size:"md"},render:s=>e.jsx(l,{children:e.jsxs(d,{...s,children:[e.jsx(m,{children:"Imperial to metric conversion factors"}),e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(r,{children:"To convert"}),e.jsx(r,{children:"into"}),e.jsx(r,{isNumeric:!0,children:"multiply by"})]})}),e.jsxs(v,{children:[e.jsxs(n,{children:[e.jsx(i,{children:"inches"}),e.jsx(i,{children:"millimetres (mm)"}),e.jsx(i,{isNumeric:!0,children:"25.4"})]}),e.jsxs(n,{children:[e.jsx(i,{children:"feet"}),e.jsx(i,{children:"centimetres (cm)"}),e.jsx(i,{isNumeric:!0,children:"30.48"})]}),e.jsxs(n,{children:[e.jsx(i,{children:"yards"}),e.jsx(i,{children:"metres (m)"}),e.jsx(i,{isNumeric:!0,children:"0.91444"})]})]}),e.jsx(_,{children:e.jsxs(n,{children:[e.jsx(r,{children:"To convert"}),e.jsx(r,{children:"into"}),e.jsx(r,{isNumeric:!0,children:"multiply by"})]})})]})})},c={args:{size:"sm"},render:s=>e.jsx(l,{children:e.jsxs(d,{...s,children:[e.jsx(m,{children:"Imperial to metric conversion factors"}),e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(r,{children:"To convert"}),e.jsx(r,{children:"into"}),e.jsx(r,{isNumeric:!0,children:"multiply by"})]})}),e.jsxs(v,{children:[e.jsxs(n,{children:[e.jsx(i,{children:"inches"}),e.jsx(i,{children:"millimetres (mm)"}),e.jsx(i,{isNumeric:!0,children:"25.4"})]}),e.jsxs(n,{children:[e.jsx(i,{children:"feet"}),e.jsx(i,{children:"centimetres (cm)"}),e.jsx(i,{isNumeric:!0,children:"30.48"})]}),e.jsxs(n,{children:[e.jsx(i,{children:"yards"}),e.jsx(i,{children:"metres (m)"}),e.jsx(i,{isNumeric:!0,children:"0.91444"})]})]}),e.jsx(_,{children:e.jsxs(n,{children:[e.jsx(r,{children:"To convert"}),e.jsx(r,{children:"into"}),e.jsx(r,{isNumeric:!0,children:"multiply by"})]})})]})})};var K,h,u;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <KvibTableContainer>
      <KvibTable {...args}>
        <KvibThead>
          <KvibTr>
            <KvibTh>Tekstkolonne</KvibTh>
            <KvibTh isNumeric>Numerisk</KvibTh>
          </KvibTr>
        </KvibThead>
        <KvibTbody>
          <KvibTr>
            <KvibTd>Rad 1</KvibTd>
            <KvibTd isNumeric>1</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>Rad 2</KvibTd>
            <KvibTd isNumeric>2</KvibTd>
          </KvibTr>
        </KvibTbody>
      </KvibTable>
    </KvibTableContainer>
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var j,x,p;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "striped",
    colorScheme: "green",
    size: "md"
  },
  render: args => <KvibTableContainer>
      <KvibTable {...args}>
        <KvibTableCaption>Imperial to metric conversion factors</KvibTableCaption>
        <KvibThead>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibThead>
        <KvibTbody>
          <KvibTr>
            <KvibTd>inches</KvibTd>
            <KvibTd>millimetres (mm)</KvibTd>
            <KvibTd isNumeric>25.4</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>feet</KvibTd>
            <KvibTd>centimetres (cm)</KvibTd>
            <KvibTd isNumeric>30.48</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>yards</KvibTd>
            <KvibTd>metres (m)</KvibTd>
            <KvibTd isNumeric>0.91444</KvibTd>
          </KvibTr>
        </KvibTbody>
        <KvibTfoot>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibTfoot>
      </KvibTable>
    </KvibTableContainer>
}`,...(p=(x=b.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var y,f,N;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: args => <KvibTableContainer>
      <KvibTable {...args}>
        <KvibTableCaption>Imperial to metric conversion factors</KvibTableCaption>
        <KvibThead>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibThead>
        <KvibTbody>
          <KvibTr>
            <KvibTd>inches</KvibTd>
            <KvibTd>millimetres (mm)</KvibTd>
            <KvibTd isNumeric>25.4</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>feet</KvibTd>
            <KvibTd>centimetres (cm)</KvibTd>
            <KvibTd isNumeric>30.48</KvibTd>
          </KvibTr>
          <KvibTr>
            <KvibTd>yards</KvibTd>
            <KvibTd>metres (m)</KvibTd>
            <KvibTd isNumeric>0.91444</KvibTd>
          </KvibTr>
        </KvibTbody>
        <KvibTfoot>
          <KvibTr>
            <KvibTh>To convert</KvibTh>
            <KvibTh>into</KvibTh>
            <KvibTh isNumeric>multiply by</KvibTh>
          </KvibTr>
        </KvibTfoot>
      </KvibTable>
    </KvibTableContainer>
}`,...(N=(f=c.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const V=["Preview","TableVariants","TableSizes"],E=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,TableSizes:c,TableVariants:b,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{t as P,E as T,b as a,c as b};