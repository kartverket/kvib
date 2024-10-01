import{j as t}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as l,ah as i,ai as e,ag as c}from"./index-B_29rcGw.js";import{T as d,a as x,b as h,c as a}from"./Toast.stories-RFdUpWm9.js";import{D as u}from"./Feedback-DEYXld9b.js";import{A as j}from"./Alert-DdV_lMWx.js";import{A as f}from"./chunk-3KCBMPN5-Dapgpkcw.js";import{A as k}from"./chunk-QURMB2UJ-D6nRmiHQ.js";import{A as T}from"./chunk-CUKBNH6U-Bnoln8s6.js";import{C as s,a as n}from"./Card-BeZB5sUt.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-IMCsqiBJ.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-6RSEZNRH-C6DreKgQ.js";import"./chunk-3Y4YXCR2-Dmnl2cbc.js";import"./index-DdaX-njP.js";import"./index-DEiKcbOK.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./proxy-CzVOQe18.js";import"./chunk-37N6GCLA-D1CkRx4c.js";import"./chunk-2GBDXOMA-K_WHOyag.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-34PD6CUK-B1dqEPkL.js";import"./index-CHDWSgKD.js";import"./index-DJS8qWMq.js";import"./index-CBajw-n2.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./index-2ZXUntH3.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./Button-BTrFsz-j.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./index-Bdxaq0s4.js";import"./Icon-Bw1o7Ynw.js";/* empty css              */import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";const g=`
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
`,v=`
<ToastExample
    duration={4000}
    title="Error"
    description="Noe gikk galt"
    status="error"
    >Trykk for toast
</ToastExample>
`,C=`
<ToastExample
    position="top-left"
    title="Top-left"
    duration="5000"
    >Top-left
</ToastExample>
`;function p(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:d}),`
`,t.jsxs(u,{children:[t.jsx(o.h1,{id:"toast",children:"Toast"}),t.jsx(o.p,{children:`Toast brukes for å gi brukeren tilbakemelding etter en handling. Toast skal forsvinne enten når den blir lukket,
eller av seg selv etterhvert. Flere toasts kan være på skjermen samtidig.`}),t.jsxs(o.p,{children:["På ",t.jsx(o.a,{href:"https://chakra-ui.com/docs/components/toast",rel:"nofollow",children:"Chakra-ui.com"})," finner du noen niche brukseksempler."]}),t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`import { useToast } from "@kvib/react";
`})}),t.jsx(o.h2,{id:"status",children:"Status"}),t.jsxs(j,{status:"warning",children:[t.jsx(f,{}),t.jsx(k,{children:"Feil farge"}),t.jsx(T,{children:t.jsx(o.p,{children:'Farge for "warning" toast er ikke helt riktig enda (for lite kontrast mot hvit tekst)'})})]}),t.jsx(s,{variant:"outline",children:t.jsx(n,{children:t.jsx(i,{of:x})})}),t.jsx(e,{code:v,dark:!0}),t.jsx(o.h2,{id:"positions",children:"Positions"}),t.jsx(s,{variant:"outline",children:t.jsx(n,{children:t.jsx(i,{of:h})})}),t.jsx(e,{code:C,dark:!0}),t.jsx(o.h2,{id:"props",children:"Props"}),t.jsx(s,{variant:"outline",children:t.jsx(n,{children:t.jsx(i,{of:a})})}),t.jsx(e,{code:g,dark:!0}),t.jsx(c,{of:a})]})]})}function yt(r={}){const{wrapper:o}={...m(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(p,{...r})}):p(r)}export{yt as default};
