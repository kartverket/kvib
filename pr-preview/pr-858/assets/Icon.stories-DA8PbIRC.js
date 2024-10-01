import{j as r}from"./extends-CwFRzn3r.js";import{I as o}from"./Icon-BLy-BiFo.js";import{u as k}from"./chunk-UIGT7YZF-XoNRsZNz.js";import{H as i}from"./chunk-3ASUQ6PA-DZH9lOZq.js";const H={title:"Media/Ikoner",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{color:{table:{type:"string",defaultValue:{summary:"black"}},control:"text"},weight:{table:{type:{summary:"100 | 200 | 300 | 400 | 500 | 600 | 700"}},control:{type:"range",min:100,max:700,step:100},defaultValue:{summary:600}},grade:{table:{type:{summary:"-25 | 0 | 200"}},control:"radio",options:[-25,0,200],defaultValue:{summary:0}},size:{table:{type:{summary:"20 | 24 | 40 | 48 | number"}},control:"radio",options:[20,24,40,48],defaultValue:{summary:24}},isFilled:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},ariaIsHidden:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},className:{table:{type:{summary:"string"}},control:"text"}}},s={args:{icon:"favorite"},render:e=>r.jsx(o,{...e})},n={args:{size:40},render:e=>{const l=k();return r.jsxs(i,{children:[r.jsx(o,{...e,icon:"home",color:l.colors.green[400]}),"// #1A833B er theme.colors.green[400]",r.jsx(o,{...e,icon:"home",color:l.colors.green[400],isFilled:!0}),r.jsx(o,{...e,icon:"warning",color:"orange",isFilled:!0})]})}},a={args:{icon:"map"},render:e=>r.jsxs(i,{children:[r.jsx(o,{...e,size:20}),r.jsx(o,{...e,size:24}),r.jsx(o,{...e,size:40}),r.jsx(o,{...e,size:48})]})},t={args:{icon:"database"},render:e=>r.jsxs(i,{children:[r.jsx(o,{...e,weight:100}),r.jsx(o,{...e,weight:200}),r.jsx(o,{...e,weight:300}),r.jsx(o,{...e,weight:400}),r.jsx(o,{...e,weight:500}),r.jsx(o,{...e,weight:600}),r.jsx(o,{...e,weight:700})]})},c={args:{icon:"contactless"},render:e=>r.jsxs(i,{children:[r.jsx(o,{...e,grade:-25}),r.jsx(o,{...e,grade:0}),r.jsx(o,{...e,grade:200})]})};var m,g,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: "favorite"
  },
  render: args => <Icon {...args} />
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,p,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 40
  },
  render: args => {
    const theme = useTheme();
    return <HStack>
        <Icon {...args} icon="home" color={theme.colors.green[400]} />
        // #1A833B er theme.colors.green[400]
        <Icon {...args} icon="home" color={theme.colors.green[400]} isFilled={true} />
        <Icon {...args} icon="warning" color="orange" isFilled={true} />
      </HStack>;
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var I,x,j;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var y,w,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(w=t.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var b,S,z;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: "contactless"
  },
  render: args => <HStack>
      <Icon {...args} grade={-25} />
      <Icon {...args} grade={0} />
      <Icon {...args} grade={200} />
    </HStack>
}`,...(z=(S=c.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const V=["defaultIcon","colorIcon","sizeIcon","weightIcon","gradeIcon"],O=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:V,colorIcon:n,default:H,defaultIcon:s,gradeIcon:c,sizeIcon:a,weightIcon:t},Symbol.toStringTag,{value:"Module"}));export{O as I,n as c,s as d,c as g,a as s,t as w};
