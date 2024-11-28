import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as d}from"./index-C2WH5l5l.js";import"./slider-Bgj0f888.js";import{ae as c,af as a,ai as i,ag as p}from"./index-DY9GLNmK.js";import{D as x,F as m,a as s,b as u}from"./Feedback-B4xLAgjS.js";import{T as h,a as j,b as T,c as f,d as g,e as v,P as n}from"./Textarea.stories-BGlq7PCg.js";import{T as o}from"./text-CqjT0fSu.js";import"./index-Wp2u197Z.js";import"./h-stack-Bcgbt9nc.js";import"./create-slot-recipe-context-BTQZ2sOO.js";import"./index-C2tM1_0x.js";import"./iframe-ODsc-ldJ.js";import"../sb-preview/runtime.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";import"./box-CwJKB2Ex.js";import"./image-BLTEeVh9.js";import"./simple-grid-DRjr5Irv.js";import"./grid-C5fGnQys.js";import"./heading-X1Pa8Qgc.js";import"./create-recipe-context-DEM4M4qP.js";import"./use-recipe-BTz8rvp_.js";import"./card-f-p4b1Lj.js";import"./flex-B5WCXjfY.js";import"./Link-BmFVOlPn.js";import"./link-WFPTfeGr.js";import"./textarea-DJId2usa.js";import"./use-field-context-B2lpNrC2.js";import"./radio-CVyIC8Eh.js";import"./radio-group-DTL6C9tx.js";import"./attr-C3Jtgmrz.js";import"./index-BUfP1Ak0.js";import"./index-CbGW83KV.js";import"./index-BR8t6gqn.js";const S=`const TextAreaControlledExample = () => {
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
`;function l(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsxs(x,{children:[e.jsx(t.h1,{id:"textarea",children:"Textarea"}),e.jsx(t.p,{children:"Textarea brukes til å lage multi-line input tekst."}),e.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Textarea } from "@kvib/react";
`})}),e.jsx(m,{component:"Textarea"}),e.jsx(s,{title:"Controlled Textarea",description:"",isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(a,{of:j,sourceState:"none"}),e.jsx(i,{code:S,dark:!0})]})}),e.jsx(s,{title:"Resize atferd",description:e.jsxs(o,{children:[e.jsx(t.code,{children:"resize"})," prop can brukes for å endre ",e.jsx(t.code,{children:"Textarea"})," størrelse atferdsendring"]}),isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(a,{of:T,sourceState:"none"}),e.jsx(i,{code:z,dark:!0})]})}),e.jsx(s,{title:"Størrelser",description:e.jsxs(o,{children:["Størrelsen kan endres ved å bruke ",e.jsx(t.code,{children:"size"})," prop."]}),story:e.jsx(a,{of:f,sourceState:"hidden"})}),e.jsx(s,{title:"Varianter",description:e.jsxs(o,{children:["Variant kan endres ved å bruke ",e.jsx(t.code,{children:"variant"})," prop."]}),story:e.jsx(a,{of:g,sourceState:"hidden"})}),e.jsx(s,{title:"States",description:e.jsxs(o,{children:["Tilstand eksempel: ",e.jsx(t.code,{children:"isInvalid"}),",",e.jsx(t.code,{children:"isReadOnly"})," og ",e.jsx(t.code,{children:"isDisabled"}),"."]}),story:e.jsx(a,{of:v,sourceState:"hidden"})}),e.jsx(u,{light:!0,children:"Props"}),e.jsx(a,{of:n}),e.jsx(p,{of:n})]})]})}function ae(r={}){const{wrapper:t}={...d(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(l,{...r})}):l(r)}export{ae as default};
