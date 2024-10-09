import{j as e}from"./extends-CwFRzn3r.js";import{D as r}from"./Datepicker-D81ORhNz.js";import{B as l}from"./chunk-PULVB27S-CgiffgmI.js";import{S}from"./chunk-ZHMYA64R-V_96TD_T.js";import{F as j}from"./Form-control-CG1fyGaW.js";import{F as B}from"./Form-label-D-r0Q-vl.js";const F={title:"Skjemaelementer/Datepicker",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{}},argTypes:{size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},isRequired:{description:"Toggles if input should be required",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isInvalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isDisabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},defaultSelected:{description:"A default date to be selected when the picker is displayed.",table:{type:{summary:"Date"}},control:"date"},defaultMonth:{description:"The month to display in the calendar by default.",table:{type:{summary:"Date"}},control:"date"},fromDate:{description:"The earliest date available for selection.",table:{type:{summary:"Date"}},control:"date"},toDate:{description:"The latest date available for selection.",table:{type:{summary:"Date"}},control:"date"},showDropdownMonthYear:{description:"Whether or not to show dropdowns for month and year selection. `fromDate` and `toDate` must be set.",table:{type:{summary:"boolean"}},control:"boolean"},disableNavigation:{description:"If set to true, navigation buttons (next/previous month) are hidden.",table:{type:{summary:"boolean"}},control:"boolean"},showOutsideDays:{description:"Whether or not to show the days that fall outside the current month.",table:{type:{summary:"boolean"}},control:"boolean"},showWeekNumber:{description:"Whether or not to display the week numbers.",table:{type:{summary:"boolean"}},control:"boolean"},disabledDays:{description:"A list of dates that should be disabled for selection.",table:{type:{summary:"Date[]"}},control:"array"},useNative:{description:"Whether or not to use the native datepicker on mobile devices.",table:{type:{summary:"boolean"}},control:"boolean"},onChange:{description:"Sideeffect to be run when a date is selected.",table:{type:{summary:"(date: Date | undefined) => void"}},control:"function"},colorScheme:{description:"Color scheme",table:{type:{summary:"blue | green"},defaultValue:{summary:"blue"}},options:["blue","green"],control:{type:"radio"}}}},t={args:{onChange:a=>console.log("Datepicker changed",a)},parameters:{docs:{canvas:{sourceState:"shown"}}},render:a=>e.jsx(l,{h:"25rem",children:e.jsx(r,{"aria-label":"Datepicker",...a})})},o={args:{showOutsideDays:!0,showWeekNumber:!0},render:a=>e.jsx(l,{h:"25rem",children:e.jsx(r,{"aria-label":"Datepicker example",...a})})},s={args:{},render:a=>e.jsxs(S,{gap:"1rem",h:"30rem",children:[e.jsx(r,{"aria-label":"Datepicker",variant:"outline",...a}),e.jsx(r,{"aria-label":"Datepicker",variant:"filled",...a}),e.jsx(r,{"aria-label":"Datepicker",colorScheme:"blue",variant:"flushed",...a}),e.jsx(r,{"aria-label":"Datepicker",colorScheme:"blue",variant:"unstyled",...a})]})},n={args:{defaultSelected:new Date("2022-08-01"),fromDate:new Date("2022-08-01"),toDate:new Date("2022-12-15"),showDropdownMonthYear:!0,disabledDays:[new Date("2022-08-16")]},render:a=>e.jsx(l,{h:"23rem",children:e.jsx(r,{"aria-label":"Datepicker example",...a})})},i={args:{},render:a=>e.jsx(l,{h:"25rem",children:e.jsxs(j,{isRequired:!0,children:[e.jsx(B,{children:"Velg dato"}),e.jsx(r,{"aria-label":"Datepicker",...a})]})})};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onChange: v => console.log("Datepicker changed", v)
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <Box h="25rem">
      <KvibDatepicker aria-label="Datepicker" {...args} />
    </Box>
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    showOutsideDays: true,
    showWeekNumber: true
  },
  render: args => <Box h="25rem">
      <KvibDatepicker aria-label="Datepicker example" {...args} />
    </Box>
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,D,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack gap="1rem" h="30rem">
      <KvibDatepicker aria-label="Datepicker" variant="outline" {...args} />
      <KvibDatepicker aria-label="Datepicker" variant="filled" {...args} />
      <KvibDatepicker aria-label="Datepicker" colorScheme="blue" variant="flushed" {...args} />
      <KvibDatepicker aria-label="Datepicker" colorScheme="blue" variant="unstyled" {...args} />
    </Stack>
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var f,g,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    defaultSelected: new Date("2022-08-01"),
    fromDate: new Date("2022-08-01"),
    toDate: new Date("2022-12-15"),
    showDropdownMonthYear: true,
    disabledDays: [new Date("2022-08-16")]
  },
  render: args => <Box h="23rem">
      <KvibDatepicker aria-label="Datepicker example" {...args} />
    </Box>
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var x,v,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: args => <Box h="25rem">
      <FormControl isRequired>
        <FormLabel>Velg dato</FormLabel>
        <KvibDatepicker aria-label="Datepicker" {...args} />
      </FormControl>
    </Box>
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const V=["Datepicker","DatepickerDetails","DatepickerAppearance","DatepickerArea","DatepickerForm"],_=Object.freeze(Object.defineProperty({__proto__:null,Datepicker:t,DatepickerAppearance:s,DatepickerArea:n,DatepickerDetails:o,DatepickerForm:i,__namedExportsOrder:V,default:F},Symbol.toStringTag,{value:"Module"}));export{_ as D,o as a,n as b,i as c,s as d,t as e};