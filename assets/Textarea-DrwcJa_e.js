import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as l,af as o,ai as s,ag as d}from"./index-et1-QSOm.js";import{D as c,F as x,a as i,b as u}from"./Feedback-D5fJJF25.js";import{T as h,a as j,b as T,c as f,d as g,e as v,P as n}from"./Textarea.stories-DGLC_S_J.js";import{T as a}from"./text-ByHKaHOl.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dj_wdmNn.js";import"../sb-preview/runtime.js";import"./index-Drt3gf4w.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-DeqT4ixr.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-BzV54DYr.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-inAnnyJ8.js";import"./grid-B2CMUJGq.js";import"./use-theme-CBfqdygA.js";import"./hooks-gaHRB8Pq.js";import"./responsive-BNzRyFLh.js";import"./heading--NES2npU.js";import"./use-style-config-YUvqttAg.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./Card-rgsWy52h.js";import"./providers-BwxcBeey.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-B93s4yJe.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-C1gIBb6o.js";import"./Button-DhVDGFqL.js";import"./button-DEHO-vdc.js";import"./spinner-DfEqsPDM.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-Da94FwVR.js";import"./h-stack-BA5VzuBF.js";import"./stack-REYSnkee.js";import"./children-2ZXUntH3.js";import"./Icon-DK-OAaRX.js";/* empty css              */import"./textarea-DdJBiiLn.js";import"./use-form-control-1lTcASP6.js";import"./form-control-r5o_asaM.js";import"./call-all-DDzecCnU.js";import"./radio-CsweyUa7.js";import"./index-BbAC0Ngi.js";import"./visually-hidden.style-BUiBK_kv.js";import"./split-CzYrjwZo.js";const S=`const TextAreaControlledExample = () => {
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
`;function p(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsxs(c,{children:[e.jsx(t.h1,{id:"textarea",children:"Textarea"}),e.jsx(t.p,{children:"Textarea brukes til å lage multi-line input tekst."}),e.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Textarea } from "@kvib/react";
`})}),e.jsx(x,{component:"Textarea"}),e.jsx(i,{title:"Controlled Textarea",description:"",isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:j,sourceState:"none"}),e.jsx(s,{code:S,dark:!0})]})}),e.jsx(i,{title:"Resize atferd",description:e.jsxs(a,{children:[e.jsx(t.code,{children:"resize"})," prop can brukes for å endre ",e.jsx(t.code,{children:"Textarea"})," størrelse atferdsendring"]}),isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:T,sourceState:"none"}),e.jsx(s,{code:z,dark:!0})]})}),e.jsx(i,{title:"Størrelser",description:e.jsxs(a,{children:["Størrelsen kan endres ved å bruke ",e.jsx(t.code,{children:"size"})," prop."]}),story:e.jsx(o,{of:f,sourceState:"hidden"})}),e.jsx(i,{title:"Varianter",description:e.jsxs(a,{children:["Variant kan endres ved å bruke ",e.jsx(t.code,{children:"variant"})," prop."]}),story:e.jsx(o,{of:g,sourceState:"hidden"})}),e.jsx(i,{title:"States",description:e.jsxs(a,{children:["Tilstand eksempel: ",e.jsx(t.code,{children:"isInvalid"}),",",e.jsx(t.code,{children:"isReadOnly"})," og ",e.jsx(t.code,{children:"isDisabled"}),"."]}),story:e.jsx(o,{of:v,sourceState:"hidden"})}),e.jsx(u,{light:!0,children:"Props"}),e.jsx(o,{of:n}),e.jsx(d,{of:n})]})]})}function Ee(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(p,{...r})}):p(r)}export{Ee as default};
