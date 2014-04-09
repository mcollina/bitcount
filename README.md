bitcount&nbsp;&nbsp;[![Build Status](https://travis-ci.org/mcollina/bitcount.png)](https://travis-ci.org/mcollina/bitcount)
=================================================================

Counts your bits in a number or in a Buffer

  * <a href="#install">Installation</a>
  * <a href="#basic">Basic Example</a>
  * <a href="#licence">Licence &amp; copyright</a>

<a name="install"></a>
## Installation

```
$ npm install bitcount --save
```

<a name="basic"></a>
## Basic Example

```js
var bitcount = require('bitcount')

console.log(bitcount(5))
console.log(bitcount(new Buffer([1, 0, 1]))
```

## LICENSE

Copyright (c) 2014, Matteo Collina <hello@matteocollina.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
