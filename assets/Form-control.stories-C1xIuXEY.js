import{j as e}from"./extends-CwFRzn3r.js";import{f as b}from"./forward-ref-BWI-Phbn.js";import{u as K,b as k}from"./form-control-RaYef-ka.js";import{I as H}from"./icon-BmokjFuu.js";import{a as _,o as w}from"./use-style-config-B2siLCbt.js";import{c as L}from"./factory-DBKMNJMh.js";import{c as q}from"./context-CBKykClo.js";import{c as E}from"./cx-BDMMs1jM.js";import{T as C}from"./text-D14Jyc6W.js";import{F as n}from"./Form-control-DDEvLp3l.js";import{F as d}from"./Form-label-CcuP-A5M.js";import{I as m}from"./input-sbpWslp1.js";import{S as I}from"./stack-BdCvkUuU.js";const[S,R]=q({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),M=b((r,t)=>{const o=_("FormError",r),l=w(r),i=K();return i!=null&&i.isInvalid?e.jsx(S,{value:o,children:e.jsx(L.div,{...i==null?void 0:i.getErrorMessageProps(l,t),className:E("chakra-form__error-message",r.className),__css:{display:"flex",alignItems:"center",...o.text}})}):null});M.displayName="FormErrorMessage";const z=b((r,t)=>{const o=R(),l=K();if(!(l!=null&&l.isInvalid))return null;const i=E("chakra-form__error-icon",r.className);return e.jsx(H,{ref:t,"aria-hidden":!0,...r,__css:o.icon,className:i,children:e.jsx("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});z.displayName="FormErrorIcon";const a=b(({helperText:r,children:t,...o},l)=>e.jsxs(k,{...o,ref:l,fontSize:"16px",paddingBottom:"8px",children:[r,t]}));try{a.displayName="FormHelperText",a.__docgenInfo={description:"",displayName:"FormHelperText",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},helperText:{defaultValue:{value:"helperText"},description:"HelperText for component",name:"helperText",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType | undefined"}}}}}catch{}const s=b(({errorMessage:r,children:t,...o},l)=>e.jsxs(M,{...o,ref:l,background:"red.50",padding:"8px",borderStyle:"solid",borderColor:"red.100",borderWidth:"2px",borderRadius:"8px",gap:"5px",children:[e.jsx("span",{className:"material-symbols-outlined",children:"Error"}),e.jsxs(C,{children:[r,t]})]}));try{s.displayName="FormErrorMessage",s.__docgenInfo={description:"",displayName:"FormErrorMessage",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},errorMessage:{defaultValue:{value:"errorMessage"},description:"errorMessage for component",name:"errorMessage",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType | undefined"}}}}}catch{}const V={title:"Komponenter/Form Control",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isRequired:{description:"Toggles if input should be required",table:{type:{summary:"boolean"}},control:"boolean"},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},isReadOnly:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},u={render:r=>e.jsxs(n,{...r,children:[e.jsx(d,{children:"Label (valgfri)"}),e.jsx(a,{children:"Hjelpetekst"}),e.jsx(m,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(s,{children:"Her er feilmelding"})]})},p={render:r=>e.jsxs(I,{gap:4,children:[e.jsxs(n,{...r,children:[e.jsx(d,{label:"Label (valgfri)"}),e.jsx(a,{helperText:"Hjelpetekst"}),e.jsx(m,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(s,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(n,{...r,isRequired:!0,children:[e.jsx(d,{label:"Label (valgfri)"}),e.jsx(a,{helperText:"Hjelpetekst"}),e.jsx(m,{size:"md",variant:"outline"}),e.jsx(s,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(n,{...r,isDisabled:!0,children:[e.jsx(d,{label:"Label (valgfri)"}),e.jsx(a,{helperText:"Hjelpetekst"}),e.jsx(m,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(s,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(n,{...r,isInvalid:!0,children:[e.jsx(d,{label:"Label (valgfri)"}),e.jsx(a,{helperText:"Hjelpetekst"}),e.jsx(m,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(s,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(n,{...r,isReadOnly:!0,children:[e.jsx(d,{label:"Label (valgfri)"}),e.jsx(a,{helperText:"Hjelpetekst"}),e.jsx(m,{defaultValue:"Jeg er readOnly!",size:"md",variant:"outline"}),e.jsx(s,{errorMessage:"Feilmelding"})]})]})},c={args:{isInvalid:!0},render:r=>e.jsx(I,{gap:4,direction:"row",children:e.jsxs(n,{...r,children:[e.jsx(d,{children:"Label (valgfri)"}),e.jsx(a,{children:"Hjelpetekst"}),e.jsx(m,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(s,{children:"Her er feilmelding"})]})})};var f,v,h;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <KvibFormControl {...args}>
      <KvibFormLabel>Label (valgfri)</KvibFormLabel>
      <KvibFormHelperText>Hjelpetekst</KvibFormHelperText>
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
      <KvibFormErrorMessage>Her er feilmelding</KvibFormErrorMessage>
    </KvibFormControl>
}`,...(h=(v=u.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,x,F;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(F=(x=p.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var j,y,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const N=["Preview","State","Error"],Y=Object.freeze(Object.defineProperty({__proto__:null,Error:c,Preview:u,State:p,__namedExportsOrder:N,default:V},Symbol.toStringTag,{value:"Module"}));export{c as E,Y as F,u as P,p as S};
