# tripcase [![Build Status](https://travis-ci.org/madmod/tripcase.svg?branch=master)](https://travis-ci.org/madmod/tripcase)

An unofficial TripCase API client.

This uses the internal TripCase mobile API which may change without notice.

## Install

```
$ npm install --save tripcase
```


## Usage

```js
var TripCase = require('tripcase');

var tripcase = new TripCase({
  email: 'user@example.com',
  password: 'supersecret'
});

tripcase.login(function (err, res, body) {
  if (err) throw err;

  tripcase.getTrips(function (err, res, trips) {
    if (err) throw err;
    console.log('upcoming trips', trips);
  });
});
```


## CLI

```
$ npm install --global tripcase
```
```
$ tripcase username password
```


## License

MIT © [madmod](http://johnathanwells.com)

