# consoleui
This is a Node.js project to create user interface for the console.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yusufshakeel/consoleui)
[![npm version](https://img.shields.io/badge/npm-0.1.0-blue.svg)](https://www.npmjs.com/package/consoleui)
[![npm Downloads](https://img.shields.io/npm/dm/consoleui.svg)](https://www.npmjs.com/package/consoleui)

## Getting started

```shell
npm i consoleui
```

## Require

```js
// ESM
import { Modal } from 'consoleui';

// CommonJs
const { Modal } = require('consoleui');
```

## Modal

```js
import { Modal } from 'consoleui';

const modal = new Modal()
  .withTitle('My title')
  .withBody('This is a sample body for testing and it is occupying multiple lines.')
  .withYesButton()
  .withNoButton()
  .withOkayButton()
  .withCloseButton()
  .build();
```

When we print the modal we will get the following.

```txt
   ┌─────────────────────────────────┐
   │ My title                        │▒
   ├─────────────────────────────────┤▒
   │ This is a sample body for       │▒
   │ testing and it is occupying     │▒
   │ multiple lines.                 │▒
   │                                 │▒
   ├─────────────────────────────────┤▒
   │ [Y]es [N]o [O]kay [C]lose       │▒
   └─────────────────────────────────┘▒
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
```

## License

It's free :smiley:

[MIT License](https://github.com/yusufshakeel/consoleui/blob/main/LICENSE) Copyright (c) 2024 Yusuf Shakeel

### Donate

Feeling generous :smiley: [Donate via PayPal](https://www.paypal.me/yusufshakeel)