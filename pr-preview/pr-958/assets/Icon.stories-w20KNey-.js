import{j as r}from"./jsx-runtime-DgHZ7iq2.js";import{am as o,K as i}from"./index-CRrqj8Jn.js";const z={title:"Komponenter/Icon",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{color:{control:"text"},weight:{table:{type:{summary:"100 | 200 | 300 | 400 | 500 | 600 | 700"}},control:{type:"range",min:100,max:700,step:100},defaultValue:{summary:400}},grade:{table:{type:{summary:"-25 | 0 | 200"}},control:"radio",options:[-25,0,200],defaultValue:{summary:0}},size:{table:{type:{summary:"20 | 24 | 40 | 48 | number"}},control:"radio",options:[20,24,40,48],defaultValue:{summary:24}},filled:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},ariaIsHidden:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},className:{table:{type:{summary:"string"}},control:"text"}},args:{icon:"favorite",filled:!1,size:24,grade:0,weight:400}},n={render:e=>r.jsx(o,{color:"colorPalette.500",...e})},a={args:{size:40},render:e=>r.jsxs(i,{children:[r.jsx(o,{...e,icon:"home",color:"green.400"}),r.jsx(o,{...e,icon:"home",color:"green.400",filled:!0}),r.jsx(o,{...e,icon:"warning",color:"orange",filled:!0})]})},s={args:{icon:"map"},render:e=>r.jsxs(i,{children:[r.jsx(o,{...e,size:20}),r.jsx(o,{...e,size:24}),r.jsx(o,{...e,size:40}),r.jsx(o,{...e,size:48})]})},t={args:{icon:"database"},render:e=>r.jsxs(i,{children:[r.jsx(o,{...e,weight:100}),r.jsx(o,{...e,weight:200}),r.jsx(o,{...e,weight:300}),r.jsx(o,{...e,weight:400}),r.jsx(o,{...e,weight:500}),r.jsx(o,{...e,weight:600}),r.jsx(o,{...e,weight:700})]})},c={args:{icon:"contactless"},render:e=>r.jsxs(i,{children:[r.jsx(o,{...e,grade:-25}),r.jsx(o,{...e,grade:0}),r.jsx(o,{...e,grade:200})]})};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Icon color="colorPalette.500" {...args} />
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,u,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 40
  },
  render: args => {
    return <HStack>
        <Icon {...args} icon="home" color="green.400" />
        <Icon {...args} icon="home" color="green.400" filled={true} />
        <Icon {...args} icon="warning" color="orange" filled={true} />
      </HStack>;
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var I,x,h;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: "map"
  },
  render: args => {
    return <HStack>
        <Icon {...args} size={20} />
        <Icon {...args} size={24} />
        <Icon {...args} size={40} />
        <Icon {...args} size={48} />
      </HStack>;
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,y,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: "database"
  },
  render: args => <HStack>
      <Icon {...args} weight={100} />
      <Icon {...args} weight={200} />
      <Icon {...args} weight={300} />
      <Icon {...args} weight={400} />
      <Icon {...args} weight={500} />
      <Icon {...args} weight={600} />
      <Icon {...args} weight={700} />
    </HStack>
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,S,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: "contactless"
  },
  render: args => <HStack>
      <Icon {...args} grade={-25} />
      <Icon {...args} grade={0} />
      <Icon {...args} grade={200} />
    </HStack>
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const H=["Preview","ColorIcon","SizeIcon","WeightIcon","GradeIcon"],_=Object.freeze(Object.defineProperty({__proto__:null,ColorIcon:a,GradeIcon:c,Preview:n,SizeIcon:s,WeightIcon:t,__namedExportsOrder:H,default:z},Symbol.toStringTag,{value:"Module"}));export{_ as I,n as P};
