import{j as t}from"./jsx-runtime-sfY7k0Xq.js";import{r as b}from"./index-CcKhGcwW.js";import{D as g,n as m}from"./style-CiF8_und.js";import{c as y}from"./colors-DLx86jGi.js";const a=({...e})=>{const r=f("kvib-datepicker"),l=y[e.colorPalette??"green"],d=Object.fromEntries(Object.entries(l).map(([s,u])=>[s,u.value])),n=h(r,d);return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:n}),t.jsx(g,{classNames:{root:r},locale:m,captionLayout:e.showDropdownMonthYear?"dropdown":"label",...e,mode:"range"})]})},h=(e,r)=>`
 .${e} {

   /* Colors */
  --rdp-accent-color: ${r[500]}; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: ${r[100]}; /* The accent background color used for selected days and UI elements. */
  --rdp-day_button-border: none; /* The border of the day buttons. */
  --rdp-range_start-date-background-color: var(--rdp-accent-color); /* The background color of the start date in a range. */
  --rdp-range_end-date-background-color: var(--rdp-accent-color); /* The background color of the end date in a range. */
  --rdp-range_start-color: #fff;
  --rdp-range_end-color: #fff;
  --rdp-selected-border: 1px solid var(--rdp-accent-color); /* The border color of the selected days. */

  /* Fonts */
  --rdp-week_number-font: 12px/1 sans-serif;

  /* Day buttons */
  --rdp-day-width: 42px; /* Width of the day cells. */
  --rdp-day-height: 42px; /* Height of the day cells. */
  --rdp-day_button-height: var(--rdp-day-height); /* Height of the day buttons. */
  --rdp-day_button-width: var(--rdp-day-width); /* Width of the day buttons. */
  --rdp-day_button-border-radius: var(--kvib-radii-md); /* Border radius of the day buttons. */
  --rdp-outside-opacity: 0.4; /* Opacity of the days outside the current month. */
  --rdp-disabled-opacity: 0.25; /* Opacity of the disabled days. */

  /* Week numbers */
  --rdp-weekday-text-align: center;

  /* Day styles */
  .rdp-today {
    font-weight: 700;
  }

  /* Navigation buttons */
  .rdp-button_next,
  .rdp-button_previous {
    box-sizing: border-box;
    height: var(--rdp-day_button-height);
    width: var(--rdp-day_button-width);
  }

  .rdp-button_next:not(:disabled):hover,
  .rdp-button_previous:not(:disabled):hover {
    border-radius: var(--rdp-day_button-border-radius);
    background-color: var(--rdp-accent-background-color);
  }

  .rdp-button_next:disabled,
  .rdp-button_previous:disabled,
  .rdp-day_button:disabled
   {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Weekday and week number styles */
  .rdp-weekday {
    vertical-align: middle;
    font-size: 0.75em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }

  .rdp-week_number {
    vertical-align: baseline;
    transform: translateY(50%);
    text-align: center;
    height: var(--rdp-day_button-height);
    width: var(--rdp-day_button-width);
    line-height: 2px;
  }

  /* Month caption */
  .rdp-month_caption {
    padding: 0.5em;
    font-weight: 700;
    font-size: 18px;
    text-transform: capitalize;
  }

  .rdp-footer {
  padding: 0.5em;
  padding-left: 0.75em;
    font-weight: 400;
    font-size: 14px;
  }

  .rdp-dropdowns {
    gap: 0.5em;
  }

  /* Range styles */
  .rdp-range_middle, .rdp-range_start, .rdp-range_end {
    background-color: var(--rdp-accent-background-color);
  }

  .rdp-range_start {
    border-top-left-radius: var(--rdp-day_button-border-radius);
    border-bottom-left-radius: var(--rdp-day_button-border-radius);
  }

  .rdp-range_end {
    border-top-right-radius: var(--rdp-day_button-border-radius);
    border-bottom-right-radius: var(--rdp-day_button-border-radius);
  }

  .rdp-day_button {
    margin: -1px;
  }

  .rdp-day:hover:not(.rdp-selected):not(.rdp-disabled) {
    background-color: var(--rdp-accent-background-color);
    border-radius: var(--rdp-day_button-border-radius);
  }

  .rdp-outside.rdp-range_start,
  .rdp-outside.rdp-range_middle,
  .rdp-outside.rdp-range_end {
    opacity: 1;
  }


`,f=e=>{const r=Math.random().toString(36).substring(2,7);return`${e}-${r}`};try{a.displayName="DateRangePicker",a.__docgenInfo={description:"",displayName:"DateRangePicker",props:{colorPalette:{defaultValue:null,description:"",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"green"'}]}},showDropdownMonthYear:{defaultValue:null,description:"",name:"showDropdownMonthYear",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const _={title:"Komponenter/DateRangePicker",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},args:{showOutsideDays:!1,showWeekNumber:!1,showDropdownMonthYear:!1,colorPalette:"green"},argTypes:{showWeekNumber:{description:"Vis ukenummer",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},showOutsideDays:{description:"Vis datoer utenfor valgt måned",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},showDropdownMonthYear:{description:"Vis dropdown for å velge måned og år",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},colorPalette:{description:"Fargepalett",table:{type:{summary:"green | blue"},defaultValue:{summary:"green"}},options:["green","blue"],control:{type:"radio"}},footer:{description:"Tekst som vises nederst i datovelgeren",table:{type:{summary:"string"}},control:"text"},selected:{description:"Valgt periode",table:{type:{summary:"DateRange"}},control:!1},onSelect:{description:"Callback som kalles når en periode velges",table:{type:{summary:"OnSelectHandler<DateRange | undefined>"}},control:!1}}},v=e=>{const{selected:r,onSelect:l,...d}=e,[n,s]=b.useState(void 0);return t.jsx(a,{selected:n,onSelect:s,...d,mode:"range"})},o={render:e=>t.jsx(v,{...e})};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <DateRangePickerExample {...args} />
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["Preview"],S=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{S as D,o as P};
