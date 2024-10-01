import{j as r}from"./extends-CwFRzn3r.js";import{r as v}from"./index-BwDkhjyp.js";import{C as U,a as o}from"./chunk-CWVAJCXJ-C0Bst0ak.js";import{S as C}from"./chunk-ZHMYA64R-V_96TD_T.js";import{u as W}from"./index-DdaX-njP.js";import{u as X}from"./index-DjrpCY14.js";import{i as K}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{T as y}from"./chunk-2OOHT3W5-CV6N7GVi.js";function I(e){return e&&K(e)&&K(e.target)}function Y(e={}){const{defaultValue:n,value:t,onChange:i,isDisabled:c,isNative:l}=e,g=W(i),[s,h]=X({value:t,defaultValue:n||[],onChange:g}),S=v.useCallback(a=>{if(!s)return;const j=I(a)?a.target.checked:!s.includes(a),p=I(a)?a.target.value:a,L=j?[...s,p]:s.filter(Q=>String(Q)!==String(p));h(L)},[h,s]),J=v.useCallback((a={})=>({...a,[l?"checked":"isChecked"]:s.some(p=>String(a.value)===String(p)),onChange:S}),[S,l,s]);return{value:s,isDisabled:c,onChange:S,setValue:h,getCheckboxProps:J}}function f(e){const{colorScheme:n,size:t,variant:i,children:c,isDisabled:l}=e,{value:g,onChange:s}=Y(e),h=v.useMemo(()=>({size:t,onChange:s,colorScheme:n,value:g,variant:i,isDisabled:l}),[t,s,n,g,i,l]);return r.jsx(U,{value:h,children:c})}f.displayName="CheckboxGroup";const Z=()=>{const[e,n]=v.useState([!1,!1]),t=e.every(Boolean),i=e.some(Boolean)&&!t;return r.jsxs(r.Fragment,{children:[r.jsx(o,{isChecked:t,isIndeterminate:i,onChange:c=>n([c.target.checked,c.target.checked]),children:"Parent Checkbox"}),r.jsxs(C,{pl:6,mt:1,spacing:1,children:[r.jsx(o,{isChecked:e[0],iconSize:"3rem",onChange:c=>n([c.target.checked,e[1]]),children:"Child Checkbox 1"}),r.jsx(o,{isChecked:e[1],onChange:c=>n([e[0],c.target.checked]),children:"Child Checkbox 2"})]})]})},O={title:"Skjemaelementer/Checkbox",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{colorScheme:{description:"The color of the Checkbox",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},control:"radio",options:["green","blue"]},size:{description:"The size of the checkbox",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},isDisabled:{description:"If true, the checkbox will be disabled",table:{type:{summary:"true | false"},defaultValue:{summary:!1}},control:"boolean"},isInvalid:{description:"If true, the checkbox will be invalid",table:{type:{summary:"true | false"},defaultValue:{summary:!1}},control:"boolean"},iconColor:{description:"The color of the checkmark",table:{type:{summary:"css | color variable"},defaultValue:{summary:"white"}},control:"color"}}},d={args:{children:"Dette er en avmerkingsboks"},render:e=>r.jsx(o,{...e,defaultChecked:!0,children:e.children})},b={args:{},render:e=>r.jsxs(C,{children:[r.jsx(o,{...e,colorScheme:"blue",children:"Blå"}),r.jsx(o,{...e,colorScheme:"green",children:"Grønn"})]})},m={args:{children:"Huk av"},render:e=>r.jsxs(C,{children:[r.jsx(o,{...e,size:"sm",children:e.children}),r.jsx(o,{...e,size:"md",children:e.children}),r.jsx(o,{...e,size:"lg",children:e.children})]})},u={args:{},render:e=>r.jsxs(C,{direction:"row",gap:4,children:[r.jsx(o,{...e,children:"Normal"}),r.jsx(o,{isDisabled:!0,children:"Disabled"}),r.jsx(o,{isInvalid:!0,children:"Invalid"})]})},x={args:{},render:e=>r.jsxs(C,{children:[r.jsx(y,{as:"b",children:"Grønn"}),r.jsxs(f,{colorScheme:"green",children:[r.jsx(o,{...e,children:"Valg 1"}),r.jsx(o,{...e,children:"Valg 2"})]}),r.jsx(y,{as:"b",children:"Blå"}),r.jsxs(f,{colorScheme:"blue",children:[r.jsx(o,{...e,children:"Valg 1"}),r.jsx(o,{...e,children:"Valg 2"})]})]})},k={args:{},render:e=>r.jsx(Z,{...e})};var G,z,V;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: "Dette er en avmerkingsboks"
  },
  render: args => <KvibCheckbox {...args} defaultChecked>
      {args.children}
    </KvibCheckbox>
}`,...(V=(z=d.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var T,D,w;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <KvibCheckbox {...args} colorScheme="blue">
        Blå
      </KvibCheckbox>
      <KvibCheckbox {...args} colorScheme="green">
        Grønn
      </KvibCheckbox>
    </Stack>
}`,...(w=(D=b.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,E,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Huk av"
  },
  render: args => <Stack>
      <KvibCheckbox {...args} size="sm">
        {args.children}
      </KvibCheckbox>
      <KvibCheckbox {...args} size="md">
        {args.children}
      </KvibCheckbox>
      <KvibCheckbox {...args} size="lg">
        {args.children}
      </KvibCheckbox>
    </Stack>
}`,...(P=(E=m.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var _,N,H;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack direction={"row"} gap={4}>
      <KvibCheckbox {...args}>Normal</KvibCheckbox>
      <KvibCheckbox isDisabled>Disabled</KvibCheckbox>
      <KvibCheckbox isInvalid>Invalid</KvibCheckbox>
    </Stack>
}`,...(H=(N=u.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var M,R,$;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <Text as={"b"}>Grønn</Text>
      <KvibCheckboxGroup colorScheme="green">
        <KvibCheckbox {...args}>Valg 1</KvibCheckbox>
        <KvibCheckbox {...args}>Valg 2</KvibCheckbox>
      </KvibCheckboxGroup>
      <Text as={"b"}>Blå</Text>
      <KvibCheckboxGroup colorScheme="blue">
        <KvibCheckbox {...args}>Valg 1</KvibCheckbox>
        <KvibCheckbox {...args}>Valg 2</KvibCheckbox>
      </KvibCheckboxGroup>
    </Stack>
}`,...($=(R=x.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var F,q,A;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {},
  render: args => <IndeterminateExample {...args} />
}`,...(A=(q=k.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const ee=["Checkbox","CheckboxColors","CheckboxSizes","CheckboxStates","CheckboxGroup","CheckboxIndeterminate"],le=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:d,CheckboxColors:b,CheckboxGroup:x,CheckboxIndeterminate:k,CheckboxSizes:m,CheckboxStates:u,__namedExportsOrder:ee,default:O},Symbol.toStringTag,{value:"Module"}));export{le as C,b as a,m as b,u as c,x as d,k as e,d as f};
