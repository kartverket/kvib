import{j as s}from"./extends-CwFRzn3r.js";import{f as o}from"./forward-ref-BWI-Phbn.js";import{u as d,b as f}from"./form-control-r5o_asaM.js";import{I as c}from"./icon-Bx5s8P2X.js";import{a as p,o as h}from"./use-style-config-YUvqttAg.js";import{c as y}from"./factory-C6UFhaBW.js";import{c as b}from"./context-CBKykClo.js";import{c as u}from"./cx-BDMMs1jM.js";import{T as v}from"./text-ByHKaHOl.js";const[T,g]=b({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),m=o((e,n)=>{const a=p("FormError",e),r=h(e),l=d();return l!=null&&l.isInvalid?s.jsx(T,{value:a,children:s.jsx(y.div,{...l==null?void 0:l.getErrorMessageProps(r,n),className:u("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...a.text}})}):null});m.displayName="FormErrorMessage";const x=o((e,n)=>{const a=g(),r=d();if(!(r!=null&&r.isInvalid))return null;const l=u("chakra-form__error-icon",e.className);return s.jsx(c,{ref:n,"aria-hidden":!0,...e,__css:a.icon,className:l,children:s.jsx("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});x.displayName="FormErrorIcon";const t=o(({helperText:e,children:n,...a},r)=>s.jsxs(f,{...a,ref:r,fontSize:"16px",paddingBottom:"8px",children:[e,n]}));try{t.displayName="FormHelperText",t.__docgenInfo={description:"",displayName:"FormHelperText",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},helperText:{defaultValue:{value:"helperText"},description:"HelperText for component",name:"helperText",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType | undefined"}}}}}catch{}const i=o(({errorMessage:e,children:n,...a},r)=>s.jsxs(m,{...a,ref:r,background:"red.50",padding:"8px",borderStyle:"solid",borderColor:"red.100",borderWidth:"2px",borderRadius:"8px",gap:"5px",children:[s.jsx("span",{className:"material-symbols-outlined",children:"Error"}),s.jsxs(v,{children:[e,n]})]}));try{i.displayName="FormErrorMessage",i.__docgenInfo={description:"",displayName:"FormErrorMessage",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},errorMessage:{defaultValue:{value:"errorMessage"},description:"errorMessage for component",name:"errorMessage",required:!1,type:{name:"string | undefined"}},isRequired:{defaultValue:{value:"false"},description:"If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",name:"isRequired",required:!1,type:{name:"boolean | undefined"}},isDisabled:{defaultValue:{value:"false"},description:"If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",name:"isDisabled",required:!1,type:{name:"boolean | undefined"}},isInvalid:{defaultValue:{value:"false"},description:"If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",name:"isInvalid",required:!1,type:{name:"boolean | undefined"}},isReadOnly:{defaultValue:{value:"false"},description:"If `true`, the form control will be readonly",name:"isReadOnly",required:!1,type:{name:"boolean | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType | undefined"}}}}}catch{}export{t as F,i as a};
