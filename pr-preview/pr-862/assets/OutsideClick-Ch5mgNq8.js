import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-C4ZuRfqS.js";import{ae as m,ai as p}from"./index-CcWrSbUc.js";import{F as l,D as c}from"./Feedback-CGVA0MWq.js";import{R as i}from"./index-BwDkhjyp.js";import{D as d}from"./DocsCanvas-D3xvFuIV.js";import{u as a}from"./chunk-R5W6LHQW-ox3U3ViN.js";import{A as u}from"./Alert-XgOxNRd7.js";import{A as k}from"./chunk-3KCBMPN5-kuExC6NN.js";import{B as f}from"./chunk-PULVB27S-BbQOsZmk.js";import{A as h}from"./chunk-CUKBNH6U-rCIZzn0p.js";import"./iframe-C77LSURn.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./chunk-2OOHT3W5-DQGV2H9e.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./Card-BhafkWhq.js";import"./chunk-MFVQSVQB-CVs57b_v.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./Button-CYMcA4Az.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./index-2ZXUntH3.js";import"./Icon-BA11F4pX.js";/* empty css              */import"./chunk-KA2477BY-BRr71Die.js";import"./chunk-724WJZW4-D7beLSYm.js";import"./chunk-2GBDXOMA-DYcQJ-WZ.js";const x=()=>{const r=i.useRef(),[t,o]=i.useState(!1);return a({ref:r,handler:()=>o(!1)}),e.jsx(d,{children:e.jsx("div",{children:t?e.jsx("div",{ref:r,children:"👋 Hey, I'm a modal. Click anywhere outside of me to close."}):e.jsx("button",{onClick:()=>o(!0),children:"Open Modal"})})})},j=`function Example() {
  const ref = React.useRef()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  })

  return (
    <>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      )}
    </>
  )
}`;function s(r){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Hooks/useOutsideClick"}),`
`,e.jsx(t.h1,{id:"useoutsideclick",children:"useOutsideClick"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useOutsideClick"})," er en tilpasset hook som håndterer klikkhendelser utenfor et bestemt DOM-element, som for eksempel en ",e.jsx(t.strong,{children:"div"}),". En håndterer kalles når en klikk- eller trykkehendelse skjer utenfor det refererte elementet."]}),`
`,e.jsxs(u,{status:"warning",children:[e.jsx(k,{}),e.jsx(f,{children:e.jsx(h,{children:e.jsx(t.p,{children:"Denne hooken er kompatibel med mus- og trykkehendelser."})})})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { useOutsideClick } from "@kvib/react";
`})}),`
`,e.jsx(l,{component:"useOutsideClick"}),`
`,e.jsxs(c,{children:[e.jsx(t.h1,{id:"bruk",children:"Bruk"}),e.jsx(x,{}),e.jsx(p,{code:j,dark:!0})]})]})}function Oe(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{Oe as default};
