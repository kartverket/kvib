import{j as r}from"./extends-CwFRzn3r.js";import{c as m}from"./factory-DBKMNJMh.js";import{r as X,g as Y,a as Z}from"./progress.utils-CHAzeJP2.js";import{f as rr}from"./forward-ref-BWI-Phbn.js";import{d as er}from"./define-styles-BSAHv3yx.js";import{H as d}from"./h-stack-DtOTlfD9.js";const v=e=>r.jsx(m.circle,{cx:50,cy:50,r:42,fill:"transparent",...e});v.displayName="Circle";const A=e=>{const{size:u,isIndeterminate:p,...g}=e;return r.jsx(m.svg,{viewBox:"0 0 100 100",__css:{width:u,height:u,animation:p?`${X} 2s linear infinite`:void 0},...g})};A.displayName="Shape";const s=rr((e,u)=>{const{size:p="48px",max:g=100,min:D=0,valueText:M,getValueText:O,value:E,capIsRound:U,children:W,thickness:y="10px",color:B="#0078d4",trackColor:F="#edebe9",isIndeterminate:a,...q}=e,b=Y({min:D,max:g,value:E,valueText:M,getValueText:O,isIndeterminate:a}),h=a?void 0:(b.percent??0)*2.64,G=h==null?void 0:`${h} ${264-h}`,J=a?{css:{animation:`${Z} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:G,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},Q=er({display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:p});return r.jsxs(m.div,{ref:u,className:"chakra-progress",...b.bind,...q,__css:Q,children:[r.jsxs(A,{size:p,isIndeterminate:a,children:[r.jsx(v,{stroke:F,strokeWidth:y,className:"chakra-progress__track"}),r.jsx(v,{stroke:B,strokeWidth:y,className:"chakra-progress__indicator",strokeLinecap:U?"round":void 0,opacity:b.value===0&&!a?0:void 0,...J})]}),W]})});s.displayName="CircularProgress";const x=m("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});x.displayName="CircularProgressLabel";const sr={title:"Komponenter/Circular Progress",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{capIsRound:{description:"If true, the cap of the progress indicator will be rounded.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},color:{description:"A function that returns the desired valueText to use in place of the value",table:{type:{summary:"(value: number, percent: number) => string"}},control:"text"},getValueText:{description:"The color of the progress indicator. Use a color key in the theme object",table:{type:{summary:"string"}},control:"text"},isIndeterminate:{description:"If true, the cap of the progress indicator will be rounded.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},max:{description:"Maximum value defining 100% progress made (must be higher than 'min')",table:{type:{summary:"number"},defaultValue:{summary:"100"}},control:"number"},min:{description:"Minimum value defining 'no progress' (must be lower than 'max')",table:{type:{summary:"number"},defaultValue:{summary:"0"}},control:"number"},size:{description:"The size of the circular progress in CSS units",table:{type:{summary:"string | number"}},control:"text"},thickness:{description:"This defines the stroke width of the svg circle.",table:{type:{summary:"string | number"},defaultValue:{summary:"10px"}},control:"text"},trackColor:{description:"The color name of the progress track. Use a color key in the theme object",table:{type:{summary:"string"}},control:"text"},value:{description:"Current progress (must be between min/max)",table:{type:{summary:"number"}},control:"number"},valueText:{description:"The desired valueText to use in place of the value",table:{type:{summary:"string"}},control:"text"}}},o={args:{value:80},render:e=>r.jsx(s,{...e,"aria-label":"progress bar"})},t={args:{value:30},render:e=>r.jsxs(d,{children:[r.jsx(s,{...e,size:"80px","aria-label":"progress bar 80px"}),r.jsx(s,{...e,size:"120px","aria-label":"progress bar 120px"})]})},i={args:{value:70},render:e=>r.jsxs(d,{children:[r.jsx(s,{...e,thickness:"4px","aria-label":"progress bar thin"}),r.jsx(s,{...e,thickness:"10px","aria-label":"progress bar thick"})]})},n={args:{value:70},render:e=>r.jsxs(d,{children:[r.jsx(s,{...e,color:"green.400","aria-label":"progress bar green"}),r.jsx(s,{...e,color:"blue.400","aria-label":"progress bar blue"})]})},l={args:{color:"green.400"},render:e=>r.jsxs(d,{children:[r.jsx(s,{...e,value:70,"aria-label":"progress bar labeled 70%",children:r.jsx(x,{children:"70%"})}),r.jsx(s,{...e,value:30,"aria-label":"progress bar labeled 30%",children:r.jsx(x,{children:"30%"})})]})},c={args:{},render:e=>r.jsx(s,{...e,isIndeterminate:!0,"aria-label":"progress bar indeterminate"})};var f,C,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 80
  },
  render: args => <KvibCircularProgress {...args} aria-label="progress bar" />
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var P,S,j;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 30
  },
  render: args => <KvibHStack>
      <KvibCircularProgress {...args} size="80px" aria-label="progress bar 80px" />
      <KvibCircularProgress {...args} size="120px" aria-label="progress bar 120px" />
    </KvibHStack>
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var K,T,_;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 70
  },
  render: args => <KvibHStack>
      <KvibCircularProgress {...args} thickness="4px" aria-label="progress bar thin" />
      <KvibCircularProgress {...args} thickness="10px" aria-label="progress bar thick" />
    </KvibHStack>
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var z,w,I;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 70
  },
  render: args => <KvibHStack>
      <KvibCircularProgress {...args} color="green.400" aria-label="progress bar green" />
      <KvibCircularProgress {...args} color="blue.400" aria-label="progress bar blue" />
    </KvibHStack>
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var H,L,N;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    color: "green.400"
  },
  render: args => <KvibHStack>
      <KvibCircularProgress {...args} value={70} aria-label="progress bar labeled 70%">
        <KvibCircularProgressLabel>70%</KvibCircularProgressLabel>
      </KvibCircularProgress>
      <KvibCircularProgress {...args} value={30} aria-label="progress bar labeled 30%">
        <KvibCircularProgressLabel>30%</KvibCircularProgressLabel>
      </KvibCircularProgress>
    </KvibHStack>
}`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var V,$,R;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibCircularProgress {...args} isIndeterminate aria-label="progress bar indeterminate" />
}`,...(R=($=c.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};const ar=["Preview","CircularProgressSizes","CircularProgressThickness","CircularProgressColors","CircularProgressLabel","CircularProgressIndeterminate"],ur=Object.freeze(Object.defineProperty({__proto__:null,CircularProgressColors:n,CircularProgressIndeterminate:c,CircularProgressLabel:l,CircularProgressSizes:t,CircularProgressThickness:i,Preview:o,__namedExportsOrder:ar,default:sr},Symbol.toStringTag,{value:"Module"}));export{ur as C,o as P,t as a,i as b,n as c,l as d,c as e};
