import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-CrRr8ebd.js";import{ae as m,ai as p}from"./index-D5MNtbJv.js";import{F as l,D as c}from"./Feedback-oujG440w.js";import{R as i}from"./index-BwDkhjyp.js";import{D as d}from"./DocsCanvas-Bqew-jOy.js";import{u as a}from"./use-outside-click-DJDnsvpj.js";import{A as u}from"./Alert-O4bnFTKD.js";import{A as k}from"./alert-icon-DyJ3kpUV.js";import{B as f}from"./box-CwIaBbUI.js";import{A as h}from"./alert-description-Ce3B-u4s.js";import"./iframe-v449ORsv.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-GsZWH-VT.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./omit-QLD0Eizt.js";import"./simple-grid-ZnRIKZLi.js";import"./grid-BNFEBO0r.js";import"./use-theme-CeOC8r1f.js";import"./hooks-Dk7VeZ_r.js";import"./responsive-CwLgsqRj.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-D14Jyc6W.js";import"./Card-jUBPBQ-A.js";import"./providers-BmY41TRh.js";import"./emotion-react.browser.esm-0Zac8NuU.js";import"./context-CBKykClo.js";import"./calc-C4XOv3Qc.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-v5DFvFs4.js";import"./Link-D6DR4S49.js";import"./stack-BdCvkUuU.js";import"./children-2ZXUntH3.js";import"./use-callback-ref-DA6UG1mJ.js";import"./define-styles-BSAHv3yx.js";import"./icon-BmokjFuu.js";import"./spinner-CI5qPk1o.js";const x=()=>{const r=i.useRef(),[t,o]=i.useState(!1);return a({ref:r,handler:()=>o(!1)}),e.jsx(d,{children:e.jsx("div",{children:t?e.jsx("div",{ref:r,children:"👋 Hey, I'm a modal. Click anywhere outside of me to close."}):e.jsx("button",{onClick:()=>o(!0),children:"Open Modal"})})})},j=`function Example() {
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
}`;function s(r){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Komponenter/Hooks/useOutsideClick"}),`
`,e.jsx(t.h1,{id:"useoutsideclick",children:"useOutsideClick"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useOutsideClick"})," er en tilpasset hook som håndterer klikkhendelser utenfor et bestemt DOM-element, som for eksempel en ",e.jsx(t.strong,{children:"div"}),". En håndterer kalles når en klikk- eller trykkehendelse skjer utenfor det refererte elementet."]}),`
`,e.jsxs(u,{status:"warning",children:[e.jsx(k,{}),e.jsx(f,{children:e.jsx(h,{children:e.jsx(t.p,{children:"Denne hooken er kompatibel med mus- og trykkehendelser."})})})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { useOutsideClick } from "@kvib/react";
`})}),`
`,e.jsx(l,{component:"useOutsideClick"}),`
`,e.jsxs(c,{children:[e.jsx(t.h1,{id:"bruk",children:"Bruk"}),e.jsx(x,{}),e.jsx(p,{code:j,dark:!0})]})]})}function Me(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{Me as default};
