import{j as c}from"./jsx-runtime-DQFEoQHt.js";import{P as s}from"./index-C0BNJlyJ.js";import{r as d}from"./index-CbFAwPTn.js";const i={title:"Komponenter/DateRangePicker",component:s,parameters:{docs:{story:{inline:!0}}},args:{showOutsideDays:!1,showWeekNumber:!1,showDropdownMonthYear:!1,colorPalette:"green"},argTypes:{showWeekNumber:{description:"Vis ukenummer",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},showOutsideDays:{description:"Vis datoer utenfor valgt måned",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},showDropdownMonthYear:{description:"Vis dropdown for å velge måned og år",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},colorPalette:{description:"Fargepalett",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},options:["green","blue"],control:{type:"radio"}},footer:{description:"Tekst som vises nederst i datovelgeren",table:{type:{summary:"string"}},control:"text"},selected:{description:"Valgt periode",table:{type:{summary:"DateRange"}},control:!1},onSelect:{description:"Callback som kalles når en periode velges",table:{type:{summary:"OnSelectHandler<DateRange | undefined>"}},control:!1}}},e={render:t=>{const[n,l]=d.useState(t.selected);return c.jsx(s,{...t,selected:n,onSelect:l})}};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<DateRange | undefined>(args.selected);
    return <KvibDateRangePicker {...args} selected={selected} onSelect={setSelected} />;
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const m=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{y as D,e as P};
