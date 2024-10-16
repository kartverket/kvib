import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as l,af as o,ai as s,ag as d}from"./index-DR90DzL6.js";import{T as c,a as x,b as u,c as h,d as j,e as T,f as n}from"./Textarea.stories-CJCU-Rnr.js";import{D as f,F as g,a as i,b as S}from"./Feedback-BlMxi5Tq.js";import{T as a}from"./text-rUwQV1v4.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DNTp-SgB.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./textarea-DpVH_eob.js";import"./use-form-control-Dd261dKs.js";import"./form-control-COBP5YBd.js";import"./forward-ref-BWI-Phbn.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./use-theme-CBfqdygA.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./factory-CdGA0D9p.js";import"./context-CBKykClo.js";import"./cx-BDMMs1jM.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./stack-Crl0JO1i.js";import"./responsive-ClFn5vzN.js";import"./children-2ZXUntH3.js";import"./radio-F6daxEW4.js";import"./index-BbAC0Ngi.js";import"./visually-hidden.style-BUiBK_kv.js";import"./split-CzYrjwZo.js";import"./box-B7h7acUJ.js";import"./image-Cz43cXZB.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./heading-D_euA-I1.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./Button-eZkbEJsU.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./Icon-LAcu_LZm.js";/* empty css              */const v=`const TextAreaControlledExample = () => {
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
`;function p(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsxs(f,{children:[e.jsx(t.h1,{id:"textarea",children:"Textarea"}),e.jsx(t.p,{children:"Textarea brukes til å lage multi-line input tekst."}),e.jsx(t.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Textarea } from "@kvib/react";
`})}),e.jsx(g,{component:"Textarea"}),e.jsx(i,{title:"Controlled Textarea",description:"",isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:x,sourceState:"none"}),e.jsx(s,{code:v,dark:!0})]})}),e.jsx(i,{title:"Resize atferd",description:e.jsxs(a,{children:[e.jsx(t.code,{children:"resize"})," prop can brukes for å endre ",e.jsx(t.code,{children:"Textarea"})," størrelse atferdsendring"]}),isVertical:!0,story:e.jsxs(e.Fragment,{children:[e.jsx(o,{of:u,sourceState:"none"}),e.jsx(s,{code:z,dark:!0})]})}),e.jsx(i,{title:"Størrelser",description:e.jsxs(a,{children:["Størrelsen kan endres ved å bruke ",e.jsx(t.code,{children:"size"})," prop."]}),story:e.jsx(o,{of:h,sourceState:"hidden"})}),e.jsx(i,{title:"Varianter",description:e.jsxs(a,{children:["Variant kan endres ved å bruke ",e.jsx(t.code,{children:"variant"})," prop."]}),story:e.jsx(o,{of:j,sourceState:"hidden"})}),e.jsx(i,{title:"States",description:e.jsxs(a,{children:["Tilstand eksempel: ",e.jsx(t.code,{children:"isInvalid"}),",",e.jsx(t.code,{children:"isReadOnly"})," og ",e.jsx(t.code,{children:"isDisabled"}),"."]}),story:e.jsx(o,{of:T,sourceState:"hidden"})}),e.jsx(S,{light:!0,children:"Props"}),e.jsx(o,{of:n}),e.jsx(d,{of:n})]})]})}function Ee(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(p,{...r})}):p(r)}export{Ee as default};
