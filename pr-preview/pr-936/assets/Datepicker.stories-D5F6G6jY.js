import{j as V}from"./index-D6_wGsWO.js";import{c1 as E}from"./index-BIL3J8Um.js";import{v as A}from"./v4-CQkTLCs1.js";const{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:j}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:h}=__STORYBOOK_MODULE_GLOBAL__;var T="actions",I="storybook/actions",M=`${I}/action-event`,u={depth:10,clearOnStoryChange:!0,limit:50},D=(t,o)=>{let e=Object.getPrototypeOf(t);return!e||o(e)?e:D(e,o)},k=t=>!!(typeof t=="object"&&t&&D(t,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof t.persist=="function"),x=t=>{if(k(t)){let o=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));o.persist();let e=Object.getOwnPropertyDescriptor(o,"view"),a=e==null?void 0:e.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...e,value:Object.create(a.constructor.prototype)}),o}return t},N=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?A():Date.now().toString(36)+Math.random().toString(36).substring(2);function W(t,o={}){let e={...u,...o},a=function(...n){var p,m;if(o.implicit){let y=(p="__STORYBOOK_PREVIEW__"in h?h.__STORYBOOK_PREVIEW__:void 0)==null?void 0:p.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(y){let s=!((m=window==null?void 0:window.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),b=new j({phase:y.phase,name:t,deprecated:s});if(s)console.warn(b);else throw b}}let r=P.getChannel(),c=N(),d=5,l=n.map(x),R=n.length>1?l:l[0],S={id:c,count:0,data:{name:t,args:R},options:{...e,maxDepth:d+(e.depth||3),allowFunction:e.allowFunction||!1}};r.emit(M,S)};return a.isAction=!0,a.implicit=o.implicit,a}var B=(...t)=>{let o=u,e=t;e.length===1&&Array.isArray(e[0])&&([e]=e),e.length!==1&&typeof e[e.length-1]!="string"&&(o={...u,...e.pop()});let a=e[0];(e.length!==1||typeof a=="string")&&(a={},e.forEach(r=>{a[r]=r}));let n={};return Object.keys(a).forEach(r=>{n[r]=W(a[r],o)}),n};const{makeDecorator:L,useEffect:K}=__STORYBOOK_MODULE_PREVIEW_API__,{global:Y}=__STORYBOOK_MODULE_GLOBAL__;var{document:f,Element:_}=Y,z=/^(\S+)\s*(.*)$/,U=_!=null&&!_.prototype.matches,C=U?"msMatchesSelector":"matches",w=(t,o)=>{if(t[C](o))return!0;let e=t.parentElement;return e?w(e,o):!1},$=(t,...o)=>{let e=t(...o);return Object.entries(e).map(([a,n])=>{let[r,c,d]=a.match(z)||[];return{eventName:c,handler:l=>{(!d||w(l.target,d))&&n(l)}}})},q=(t,...o)=>{let e=f&&f.getElementById("storybook-root");K(()=>{if(e!=null){let a=$(t,...o);return a.forEach(({eventName:n,handler:r})=>e.addEventListener(n,r)),()=>a.forEach(({eventName:n,handler:r})=>e.removeEventListener(n,r))}},[e,t,o])},F=L({name:"withActions",parameterName:T,skipIfNoParametersOrOptions:!0,wrapper:(t,o,{parameters:e})=>(e!=null&&e.handles&&q(B,...e.handles),t(o))});const G={title:"Komponenter/Datepicker",component:E,decorators:[F],parameters:{actions:{argTypesRegex:"^on.*"},docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{}},args:{placeholder:"Velg dato",size:"md",colorPalette:"green",required:!1,invalid:!1,disabled:!1,useNative:!1,disableNavigation:!1,showWeekNumber:!1,showOutsideDays:!0,showDropdownMonthYear:!1,defaultSelected:void 0,defaultMonth:void 0,fromDate:void 0,toDate:void 0},argTypes:{variant:{description:"Variant",table:{type:{summary:"outline | subtle | flushed"}},defaultValue:{summary:"outline"},options:["outline","subtle","flushed"],control:{type:"radio"}},placeholder:{description:"Placeholder text",table:{type:{summary:"string"}},control:"text"},size:{description:"Size of input",table:{type:{summary:"lg | md | sm | xs"}},defaultValue:{summary:"md"},options:["lg","md","sm","xs"],control:{type:"radio"}},required:{description:"Toggles if input should be required",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},defaultSelected:{description:"A default date to be selected when the picker is displayed.",table:{type:{summary:"Date"}},control:"date"},defaultMonth:{description:"The month to display in the calendar by default.",table:{type:{summary:"Date"}},control:"date"},fromDate:{description:"The earliest date available for selection.",table:{type:{summary:"Date"}},control:"date"},toDate:{description:"The latest date available for selection.",table:{type:{summary:"Date"}},control:"date"},showDropdownMonthYear:{description:"Whether or not to show dropdowns for month and year selection. `fromDate` and `toDate` must be set.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},disableNavigation:{description:"If set to true, navigation buttons (next/previous month) are hidden.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},showOutsideDays:{description:"Whether or not to show the days that fall outside the current month.",table:{type:{summary:"boolean"}},defaultValue:{summary:"true"},control:"boolean"},showWeekNumber:{description:"Whether or not to display the week numbers.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},disabledDays:{description:"A list of dates that should be disabled for selection.",control:{type:"object"}},useNative:{description:"Whether or not to use the native datepicker on mobile devices.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},colorPalette:{description:"Color palette",table:{type:{summary:"blue | green"}},defaultValue:{summary:"green"},options:["green","blue"],control:{type:"radio"}},_open:{table:{disable:!0}},_closed:{table:{disable:!0}},_complete:{table:{disable:!0}},_incomplete:{table:{disable:!0}},_current:{table:{disable:!0}}}},i={render:t=>V.jsx(E,{...t})};var g,O,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <KvibDatepicker {...args} />
}`,...(v=(O=i.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};const H=["Preview"],Z=Object.freeze(Object.defineProperty({__proto__:null,Preview:i,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{Z as D,i as P};
