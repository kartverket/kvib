import{j as t}from"./extends-CwFRzn3r.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import{ae as l,ah as i,ai as e,ag as c}from"./index-CN6aq0si.js";import{D as d}from"./Feedback-oujG440w.js";import{T as x,a as u,b as h,P as n}from"./Toast.stories-CS4_d2Mp.js";import{C as s,a as p}from"./Card-jUBPBQ-A.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CiRVVpFO.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-CwIaBbUI.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./image-GsZWH-VT.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-ZnRIKZLi.js";import"./grid-BNFEBO0r.js";import"./use-theme-CeOC8r1f.js";import"./hooks-Dk7VeZ_r.js";import"./responsive-CwLgsqRj.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-D14Jyc6W.js";import"./flex-v5DFvFs4.js";import"./Link-D6DR4S49.js";import"./use-toast-Cxhsjrgt.js";import"./toast.provider-Ccs5t8hm.js";import"./proxy-NyFW0ziH.js";import"./use-update-effect-CNg9DBIF.js";import"./use-callback-ref-DA6UG1mJ.js";import"./alert-icon-DyJ3kpUV.js";import"./define-styles-BSAHv3yx.js";import"./icon-BmokjFuu.js";import"./spinner-CI5qPk1o.js";import"./emotion-react.browser.esm-0Zac8NuU.js";import"./context-CBKykClo.js";import"./alert-title-C6vt8Fh3.js";import"./alert-description-Ce3B-u4s.js";import"./close-button-C2STa05D.js";import"./portal-BlJtTGys.js";import"./index-BMuBlvl2.js";import"./stack-BdCvkUuU.js";import"./children-2ZXUntH3.js";import"./h-stack-DtOTlfD9.js";import"./center-Ds0pdlwh.js";import"./Button-BuUAEi56.js";import"./button-CcUc8H6T.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./Icon-COWGDXDO.js";/* empty css              */import"./providers-BmY41TRh.js";import"./calc-C4XOv3Qc.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";const j=`
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
`;function m(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:x}),`
`,t.jsxs(d,{children:[t.jsx(o.h1,{id:"toast",children:"Toast"}),t.jsx(o.p,{children:`Toast brukes for å gi brukeren tilbakemelding etter en handling. Toast skal forsvinne enten når den blir lukket,
eller av seg selv etterhvert. Flere toasts kan være på skjermen samtidig.`}),t.jsxs(o.p,{children:["På ",t.jsx(o.a,{href:"https://chakra-ui.com/docs/components/toast",rel:"nofollow",children:"Chakra-ui.com"})," finner du noen niche brukseksempler."]}),t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`import { useToast } from "@kvib/react";
`})}),t.jsx(o.h2,{id:"status",children:"Status"}),t.jsx(s,{variant:"outline",children:t.jsx(p,{children:t.jsx(i,{of:u})})}),t.jsx(e,{code:k,dark:!0}),t.jsx(o.h2,{id:"positions",children:"Positions"}),t.jsx(s,{variant:"outline",children:t.jsx(p,{children:t.jsx(i,{of:h})})}),t.jsx(e,{code:f,dark:!0}),t.jsx(o.h2,{id:"props",children:"Props"}),t.jsx(s,{variant:"outline",children:t.jsx(p,{children:t.jsx(i,{of:n})})}),t.jsx(e,{code:j,dark:!0}),t.jsx(c,{of:n})]})]})}function Ft(r={}){const{wrapper:o}={...a(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(m,{...r})}):m(r)}export{Ft as default};
