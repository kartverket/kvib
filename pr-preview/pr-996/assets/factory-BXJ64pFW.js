import{j as I}from"./jsx-runtime-D_zvdyIk.js";import{r as k,R as _e}from"./index-Bj2TM2QZ.js";function nr(e,r){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`}function ar(e={}){const{name:r,strict:t=!0,hookName:n="useContext",providerName:a="Provider",errorMessage:o,defaultValue:s}=e,c=k.createContext(s);c.displayName=r;function f(){var l;const u=k.useContext(c);if(!u&&t){const d=new Error(o??nr(n,a));throw d.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,d,f),d}return u}return[c.Provider,f,c]}function or(...e){return function(...t){e.forEach(n=>n==null?void 0:n(...t))}}const sr=(...e)=>e.map(r=>{var t;return(t=r==null?void 0:r.trim)==null?void 0:t.call(r)}).filter(Boolean).join(" "),ir=/^on[A-Z]/;function cr(...e){let r={};for(let t of e){for(let n in r){if(ir.test(n)&&typeof r[n]=="function"&&typeof t[n]=="function"){r[n]=or(r[n],t[n]);continue}if(n==="className"||n==="class"){r[n]=sr(r[n],t[n]);continue}if(n==="style"){r[n]=Object.assign({},r[n]??{},t[n]??{});continue}r[n]=t[n]!==void 0?t[n]:r[n]}for(let n in t)r[n]===void 0&&(r[n]=t[n])}return r}const X=(...e)=>e.filter(Boolean).map(r=>r.trim()).join(" ");function He(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var fr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ur=He(function(e){return fr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function lr(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function dr(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var pr=function(){function e(t){var n=this;this._insertTag=function(a){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,o),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(dr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=lr(a);try{o.insertRule(n,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},e}(),T="-ms-",te="-moz-",h="-webkit-",qe="comm",ge="rule",ve="decl",hr="@import",Ve="@keyframes",mr="@layer",yr=Math.abs,ne=String.fromCharCode,gr=Object.assign;function vr(e,r){return R(e,0)^45?(((r<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function Ue(e){return e.trim()}function br(e,r){return(e=r.exec(e))?e[0]:e}function m(e,r,t){return e.replace(r,t)}function he(e,r){return e.indexOf(r)}function R(e,r){return e.charCodeAt(r)|0}function G(e,r,t){return e.slice(r,t)}function F(e){return e.length}function be(e){return e.length}function Z(e,r){return r.push(e),e}function xr(e,r){return e.map(r).join("")}var ae=1,D=1,Be=0,M=0,E=0,H="";function oe(e,r,t,n,a,o,s){return{value:e,root:r,parent:t,type:n,props:a,children:o,line:ae,column:D,length:s,return:""}}function B(e,r){return gr(oe("",null,null,"",null,null,0),e,{length:-e.length},r)}function wr(){return E}function Sr(){return E=M>0?R(H,--M):0,D--,E===10&&(D=1,ae--),E}function N(){return E=M<Be?R(H,M++):0,D++,E===10&&(D=1,ae++),E}function L(){return R(H,M)}function Q(){return M}function K(e,r){return G(H,e,r)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xe(e){return ae=D=1,Be=F(H=e),M=0,[]}function Ge(e){return H="",e}function ee(e){return Ue(K(M-1,me(e===91?e+2:e===40?e+1:e)))}function Pr(e){for(;(E=L())&&E<33;)N();return Y(e)>2||Y(E)>3?"":" "}function kr(e,r){for(;--r&&N()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return K(e,Q()+(r<6&&L()==32&&N()==32))}function me(e){for(;N();)switch(E){case e:return M;case 34:case 39:e!==34&&e!==39&&me(E);break;case 40:e===41&&me(e);break;case 92:N();break}return M}function Cr(e,r){for(;N()&&e+E!==57;)if(e+E===84&&L()===47)break;return"/*"+K(r,M-1)+"*"+ne(e===47?e:N())}function $r(e){for(;!Y(L());)N();return K(e,M)}function Ar(e){return Ge(re("",null,null,null,[""],e=Xe(e),0,[0],e))}function re(e,r,t,n,a,o,s,c,f){for(var u=0,l=0,d=s,$=0,A=0,y=0,p=1,C=1,g=1,w=0,S="",P=a,i=o,v=n,b=S;C;)switch(y=w,w=N()){case 40:if(y!=108&&R(b,d-1)==58){he(b+=m(ee(w),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:b+=ee(w);break;case 9:case 10:case 13:case 32:b+=Pr(y);break;case 92:b+=kr(Q()-1,7);continue;case 47:switch(L()){case 42:case 47:Z(_r(Cr(N(),Q()),r,t),f);break;default:b+="/"}break;case 123*p:c[u++]=F(b)*g;case 125*p:case 59:case 0:switch(w){case 0:case 125:C=0;case 59+l:g==-1&&(b=m(b,/\f/g,"")),A>0&&F(b)-d&&Z(A>32?Re(b+";",n,t,d-1):Re(m(b," ","")+";",n,t,d-2),f);break;case 59:b+=";";default:if(Z(v=Ee(b,r,t,u,l,a,c,S,P=[],i=[],d),o),w===123)if(l===0)re(b,r,v,v,P,o,d,c,i);else switch($===99&&R(b,3)===110?100:$){case 100:case 108:case 109:case 115:re(e,v,v,n&&Z(Ee(e,v,v,0,0,a,c,S,a,P=[],d),i),a,i,d,c,n?P:i);break;default:re(b,v,v,v,[""],i,0,c,i)}}u=l=A=0,p=g=1,S=b="",d=s;break;case 58:d=1+F(b),A=y;default:if(p<1){if(w==123)--p;else if(w==125&&p++==0&&Sr()==125)continue}switch(b+=ne(w),w*p){case 38:g=l>0?1:(b+="\f",-1);break;case 44:c[u++]=(F(b)-1)*g,g=1;break;case 64:L()===45&&(b+=ee(N())),$=L(),l=d=F(S=b+=$r(Q())),w++;break;case 45:y===45&&F(b)==2&&(p=0)}}return o}function Ee(e,r,t,n,a,o,s,c,f,u,l){for(var d=a-1,$=a===0?o:[""],A=be($),y=0,p=0,C=0;y<n;++y)for(var g=0,w=G(e,d+1,d=yr(p=s[y])),S=e;g<A;++g)(S=Ue(p>0?$[g]+" "+w:m(w,/&\f/g,$[g])))&&(f[C++]=S);return oe(e,r,t,a===0?ge:c,f,u,l)}function _r(e,r,t){return oe(e,r,t,qe,ne(wr()),G(e,2,-2),0)}function Re(e,r,t,n){return oe(e,r,t,ve,G(e,0,n),G(e,n+1,-1),n)}function z(e,r){for(var t="",n=be(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Er(e,r,t,n){switch(e.type){case mr:if(e.children.length)break;case hr:case ve:return e.return=e.return||e.value;case qe:return"";case Ve:return e.return=e.value+"{"+z(e.children,n)+"}";case ge:e.value=e.props.join(",")}return F(t=z(e.children,n))?e.return=e.value+"{"+t+"}":""}function Rr(e){var r=be(e);return function(t,n,a,o){for(var s="",c=0;c<r;c++)s+=e[c](t,n,a,o)||"";return s}}function Tr(e){return function(r){r.root||(r=r.return)&&e(r)}}var Or=function(r,t,n){for(var a=0,o=0;a=o,o=L(),a===38&&o===12&&(t[n]=1),!Y(o);)N();return K(r,M)},Mr=function(r,t){var n=-1,a=44;do switch(Y(a)){case 0:a===38&&L()===12&&(t[n]=1),r[n]+=Or(M-1,t,n);break;case 2:r[n]+=ee(a);break;case 4:if(a===44){r[++n]=L()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=ne(a)}while(a=N());return r},Nr=function(r,t){return Ge(Mr(Xe(r),t))},Te=new WeakMap,Ir=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!Te.get(n))&&!a){Te.set(r,!0);for(var o=[],s=Nr(t,o),c=n.props,f=0,u=0;f<s.length;f++)for(var l=0;l<c.length;l++,u++)r.props[u]=o[f]?s[f].replace(/&\f/g,c[l]):c[l]+" "+s[f]}}},Fr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ye(e,r){switch(vr(e,r)){case 5103:return h+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return h+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return h+e+te+e+T+e+e;case 6828:case 4268:return h+e+T+e+e;case 6165:return h+e+T+"flex-"+e+e;case 5187:return h+e+m(e,/(\w+).+(:[^]+)/,h+"box-$1$2"+T+"flex-$1$2")+e;case 5443:return h+e+T+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return h+e+T+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return h+e+T+m(e,"shrink","negative")+e;case 5292:return h+e+T+m(e,"basis","preferred-size")+e;case 6060:return h+"box-"+m(e,"-grow","")+h+e+T+m(e,"grow","positive")+e;case 4554:return h+m(e,/([^-])(transform)/g,"$1"+h+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,h+"$1"),/(image-set)/,h+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,h+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,h+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+h+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,h+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(e)-1-r>6)switch(R(e,r+1)){case 109:if(R(e,r+4)!==45)break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+h+"$2-$3$1"+te+(R(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~he(e,"stretch")?Ye(m(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(R(e,r+1)!==115)break;case 6444:switch(R(e,F(e)-3-(~he(e,"!important")&&10))){case 107:return m(e,":",":"+h)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+h+(R(e,14)===45?"inline-":"")+"box$3$1"+h+"$2$3$1"+T+"$2box$3")+e}break;case 5936:switch(R(e,r+11)){case 114:return h+e+T+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return h+e+T+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return h+e+T+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return h+e+T+e+e}return e}var jr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ve:r.return=Ye(r.value,r.length);break;case Ve:return z([B(r,{value:m(r.value,"@","@"+h)})],a);case ge:if(r.length)return xr(r.props,function(o){switch(br(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return z([B(r,{props:[m(o,/:(read-\w+)/,":"+te+"$1")]})],a);case"::placeholder":return z([B(r,{props:[m(o,/:(plac\w+)/,":"+h+"input-$1")]}),B(r,{props:[m(o,/:(plac\w+)/,":"+te+"$1")]}),B(r,{props:[m(o,/:(plac\w+)/,T+"input-$1")]})],a)}return""})}},Lr=[jr],Wr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(p){var C=p.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var a=r.stylisPlugins||Lr,o={},s,c=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(p){for(var C=p.getAttribute("data-emotion").split(" "),g=1;g<C.length;g++)o[C[g]]=!0;c.push(p)});var f,u=[Ir,Fr];{var l,d=[Er,Tr(function(p){l.insert(p)})],$=Rr(u.concat(a,d)),A=function(C){return z(Ar(C),$)};f=function(C,g,w,S){l=w,A(C?C+"{"+g.styles+"}":g.styles),S&&(y.inserted[g.name]=!0)}}var y={key:t,sheet:new pr({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:f};return y.sheet.hydrate(c),y},ce={exports:{}},x={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function zr(){if(Oe)return x;Oe=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,$=e?Symbol.for("react.suspense_list"):60120,A=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,C=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function S(i){if(typeof i=="object"&&i!==null){var v=i.$$typeof;switch(v){case r:switch(i=i.type,i){case f:case u:case n:case o:case a:case d:return i;default:switch(i=i&&i.$$typeof,i){case c:case l:case y:case A:case s:return i;default:return v}}case t:return v}}}function P(i){return S(i)===u}return x.AsyncMode=f,x.ConcurrentMode=u,x.ContextConsumer=c,x.ContextProvider=s,x.Element=r,x.ForwardRef=l,x.Fragment=n,x.Lazy=y,x.Memo=A,x.Portal=t,x.Profiler=o,x.StrictMode=a,x.Suspense=d,x.isAsyncMode=function(i){return P(i)||S(i)===f},x.isConcurrentMode=P,x.isContextConsumer=function(i){return S(i)===c},x.isContextProvider=function(i){return S(i)===s},x.isElement=function(i){return typeof i=="object"&&i!==null&&i.$$typeof===r},x.isForwardRef=function(i){return S(i)===l},x.isFragment=function(i){return S(i)===n},x.isLazy=function(i){return S(i)===y},x.isMemo=function(i){return S(i)===A},x.isPortal=function(i){return S(i)===t},x.isProfiler=function(i){return S(i)===o},x.isStrictMode=function(i){return S(i)===a},x.isSuspense=function(i){return S(i)===d},x.isValidElementType=function(i){return typeof i=="string"||typeof i=="function"||i===n||i===u||i===o||i===a||i===d||i===$||typeof i=="object"&&i!==null&&(i.$$typeof===y||i.$$typeof===A||i.$$typeof===s||i.$$typeof===c||i.$$typeof===l||i.$$typeof===C||i.$$typeof===g||i.$$typeof===w||i.$$typeof===p)},x.typeOf=S,x}var Me;function Dr(){return Me||(Me=1,ce.exports=zr()),ce.exports}var fe,Ne;function Hr(){if(Ne)return fe;Ne=1;var e=Dr(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=n,o[e.Memo]=a;function s(y){return e.isMemo(y)?a:o[y.$$typeof]||r}var c=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,$=Object.prototype;function A(y,p,C){if(typeof p!="string"){if($){var g=d(p);g&&g!==$&&A(y,g,C)}var w=f(p);u&&(w=w.concat(u(p)));for(var S=s(y),P=s(p),i=0;i<w.length;++i){var v=w[i];if(!t[v]&&!(C&&C[v])&&!(P&&P[v])&&!(S&&S[v])){var b=l(p,v);try{c(y,v,b)}catch{}}}}return y}return fe=A,fe}Hr();var qr=!0;function Je(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):a&&(n+=a+" ")}),n}var xe=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||qr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},we=function(r,t,n){xe(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var o=t;do r.insert(t===o?"."+a:"",o,r.sheet,!0),o=o.next;while(o!==void 0)}};function Vr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Ur={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Br=/[A-Z]|^ms/g,Xr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ke=function(r){return r.charCodeAt(1)===45},Ie=function(r){return r!=null&&typeof r!="boolean"},ue=He(function(e){return Ke(e)?e:e.replace(Br,"-$&").toLowerCase()}),Fe=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(Xr,function(n,a,o){return j={name:a,styles:o,next:j},a})}return Ur[r]!==1&&!Ke(r)&&typeof t=="number"&&t!==0?t+"px":t};function J(e,r,t){if(t==null)return"";var n=t;if(n.__emotion_styles!==void 0)return n;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return j={name:a.name,styles:a.styles,next:j},a.name;var o=t;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)j={name:s.name,styles:s.styles,next:j},s=s.next;var c=o.styles+";";return c}return Gr(e,r,t)}case"function":{if(e!==void 0){var f=j,u=t(e);return j=f,J(e,r,u)}break}}var l=t;if(r==null)return l;var d=r[l];return d!==void 0?d:l}function Gr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=J(e,r,t[a])+";";else for(var o in t){var s=t[o];if(typeof s!="object"){var c=s;r!=null&&r[c]!==void 0?n+=o+"{"+r[c]+"}":Ie(c)&&(n+=ue(o)+":"+Fe(o,c)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var f=0;f<s.length;f++)Ie(s[f])&&(n+=ue(o)+":"+Fe(o,s[f])+";");else{var u=J(e,r,s);switch(o){case"animation":case"animationName":{n+=ue(o)+":"+u+";";break}default:n+=o+"{"+u+"}"}}}return n}var je=/label:\s*([^\s;{]+)\s*(;|$)/g,j;function se(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";j=void 0;var o=e[0];if(o==null||o.raw===void 0)n=!1,a+=J(t,r,o);else{var s=o;a+=s[0]}for(var c=1;c<e.length;c++)if(a+=J(t,r,e[c]),n){var f=o;a+=f[c]}je.lastIndex=0;for(var u="",l;(l=je.exec(a))!==null;)u+="-"+l[1];var d=Vr(a)+u;return{name:d,styles:a,next:j}}var Yr=function(r){return r()},Ze=_e.useInsertionEffect?_e.useInsertionEffect:!1,Qe=Ze||Yr,Le=Ze||k.useLayoutEffect,er=k.createContext(typeof HTMLElement<"u"?Wr({key:"css"}):null);er.Provider;var Se=function(r){return k.forwardRef(function(t,n){var a=k.useContext(er);return r(t,a,n)})},Pe=k.createContext({}),ke={}.hasOwnProperty,ye="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Jr=function(r,t){var n={};for(var a in t)ke.call(t,a)&&(n[a]=t[a]);return n[ye]=r,n},Kr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return xe(t,n,a),Qe(function(){return we(t,n,a)}),null},Zr=Se(function(e,r,t){var n=e.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=e[ye],o=[n],s="";typeof e.className=="string"?s=Je(r.registered,o,e.className):e.className!=null&&(s=e.className+" ");var c=se(o,void 0,k.useContext(Pe));s+=r.key+"-"+c.name;var f={};for(var u in e)ke.call(e,u)&&u!=="css"&&u!==ye&&(f[u]=e[u]);return f.className=s,t&&(f.ref=t),k.createElement(k.Fragment,null,k.createElement(Kr,{cache:r,serialized:c,isStringTag:typeof a=="string"}),k.createElement(a,f))}),Qr=Zr,We=function(r,t){var n=arguments;if(t==null||!ke.call(t,"css"))return k.createElement.apply(void 0,n);var a=n.length,o=new Array(a);o[0]=Qr,o[1]=Jr(r,t);for(var s=2;s<a;s++)o[s]=n[s];return k.createElement.apply(null,o)};(function(e){var r;r||(r=e.JSX||(e.JSX={}))})(We||(We={}));var ze=Se(function(e,r){var t=e.styles,n=se([t],void 0,k.useContext(Pe)),a=k.useRef();return Le(function(){var o=r.key+"-global",s=new r.sheet.constructor({key:o,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),c=!1,f=document.querySelector('style[data-emotion="'+o+" "+n.name+'"]');return r.sheet.tags.length&&(s.before=r.sheet.tags[0]),f!==null&&(c=!0,f.setAttribute("data-emotion",o),s.hydrate([f])),a.current=[s,c],function(){s.flush()}},[r]),Le(function(){var o=a.current,s=o[0],c=o[1];if(c){o[1]=!1;return}if(n.next!==void 0&&we(r,n.next,!0),s.tags.length){var f=s.tags[s.tags.length-1].nextElementSibling;s.before=f,s.flush()}r.insert("",n,s,!1)},[r,n.name]),null});function et(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return se(r)}function kt(){var e=et.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function rt(e,r){if(e!=null){if(typeof e=="function"){e(r);return}try{e.current=r}catch{throw new Error(`Cannot assign value '${r}' to ref '${e}'`)}}}function tt(...e){return r=>{e.forEach(t=>{rt(t,r)})}}function nt(e){const r=Object.assign({},e);for(let t in r)r[t]===void 0&&delete r[t];return r}function at(e){return e.default||e}const Ct=e=>e!=null&&typeof e=="object"&&!Array.isArray(e),$t=e=>/^var\(--.+\)$/.test(e),ot=e=>typeof e=="string",st=e=>typeof e=="function";function it(e){var t;const r=k.version;return!ot(r)||r.startsWith("18.")?e==null?void 0:e.ref:(t=e==null?void 0:e.props)==null?void 0:t.ref}const[ct,rr]=ar({name:"ChakraContext",strict:!0,providerName:"<ChakraProvider />"});function At(e){const{value:r,children:t}=e;return I.jsxs(ct,{value:r,children:[!r._config.disableLayers&&I.jsx(ze,{styles:r.layers.atRule}),I.jsx(ze,{styles:r._global}),t]})}const ft=(e,r)=>{const t={},n={},a=Object.keys(e);for(const o of a)r(o)?n[o]=e[o]:t[o]=e[o];return[n,t]},le=(e,r)=>{const t=st(r)?r:n=>r.includes(n);return ft(e,t)},ut=new Set(["htmlWidth","htmlHeight","htmlSize","htmlTranslate"]);function lt(e){return typeof e=="string"&&ut.has(e)}function dt(e,r,t){const{css:n,isValidProperty:a}=rr(),{children:o,...s}=e,c=k.useMemo(()=>{const[$,A]=le(s,w=>t(w,r.variantKeys)),[y,p]=le(A,r.variantKeys),[C,g]=le(p,a);return{forwardedProps:$,variantProps:y,styleProps:C,elementProps:g}},[r.variantKeys,t,s,a]),{css:f,...u}=c.styleProps,l=k.useMemo(()=>{const $={...c.variantProps};return r.variantKeys.includes("colorPalette")||($.colorPalette=s.colorPalette),r.variantKeys.includes("orientation")||($.orientation=s.orientation),r($)},[r,c.variantProps,s.colorPalette,s.orientation]);return{styles:k.useMemo(()=>n(l,...pt(f),u),[n,l,f,u]),props:{...c.forwardedProps,...c.elementProps,children:o}}}const pt=e=>(Array.isArray(e)?e:[e]).filter(Boolean).flat(),ht=at(ur),mt=ht,yt=e=>e!=="theme",gt=(e,r,t)=>{let n;if(r){const a=r.shouldForwardProp;n=e.__emotion_forwardProp&&a?o=>e.__emotion_forwardProp(o)&&a(o):a}return typeof n!="function"&&t&&(n=e.__emotion_forwardProp),n};let vt=typeof document<"u";const De=({cache:e,serialized:r,isStringTag:t})=>{xe(e,r,t);const n=Qe(()=>we(e,r,t));if(!vt&&n!==void 0){let a=r.name,o=r.next;for(;o!==void 0;)a=X(a,o.name),o=o.next;return I.jsx("style",{"data-emotion":X(e.key,a),dangerouslySetInnerHTML:{__html:n},nonce:e.sheet.nonce})}return null},bt=(e,r={},t={})=>{const n=e.__emotion_real===e,a=n&&e.__emotion_base||e;let o,s;t!==void 0&&(o=t.label,s=t.target);let c=[];const f=Se((u,l,d)=>{var Ae;const{cva:$,isValidProperty:A}=rr(),y=r.__cva__?r:$(r),p=wt(e.__emotion_cva,y),C=_=>(W,U)=>_.includes(W)?!0:!(U!=null&&U.includes(W))&&!A(W);!t.shouldForwardProp&&t.forwardProps&&(t.shouldForwardProp=C(t.forwardProps));const g=(_,W)=>{const U=typeof e=="string"&&e.charCodeAt(0)>96?mt:yt,tr=!(W!=null&&W.includes(_))&&!A(_);return U(_)&&tr},w=gt(e,t,n)||g,S=k.useMemo(()=>Object.assign({},t.defaultProps,nt(u)),[u]),{props:P,styles:i}=dt(S,p,w);let v="",b=[i],q=P;if(P.theme==null){q={};for(let _ in P)q[_]=P[_];q.theme=k.useContext(Pe)}typeof P.className=="string"?v=Je(l.registered,b,P.className):P.className!=null&&(v=X(v,P.className));const ie=se(c.concat(b),l.registered,q);v=X(v,`${l.key}-${ie.name}`),s!==void 0&&(v=X(v,s));const Ce=!w("as");let V=Ce&&P.as||a,O={};for(let _ in P)if(!(Ce&&_==="as")){if(lt(_)){const W=_.replace("html","").toLowerCase();O[W]=P[_];continue}w(_)&&(O[_]=P[_])}O.className=v.trim(),O.ref=d;const $e=t.forwardAsChild||((Ae=t.forwardProps)==null?void 0:Ae.includes("asChild"));if(P.asChild&&!$e){const _=k.Children.only(P.children);V=_.type,O.children=null,Reflect.deleteProperty(O,"asChild"),O=cr(O,_.props),O.ref=tt(d,it(_))}return O.as&&$e?(O.as=void 0,I.jsxs(k.Fragment,{children:[I.jsx(De,{cache:l,serialized:ie,isStringTag:typeof V=="string"}),I.jsx(V,{asChild:!0,...O,children:I.jsx(P.as,{children:O.children})})]})):I.jsxs(k.Fragment,{children:[I.jsx(De,{cache:l,serialized:ie,isStringTag:typeof V=="string"}),I.jsx(V,{...O})]})});return f.displayName=o!==void 0?o:`chakra(${typeof a=="string"?a:a.displayName||a.name||"Component"})`,f.__emotion_real=f,f.__emotion_base=a,f.__emotion_forwardProp=t.shouldForwardProp,f.__emotion_cva=r,Object.defineProperty(f,"toString",{value(){return`.${s}`}}),f},de=bt.bind(),pe=new Map,xt=new Proxy(de,{apply(e,r,t){return de(...t)},get(e,r){return pe.has(r)||pe.set(r,de(r)),pe.get(r)}}),_t=xt,wt=(e,r)=>e&&!r?e:!e&&r?r:e.merge(r);export{At as C,X as a,nt as b,_t as c,ar as d,$t as e,ot as f,st as g,et as h,Ct as i,We as j,kt as k,tt as l,cr as m,le as s,rr as u};
