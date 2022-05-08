# Build Status

[![Build Status](https://travis-ci.com/shemmjunior/digits-to-swahili.svg?branch=main)](https://travis-ci.com/shemmjunior/digits-to-swahili)   ![NPM Stats](https://img.shields.io/npm/dt/digits-to-swahili)

## Digits to Swahili

A Node package to convert digits to swahili words based on Standard commonjs

## Installation

`npm i digits-to-swahili`

## Usage

Importing

```js

const { toSwahili } = require('digits-to-swahili');

toSwahili(500) // Mia tano

```

OR

```ts

import { toSwahili } from 'digits-to-swahili';

toSwahili(200) // Mia mbili
```

## Tests

Tests are done using mocha.js. You can directly test via the following steps:

1. In the root directory open test/converter.js
2. Edit the const's of Test Parameters to your own digits
3. Edit the Expected output to the same digits in expected swahili language
4. Now run `npm run test`

## Contributing

In case you notice a bug, please open an issue mentioning the input that has caused an incorrect conversion.

## Licence

The MIT License (MIT)
