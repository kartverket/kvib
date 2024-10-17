import{j as e}from"./extends-CwFRzn3r.js";import{u as s}from"./use-media-query-DZQeksUW.js";import{u as I}from"./use-disclosure-CdGn7wGE.js";import{C as H}from"./collapse-DJrNMGUe.js";import{V as z}from"./v-stack-BfMi40Xh.js";import{d as u}from"./index-CfE5Katq.js";import{B as _}from"./box-DeqT4ixr.js";import{F as T}from"./flex-C1gIBb6o.js";import{L as A}from"./Link-C3IPjqxf.js";import{I as S}from"./IconButton-Bero3Ld2.js";import{L as D}from"./Logo-CwyJCF6Z.js";const p=a=>{const{justifyContent:i="space-between",logoLinkDisabled:m=!1,logoLink:c="/",logoLinkProps:f,logoAltText:h,children:n,showMenuButton:g=!1,dropdownMenuChildren:y,showChildrenInMenu:b=!0,collapseBreakpoint:k="sm",onMenuButtonClick:w,gap:x=90,logoVariant:r="horizontal"}=a,[o]=s(`(max-width: ${u.breakpoints[k]})`),[t]=s(`(max-width: ${u.breakpoints.sm})`),C=t?110:150,v=t?70:100,V=t?70:90,B=i&&o?"space-between":i,j=!o,{isOpen:l,onToggle:L}=I(),M=n&&(o||l)||g,q=w||L,d=()=>e.jsx(D,{label:h,variant:r,size:r=="horizontal"?C:v});return e.jsxs(_,{children:[e.jsxs(T,{bg:"white",borderBottomWidth:"2px",borderBottomColor:"gray.200",padding:30,height:V,alignItems:"center",justifyContent:B,gap:x,children:[m?e.jsx(d,{}):e.jsx(A,{href:c,isExternal:!1,...f,children:e.jsx(d,{})}),j&&n,M&&e.jsx(S,{"aria-label":"open menu",icon:l?"close":"menu",variant:"ghost",onClick:q})]}),e.jsx(H,{in:l,animateOpacity:!1,children:e.jsxs(z,{bg:"gray.50",borderBottomWidth:"2px",borderBottomColor:"gray.200",padding:30,gap:10,children:[b&&n,y]})})]})};try{p.displayName="Header",p.__docgenInfo={description:"",displayName:"Header",props:{justifyContent:{defaultValue:null,description:"Determines where the content in the header is displayed.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"center"'},{value:'"start"'},{value:'"space-between"'}]}},logoLinkDisabled:{defaultValue:null,description:"If set, the link around the logo will not be rendered and clickable.",name:"logoLinkDisabled",required:!1,type:{name:"boolean | undefined"}},logoLink:{defaultValue:null,description:"Href for logo link",name:"logoLink",required:!1,type:{name:"string | undefined"}},logoLinkProps:{defaultValue:null,description:"As for logo link",name:"logoLinkProps",required:!1,type:{name:'Omit<LinkProps, "href"> | undefined'}},logoAltText:{defaultValue:null,description:"Alt Text for logo",name:"logoAltText",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Children to be displayed in the header.",name:"children",required:!1,type:{name:"ReactNode"}},showMenuButton:{defaultValue:null,description:"If true, a menu button will be displayed.",name:"showMenuButton",required:!1,type:{name:"boolean | undefined"}},showChildrenInMenu:{defaultValue:null,description:"If true, the header children will be displayed in the dropdown menu.",name:"showChildrenInMenu",required:!1,type:{name:"boolean | undefined"}},dropdownMenuChildren:{defaultValue:null,description:"Custom children to be displayed in the dropdown menu. Also to modify dropdown layout.",name:"dropdownMenuChildren",required:!1,type:{name:"ReactNode"}},collapseBreakpoint:{defaultValue:null,description:"Screen breakpoint for when the header should collapse and display menu button instead.",name:"collapseBreakpoint",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onMenuButtonClick:{defaultValue:null,description:"If provided: a custom function to be called when the menu button is clicked.",name:"onMenuButtonClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},gap:{defaultValue:null,description:"Gap between header elements.",name:"gap",required:!1,type:{name:"number | undefined"}},logoVariant:{defaultValue:null,description:"",name:"logoVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}export{p as H};
