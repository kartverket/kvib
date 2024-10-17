import{j as e}from"./extends-CwFRzn3r.js";import{F as o,a as i}from"./Form-error-message-BrJfgpW-.js";import{F as l}from"./Form-control-Dfay2bjP.js";import{S as b}from"./stack-REYSnkee.js";import{F as n}from"./Form-label-B-qAuQLc.js";import{I as s}from"./input-Cik3wyxH.js";import{C as K}from"./checkbox-uCOqhvsJ.js";import{a as u}from"./radio-CsweyUa7.js";import{S as f}from"./select-ZTEkT6fV.js";const H={title:"Skjemaelementer/Form Control",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isRequired:{description:"Toggles if input should be required",table:{type:{summary:"boolean"}},control:"boolean"},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"},isReadOnly:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},control:"boolean"}}},a={render:r=>e.jsxs(b,{gap:4,children:[e.jsxs(l,{...r,children:[e.jsx(n,{children:"Label (valgfri)"}),e.jsx(o,{children:"Hjelpetekst"}),e.jsx(s,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(i,{children:"Her er feilmelding"})]}),e.jsx("hr",{}),e.jsxs(l,{...r,children:[e.jsx(n,{children:"Label (valgfri)"}),e.jsx(o,{children:"Hjelpetekst"}),e.jsx(K,{children:"Checkbox"}),e.jsx(i,{children:"Her er feilmelding"})]}),e.jsx("hr",{}),e.jsxs(l,{...r,children:[e.jsx(n,{children:"Label (valgfri)"}),e.jsx(o,{children:"Hjelpetekst"}),e.jsx(u,{children:"Radio"}),e.jsx(i,{children:"Her er feilmelding"})]}),e.jsx("hr",{}),e.jsxs(l,{...r,children:[e.jsx(n,{children:"Label (valgfri)"}),e.jsx(o,{children:"Hjelpetekst"}),e.jsxs(f,{"aria-label":"select form",children:[e.jsx("option",{value:"option1",children:"Alternativ 1"}),e.jsx("option",{value:"option2",children:"Alternativ 2"}),e.jsx("option",{value:"option3",children:"Alternativ 3"})]}),e.jsx(i,{children:"Her er feilmelding"})]})]})},t={render:r=>e.jsxs(b,{gap:4,children:[e.jsxs(l,{...r,children:[e.jsx(n,{label:"Label (valgfri)"}),e.jsx(o,{helperText:"Hjelpetekst"}),e.jsx(s,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(i,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(l,{...r,isRequired:!0,children:[e.jsx(n,{label:"Label (valgfri)"}),e.jsx(o,{helperText:"Hjelpetekst"}),e.jsx(s,{size:"md",variant:"outline"}),e.jsx(i,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(l,{...r,isDisabled:!0,children:[e.jsx(n,{label:"Label (valgfri)"}),e.jsx(o,{helperText:"Hjelpetekst"}),e.jsx(s,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(i,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(l,{...r,isInvalid:!0,children:[e.jsx(n,{label:"Label (valgfri)"}),e.jsx(o,{helperText:"Hjelpetekst"}),e.jsx(s,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(i,{errorMessage:"Feilmelding"})]}),e.jsx("hr",{}),e.jsxs(l,{...r,isReadOnly:!0,children:[e.jsx(n,{label:"Label (valgfri)"}),e.jsx(o,{helperText:"Hjelpetekst"}),e.jsx(s,{defaultValue:"Jeg er readOnly!",size:"md",variant:"outline"}),e.jsx(i,{errorMessage:"Feilmelding"})]})]})},m={args:{isInvalid:!0},render:r=>e.jsx(b,{gap:4,direction:"row",children:e.jsxs(l,{...r,children:[e.jsx(n,{children:"Label (valgfri)"}),e.jsx(o,{children:"Hjelpetekst"}),e.jsx(s,{placeholder:"Eksempel",size:"md",variant:"outline"}),e.jsx(i,{children:"Her er feilmelding"})]})})};var d,p,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var c,x,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,F,h;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(h=(F=m.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};const k=["Preview","State","Error"],R=Object.freeze(Object.defineProperty({__proto__:null,Error:m,Preview:a,State:t,__namedExportsOrder:k,default:H},Symbol.toStringTag,{value:"Module"}));export{m as E,R as F,a as P,t as S};
