import{w as m,T as s}from"./chunk-6NHXDBFO-DotHZPjx.js";import{w as T,a as O}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{r as l}from"./index-BwDkhjyp.js";import{j as c}from"./extends-CwFRzn3r.js";import{A as j}from"./index-CBajw-n2.js";import{m as A}from"./proxy-CzVOQe18.js";var I=i=>i!=null&&parseInt(i.toString(),10)>0,d={exit:{height:{duration:.2,ease:s.ease},opacity:{duration:.3,ease:s.ease}},enter:{height:{duration:.3,ease:s.ease},opacity:{duration:.4,ease:s.ease}}},b={exit:({animateOpacity:i,startingHeight:n,transition:a,transitionEnd:t,delay:o})=>{var e;return{...i&&{opacity:I(n)?1:0},height:n,transitionEnd:t==null?void 0:t.exit,transition:(e=a==null?void 0:a.exit)!=null?e:m.exit(d.exit,o)}},enter:({animateOpacity:i,endingHeight:n,transition:a,transitionEnd:t,delay:o})=>{var e;return{...i&&{opacity:1},height:n,transitionEnd:t==null?void 0:t.enter,transition:(e=a==null?void 0:a.enter)!=null?e:m.enter(d.enter,o)}}},k=l.forwardRef((i,n)=>{const{in:a,unmountOnExit:t,animateOpacity:o=!0,startingHeight:e=0,endingHeight:p="auto",style:x,className:h,transition:v,transitionEnd:r,...f}=i,[g,y]=l.useState(!1);l.useEffect(()=>{const S=setTimeout(()=>{y(!0)});return()=>clearTimeout(S)},[]),T({condition:Number(e)>0&&!!t,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const E=parseFloat(e.toString())>0,u={startingHeight:e,endingHeight:p,animateOpacity:o,transition:g?v:{enter:{duration:0}},transitionEnd:{enter:r==null?void 0:r.enter,exit:t?r==null?void 0:r.exit:{...r==null?void 0:r.exit,display:E?"block":"none"}}},N=t?a:!0,w=a||t?"enter":"exit";return c.jsx(j,{initial:!1,custom:u,children:N&&c.jsx(A.div,{ref:n,...f,className:O("chakra-collapse",h),style:{overflow:"hidden",display:"block",...x},custom:u,variants:b,initial:t?"exit":!1,animate:w,exit:"exit"})})});k.displayName="Collapse";export{k as C};
