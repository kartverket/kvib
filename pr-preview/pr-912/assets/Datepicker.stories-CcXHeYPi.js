import{j as i}from"./jsx-runtime-CQsLhzk5.js";import{v as re}from"./v4-CQkTLCs1.js";import{D as ne,n as L,i as R,f as N}from"./style-B9SQrwGF.js";import{r as y}from"./index-Wp2u197Z.js";import{I as K}from"./Input-BFdZb76K.js";import{u as se}from"./use-field-context-SniSo6zJ.js";import{P as ie,a as le,b as de,e as ce}from"./popover-DyY-9iMO.js";import{G as ue}from"./group-AZsgzFuT.js";import{I as T}from"./input-element-D4-vl16v.js";import{I as pe}from"./IconButton-1g5fnMKS.js";import{c as me}from"./colors-DLx86jGi.js";import{p as he}from"./parse-B55RHAPX.js";const E=({onChange:e,useNative:a=!1,...t})=>{const o=ye(t),r=be(t),n=t.defaultSelected?v(t.defaultSelected):void 0;return(typeof window=="object"?window.innerWidth<480:!1)||a?i.jsx(K,{type:"date",defaultValue:n,...o,...r,onChange:e}):i.jsx(fe,{...t,...r,onChange:e})},fe=({onChange:e,defaultSelected:a,defaultMonth:t,fromDate:o,toDate:r,showDropdownMonthYear:n,disableNavigation:u,showOutsideDays:d,showWeekNumber:c,disabledDays:h,colorPalette:p,disabled:_=!1,invalid:x=!1,required:w=!1,...m})=>{const b=ve("kvib-datepicker"),G=me[p??"green"],H=Object.fromEntries(Object.entries(G).map(([s,l])=>[s,l.value])),J=ge(b,H),f=se(),Q=(f==null?void 0:f.disabled)||!1,X=(f==null?void 0:f.required)||!1,Z=_||Q,I=w||X,[j,S]=y.useState(!1),[k,D]=y.useState(a??void 0),[C,M]=y.useState(t),[P,O]=y.useState(k?v(k):""),ee=s=>{e==null||e(s),O(s.target.value);const l=q(s.target.value);l&&R(l)?(M(l),D(l)):D(void 0)},te=()=>{const s=q(P);let l="";s&&R(s)&&(l=N(s,"dd.MM.yyyy"));const oe={target:{value:l}};e==null||e(oe),O(l)},ae=s=>{const l={target:{value:s?N(s,"dd.MM.yyyy"):""}};e==null||e(l),s?(D(s),M(s),O(v(s)),S(!1)):(O(""),D(void 0))};return i.jsxs(ie,{positioning:{placement:"bottom",offset:{mainAxis:0,crossAxis:-15}},open:j,onOpenChange:s=>S(s.open),children:[i.jsx(_e,{css:{"& > div[data-between]":{paddingInline:"0 !important"}},endElement:i.jsx(le,{css:{"&:hover":{background:"none",color:"colorPalette.400"}},asChild:!0,children:i.jsx(pe,{icon:"calendar_today",colorPalette:p,size:m.size,"aria-label":"open datepicker",onClick:()=>S(!j),variant:"plain"})}),children:i.jsx(K,{value:P,disabled:Z,required:I,onChange:ee,onBlur:te,...m})}),i.jsx(de,{children:i.jsxs(ce,{children:[i.jsx("style",{children:J}),i.jsx(ne,{onSelect:ae,mode:"single",month:C,onMonthChange:M,selected:k,classNames:{root:b},locale:L,showOutsideDays:d,showWeekNumber:c,disableNavigation:u,defaultMonth:t,captionLayout:n?"dropdown":"label",startMonth:o,endMonth:r,required:I,...o&&{disabled:{before:o}},...r&&{disabled:{after:r}},...h&&{disabled:h}})]})})]})},q=e=>{try{const a=["dd.MM.yy","dd.MM.yyyy","dd/MM/yy","dd/MM/yyyy","dd-MM-yy","dd-MM-yyyy"];for(const t of a){const o=he(e,t,new Date,{locale:L});if(!isNaN(o.getTime()))return o}throw new Error("Ugyldig datoformat")}catch{return}};function ye(e){const{defaultSelected:a,defaultMonth:t,fromDate:o,toDate:r,showDropdownMonthYear:n,disableNavigation:u,showOutsideDays:d,showWeekNumber:c,disabledDays:h,...p}=e;return p}function v(e){let a;if(typeof e=="number")a=new Date(e);else if(e instanceof Date)a=e;else if(typeof e=="string"){if(a=new Date(e),isNaN(a.getTime()))throw new Error("Invalid date format.")}else throw new Error("Invalid date format.");const t=a.getFullYear().toString().padStart(4,"0"),o=(a.getMonth()+1).toString().padStart(2,"0");return`${a.getDate().toString().padStart(2,"0")}.${o}.${t}`}const be=e=>{const a=e.fromDate?v(e.fromDate):void 0,t=e.toDate?v(e.toDate):void 0;return{min:a,max:t}},ge=(e,a)=>`
 .${e} {

   /* Colors */
  --rdp-accent-color: ${a[500]}; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: ${a[100]}; /* The accent background color used for selected days and UI elements. */

  /* Fonts */
  --rdp-week_number-font: 12px/1 sans-serif;

  /* Day buttons */
  --rdp-day-width: 38px; /* Width of the day cells. */
  --rdp-day-height: 38px; /* Height of the day cells. */
  --rdp-day_button-height: calc(var(--rdp-day-height) + 2px); /* Height of the day buttons. */
  --rdp-day_button-width: calc(var(--rdp-day-width) + 2px); /* Width of the day buttons. */
  --rdp-day_button-border-radius: 50%;
  --rdp-outside-opacity: 0.4; /* Opacity of the days outside the current month. */
  --rdp-disabled-opacity: 0.25; /* Opacity of the disabled days. */

  /* Week numbers */
  --rdp-weekday-text-align: center;

  /* Day styles */
  .rdp-today {
    font-weight: 700;
  }

  .rdp-day {
    box-sizing: border-box;
    height: var(--rdp-day_button-height);
    width: var(--rdp-day_button-width);
    border-radius: var(--rdp-day_button-border-radius);
  }


  .rdp-day:hover:not(.rdp-selected):not(.rdp-disabled) {
    background-color: var(--rdp-accent-background-color);
  }

  .rdp-selected {
    background-color: var(--rdp-accent-color);
    color: white;
    box-sizing: border-box;
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
    height: var(--rdp-day_button-height);
    width: var(--rdp-day_button-width);
    text-transform: uppercase;
  }

  .rdp-day_button {
  width: 100%;
  height: 100%;
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
    padding: 0.25em;
    font-weight: 700;
    font-size: 18px;
    text-transform: capitalize;
  }

  .rdp-dropdowns {
    gap: 0.5em;
  }

}
`,ve=e=>{const a=Math.random().toString(36).substring(2,7);return`${e}-${a}`};try{E.displayName="Datepicker",E.__docgenInfo={description:"",displayName:"Datepicker",props:{recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}},defaultSelected:{defaultValue:null,description:"A default date to be selected when the picker is displayed.",name:"defaultSelected",required:!1,type:{name:"Date"}},defaultMonth:{defaultValue:null,description:"The month to display in the calendar by default.",name:"defaultMonth",required:!1,type:{name:"Date"}},fromDate:{defaultValue:null,description:"The earliest date available for selection.",name:"fromDate",required:!1,type:{name:"Date"}},toDate:{defaultValue:null,description:"The latest date available for selection.",name:"toDate",required:!1,type:{name:"Date"}},showDropdownMonthYear:{defaultValue:null,description:"Whether or not to show dropdowns for month and year selection.",name:"showDropdownMonthYear",required:!1,type:{name:"boolean"}},disableNavigation:{defaultValue:null,description:"If set to true, navigation buttons (next/previous month) are hidden.",name:"disableNavigation",required:!1,type:{name:"boolean"}},showOutsideDays:{defaultValue:null,description:"Whether or not to show the days that fall outside the current month.",name:"showOutsideDays",required:!1,type:{name:"boolean"}},showWeekNumber:{defaultValue:null,description:"Whether or not to display the week numbers.",name:"showWeekNumber",required:!1,type:{name:"boolean"}},disabledDays:{defaultValue:null,description:"A list of dates that should be disabled for selection.",name:"disabledDays",required:!1,type:{name:"Date[]"}},useNative:{defaultValue:{value:"false"},description:"Whether or not to use the native datepicker on mobile devices.",name:"useNative",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Whether or not the input is invalid.",name:"invalid",required:!1,type:{name:"boolean"}},colorPalette:{defaultValue:null,description:"The colorPalette for the Datepicker.",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"green"'}]}}}}}catch{}const _e=y.forwardRef(function(a,t){const{startElement:o,startElementProps:r,endElement:n,endElementProps:u,children:d,startOffset:c="6px",endOffset:h="6px",...p}=a;return i.jsxs(ue,{ref:t,...p,children:[o&&i.jsx(T,{pointerEvents:"none",...r,children:o}),y.cloneElement(d,{...o&&{ps:`calc(var(--input-height) - ${c})`},...n&&{pe:`calc(var(--input-height) - ${h})`},...d.props}),n&&i.jsx(T,{placement:"end",...u,children:n})]})}),{addons:we}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:De}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:A}=__STORYBOOK_MODULE_GLOBAL__;var Oe="actions",Ee="storybook/actions",xe=`${Ee}/action-event`,V={depth:10,clearOnStoryChange:!0,limit:50},U=(e,a)=>{let t=Object.getPrototypeOf(e);return!t||a(t)?t:U(t,a)},Se=e=>!!(typeof e=="object"&&e&&U(e,a=>/^Synthetic(?:Base)?Event$/.test(a.constructor.name))&&typeof e.persist=="function"),ke=e=>{if(Se(e)){let a=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));a.persist();let t=Object.getOwnPropertyDescriptor(a,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(a,"view",{...t,value:Object.create(o.constructor.prototype)}),a}return e},Me=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?re():Date.now().toString(36)+Math.random().toString(36).substring(2);function Ve(e,a={}){let t={...V,...a},o=function(...r){var _,x;if(a.implicit){let w=(_="__STORYBOOK_PREVIEW__"in A?A.__STORYBOOK_PREVIEW__:void 0)==null?void 0:_.storyRenders.find(m=>m.phase==="playing"||m.phase==="rendering");if(w){let m=!((x=window==null?void 0:window.FEATURES)!=null&&x.disallowImplicitActionsInRenderV8),b=new De({phase:w.phase,name:e,deprecated:m});if(m)console.warn(b);else throw b}}let n=we.getChannel(),u=Me(),d=5,c=r.map(ke),h=r.length>1?c:c[0],p={id:u,count:0,data:{name:e,args:h},options:{...t,maxDepth:d+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(xe,p)};return o.isAction=!0,o.implicit=a.implicit,o}var Ie=(...e)=>{let a=V,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(a={...V,...t.pop()});let o=t[0];(t.length!==1||typeof o=="string")&&(o={},t.forEach(n=>{o[n]=n}));let r={};return Object.keys(o).forEach(n=>{r[n]=Ve(o[n],a)}),r};const{makeDecorator:je,useEffect:Pe}=__STORYBOOK_MODULE_PREVIEW_API__,{global:Re}=__STORYBOOK_MODULE_GLOBAL__;var{document:W,Element:z}=Re,Ne=/^(\S+)\s*(.*)$/,Te=z!=null&&!z.prototype.matches,qe=Te?"msMatchesSelector":"matches",F=(e,a)=>{if(e[qe](a))return!0;let t=e.parentElement;return t?F(t,a):!1},Ae=(e,...a)=>{let t=e(...a);return Object.entries(t).map(([o,r])=>{let[n,u,d]=o.match(Ne)||[];return{eventName:u,handler:c=>{(!d||F(c.target,d))&&r(c)}}})},We=(e,...a)=>{let t=W&&W.getElementById("storybook-root");Pe(()=>{if(t!=null){let o=Ae(e,...a);return o.forEach(({eventName:r,handler:n})=>t.addEventListener(r,n)),()=>o.forEach(({eventName:r,handler:n})=>t.removeEventListener(r,n))}},[t,e,a])},ze=je({name:"withActions",parameterName:Oe,skipIfNoParametersOrOptions:!0,wrapper:(e,a,{parameters:t})=>(t!=null&&t.handles&&We(Ie,...t.handles),e(a))});const Be={title:"Komponenter/Datepicker",component:E,decorators:[ze],parameters:{actions:{argTypesRegex:"^on.*"},docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{}},args:{placeholder:"Velg dato",size:"md",colorPalette:"green",required:!1,invalid:!1,disabled:!1,useNative:!1,disableNavigation:!1,showWeekNumber:!1,showOutsideDays:!0,showDropdownMonthYear:!1,defaultSelected:void 0,defaultMonth:void 0,fromDate:void 0,toDate:void 0},argTypes:{variant:{description:"Variant",table:{type:{summary:"outline | subtle | flushed"}},defaultValue:{summary:"outline"},options:["outline","subtle","flushed"],control:{type:"radio"}},placeholder:{description:"Placeholder text",table:{type:{summary:"string"}},control:"text"},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"}},defaultValue:{summary:"md"},options:["lg","md","sm","xs"],control:{type:"radio"}},required:{description:"Toggles if input should be required",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},defaultSelected:{description:"A default date to be selected when the picker is displayed.",table:{type:{summary:"Date"}},control:"date"},defaultMonth:{description:"The month to display in the calendar by default.",table:{type:{summary:"Date"}},control:"date"},fromDate:{description:"The earliest date available for selection.",table:{type:{summary:"Date"}},control:"date"},toDate:{description:"The latest date available for selection.",table:{type:{summary:"Date"}},control:"date"},showDropdownMonthYear:{description:"Whether or not to show dropdowns for month and year selection. `fromDate` and `toDate` must be set.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},disableNavigation:{description:"If set to true, navigation buttons (next/previous month) are hidden.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},showOutsideDays:{description:"Whether or not to show the days that fall outside the current month.",table:{type:{summary:"boolean"}},defaultValue:{summary:"true"},control:"boolean"},showWeekNumber:{description:"Whether or not to display the week numbers.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},disabledDays:{description:"A list of dates that should be disabled for selection.",control:{type:"object"}},useNative:{description:"Whether or not to use the native datepicker on mobile devices.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},colorPalette:{description:"Color palette",table:{type:{summary:"blue | green"}},defaultValue:{summary:"green"},options:["green","blue"],control:{type:"radio"}},_open:{table:{disable:!0}},_closed:{table:{disable:!0}},_complete:{table:{disable:!0}},_incomplete:{table:{disable:!0}},_current:{table:{disable:!0}}}},g={render:e=>i.jsx(E,{...e})};var B,Y,$;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <KvibDatepicker {...args} />
}`,...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const Ye=["Preview"],et=Object.freeze(Object.defineProperty({__proto__:null,Preview:g,__namedExportsOrder:Ye,default:Be},Symbol.toStringTag,{value:"Module"}));export{et as D,g as P};
