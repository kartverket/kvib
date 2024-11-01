import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as a,af as r,ai as l,ag as d}from"./index-B750z1Q_.js";import{D as s,F as c,a as i,b as x}from"./Feedback-oujG440w.js";import{T as u,C as j,a as f,b as h,c as T,d as k,e as g,P as p}from"./Tooltip.stories-CmMWnSSp.js";import{A as C}from"./Alert-O4bnFTKD.js";import{A as b}from"./alert-icon-DyJ3kpUV.js";import{T as D}from"./text-D14Jyc6W.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BQBlrzQa.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-CwIaBbUI.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./image-GsZWH-VT.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-ZnRIKZLi.js";import"./grid-BNFEBO0r.js";import"./use-theme-CeOC8r1f.js";import"./hooks-Dk7VeZ_r.js";import"./responsive-CwLgsqRj.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-jUBPBQ-A.js";import"./providers-BmY41TRh.js";import"./emotion-react.browser.esm-0Zac8NuU.js";import"./context-CBKykClo.js";import"./calc-C4XOv3Qc.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-v5DFvFs4.js";import"./Link-D6DR4S49.js";import"./tooltip-DxxwjYBZ.js";import"./use-popper-DwNTykfS.js";import"./use-merge-refs-Bdxaq0s4.js";import"./use-disclosure-CdGn7wGE.js";import"./use-callback-ref-DA6UG1mJ.js";import"./use-event-listener-DbiM-QVt.js";import"./call-all-DDzecCnU.js";import"./is-element-C52yPwBl.js";import"./portal-BlJtTGys.js";import"./proxy-NyFW0ziH.js";import"./index-BMuBlvl2.js";import"./Button-yx5TWCfg.js";import"./button-CcUc8H6T.js";import"./spinner-CI5qPk1o.js";import"./define-styles-BSAHv3yx.js";import"./attr-sHTFgF0E.js";import"./center-Ds0pdlwh.js";import"./h-stack-DtOTlfD9.js";import"./stack-BdCvkUuU.js";import"./children-2ZXUntH3.js";import"./Icon-AWJq4l__.js";/* empty css              */import"./v-stack-D7XFool3.js";import"./wrap-C3sBEi-q.js";import"./tag-DLfWrjrw.js";import"./icon-BmokjFuu.js";const S=`const CustomCard = forwardRef(({ children, ...rest }, ref) => (
    <Box p="1">
      <Tag ref={ref} {...rest}>
        {children}
      </Tag>
    </Box>
  ));
  
  const CustomToolTip = () => (
  
  <Tooltip label="Hover me">
    <CustomCard>Tag Here</CustomCard>
  </Tooltip>
  );
  
  render(<CustomToolTip />);`;function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:u}),`
`,o.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,o.jsxs(C,{status:"info",children:[o.jsx(b,{}),o.jsxs(t.p,{children:["Kjent bug for Tooltip: ",o.jsx(t.code,{children:'placement="auto-end"'})," legger seg ikke som ønsket."]})]}),`
`,o.jsx(t.p,{children:"Et tooltip er en informativ melding som dukker opp når en bruker samhandler med et element."}),`
`,o.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`import { Tooltip } from "@kvib/react";
`})}),`
`,o.jsx(s,{children:o.jsx(c,{component:"Tooltip"})}),`
`,o.jsxs(s,{children:[o.jsx(i,{title:"Bruk av egne komponenter",description:o.jsx(D,{children:"Dersom Tooltip wrapper et funksjonelt komponent må komponentet ha en ref ved `forwardref`. Dette inkluderer også bruk av ikoner fra Kartverkets designsystem. Se eksempel:"}),story:o.jsxs(o.Fragment,{children:[o.jsx(r,{of:j,sourceState:"none"}),o.jsx(l,{code:S,dark:!0})]})}),o.jsx(i,{isVertical:!0,title:"Tooltip med pil",description:"",story:o.jsx(r,{of:f,sourceState:"hidden"})}),o.jsx(i,{isVertical:!0,title:"Tooltip med fokuserbart komponent",description:"",story:o.jsx(r,{of:h,sourceState:"hidden"})}),o.jsx(i,{isVertical:!0,title:"Disabled state",description:"",story:o.jsx(r,{of:T,sourceState:"hidden"})}),o.jsx(i,{isVertical:!0,title:"Plassering",description:"",story:o.jsx(r,{of:k,sourceState:"hidden"})}),o.jsx(i,{isVertical:!0,title:"Flere eksempler",description:"",story:o.jsx(r,{of:g,sourceState:"hidden"})})]}),`
`,o.jsx(x,{light:!0,children:"Props"}),`
`,o.jsx(r,{of:p}),`
`,o.jsx(d,{of:p})]})}function zo(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(m,{...e})}):m(e)}export{zo as default};
