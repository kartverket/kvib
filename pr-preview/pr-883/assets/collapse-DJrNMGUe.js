import{j as l}from"./extends-CwFRzn3r.js";import{r as m}from"./index-BwDkhjyp.js";import{w as u,a as r}from"./transition-utils-CnxNY5SP.js";import{A}from"./index-DVNvNJVv.js";import{m as I}from"./proxy-CQsau1XN.js";import{c as b}from"./cx-BDMMs1jM.js";const k=s=>{const{condition:o,message:t}=s},v=s=>s!=null&&parseInt(s.toString(),10)>0,p={exit:{height:{duration:.2,ease:r.ease},opacity:{duration:.3,ease:r.ease}},enter:{height:{duration:.3,ease:r.ease},opacity:{duration:.4,ease:r.ease}}},C={exit:({animateOpacity:s,startingHeight:o,transition:t,transitionEnd:e,delay:i})=>({...s&&{opacity:v(o)?1:0},height:o,transitionEnd:e==null?void 0:e.exit,transition:(t==null?void 0:t.exit)??u.exit(p.exit,i)}),enter:({animateOpacity:s,endingHeight:o,transition:t,transitionEnd:e,delay:i})=>({...s&&{opacity:1},height:o,transitionEnd:e==null?void 0:e.enter,transition:(t==null?void 0:t.enter)??u.enter(p.enter,i)})},H=m.forwardRef((s,o)=>{const{in:t,unmountOnExit:e,animateOpacity:i=!0,startingHeight:c=0,endingHeight:x="auto",style:h,className:f,transition:g,transitionEnd:a,animatePresenceProps:y,...d}=s,[w,N]=m.useState(!1);m.useEffect(()=>{const j=setTimeout(()=>{N(!0)});return()=>clearTimeout(j)},[]),k({condition:Number(c)>0&&!!e,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const S=parseFloat(c.toString())>0,n={startingHeight:c,endingHeight:x,animateOpacity:i,transition:w?g:{enter:{duration:0}},transitionEnd:{enter:a==null?void 0:a.enter,exit:e?a==null?void 0:a.exit:{...a==null?void 0:a.exit,display:S?"block":"none"}}},O=e?t:!0,T=t||e?"enter":"exit";return l.jsx(A,{...y,initial:!1,custom:n,children:O&&l.jsx(I.div,{ref:o,...d,className:b("chakra-collapse",f),style:{overflow:"hidden",display:"block",...h},custom:n,variants:C,initial:e?"exit":!1,animate:T,exit:"exit"})})});H.displayName="Collapse";export{H as C,k as w};
