import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as o}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-DaI8LtN9.js";import{ae as i}from"./index-DYIgjWA5.js";import{K as s}from"./KvibProvider--k27BiMj.js";import{A as a}from"./Alert-BCDyBpvg.js";import{A as l}from"./chunk-3KCBMPN5-Dapgpkcw.js";import{A as d}from"./chunk-CUKBNH6U-Bnoln8s6.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BSZf6IIr.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";/* empty css              */import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-34PD6CUK-B1dqEPkL.js";import"./index-CHDWSgKD.js";import"./index-DJS8qWMq.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./chunk-VMD3UMGK-5-kd4ADr.js";import"./index-CCHl0gzi.js";import"./borders-ChvaHRB1.js";import"./colors-BETQBCi-.js";import"./shadows-BswyqW6w.js";import"./radius-CY-lFcmF.js";import"./breakpoints-C6iAAgq8.js";import"./blur-CDuQaoya.js";import"./spacing-CccXtI2E.js";import"./typography-Ce5Admmz.js";import"./chunk-3Y4YXCR2-DtyLwNq4.js";import"./index-DdaX-njP.js";import"./index-DEiKcbOK.js";import"./proxy-CdnPo0W_.js";import"./chunk-QURMB2UJ-D6nRmiHQ.js";import"./chunk-37N6GCLA-D1CkRx4c.js";import"./chunk-2GBDXOMA-K_WHOyag.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./index-DLHofduV.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"For utviklere/Kom i gang"}),`
`,e.jsx(n.h1,{id:"oppsett",children:"Oppsett"}),`
`,e.jsxs(n.p,{children:["For å ta i bruk komponentbiblioteket må du installere ",e.jsx(n.code,{children:"@kvib/react"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`$ npm install @kvib/react
# eller
$ yarn add @kvib/react
`})}),`
`,e.jsxs(n.p,{children:["Etterpå må du wrappe hele react-applikasjonen din ",e.jsx(n.code,{children:"KvibProvider"}),"-komponenten."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// I din src/app.tsx fil:
import "./App.css";
import { Button, KvibProvider } from "@kvib/react";

function App() {
  return (
    <KvibProvider>
      <Button>Knapp</Button>
    </KvibProvider>
  );
}

export default App;
`})}),`
`,e.jsx(n.p,{children:"I eksempelet over har vi også lagt til en knapp som viser hvordan du tar i bruk et designsystem-komponent i applikasjonen din."}),`
`,e.jsx(n.h2,{id:"endre-default-farge",children:"Endre default-farge"}),`
`,e.jsx(n.p,{children:`Default farge-tema for Kartverkets designsystem er grønt. Dette skal gjelde for alle applikasjoner som skal ligne Kartverket.no i stylingen.
For applikasjoner med skjema og karttjenester skal man imidlertid benytte blått fargetema.
Dette gjøres ved å legge til et customTheme med colorScheme: "blue", og benytte det i KVIB-provideren slik:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// I din src/app.tsx fil:
import "./App.css";
import { Button, KvibProvider, extendTheme, defaultKvibTheme, withDefaultColorScheme } from "@kvib/react";

const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: "blue" }), defaultKvibTheme);

function App() {
  return (
    <KvibProvider theme={customTheme}>
      <Button>Knapp</Button>
    </KvibProvider>
  );
}

export default App;
`})}),`
`,e.jsx(n.h2,{id:"egen-styling---inline-styling-og-styled-components",children:"Egen styling - inline styling og styled-components"}),`
`,e.jsx(s,{children:e.jsxs(a,{status:"info",children:[e.jsx(l,{}),e.jsxs(d,{children:[e.jsxs(n.p,{children:[`I utgangspunktet skal man benytte komponentene fra Kartverkets designsystem med stylingen som er der. Er
det
funksjoner og design du synes mangler i dagens bibliotek, ønsker vi at du bidrar med dette til biblioteket
istedenfor å overskrive stylingen i eget prosjekt- da kan fler enn deg ta det i bruk! Se `,e.jsx(n.a,{href:"/docs/for-utviklere-bidra-med-kode-hurtigveiledning--docs",children:`dokumentasjonen
for
hvordan bidra til designsystemet`}),` for guidelines.
Dersom det likevel er nødvendig å
gjøre egne tilpassninger av stylingen til eget prosjekt, kan dette gjøres med inline styling eller
styled-components.`]}),e.jsx(n.p,{children:e.jsx(n.strong,{children:"Avklar med designer før du lager egen styling."})})]})]})}),`
`,e.jsxs(n.p,{children:[`La oss si du bruker en knapp fra Kartverkets designbibliotek, men du ønsker å tilpasse den litt.
Et alternativ er å benytte inline-styling, som f.eks. `,e.jsx(n.code,{children:'<Button background="red">Klikk her</Button>'}),`. Et annet alternativ er styled-components, som noen team allerede benytter.
For å endre farge med sistnevnte kan man skrive: `,e.jsx(n.code,{children:"const RedButton = styled(Button)"}),"background: red",e.jsx(n.code,{children:"; "}),`. En fordel med styled-components er at stylingen er samlet.
Likevel må noen ekstra konfigurasjoner gjøres for at dette skal fungere. Under følger beskrivelse av hvorfor og hvordan du setter det opp styled-components med Kartverkets komponenter.`]}),`
`,e.jsxs(n.p,{children:["Både Chakra UI (bygd på emotion) og styled-components (nesten det samme som emotion) genererer klassenavn som settes på elementene som skal styles, også settes en lang rekke med stylesheets i ",e.jsx(n.code,{children:"<head>"}),` der stilene er definert.
Chakra sine stylesheets blir appendet på `,e.jsx(n.code,{children:"<head>"}),` , altså de kommer alltid sist. Videre har selectorene samme grunnleggende specificity (de targeter bare et klassenavn), og derfor blir det stilen som er definert sist som blir gjeldende, altså Chakra sitt.
Med andre ord kan man ikke style Chakra-komponenter (som våres komponenter igjen bygger på) med styled-components uten å gjøre noen konfigurasjoner.`]}),`
`,e.jsxs(n.p,{children:["Det første åpenbare alternativet er å bruke ",e.jsx(n.code,{children:"!important"}),", men dette kan fort bli rot dersom du skal overstyre dette igjen og må bruke ",e.jsx(n.code,{children:"!!important"}),`.
Det andre alternativet er å lure seg til en mer spesifikk selector som dette: `,e.jsx(n.code,{children:"&&& { background: red; }"}),`, men det er uintuitivt og er ikke tydelig på når man trenger å bruke selectoren, hva den egentlig gjør, at man må bruke den alle steder man ønsker å overstyre chakra, osv.
Et tredje alternativ kunne vært CSS Layers som nå får støtte i nettleserne. Likevel kan man møte på noen av de samme problemene her ved at man må gjøre det overalt, og at man plutselig trenger å overstyre den også.
Problemet er rekkefølgen på stylesheets i `,e.jsx(n.code,{children:"<head>"})," , noe Chakra ikke har en konfigurasjonsmulighet for per nå. Det kan likevel løses med en cache for Chakra sin styling som lages gjennom emotion (som er mulig ettersom Chakra, og derav våre komponenter, bygger på emotion)."]}),`
`,e.jsxs(n.p,{children:["Slik setter du Chakra sin styling øverst i ",e.jsx(n.code,{children:"<head>"})," i ditt eget prosjekt: (all styling som defineres etterpå med samme eller sterkere specificity vil overskrive det)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

export default function App() {
  return (
    <CacheProvider value={emotionCache}>
      <KvibProvider>{children}</KvibProvider>
    </CacheProvider>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"obs-om-import",children:"Obs om import"}),`
`,e.jsx(n.p,{children:`I og med at Kartverkets designsystem inneholder hele Chakra-biblioteket har noen brukere opplevd at de ved et
uhell har tatt i brukt chakra-komponenter i steden for designsystem-komponenter, og at dette har ført til uheldig oppførsel. Eks:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { NumberInput, NumberInputField } from "@kvib/react";
import { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

const Eksempel = () => (
  <NumberInput>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);
`})}),`
`,e.jsx(n.p,{children:`Siden Kartverkets designsystem tilbyr alle de samme komponentene som Chakra skal ikke dette være nødvendig, men det kan fort skje ved en feil ved at
VS-code eller Idea foreslår å importere fra feil pakke.
For å unngå problemet er det mulig å sette innstillinger i editoren din til å hindre import forslag fra Chakra, eller å legge inn følgende regel i es-lint:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`"no-restricted-imports": ["error", { "patterns": ["@chakra-ui/*"] }]
`})}),`
`,e.jsx(n.h2,{id:"oppsett-av-kartverkets-designsystem-ved-bruk-av-remix",children:"Oppsett av Kartverkets Designsystem ved bruk av Remix"}),`
`,e.jsx(n.h3,{id:"1-installer-kartverket-designsystem-i-repoet",children:"1. Installer Kartverket Designsystem i repoet:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`$ npm install @kvib/react
# eller
$ yarn add @kvib/react
`})}),`
`,e.jsx(n.h3,{id:"2-sett-opp-provider",children:"2. Sett opp provider:"}),`
`,e.jsxs(n.p,{children:["Legg til ",e.jsx(n.code,{children:"context.tsx"})," i app-mappen og legg til følgende kode:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// context.tsx
import { createContext } from 'react'

export interface ServerStyleContextData {
  key: string
  ids: Array<string>
  css: string
}

export const ServerStyleContext = createContext<ServerStyleContextData[] | null>(null)

export interface ClientStyleContextData {
  reset: () => void
}

export const ClientStyleContext = createContext<ClientStyleContextData | null>(null)
`})}),`
`,e.jsxs(n.p,{children:["Legg til ",e.jsx(n.code,{children:"createEmotionCache.ts"})," i app-mappen og legg til følgende kode:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// createEmotionCache.ts
import createCache from "@emotion/cache";

export const defaultCache = createEmotionCache();

export default function createEmotionCache() {
  return createCache({ key: "cha" });
}
`})}),`
`,e.jsx(n.p,{children:"Etter det så må vi modifisere entry-filene for både client og server. Her skal vi bruke createEmotionCache-funksjonen:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// entry.client.tsx
import React, { useState } from "react";
import { hydrate } from "react-dom";
import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";

import { ClientStyleContext } from "./context";
import createEmotionCache, { defaultCache } from "./createEmotionCache";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(defaultCache);

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document,
);
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// entry.server.tsx
import { renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node"; // Depends on the runtime you choose

import { ServerStyleContext } from "./context";
import createEmotionCache from "./createEmotionCache";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const html = renderToString(
    <ServerStyleContext.Provider value={null}>
      <CacheProvider value={cache}>
        <RemixServer context={remixContext} url={request.url} />
      </CacheProvider>
    </ServerStyleContext.Provider>,
  );

  const chunks = extractCriticalToChunks(html);

  const markup = renderToString(
    <ServerStyleContext.Provider value={chunks.styles}>
      <CacheProvider value={cache}>
        <RemixServer context={remixContext} url={request.url} />
      </CacheProvider>
    </ServerStyleContext.Provider>,
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(\`<!DOCTYPE html>\${markup}\`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
`})}),`
`,e.jsxs(n.p,{children:["I ",e.jsx(n.code,{children:"root.tsx"})," skal vi lage en ",e.jsx(n.code,{children:"Document"})," wrapper:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// root.tsx
import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { MetaFunction, LinksFunction } from "@remix-run/node"; // Depends on the runtime you choose
import { cssBundleHref } from "@remix-run/css-bundle";

import { ServerStyleContext, ClientStyleContext } from "./context";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export let links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(({ children }: DocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      (emotionCache.sheet as any)._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData?.reset();
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style key={key} data-emotion={\`\${key} \${ids.join(" ")}\`} dangerouslySetInnerHTML={{ __html: css }} />
        ))}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});
`})}),`
`,e.jsxs(n.p,{children:["Legg til ",e.jsx(n.code,{children:"serverDependenciesToBundle: [/^@kvib\\\\/react/, /^material-symbols/]"})," i ",e.jsx(n.code,{children:"remix.config.js"})]}),`
`,e.jsx(n.p,{children:"Til slutt må du wrappe appen:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: "blue" }), theme);

export default function App() {
  return (
    <Document>
      <KvibProvider theme={customTheme}>
        <Outlet />
      </KvibProvider>
    </Document>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"3-importer-material-symbols-for-å-bruke-ikoner",children:"3. Importer material symbols for å bruke ikoner:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "material-symbols/rounded.css";
`})})]})}function ie(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{ie as default};
