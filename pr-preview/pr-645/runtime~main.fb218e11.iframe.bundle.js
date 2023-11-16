(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({95:"components-radio-Radio-stories",141:"components-number-input-NumberInput-stories",170:"components-search-search-Search-stories",377:"components-Typography-highlight-Highlight-stories",384:"components-textarea-Textarea-mdx",389:"components-button-Button-stories",397:"components-progress-Progress-mdx",430:"components-icon-button-IconButton-mdx",511:"components-tabs-Tabs-stories",590:"design-design-tokens-design-tokens-mdx",598:"components-show-hide-ShowHide-mdx",670:"components-popover-Popover-mdx",934:"design-Icon-stories",961:"components-button-Button-mdx",1006:"components-textarea-Textarea-stories",1059:"components-icon-button-IconButton-stories",1068:"components-circular-progress-CircularProgress-stories",1141:"components-transitions-SlideFade-mdx",1195:"components-Input-Input-stories",1198:"components-data-display-card-Card-mdx",1375:"components-editable-Editable-mdx",1407:"design-Icon-mdx",1435:"components-Typography-highlight-Highlight-mdx",1538:"components-footer-footer-inline-FooterInline-stories",1542:"components-menu-Menu-mdx",1551:"components-visually-hidden-VIsuallyHidden-mdx",1640:"components-data-display-divider-Divider-mdx",1732:"components-alert-Alert-stories",1754:"components-transitions-Slide-stories",1817:"components-stepper-Stepper-mdx",1824:"components-file-upload-FileUpload-stories",1879:"components-link-Link-mdx",1881:"components-close-button-CloseButton-stories",2108:"components-pin-input-PinInput-mdx",2110:"components-menu-Menu-stories",2347:"components-link-overlay-LinkOverlay-stories",2479:"components-data-display-stat-Stat-stories",2626:"components-Layout-Center-Center-mdx",2640:"components-transitions-Collapse-stories",2748:"documentation-introduksjon-mdx",2841:"components-modal-Modal-mdx",2846:"components-data-display-table-Table-mdx",2879:"components-spinner-Spinner-stories",2993:"components-select-Select-stories",3009:"components-toast-Toast-mdx",3121:"components-Typography-Heading-Heading-mdx",3142:"components-stepper-Stepper-stories",3148:"components-datepicker-Datepicker-mdx",3184:"components-Layout-AspectRatio-AspectRatio-stories",3257:"components-portal-Portal-stories",3262:"components-data-display-card-Card-stories",3422:"components-pin-input-PinInput-stories",3424:"documentation-bidra-Dokumentere-mdx",3427:"components-alert-Alert-mdx",3566:"components-data-display-kbd-Kbd-stories",3631:"components-number-input-NumberInput-mdx",3645:"components-portal-Portal-mdx",3707:"components-modal-Modal-stories",3796:"documentation-bidra-Teste-mdx",3903:"components-Layout-Center-Center-stories",3931:"components-accordion-Accordion-mdx",3935:"components-datepicker-Datepicker-stories",3939:"components-link-overlay-LinkOverlay-mdx",3955:"components-Layout-Box-Box-stories",3956:"components-search-search-async-SearchAsync-mdx",4082:"components-popover-Popover-stories",4111:"components-search-search-Search-mdx",4164:"components-drawer-Drawer-mdx",4225:"components-Layout-SimpleGrid-SimpleGrid-stories",4268:"components-form-control-Form-control-mdx",4321:"components-data-display-code-Code-mdx",4410:"components-footer-footer-inline-FooterInline-mdx",4424:"components-data-display-tag-Tag-mdx",4438:"components-data-display-kbd-Kbd-mdx",4474:"components-select-Select-mdx",4528:"components-drawer-Drawer-stories",4531:"documentation-taIBruk-mdx",4532:"components-Typography-Heading-Heading-stories",4559:"documentation-changelog-mdx",4635:"components-Layout-Wrap-Wrap-mdx",4737:"components-data-display-list-list-mdx",4781:"design-logo-Logo-stories",4862:"documentation-bidra-Style-mdx",4882:"components-Layout-Box-Box-mdx",4994:"documentation-bidra-Publish-mdx",5035:"components-tooltip-Tooltip-mdx",5073:"components-alert-dialog-AlertDialog-mdx",5085:"components-Layout-SimpleGrid-SimpleGrid-mdx",5110:"components-footer-footer-Footer-stories",5196:"components-Input-Input-mdx",5308:"components-transitions-Collapse-mdx",5325:"components-data-display-badge-Badge-mdx",5354:"components-file-upload-FileUpload-mdx",5368:"components-breadcrumb-Breadcrumb-stories",5400:"components-transitions-Slide-mdx",5408:"components-Typography-Text-Text-mdx",5409:"documentation-bidra-KjenteProblemer-mdx",5511:"components-checkbox-Checkbox-stories",5539:"components-link-Link-stories",5624:"components-data-display-tag-Tag-stories",5654:"components-Layout-Grid-Grid-stories",5656:"components-circular-progress-CircularProgress-mdx",5684:"documentation-bidra-Hurtigveiledning-mdx",5761:"components-Layout-Flex-Flex-stories",5826:"components-search-search-async-SearchAsync-stories",5912:"components-tooltip-Tooltip-stories",6032:"components-header-Header-stories",6068:"components-avatar-Avatar-stories",6132:"components-range-slider-RangeSlider-stories",6205:"hooks-Hooks-mdx",6288:"components-checkbox-Checkbox-mdx",6302:"components-switch-Switch-mdx",6373:"components-slider-Slider-mdx",6437:"components-accordion-Accordion-stories",6457:"components-Layout-Stack-Stack-stories",6521:"components-skip-nav-SkipNav-mdx",6617:"components-transitions-Fade-mdx",6636:"design-logo-Logo-mdx",6710:"components-skip-nav-SkipNav-stories",6722:"components-image-Image-mdx",6795:"components-Layout-Stack-Stack-mdx",6925:"components-Layout-Container-Container-stories",7122:"components-alert-dialog-AlertDialog-stories",7123:"components-Layout-Flex-Flex-mdx",7341:"components-avatar-Avatar-mdx",7366:"components-breadcrumb-Breadcrumb-mdx",7428:"components-footer-footer-Footer-mdx",7542:"components-radio-Radio-mdx",7559:"components-editable-Editable-stories",7898:"components-data-display-badge-Badge-stories",7933:"components-data-display-list-List-stories",8016:"components-Typography-Text-Text-stories",8083:"components-transitions-SlideFade-stories",8126:"components-transitions-ScaleFade-stories",8135:"components-skeleton-Skeleton-stories",8161:"components-Layout-Grid-Grid-mdx",8183:"components-Layout-AspectRatio-ApectRatio-mdx",8264:"components-Layout-Wrap-Wrap-stories",8295:"components-toast-Toast-stories",8299:"components-transitions-Fade-stories",8368:"components-data-display-stat-Stat-mdx",8469:"components-slider-Slider-stories",8486:"components-close-button-CloseButton-mdx",8542:"components-header-Header-mdx",8549:"documentation-bidra-Bygge-mdx",8654:"components-data-display-table-Table-stories",8777:"components-data-display-divider-Divider-stories",8837:"components-transitions-ScaleFade-mdx",8839:"components-Layout-Container-Container-mdx",8843:"components-range-slider-RangeSlider-mdx",8857:"components-image-Image-stories",8860:"components-spinner-Spinner-mdx",8874:"components-tabs-tab-stories",9143:"components-switch-Switch-stories",9319:"design-ColorsMaps-mdx",9678:"components-tabs-Tabs-mdx",9747:"components-progress-Progress-stories",9752:"components-form-control-Form-control-stories",9861:"components-skeleton-Skeleton-mdx",9918:"components-show-hide-ShowHide-stories",9969:"components-data-display-code-Code-stories"}[chunkId]||chunkId)+"."+{95:"54791f03",141:"0c617cf8",160:"ffd51c0d",170:"53990c27",377:"66d02f41",384:"935ea72d",389:"6f215b9f",397:"f6b24cbd",430:"702d8d64",511:"37a7fe42",522:"4e829639",590:"34c12fc5",598:"0aa9fb65",670:"cc853071",934:"dc67b373",961:"d8673950",1006:"363bcbf9",1040:"36bf8d6e",1059:"f51291fd",1068:"85082745",1141:"f4fc5d5f",1183:"8047bae6",1189:"65518aa8",1195:"47a48bc2",1198:"5e8ea3a5",1359:"7e1a6b6e",1375:"52b25248",1407:"198a8c0e",1435:"9b05e381",1487:"cce58249",1538:"02f2daa2",1542:"0a741504",1551:"af9ecd33",1640:"631e61f5",1732:"646ffe4a",1754:"0d0eae8a",1817:"e02e0eed",1824:"bcd390f9",1879:"bc3bbd4a",1881:"efcb9bb7",2108:"d1aba973",2110:"d316ebbd",2115:"8dbf3d63",2236:"55d10ed9",2347:"a810aa59",2479:"4a633d9a",2506:"14a96c72",2600:"31055ddc",2626:"3d5ea125",2640:"3b8f080b",2748:"4db512f9",2841:"5a9b5b05",2846:"0f9680f1",2879:"440e25ac",2993:"8d8f1af7",3009:"97b2b0db",3024:"2cfcf4c9",3121:"fffb0fa7",3142:"7822de8d",3148:"defca5f4",3176:"bb2609b0",3184:"eb0cc886",3257:"669a1190",3262:"59a506a1",3422:"593f3a61",3424:"eba28aaa",3427:"aa765bb5",3566:"c27059ba",3631:"595cf5f0",3645:"49bcf780",3700:"c6d610fc",3707:"3838cafb",3796:"d276466a",3903:"2cd05389",3931:"2d7c68f2",3935:"938aac47",3939:"fd9e6e1a",3955:"f0a6c006",3956:"0cdcec66",4047:"1a3707e5",4082:"378bdfda",4111:"c3b9e5b0",4164:"4068d609",4225:"c59634f0",4259:"6cbfc9b9",4268:"be46e297",4321:"36f87041",4410:"69e0257f",4424:"ea410526",4438:"15cd1b3d",4474:"db7891cb",4528:"dd639c83",4531:"3ed6d466",4532:"459680ba",4559:"4b9206c6",4605:"9e8a3c30",4635:"53eb4636",4667:"b12a6820",4737:"659ac6cf",4781:"57371ed6",4862:"3dfbca01",4882:"df0cc6dc",4994:"019557a4",5035:"0e5f2ab6",5073:"9478a030",5085:"04e0011f",5110:"50da9b15",5139:"902729b1",5196:"4742faf6",5308:"68fa012c",5325:"887e23e1",5354:"ee691bed",5368:"c408a600",5400:"928837ea",5408:"ea6df8d6",5409:"2e8e9ce5",5453:"bb3a4096",5473:"a5e03d76",5492:"9d1717e9",5511:"45730148",5539:"4a0c1f2d",5624:"b6d786d7",5654:"f952e17a",5656:"a823b58c",5684:"9edba49e",5733:"f3761ec0",5761:"0573a944",5826:"4e9bba64",5892:"1d3e3136",5912:"99327352",6032:"21baa946",6068:"208a3f29",6132:"b520dd7d",6205:"65044173",6265:"84a4ecf9",6288:"99b2ad3a",6302:"d4b50546",6358:"7aa6f07e",6363:"783d51e0",6373:"fc5ba6a5",6437:"dc4e6fd6",6457:"a5437d62",6521:"158c09d9",6529:"a9a9b3a8",6617:"21499f59",6636:"14cb6051",6710:"3d43cf78",6722:"496761fb",6783:"98d34b0a",6795:"321aec7a",6925:"a33cac91",7122:"e7126a9c",7123:"27841dc0",7341:"db10d1ca",7348:"a2512855",7366:"990957f6",7428:"30265440",7542:"3b7c30dc",7559:"4b33edad",7570:"6fa53bc8",7885:"913b0b8a",7898:"bd7ab7b9",7933:"b2680f60",7998:"716a2db2",8016:"1111c533",8083:"45cef829",8091:"802977b0",8126:"704ae278",8135:"1aaf3d8b",8154:"f9f1712a",8161:"5c15f910",8183:"214d2107",8264:"86b97d22",8295:"da7ae329",8299:"fc0e7f4e",8368:"77009677",8421:"601fe182",8469:"aee4c2b7",8486:"94f085ab",8509:"b0f023f3",8542:"8bf0d51b",8549:"7f1e32e7",8626:"92ef06b8",8654:"29c84dd5",8777:"3d29928e",8837:"7f90d64e",8839:"8cdc952a",8843:"b974afe2",8857:"1c626447",8860:"b41dfb4d",8874:"1438d661",8959:"b7ba26f0",9143:"380822d4",9296:"e284e3d7",9319:"8ad590e5",9578:"d8dc6779",9678:"1e45dfa1",9747:"fdea0bde",9752:"b9ed08c9",9861:"9dc7361a",9918:"494b5522",9969:"dc35f03f"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@kvib/storybook:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@kvib/storybook:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_kvib_storybook=self.webpackChunk_kvib_storybook||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();