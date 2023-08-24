(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({141:"components-number-input-NumberInput-stories",170:"components-search-search-Search-stories",377:"components-Typography-highlight-Highlight-stories",384:"components-textarea-Textarea-mdx",389:"components-button-Button-stories",397:"components-progress-Progress-mdx",430:"components-icon-button-IconButton-mdx",511:"components-tabs-Tabs-stories",590:"design-design-tokens-design-tokens-mdx",598:"components-show-hide-ShowHide-mdx",670:"components-popover-Popover-mdx",934:"design-Icon-stories",961:"components-button-Button-mdx",1059:"components-icon-button-IconButton-stories",1068:"components-circular-progress-CircularProgress-stories",1195:"components-Input-Input-stories",1198:"components-data-display-card-Card-mdx",1375:"components-editable-Editable-mdx",1407:"design-Icon-mdx",1435:"components-Typography-highlight-Highlight-mdx",1542:"components-menu-Menu-mdx",1551:"components-visually-hidden-VIsuallyHidden-mdx",1640:"components-data-display-divider-Divider-mdx",1732:"components-alert-Alert-stories",1817:"components-stepper-Stepper-mdx",1824:"components-file-upload-FileUpload-stories",1879:"components-link-Link-mdx",1881:"components-close-button-CloseButton-stories",2108:"components-pin-input-PinInput-mdx",2110:"components-menu-Menu-stories",2347:"components-link-overlay-LinkOverlay-stories",2479:"components-data-display-stat-Stat-stories",2626:"components-Layout-Center-Center-mdx",2748:"documentation-introduksjon-mdx",2841:"components-modal-Modal-mdx",2846:"components-data-display-table-Table-mdx",2879:"components-spinner-Spinner-stories",2993:"components-select-Select-stories",3009:"components-toast-Toast-mdx",3121:"components-Typography-Heading-Heading-mdx",3142:"components-stepper-Stepper-stories",3148:"components-datepicker-Datepicker-mdx",3185:"components-transitions-Transitions-mdx",3257:"components-portal-Portal-stories",3262:"components-data-display-card-Card-stories",3422:"components-pin-input-PinInput-stories",3424:"documentation-bidra-Dokumentere-mdx",3427:"components-alert-Alert-mdx",3566:"components-data-display-kbd-Kbd-stories",3631:"components-number-input-NumberInput-mdx",3645:"components-portal-Portal-mdx",3707:"components-modal-Modal-stories",3796:"documentation-bidra-Teste-mdx",3903:"components-Layout-Center-Center-stories",3931:"components-accordion-Accordion-mdx",3935:"components-datepicker-Datepicker-stories",3939:"components-link-overlay-LinkOverlay-mdx",3955:"components-Layout-Box-Box-stories",3956:"components-search-search-async-SearchAsync-mdx",4082:"components-popover-Popover-stories",4111:"components-search-search-Search-mdx",4164:"components-drawer-Drawer-mdx",4225:"components-Layout-SimpleGrid-SimpleGrid-stories",4268:"components-form-control-Form-control-mdx",4321:"components-data-display-code-Code-mdx",4424:"components-data-display-tag-Tag-mdx",4438:"components-data-display-kbd-Kbd-mdx",4474:"components-select-Select-mdx",4528:"components-drawer-Drawer-stories",4531:"documentation-taIBruk-mdx",4532:"components-Typography-Heading-Heading-stories",4559:"documentation-changelog-mdx",4635:"components-Layout-Wrap-Wrap-mdx",4737:"components-data-display-list-list-mdx",4862:"documentation-bidra-Style-mdx",4882:"components-Layout-Box-Box-mdx",4994:"documentation-bidra-Publish-mdx",5035:"components-tooltip-Tooltip-mdx",5073:"components-alert-dialog-AlertDialog-mdx",5085:"components-Layout-SimpleGrid-SimpleGrid-mdx",5196:"components-Input-Input-mdx",5325:"components-data-display-badge-Badge-mdx",5354:"components-file-upload-FileUpload-mdx",5368:"components-breadcrumb-Breadcrumb-stories",5408:"components-Typography-Text-Text-mdx",5409:"documentation-bidra-KjenteProblemer-mdx",5511:"components-checkbox-Checkbox-stories",5539:"components-link-Link-stories",5624:"components-data-display-tag-Tag-stories",5654:"components-Layout-Grid-Grid-stories",5656:"components-circular-progress-CircularProgress-mdx",5692:"components-layout-AspectRatio-AspectRatio-mdx",5761:"components-Layout-Flex-Flex-stories",5826:"components-search-search-async-SearchAsync-stories",6068:"components-avatar-Avatar-stories",6132:"components-range-slider-RangeSlider-stories",6205:"hooks-Hooks-mdx",6288:"components-checkbox-Checkbox-mdx",6302:"components-switch-Switch-mdx",6373:"components-slider-Slider-mdx",6437:"components-accordion-Accordion-stories",6457:"components-Layout-Stack-Stack-stories",6521:"components-skip-nav-SkipNav-mdx",6710:"components-skip-nav-SkipNav-stories",6722:"components-image-Image-mdx",6795:"components-Layout-Stack-Stack-mdx",6925:"components-Layout-Container-Container-stories",7123:"components-Layout-Flex-Flex-mdx",7341:"components-avatar-Avatar-mdx",7366:"components-breadcrumb-Breadcrumb-mdx",7542:"components-radio-Radio-mdx",7559:"components-editable-Editable-stories",7771:"documentation-bidra-Generelt-mdx",7898:"components-data-display-badge-Badge-stories",7933:"components-data-display-list-List-stories",8016:"components-Typography-Text-Text-stories",8135:"components-skeleton-Skeleton-stories",8161:"components-Layout-Grid-Grid-mdx",8264:"components-Layout-Wrap-Wrap-stories",8368:"components-data-display-stat-Stat-mdx",8469:"components-slider-Slider-stories",8486:"components-close-button-CloseButton-mdx",8549:"documentation-bidra-Bygge-mdx",8654:"components-data-display-table-Table-stories",8777:"components-data-display-divider-Divider-stories",8839:"components-Layout-Container-Container-mdx",8843:"components-range-slider-RangeSlider-mdx",8857:"components-image-Image-stories",8860:"components-spinner-Spinner-mdx",8871:"documentation-playground-mdx",9678:"components-tabs-Tabs-mdx",9747:"components-progress-Progress-stories",9752:"components-form-control-Form-control-stories",9861:"components-skeleton-Skeleton-mdx",9918:"components-show-hide-ShowHide-stories",9969:"components-data-display-code-Code-stories"}[chunkId]||chunkId)+"."+{141:"3d5d84f1",170:"070308a6",377:"ebd8d93d",384:"51342e1f",389:"6379d6ed",397:"d9946a3c",430:"90cc0cd7",511:"f115301d",590:"fc590eba",598:"9d8880f4",670:"48cbe06f",715:"721fd800",899:"00b872f1",934:"c67899b1",961:"31eb47a3",1040:"36bf8d6e",1059:"cc297ddb",1068:"f9f4c0d3",1113:"b98522ed",1195:"dd22c07b",1198:"d8d70da3",1375:"45d76812",1407:"b8ae7867",1435:"61d8e477",1443:"c856e1c7",1526:"afe08c35",1542:"75ba9083",1551:"8a866668",1640:"9e064582",1732:"3d672a90",1781:"22a33c9c",1817:"11c7e98c",1824:"db62d7ca",1849:"34d0e397",1879:"3f04e2d9",1881:"151cc1cd",2108:"7bbdffeb",2110:"679560be",2275:"c241a119",2347:"70eb7c15",2479:"87ffef4e",2626:"7add8ce3",2747:"9e0aae41",2748:"c6a8b641",2818:"7141171f",2841:"b0966cb6",2846:"68099996",2879:"78a2a4aa",2989:"3abb6864",2993:"c2dee6be",3009:"64ec575d",3121:"95ace02c",3142:"6f2ef02b",3148:"487a1cc7",3185:"4cad9229",3257:"3c39c242",3262:"5f8bb3cb",3422:"6d08479d",3424:"e510b0a9",3427:"f16f25c8",3566:"e4812b53",3631:"2be1564d",3645:"ce9bb168",3707:"1c5a06e3",3796:"a198b565",3903:"efb030cf",3931:"03a26013",3935:"17f0a0cc",3939:"7e775b21",3955:"ac8ae684",3956:"b618786c",4082:"87104642",4111:"e2dde63d",4164:"7ce27abd",4225:"53fb3fb9",4268:"c9456320",4321:"eeba7714",4424:"9debdd25",4438:"036d451f",4474:"0ffe5557",4506:"6d3a8db4",4528:"64fac186",4531:"5add0b53",4532:"2220296d",4559:"3d09dadd",4635:"01060c92",4737:"d7e58cd9",4862:"e73d3781",4882:"39c757e3",4994:"438a5462",5035:"ee03af47",5073:"29e46574",5085:"9885941c",5196:"d3609117",5325:"9b37677b",5354:"160fb48a",5368:"1a83ee11",5408:"890cb3a3",5409:"8415b35d",5437:"4f070e5f",5511:"20aaad32",5539:"ff773935",5624:"08d4c20e",5654:"5c48974d",5656:"bfc3d50d",5692:"49f4c558",5761:"f0eaaceb",5826:"970ddc6c",5892:"48039320",5991:"56ace56f",6068:"e0f19708",6132:"914207ca",6145:"43c9a2b5",6205:"f8d445bc",6288:"85d3b326",6302:"eea048cb",6373:"5d7af667",6437:"ff13f793",6457:"a0b6232a",6510:"185fd4f2",6521:"818046d1",6585:"e386e12a",6710:"59f7d087",6722:"f2355258",6795:"e577b39d",6925:"ebaf5517",7123:"126afde5",7286:"573b3b95",7341:"82d68943",7366:"a94c37d6",7542:"10ef3c11",7559:"32ebde58",7717:"58a2e70d",7771:"81ff17d5",7898:"f9572997",7933:"7b4d6b4c",8001:"1eb59055",8016:"b41e626b",8135:"008053ce",8161:"16ad380b",8240:"07097856",8264:"d0d4d5da",8321:"5790e79f",8361:"a0397ec7",8368:"a48964aa",8469:"dae2ea08",8486:"0c4e3049",8549:"36753692",8654:"d99b89ee",8777:"175e4afb",8821:"628d19f6",8839:"d555c660",8843:"49a32e2d",8857:"1c52b5ac",8860:"66f1a39b",8871:"9b45e899",9022:"9002ec84",9178:"555e6bc8",9234:"2c06f406",9253:"947c97a5",9678:"29502a5a",9747:"19f291db",9752:"6f324d7b",9861:"1e528f3c",9918:"de9eb72c",9969:"a4dcc38e"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@kvib/storybook:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@kvib/storybook:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();