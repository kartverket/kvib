import{r as s}from"./index-CcKhGcwW.js";function f(r,t){return`${r} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function C(r={}){const{name:t,strict:u=!0,hookName:i="useContext",providerName:x="Provider",errorMessage:m,defaultValue:d}=r,e=s.createContext(d);e.displayName=t;function n(){var c;const a=s.useContext(e);if(!a&&u){const o=new Error(m??f(i,x));throw o.name="ContextError",(c=Error.captureStackTrace)==null||c.call(Error,o,n),o}return a}return[e.Provider,n,e]}export{C as c};
