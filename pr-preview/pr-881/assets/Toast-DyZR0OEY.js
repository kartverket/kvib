import{j as t}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as l,ah as i,ai as s,ag as c}from"./index-DfHgz9ja.js";import{D as d}from"./Feedback-DKDApJ8F.js";import{T as x,a as u,b as h,c as n}from"./Toast.stories-Bg01AmRu.js";import{C as e,a as p}from"./Card-DoxEvc2h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BPiMBuxV.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-B7h7acUJ.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./hooks-D04p5R0A.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-rUwQV1v4.js";import"./flex-CHlq4-Ax.js";import"./Button-B0EfJ0hr.js";import"./button-Db-BlFJ2.js";import"./context-CBKykClo.js";import"./spinner-DcEBpU52.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./Icon-hWfh91Vo.js";/* empty css              */import"./use-toast-BKFB3eH5.js";import"./toast.provider-BOjhFOA8.js";import"./proxy-CQsau1XN.js";import"./use-update-effect-CNg9DBIF.js";import"./use-callback-ref-DA6UG1mJ.js";import"./alert-icon-C25tEepw.js";import"./icon-DQb5sAJm.js";import"./alert-title-DqLLjerX.js";import"./alert-description-BYBQ5f79.js";import"./close-button-uAmhqF5q.js";import"./portal-BqZkrvYK.js";import"./index-DVNvNJVv.js";import"./providers-tFX8H8_I.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";const j=`
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
`})}),t.jsx(o.h2,{id:"status",children:"Status"}),t.jsx(e,{variant:"outline",children:t.jsx(p,{children:t.jsx(i,{of:u})})}),t.jsx(s,{code:k,dark:!0}),t.jsx(o.h2,{id:"positions",children:"Positions"}),t.jsx(e,{variant:"outline",children:t.jsx(p,{children:t.jsx(i,{of:h})})}),t.jsx(s,{code:f,dark:!0}),t.jsx(o.h2,{id:"props",children:"Props"}),t.jsx(e,{variant:"outline",children:t.jsx(p,{children:t.jsx(i,{of:n})})}),t.jsx(s,{code:j,dark:!0}),t.jsx(c,{of:n})]})]})}function Xt(r={}){const{wrapper:o}={...m(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(a,{...r})}):a(r)}export{Xt as default};
