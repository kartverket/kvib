import{j as r}from"./index-D6_wGsWO.js";import{y as n,H as i}from"./index-CS007hxM.js";const z={title:"Komponenter/Icon",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{color:{control:"text"},weight:{table:{type:{summary:"100 | 200 | 300 | 400 | 500 | 600 | 700"}},control:{type:"range",min:100,max:700,step:100},defaultValue:{summary:600}},grade:{table:{type:{summary:"-25 | 0 | 200"}},control:"radio",options:[-25,0,200],defaultValue:{summary:0}},size:{table:{type:{summary:"20 | 24 | 40 | 48 | number"}},control:"radio",options:[20,24,40,48],defaultValue:{summary:24}},filled:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},ariaIsHidden:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},className:{table:{type:{summary:"string"}},control:"text"}}},o={args:{icon:"favorite"},render:e=>r.jsx(n,{...e})},a={args:{size:40},render:e=>r.jsxs(i,{children:[r.jsx(n,{...e,icon:"home",color:"green.400"}),"// #1A833B er theme.colors.green[400]",r.jsx(n,{...e,icon:"home",color:"green.400",filled:!0}),r.jsx(n,{...e,icon:"warning",color:"orange",filled:!0})]})},s={args:{icon:"map"},render:e=>r.jsxs(i,{children:[r.jsx(n,{...e,size:20}),r.jsx(n,{...e,size:24}),r.jsx(n,{...e,size:40}),r.jsx(n,{...e,size:48})]})},t={args:{icon:"database"},render:e=>r.jsxs(i,{children:[r.jsx(n,{...e,weight:100}),r.jsx(n,{...e,weight:200}),r.jsx(n,{...e,weight:300}),r.jsx(n,{...e,weight:400}),r.jsx(n,{...e,weight:500}),r.jsx(n,{...e,weight:600}),r.jsx(n,{...e,weight:700})]})},c={args:{icon:"contactless"},render:e=>r.jsxs(i,{children:[r.jsx(n,{...e,grade:-25}),r.jsx(n,{...e,grade:0}),r.jsx(n,{...e,grade:200})]})};var l,m,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    icon: "favorite"
  },
  render: args => <Icon {...args} />
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 40
  },
  render: args => {
    return <HStack>
        <Icon {...args} icon="home" color="green.400" />
        // #1A833B er theme.colors.green[400]
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
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,y,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,f,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: "contactless"
  },
  render: args => <HStack>
      <Icon {...args} grade={-25} />
      <Icon {...args} grade={0} />
      <Icon {...args} grade={200} />
    </HStack>
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const H=["Preview","ColorIcon","SizeIcon","WeightIcon","GradeIcon"],_=Object.freeze(Object.defineProperty({__proto__:null,ColorIcon:a,GradeIcon:c,Preview:o,SizeIcon:s,WeightIcon:t,__namedExportsOrder:H,default:z},Symbol.toStringTag,{value:"Module"}));export{_ as I,o as P};
