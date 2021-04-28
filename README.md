# doc

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[![XO code style][xo-img]][xo]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/doc.svg
[npm]:             https://www.npmjs.com/package/@tadashi/doc
[ci-img]:          https://github.com/lagden/doc/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/doc/actions?query=workflow%3A%22Node.js+CI%22
[coveralls-img]:   https://coveralls.io/repos/github/lagden/doc/badge.svg?branch=main
[coveralls]:       https://coveralls.io/github/lagden/doc?branch=main
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo


Validate CPF/CNPJ.


## Install

```
$ npm i -S @tadashi/doc
```


## API

```ts
onlyNumber(c: string): array
isCnpj(c: string): boolean
isCpf(c: string): boolean
```


## Usage

```js
import {isCnpj, isCpf, onlyNumber} from '@tadashi/doc'

isCpf('090.885.670-93')      // => true
isCnpj('29.249.091/0001-85') // => true
onlyNumber('1.2.3')          // => [1, 2, 3]
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
