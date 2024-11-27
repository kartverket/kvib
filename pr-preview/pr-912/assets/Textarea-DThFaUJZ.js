import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as l}from"./index-C2WH5l5l.js";import{ae as d,af as o,ai as s,ag as c}from"./index-ra_UBDEC.js";import{D as m,F as x,a as i,b as u}from"./Feedback-Ddcknu-S.js";import{T as h,a as j,b as T,c as f,d as g,e as v,P as n}from"./Textarea.stories-BNlAZFxQ.js";import{T as a}from"./text-DjVM_lrW.js";import"./index-Wp2u197Z.js";import"./iframe-ct8_CqPx.js";import"../sb-preview/runtime.js";import"./index-C2tM1_0x.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";import"./box-BV7_-RZx.js";import"./factory-DbxLU_Fv.js";import"./image-CQDJLaH5.js";import"./simple-grid-Bsi4EGdg.js";import"./walk-object-MOVJDcbI.js";import"./is-D1VN0Vzs.js";import"./grid-D5vdwI11.js";import"./heading-CoXJvVOu.js";import"./create-recipe-context-uxbFyZx7.js";import"./empty-DSVal0bC.js";import"./use-recipe-Bg1t1VCq.js";import"./card-CN8xBwHc.js";import"./create-slot-recipe-context-Ct7AJ-u_.js";import"./flex-lNX0IHYU.js";import"./Link-BrjUlTjh.js";import"./link-BIDHNzfj.js";import"./textarea-Tf2q3n37.js";import"./index-C5caIrke.js";import"./factory-Ck6AXAvN.js";import"./index-DXMatsKm.js";import"./use-field-context-SniSo6zJ.js";import"./create-context-9KvyJVA-.js";import"./stack-BOCWF6Sh.js";import"./radio-NcDIWovd.js";import"./radio-group-DSolcpld.js";import"./attr-C3Jtgmrz.js";import"./create-split-props-u5h9OPvL.js";import"./index-Cj16rID6.js";import"./index-BRNWFSEf.js";import"./index-DyXZFt-t.js";import"./index-BR8t6gqn.js";import"./index-NfPDfnaY.js";import"./index-Ctx6eFvH.js";import"./index-DxF6_pxb.js";import"./use-environment-context-CJHKuyB_.js";import"./use-locale-context-DoP-38uM.js";import"./use-event-BQKQuVfd.js";const S=`const TextAreaControlledExample = () => {
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
`;function p(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsxs(m,{children:[e.jsx(t.h1,{id:"textarea",children:"Textarea"}),e.jsx(t.p,{children:"Textarea brukes til å lage multi-line input tekst."}),e.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Textarea } from "@kvib/react";
`})}),e.jsx(x,{component:"Textarea"}),e.jsx(i,{title:"Controlled Textarea",description:"",isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:j,sourceState:"none"}),e.jsx(s,{code:S,dark:!0})]})}),e.jsx(i,{title:"Resize atferd",description:e.jsxs(a,{children:[e.jsx(t.code,{children:"resize"})," prop can brukes for å endre ",e.jsx(t.code,{children:"Textarea"})," størrelse atferdsendring"]}),isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:T,sourceState:"none"}),e.jsx(s,{code:z,dark:!0})]})}),e.jsx(i,{title:"Størrelser",description:e.jsxs(a,{children:["Størrelsen kan endres ved å bruke ",e.jsx(t.code,{children:"size"})," prop."]}),story:e.jsx(o,{of:f,sourceState:"hidden"})}),e.jsx(i,{title:"Varianter",description:e.jsxs(a,{children:["Variant kan endres ved å bruke ",e.jsx(t.code,{children:"variant"})," prop."]}),story:e.jsx(o,{of:g,sourceState:"hidden"})}),e.jsx(i,{title:"States",description:e.jsxs(a,{children:["Tilstand eksempel: ",e.jsx(t.code,{children:"isInvalid"}),",",e.jsx(t.code,{children:"isReadOnly"})," og ",e.jsx(t.code,{children:"isDisabled"}),"."]}),story:e.jsx(o,{of:v,sourceState:"hidden"})}),e.jsx(u,{light:!0,children:"Props"}),e.jsx(o,{of:n}),e.jsx(c,{of:n})]})]})}function fe(r={}){const{wrapper:t}={...l(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(p,{...r})}):p(r)}export{fe as default};
