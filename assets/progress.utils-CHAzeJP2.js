import{k as r}from"./emotion-react.browser.esm-0Zac8NuU.js";function l(a,e,t){return(a-e)*100/(t-e)}const m=r({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),d=r({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),k=r({"0%":{left:"-40%"},"100%":{left:"100%"}}),p=r({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function v(a){const{value:e=0,min:t,max:o,valueText:u,getValueText:s,isIndeterminate:n,role:f="progressbar"}=a,i=l(e,t,o);return{bind:{"data-indeterminate":n?"":void 0,"aria-valuemax":o,"aria-valuemin":t,"aria-valuenow":n?void 0:e,"aria-valuetext":(()=>{if(e!=null)return typeof s=="function"?s(e,i):u})(),role:f},percent:i,value:e}}export{m as a,v as g,k as p,d as r,p as s};