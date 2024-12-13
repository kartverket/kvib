function J(p,R){for(var v=0;v<R.length;v++){const l=R[v];if(typeof l!="string"&&!Array.isArray(l)){for(const _ in l)if(_!=="default"&&!(_ in p)){const d=Object.getOwnPropertyDescriptor(l,_);d&&Object.defineProperty(p,_,d.get?d:{enumerable:!0,get:()=>l[_]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function V(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var S={exports:{}},o={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function F(){if(x)return o;x=1;var p=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),O=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,H={};function y(t,e,n){this.props=t,this.context=e,this.refs=H,this.updater=n||j}y.prototype.isReactComponent={},y.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},y.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function b(){}b.prototype=y.prototype;function m(t,e,n){this.props=t,this.context=e,this.refs=H,this.updater=n||j}var g=m.prototype=new b;g.constructor=m,P(g,y.prototype),g.isPureReactComponent=!0;var $=Array.isArray,i={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function C(t,e,n,r,s,f){return n=f.ref,{$$typeof:p,type:t,key:e,ref:n!==void 0?n:null,props:f}}function K(t,e){return C(t.type,e,void 0,void 0,void 0,t.props)}function w(t){return typeof t=="object"&&t!==null&&t.$$typeof===p}function B(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Y=/\/+/g;function A(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B(""+t.key):e.toString(36)}function M(){}function W(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(M,M):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function E(t,e,n,r,s){var f=typeof t;(f==="undefined"||f==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(f){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case p:case R:u=!0;break;case h:return u=t._init,E(u(t._payload),e,n,r,s)}}if(u)return s=s(t),u=r===""?"."+A(t,0):r,$(s)?(n="",u!=null&&(n=u.replace(Y,"$&/")+"/"),E(s,e,n,"",function(Z){return Z})):s!=null&&(w(s)&&(s=K(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(Y,"$&/")+"/")+u)),e.push(s)),1;u=0;var a=r===""?".":r+":";if($(t))for(var c=0;c<t.length;c++)r=t[c],f=a+A(r,c),u+=E(r,e,n,f,s);else if(c=G(t),typeof c=="function")for(t=c.call(t),c=0;!(r=t.next()).done;)r=r.value,f=a+A(r,c++),u+=E(r,e,n,f,s);else if(f==="object"){if(typeof t.then=="function")return E(W(t),e,n,r,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function T(t,e,n){if(t==null)return t;var r=[],s=0;return E(t,r,"","",function(f){return e.call(n,f,s++)}),r}function Q(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var k=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function X(){}return o.Children={map:T,forEach:function(t,e,n){T(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return T(t,function(){e++}),e},toArray:function(t){return T(t,function(e){return e})||[]},only:function(t){if(!w(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},o.Component=y,o.Fragment=v,o.Profiler=_,o.PureComponent=m,o.StrictMode=l,o.Suspense=q,o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,o.act=function(){throw Error("act(...) is not supported in production builds of React.")},o.cache=function(t){return function(){return t.apply(null,arguments)}},o.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=P({},t.props),s=t.key,f=void 0;if(e!=null)for(u in e.ref!==void 0&&(f=void 0),e.key!==void 0&&(s=""+e.key),e)!N.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(r[u]=e[u]);var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return C(t.type,s,void 0,void 0,f,r)},o.createContext=function(t){return t={$$typeof:D,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:d,_context:t},t},o.createElement=function(t,e,n){var r,s={},f=null;if(e!=null)for(r in e.key!==void 0&&(f=""+e.key),e)N.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(s[r]=e[r]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];s.children=a}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return C(t,f,void 0,void 0,null,s)},o.createRef=function(){return{current:null}},o.forwardRef=function(t){return{$$typeof:U,render:t}},o.isValidElement=w,o.lazy=function(t){return{$$typeof:h,_payload:{_status:-1,_result:t},_init:Q}},o.memo=function(t,e){return{$$typeof:z,type:t,compare:e===void 0?null:e}},o.startTransition=function(t){var e=i.T,n={};i.T=n;try{var r=t(),s=i.S;s!==null&&s(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(X,k)}catch(f){k(f)}finally{i.T=e}},o.unstable_useCacheRefresh=function(){return i.H.useCacheRefresh()},o.use=function(t){return i.H.use(t)},o.useActionState=function(t,e,n){return i.H.useActionState(t,e,n)},o.useCallback=function(t,e){return i.H.useCallback(t,e)},o.useContext=function(t){return i.H.useContext(t)},o.useDebugValue=function(){},o.useDeferredValue=function(t,e){return i.H.useDeferredValue(t,e)},o.useEffect=function(t,e){return i.H.useEffect(t,e)},o.useId=function(){return i.H.useId()},o.useImperativeHandle=function(t,e,n){return i.H.useImperativeHandle(t,e,n)},o.useInsertionEffect=function(t,e){return i.H.useInsertionEffect(t,e)},o.useLayoutEffect=function(t,e){return i.H.useLayoutEffect(t,e)},o.useMemo=function(t,e){return i.H.useMemo(t,e)},o.useOptimistic=function(t,e){return i.H.useOptimistic(t,e)},o.useReducer=function(t,e,n){return i.H.useReducer(t,e,n)},o.useRef=function(t){return i.H.useRef(t)},o.useState=function(t){return i.H.useState(t)},o.useSyncExternalStore=function(t,e,n){return i.H.useSyncExternalStore(t,e,n)},o.useTransition=function(){return i.H.useTransition()},o.version="19.0.0",o}var I;function tt(){return I||(I=1,S.exports=F()),S.exports}var L=tt();const et=V(L),rt=J({__proto__:null,default:et},[L]);export{rt as R,tt as a,nt as c,et as e,V as g,L as r};