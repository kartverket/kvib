import{c as i,a as m,f as v,o as S}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{j as r}from"./extends-CwFRzn3r.js";import{I as s}from"./chunk-2GBDXOMA-K_WHOyag.js";import{c as h}from"./index-CHDWSgKD.js";import{S as j}from"./chunk-5PH6ULNP-B_hWxh7m.js";import{a as p}from"./chunk-DMO4EI7P-D6u3hnqn.js";function y(e){return r.jsx(s,{viewBox:"0 0 24 24",...e,children:r.jsx("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function g(e){return r.jsx(s,{viewBox:"0 0 24 24",...e,children:r.jsx("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function l(e){return r.jsx(s,{viewBox:"0 0 24 24",...e,children:r.jsx("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var[C,I]=h({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[N,w]=h({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),u={info:{icon:g,colorScheme:"blue"},warning:{icon:l,colorScheme:"orange"},success:{icon:y,colorScheme:"green"},error:{icon:l,colorScheme:"red"},loading:{icon:j,colorScheme:"blue"}};function Z(e){return u[e].colorScheme}function M(e){return u[e].icon}function _(e){const{status:t}=I(),n=M(t),o=w(),a=t==="loading"?o.spinner:o.icon;return r.jsx(i.span,{display:"inherit","data-status":t,...e,className:m("chakra-alert__icon",e.className),__css:a,children:e.children||r.jsx(n,{h:"100%",w:"100%"})})}_.displayName="AlertIcon";var k=v(function(t,n){var o;const{status:a="info",addRole:d=!0,...A}=S(t),f=(o=t.colorScheme)!=null?o:Z(a),c=p("Alert",{...t,colorScheme:f}),x={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...c.container};return r.jsx(C,{value:{status:a},children:r.jsx(N,{value:c,children:r.jsx(i.div,{"data-status":a,role:d?"alert":void 0,ref:n,...A,className:m("chakra-alert",t.className),__css:x})})})});k.displayName="Alert";export{_ as A,I as a,k as b,w as u};
