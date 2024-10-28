import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as a,af as r,ai as l,ag as d}from"./index--E4tKCpl.js";import{D as s,F as c,a as i,b as x}from"./Feedback-C8oPMuBk.js";import{T as u,C as j,a as f,b as h,c as T,d as k,e as g,P as p}from"./Tooltip.stories-Df5Sc7Wh.js";import{A as C}from"./Alert-DuDev5PS.js";import{A as b}from"./alert-icon-DsIyQRNV.js";import{T as D}from"./text-CypcOzo0.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-roFAbAwg.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-Cs-tJ6EH.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./tooltip-Dcf5hq-p.js";import"./use-popper-DwNTykfS.js";import"./use-merge-refs-Bdxaq0s4.js";import"./use-disclosure-CdGn7wGE.js";import"./use-callback-ref-DA6UG1mJ.js";import"./use-event-listener-DbiM-QVt.js";import"./call-all-DDzecCnU.js";import"./is-element-C52yPwBl.js";import"./portal-BlJtTGys.js";import"./proxy-NyFW0ziH.js";import"./index-BMuBlvl2.js";import"./Button-Bg6QVfgh.js";import"./button-lwGmIUkK.js";import"./spinner-CCN1jjNR.js";import"./define-styles-BSAHv3yx.js";import"./attr-sHTFgF0E.js";import"./center-Bg6uA6YZ.js";import"./h-stack-ecaAvnDk.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";import"./Icon-C0_wlgZX.js";/* empty css              */import"./v-stack-k8hvxFKi.js";import"./wrap-CsMbKpnG.js";import"./tag-jZ3yC3kf.js";import"./icon-BO-EX8Jp.js";const S=`const CustomCard = forwardRef(({ children, ...rest }, ref) => (
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
`,o.jsx(d,{of:p})]})}function qo(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(m,{...e})}):m(e)}export{qo as default};
