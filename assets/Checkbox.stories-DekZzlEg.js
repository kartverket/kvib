import{j as r}from"./extends-CwFRzn3r.js";import{r as d}from"./index-BwDkhjyp.js";import{k as G}from"./emotion-react.browser.esm-Hqbkbmab.js";import{c as ie}from"./context-CBKykClo.js";import{c as x,a as le,i as V}from"./factory-lWLPzty5.js";import{u as he}from"./use-checkbox-Bb5WcZUE.js";import{f as de}from"./forward-ref-BWI-Phbn.js";import{a as me,o as be}from"./use-style-config-C4sZEIFb.js";import{a as ue}from"./call-all-DDzecCnU.js";import{c as xe}from"./cx-BDMMs1jM.js";import{S as y}from"./stack-C3a7yBZW.js";import{u as ke}from"./use-callback-ref-DA6UG1mJ.js";import{u as Ce}from"./use-controllable-state-Dnial3e2.js";import{T}from"./text-CypcOzo0.js";const[pe,ge]=ie({name:"CheckboxGroupContext",strict:!1});function fe(e){return r.jsx(x.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:r.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function ve(e){return r.jsx(x.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:r.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Se(e){const{isIndeterminate:n,isChecked:t,...s}=e,c=n?ve:fe;return t||n?r.jsx(x.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:r.jsx(c,{...s})}):null}function ye(e){const[n,t]=d.useState(e),[s,c]=d.useState(!1);return e!==n&&(c(!0),t(e)),s}const je={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},Ie={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},Ke=G({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),Pe=G({from:{opacity:0},to:{opacity:1}}),_e=G({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),o=de(function(n,t){const s=ge(),c={...s,...n},l=me("Checkbox",c),h=be(n),{spacing:a="0.5rem",className:m,children:b,iconColor:j,iconSize:i,icon:I=r.jsx(Se,{}),isChecked:u,isDisabled:P=s==null?void 0:s.isDisabled,onChange:K,inputProps:ee,...re}=h;let z=u;s!=null&&s.value&&h.value&&(z=s.value.includes(h.value));let w=K;s!=null&&s.onChange&&h.value&&(w=ue(s.onChange,K));const{state:k,getInputProps:se,getCheckboxProps:oe,getLabelProps:ne,getRootProps:ce}=he({...re,isDisabled:P,isChecked:z,onChange:w}),D=ye(k.isChecked),te=d.useMemo(()=>({animation:D?k.isIndeterminate?`${Pe} 20ms linear, ${_e} 200ms linear`:`${Ke} 200ms linear`:void 0,...l.icon,...le({fontSize:i,color:j})}),[j,i,D,k.isIndeterminate,l.icon]),ae=d.cloneElement(I,{__css:te,isIndeterminate:k.isIndeterminate,isChecked:k.isChecked});return r.jsxs(x.label,{__css:{...Ie,...l.container},className:xe("chakra-checkbox",m),...ce(),children:[r.jsx("input",{className:"chakra-checkbox__input",...se(ee,t)}),r.jsx(x.span,{__css:{...je,...l.control},className:"chakra-checkbox__control",...oe(),children:ae}),b&&r.jsx(x.span,{className:"chakra-checkbox__label",...ne(),__css:{marginStart:a,...l.label},children:b})]})});o.displayName="Checkbox";function A(e){return e&&V(e)&&V(e.target)}function Ge(e={}){const{defaultValue:n,value:t,onChange:s,isDisabled:c,isNative:l}=e,h=ke(s),[a,m]=Ce({value:t,defaultValue:n||[],onChange:h}),b=d.useCallback(i=>{if(!a)return;const I=A(i)?i.target.checked:!a.includes(i),u=A(i)?i.target.value:i,P=I?[...a,u]:a.filter(K=>String(K)!==String(u));m(P)},[m,a]),j=d.useCallback((i={})=>({...i,[l?"checked":"isChecked"]:a.some(u=>String(i.value)===String(u)),onChange:b}),[b,l,a]);return{value:a,isDisabled:c,onChange:b,setValue:m,getCheckboxProps:j}}function _(e){const{colorScheme:n,size:t,variant:s,children:c,isDisabled:l}=e,{value:h,onChange:a}=Ge(e),m=d.useMemo(()=>({size:t,onChange:a,colorScheme:n,value:h,variant:s,isDisabled:l}),[t,a,n,h,s,l]);return r.jsx(pe,{value:m,children:c})}_.displayName="CheckboxGroup";const ze=()=>{const[e,n]=d.useState([!1,!1]),t=e.every(Boolean),s=e.some(Boolean)&&!t;return r.jsxs(r.Fragment,{children:[r.jsx(o,{isChecked:t,isIndeterminate:s,onChange:c=>n([c.target.checked,c.target.checked]),children:"Parent Checkbox"}),r.jsxs(y,{pl:6,mt:1,spacing:1,children:[r.jsx(o,{isChecked:e[0],iconSize:"3rem",onChange:c=>n([c.target.checked,e[1]]),children:"Child Checkbox 1"}),r.jsx(o,{isChecked:e[1],onChange:c=>n([e[0],c.target.checked]),children:"Child Checkbox 2"})]})]})},we={title:"Komponenter/Checkbox",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{colorScheme:{description:"The color of the Checkbox",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},control:"radio",options:["green","blue"]},size:{description:"The size of the checkbox",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},control:"radio",options:["sm","md","lg"]},isDisabled:{description:"If true, the checkbox will be disabled",table:{type:{summary:"true | false"},defaultValue:{summary:"false"}},control:"boolean"},isInvalid:{description:"If true, the checkbox will be invalid",table:{type:{summary:"true | false"},defaultValue:{summary:!1}},control:"boolean"},iconColor:{description:"The color of the checkmark",table:{type:{summary:"css | color variable"},defaultValue:{summary:"white"}},control:"color"}}},C={args:{children:"Dette er en avmerkingsboks"},render:e=>r.jsx(o,{...e,defaultChecked:!0,children:e.children})},p={args:{},render:e=>r.jsxs(y,{children:[r.jsx(o,{...e,colorScheme:"blue",children:"Blå"}),r.jsx(o,{...e,colorScheme:"green",children:"Grønn"})]})},g={args:{children:"Huk av"},render:e=>r.jsxs(y,{children:[r.jsx(o,{...e,size:"sm",children:e.children}),r.jsx(o,{...e,size:"md",children:e.children}),r.jsx(o,{...e,size:"lg",children:e.children})]})},f={args:{},render:e=>r.jsxs(y,{direction:"row",gap:4,children:[r.jsx(o,{...e,children:"Normal"}),r.jsx(o,{isDisabled:!0,children:"Disabled"}),r.jsx(o,{isInvalid:!0,children:"Invalid"})]})},v={args:{},render:e=>r.jsxs(y,{children:[r.jsx(T,{as:"b",children:"Grønn"}),r.jsxs(_,{colorScheme:"green",children:[r.jsx(o,{...e,children:"Valg 1"}),r.jsx(o,{...e,children:"Valg 2"})]}),r.jsx(T,{as:"b",children:"Blå"}),r.jsxs(_,{colorScheme:"blue",children:[r.jsx(o,{...e,children:"Valg 1"}),r.jsx(o,{...e,children:"Valg 2"})]})]})},S={args:{},render:e=>r.jsx(ze,{...e})};var N,B,E;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Dette er en avmerkingsboks"
  },
  render: args => <KvibCheckbox {...args} defaultChecked>
      {args.children}
    </KvibCheckbox>
}`,...(E=(B=C.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var M,R,$;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack>
      <KvibCheckbox {...args} colorScheme="blue">
        Blå
      </KvibCheckbox>
      <KvibCheckbox {...args} colorScheme="green">
        Grønn
      </KvibCheckbox>
    </Stack>
}`,...($=(R=p.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var H,W,X;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var F,L,q;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack direction={"row"} gap={4}>
      <KvibCheckbox {...args}>Normal</KvibCheckbox>
      <KvibCheckbox isDisabled>Disabled</KvibCheckbox>
      <KvibCheckbox isInvalid>Invalid</KvibCheckbox>
    </Stack>
}`,...(q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var J,O,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(O=v.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var U,Y,Z;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {},
  render: args => <IndeterminateExample {...args} />
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const De=["Preview","CheckboxColors","CheckboxSizes","CheckboxStates","CheckboxGroup","CheckboxIndeterminate"],qe=Object.freeze(Object.defineProperty({__proto__:null,CheckboxColors:p,CheckboxGroup:v,CheckboxIndeterminate:S,CheckboxSizes:g,CheckboxStates:f,Preview:C,__namedExportsOrder:De,default:we},Symbol.toStringTag,{value:"Module"}));export{qe as C,C as P,p as a,g as b,f as c,v as d,S as e};
