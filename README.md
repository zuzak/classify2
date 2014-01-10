# classify2

[![Build Status](https://travis-ci.org/zuzak/classify2.png?branch=master)](https://travis-ci.org/zuzak/classify2)
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
