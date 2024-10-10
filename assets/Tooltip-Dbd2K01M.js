import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as a,af as r,ai as l,ag as d}from"./index-B1_o41dk.js";import{D as s,F as c,a as i,b as x}from"./Feedback-D0tVrm0g.js";import{T as u,C as j,a as f,b as h,c as T,d as k,e as g,f as p}from"./Tooltip.stories-F4J9qxnT.js";import{A as C}from"./Alert-ijm-s5Dj.js";import{A as b}from"./alert-icon-C25tEepw.js";import{T as D}from"./text-rUwQV1v4.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-g5al9mnR.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-B7h7acUJ.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./hooks-D04p5R0A.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./Button-D_pUdPLe.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./Icon-Dgh1NZQ-.js";/* empty css              */import"./tooltip-C1EqCzLQ.js";import"./use-popper-DwNTykfS.js";import"./use-disclosure-CdGn7wGE.js";import"./use-callback-ref-DA6UG1mJ.js";import"./use-event-listener-DbiM-QVt.js";import"./call-all-DDzecCnU.js";import"./is-element-C52yPwBl.js";import"./portal-BqZkrvYK.js";import"./proxy-CQsau1XN.js";import"./index-DVNvNJVv.js";import"./v-stack-CSYZ1u3_.js";import"./wrap-C4XOBdQ_.js";import"./tag-W1ghgPON.js";import"./icon-DQb5sAJm.js";const S=`const CustomCard = forwardRef(({ children, ...rest }, ref) => (
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
`,o.jsx(d,{of:p})]})}function No(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(m,{...e})}):m(e)}export{No as default};
