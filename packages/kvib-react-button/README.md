# Button (React)

Buttons are action triggers, and the Spor Design System comes with a lot of them!

## Installation

```bash
$ npm install @kartverket/kvib-react-button
```

## Usage

```tsx
import { Button, IconButton, ButtonGroup } from "@kartverket/kvib-react-button";
```

### `<Button />`

#### `variant`

There are several button variants. You can specify which one you want with the `variant` prop. The available variants are:

- `primary`: This is our main button. It's used for the main actions in a view, like a call to action. There should only be a single primary button in each view.
- `secondary`: Used for secondary actions in a view, and when you need to make several actions available at the same time.

#### `size`

There are also different sizes. You can specify which one you want with the `size` prop. The available sizes are "sm" and "md".
