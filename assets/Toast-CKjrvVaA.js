import{j as t}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as l,ah as i,ai as e,ag as c}from"./index-CqrFmKU1.js";import{D as d}from"./Feedback-C8oPMuBk.js";import{T as x,a as u,b as h,P as n}from"./Toast.stories-CRsXOMGn.js";import{C as s,a as p}from"./Card-CjsZQyOM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BN3tZYrh.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-Cs-tJ6EH.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-CypcOzo0.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./use-toast-DbCbCWy7.js";import"./toast.provider-CnlpUlhF.js";import"./proxy-CQsau1XN.js";import"./use-update-effect-CNg9DBIF.js";import"./use-callback-ref-DA6UG1mJ.js";import"./alert-icon-DsIyQRNV.js";import"./define-styles-BSAHv3yx.js";import"./icon-BO-EX8Jp.js";import"./spinner-CCN1jjNR.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./alert-title-_5bf8d21.js";import"./alert-description-Ny8tVv6G.js";import"./close-button-CK4MGrTr.js";import"./portal-BlJtTGys.js";import"./index-DVNvNJVv.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";import"./h-stack-ecaAvnDk.js";import"./center-Bg6uA6YZ.js";import"./Button-CORTJBOr.js";import"./button-lwGmIUkK.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./Icon-D1e-E9o_.js";/* empty css              */import"./providers-BQbExJqd.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";const j=`
const ToastExample = (props) => {
const toast = useToast()
  
  return (
    <Button
      colorScheme="green"
      onClick={() => toast({...props})
      }
    >
    Trykk for tilbakemelding
    </Button>
)
<ToastExample
    title="Skjema innsendt"
    description="Takk for opplysningene"
    status="success"
    duration=9000
    icon="check">
</ToastExample>
`,k=`
<ToastExample
    duration={4000}
    title="Error"
    description="Noe gikk galt"
    status="error"
    >Trykk for toast
</ToastExample>
`,f=`
<ToastExample
    position="top-left"
    title="Top-left"
    duration="5000"
    >Top-left
</ToastExample>
`;function a(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:x}),`
`,t.jsxs(d,{children:[t.jsx(o.h1,{id:"toast",children:"Toast"}),t.jsx(o.p,{children:`Toast brukes for å gi brukeren tilbakemelding etter en handling. Toast skal forsvinne enten når den blir lukket,
eller av seg selv etterhvert. Flere toasts kan være på skjermen samtidig.`}),t.jsxs(o.p,{children:["På ",t.jsx(o.a,{href:"https://chakra-ui.com/docs/components/toast",rel:"nofollow",children:"Chakra-ui.com"})," finner du noen niche brukseksempler."]}),t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`import { useToast } from "@kvib/react";
`})}),t.jsx(o.h2,{id:"status",children:"Status"}),t.jsx(s,{variant:"outline",children:t.jsx(p,{children:t.jsx(i,{of:u})})}),t.jsx(e,{code:k,dark:!0}),t.jsx(o.h2,{id:"positions",children:"Positions"}),t.jsx(s,{variant:"outline",children:t.jsx(p,{children:t.jsx(i,{of:h})})}),t.jsx(e,{code:f,dark:!0}),t.jsx(o.h2,{id:"props",children:"Props"}),t.jsx(s,{variant:"outline",children:t.jsx(p,{children:t.jsx(i,{of:n})})}),t.jsx(e,{code:j,dark:!0}),t.jsx(c,{of:n})]})]})}function Xt(r={}){const{wrapper:o}={...m(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(a,{...r})}):a(r)}export{Xt as default};
