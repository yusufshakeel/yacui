# yacui (yet another console ui)
This is a Node.js project to create user interface for the console.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yusufshakeel/yacui)
[![npm version](https://img.shields.io/badge/npm-0.1.10-blue.svg)](https://www.npmjs.com/package/yacui)
[![npm Downloads](https://img.shields.io/npm/dm/yacui.svg)](https://www.npmjs.com/package/yacui)

## Table of content

- [yacui (yet another console ui)](#yacui-yet-another-console-ui)
  - [Table of content](#table-of-content)
  - [Getting started](#getting-started)
  - [Require](#require)
  - [Components](#components)
    - [Window](#window)
    - [Modal](#modal)
  - [License](#license)
  - [Donate](#donate)

## Getting started

```shell
npm i yacui
```

## Require

```js
// ESM
import { Modal } from 'yacui';

// CommonJs
const { Modal } = require('yacui');
```

## Components

### Window

```js
import { Window } from 'yacui';

const window = new Window()
  .withTitle('My title')
  .withFooter({ items: ['[F10] Quit'] })
  .withWidth(50)
  .withHeight(10)
  .build();
```

When we print the modal we will get the following.

```txt
╔════════════════════════════════════════════════╗
║ My title                                       ║
╠════════════════════════════════════════════════╣
║                                                ║
║                                                ║
║                                                ║
║                                                ║
╠════════════════════════════════════════════════╣
║ [F10] Quit                                     ║
╚════════════════════════════════════════════════╝
```

### Modal

```js
import { Modal } from 'yacui';

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
│ My title                        │░
├─────────────────────────────────┤░
│ This is a sample body for       │░
│ testing and it is occupying     │░
│ multiple lines.                 │░
│                                 │░
├─────────────────────────────────┤░
│ [Y]es [N]o [O]kay [C]lose       │░
└─────────────────────────────────┘░
 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

## License

It's free :smiley:

[MIT License](https://github.com/yusufshakeel/yacui/blob/main/LICENSE) Copyright (c) 2024 Yusuf Shakeel

## Donate

Feeling generous :smiley: [Donate via PayPal](https://www.paypal.me/yusufshakeel)