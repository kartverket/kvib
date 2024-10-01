import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-Cy1V4W5h.js";import{ae as m,ai as p}from"./index-CJ9eVrp8.js";import{F as l,D as c}from"./Feedback-DEYXld9b.js";import{R as i}from"./index-BwDkhjyp.js";import{D as d}from"./DocsCanvas-C63K8Gif.js";import{u as a}from"./chunk-R5W6LHQW-ox3U3ViN.js";import{A as u}from"./Alert-DdV_lMWx.js";import{A as k}from"./chunk-3KCBMPN5-Dapgpkcw.js";import{B as f}from"./chunk-PULVB27S-CgiffgmI.js";import{A as h}from"./chunk-CUKBNH6U-Bnoln8s6.js";import"./iframe-CPQh67bk.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./Card-BeZB5sUt.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./Button-BTrFsz-j.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./index-2ZXUntH3.js";import"./Icon-Bw1o7Ynw.js";/* empty css              */import"./chunk-KA2477BY-BRr71Die.js";import"./chunk-724WJZW4-D7beLSYm.js";import"./chunk-2GBDXOMA-K_WHOyag.js";const x=()=>{const r=i.useRef(),[t,o]=i.useState(!1);return a({ref:r,handler:()=>o(!1)}),e.jsx(d,{children:e.jsx("div",{children:t?e.jsx("div",{ref:r,children:"👋 Hey, I'm a modal. Click anywhere outside of me to close."}):e.jsx("button",{onClick:()=>o(!0),children:"Open Modal"})})})},j=`function Example() {
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
