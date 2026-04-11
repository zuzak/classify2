# classify2

> **Note:** The OCLC Classify web service was retired and is no longer available.
> This package will return `null` for all lookups. It is kept here for historical purposes.
> See [Why is OCLC discontinuing OCLC Classify?](https://help.oclc.org/Librarian_Toolbox/Troubleshooting/Why_is_OCLC_discontinuing_OCLC_Classify)

[![NPM version](https://badge.fury.io/js/classify2.png)](http://badge.fury.io/js/classify2)

A node.js package for interaction with the Online Computer Library Center's
experimental classification web service,
[classify2](http://classify.oclc.org/classify2/).

## Usage
```js
var classify = require( 'classify2' )
console.log( 'Dewey Decimal: ' + classify.get( '020161586X' ).dewey )
console.log( 'Library of Congress: ' + classify.get( '020161586X' ).congress )
console.log( 'Response: ' + classify.get( '020161586X' ).status )
```

[![NPM](https://nodei.co/npm/classify2.png)](https://nodei.co/npm/classify2/)
