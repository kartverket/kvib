import{j as I}from"./jsx-runtime-DQFEoQHt.js";import{r as k,R as _e}from"./index-CbFAwPTn.js";const G=(...e)=>e.filter(Boolean).map(r=>r.trim()).join(" ");function tr(e,r){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`}function nr(e={}){const{name:r,strict:t=!0,hookName:n="useContext",providerName:a="Provider",errorMessage:s,defaultValue:o}=e,c=k.createContext(o);c.displayName=r;function f(){var l;const u=k.useContext(c);if(!u&&t){const d=new Error(s??tr(n,a));throw d.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,d,f),d}return u}return[c.Provider,f,c]}function ar(...e){return function(...t){e.forEach(n=>n==null?void 0:n(...t))}}const sr=(...e)=>e.map(r=>{var t;return(t=r==null?void 0:r.trim)==null?void 0:t.call(r)}).filter(Boolean).join(" "),or=/^on[A-Z]/;function ir(...e){let r={};for(let t of e){for(let n in r){if(or.test(n)&&typeof r[n]=="function"&&typeof t[n]=="function"){r[n]=ar(r[n],t[n]);continue}if(n==="className"||n==="class"){r[n]=sr(r[n],t[n]);continue}if(n==="style"){r[n]=Object.assign({},r[n]??{},t[n]??{});continue}r[n]=t[n]!==void 0?t[n]:r[n]}for(let n in t)r[n]===void 0&&(r[n]=t[n])}return r}function We(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var cr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,fr=We(function(e){return cr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function ur(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function lr(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var dr=function(){function e(t){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(lr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=ur(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},e}(),R="-ms-",te="-moz-",h="-webkit-",He="comm",ge="rule",be="decl",pr="@import",qe="@keyframes",hr="@layer",mr=Math.abs,ne=String.fromCharCode,yr=Object.assign;function gr(e,r){return T(e,0)^45?(((r<<2^T(e,0))<<2^T(e,1))<<2^T(e,2))<<2^T(e,3):0}function Ve(e){return e.trim()}function br(e,r){return(e=r.exec(e))?e[0]:e}function m(e,r,t){return e.replace(r,t)}function he(e,r){return e.indexOf(r)}function T(e,r){return e.charCodeAt(r)|0}function X(e,r,t){return e.slice(r,t)}function F(e){return e.length}function ve(e){return e.length}function Z(e,r){return r.push(e),e}function vr(e,r){return e.map(r).join("")}var ae=1,W=1,Ue=0,M=0,E=0,H="";function se(e,r,t,n,a,s,o){return{value:e,root:r,parent:t,type:n,props:a,children:s,line:ae,column:W,length:o,return:""}}function B(e,r){return yr(se("",null,null,"",null,null,0),e,{length:-e.length},r)}function xr(){return E}function wr(){return E=M>0?T(H,--M):0,W--,E===10&&(W=1,ae--),E}function N(){return E=M<Ue?T(H,M++):0,W++,E===10&&(W=1,ae++),E}function L(){return T(H,M)}function Q(){return M}function K(e,r){return X(H,e,r)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Be(e){return ae=W=1,Ue=F(H=e),M=0,[]}function Ge(e){return H="",e}function ee(e){return Ve(K(M-1,me(e===91?e+2:e===40?e+1:e)))}function Sr(e){for(;(E=L())&&E<33;)N();return Y(e)>2||Y(E)>3?"":" "}function Pr(e,r){for(;--r&&N()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return K(e,Q()+(r<6&&L()==32&&N()==32))}function me(e){for(;N();)switch(E){case e:return M;case 34:case 39:e!==34&&e!==39&&me(E);break;case 40:e===41&&me(e);break;case 92:N();break}return M}function Cr(e,r){for(;N()&&e+E!==57;)if(e+E===84&&L()===47)break;return"/*"+K(r,M-1)+"*"+ne(e===47?e:N())}function kr(e){for(;!Y(L());)N();return K(e,M)}function $r(e){return Ge(re("",null,null,null,[""],e=Be(e),0,[0],e))}function re(e,r,t,n,a,s,o,c,f){for(var u=0,l=0,d=o,$=0,A=0,y=0,p=1,C=1,g=1,w=0,S="",P=a,i=s,b=n,v=S;C;)switch(y=w,w=N()){case 40:if(y!=108&&T(v,d-1)==58){he(v+=m(ee(w),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:v+=ee(w);break;case 9:case 10:case 13:case 32:v+=Sr(y);break;case 92:v+=Pr(Q()-1,7);continue;case 47:switch(L()){case 42:case 47:Z(Ar(Cr(N(),Q()),r,t),f);break;default:v+="/"}break;case 123*p:c[u++]=F(v)*g;case 125*p:case 59:case 0:switch(w){case 0:case 125:C=0;case 59+l:g==-1&&(v=m(v,/\f/g,"")),A>0&&F(v)-d&&Z(A>32?Te(v+";",n,t,d-1):Te(m(v," ","")+";",n,t,d-2),f);break;case 59:v+=";";default:if(Z(b=Ee(v,r,t,u,l,a,c,S,P=[],i=[],d),s),w===123)if(l===0)re(v,r,b,b,P,s,d,c,i);else switch($===99&&T(v,3)===110?100:$){case 100:case 108:case 109:case 115:re(e,b,b,n&&Z(Ee(e,b,b,0,0,a,c,S,a,P=[],d),i),a,i,d,c,n?P:i);break;default:re(v,b,b,b,[""],i,0,c,i)}}u=l=A=0,p=g=1,S=v="",d=o;break;case 58:d=1+F(v),A=y;default:if(p<1){if(w==123)--p;else if(w==125&&p++==0&&wr()==125)continue}switch(v+=ne(w),w*p){case 38:g=l>0?1:(v+="\f",-1);break;case 44:c[u++]=(F(v)-1)*g,g=1;break;case 64:L()===45&&(v+=ee(N())),$=L(),l=d=F(S=v+=kr(Q())),w++;break;case 45:y===45&&F(v)==2&&(p=0)}}return s}function Ee(e,r,t,n,a,s,o,c,f,u,l){for(var d=a-1,$=a===0?s:[""],A=ve($),y=0,p=0,C=0;y<n;++y)for(var g=0,w=X(e,d+1,d=mr(p=o[y])),S=e;g<A;++g)(S=Ve(p>0?$[g]+" "+w:m(w,/&\f/g,$[g])))&&(f[C++]=S);return se(e,r,t,a===0?ge:c,f,u,l)}function Ar(e,r,t){return se(e,r,t,He,ne(xr()),X(e,2,-2),0)}function Te(e,r,t,n){return se(e,r,t,be,X(e,0,n),X(e,n+1,-1),n)}function z(e,r){for(var t="",n=ve(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function _r(e,r,t,n){switch(e.type){case hr:if(e.children.length)break;case pr:case be:return e.return=e.return||e.value;case He:return"";case qe:return e.return=e.value+"{"+z(e.children,n)+"}";case ge:e.value=e.props.join(",")}return F(t=z(e.children,n))?e.return=e.value+"{"+t+"}":""}function Er(e){var r=ve(e);return function(t,n,a,s){for(var o="",c=0;c<r;c++)o+=e[c](t,n,a,s)||"";return o}}function Tr(e){return function(r){r.root||(r=r.return)&&e(r)}}var Rr=function(r,t,n){for(var a=0,s=0;a=s,s=L(),a===38&&s===12&&(t[n]=1),!Y(s);)N();return K(r,M)},Or=function(r,t){var n=-1,a=44;do switch(Y(a)){case 0:a===38&&L()===12&&(t[n]=1),r[n]+=Rr(M-1,t,n);break;case 2:r[n]+=ee(a);break;case 4:if(a===44){r[++n]=L()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=ne(a)}while(a=N());return r},Mr=function(r,t){return Ge(Or(Be(r),t))},Re=new WeakMap,Nr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!Re.get(n))&&!a){Re.set(r,!0);for(var s=[],o=Mr(t,s),c=n.props,f=0,u=0;f<o.length;f++)for(var l=0;l<c.length;l++,u++)r.props[u]=s[f]?o[f].replace(/&\f/g,c[l]):c[l]+" "+o[f]}}},Ir=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Xe(e,r){switch(gr(e,r)){case 5103:return h+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return h+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return h+e+te+e+R+e+e;case 6828:case 4268:return h+e+R+e+e;case 6165:return h+e+R+"flex-"+e+e;case 5187:return h+e+m(e,/(\w+).+(:[^]+)/,h+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return h+e+R+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return h+e+R+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return h+e+R+m(e,"shrink","negative")+e;case 5292:return h+e+R+m(e,"basis","preferred-size")+e;case 6060:return h+"box-"+m(e,"-grow","")+h+e+R+m(e,"grow","positive")+e;case 4554:return h+m(e,/([^-])(transform)/g,"$1"+h+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,h+"$1"),/(image-set)/,h+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,h+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,h+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+h+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,h+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(e)-1-r>6)switch(T(e,r+1)){case 109:if(T(e,r+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+h+"$2-$3$1"+te+(T(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~he(e,"stretch")?Xe(m(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(T(e,r+1)!==115)break;case 6444:switch(T(e,F(e)-3-(~he(e,"!important")&&10))){case 107:return m(e,":",":"+h)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+h+(T(e,14)===45?"inline-":"")+"box$3$1"+h+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(T(e,r+11)){case 114:return h+e+R+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return h+e+R+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return h+e+R+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return h+e+R+e+e}return e}var Fr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case be:r.return=Xe(r.value,r.length);break;case qe:return z([B(r,{value:m(r.value,"@","@"+h)})],a);case ge:if(r.length)return vr(r.props,function(s){switch(br(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return z([B(r,{props:[m(s,/:(read-\w+)/,":"+te+"$1")]})],a);case"::placeholder":return z([B(r,{props:[m(s,/:(plac\w+)/,":"+h+"input-$1")]}),B(r,{props:[m(s,/:(plac\w+)/,":"+te+"$1")]}),B(r,{props:[m(s,/:(plac\w+)/,R+"input-$1")]})],a)}return""})}},jr=[Fr],Lr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(p){var C=p.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var a=r.stylisPlugins||jr,s={},o,c=[];o=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(p){for(var C=p.getAttribute("data-emotion").split(" "),g=1;g<C.length;g++)s[C[g]]=!0;c.push(p)});var f,u=[Nr,Ir];{var l,d=[_r,Tr(function(p){l.insert(p)})],$=Er(u.concat(a,d)),A=function(C){return z($r(C),$)};f=function(C,g,w,S){l=w,A(C?C+"{"+g.styles+"}":g.styles),S&&(y.inserted[g.name]=!0)}}var y={key:t,sheet:new dr({key:t,container:o,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:f};return y.sheet.hydrate(c),y},ce={exports:{}},x={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function Dr(){if(Oe)return x;Oe=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,$=e?Symbol.for("react.suspense_list"):60120,A=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,C=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function S(i){if(typeof i=="object"&&i!==null){var b=i.$$typeof;switch(b){case r:switch(i=i.type,i){case f:case u:case n:case s:case a:case d:return i;default:switch(i=i&&i.$$typeof,i){case c:case l:case y:case A:case o:return i;default:return b}}case t:return b}}}function P(i){return S(i)===u}return x.AsyncMode=f,x.ConcurrentMode=u,x.ContextConsumer=c,x.ContextProvider=o,x.Element=r,x.ForwardRef=l,x.Fragment=n,x.Lazy=y,x.Memo=A,x.Portal=t,x.Profiler=s,x.StrictMode=a,x.Suspense=d,x.isAsyncMode=function(i){return P(i)||S(i)===f},x.isConcurrentMode=P,x.isContextConsumer=function(i){return S(i)===c},x.isContextProvider=function(i){return S(i)===o},x.isElement=function(i){return typeof i=="object"&&i!==null&&i.$$typeof===r},x.isForwardRef=function(i){return S(i)===l},x.isFragment=function(i){return S(i)===n},x.isLazy=function(i){return S(i)===y},x.isMemo=function(i){return S(i)===A},x.isPortal=function(i){return S(i)===t},x.isProfiler=function(i){return S(i)===s},x.isStrictMode=function(i){return S(i)===a},x.isSuspense=function(i){return S(i)===d},x.isValidElementType=function(i){return typeof i=="string"||typeof i=="function"||i===n||i===u||i===s||i===a||i===d||i===$||typeof i=="object"&&i!==null&&(i.$$typeof===y||i.$$typeof===A||i.$$typeof===o||i.$$typeof===c||i.$$typeof===l||i.$$typeof===C||i.$$typeof===g||i.$$typeof===w||i.$$typeof===p)},x.typeOf=S,x}var Me;function zr(){return Me||(Me=1,ce.exports=Dr()),ce.exports}var fe,Ne;function Wr(){if(Ne)return fe;Ne=1;var e=zr(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=n,s[e.Memo]=a;function o(y){return e.isMemo(y)?a:s[y.$$typeof]||r}var c=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,$=Object.prototype;function A(y,p,C){if(typeof p!="string"){if($){var g=d(p);g&&g!==$&&A(y,g,C)}var w=f(p);u&&(w=w.concat(u(p)));for(var S=o(y),P=o(p),i=0;i<w.length;++i){var b=w[i];if(!t[b]&&!(C&&C[b])&&!(P&&P[b])&&!(S&&S[b])){var v=l(p,b);try{c(y,b,v)}catch{}}}}return y}return fe=A,fe}Wr();var Hr=!0;function Ye(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):a&&(n+=a+" ")}),n}var xe=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||Hr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},we=function(r,t,n){xe(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var s=t;do r.insert(t===s?"."+a:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function qr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Vr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ur=/[A-Z]|^ms/g,Br=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Je=function(r){return r.charCodeAt(1)===45},Ie=function(r){return r!=null&&typeof r!="boolean"},ue=We(function(e){return Je(e)?e:e.replace(Ur,"-$&").toLowerCase()}),Fe=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(Br,function(n,a,s){return j={name:a,styles:s,next:j},a})}return Vr[r]!==1&&!Je(r)&&typeof t=="number"&&t!==0?t+"px":t};function J(e,r,t){if(t==null)return"";var n=t;if(n.__emotion_styles!==void 0)return n;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return j={name:a.name,styles:a.styles,next:j},a.name;var s=t;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)j={name:o.name,styles:o.styles,next:j},o=o.next;var c=s.styles+";";return c}return Gr(e,r,t)}case"function":{if(e!==void 0){var f=j,u=t(e);return j=f,J(e,r,u)}break}}var l=t;if(r==null)return l;var d=r[l];return d!==void 0?d:l}function Gr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=J(e,r,t[a])+";";else for(var s in t){var o=t[s];if(typeof o!="object"){var c=o;r!=null&&r[c]!==void 0?n+=s+"{"+r[c]+"}":Ie(c)&&(n+=ue(s)+":"+Fe(s,c)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(r==null||r[o[0]]===void 0))for(var f=0;f<o.length;f++)Ie(o[f])&&(n+=ue(s)+":"+Fe(s,o[f])+";");else{var u=J(e,r,o);switch(s){case"animation":case"animationName":{n+=ue(s)+":"+u+";";break}default:n+=s+"{"+u+"}"}}}return n}var je=/label:\s*([^\s;{]+)\s*(;|$)/g,j;function oe(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";j=void 0;var s=e[0];if(s==null||s.raw===void 0)n=!1,a+=J(t,r,s);else{var o=s;a+=o[0]}for(var c=1;c<e.length;c++)if(a+=J(t,r,e[c]),n){var f=s;a+=f[c]}je.lastIndex=0;for(var u="",l;(l=je.exec(a))!==null;)u+="-"+l[1];var d=qr(a)+u;return{name:d,styles:a,next:j}}var Xr=function(r){return r()},Ke=_e.useInsertionEffect?_e.useInsertionEffect:!1,Ze=Ke||Xr,Le=Ke||k.useLayoutEffect,Qe=k.createContext(typeof HTMLElement<"u"?Lr({key:"css"}):null);Qe.Provider;var Se=function(r){return k.forwardRef(function(t,n){var a=k.useContext(Qe);return r(t,a,n)})},Pe=k.createContext({}),Ce={}.hasOwnProperty,ye="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Yr=function(r,t){var n={};for(var a in t)Ce.call(t,a)&&(n[a]=t[a]);return n[ye]=r,n},Jr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return xe(t,n,a),Ze(function(){return we(t,n,a)}),null},Kr=Se(function(e,r,t){var n=e.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=e[ye],s=[n],o="";typeof e.className=="string"?o=Ye(r.registered,s,e.className):e.className!=null&&(o=e.className+" ");var c=oe(s,void 0,k.useContext(Pe));o+=r.key+"-"+c.name;var f={};for(var u in e)Ce.call(e,u)&&u!=="css"&&u!==ye&&(f[u]=e[u]);return f.className=o,t&&(f.ref=t),k.createElement(k.Fragment,null,k.createElement(Jr,{cache:r,serialized:c,isStringTag:typeof a=="string"}),k.createElement(a,f))}),Zr=Kr,Qr=function(r,t){var n=arguments;if(t==null||!Ce.call(t,"css"))return k.createElement.apply(void 0,n);var a=n.length,s=new Array(a);s[0]=Zr,s[1]=Yr(r,t);for(var o=2;o<a;o++)s[o]=n[o];return k.createElement.apply(null,s)};(function(e){var r;r||(r=e.JSX||(e.JSX={}))})(Qr);var De=Se(function(e,r){var t=e.styles,n=oe([t],void 0,k.useContext(Pe)),a=k.useRef();return Le(function(){var s=r.key+"-global",o=new r.sheet.constructor({key:s,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),c=!1,f=document.querySelector('style[data-emotion="'+s+" "+n.name+'"]');return r.sheet.tags.length&&(o.before=r.sheet.tags[0]),f!==null&&(c=!0,f.setAttribute("data-emotion",s),o.hydrate([f])),a.current=[o,c],function(){o.flush()}},[r]),Le(function(){var s=a.current,o=s[0],c=s[1];if(c){s[1]=!1;return}if(n.next!==void 0&&we(r,n.next,!0),o.tags.length){var f=o.tags[o.tags.length-1].nextElementSibling;o.before=f,o.flush()}r.insert("",n,o,!1)},[r,n.name]),null});function et(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return oe(r)}function xt(){var e=et.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function rt(e,r){if(e!=null){if(typeof e=="function"){e(r);return}try{e.current=r}catch{throw new Error(`Cannot assign value '${r}' to ref '${e}'`)}}}function tt(...e){return r=>{e.forEach(t=>{rt(t,r)})}}function nt(e){const r=Object.assign({},e);for(let t in r)r[t]===void 0&&delete r[t];return r}function at(e){return e.default||e}const[st,er]=nr({name:"ChakraContext",strict:!0,providerName:"<ChakraProvider />"});function wt(e){const{value:r,children:t}=e;return I.jsxs(st,{value:r,children:[!r._config.disableLayers&&I.jsx(De,{styles:r.layers.atRule}),I.jsx(De,{styles:[r.getPreflightCss(),r.getGlobalCss(),r.getTokenCss()]}),t]})}const le=(e,r)=>{const t=Object.getOwnPropertyDescriptors(e),n=Object.keys(t),a=o=>{const c={};for(let f=0;f<o.length;f++){const u=o[f];t[u]&&(Object.defineProperty(c,u,t[u]),delete t[u])}return c},s=o=>a(Array.isArray(o)?o:n.filter(o));return[r].map(s).concat(a(n))},ot=new Set(["htmlWidth","htmlHeight","htmlSize","htmlTranslate"]);function it(e){return typeof e=="string"&&ot.has(e)}function ct(e,r,t){const{css:n,isValidProperty:a}=er(),{children:s,...o}=e,c=k.useMemo(()=>{const[$,A]=le(o,w=>t(w,r.variantKeys)),[y,p]=le(A,r.variantKeys),[C,g]=le(p,a);return{forwardedProps:$,variantProps:y,styleProps:C,elementProps:g}},[r.variantKeys,t,o,a]),{css:f,...u}=c.styleProps,l=k.useMemo(()=>{const $={...c.variantProps};return r.variantKeys.includes("colorPalette")||($.colorPalette=o.colorPalette),r.variantKeys.includes("orientation")||($.orientation=o.orientation),r($)},[r,c.variantProps,o.colorPalette,o.orientation]);return{styles:k.useMemo(()=>n(l,...ft(f),u),[n,l,f,u]),props:{...c.forwardedProps,...c.elementProps,children:s}}}const ft=e=>(Array.isArray(e)?e:[e]).filter(Boolean).flat(),ut=at(fr),lt=ut,dt=e=>e!=="theme",pt=(e,r,t)=>{let n;if(r){const a=r.shouldForwardProp;n=e.__emotion_forwardProp&&a?s=>e.__emotion_forwardProp(s)&&a(s):a}return typeof n!="function"&&t&&(n=e.__emotion_forwardProp),n};let ht=typeof document<"u";const ze=({cache:e,serialized:r,isStringTag:t})=>{xe(e,r,t);const n=Ze(()=>we(e,r,t));if(!ht&&n!==void 0){let a=r.name,s=r.next;for(;s!==void 0;)a=G(a,s.name),s=s.next;return I.jsx("style",{"data-emotion":G(e.key,a),dangerouslySetInnerHTML:{__html:n},nonce:e.sheet.nonce})}return null},mt=(e,r={},t={})=>{const n=e.__emotion_real===e,a=n&&e.__emotion_base||e;let s,o;t!==void 0&&(s=t.label,o=t.target);let c=[];const f=Se((u,l,d)=>{var Ae;const{cva:$,isValidProperty:A}=er(),y=r.__cva__?r:$(r),p=gt(e.__emotion_cva,y),C=_=>(D,U)=>_.includes(D)?!0:!(U!=null&&U.includes(D))&&!A(D);!t.shouldForwardProp&&t.forwardProps&&(t.shouldForwardProp=C(t.forwardProps));const g=(_,D)=>{const U=typeof e=="string"&&e.charCodeAt(0)>96?lt:dt,rr=!(D!=null&&D.includes(_))&&!A(_);return U(_)&&rr},w=pt(e,t,n)||g,S=k.useMemo(()=>Object.assign({},t.defaultProps,nt(u)),[u]),{props:P,styles:i}=ct(S,p,w);let b="",v=[i],q=P;if(P.theme==null){q={};for(let _ in P)q[_]=P[_];q.theme=k.useContext(Pe)}typeof P.className=="string"?b=Ye(l.registered,v,P.className):P.className!=null&&(b=G(b,P.className));const ie=oe(c.concat(v),l.registered,q);b=G(b,`${l.key}-${ie.name}`),o!==void 0&&(b=G(b,o));const ke=!w("as");let V=ke&&P.as||a,O={};for(let _ in P)if(!(ke&&_==="as")){if(it(_)){const D=_.replace("html","").toLowerCase();O[D]=P[_];continue}w(_)&&(O[_]=P[_])}O.className=b.trim(),O.ref=d;const $e=t.forwardAsChild||((Ae=t.forwardProps)==null?void 0:Ae.includes("asChild"));if(P.asChild&&!$e){const _=k.Children.only(P.children);V=_.type,O.children=null,Reflect.deleteProperty(O,"asChild"),O=ir(O,_.props),O.ref=tt(d,_.ref)}return O.as&&$e?(O.as=void 0,I.jsxs(k.Fragment,{children:[I.jsx(ze,{cache:l,serialized:ie,isStringTag:typeof V=="string"}),I.jsx(V,{asChild:!0,...O,children:I.jsx(P.as,{children:O.children})})]})):I.jsxs(k.Fragment,{children:[I.jsx(ze,{cache:l,serialized:ie,isStringTag:typeof V=="string"}),I.jsx(V,{...O})]})});return f.displayName=s!==void 0?s:`chakra(${typeof a=="string"?a:a.displayName||a.name||"Component"})`,f.__emotion_real=f,f.__emotion_base=a,f.__emotion_forwardProp=t.shouldForwardProp,f.__emotion_cva=r,Object.defineProperty(f,"toString",{value(){return`.${o}`}}),f},de=mt.bind(),pe=new Map,yt=new Proxy(de,{apply(e,r,t){return de(...t)},get(e,r){return pe.has(r)||pe.set(r,de(r)),pe.get(r)}}),St=yt,gt=(e,r)=>e&&!r?e:!e&&r?r:e.merge(r);export{wt as C,G as a,nt as b,St as c,nr as d,et as e,tt as f,Qr as j,xt as k,ir as m,le as s,er as u};
