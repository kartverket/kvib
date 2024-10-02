import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import{ae as a,af as r,ai as l,ag as d}from"./index-CcWrSbUc.js";import{D as s,F as c,a as i,b as x}from"./Feedback-CGVA0MWq.js";import{T as u,C as j,a as f,b as h,c as T,d as k,e as g,f as p}from"./Tooltip.stories-CbU1g0r3.js";import{A as C}from"./Alert-XgOxNRd7.js";import{A as b}from"./chunk-3KCBMPN5-kuExC6NN.js";import{T as D}from"./chunk-2OOHT3W5-DQGV2H9e.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C77LSURn.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-PULVB27S-BbQOsZmk.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./Card-BhafkWhq.js";import"./chunk-MFVQSVQB-CVs57b_v.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./Button-CYMcA4Az.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./index-2ZXUntH3.js";import"./Icon-BA11F4pX.js";/* empty css              */import"./chunk-TK6VMDNP-BW7bH1GJ.js";import"./chunk-3XANSPY5-CEuNXLts.js";import"./chunk-LUYFNC5G-DV8XJogC.js";import"./index-DOEX-ehf.js";import"./index-DdaX-njP.js";import"./index-Bvkiv1cC.js";import"./chunk-34PD6CUK-B1dqEPkL.js";import"./proxy-CzVOQe18.js";import"./index-CBajw-n2.js";import"./chunk-NTCQBYKE-BQeZ9W8n.js";import"./chunk-7ELO524Q-7yaClzxP.js";import"./chunk-RPO2WXNL-D7KJQqNK.js";import"./chunk-2GBDXOMA-DYcQJ-WZ.js";import"./chunk-R3DH46PF-iWUMGBws.js";const S=`const CustomCard = forwardRef(({ children, ...rest }, ref) => (
    <Box p="1">
      <Tag ref={ref} {...rest}>
        {children}
      </Tag>
    </Box>
  ));
  
  const CustomToolTip = () => (
  
  <Tooltip label="Hover me">
    <CustomCard>Tag Here</CustomCard>
  </Tooltip>
  );
  
  render(<CustomToolTip />);`;function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:u}),`
`,o.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,o.jsxs(C,{status:"info",children:[o.jsx(b,{}),o.jsxs(t.p,{children:["Kjent bug for Tooltip: ",o.jsx(t.code,{children:'placement="auto-end"'})," legger seg ikke som ønsket."]})]}),`
`,o.jsx(t.p,{children:"Et tooltip er en informativ melding som dukker opp når en bruker samhandler med et element."}),`
`,o.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`import { Tooltip } from "@kvib/react";
`})}),`
`,o.jsx(s,{children:o.jsx(c,{component:"Tooltip"})}),`
`,o.jsxs(s,{children:[o.jsx(i,{title:"Bruk av egne komponenter",description:o.jsx(D,{children:"Dersom Tooltip wrapper et funksjonelt komponent må komponentet ha en ref ved `forwardref`. Dette inkluderer også bruk av ikoner fra Kartverkets designsystem. Se eksempel:"}),story:o.jsxs(o.Fragment,{children:[o.jsx(r,{of:j,sourceState:"none"}),o.jsx(l,{code:S,dark:!0})]})}),o.jsx(i,{isVertical:!0,title:"Tooltip med pil",description:"",story:o.jsx(r,{of:f,sourceState:"hidden"})}),o.jsx(i,{isVertical:!0,title:"Tooltip med fokuserbart komponent",description:"",story:o.jsx(r,{of:h,sourceState:"hidden"})}),o.jsx(i,{isVertical:!0,title:"Disabled state",description:"",story:o.jsx(r,{of:T,sourceState:"hidden"})}),o.jsx(i,{isVertical:!0,title:"Plassering",description:"",story:o.jsx(r,{of:k,sourceState:"hidden"})}),o.jsx(i,{isVertical:!0,title:"Flere eksempler",description:"",story:o.jsx(r,{of:g,sourceState:"hidden"})})]}),`
`,o.jsx(x,{light:!0,children:"Props"}),`
`,o.jsx(r,{of:p}),`
`,o.jsx(d,{of:p})]})}function Bo(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(m,{...e})}):m(e)}export{Bo as default};
