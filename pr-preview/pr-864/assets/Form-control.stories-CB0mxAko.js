import{j as e}from"./extends-CwFRzn3r.js";import{u as H,b as I}from"./chunk-DFWC5MHP-TuRmrrLs.js";import{f as c,o as L,c as M,a as k}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{I as C}from"./chunk-2GBDXOMA-K_WHOyag.js";import{c as S}from"./index-CHDWSgKD.js";import{a as _}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{T as q}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{F as o}from"./Form-control-CG1fyGaW.js";import{S as v}from"./chunk-ZHMYA64R-V_96TD_T.js";import{F as i}from"./Form-label-D-r0Q-vl.js";import{I as d}from"./chunk-6CVSDS6C-DIHhJ7ei.js";import{a as w}from"./chunk-CWVAJCXJ-C0Bst0ak.js";import{a as R}from"./chunk-RDF2AYID-DCZN3YCE.js";import{S as z}from"./chunk-3RSXBRAN-D74awGdd.js";var[V,A]=S({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),E=c((r,t)=>{const n=_("FormError",r),s=L(r),m=H();return m!=null&&m.isInvalid?e.jsx(V,{value:n,children:e.jsx(M.div,{...m==null?void 0:m.getErrorMessageProps(s,t),className:k("chakra-form__error-message",r.className),__css:{display:"flex",alignItems:"center",...n.text}})}):null});E.displayName="FormErrorMessage";var N=c((r,t)=>{const n=A(),s=H();if(!(s!=null&&s.isInvalid))return null;const m=k("chakra-form__error-icon",r.className);return e.jsx(C,{ref:t,"aria-hidden":!0,...r,__css:n.icon,className:m,children:e.jsx("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});N.displayName="FormErrorIcon";const l=c(({helperText:r,children:t,...n},s)=>e.jsxs(I,{...n,ref:s,fontSize:"16px",paddingBottom:"8px",children:[r,t]}));try{l.displayName="FormHelperText",l.__docgenInfo={description:"",displayName:"FormHelperText",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},helperText:{defaultValue:{value:"helperText"},description:"HelperText for component",name:"helperText",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As | undefined"}}}}}catch{}const a=c(({errorMessage:r,children:t,...n},s)=>e.jsxs(E,{...n,ref:s,background:"red.50",padding:"8px",borderStyle:"solid",borderColor:"red.100",borderWidth:"2px",borderRadius:"8px",gap:"5px",children:[e.jsx("span",{className:"material-symbols-outlined",children:"Error"}),e.jsxs(q,{children:[r,t]})]}));try{a.displayName="FormErrorMessage",a.__docgenInfo={description:"",displayName:"FormErrorMessage",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},errorMessage:{defaultValue:{value:"errorMessage"},description:"errorMessage for component",name:"errorMessage",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As | undefined"}}}}}catch{}const O={title:"Skjemaelementer/Form Control",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isRequired:{description:"Toggles if input should be required",table:{type:{summary:"boolean"}},control:"boolean"},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},isReadOnly:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},p={args:{},render:r=>e.jsxs(v,{gap:4,children:[e.jsxs(o,{...r,children:[e.jsx(i,{children:"Label (valgfri)"}),e.jsx(l,{children:"Hjelpetekst"}),e.jsx(d,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(a,{children:"Her er feilmelding"})]}),e.jsx("hr",{}),e.jsxs(o,{...r,children:[e.jsx(i,{children:"Label (valgfri)"}),e.jsx(l,{children:"Hjelpetekst"}),e.jsx(w,{children:"Checkbox"}),e.jsx(a,{children:"Her er feilmelding"})]}),e.jsx("hr",{}),e.jsxs(o,{...r,children:[e.jsx(i,{children:"Label (valgfri)"}),e.jsx(l,{children:"Hjelpetekst"}),e.jsx(R,{children:"Radio"}),e.jsx(a,{children:"Her er feilmelding"})]}),e.jsx("hr",{}),e.jsxs(o,{...r,children:[e.jsx(i,{children:"Label (valgfri)"}),e.jsx(l,{children:"Hjelpetekst"}),e.jsxs(z,{"aria-label":"select form",children:[e.jsx("option",{value:"option1",children:"Alternativ 1"}),e.jsx("option",{value:"option2",children:"Alternativ 2"}),e.jsx("option",{value:"option3",children:"Alternativ 3"})]}),e.jsx(a,{children:"Her er feilmelding"})]})]})},u={args:{},render:r=>e.jsxs(v,{gap:4,children:[e.jsxs(o,{...r,children:[e.jsx(i,{label:"Label (valgfri)"}),e.jsx(l,{helperText:"Hjelpetekst"}),e.jsx(d,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(a,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(o,{...r,isRequired:!0,children:[e.jsx(i,{label:"Label (valgfri)"}),e.jsx(l,{helperText:"Hjelpetekst"}),e.jsx(d,{size:"md",variant:"outline"}),e.jsx(a,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(o,{...r,isDisabled:!0,children:[e.jsx(i,{label:"Label (valgfri)"}),e.jsx(l,{helperText:"Hjelpetekst"}),e.jsx(d,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(a,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(i,{label:"Label (valgfri)"}),e.jsx(l,{helperText:"Hjelpetekst"}),e.jsx(d,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(a,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(o,{...r,isReadOnly:!0,children:[e.jsx(i,{label:"Label (valgfri)"}),e.jsx(l,{helperText:"Hjelpetekst"}),e.jsx(d,{defaultValue:"Jeg er readOnly!",size:"md",variant:"outline"}),e.jsx(a,{errorMessage:"Feilmelding"})]})]})},b={args:{isInvalid:!0},render:r=>e.jsx(v,{gap:4,direction:"row",children:e.jsxs(o,{...r,children:[e.jsx(i,{children:"Label (valgfri)"}),e.jsx(l,{children:"Hjelpetekst"}),e.jsx(d,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(a,{children:"Her er feilmelding"})]})})};var f,h,g;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack gap={4}>
      <KvibFormControl {...args}>
        <KvibFormLabel>Label (valgfri)</KvibFormLabel>
        <KvibFormHelperText>Hjelpetekst</KvibFormHelperText>
        <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage>Her er feilmelding</KvibFormErrorMessage>
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args}>
        <KvibFormLabel>Label (valgfri)</KvibFormLabel>
        <KvibFormHelperText>Hjelpetekst</KvibFormHelperText>
        <Checkbox>Checkbox</Checkbox>
        <KvibFormErrorMessage>Her er feilmelding</KvibFormErrorMessage>
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args}>
        <KvibFormLabel>Label (valgfri)</KvibFormLabel>
        <KvibFormHelperText>Hjelpetekst</KvibFormHelperText>
        <Radio>Radio</Radio>
        <KvibFormErrorMessage>Her er feilmelding</KvibFormErrorMessage>
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args}>
        <KvibFormLabel>Label (valgfri)</KvibFormLabel>
        <KvibFormHelperText>Hjelpetekst</KvibFormHelperText>
        <Select aria-label="select form">
          <option value="option1">Alternativ 1</option>
          <option value="option2">Alternativ 2</option>
          <option value="option3">Alternativ 3</option>
        </Select>
        <KvibFormErrorMessage>Her er feilmelding</KvibFormErrorMessage>
      </KvibFormControl>
    </Stack>
}`,...(g=(h=p.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,F,j;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack gap={4}>
      <KvibFormControl {...args}>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args} isRequired>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args} isDisabled>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args} isInvalid>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args} isReadOnly>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput defaultValue={"Jeg er readOnly!"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
    </Stack>
}`,...(j=(F=u.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var K,T,y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  },
  render: args => <Stack gap={4} direction={"row"}>
      <KvibFormControl {...args}>
        <KvibFormLabel>Label (valgfri)</KvibFormLabel>
        <KvibFormHelperText>Hjelpetekst</KvibFormHelperText>
        <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage>Her er feilmelding</KvibFormErrorMessage>
      </KvibFormControl>
    </Stack>
}`,...(y=(T=b.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const D=["FormControl","State","Error"],ae=Object.freeze(Object.defineProperty({__proto__:null,Error:b,FormControl:p,State:u,__namedExportsOrder:D,default:O},Symbol.toStringTag,{value:"Module"}));export{b as E,ae as F,u as S,p as a};
