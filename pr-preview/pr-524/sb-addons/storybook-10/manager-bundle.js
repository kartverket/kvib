try{
var U=__STORYBOOKADDONS__,{addons:e,types:g,mockChannel:V}=__STORYBOOKADDONS__;var v=__STORYBOOKTHEMING__,{CacheProvider:M,ClassNames:y,Global:F,ThemeProvider:Z,background:B,color:C,convert:H,create:o,createCache:E,createGlobal:_,createReset:x,css:L,darken:O,ensure:D,ignoreSsrWarning:S,isPropValid:T,jsx:k,keyframes:I,lighten:K,styled:R,themes:N,typography:P,useTheme:q,withTheme:G}=__STORYBOOKTHEMING__;var l='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.26 82.54"><g id="Layer_2" data-name="Layer 2"><g id="Layer_8" data-name="Layer 8"><path d="M4,40.92V7.08H9V22.3h.09L24.62,7.08h6.2L12.58,24.65l0-2.35L32.06,40.92H25.68L9.07,25.13H9V40.92Z" transform="translate(-3.98 -5.59)"/><path d="M43.92,41.35a10.39,10.39,0,0,1-5.62-1.49,9.77,9.77,0,0,1-3.72-4.32,15.73,15.73,0,0,1-1.32-6.72,15.61,15.61,0,0,1,1.32-6.72,10,10,0,0,1,3.72-4.29,10.32,10.32,0,0,1,5.62-1.51,9.62,9.62,0,0,1,5.52,1.58,7.5,7.5,0,0,1,3.12,4.32H52l.48-5.47h4.71c-.1,1-.19,2-.27,2.95s-.12,1.93-.12,2.86V40.92H52V35.54h.53a7.34,7.34,0,0,1-3.14,4.25A9.72,9.72,0,0,1,43.92,41.35Zm1.2-3.79a6.31,6.31,0,0,0,5-2.21Q52,33.15,52,28.82c0-2.88-.63-5-1.89-6.5a6.32,6.32,0,0,0-5-2.18,6.34,6.34,0,0,0-5.06,2.18c-1.27,1.46-1.9,3.62-1.9,6.5s.62,5.06,1.87,6.53A6.34,6.34,0,0,0,45.12,37.56Z" transform="translate(-3.98 -5.59)"/><path d="M63.79,40.92V22.73c0-1,0-2-.07-3s-.12-2-.22-3h4.71L68.74,23H68a9.14,9.14,0,0,1,1.63-3.75A7.06,7.06,0,0,1,72.41,17a8.61,8.61,0,0,1,3.48-.72,8.4,8.4,0,0,1,2.35.28l0,4.32a5.28,5.28,0,0,0-1.41-.4,12,12,0,0,0-1.47-.08,6.65,6.65,0,0,0-3.6.94,6,6,0,0,0-2.25,2.52,7.61,7.61,0,0,0-.77,3.41V40.92Z" transform="translate(-3.98 -5.59)"/><path d="M92.69,41.35a7.83,7.83,0,0,1-6-2.13c-1.34-1.43-2-3.56-2-6.41V20.47H80V16.73h4.7V10.34l4.85-1.29v7.68h6.72v3.74H89.57V32.38a6,6,0,0,0,1,3.84,3.43,3.43,0,0,0,2.78,1.15,7,7,0,0,0,1.61-.17,8.23,8.23,0,0,0,1.27-.41v3.94a8.49,8.49,0,0,1-1.68.45A9.87,9.87,0,0,1,92.69,41.35Z" transform="translate(-3.98 -5.59)"/><path d="M108.14,40.92,97.77,16.73H103l8.16,20.21h-1.39L118,16.73H123L112.56,40.92Z" transform="translate(-3.98 -5.59)"/><path d="M137.57,41.35a14.14,14.14,0,0,1-6.75-1.49,10.27,10.27,0,0,1-4.32-4.29,13.93,13.93,0,0,1-1.51-6.7,14.29,14.29,0,0,1,1.46-6.62,10.76,10.76,0,0,1,4.08-4.39,11.66,11.66,0,0,1,6.08-1.56,10.59,10.59,0,0,1,5.71,1.44,9.19,9.19,0,0,1,3.5,4.05A14.7,14.7,0,0,1,147,28V29.5H128.78V26.71h14.93l-.82.63a8.72,8.72,0,0,0-1.6-5.6,5.65,5.65,0,0,0-4.64-2,6.29,6.29,0,0,0-6.19,4.06,12.11,12.11,0,0,0-.81,4.68V29q0,4.28,2.08,6.43a7.88,7.88,0,0,0,5.93,2.16,12.73,12.73,0,0,0,4-.6,10.7,10.7,0,0,0,3.53-2l1.58,3.31a11.56,11.56,0,0,1-4.08,2.28A16,16,0,0,1,137.57,41.35Z" transform="translate(-3.98 -5.59)"/><path d="M152.49,40.92V22.73c0-1,0-2-.07-3s-.12-2-.21-3h4.7l.53,6.24h-.77a9.14,9.14,0,0,1,1.63-3.75,7.13,7.13,0,0,1,2.81-2.2,8.61,8.61,0,0,1,3.48-.72,8.27,8.27,0,0,1,2.35.28l-.05,4.32a5.28,5.28,0,0,0-1.41-.4,12,12,0,0,0-1.47-.08,6.68,6.68,0,0,0-3.6.94,6,6,0,0,0-2.25,2.52,7.75,7.75,0,0,0-.77,3.41V40.92Z" transform="translate(-3.98 -5.59)"/><path d="M170.69,40.92V5.59h4.84v21.7h.1l10.56-10.56h6L179.42,29.45l.05-2.16,13.78,13.63H187.1L175.63,29.83h-.1V40.92Z" transform="translate(-3.98 -5.59)"/><path d="M206.88,41.35a14.16,14.16,0,0,1-6.75-1.49,10.27,10.27,0,0,1-4.32-4.29,14,14,0,0,1-1.51-6.7,14.17,14.17,0,0,1,1.47-6.62,10.63,10.63,0,0,1,4.08-4.39,11.6,11.6,0,0,1,6.07-1.56,10.59,10.59,0,0,1,5.71,1.44,9.13,9.13,0,0,1,3.5,4.05,14.7,14.7,0,0,1,1.2,6.17V29.5H198.09V26.71H213l-.81.63a8.72,8.72,0,0,0-1.61-5.6,5.63,5.63,0,0,0-4.63-2,6.29,6.29,0,0,0-6.2,4.06,12.11,12.11,0,0,0-.81,4.68V29c0,2.85.69,5,2.09,6.43A7.84,7.84,0,0,0,207,37.56a12.73,12.73,0,0,0,4-.6,10.6,10.6,0,0,0,3.53-2l1.59,3.31A11.56,11.56,0,0,1,212,40.56,16.1,16.1,0,0,1,206.88,41.35Z" transform="translate(-3.98 -5.59)"/><path d="M231.26,41.35c-2.62,0-4.61-.71-5.95-2.13s-2-3.56-2-6.41V20.47h-4.7V16.73h4.7V10.34l4.85-1.29v7.68h6.72v3.74h-6.72V32.38a6,6,0,0,0,1,3.84,3.45,3.45,0,0,0,2.79,1.15,7,7,0,0,0,1.6-.17,8.36,8.36,0,0,0,1.28-.41v3.94a8.49,8.49,0,0,1-1.68.45A9.9,9.9,0,0,1,231.26,41.35Z" transform="translate(-3.98 -5.59)"/><path d="M247.58,41.35a19,19,0,0,1-5.57-.77,11.91,11.91,0,0,1-4.22-2.16l1.49-3.31a12.64,12.64,0,0,0,3.93,2,14.71,14.71,0,0,0,4.42.67,6.9,6.9,0,0,0,4-.94A3,3,0,0,0,253,34.3a2.6,2.6,0,0,0-.84-2,5.75,5.75,0,0,0-2.76-1.15l-4.61-.91a9,9,0,0,1-4.66-2.31,5.77,5.77,0,0,1-1.58-4.17,6.49,6.49,0,0,1,1.18-3.84,7.77,7.77,0,0,1,3.36-2.64,12.59,12.59,0,0,1,5.11-1,15.77,15.77,0,0,1,5,.76A10.4,10.4,0,0,1,257,19.27l-1.54,3.22a11.47,11.47,0,0,0-3.36-1.95,10.85,10.85,0,0,0-3.79-.69,6.39,6.39,0,0,0-4,1A3.17,3.17,0,0,0,243,23.5a2.8,2.8,0,0,0,.79,2,5.49,5.49,0,0,0,2.52,1.22l4.61.91a10,10,0,0,1,4.9,2.21A5.39,5.39,0,0,1,257.47,34a6.42,6.42,0,0,1-1.25,3.93,7.68,7.68,0,0,1-3.45,2.55A14.36,14.36,0,0,1,247.58,41.35Z" transform="translate(-3.98 -5.59)"/><path d="M4.36,79.05V50.85h9.76a18,18,0,0,1,8.06,1.64,11.23,11.23,0,0,1,5,4.78,15.85,15.85,0,0,1,1.7,7.66,15.83,15.83,0,0,1-1.7,7.64,11.21,11.21,0,0,1-5,4.82,17.73,17.73,0,0,1-8.06,1.66Zm4.16-3.48h5.36q5.45,0,8.1-2.64c1.78-1.76,2.66-4.42,2.66-8S23.76,58.7,22,57s-4.47-2.62-8.1-2.62H8.52Z" transform="translate(-3.98 -5.59)"/><path d="M43.48,79.41a11.84,11.84,0,0,1-5.62-1.24,8.52,8.52,0,0,1-3.6-3.58A11.61,11.61,0,0,1,33,69a11.94,11.94,0,0,1,1.22-5.52,9,9,0,0,1,3.4-3.66,9.77,9.77,0,0,1,5.06-1.3,8.8,8.8,0,0,1,4.76,1.2,7.6,7.6,0,0,1,2.92,3.38,12.21,12.21,0,0,1,1,5.14v1.28H36.16V67.21H48.6l-.68.52a7.2,7.2,0,0,0-1.34-4.66,4.69,4.69,0,0,0-3.86-1.66,5.23,5.23,0,0,0-5.16,3.38,10.12,10.12,0,0,0-.68,3.9v.4a7.42,7.42,0,0,0,1.74,5.36,6.56,6.56,0,0,0,4.94,1.8,10.37,10.37,0,0,0,3.3-.5,8.69,8.69,0,0,0,2.94-1.66l1.32,2.76a9.45,9.45,0,0,1-3.4,1.9A13.4,13.4,0,0,1,43.48,79.41Z" transform="translate(-3.98 -5.59)"/><path d="M62.92,79.41a15.92,15.92,0,0,1-4.64-.64A9.83,9.83,0,0,1,54.76,77L56,74.21a10.51,10.51,0,0,0,3.28,1.68,12.12,12.12,0,0,0,3.68.56,5.79,5.79,0,0,0,3.32-.78,2.46,2.46,0,0,0,1.12-2.14,2.17,2.17,0,0,0-.7-1.68,4.91,4.91,0,0,0-2.3-1l-3.84-.76a7.48,7.48,0,0,1-3.88-1.92,4.77,4.77,0,0,1-1.32-3.48,5.48,5.48,0,0,1,1-3.2,6.65,6.65,0,0,1,2.8-2.2,10.61,10.61,0,0,1,4.26-.8,13.24,13.24,0,0,1,4.16.64A8.58,8.58,0,0,1,70.76,61l-1.28,2.68a9.5,9.5,0,0,0-2.8-1.62,9.14,9.14,0,0,0-3.16-.58,5.39,5.39,0,0,0-3.32.84,2.66,2.66,0,0,0-1.08,2.2,2.29,2.29,0,0,0,.66,1.7,4.47,4.47,0,0,0,2.1,1l3.84.76a8.34,8.34,0,0,1,4.08,1.84,4.5,4.5,0,0,1,1.36,3.44,5.29,5.29,0,0,1-1,3.28,6.3,6.3,0,0,1-2.88,2.12A11.77,11.77,0,0,1,62.92,79.41Z" transform="translate(-3.98 -5.59)"/><path d="M75.6,54.69v-4.2h4.68v4.2Zm.32,24.36V58.89h4V79.05Z" transform="translate(-3.98 -5.59)"/><path d="M95,88A17.7,17.7,0,0,1,90,87.37a12.46,12.46,0,0,1-4-1.92l1-3a13.82,13.82,0,0,0,2.44,1.34,11.81,11.81,0,0,0,2.52.74,15.2,15.2,0,0,0,2.72.24,5.86,5.86,0,0,0,4.34-1.46,5.68,5.68,0,0,0,1.46-4.22v-5.4h.4a6.06,6.06,0,0,1-2.62,3.54,8.11,8.11,0,0,1-4.58,1.3,9,9,0,0,1-4.78-1.22,8.14,8.14,0,0,1-3.12-3.48,13.46,13.46,0,0,1,0-10.66,8.26,8.26,0,0,1,3.12-3.46,9.11,9.11,0,0,1,4.78-1.22,8.08,8.08,0,0,1,4.58,1.3,6.14,6.14,0,0,1,2.58,3.54l-.36-.32.36-4.16h3.92q-.15,1.24-.24,2.46c0,.82-.08,1.61-.08,2.38V78.65c0,3-.8,5.36-2.42,7S98.08,88,95,88Zm-.28-12.6a5.33,5.33,0,0,0,4.22-1.8,7.41,7.41,0,0,0,1.58-5.08,7.29,7.29,0,0,0-1.58-5,5.4,5.4,0,0,0-4.22-1.76,5.51,5.51,0,0,0-4.3,1.76,7.34,7.34,0,0,0-1.58,5,7.46,7.46,0,0,0,1.58,5.08A5.44,5.44,0,0,0,94.68,75.41Z" transform="translate(-3.98 -5.59)"/><path d="M110.36,79.05V63.73c0-.77,0-1.56-.1-2.38s-.14-1.63-.22-2.46H114l.36,4.24h-.48a7.07,7.07,0,0,1,2.84-3.42,8.37,8.37,0,0,1,4.44-1.18,7,7,0,0,1,5.38,2c1.22,1.31,1.82,3.34,1.82,6.08V79.05h-4V66.81A5.71,5.71,0,0,0,123.22,63,4.13,4.13,0,0,0,120,61.77a5.43,5.43,0,0,0-4.08,1.58,5.92,5.92,0,0,0-1.52,4.26V79.05Z" transform="translate(-3.98 -5.59)"/><path d="M141,79.41a15.92,15.92,0,0,1-4.64-.64,9.83,9.83,0,0,1-3.52-1.8l1.24-2.76a10.51,10.51,0,0,0,3.28,1.68,12.12,12.12,0,0,0,3.68.56,5.79,5.79,0,0,0,3.32-.78,2.46,2.46,0,0,0,1.12-2.14,2.17,2.17,0,0,0-.7-1.68,4.91,4.91,0,0,0-2.3-1l-3.84-.76a7.48,7.48,0,0,1-3.88-1.92,4.77,4.77,0,0,1-1.32-3.48,5.48,5.48,0,0,1,1-3.2,6.65,6.65,0,0,1,2.8-2.2,10.58,10.58,0,0,1,4.26-.8,13.24,13.24,0,0,1,4.16.64,8.58,8.58,0,0,1,3.2,1.84l-1.28,2.68a9.5,9.5,0,0,0-2.8-1.62,9.14,9.14,0,0,0-3.16-.58,5.39,5.39,0,0,0-3.32.84,2.66,2.66,0,0,0-1.08,2.2,2.29,2.29,0,0,0,.66,1.7,4.47,4.47,0,0,0,2.1,1l3.84.76a8.34,8.34,0,0,1,4.08,1.84,4.5,4.5,0,0,1,1.36,3.44,5.29,5.29,0,0,1-1,3.28,6.3,6.3,0,0,1-2.88,2.12A11.77,11.77,0,0,1,141,79.41Z" transform="translate(-3.98 -5.59)"/><path d="M153,88.13l-1-3.28a15.26,15.26,0,0,0,3.14-1,6.31,6.31,0,0,0,2.1-1.46,7.8,7.8,0,0,0,1.44-2.3l1-2.36-.08,1.64-8.76-20.52h4.32l6.8,16.8h-1.08l6.8-16.8h4.16l-9.24,21.6a17.33,17.33,0,0,1-1.88,3.36,10,10,0,0,1-2.16,2.2A9.7,9.7,0,0,1,156,87.37,18.76,18.76,0,0,1,153,88.13Z" transform="translate(-3.98 -5.59)"/><path d="M181.56,79.41a15.87,15.87,0,0,1-4.64-.64A9.74,9.74,0,0,1,173.4,77l1.24-2.76a10.51,10.51,0,0,0,3.28,1.68,12.12,12.12,0,0,0,3.68.56,5.81,5.81,0,0,0,3.32-.78A2.46,2.46,0,0,0,186,73.53a2.17,2.17,0,0,0-.7-1.68,4.91,4.91,0,0,0-2.3-1l-3.84-.76a7.44,7.44,0,0,1-3.88-1.92A4.77,4.77,0,0,1,174,64.73a5.48,5.48,0,0,1,1-3.2,6.59,6.59,0,0,1,2.8-2.2,10.55,10.55,0,0,1,4.26-.8,13.28,13.28,0,0,1,4.16.64A8.58,8.58,0,0,1,189.4,61l-1.28,2.68a9.63,9.63,0,0,0-2.8-1.62,9.14,9.14,0,0,0-3.16-.58,5.39,5.39,0,0,0-3.32.84,2.66,2.66,0,0,0-1.08,2.2,2.29,2.29,0,0,0,.66,1.7,4.47,4.47,0,0,0,2.1,1l3.84.76a8.42,8.42,0,0,1,4.08,1.84,4.5,4.5,0,0,1,1.36,3.44,5.35,5.35,0,0,1-1,3.28,6.3,6.3,0,0,1-2.88,2.12A11.85,11.85,0,0,1,181.56,79.41Z" transform="translate(-3.98 -5.59)"/><path d="M202.2,79.41a6.5,6.5,0,0,1-5-1.78,7.5,7.5,0,0,1-1.68-5.34V62h-3.92V58.89h3.92V53.57l4-1.08v6.4h5.6V62h-5.6v9.92a5,5,0,0,0,.8,3.2,2.86,2.86,0,0,0,2.32,1,5.41,5.41,0,0,0,1.34-.14,6,6,0,0,0,1.06-.34v3.28a6.9,6.9,0,0,1-1.4.38A8.19,8.19,0,0,1,202.2,79.41Z" transform="translate(-3.98 -5.59)"/><path d="M218,79.41a11.81,11.81,0,0,1-5.62-1.24,8.52,8.52,0,0,1-3.6-3.58A11.61,11.61,0,0,1,207.52,69a11.94,11.94,0,0,1,1.22-5.52,9,9,0,0,1,3.4-3.66,9.74,9.74,0,0,1,5.06-1.3,8.83,8.83,0,0,1,4.76,1.2,7.67,7.67,0,0,1,2.92,3.38,12.21,12.21,0,0,1,1,5.14v1.28h-15.2V67.21h12.44l-.68.52a7.26,7.26,0,0,0-1.34-4.66,4.69,4.69,0,0,0-3.86-1.66,5.61,5.61,0,0,0-3.18.88,5.47,5.47,0,0,0-2,2.5,10.12,10.12,0,0,0-.68,3.9v.4a7.42,7.42,0,0,0,1.74,5.36,6.56,6.56,0,0,0,4.94,1.8,10.46,10.46,0,0,0,3.3-.5,8.69,8.69,0,0,0,2.94-1.66l1.32,2.76a9.53,9.53,0,0,1-3.4,1.9A13.44,13.44,0,0,1,218,79.41Z" transform="translate(-3.98 -5.59)"/><path d="M230.52,79.05V63.73c0-.77,0-1.56-.1-2.38s-.14-1.63-.22-2.46h3.92l.36,4.24H234a7.08,7.08,0,0,1,2.58-3.4,7.17,7.17,0,0,1,4.18-1.2,6.65,6.65,0,0,1,4.06,1.18A6.2,6.2,0,0,1,247,63.33h-.64a7,7,0,0,1,2.72-3.5,7.78,7.78,0,0,1,4.44-1.3,6.3,6.3,0,0,1,5,2q1.68,2,1.68,6.08V79.05h-4V66.77a6.37,6.37,0,0,0-.9-3.82,3.44,3.44,0,0,0-2.9-1.18,4.6,4.6,0,0,0-3.68,1.6,6.45,6.45,0,0,0-1.36,4.32V79.05h-4V66.77a6.37,6.37,0,0,0-.9-3.82,3.44,3.44,0,0,0-2.9-1.18,4.48,4.48,0,0,0-3.64,1.6,6.59,6.59,0,0,0-1.32,4.32V79.05Z" transform="translate(-3.98 -5.59)"/></g></g></svg>';var i=window.location.hostname==="localhost",s=o({base:"light",fontBase:'"Mulish Variable", "Open Sans", sans-serif',fontCode:"monospace",brandTitle:"KVIB",brandUrl:i?"/":"/kvib",brandImage:l,brandTarget:"_self",colorPrimary:"#D0ECD6",colorSecondary:"#1A833B",appBg:"white",appContentBg:"white",appBorderColor:"#E3E0E0",appBorderRadius:16,textColor:"#202020",textInverseColor:"#ffffff",barTextColor:"#1A833B",barBg:"#E9F4EC"});e.setConfig({theme:s,title:"KVIB | Kartverket",showToolbar:!1,panelPosition:"right"});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
