const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-18-CZS4diu7.js","./index-B3RgaFea.js","./index-Czf9F28i.js"])))=>i.map(i=>d[i]);
import{_ as ge}from"./iframe-D0Y48Mim.js";import{_ as xe,a as we,b as _}from"./chunk-XP5HYGXS-BGCqD1aY.js";import{a as je,e as z,r as H,R as Ce}from"./index-B3RgaFea.js";var le={exports:{}},oe={};/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re;function Pe(){if(Re)return oe;Re=1;var E=je(),u=!1;return oe.act=function(s){return u===!1&&(u=!0,console.error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")),E.act(s)},oe}var $e;function De(){return $e||($e=1,le.exports=Pe()),le.exports}var qe=De(),ue={};const{global:ye}=__STORYBOOK_MODULE_GLOBAL__;var J=_({"../../node_modules/semver/internal/constants.js"(E,u){var s="2.0.0",l=Number.MAX_SAFE_INTEGER||9007199254740991,i=16,t=250,o=["major","premajor","minor","preminor","patch","prepatch","prerelease"];u.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:i,MAX_SAFE_BUILD_LENGTH:t,MAX_SAFE_INTEGER:l,RELEASE_TYPES:o,SEMVER_SPEC_VERSION:s,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}}}),Q=_({"../../node_modules/semver/internal/debug.js"(E,u){var s=typeof process=="object"&&ue&&ue.NODE_DEBUG&&/\bsemver\b/i.test(ue.NODE_DEBUG)?(...l)=>console.error("SEMVER",...l):()=>{};u.exports=s}}),K=_({"../../node_modules/semver/internal/re.js"(E,u){var{MAX_SAFE_COMPONENT_LENGTH:s,MAX_SAFE_BUILD_LENGTH:l,MAX_LENGTH:i}=J(),t=Q();E=u.exports={};var o=E.re=[],h=E.safeRe=[],e=E.src=[],r=E.t={},L=0,a="[a-zA-Z0-9-]",p=[["\\s",1],["\\d",i],[a,l]],c=f=>{for(let[T,S]of p)f=f.split(`${T}*`).join(`${T}{0,${S}}`).split(`${T}+`).join(`${T}{1,${S}}`);return f},n=(f,T,S)=>{let g=c(T),C=L++;t(f,C,T),r[f]=C,e[C]=T,o[C]=new RegExp(T,S?"g":void 0),h[C]=new RegExp(g,S?"g":void 0)};n("NUMERICIDENTIFIER","0|[1-9]\\d*"),n("NUMERICIDENTIFIERLOOSE","\\d+"),n("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${a}*`),n("MAINVERSION",`(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})`),n("MAINVERSIONLOOSE",`(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})`),n("PRERELEASEIDENTIFIER",`(?:${e[r.NUMERICIDENTIFIER]}|${e[r.NONNUMERICIDENTIFIER]})`),n("PRERELEASEIDENTIFIERLOOSE",`(?:${e[r.NUMERICIDENTIFIERLOOSE]}|${e[r.NONNUMERICIDENTIFIER]})`),n("PRERELEASE",`(?:-(${e[r.PRERELEASEIDENTIFIER]}(?:\\.${e[r.PRERELEASEIDENTIFIER]})*))`),n("PRERELEASELOOSE",`(?:-?(${e[r.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[r.PRERELEASEIDENTIFIERLOOSE]})*))`),n("BUILDIDENTIFIER",`${a}+`),n("BUILD",`(?:\\+(${e[r.BUILDIDENTIFIER]}(?:\\.${e[r.BUILDIDENTIFIER]})*))`),n("FULLPLAIN",`v?${e[r.MAINVERSION]}${e[r.PRERELEASE]}?${e[r.BUILD]}?`),n("FULL",`^${e[r.FULLPLAIN]}$`),n("LOOSEPLAIN",`[v=\\s]*${e[r.MAINVERSIONLOOSE]}${e[r.PRERELEASELOOSE]}?${e[r.BUILD]}?`),n("LOOSE",`^${e[r.LOOSEPLAIN]}$`),n("GTLT","((?:<|>)?=?)"),n("XRANGEIDENTIFIERLOOSE",`${e[r.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),n("XRANGEIDENTIFIER",`${e[r.NUMERICIDENTIFIER]}|x|X|\\*`),n("XRANGEPLAIN",`[v=\\s]*(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:${e[r.PRERELEASE]})?${e[r.BUILD]}?)?)?`),n("XRANGEPLAINLOOSE",`[v=\\s]*(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:${e[r.PRERELEASELOOSE]})?${e[r.BUILD]}?)?)?`),n("XRANGE",`^${e[r.GTLT]}\\s*${e[r.XRANGEPLAIN]}$`),n("XRANGELOOSE",`^${e[r.GTLT]}\\s*${e[r.XRANGEPLAINLOOSE]}$`),n("COERCEPLAIN",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?`),n("COERCE",`${e[r.COERCEPLAIN]}(?:$|[^\\d])`),n("COERCEFULL",e[r.COERCEPLAIN]+`(?:${e[r.PRERELEASE]})?(?:${e[r.BUILD]})?(?:$|[^\\d])`),n("COERCERTL",e[r.COERCE],!0),n("COERCERTLFULL",e[r.COERCEFULL],!0),n("LONETILDE","(?:~>?)"),n("TILDETRIM",`(\\s*)${e[r.LONETILDE]}\\s+`,!0),E.tildeTrimReplace="$1~",n("TILDE",`^${e[r.LONETILDE]}${e[r.XRANGEPLAIN]}$`),n("TILDELOOSE",`^${e[r.LONETILDE]}${e[r.XRANGEPLAINLOOSE]}$`),n("LONECARET","(?:\\^)"),n("CARETTRIM",`(\\s*)${e[r.LONECARET]}\\s+`,!0),E.caretTrimReplace="$1^",n("CARET",`^${e[r.LONECARET]}${e[r.XRANGEPLAIN]}$`),n("CARETLOOSE",`^${e[r.LONECARET]}${e[r.XRANGEPLAINLOOSE]}$`),n("COMPARATORLOOSE",`^${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]})$|^$`),n("COMPARATOR",`^${e[r.GTLT]}\\s*(${e[r.FULLPLAIN]})$|^$`),n("COMPARATORTRIM",`(\\s*)${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]}|${e[r.XRANGEPLAIN]})`,!0),E.comparatorTrimReplace="$1$2$3",n("HYPHENRANGE",`^\\s*(${e[r.XRANGEPLAIN]})\\s+-\\s+(${e[r.XRANGEPLAIN]})\\s*$`),n("HYPHENRANGELOOSE",`^\\s*(${e[r.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[r.XRANGEPLAINLOOSE]})\\s*$`),n("STAR","(<|>)?=?\\s*\\*"),n("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),n("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}}),Ee=_({"../../node_modules/semver/internal/parse-options.js"(E,u){var s=Object.freeze({loose:!0}),l=Object.freeze({}),i=t=>t?typeof t!="object"?s:t:l;u.exports=i}}),_e=_({"../../node_modules/semver/internal/identifiers.js"(E,u){var s=/^[0-9]+$/,l=(t,o)=>{let h=s.test(t),e=s.test(o);return h&&e&&(t=+t,o=+o),t===o?0:h&&!e?-1:e&&!h?1:t<o?-1:1},i=(t,o)=>l(o,t);u.exports={compareIdentifiers:l,rcompareIdentifiers:i}}}),y=_({"../../node_modules/semver/classes/semver.js"(E,u){var s=Q(),{MAX_LENGTH:l,MAX_SAFE_INTEGER:i}=J(),{safeRe:t,t:o}=K(),h=Ee(),{compareIdentifiers:e}=_e(),r=class X{constructor(a,p){if(p=h(p),a instanceof X){if(a.loose===!!p.loose&&a.includePrerelease===!!p.includePrerelease)return a;a=a.version}else if(typeof a!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof a}".`);if(a.length>l)throw new TypeError(`version is longer than ${l} characters`);s("SemVer",a,p),this.options=p,this.loose=!!p.loose,this.includePrerelease=!!p.includePrerelease;let c=a.trim().match(p.loose?t[o.LOOSE]:t[o.FULL]);if(!c)throw new TypeError(`Invalid Version: ${a}`);if(this.raw=a,this.major=+c[1],this.minor=+c[2],this.patch=+c[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");c[4]?this.prerelease=c[4].split(".").map(n=>{if(/^[0-9]+$/.test(n)){let f=+n;if(f>=0&&f<i)return f}return n}):this.prerelease=[],this.build=c[5]?c[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(a){if(s("SemVer.compare",this.version,this.options,a),!(a instanceof X)){if(typeof a=="string"&&a===this.version)return 0;a=new X(a,this.options)}return a.version===this.version?0:this.compareMain(a)||this.comparePre(a)}compareMain(a){return a instanceof X||(a=new X(a,this.options)),e(this.major,a.major)||e(this.minor,a.minor)||e(this.patch,a.patch)}comparePre(a){if(a instanceof X||(a=new X(a,this.options)),this.prerelease.length&&!a.prerelease.length)return-1;if(!this.prerelease.length&&a.prerelease.length)return 1;if(!this.prerelease.length&&!a.prerelease.length)return 0;let p=0;do{let c=this.prerelease[p],n=a.prerelease[p];if(s("prerelease compare",p,c,n),c===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(c===void 0)return-1;if(c!==n)return e(c,n)}while(++p)}compareBuild(a){a instanceof X||(a=new X(a,this.options));let p=0;do{let c=this.build[p],n=a.build[p];if(s("build compare",p,c,n),c===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(c===void 0)return-1;if(c!==n)return e(c,n)}while(++p)}inc(a,p,c){switch(a){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",p,c);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",p,c);break;case"prepatch":this.prerelease.length=0,this.inc("patch",p,c),this.inc("pre",p,c);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",p,c),this.inc("pre",p,c);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let n=Number(c)?1:0;if(!p&&c===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[n];else{let f=this.prerelease.length;for(;--f>=0;)typeof this.prerelease[f]=="number"&&(this.prerelease[f]++,f=-2);if(f===-1){if(p===this.prerelease.join(".")&&c===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(n)}}if(p){let f=[p,n];c===!1&&(f=[p]),e(this.prerelease[0],p)===0?isNaN(this.prerelease[1])&&(this.prerelease=f):this.prerelease=f}break}default:throw new Error(`invalid increment argument: ${a}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};u.exports=r}}),k=_({"../../node_modules/semver/functions/parse.js"(E,u){var s=y(),l=(i,t,o=!1)=>{if(i instanceof s)return i;try{return new s(i,t)}catch(h){if(!o)return null;throw h}};u.exports=l}}),Ge=_({"../../node_modules/semver/functions/valid.js"(E,u){var s=k(),l=(i,t)=>{let o=s(i,t);return o?o.version:null};u.exports=l}}),Fe=_({"../../node_modules/semver/functions/clean.js"(E,u){var s=k(),l=(i,t)=>{let o=s(i.trim().replace(/^[=v]+/,""),t);return o?o.version:null};u.exports=l}}),Ue=_({"../../node_modules/semver/functions/inc.js"(E,u){var s=y(),l=(i,t,o,h,e)=>{typeof o=="string"&&(e=h,h=o,o=void 0);try{return new s(i instanceof s?i.version:i,o).inc(t,h,e).version}catch{return null}};u.exports=l}}),Ve=_({"../../node_modules/semver/functions/diff.js"(E,u){var s=k(),l=(i,t)=>{let o=s(i,null,!0),h=s(t,null,!0),e=o.compare(h);if(e===0)return null;let r=e>0,L=r?o:h,a=r?h:o,p=!!L.prerelease.length;if(a.prerelease.length&&!p)return!a.patch&&!a.minor?"major":L.patch?"patch":L.minor?"minor":"major";let c=p?"pre":"";return o.major!==h.major?c+"major":o.minor!==h.minor?c+"minor":o.patch!==h.patch?c+"patch":"prerelease"};u.exports=l}}),Xe=_({"../../node_modules/semver/functions/major.js"(E,u){var s=y(),l=(i,t)=>new s(i,t).major;u.exports=l}}),be=_({"../../node_modules/semver/functions/minor.js"(E,u){var s=y(),l=(i,t)=>new s(i,t).minor;u.exports=l}}),He=_({"../../node_modules/semver/functions/patch.js"(E,u){var s=y(),l=(i,t)=>new s(i,t).patch;u.exports=l}}),Me=_({"../../node_modules/semver/functions/prerelease.js"(E,u){var s=k(),l=(i,t)=>{let o=s(i,t);return o&&o.prerelease.length?o.prerelease:null};u.exports=l}}),U=_({"../../node_modules/semver/functions/compare.js"(E,u){var s=y(),l=(i,t,o)=>new s(i,o).compare(new s(t,o));u.exports=l}}),ke=_({"../../node_modules/semver/functions/rcompare.js"(E,u){var s=U(),l=(i,t,o)=>s(t,i,o);u.exports=l}}),Be=_({"../../node_modules/semver/functions/compare-loose.js"(E,u){var s=U(),l=(i,t)=>s(i,t,!0);u.exports=l}}),me=_({"../../node_modules/semver/functions/compare-build.js"(E,u){var s=y(),l=(i,t,o)=>{let h=new s(i,o),e=new s(t,o);return h.compare(e)||h.compareBuild(e)};u.exports=l}}),Ye=_({"../../node_modules/semver/functions/sort.js"(E,u){var s=me(),l=(i,t)=>i.sort((o,h)=>s(o,h,t));u.exports=l}}),We=_({"../../node_modules/semver/functions/rsort.js"(E,u){var s=me(),l=(i,t)=>i.sort((o,h)=>s(h,o,t));u.exports=l}}),ee=_({"../../node_modules/semver/functions/gt.js"(E,u){var s=U(),l=(i,t,o)=>s(i,t,o)>0;u.exports=l}}),he=_({"../../node_modules/semver/functions/lt.js"(E,u){var s=U(),l=(i,t,o)=>s(i,t,o)<0;u.exports=l}}),Oe=_({"../../node_modules/semver/functions/eq.js"(E,u){var s=U(),l=(i,t,o)=>s(i,t,o)===0;u.exports=l}}),Te=_({"../../node_modules/semver/functions/neq.js"(E,u){var s=U(),l=(i,t,o)=>s(i,t,o)!==0;u.exports=l}}),fe=_({"../../node_modules/semver/functions/gte.js"(E,u){var s=U(),l=(i,t,o)=>s(i,t,o)>=0;u.exports=l}}),ve=_({"../../node_modules/semver/functions/lte.js"(E,u){var s=U(),l=(i,t,o)=>s(i,t,o)<=0;u.exports=l}}),Se=_({"../../node_modules/semver/functions/cmp.js"(E,u){var s=Oe(),l=Te(),i=ee(),t=fe(),o=he(),h=ve(),e=(r,L,a,p)=>{switch(L){case"===":return typeof r=="object"&&(r=r.version),typeof a=="object"&&(a=a.version),r===a;case"!==":return typeof r=="object"&&(r=r.version),typeof a=="object"&&(a=a.version),r!==a;case"":case"=":case"==":return s(r,a,p);case"!=":return l(r,a,p);case">":return i(r,a,p);case">=":return t(r,a,p);case"<":return o(r,a,p);case"<=":return h(r,a,p);default:throw new TypeError(`Invalid operator: ${L}`)}};u.exports=e}}),ze=_({"../../node_modules/semver/functions/coerce.js"(E,u){var s=y(),l=k(),{safeRe:i,t}=K(),o=(h,e)=>{if(h instanceof s)return h;if(typeof h=="number"&&(h=String(h)),typeof h!="string")return null;e=e||{};let r=null;if(!e.rtl)r=h.match(e.includePrerelease?i[t.COERCEFULL]:i[t.COERCE]);else{let f=e.includePrerelease?i[t.COERCERTLFULL]:i[t.COERCERTL],T;for(;(T=f.exec(h))&&(!r||r.index+r[0].length!==h.length);)(!r||T.index+T[0].length!==r.index+r[0].length)&&(r=T),f.lastIndex=T.index+T[1].length+T[2].length;f.lastIndex=-1}if(r===null)return null;let L=r[2],a=r[3]||"0",p=r[4]||"0",c=e.includePrerelease&&r[5]?`-${r[5]}`:"",n=e.includePrerelease&&r[6]?`+${r[6]}`:"";return l(`${L}.${a}.${p}${c}${n}`,e)};u.exports=o}}),Ke=_({"../../node_modules/semver/internal/lrucache.js"(E,u){var s=class{constructor(){this.max=1e3,this.map=new Map}get(l){let i=this.map.get(l);if(i!==void 0)return this.map.delete(l),this.map.set(l,i),i}delete(l){return this.map.delete(l)}set(l,i){if(!this.delete(l)&&i!==void 0){if(this.map.size>=this.max){let t=this.map.keys().next().value;this.delete(t)}this.map.set(l,i)}return this}};u.exports=s}}),V=_({"../../node_modules/semver/classes/range.js"(E,u){var s=/\s+/g,l=class Z{constructor(m,$){if($=o($),m instanceof Z)return m.loose===!!$.loose&&m.includePrerelease===!!$.includePrerelease?m:new Z(m.raw,$);if(m instanceof h)return this.raw=m.value,this.set=[[m]],this.formatted=void 0,this;if(this.options=$,this.loose=!!$.loose,this.includePrerelease=!!$.includePrerelease,this.raw=m.trim().replace(s," "),this.set=this.raw.split("||").map(d=>this.parseRange(d.trim())).filter(d=>d.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let d=this.set[0];if(this.set=this.set.filter(I=>!S(I[0])),this.set.length===0)this.set=[d];else if(this.set.length>1){for(let I of this.set)if(I.length===1&&g(I[0])){this.set=[I];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let m=0;m<this.set.length;m++){m>0&&(this.formatted+="||");let $=this.set[m];for(let d=0;d<$.length;d++)d>0&&(this.formatted+=" "),this.formatted+=$[d].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(m){let $=((this.options.includePrerelease&&f)|(this.options.loose&&T))+":"+m,d=t.get($);if(d)return d;let I=this.options.loose,R=I?L[a.HYPHENRANGELOOSE]:L[a.HYPHENRANGE];m=m.replace(R,ie(this.options.includePrerelease)),e("hyphen replace",m),m=m.replace(L[a.COMPARATORTRIM],p),e("comparator trim",m),m=m.replace(L[a.TILDETRIM],c),e("tilde trim",m),m=m.replace(L[a.CARETTRIM],n),e("caret trim",m);let N=m.split(" ").map(j=>F(j,this.options)).join(" ").split(/\s+/).map(j=>ae(j,this.options));I&&(N=N.filter(j=>(e("loose invalid filter",j,this.options),!!j.match(L[a.COMPARATORLOOSE])))),e("range list",N);let x=new Map,A=N.map(j=>new h(j,this.options));for(let j of A){if(S(j))return[j];x.set(j.value,j)}x.size>1&&x.has("")&&x.delete("");let w=[...x.values()];return t.set($,w),w}intersects(m,$){if(!(m instanceof Z))throw new TypeError("a Range is required");return this.set.some(d=>C(d,$)&&m.set.some(I=>C(I,$)&&d.every(R=>I.every(N=>R.intersects(N,$)))))}test(m){if(!m)return!1;if(typeof m=="string")try{m=new r(m,this.options)}catch{return!1}for(let $=0;$<this.set.length;$++)if(ne(this.set[$],m,this.options))return!0;return!1}};u.exports=l;var i=Ke(),t=new i,o=Ee(),h=re(),e=Q(),r=y(),{safeRe:L,t:a,comparatorTrimReplace:p,tildeTrimReplace:c,caretTrimReplace:n}=K(),{FLAG_INCLUDE_PRERELEASE:f,FLAG_LOOSE:T}=J(),S=v=>v.value==="<0.0.0-0",g=v=>v.value==="",C=(v,m)=>{let $=!0,d=v.slice(),I=d.pop();for(;$&&d.length;)$=d.every(R=>I.intersects(R,m)),I=d.pop();return $},F=(v,m)=>(e("comp",v,m),v=D(v,m),e("caret",v),v=b(v,m),e("tildes",v),v=O(v,m),e("xrange",v),v=se(v,m),e("stars",v),v),P=v=>!v||v.toLowerCase()==="x"||v==="*",b=(v,m)=>v.trim().split(/\s+/).map($=>G($,m)).join(" "),G=(v,m)=>{let $=m.loose?L[a.TILDELOOSE]:L[a.TILDE];return v.replace($,(d,I,R,N,x)=>{e("tilde",v,d,I,R,N,x);let A;return P(I)?A="":P(R)?A=`>=${I}.0.0 <${+I+1}.0.0-0`:P(N)?A=`>=${I}.${R}.0 <${I}.${+R+1}.0-0`:x?(e("replaceTilde pr",x),A=`>=${I}.${R}.${N}-${x} <${I}.${+R+1}.0-0`):A=`>=${I}.${R}.${N} <${I}.${+R+1}.0-0`,e("tilde return",A),A})},D=(v,m)=>v.trim().split(/\s+/).map($=>q($,m)).join(" "),q=(v,m)=>{e("caret",v,m);let $=m.loose?L[a.CARETLOOSE]:L[a.CARET],d=m.includePrerelease?"-0":"";return v.replace($,(I,R,N,x,A)=>{e("caret",v,I,R,N,x,A);let w;return P(R)?w="":P(N)?w=`>=${R}.0.0${d} <${+R+1}.0.0-0`:P(x)?R==="0"?w=`>=${R}.${N}.0${d} <${R}.${+N+1}.0-0`:w=`>=${R}.${N}.0${d} <${+R+1}.0.0-0`:A?(e("replaceCaret pr",A),R==="0"?N==="0"?w=`>=${R}.${N}.${x}-${A} <${R}.${N}.${+x+1}-0`:w=`>=${R}.${N}.${x}-${A} <${R}.${+N+1}.0-0`:w=`>=${R}.${N}.${x}-${A} <${+R+1}.0.0-0`):(e("no pr"),R==="0"?N==="0"?w=`>=${R}.${N}.${x}${d} <${R}.${N}.${+x+1}-0`:w=`>=${R}.${N}.${x}${d} <${R}.${+N+1}.0-0`:w=`>=${R}.${N}.${x} <${+R+1}.0.0-0`),e("caret return",w),w})},O=(v,m)=>(e("replaceXRanges",v,m),v.split(/\s+/).map($=>B($,m)).join(" ")),B=(v,m)=>{v=v.trim();let $=m.loose?L[a.XRANGELOOSE]:L[a.XRANGE];return v.replace($,(d,I,R,N,x,A)=>{e("xRange",v,d,I,R,N,x,A);let w=P(R),j=w||P(N),M=j||P(x),Y=M;return I==="="&&Y&&(I=""),A=m.includePrerelease?"-0":"",w?I===">"||I==="<"?d="<0.0.0-0":d="*":I&&Y?(j&&(N=0),x=0,I===">"?(I=">=",j?(R=+R+1,N=0,x=0):(N=+N+1,x=0)):I==="<="&&(I="<",j?R=+R+1:N=+N+1),I==="<"&&(A="-0"),d=`${I+R}.${N}.${x}${A}`):j?d=`>=${R}.0.0${A} <${+R+1}.0.0-0`:M&&(d=`>=${R}.${N}.0${A} <${R}.${+N+1}.0-0`),e("xRange return",d),d})},se=(v,m)=>(e("replaceStars",v,m),v.trim().replace(L[a.STAR],"")),ae=(v,m)=>(e("replaceGTE0",v,m),v.trim().replace(L[m.includePrerelease?a.GTE0PRE:a.GTE0],"")),ie=v=>(m,$,d,I,R,N,x,A,w,j,M,Y)=>(P(d)?$="":P(I)?$=`>=${d}.0.0${v?"-0":""}`:P(R)?$=`>=${d}.${I}.0${v?"-0":""}`:N?$=`>=${$}`:$=`>=${$}${v?"-0":""}`,P(w)?A="":P(j)?A=`<${+w+1}.0.0-0`:P(M)?A=`<${w}.${+j+1}.0-0`:Y?A=`<=${w}.${j}.${M}-${Y}`:v?A=`<${w}.${j}.${+M+1}-0`:A=`<=${A}`,`${$} ${A}`.trim()),ne=(v,m,$)=>{for(let d=0;d<v.length;d++)if(!v[d].test(m))return!1;if(m.prerelease.length&&!$.includePrerelease){for(let d=0;d<v.length;d++)if(e(v[d].semver),v[d].semver!==h.ANY&&v[d].semver.prerelease.length>0){let I=v[d].semver;if(I.major===m.major&&I.minor===m.minor&&I.patch===m.patch)return!0}return!1}return!0}}}),re=_({"../../node_modules/semver/classes/comparator.js"(E,u){var s=Symbol("SemVer ANY"),l=class ce{static get ANY(){return s}constructor(p,c){if(c=i(c),p instanceof ce){if(p.loose===!!c.loose)return p;p=p.value}p=p.trim().split(/\s+/).join(" "),e("comparator",p,c),this.options=c,this.loose=!!c.loose,this.parse(p),this.semver===s?this.value="":this.value=this.operator+this.semver.version,e("comp",this)}parse(p){let c=this.options.loose?t[o.COMPARATORLOOSE]:t[o.COMPARATOR],n=p.match(c);if(!n)throw new TypeError(`Invalid comparator: ${p}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new r(n[2],this.options.loose):this.semver=s}toString(){return this.value}test(p){if(e("Comparator.test",p,this.options.loose),this.semver===s||p===s)return!0;if(typeof p=="string")try{p=new r(p,this.options)}catch{return!1}return h(p,this.operator,this.semver,this.options)}intersects(p,c){if(!(p instanceof ce))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new L(p.value,c).test(this.value):p.operator===""?p.value===""?!0:new L(this.value,c).test(p.semver):(c=i(c),c.includePrerelease&&(this.value==="<0.0.0-0"||p.value==="<0.0.0-0")||!c.includePrerelease&&(this.value.startsWith("<0.0.0")||p.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&p.operator.startsWith(">")||this.operator.startsWith("<")&&p.operator.startsWith("<")||this.semver.version===p.semver.version&&this.operator.includes("=")&&p.operator.includes("=")||h(this.semver,"<",p.semver,c)&&this.operator.startsWith(">")&&p.operator.startsWith("<")||h(this.semver,">",p.semver,c)&&this.operator.startsWith("<")&&p.operator.startsWith(">")))}};u.exports=l;var i=Ee(),{safeRe:t,t:o}=K(),h=Se(),e=Q(),r=y(),L=V()}}),te=_({"../../node_modules/semver/functions/satisfies.js"(E,u){var s=V(),l=(i,t,o)=>{try{t=new s(t,o)}catch{return!1}return t.test(i)};u.exports=l}}),Ze=_({"../../node_modules/semver/ranges/to-comparators.js"(E,u){var s=V(),l=(i,t)=>new s(i,t).set.map(o=>o.map(h=>h.value).join(" ").trim().split(" "));u.exports=l}}),Je=_({"../../node_modules/semver/ranges/max-satisfying.js"(E,u){var s=y(),l=V(),i=(t,o,h)=>{let e=null,r=null,L=null;try{L=new l(o,h)}catch{return null}return t.forEach(a=>{L.test(a)&&(!e||r.compare(a)===-1)&&(e=a,r=new s(e,h))}),e};u.exports=i}}),Qe=_({"../../node_modules/semver/ranges/min-satisfying.js"(E,u){var s=y(),l=V(),i=(t,o,h)=>{let e=null,r=null,L=null;try{L=new l(o,h)}catch{return null}return t.forEach(a=>{L.test(a)&&(!e||r.compare(a)===1)&&(e=a,r=new s(e,h))}),e};u.exports=i}}),er=_({"../../node_modules/semver/ranges/min-version.js"(E,u){var s=y(),l=V(),i=ee(),t=(o,h)=>{o=new l(o,h);let e=new s("0.0.0");if(o.test(e)||(e=new s("0.0.0-0"),o.test(e)))return e;e=null;for(let r=0;r<o.set.length;++r){let L=o.set[r],a=null;L.forEach(p=>{let c=new s(p.semver.version);switch(p.operator){case">":c.prerelease.length===0?c.patch++:c.prerelease.push(0),c.raw=c.format();case"":case">=":(!a||i(c,a))&&(a=c);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${p.operator}`)}}),a&&(!e||i(e,a))&&(e=a)}return e&&o.test(e)?e:null};u.exports=t}}),rr=_({"../../node_modules/semver/ranges/valid.js"(E,u){var s=V(),l=(i,t)=>{try{return new s(i,t).range||"*"}catch{return null}};u.exports=l}}),de=_({"../../node_modules/semver/ranges/outside.js"(E,u){var s=y(),l=re(),{ANY:i}=l,t=V(),o=te(),h=ee(),e=he(),r=ve(),L=fe(),a=(p,c,n,f)=>{p=new s(p,f),c=new t(c,f);let T,S,g,C,F;switch(n){case">":T=h,S=r,g=e,C=">",F=">=";break;case"<":T=e,S=L,g=h,C="<",F="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(o(p,c,f))return!1;for(let P=0;P<c.set.length;++P){let b=c.set[P],G=null,D=null;if(b.forEach(q=>{q.semver===i&&(q=new l(">=0.0.0")),G=G||q,D=D||q,T(q.semver,G.semver,f)?G=q:g(q.semver,D.semver,f)&&(D=q)}),G.operator===C||G.operator===F||(!D.operator||D.operator===C)&&S(p,D.semver)||D.operator===F&&g(p,D.semver))return!1}return!0};u.exports=a}}),tr=_({"../../node_modules/semver/ranges/gtr.js"(E,u){var s=de(),l=(i,t,o)=>s(i,t,">",o);u.exports=l}}),sr=_({"../../node_modules/semver/ranges/ltr.js"(E,u){var s=de(),l=(i,t,o)=>s(i,t,"<",o);u.exports=l}}),ar=_({"../../node_modules/semver/ranges/intersects.js"(E,u){var s=V(),l=(i,t,o)=>(i=new s(i,o),t=new s(t,o),i.intersects(t,o));u.exports=l}}),ir=_({"../../node_modules/semver/ranges/simplify.js"(E,u){var s=te(),l=U();u.exports=(i,t,o)=>{let h=[],e=null,r=null,L=i.sort((n,f)=>l(n,f,o));for(let n of L)s(n,t,o)?(r=n,e||(e=n)):(r&&h.push([e,r]),r=null,e=null);e&&h.push([e,null]);let a=[];for(let[n,f]of h)n===f?a.push(n):!f&&n===L[0]?a.push("*"):f?n===L[0]?a.push(`<=${f}`):a.push(`${n} - ${f}`):a.push(`>=${n}`);let p=a.join(" || "),c=typeof t.raw=="string"?t.raw:String(t);return p.length<c.length?p:t}}}),nr=_({"../../node_modules/semver/ranges/subset.js"(E,u){var s=V(),l=re(),{ANY:i}=l,t=te(),o=U(),h=(c,n,f={})=>{if(c===n)return!0;c=new s(c,f),n=new s(n,f);let T=!1;e:for(let S of c.set){for(let g of n.set){let C=L(S,g,f);if(T=T||C!==null,C)continue e}if(T)return!1}return!0},e=[new l(">=0.0.0-0")],r=[new l(">=0.0.0")],L=(c,n,f)=>{if(c===n)return!0;if(c.length===1&&c[0].semver===i){if(n.length===1&&n[0].semver===i)return!0;f.includePrerelease?c=e:c=r}if(n.length===1&&n[0].semver===i){if(f.includePrerelease)return!0;n=r}let T=new Set,S,g;for(let O of c)O.operator===">"||O.operator===">="?S=a(S,O,f):O.operator==="<"||O.operator==="<="?g=p(g,O,f):T.add(O.semver);if(T.size>1)return null;let C;if(S&&g&&(C=o(S.semver,g.semver,f),C>0||C===0&&(S.operator!==">="||g.operator!=="<=")))return null;for(let O of T){if(S&&!t(O,String(S),f)||g&&!t(O,String(g),f))return null;for(let B of n)if(!t(O,String(B),f))return!1;return!0}let F,P,b,G,D=g&&!f.includePrerelease&&g.semver.prerelease.length?g.semver:!1,q=S&&!f.includePrerelease&&S.semver.prerelease.length?S.semver:!1;D&&D.prerelease.length===1&&g.operator==="<"&&D.prerelease[0]===0&&(D=!1);for(let O of n){if(G=G||O.operator===">"||O.operator===">=",b=b||O.operator==="<"||O.operator==="<=",S){if(q&&O.semver.prerelease&&O.semver.prerelease.length&&O.semver.major===q.major&&O.semver.minor===q.minor&&O.semver.patch===q.patch&&(q=!1),O.operator===">"||O.operator===">="){if(F=a(S,O,f),F===O&&F!==S)return!1}else if(S.operator===">="&&!t(S.semver,String(O),f))return!1}if(g){if(D&&O.semver.prerelease&&O.semver.prerelease.length&&O.semver.major===D.major&&O.semver.minor===D.minor&&O.semver.patch===D.patch&&(D=!1),O.operator==="<"||O.operator==="<="){if(P=p(g,O,f),P===O&&P!==g)return!1}else if(g.operator==="<="&&!t(g.semver,String(O),f))return!1}if(!O.operator&&(g||S)&&C!==0)return!1}return!(S&&b&&!g&&C!==0||g&&G&&!S&&C!==0||q||D)},a=(c,n,f)=>{if(!c)return n;let T=o(c.semver,n.semver,f);return T>0?c:T<0||n.operator===">"&&c.operator===">="?n:c},p=(c,n,f)=>{if(!c)return n;let T=o(c.semver,n.semver,f);return T<0?c:T>0||n.operator==="<"&&c.operator==="<="?n:c};u.exports=h}}),lr=_({"../../node_modules/semver/index.js"(E,u){var s=K(),l=J(),i=y(),t=_e(),o=k(),h=Ge(),e=Fe(),r=Ue(),L=Ve(),a=Xe(),p=be(),c=He(),n=Me(),f=U(),T=ke(),S=Be(),g=me(),C=Ye(),F=We(),P=ee(),b=he(),G=Oe(),D=Te(),q=fe(),O=ve(),B=Se(),se=ze(),ae=re(),ie=V(),ne=te(),v=Ze(),m=Je(),$=Qe(),d=er(),I=rr(),R=de(),N=tr(),x=sr(),A=ar(),w=ir(),j=nr();u.exports={parse:o,valid:h,clean:e,inc:r,diff:L,major:a,minor:p,patch:c,prerelease:n,compare:f,rcompare:T,compareLoose:S,compareBuild:g,sort:C,rsort:F,gt:P,lt:b,eq:G,neq:D,gte:q,lte:O,cmp:B,coerce:se,Comparator:ae,Range:ie,satisfies:ne,toComparators:v,maxSatisfying:m,minSatisfying:$,minVersion:d,validRange:I,outside:R,gtr:N,ltr:x,intersects:A,simplifyRange:w,subset:j,SemVer:i,re:s.re,src:s.src,tokens:s.t,SEMVER_SPEC_VERSION:l.SEMVER_SPEC_VERSION,RELEASE_TYPES:l.RELEASE_TYPES,compareIdentifiers:t.compareIdentifiers,rcompareIdentifiers:t.rcompareIdentifiers}}}),or={};xe(or,{decorators:()=>vr,mount:()=>hr,parameters:()=>fr,render:()=>ur,renderToCanvas:()=>mr});var Ie=we(lr()),ur=(E,u)=>{let{id:s,component:l}=u;if(!l)throw new Error(`Unable to render story ${s} as the component annotation is missing from the default export`);return z.createElement(l,{...E})},Le={...Ce},pr=typeof Le.act=="function"?Le.act:qe.act;function W(E){globalThis.IS_REACT_ACT_ENVIRONMENT=E}function Ae(){return globalThis.IS_REACT_ACT_ENVIRONMENT}function cr(E){return u=>{let s=Ae();W(!0);try{let l=!1,i=E(()=>{let t=u();return t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l=!0),t});if(l){let t=i;return{then:(o,h)=>{t.then(e=>{W(s),o(e)},e=>{W(s),h(e)})}}}else return W(s),i}catch(l){throw W(s),l}}}var Ir=cr(pr),{FRAMEWORK_OPTIONS:pe}=ye,Er=class extends H.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:E}=this.state,{showMain:u}=this.props;E||u()}componentDidCatch(E){let{showException:u}=this.props;u(E)}render(){let{hasError:E}=this.state,{children:u}=this.props;return E?null:u}},Ne=pe!=null&&pe.strictMode?H.StrictMode:H.Fragment;async function mr({storyContext:E,unboundStoryFn:u,showMain:s,showException:l,forceRemount:i},t){var a,p;let{renderElement:o,unmountElement:h}=await ge(async()=>{const{renderElement:c,unmountElement:n}=await import("./react-18-CZS4diu7.js");return{renderElement:c,unmountElement:n}},__vite__mapDeps([0,1,2]),import.meta.url),e=u,r=Ae()?z.createElement(e,{...E}):z.createElement(Er,{showMain:s,showException:l},z.createElement(e,{...E})),L=Ne?z.createElement(Ne,null,r):r;return i&&h(t),await o(L,t,(p=(a=E==null?void 0:E.parameters)==null?void 0:a.react)==null?void 0:p.rootOptions),()=>h(t)}var hr=E=>async u=>(u!=null&&(E.originalStoryFn=()=>u),await E.renderToCanvas(),E.canvas),fr={renderer:"react"},vr=[(E,u)=>{var i,t;if(!((t=(i=u.parameters)==null?void 0:i.react)!=null&&t.rsc))return H.createElement(E,null);let s=Ie.default.major(H.version),l=Ie.default.minor(H.version);if(s<18||s===18&&l<3)throw new Error("React Server Components require React >= 18.3");return H.createElement(H.Suspense,null,H.createElement(E,null))}];export{mr as a,Ir as b,vr as d,or as e,Ae as g,hr as m,fr as p,ur as r,W as s};
