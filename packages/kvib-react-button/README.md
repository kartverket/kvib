# Button (React)

## Innstallering

```bash
$ npm install @kartverket/kvib-react-button
```

## Bruk

```tsx
import { Button } from "@kartverket/kvib-react-button";
```


### `<Button />` props

#### `variant`
- `primary` (default)
- `secondary`
- `tertiary`

#### `colorScheme`
- `green` (default)
- `blue`

#### `size`
- `sm` (default)
- `md`

#### `leftIcon` og `rightIcon`
Ikoner kan legges til gjennom propsene `leftIcon` og `rightIcon`. Disse tar inn navnet på ikonet som en streng.