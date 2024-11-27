import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as l}from"./index-BRkUXrbv.js";import{ae as d,af as o,ai as s,ag as c}from"./index-BYiRI9Rk.js";import{D as m,F as x,a as i,b as u}from"./Feedback-BQAGkkCN.js";import{T as h,a as j,b as T,c as f,d as g,e as v,P as n}from"./Textarea.stories-Be_fkdXQ.js";import{T as a}from"./text-DJW8V014.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-86QPmTEU.js";import"../sb-preview/runtime.js";import"./index-DI5DFbIx.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./box-C9nK2UO9.js";import"./factory-Dr_T95xI.js";import"./image-CB2SsSea.js";import"./simple-grid-DM3Lm1hm.js";import"./walk-object-CRYnzttT.js";import"./is-BbnCF8Je.js";import"./grid-BtoyrwbI.js";import"./heading-D7346gVA.js";import"./create-recipe-context-AlCFSakd.js";import"./empty-DSVal0bC.js";import"./use-recipe-CWoigbDD.js";import"./card-sQbwxR_z.js";import"./create-slot-recipe-context-CYF_0Bn9.js";import"./flex-DKwYg45R.js";import"./Link-BR11G8qQ.js";import"./link-DWtvkXlG.js";import"./textarea-CPv7_DQH.js";import"./index-DCo38vF6.js";import"./factory-ZiKyq5QJ.js";import"./index-DussGwo5.js";import"./use-field-context-CcEUgBGI.js";import"./create-context-DPShtm6F.js";import"./stack-IaJndBAh.js";import"./radio-BTMdk4OB.js";import"./radio-group-K6bC5Y0z.js";import"./attr-C3Jtgmrz.js";import"./create-split-props-u5h9OPvL.js";import"./index-BX8vV0vD.js";import"./index-BRNWFSEf.js";import"./index-D_HpMUl0.js";import"./index-BR8t6gqn.js";import"./index-NfPDfnaY.js";import"./index-Ctx6eFvH.js";import"./index-D6fzw86p.js";import"./use-environment-context-DqdFjJyw.js";import"./use-locale-context-CnLnjqE7.js";import"./use-event-CSfbiBcH.js";const S=`const TextAreaControlledExample = () => {
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
`})}),e.jsx(x,{component:"Textarea"}),e.jsx(i,{title:"Controlled Textarea",description:"",isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:j,sourceState:"none"}),e.jsx(s,{code:S,dark:!0})]})}),e.jsx(i,{title:"Resize atferd",description:e.jsxs(a,{children:[e.jsx(t.code,{children:"resize"})," prop can brukes for å endre ",e.jsx(t.code,{children:"Textarea"})," størrelse atferdsendring"]}),isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:T,sourceState:"none"}),e.jsx(s,{code:z,dark:!0})]})}),e.jsx(i,{title:"Størrelser",description:e.jsxs(a,{children:["Størrelsen kan endres ved å bruke ",e.jsx(t.code,{children:"size"})," prop."]}),story:e.jsx(o,{of:f,sourceState:"hidden"})}),e.jsx(i,{title:"Varianter",description:e.jsxs(a,{children:["Variant kan endres ved å bruke ",e.jsx(t.code,{children:"variant"})," prop."]}),story:e.jsx(o,{of:g,sourceState:"hidden"})}),e.jsx(i,{title:"States",description:e.jsxs(a,{children:["Tilstand eksempel: ",e.jsx(t.code,{children:"isInvalid"}),",",e.jsx(t.code,{children:"isReadOnly"})," og ",e.jsx(t.code,{children:"isDisabled"}),"."]}),story:e.jsx(o,{of:v,sourceState:"hidden"})}),e.jsx(u,{light:!0,children:"Props"}),e.jsx(o,{of:n}),e.jsx(c,{of:n})]})]})}function ve(r={}){const{wrapper:t}={...l(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(p,{...r})}):p(r)}export{ve as default};
