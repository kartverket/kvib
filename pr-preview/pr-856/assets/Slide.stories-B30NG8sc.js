import{j as e}from"./extends-CwFRzn3r.js";import{S as n}from"./chunk-CYUETFQE-Mle4nE-X.js";import{u as l}from"./chunk-7JBTTEVG-DuShY1Xb.js";import{B as o}from"./chunk-PULVB27S-CgiffgmI.js";import{B as d}from"./Button-DzfkXRWF.js";import{c as r}from"./colors-BETQBCi-.js";const S={title:"Animasjoner/Slide",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{in:{description:"If true, Shows children. Triggers on enter and exit states",table:{type:{summary:"boolean"}},control:"boolean"},unmountOnExit:{description:"If true, unmounts after 'in' is set to 'false' and animation is done",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},direction:{description:"Pick which direction to slide from",table:{type:{summary:"right | left | top | bottom"},defaultValue:{summary:"right"}},control:"select",options:["top","bottom","right","left"]}}},j=({...t})=>e.jsx(o,{w:300,h:300,children:e.jsx(n,{...t,children:e.jsx(o,{p:"40px",color:"white",mt:"4",bg:r.green[400],rounded:"md",shadow:"md",children:"Halla"})})}),i=()=>{const{isOpen:t,onToggle:x}=l(),{isOpen:h,onToggle:T}=l(),{isOpen:b,onToggle:B}=l(),{isOpen:f,onToggle:O}=l();return e.jsxs(o,{children:[e.jsx(d,{onClick:x,children:"Toggle top"}),e.jsx(n,{in:t,style:{zIndex:-10},direction:"top",children:e.jsx(o,{p:"40px",color:"white",mt:"4",bg:r.green[400],rounded:"md",shadow:"md",children:"Hall"})}),e.jsx(d,{onClick:T,children:"Toggle bottom"}),e.jsx(n,{in:h,style:{zIndex:-10},direction:"bottom",children:e.jsx(o,{p:"40px",color:"white",mt:"4",bg:r.green[400],rounded:"md",shadow:"md",children:"Halla"})}),e.jsx(d,{onClick:B,children:"Toggle right"}),e.jsx(n,{in:b,style:{zIndex:-10},direction:"right",children:e.jsx(o,{p:"40px",color:"white",mt:"4",bg:r.green[400],rounded:"md",shadow:"md",children:"Halla"})}),e.jsx(d,{onClick:O,children:"Toggle left"}),e.jsx(n,{in:f,style:{zIndex:-10},direction:"left",children:e.jsx(o,{p:"40px",color:"white",mt:"4",bg:r.green[400],rounded:"md",shadow:"md",children:"Halla"})})]})},s={args:{in:!1},render:t=>e.jsx(j,{...t})};var a,c,g;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    isOpen: isOpenT,
    onToggle: onToggleT
  } = useDisclosure();
  const {
    isOpen: isOpenB,
    onToggle: onToggleB
  } = useDisclosure();
  const {
    isOpen: isOpenR,
    onToggle: onToggleR
  } = useDisclosure();
  const {
    isOpen: isOpenL,
    onToggle: onToggleL
  } = useDisclosure();
  return <Box>
      <Button onClick={onToggleT}>Toggle top</Button>
      <KvibSlide in={isOpenT} style={{
      zIndex: -10
    }} direction="top">
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Hall
        </Box>
      </KvibSlide>
      <Button onClick={onToggleB}>Toggle bottom</Button>
      <KvibSlide in={isOpenB} style={{
      zIndex: -10
    }} direction="bottom">
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Halla
        </Box>
      </KvibSlide>
      <Button onClick={onToggleR}>Toggle right</Button>
      <KvibSlide in={isOpenR} style={{
      zIndex: -10
    }} direction="right">
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Halla
        </Box>
      </KvibSlide>
      <Button onClick={onToggleL}>Toggle left</Button>
      <KvibSlide in={isOpenL} style={{
      zIndex: -10
    }} direction="left">
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Halla
        </Box>
      </KvibSlide>
    </Box>;
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    in: false
  },
  render: args => <SlideEx {...args} />
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const w=["nonCanvasExample","Slide"],H=Object.freeze(Object.defineProperty({__proto__:null,Slide:s,__namedExportsOrder:w,default:S,nonCanvasExample:i},Symbol.toStringTag,{value:"Module"}));export{H as S,s as a};
