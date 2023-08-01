(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({141:"components-number-input-NumberInput-stories",384:"components-textarea-Textarea-mdx",389:"components-button-Button-stories",397:"components-progress-Progress-mdx",430:"components-icon-button-IconButton-mdx",511:"components-tabs-Tabs-stories",590:"design-design-tokens-design-tokens-mdx",598:"components-show-hide-ShowHide-mdx",670:"components-popover-Popover-mdx",934:"design-Icon-stories",961:"components-button-Button-mdx",1059:"components-icon-button-IconButton-stories",1195:"components-Input-Input-stories",1198:"components-data-display-card-Card-mdx",1375:"components-editable-Editable-mdx",1407:"design-Icon-mdx",1435:"components-Typography-highlight-Highlight-mdx",1542:"components-menu-Menu-mdx",1551:"components-visually-hidden-VIsuallyHidden-mdx",1640:"components-data-display-divider-Divider-mdx",1817:"components-stepper-Stepper-mdx",1879:"components-link-Link-mdx",2108:"components-pin-input-PinInput-mdx",2479:"components-data-display-stat-Stat-stories",2626:"components-Layout-Center-Center-mdx",2748:"documentation-introduksjon-mdx",2841:"components-modal-Modal-mdx",2846:"components-data-display-table-Table-mdx",3009:"components-toast-Toast-mdx",3121:"components-Typography-Heading-Heading-mdx",3148:"components-datepicker-Datepicker-mdx",3185:"components-transitions-Transitions-mdx",3422:"components-pin-input-PinInput-stories",3424:"documentation-bidra-Dokumentere-mdx",3427:"components-alert-Alert-mdx",3631:"components-number-input-NumberInput-mdx",3645:"components-portal-Portal-mdx",3796:"documentation-bidra-Teste-mdx",3903:"components-Layout-Center-Center-stories",3931:"components-accordion-Accordion-mdx",3935:"components-datepicker-Datepicker-stories",3939:"components-link-overlay-LinkOverlay-mdx",3955:"components-Layout-Box-Box-stories",4164:"components-drawer-Drawer-mdx",4225:"components-Layout-SimpleGrid-SimpleGrid-stories",4268:"components-form-control-Form-control-mdx",4321:"components-data-display-code-Code-mdx",4424:"components-data-display-tag-Tag-mdx",4438:"components-data-display-kbd-Kbd-mdx",4474:"components-select-Select-mdx",4531:"documentation-taIBruk-mdx",4559:"documentation-changelog-mdx",4635:"components-Layout-Wrap-Wrap-mdx",4737:"components-data-display-list-list-mdx",4862:"documentation-bidra-Style-mdx",4882:"components-Layout-Box-Box-mdx",4994:"documentation-bidra-Publish-mdx",5035:"components-tooltip-Tooltip-mdx",5073:"components-alert-dialog-AlertDialog-mdx",5085:"components-Layout-SimpleGrid-SimpleGrid-mdx",5196:"components-Input-Input-mdx",5325:"components-data-display-badge-Badge-mdx",5408:"components-Typography-Text-Text-mdx",5539:"components-link-Link-stories",5654:"components-Layout-Grid-Grid-stories",5656:"components-circular-progress-CircularProgress-mdx",5692:"components-layout-AspectRatio-AspectRatio-mdx",5761:"components-Layout-Flex-Flex-stories",6205:"hooks-Hooks-mdx",6288:"components-checkbox-Checkbox-mdx",6302:"components-switch-Switch-mdx",6373:"components-slider-Slider-mdx",6457:"components-Layout-Stack-Stack-stories",6521:"components-skip-nav-SkipNav-mdx",6722:"components-image-Image-mdx",6795:"components-Layout-Stack-Stack-mdx",6925:"components-Layout-Container-Container-stories",7123:"components-Layout-Flex-Flex-mdx",7341:"components-avatar-Avatar-mdx",7366:"components-breadcrumb-Breadcrumb-mdx",7542:"components-radio-Radio-mdx",7771:"documentation-bidra-Generelt-mdx",7898:"components-data-display-badge-Badge-stories",8161:"components-Layout-Grid-Grid-mdx",8264:"components-Layout-Wrap-Wrap-stories",8368:"components-data-display-stat-Stat-mdx",8469:"components-slider-Slider-stories",8486:"components-close-button-CloseButton-mdx",8549:"documentation-bidra-Bygge-mdx",8654:"components-data-display-table-Table-stories",8777:"components-data-display-divider-Divider-stories",8839:"components-Layout-Container-Container-mdx",8843:"components-range-slider-RangeSlider-mdx",8860:"components-spinner-Spinner-mdx",8871:"documentation-playground-mdx",9678:"components-tabs-Tabs-mdx",9752:"components-form-control-Form-control-stories",9861:"components-skeleton-Skeleton-mdx",9969:"components-data-display-code-Code-stories"}[chunkId]||chunkId)+"."+{141:"1aa0bfbc",384:"51342e1f",389:"173e4576",397:"e00a9e80",430:"6578a07f",511:"7413c203",590:"406b6b89",598:"81fa89ac",670:"0586e301",934:"72f47a5d",961:"b1528c58",1040:"36bf8d6e",1059:"1bf66b70",1195:"99759f48",1198:"8e829011",1375:"419881fd",1407:"4a00896a",1435:"95034dd3",1526:"afe08c35",1542:"301f8b25",1551:"8a866668",1640:"912c9801",1817:"15c4319c",1849:"34d0e397",1879:"49455e79",2108:"8ed3db8d",2275:"c241a119",2479:"87ffef4e",2626:"7add8ce3",2748:"c6a8b641",2841:"a4b569ec",2846:"93d91490",2989:"85a985aa",3009:"64ec575d",3121:"db9be566",3148:"487a1cc7",3185:"4cad9229",3330:"b41472b7",3422:"dfd05c46",3424:"e510b0a9",3427:"424547fe",3631:"fb8d61ff",3645:"2152be1f",3796:"658eabd6",3903:"efb030cf",3931:"b09b0de1",3935:"17f0a0cc",3939:"50dc5cb4",3955:"ac8ae684",4164:"2f0ca51f",4225:"80ad80bc",4268:"c185fc0e",4321:"89572ea3",4424:"033d5430",4438:"e156a71b",4474:"0b198e7e",4531:"5add0b53",4559:"cc353d92",4635:"d70085ea",4737:"73edf412",4765:"aad0f05f",4862:"48fd04fa",4882:"39c757e3",4994:"ec25d1d7",5035:"ee03af47",5073:"29e46574",5085:"794b7c0c",5196:"916b0225",5325:"28e48f71",5408:"746c3519",5539:"21f42dc1",5654:"d5cfe095",5656:"ee299d95",5692:"49f4c558",5761:"f0eaaceb",5892:"48039320",6145:"43c9a2b5",6205:"f8d445bc",6288:"59f033e9",6302:"eea048cb",6373:"5d7af667",6457:"b1f986e7",6521:"4d905778",6722:"e4a35a28",6795:"ef0b84d5",6925:"ebaf5517",7123:"126afde5",7341:"a1cdc5a3",7366:"1cd1865e",7542:"82aae464",7717:"58a2e70d",7771:"5e087898",7898:"a6ede8d1",8001:"1eb59055",8161:"148733b7",8264:"71ca7353",8321:"5790e79f",8368:"a48964aa",8469:"dae2ea08",8486:"0c86c822",8549:"36753692",8654:"d99b89ee",8777:"85bf455f",8821:"628d19f6",8839:"d555c660",8843:"1c4c3bed",8860:"67c32cff",8871:"9b45e899",9178:"b661f48f",9678:"10263c87",9752:"fdcb3260",9861:"050b064a",9969:"045f8623"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@kvib/storybook:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@kvib/storybook:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();