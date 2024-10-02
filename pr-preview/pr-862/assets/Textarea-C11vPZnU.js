import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as l}from"./index-DlpNa54Y.js";import{ae as d,af as o,ai as s,ag as c}from"./index-k-h-8Dss.js";import{T as m,a as x,b as u,c as h,d as j,e as T,f as n}from"./Textarea.stories-B7viMF21.js";import{D as f,F as g,a as i,b as S}from"./Feedback-Be-nclhu.js";import{T as a}from"./chunk-2OOHT3W5-DQGV2H9e.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DKUcOLmC.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-4IH3O7BJ-1_9Vphig.js";import"./chunk-56K2BSAJ-B2SooMhp.js";import"./chunk-DFWC5MHP-CwveL_zt.js";import"./index-CHDWSgKD.js";import"./index-Bdxaq0s4.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./index-2ZXUntH3.js";import"./chunk-RDF2AYID-BSAGDmjh.js";import"./index-DdrsuNi1.js";import"./chunk-PULVB27S-BbQOsZmk.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./Card-Bn7RuWsc.js";import"./chunk-MFVQSVQB-CVs57b_v.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./Button-ld38lsZs.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./Icon-CPAF9xaH.js";/* empty css              */import"./chunk-R3DH46PF-iWUMGBws.js";const v=`const TextAreaControlledExample = () => {
    const [value, setValue] = useState<string>("");
    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };
    return (
        <>
            <Text mb="8px">Value: {value}</Text>
            <KvibTextarea
                value={value}
                onChange={handleInputChange}
                placeholder="Placeholder"
                size="sm"
            />
        </>
    );
    
    };
`,z=`const TextareaResizeExample = () => {
    const [resize, setResize] = useState("horizontal");
  
    return (
      <>
        <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
          <Stack direction="row" spacing={5}>
            <Radio value="horizontal">Horizontal</Radio>
            <Radio value="vertical">Vertical</Radio>
            <Radio value="none">None</Radio>
          </Stack>
        </RadioGroup>
        
        <KvibTextarea placeholder="Here is a sample placeholder" size="sm" resize={resize} />
      </>
    );
  };
`;function p(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:m}),`
`,e.jsxs(f,{children:[e.jsx(t.h1,{id:"textarea",children:"Textarea"}),e.jsx(t.p,{children:"Textarea brukes til å lage multi-line input tekst."}),e.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Textarea } from "@kvib/react";
`})}),e.jsx(g,{component:"Textarea"}),e.jsx(i,{title:"Controlled Textarea",description:"",isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:x,sourceState:"none"}),e.jsx(s,{code:v,dark:!0})]})}),e.jsx(i,{title:"Resize atferd",description:e.jsxs(a,{children:[e.jsx(t.code,{children:"resize"})," prop can brukes for å endre ",e.jsx(t.code,{children:"Textarea"})," størrelse atferdsendring"]}),isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:u,sourceState:"none"}),e.jsx(s,{code:z,dark:!0})]})}),e.jsx(i,{title:"Størrelser",description:e.jsxs(a,{children:["Størrelsen kan endres ved å bruke ",e.jsx(t.code,{children:"size"})," prop."]}),story:e.jsx(o,{of:h,sourceState:"hidden"})}),e.jsx(i,{title:"Varianter",description:e.jsxs(a,{children:["Variant kan endres ved å bruke ",e.jsx(t.code,{children:"variant"})," prop."]}),story:e.jsx(o,{of:j,sourceState:"hidden"})}),e.jsx(i,{title:"States",description:e.jsxs(a,{children:["Tilstand eksempel: ",e.jsx(t.code,{children:"isInvalid"}),",",e.jsx(t.code,{children:"isReadOnly"})," og ",e.jsx(t.code,{children:"isDisabled"}),"."]}),story:e.jsx(o,{of:T,sourceState:"hidden"})}),e.jsx(S,{light:!0,children:"Props"}),e.jsx(o,{of:n}),e.jsx(c,{of:n})]})]})}function ge(r={}){const{wrapper:t}={...l(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(p,{...r})}):p(r)}export{ge as default};
