import{j as s}from"./index-D6_wGsWO.js";import{ap as n}from"./index-Dvvgx2CE.js";import{r as d}from"./index-C7I6S4tq.js";const i={title:"Komponenter/DateRangePicker",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},args:{showOutsideDays:!1,showWeekNumber:!1,showDropdownMonthYear:!1,colorPalette:"green"},argTypes:{showWeekNumber:{description:"Vis ukenummer",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},showOutsideDays:{description:"Vis datoer utenfor valgt måned",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},showDropdownMonthYear:{description:"Vis dropdown for å velge måned og år",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},colorPalette:{description:"Fargepalett",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},options:["green","blue"],control:{type:"radio"}},footer:{description:"Tekst som vises nederst i datovelgeren",table:{type:{summary:"string"}},control:"text"},selected:{description:"Valgt periode",table:{type:{summary:"DateRange"}},control:!1},onSelect:{description:"Callback som kalles når en periode velges",table:{type:{summary:"OnSelectHandler<DateRange | undefined>"}},control:!1}}},p=t=>{const{selected:g,onSelect:y,...l}=t,[c,m]=d.useState(void 0);return s.jsx(n,{selected:c,onSelect:m,...l,mode:"range"})},e={render:t=>s.jsx(p,{...t})};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <DateRangePickerExample {...args} />
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const u=["Preview"],k=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{k as D,e as P};
