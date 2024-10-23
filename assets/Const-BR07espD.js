import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-BkjZsj3z.js";import{ai as a,ae as c}from"./index-g7bLtXHj.js";import{b as l,F as d,D as n,a as o}from"./Feedback-C8oPMuBk.js";import{r as p}from"./index-BwDkhjyp.js";import{D as u}from"./DocsCanvas-DLlOGo4n.js";import"./iframe-BxIFBNNQ.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-Cs-tJ6EH.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-CypcOzo0.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";function i(r){const t=p.useRef(null);return t.current===null&&(t.current=typeof r=="function"?r():r),t.current}const j=`function Example() {
  const mountTime = useConst(() => new Date().toTimeString())
  const obj = useConst({ a: Math.random() })
  return (
    <>
      <p>Mount time: {mountTime}</p>
      <p>Value from constant object: {obj.a}</p>
    </>
  )
}`,g=`function Example() {
  const [value] = useState(new Date().toTimeString())
  return (
    <p>Mount time: {value}</p>
  )
}`,h=()=>{const r=i(()=>new Date().toTimeString()),t=i({a:Math.random()});return e.jsxs(u,{children:[e.jsxs("p",{children:["Mount time: ",r]}),e.jsxs("p",{children:["Value from constant object: ",t.a]}),e.jsx(a,{code:j,dark:!0})]})},x=()=>{const[r]=p.useState(new Date().toTimeString());return e.jsxs(u,{children:[e.jsxs("p",{children:["Mount time: ",r]}),e.jsx(a,{code:g,dark:!0})]})};function s(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Hooks/useConst"}),`
`,e.jsx(t.h1,{id:"useconst",children:"useConst"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useConst"}),` er en tilpasset hook brukt for å initialisere og returnere en konstant verdi.
I motsetning til useMemo, vil dette alltid returnere den samme verdien, og hvis initialisatoren er en funksjon, blir den bare kalt én gang.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { useConst } from "@kvib/react";
`})}),`
`,e.jsx(l,{light:!0,children:"Parametere"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useConst"})," hooken aksepterer enten den initielle verdien eller en funksjon for å hente den initielle verdien."]}),`
`,e.jsx(d,{component:"useConst"}),`
`,e.jsx(n,{children:e.jsx(o,{title:"Bruk",description:"",isVertical:!0,story:e.jsx(h,{})})}),`
`,e.jsxs(n,{children:[e.jsx(t.h2,{id:"hvorfor-ikke-bruke-usememo",children:"Hvorfor ikke bruke useMemo?"}),e.jsxs(t.p,{children:["React-dokumentasjonen sier at motoren kan velge å 'glemme' noen tidligere memoiserte verdier og beregne dem på nytt ved neste gjengivelse, og du bør skrive koden din slik at den fortsatt fungerer uten ",e.jsx(t.strong,{children:"useMemo"})," og deretter legge det til for å optimalisere ytelsen."]}),e.jsxs(t.p,{children:["Du bør bruke ",e.jsx(t.strong,{children:"useMemo"})," bare når du trenger å beregne verdien basert på avhengigheter."]}),e.jsx(t.h2,{id:"hvorfor-ikke-bruke-usestate",children:"Hvorfor ikke bruke useState?"}),e.jsx(o,{title:"",description:"Dette vil fungere som en konstant, men det er semantisk feil, og det er dyrt på grunn av reduksjonshåndteringen som vi ikke trenger.",isVertical:!0,story:e.jsx(x,{})})]})]})}function ce(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{ce as default};
