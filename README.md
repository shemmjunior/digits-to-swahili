#### Build Status
[![Build Status](https://travis-ci.com/shemmjunior/digits-to-swahili.svg?branch=main)](https://travis-ci.com/shemmjunior/digits-to-swahili)   ![NPM Stats](https://img.shields.io/npm/dt/digits-to-swahili)

# Digits to Swahili

A Node package to convert digits to swahili words based on Standard commonjs

### Installation

` npm i digits-to-swahili`

#### Usage

```js

const { toSwahili } = require('digits-to-swahili');
toSwahili(500) // Mia tano

```

```ts

import { toSwahili } from 'digits-to-swahili';
toSwahili(200) // Mia mbili
```

#### Testing

If you want to test the package, download this repository and install dependencies using `npm i` or `npm install` 

Test is done using mocha.js and here are the steps to run tests

1. In the root directory open test/converter.js
2. Edit the const's of Test Parameters to your own digits
3. Edit the Expected output to the same digits in expected swahili language
4. Now run `npm run test`


#### For Issues
Also Feel free to contribute by creating a PR into the repository


#### Licence
The MIT License (MIT)








