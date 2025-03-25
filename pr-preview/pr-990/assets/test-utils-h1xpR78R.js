import{a as Me}from"./index-CbFAwPTn.js";import{r as Oe}from"./index-BFvnOVNu.js";function Pe(d,y){for(var v=0;v<y.length;v++){const p=y[v];if(typeof p!="string"&&!Array.isArray(p)){for(const h in p)if(h!=="default"&&!(h in d)){const l=Object.getOwnPropertyDescriptor(p,h);l&&Object.defineProperty(d,h,l.get?l:{enumerable:!0,get:()=>p[h]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var A={exports:{}},u={};/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function Ue(){if(z)return u;z=1;var d=Me(),y=Oe();function v(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function p(e){if(v(e)!==e)throw Error("Unable to find node on an unmounted component.")}function h(e){var n=e.alternate;if(!n){if(n=v(e),n===null)throw Error("Unable to find node on an unmounted component.");return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===t)return p(i),e;if(a===r)return p(i),n;a=a.sibling}throw Error("Unable to find node on an unmounted component.")}if(t.return!==r.return)t=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=a;break}if(s===r){o=!0,r=i,t=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===t){o=!0,t=a,r=i;break}if(s===r){o=!0,r=a,t=i;break}s=s.sibling}if(!o)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(t.alternate!==r)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(t.tag!==3)throw Error("Unable to find node on an unmounted component.");return t.stateNode.current===t?e:n}var l=Object.assign;function U(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function k(){return!0}function K(){return!1}function c(e){function n(t,r,i,a,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?k:K,this.isPropagationStopped=K,this}return l(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=k)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=k)},persist:function(){},isPersistent:k}),n}var g={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Z=c(g),w=l({},g,{view:0,detail:0});c(w);var S,R,C,_=l({},w,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:I,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==C&&(C&&e.type==="mousemove"?(S=e.screenX-C.screenX,R=e.screenY-C.screenY):R=S=0,C=e),S)},movementY:function(e){return"movementY"in e?e.movementY:R}});c(_);var G=l({},_,{dataTransfer:0});c(G);var J=l({},w,{relatedTarget:0});c(J);var Q=l({},g,{animationName:0,elapsedTime:0,pseudoElement:0});c(Q);var $=l({},g,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}});c($);var ee=l({},g,{data:0});c(ee);var te={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ne={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},re={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oe(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=re[e])?!!n[e]:!1}function I(){return oe}var ie=l({},w,{key:function(e){if(e.key){var n=te[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=U(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ne[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:I,charCode:function(e){return e.type==="keypress"?U(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?U(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}});c(ie);var ae=l({},_,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0});c(ae);var se=l({},w,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:I});c(se);var ue=l({},g,{propertyName:0,elapsedTime:0,pseudoElement:0});c(ue);var le=l({},_,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0});c(le);function ce(e,n,t,r,i,a,o,s,D){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(Te){this.onError(Te)}}var E=!1,T=null,M=!1,N=null,de={onError:function(e){E=!0,T=e}};function pe(e,n,t,r,i,a,o,s,D){E=!1,T=null,ce.apply(de,arguments)}function fe(e,n,t,r,i,a,o,s,D){if(pe.apply(this,arguments),E){if(E){var f=T;E=!1,T=null}else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");M||(M=!0,N=f)}}var L=Array.isArray,b=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,he=b[0],me=b[1],ye=b[2],ve=b[3],ge=b[4],we=d.unstable_act;function Ce(){}function Ee(e,n){if(!e)return[];if(e=h(e),!e)return[];for(var t=e,r=[];;){if(t.tag===5||t.tag===6||t.tag===1||t.tag===0){var i=t.stateNode;n(i)&&r.push(i)}if(t.child)t.child.return=t,t=t.child;else{if(t===e)return r;for(;!t.sibling;){if(!t.return||t.return===e)return r;t=t.return}t.sibling.return=t.return,t=t.sibling}}}function m(e,n){if(e&&!e._reactInternals){var t=String(e);throw e=L(e)?"an array":e&&e.nodeType===1&&e.tagName?"a DOM node":t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t,Error(n+"(...): the first argument must be a React class instance. Instead received: "+(e+"."))}}function O(e){return!(!e||e.nodeType!==1||!e.tagName)}function x(e){return O(e)?!1:e!=null&&typeof e.render=="function"&&typeof e.setState=="function"}function W(e,n){return x(e)?e._reactInternals.type===n:!1}function P(e,n){return m(e,"findAllInRenderedTree"),e?Ee(e._reactInternals,n):[]}function Y(e,n){return m(e,"scryRenderedDOMComponentsWithClass"),P(e,function(t){if(O(t)){var r=t.className;typeof r!="string"&&(r=t.getAttribute("class")||"");var i=r.split(/\s+/);if(!L(n)){if(n===void 0)throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");n=n.split(/\s+/)}return n.every(function(a){return i.indexOf(a)!==-1})}return!1})}function X(e,n){return m(e,"scryRenderedDOMComponentsWithTag"),P(e,function(t){return O(t)&&t.tagName.toUpperCase()===n.toUpperCase()})}function F(e,n){return m(e,"scryRenderedComponentsWithType"),P(e,function(t){return W(t,n)})}function j(e,n,t){var r=e.type||"unknown-event";e.currentTarget=me(t),fe(r,n,void 0,e),e.currentTarget=null}function q(e,n,t){for(var r=[];e;){r.push(e);do e=e.return;while(e&&e.tag!==5);e=e||null}for(e=r.length;0<e--;)n(r[e],"captured",t);for(e=0;e<r.length;e++)n(r[e],"bubbled",t)}function V(e,n){var t=e.stateNode;if(!t)return null;var r=ye(t);if(!r)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error("Expected `"+n+"` listener to be a function, instead got a value of `"+typeof t+"` type.");return t}function be(e,n,t){e&&t&&t._reactName&&(n=V(e,t._reactName))&&(t._dispatchListeners==null&&(t._dispatchListeners=[]),t._dispatchInstances==null&&(t._dispatchInstances=[]),t._dispatchListeners.push(n),t._dispatchInstances.push(e))}function De(e,n,t){var r=t._reactName;n==="captured"&&(r+="Capture"),(n=V(e,r))&&(t._dispatchListeners==null&&(t._dispatchListeners=[]),t._dispatchInstances==null&&(t._dispatchInstances=[]),t._dispatchListeners.push(n),t._dispatchInstances.push(e))}var B={},ke=new Set(["mouseEnter","mouseLeave","pointerEnter","pointerLeave"]);function _e(e){return function(n,t){if(d.isValidElement(n))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");if(x(n))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");var r="on"+e[0].toUpperCase()+e.slice(1),i=new Ce;i.target=n,i.type=e.toLowerCase();var a=he(n),o=new Z(r,i.type,a,i,n);o.persist(),l(o,t),ke.has(e)?o&&o._reactName&&be(o._targetInst,null,o):o&&o._reactName&&q(o._targetInst,De,o),y.unstable_batchedUpdates(function(){if(ve(n),o){var s=o._dispatchListeners,D=o._dispatchInstances;if(L(s))for(var f=0;f<s.length&&!o.isPropagationStopped();f++)j(o,s[f],D[f]);else s&&j(o,s,D);o._dispatchListeners=null,o._dispatchInstances=null,o.isPersistent()||o.constructor.release(o)}if(M)throw s=N,M=!1,N=null,s}),ge()}}return"blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(e){B[e]=_e(e)}),u.Simulate=B,u.act=we,u.findAllInRenderedTree=P,u.findRenderedComponentWithType=function(e,n){if(m(e,"findRenderedComponentWithType"),e=F(e,n),e.length!==1)throw Error("Did not find exactly one match (found: "+e.length+") for componentType:"+n);return e[0]},u.findRenderedDOMComponentWithClass=function(e,n){if(m(e,"findRenderedDOMComponentWithClass"),e=Y(e,n),e.length!==1)throw Error("Did not find exactly one match (found: "+e.length+") for class:"+n);return e[0]},u.findRenderedDOMComponentWithTag=function(e,n){if(m(e,"findRenderedDOMComponentWithTag"),e=X(e,n),e.length!==1)throw Error("Did not find exactly one match (found: "+e.length+") for tag:"+n);return e[0]},u.isCompositeComponent=x,u.isCompositeComponentWithType=W,u.isDOMComponent=O,u.isDOMComponentElement=function(e){return!!(e&&d.isValidElement(e)&&e.tagName)},u.isElement=function(e){return d.isValidElement(e)},u.isElementOfType=function(e,n){return d.isValidElement(e)&&e.type===n},u.mockComponent=function(e,n){return n=n||e.mockTagName||"div",e.prototype.render.mockImplementation(function(){return d.createElement(n,null,this.props.children)}),this},u.nativeTouchData=function(e,n){return{touches:[{pageX:e,pageY:n}]}},u.renderIntoDocument=function(e){var n=document.createElement("div");return y.render(e,n)},u.scryRenderedComponentsWithType=F,u.scryRenderedDOMComponentsWithClass=Y,u.scryRenderedDOMComponentsWithTag=X,u.traverseTwoPhase=q,u}var H;function Se(){return H||(H=1,A.exports=Ue()),A.exports}var Re=Se();const Le=Pe({__proto__:null},[Re]);export{Le as t};
