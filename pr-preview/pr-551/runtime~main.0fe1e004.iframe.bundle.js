(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({95:"components-radio-Radio-stories",141:"components-number-input-NumberInput-stories",170:"components-search-search-Search-stories",377:"components-Typography-highlight-Highlight-stories",384:"components-textarea-Textarea-mdx",389:"components-button-Button-stories",397:"components-progress-Progress-mdx",430:"components-icon-button-IconButton-mdx",511:"components-tabs-Tabs-stories",590:"design-design-tokens-design-tokens-mdx",598:"components-show-hide-ShowHide-mdx",670:"components-popover-Popover-mdx",934:"design-Icon-stories",961:"components-button-Button-mdx",1006:"components-textarea-Textarea-stories",1059:"components-icon-button-IconButton-stories",1068:"components-circular-progress-CircularProgress-stories",1141:"components-transitions-SlideFade-mdx",1195:"components-Input-Input-stories",1198:"components-data-display-card-Card-mdx",1375:"components-editable-Editable-mdx",1407:"design-Icon-mdx",1435:"components-Typography-highlight-Highlight-mdx",1538:"components-footer-footer-inline-FooterInline-stories",1542:"components-menu-Menu-mdx",1551:"components-visually-hidden-VIsuallyHidden-mdx",1640:"components-data-display-divider-Divider-mdx",1732:"components-alert-Alert-stories",1754:"components-transitions-Slide-stories",1817:"components-stepper-Stepper-mdx",1824:"components-file-upload-FileUpload-stories",1879:"components-link-Link-mdx",1881:"components-close-button-CloseButton-stories",2108:"components-pin-input-PinInput-mdx",2110:"components-menu-Menu-stories",2347:"components-link-overlay-LinkOverlay-stories",2479:"components-data-display-stat-Stat-stories",2626:"components-Layout-Center-Center-mdx",2640:"components-transitions-Collapse-stories",2748:"documentation-introduksjon-mdx",2841:"components-modal-Modal-mdx",2846:"components-data-display-table-Table-mdx",2879:"components-spinner-Spinner-stories",2993:"components-select-Select-stories",3009:"components-toast-Toast-mdx",3121:"components-Typography-Heading-Heading-mdx",3142:"components-stepper-Stepper-stories",3148:"components-datepicker-Datepicker-mdx",3184:"components-Layout-AspectRatio-AspectRatio-stories",3257:"components-portal-Portal-stories",3262:"components-data-display-card-Card-stories",3422:"components-pin-input-PinInput-stories",3424:"documentation-bidra-Dokumentere-mdx",3427:"components-alert-Alert-mdx",3566:"components-data-display-kbd-Kbd-stories",3631:"components-number-input-NumberInput-mdx",3645:"components-portal-Portal-mdx",3707:"components-modal-Modal-stories",3796:"documentation-bidra-Teste-mdx",3903:"components-Layout-Center-Center-stories",3931:"components-accordion-Accordion-mdx",3935:"components-datepicker-Datepicker-stories",3939:"components-link-overlay-LinkOverlay-mdx",3955:"components-Layout-Box-Box-stories",3956:"components-search-search-async-SearchAsync-mdx",4082:"components-popover-Popover-stories",4111:"components-search-search-Search-mdx",4164:"components-drawer-Drawer-mdx",4225:"components-Layout-SimpleGrid-SimpleGrid-stories",4268:"components-form-control-Form-control-mdx",4321:"components-data-display-code-Code-mdx",4410:"components-footer-footer-inline-FooterInline-mdx",4424:"components-data-display-tag-Tag-mdx",4438:"components-data-display-kbd-Kbd-mdx",4474:"components-select-Select-mdx",4528:"components-drawer-Drawer-stories",4531:"documentation-taIBruk-mdx",4532:"components-Typography-Heading-Heading-stories",4559:"documentation-changelog-mdx",4635:"components-Layout-Wrap-Wrap-mdx",4737:"components-data-display-list-list-mdx",4781:"design-logo-Logo-stories",4862:"documentation-bidra-Style-mdx",4882:"components-Layout-Box-Box-mdx",4994:"documentation-bidra-Publish-mdx",5035:"components-tooltip-Tooltip-mdx",5073:"components-alert-dialog-AlertDialog-mdx",5085:"components-Layout-SimpleGrid-SimpleGrid-mdx",5110:"components-footer-footer-Footer-stories",5196:"components-Input-Input-mdx",5308:"components-transitions-Collapse-mdx",5325:"components-data-display-badge-Badge-mdx",5354:"components-file-upload-FileUpload-mdx",5368:"components-breadcrumb-Breadcrumb-stories",5400:"components-transitions-Slide-mdx",5408:"components-Typography-Text-Text-mdx",5409:"documentation-bidra-KjenteProblemer-mdx",5511:"components-checkbox-Checkbox-stories",5539:"components-link-Link-stories",5624:"components-data-display-tag-Tag-stories",5654:"components-Layout-Grid-Grid-stories",5656:"components-circular-progress-CircularProgress-mdx",5761:"components-Layout-Flex-Flex-stories",5826:"components-search-search-async-SearchAsync-stories",5912:"components-tooltip-Tooltip-stories",6032:"components-header-Header-stories",6068:"components-avatar-Avatar-stories",6132:"components-range-slider-RangeSlider-stories",6205:"hooks-Hooks-mdx",6288:"components-checkbox-Checkbox-mdx",6302:"components-switch-Switch-mdx",6373:"components-slider-Slider-mdx",6437:"components-accordion-Accordion-stories",6457:"components-Layout-Stack-Stack-stories",6521:"components-skip-nav-SkipNav-mdx",6617:"components-transitions-Fade-mdx",6636:"design-logo-Logo-mdx",6710:"components-skip-nav-SkipNav-stories",6722:"components-image-Image-mdx",6795:"components-Layout-Stack-Stack-mdx",6925:"components-Layout-Container-Container-stories",7122:"components-alert-dialog-AlertDialog-stories",7123:"components-Layout-Flex-Flex-mdx",7341:"components-avatar-Avatar-mdx",7366:"components-breadcrumb-Breadcrumb-mdx",7428:"components-footer-footer-Footer-mdx",7542:"components-radio-Radio-mdx",7559:"components-editable-Editable-stories",7771:"documentation-bidra-Generelt-mdx",7898:"components-data-display-badge-Badge-stories",7933:"components-data-display-list-List-stories",8016:"components-Typography-Text-Text-stories",8083:"components-transitions-SlideFade-stories",8126:"components-transitions-ScaleFade-stories",8135:"components-skeleton-Skeleton-stories",8161:"components-Layout-Grid-Grid-mdx",8183:"components-Layout-AspectRatio-ApectRatio-mdx",8264:"components-Layout-Wrap-Wrap-stories",8295:"components-toast-Toast-stories",8299:"components-transitions-Fade-stories",8368:"components-data-display-stat-Stat-mdx",8469:"components-slider-Slider-stories",8486:"components-close-button-CloseButton-mdx",8542:"components-header-Header-mdx",8549:"documentation-bidra-Bygge-mdx",8654:"components-data-display-table-Table-stories",8777:"components-data-display-divider-Divider-stories",8837:"components-transitions-ScaleFade-mdx",8839:"components-Layout-Container-Container-mdx",8843:"components-range-slider-RangeSlider-mdx",8857:"components-image-Image-stories",8860:"components-spinner-Spinner-mdx",9143:"components-switch-Switch-stories",9319:"design-ColorsMaps-mdx",9678:"components-tabs-Tabs-mdx",9747:"components-progress-Progress-stories",9752:"components-form-control-Form-control-stories",9861:"components-skeleton-Skeleton-mdx",9918:"components-show-hide-ShowHide-stories",9969:"components-data-display-code-Code-stories"}[chunkId]||chunkId)+"."+{95:"0479eb31",141:"e4c95f67",165:"7e47fbac",170:"360960ba",377:"33f8e6a0",384:"9ddbd556",389:"64d0e9f2",397:"c6f97b10",430:"4e596ba1",511:"4aede7f8",522:"4e829639",590:"e75b93e6",598:"fe4a8d02",670:"b1b1b3a1",934:"0d05dde3",961:"7bec868e",981:"a636dd99",1006:"b3b856d4",1040:"36bf8d6e",1059:"74f539f1",1068:"3d089530",1141:"cffa4edd",1179:"5f83fe8e",1195:"4ef159a4",1198:"3704ffd6",1375:"f22ad8c4",1407:"de2a7839",1435:"0486574f",1538:"6cdb0d1b",1542:"5a745c64",1551:"af9ecd33",1640:"c8150415",1732:"b3b402a1",1754:"c5da32ad",1770:"258409af",1817:"9be9c298",1824:"65edb02a",1879:"d704f72b",1881:"448edc0e",2108:"59cd4515",2110:"297465a4",2347:"8b7a4e13",2479:"694af498",2626:"f480b63a",2640:"c3e4d786",2748:"566caf78",2841:"99bf0e75",2846:"8cb57ca6",2879:"6e5d9566",2993:"ad283e50",3009:"4323d964",3024:"2dcd5055",3121:"bb6fa374",3142:"30ff0e3c",3148:"990f9245",3176:"bb2609b0",3184:"60dc61ea",3257:"134c5e3b",3262:"7a050916",3422:"7cef68ca",3424:"4f18d316",3427:"b5f7ab02",3473:"eab0c8c5",3549:"473fa2bf",3566:"1463cd8c",3631:"5b1d1911",3645:"7dfaf806",3707:"f1307f70",3796:"e822d401",3903:"16602bca",3931:"54e61977",3935:"835270d1",3939:"efcfbe3c",3955:"d9402c68",3956:"7843d2b3",4047:"1a3707e5",4082:"9cfcae68",4105:"4b944d35",4111:"3866c9b2",4164:"18478bd9",4225:"7c182a3a",4259:"551fe117",4268:"a40d1ca0",4321:"56c73304",4410:"0a5a530a",4424:"bc263f5d",4438:"21ea1b84",4474:"095f555e",4528:"f994c40e",4531:"46f7ae79",4532:"f3343048",4543:"362269c9",4559:"e6a9d6ac",4635:"9c7910ed",4667:"b12a6820",4737:"d7c2bbf5",4781:"d3949bbb",4862:"75eada83",4882:"a40b0a76",4994:"b43d46f3",5035:"f4719449",5073:"91f50477",5085:"fe6af4dd",5110:"6b8c4e88",5196:"cb365e5f",5308:"3345eb8a",5325:"0ad9c528",5354:"9ad54bee",5368:"35afea1b",5400:"39fd06c6",5408:"46a55219",5409:"46781ebf",5492:"9d1717e9",5511:"e6c08e8b",5512:"c0e0f3ad",5539:"8bb38471",5624:"0cea5620",5654:"d1899d07",5656:"087e2fad",5733:"f3761ec0",5761:"644fb487",5826:"8f3d77e5",5892:"1d3e3136",5912:"063018cb",5936:"b8aca303",6032:"b8c27d0b",6068:"f24be83b",6132:"55674331",6205:"f6ed1ccf",6265:"618950db",6288:"28cedf29",6294:"974d8762",6302:"d220b90d",6373:"976e14db",6437:"13015d01",6457:"f7d2e33e",6521:"3983b6a9",6617:"7ad2a94c",6636:"408489d6",6710:"f3dddfe7",6722:"5ee0b922",6745:"3b53b9f4",6795:"443066a2",6905:"f0d87c4e",6925:"f1b6f6ec",7122:"0276ed52",7123:"71d3dd1d",7341:"8428f2e2",7366:"ae2e3834",7428:"c4ef4ed4",7493:"b3435db7",7542:"ce2f453b",7559:"518ef6fa",7771:"224cbe56",7842:"aa79e1ea",7898:"80854599",7933:"01c4b8da",7935:"d6a449e4",7998:"82de0926",8016:"3c9d3ec8",8083:"619f8b14",8126:"32136a5b",8135:"3292c9f3",8161:"94567c1a",8183:"abadaa06",8264:"7b9b0c55",8291:"73dce964",8295:"c4fab0d8",8299:"bb7f1909",8368:"888f0cdf",8469:"7bafd955",8486:"b690ab5e",8509:"b0f023f3",8542:"2796a2f5",8549:"66bcc524",8654:"8af1a33f",8777:"c1da687a",8837:"fcc8bc1b",8839:"5e731eb3",8843:"5202d75f",8857:"1c34de05",8860:"1fb09896",9143:"9f721b21",9319:"e3ec0178",9574:"9f22afdb",9609:"06a81cd9",9678:"c4bedd31",9747:"12873b78",9752:"cd53fbd9",9861:"985cd44a",9918:"089cbf61",9969:"013ed7ea"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@kvib/storybook:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@kvib/storybook:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();