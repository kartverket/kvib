import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-C4ZuRfqS.js";import{ai as a,ae as c}from"./index-CcWrSbUc.js";import{b as l,F as d,D as n,a as o}from"./Feedback-CGVA0MWq.js";import{r as p}from"./index-BwDkhjyp.js";import{D as u}from"./DocsCanvas-D3xvFuIV.js";import"./iframe-C77LSURn.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-PULVB27S-BbQOsZmk.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./chunk-2OOHT3W5-DQGV2H9e.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./Card-BhafkWhq.js";import"./chunk-MFVQSVQB-CVs57b_v.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./Button-CYMcA4Az.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./index-2ZXUntH3.js";import"./Icon-BA11F4pX.js";/* empty css              */function i(r){const t=p.useRef(null);return t.current===null&&(t.current=typeof r=="function"?r():r),t.current}const j=`function Example() {
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
