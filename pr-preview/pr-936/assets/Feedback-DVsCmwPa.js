import{j as r}from"./index-D6_wGsWO.js";import{B as t,I as y,S as _,z as u,T as g,O as h,Q as f,F as s,aV as o}from"./index-BIL3J8Um.js";const d=({children:e})=>r.jsx(t,{padding:"0 1rem",children:e});try{d.displayName="DocsContainer",d.__docgenInfo={description:"",displayName:"DocsContainer",props:{}}}catch{}const l=({imgPath:e})=>r.jsx(y,{width:"100%",padding:[0,"1rem","3rem"],src:e,backgroundColor:"white"});try{l.displayName="DocsAnatomy",l.__docgenInfo={description:"",displayName:"DocsAnatomy",props:{imgPath:{defaultValue:null,description:"",name:"imgPath",required:!0,type:{name:"string"}}}}}catch{}const c=({title:e,description:n,story:a,isVertical:i})=>r.jsxs(_,{columns:[1,1,i?1:2],gap:[0,0,i?0:"2rem"],children:[r.jsxs(t,{children:[e!==""&&r.jsx(u,{mt:"25px",size:"md",as:"h3",id:e,children:e}),n!==""&&r.jsx(g,{children:n})]}),r.jsx(t,{children:a})]});try{c.displayName="DocsStory",c.__docgenInfo={description:"",displayName:"DocsStory",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string | Element"}},story:{defaultValue:null,description:"",name:"story",required:!0,type:{name:"any"}},isVertical:{defaultValue:null,description:"",name:"isVertical",required:!1,type:{name:"boolean"}}}}}catch{}const p=({children:e,light:n})=>r.jsx(t,{backgroundColor:n?"transparent":"gray.900",height:"3rem",borderRadius:"none",paddingLeft:"1rem",alignItems:"center",display:"flex",marginBottom:"2rem",marginTop:"1rem",className:"docs-heading",children:r.jsx(u,{margin:"0",color:n?"gray.900":"white",size:n?"md":"sm",as:"h2",id:e,children:e})});try{p.displayName="DocsHeading",p.__docgenInfo={description:"",displayName:"DocsHeading",props:{light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}}}}}catch{}const m=({component:e,width:n})=>{const a=`https://github.com/kartverket/kvib/issues/new?labels=innspill+%F0%9F%A5%B0%2Ckomponenter+%F0%9F%A7%A9&projects=&template=update-component.yml&title=%5BInnspill+til+komponent%5D%3A+%3C${e}%20/%3E`;return r.jsx(h,{unstyled:!0,backgroundColor:"green.50",width:n||["fit-content","fit-content","auto"],margin:"2rem 0",padding:"1rem",children:r.jsxs(f,{display:"flex",flexDirection:["column","column","row"],gap:"1rem",justifyContent:"space-between",padding:"1rem",alignItems:["flex-start","flex-start","center"],children:[r.jsx(s,{gap:".5rem",children:r.jsx(g,{margin:"0",fontWeight:"medium",fontSize:"md",children:"Har du ris, ros eller innspill?"})}),r.jsxs(s,{gap:".5rem",alignItems:"center",flexWrap:"wrap",children:[r.jsx(o,{href:a,target:"_blank",size:"xs",children:"Send inn et forslag"}),r.jsx(o,{href:"/?path=/docs/for-utviklere-bidra-med-kode-hurtigveiledning--docs",size:"xs",children:"Bidra med PR"})]})]})})};try{m.displayName="Feedback",m.__docgenInfo={description:"",displayName:"Feedback",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}export{d as D,m as F,c as a,p as b};
