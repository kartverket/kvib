import{j as t}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as l,ah as i,ai as e,ag as c}from"./index-Bxppj8b7.js";import{D as d}from"./Feedback-7ODX0rOz.js";import{T as x,a as u,b as h,P as n}from"./Toast.stories-CS0aysHt.js";import{C as s,a as p}from"./Card-rgsWy52h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BQd5Xu44.js";import"../sb-preview/runtime.js";import"./index-Drt3gf4w.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-DeqT4ixr.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-BzV54DYr.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-inAnnyJ8.js";import"./grid-B2CMUJGq.js";import"./use-theme-CBfqdygA.js";import"./hooks-gaHRB8Pq.js";import"./responsive-BNzRyFLh.js";import"./heading--NES2npU.js";import"./use-style-config-YUvqttAg.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-ByHKaHOl.js";import"./flex-C1gIBb6o.js";import"./Link-C3IPjqxf.js";import"./use-toast-BuG33hj2.js";import"./toast.provider-Dp-X213f.js";import"./proxy-CQsau1XN.js";import"./use-update-effect-CNg9DBIF.js";import"./use-callback-ref-DA6UG1mJ.js";import"./alert-icon-B8tlVjfA.js";import"./define-styles-BSAHv3yx.js";import"./icon-Bx5s8P2X.js";import"./spinner-DfEqsPDM.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./alert-title-89KkSj3n.js";import"./alert-description-BS4zLy6K.js";import"./close-button-BkvRA7vz.js";import"./portal-DTuMj-Dh.js";import"./index-DVNvNJVv.js";import"./stack-REYSnkee.js";import"./children-2ZXUntH3.js";import"./h-stack-BA5VzuBF.js";import"./center-Da94FwVR.js";import"./Button-OtbWWr9M.js";import"./button-DEHO-vdc.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./Icon-BQMlFqUK.js";/* empty css              */import"./providers-BwxcBeey.js";import"./calc-B93s4yJe.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";const j=`
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
