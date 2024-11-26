import{j as o}from"./extends-CwFRzn3r.js";import{r as f}from"./index-BwDkhjyp.js";import{f as j}from"./forward-ref-BWI-Phbn.js";import{I as q}from"./input-group-CqctEj_1.js";import{I as O}from"./input-sbpWslp1.js";import{a as v,I as g}from"./input-element-CK5PPXey.js";import{B as w}from"./Button-yx5TWCfg.js";import{I as R}from"./IconButton-Bj25AnSx.js";function x(e,a){if(!e){a(void 0);return}a({width:e.offsetWidth,height:e.offsetHeight});const n=e.ownerDocument.defaultView??window,i=new n.ResizeObserver(u=>{if(!Array.isArray(u)||!u.length)return;const[l]=u;let d,s;if("borderBoxSize"in l){const t=l.borderBoxSize,r=Array.isArray(t)?t[0]:t;d=r.inlineSize,s=r.blockSize}else d=e.offsetWidth,s=e.offsetHeight;a({width:d,height:s})});return i.observe(e,{box:"border-box"}),()=>i.unobserve(e)}var I=globalThis!=null&&globalThis.document?f.useLayoutEffect:f.useEffect;function F(e,a){var n,i;if(!e||!e.parentElement)return;const u=(i=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?i:window,l=new u.MutationObserver(()=>{a()});return l.observe(e.parentElement,{childList:!0}),()=>{l.disconnect()}}function k({getNodes:e,observeMutation:a=!0}){const[n,i]=f.useState([]),[u,l]=f.useState(0);return I(()=>{const d=e(),s=d.map((t,r)=>x(t,c=>{i(m=>[...m.slice(0,r),c,...m.slice(r+1)])}));if(a){const t=d[0];s.push(F(t,()=>{l(r=>r+1)}))}return()=>{s.forEach(t=>{t==null||t()})}},[u]),n}function L(e){return typeof e=="object"&&e!==null&&"current"in e}function E(e){const[a]=k({observeMutation:!1,getNodes(){return[L(e)?e.current:e]}});return a}const h=j(({id:e,colorScheme:a,size:n,variant:i,isDisabled:u,searchButton:l="none",buttonWidth:d,buttonVariant:s="tertiary",buttonText:t,role:r="search",...c},m)=>{const p=f.useRef(null),y=E(p),S=({position:V})=>{const b={...V==="left"?{borderBottomRightRadius:0,borderTopRightRadius:0}:{borderBottomLeftRadius:0,borderTopLeftRadius:0},colorScheme:a,variant:s,isDisabled:u,width:d,size:n,borderRadius:n==="sm"||n==="xs"?"0.125rem":void 0};return t?o.jsx(w,{ref:p,...b,rightIcon:"search",type:"submit","aria-label":"search",children:t}):o.jsx(R,{...b,"aria-label":"search",type:"submit",icon:"search"})},_=d?`calc(${d} + 0.5rem)`:t&&y?`calc(${y.width}px + 0.5rem)`:"3rem";return o.jsxs(q,{size:n,width:c.width,children:[o.jsx(O,{...c,id:e,ref:m,role:r,size:n,variant:i,isDisabled:u,paddingLeft:l==="left"?_:void 0,paddingRight:l==="right"?_:void 0}),l==="left"&&o.jsx(v,{width:"auto",children:o.jsx(S,{position:"left"})}),l==="right"&&o.jsx(g,{width:"auto",children:o.jsx(S,{position:"right"})})]})});try{h.displayName="Search",h.__docgenInfo={description:"",displayName:"Search",props:{htmlTranslate:{defaultValue:null,description:"",name:"htmlTranslate",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"yes"'},{value:'"no"'}]}},_hover:{defaultValue:null,description:"",name:"_hover",required:!1,type:{name:"SystemStyleObject | undefined"}},_active:{defaultValue:null,description:"",name:"_active",required:!1,type:{name:"SystemStyleObject | undefined"}},_focus:{defaultValue:null,description:"",name:"_focus",required:!1,type:{name:"SystemStyleObject | undefined"}},_highlighted:{defaultValue:null,description:"",name:"_highlighted",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusWithin:{defaultValue:null,description:"",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_focusVisible:{defaultValue:null,description:"",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_disabled:{defaultValue:null,description:"",name:"_disabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_readOnly:{defaultValue:null,description:"",name:"_readOnly",required:!1,type:{name:"SystemStyleObject | undefined"}},_before:{defaultValue:null,description:"",name:"_before",required:!1,type:{name:"SystemStyleObject | undefined"}},_after:{defaultValue:null,description:"",name:"_after",required:!1,type:{name:"SystemStyleObject | undefined"}},_empty:{defaultValue:null,description:"",name:"_empty",required:!1,type:{name:"SystemStyleObject | undefined"}},_expanded:{defaultValue:null,description:"",name:"_expanded",required:!1,type:{name:"SystemStyleObject | undefined"}},_checked:{defaultValue:null,description:"",name:"_checked",required:!1,type:{name:"SystemStyleObject | undefined"}},_grabbed:{defaultValue:null,description:"",name:"_grabbed",required:!1,type:{name:"SystemStyleObject | undefined"}},_pressed:{defaultValue:null,description:"",name:"_pressed",required:!1,type:{name:"SystemStyleObject | undefined"}},_invalid:{defaultValue:null,description:"",name:"_invalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_valid:{defaultValue:null,description:"",name:"_valid",required:!1,type:{name:"SystemStyleObject | undefined"}},_loading:{defaultValue:null,description:"",name:"_loading",required:!1,type:{name:"SystemStyleObject | undefined"}},_selected:{defaultValue:null,description:"",name:"_selected",required:!1,type:{name:"SystemStyleObject | undefined"}},_hidden:{defaultValue:null,description:"",name:"_hidden",required:!1,type:{name:"SystemStyleObject | undefined"}},_autofill:{defaultValue:null,description:"",name:"_autofill",required:!1,type:{name:"SystemStyleObject | undefined"}},_even:{defaultValue:null,description:"",name:"_even",required:!1,type:{name:"SystemStyleObject | undefined"}},_odd:{defaultValue:null,description:"",name:"_odd",required:!1,type:{name:"SystemStyleObject | undefined"}},_first:{defaultValue:null,description:"",name:"_first",required:!1,type:{name:"SystemStyleObject | undefined"}},_firstLetter:{defaultValue:null,description:"",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject | undefined"}},_last:{defaultValue:null,description:"",name:"_last",required:!1,type:{name:"SystemStyleObject | undefined"}},_notFirst:{defaultValue:null,description:"",name:"_notFirst",required:!1,type:{name:"SystemStyleObject | undefined"}},_notLast:{defaultValue:null,description:"",name:"_notLast",required:!1,type:{name:"SystemStyleObject | undefined"}},_visited:{defaultValue:null,description:"",name:"_visited",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeLink:{defaultValue:null,description:"",name:"_activeLink",required:!1,type:{name:"SystemStyleObject | undefined"}},_activeStep:{defaultValue:null,description:"",name:"_activeStep",required:!1,type:{name:"SystemStyleObject | undefined"}},_indeterminate:{defaultValue:null,description:"",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupOpen:{defaultValue:null,description:"",name:"_groupOpen",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupClosed:{defaultValue:null,description:"",name:"_groupClosed",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupHover:{defaultValue:null,description:"",name:"_groupHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerHover:{defaultValue:null,description:"",name:"_peerHover",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocus:{defaultValue:null,description:"",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocus:{defaultValue:null,description:"",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusVisible:{defaultValue:null,description:"",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusVisible:{defaultValue:null,description:"",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupActive:{defaultValue:null,description:"",name:"_groupActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerActive:{defaultValue:null,description:"",name:"_peerActive",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupDisabled:{defaultValue:null,description:"",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerDisabled:{defaultValue:null,description:"",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupInvalid:{defaultValue:null,description:"",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerInvalid:{defaultValue:null,description:"",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupChecked:{defaultValue:null,description:"",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerChecked:{defaultValue:null,description:"",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject | undefined"}},_groupFocusWithin:{defaultValue:null,description:"",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerFocusWithin:{defaultValue:null,description:"",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject | undefined"}},_peerPlaceholderShown:{defaultValue:null,description:"",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholder:{defaultValue:null,description:"",name:"_placeholder",required:!1,type:{name:"SystemStyleObject | undefined"}},_placeholderShown:{defaultValue:null,description:"",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject | undefined"}},_fullScreen:{defaultValue:null,description:"",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject | undefined"}},_selection:{defaultValue:null,description:"",name:"_selection",required:!1,type:{name:"SystemStyleObject | undefined"}},_rtl:{defaultValue:null,description:"",name:"_rtl",required:!1,type:{name:"SystemStyleObject | undefined"}},_ltr:{defaultValue:null,description:"",name:"_ltr",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaDark:{defaultValue:null,description:"",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject | undefined"}},_mediaReduceMotion:{defaultValue:null,description:"",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject | undefined"}},_dark:{defaultValue:null,description:"",name:"_dark",required:!1,type:{name:"SystemStyleObject | undefined"}},_light:{defaultValue:null,description:"",name:"_light",required:!1,type:{name:"SystemStyleObject | undefined"}},_horizontal:{defaultValue:null,description:"",name:"_horizontal",required:!1,type:{name:"SystemStyleObject | undefined"}},_vertical:{defaultValue:null,description:"",name:"_vertical",required:!1,type:{name:"SystemStyleObject | undefined"}},_open:{defaultValue:null,description:"",name:"_open",required:!1,type:{name:"SystemStyleObject | undefined"}},_closed:{defaultValue:null,description:"",name:"_closed",required:!1,type:{name:"SystemStyleObject | undefined"}},_complete:{defaultValue:null,description:"",name:"_complete",required:!1,type:{name:"SystemStyleObject | undefined"}},_incomplete:{defaultValue:null,description:"",name:"_incomplete",required:!1,type:{name:"SystemStyleObject | undefined"}},_current:{defaultValue:null,description:"",name:"_current",required:!1,type:{name:"SystemStyleObject | undefined"}},searchButton:{defaultValue:{value:"none"},description:"",name:"searchButton",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"none"'}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"gray"'},{value:'"green"'},{value:'"red"'}]}},buttonVariant:{defaultValue:{value:"tertiary"},description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}},buttonWidth:{defaultValue:null,description:"",name:"buttonWidth",required:!1,type:{name:"string | undefined"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string | undefined"}}}}}catch{}export{h as S};