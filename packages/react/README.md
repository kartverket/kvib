# KVIB React komponentbibliotek

## Ta i bruk

For å ta i bruk komponentbiblioteket må du installere `@kvib/react`.

```
$ npm install @kvib/react
# eller
$ yarn add @kvib/react
```

Etterpå må du wrappe hele react-applikasjonen din `KvibProvider`-komponenten.

```jsx
// I din src/index.tsx fil for eksempel:
import { App } from 'App';
import { KvibProvider } from '@kvib/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <KvibProvider>
    <App />
  </KvibProvider>
);
```

Nå kan du begynne å ta i bruk komponenter i applikasjonen din. For å ta i bruk for eksempel `Button`-komponenten gjør du slik:

```jsx
import { Button } from "@kvib/react";

export const App = () => {
  return (
    <Button variant="primary">
      Rediger
    </Button>
  );
};
```

# Utvikling og bidrag

Les readme på rot for å lese mer om hvordan utvikle og bidra til KVIB.
