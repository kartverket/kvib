import{j as r}from"./extends-CwFRzn3r.js";import{B as n}from"./box-B7h7acUJ.js";import{I as y}from"./image-Cz43cXZB.js";import{S as f}from"./simple-grid-CQLrn815.js";import{H as u}from"./heading-D_euA-I1.js";import{T as g}from"./text-rUwQV1v4.js";import{C as _,a as h}from"./Card-DoxEvc2h.js";import{F as o}from"./flex-CHlq4-Ax.js";import{B as s}from"./Button-DKu1TMZE.js";const d=({children:e})=>r.jsx(n,{padding:"0 1rem",children:e});try{d.displayName="DocsContainer",d.__docgenInfo={description:"",displayName:"DocsContainer",props:{}}}catch{}const l=({imgPath:e})=>r.jsx(y,{width:"100%",padding:[0,"1rem","3rem"],src:e,backgroundColor:"white"});try{l.displayName="DocsAnatomy",l.__docgenInfo={description:"",displayName:"DocsAnatomy",props:{imgPath:{defaultValue:null,description:"",name:"imgPath",required:!0,type:{name:"string"}}}}}catch{}const c=({title:e,description:t,story:a,isVertical:i})=>r.jsxs(f,{columns:[1,1,i?1:2],spacing:[0,0,i?0:"2rem"],children:[r.jsxs(n,{children:[e!==""&&r.jsx(u,{mt:"25px",size:"md",as:"h3",id:e,children:e}),t!==""&&r.jsx(g,{children:t})]}),r.jsx(n,{children:a})]});try{c.displayName="DocsStory",c.__docgenInfo={description:"",displayName:"DocsStory",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string | Element"}},story:{defaultValue:null,description:"",name:"story",required:!0,type:{name:"any"}},isVertical:{defaultValue:null,description:"",name:"isVertical",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const m=({children:e,light:t})=>r.jsx(n,{backgroundColor:t?"transparent":"gray.900",height:"3rem",borderRadius:"none",paddingLeft:"1rem",alignItems:"center",display:"flex",marginBottom:"2rem",marginTop:"1rem",className:"docs-heading",children:r.jsx(u,{margin:"0",color:t?"gray.900":"white",size:t?"md":"sm",as:"h2",id:e,children:e})});try{m.displayName="DocsHeading",m.__docgenInfo={description:"",displayName:"DocsHeading",props:{light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const p=({component:e,width:t})=>{const a=`https://github.com/kartverket/kvib/issues/new?labels=innspill+%F0%9F%A5%B0%2Ckomponenter+%F0%9F%A7%A9&projects=&template=update-component.yml&title=%5BInnspill+til+komponent%5D%3A+%3C${e}%20/%3E`;return r.jsx(_,{variant:"unstyled",backgroundColor:"green.50",width:t||["fit-content","fit-content","auto"],margin:"2rem 0",padding:"1rem",children:r.jsxs(h,{display:"flex",flexDirection:["column","column","row"],gap:"1rem",justifyContent:"space-between",padding:"1rem",alignItems:["flex-start","flex-start","center"],children:[r.jsx(o,{gap:".5rem",children:r.jsx(g,{margin:"0",fontWeight:"medium",fontSize:"md",children:"Har du ris, ros eller innspill?"})}),r.jsxs(o,{gap:".5rem",alignItems:"center",flexWrap:"wrap",children:[r.jsx(s,{href:a,as:"a",target:"_blank",colorScheme:"green",variant:"tertiary",size:"xs",children:"Send inn et forslag"}),r.jsx(s,{as:"a",href:"/?path=/docs/for-utviklere-bidra-med-kode-hurtigveiledning--docs",colorScheme:"green",variant:"tertiary",size:"xs",children:"Bidra med PR"})]})]})})};try{p.displayName="Feedback",p.__docgenInfo={description:"",displayName:"Feedback",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | undefined"}}}}}catch{}export{d as D,p as F,c as a,m as b,l as c};
