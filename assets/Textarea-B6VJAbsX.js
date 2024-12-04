import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as d}from"./index-BGZZYR5m.js";import{T as o}from"./index-CdN4NO-W.js";import{ae as c,af as a,ai as i,ag as x}from"./index-TbOp0XQz.js";import{D as u,F as p,a as s,b as h}from"./Feedback-D9BTLRMH.js";import{T as j,a as m,b as T,c as f,d as g,e as v,P as n}from"./Textarea.stories-BKVhiimY.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-BGQlILji.js";import"../sb-preview/runtime.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";const S=`const TextAreaControlledExample = () => {
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
`;function l(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:j}),`
`,e.jsxs(u,{children:[e.jsx(t.h1,{id:"textarea",children:"Textarea"}),e.jsx(t.p,{children:"Textarea brukes til å lage multi-line input tekst."}),e.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Textarea } from "@kvib/react";
`})}),e.jsx(p,{component:"Textarea"}),e.jsx(s,{title:"Controlled Textarea",description:"",isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m,sourceState:"none"}),e.jsx(i,{code:S,dark:!0})]})}),e.jsx(s,{title:"Resize atferd",description:e.jsxs(o,{children:[e.jsx(t.code,{children:"resize"})," prop can brukes for å endre ",e.jsx(t.code,{children:"Textarea"})," størrelse atferdsendring"]}),isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(a,{of:T,sourceState:"none"}),e.jsx(i,{code:z,dark:!0})]})}),e.jsx(s,{title:"Størrelser",description:e.jsxs(o,{children:["Størrelsen kan endres ved å bruke ",e.jsx(t.code,{children:"size"})," prop."]}),story:e.jsx(a,{of:f,sourceState:"hidden"})}),e.jsx(s,{title:"Varianter",description:e.jsxs(o,{children:["Variant kan endres ved å bruke ",e.jsx(t.code,{children:"variant"})," prop."]}),story:e.jsx(a,{of:g,sourceState:"hidden"})}),e.jsx(s,{title:"States",description:e.jsxs(o,{children:["Tilstand eksempel: ",e.jsx(t.code,{children:"isInvalid"}),",",e.jsx(t.code,{children:"isReadOnly"})," og ",e.jsx(t.code,{children:"isDisabled"}),"."]}),story:e.jsx(a,{of:v,sourceState:"hidden"})}),e.jsx(h,{light:!0,children:"Props"}),e.jsx(a,{of:n}),e.jsx(x,{of:n})]})]})}function P(r={}){const{wrapper:t}={...d(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(l,{...r})}):l(r)}export{P as default};
