#!/usr/bin/env node
// tripcase
// By John Wells (https://github.com/madmod)
//
// Command line interface to the unofficial TripCase API client.
//

'use strict';

var debug = require('debug')('tripcase-cli');

var meow = require('meow');

var tripcase = require('./');


// TODO: Replace demo code with useful command line options

var cli = meow({
  help: [
    'Usage',
    '  $ tripcase email password'
  ]
});


var api = new tripcase({
  email: cli.input[0],
  password: cli.input[1]
});


api.login(function (err, res, body) {
  if (err) throw err;
  console.log(body);

  api.getTrips(function (err, res, trips) {
    if (err) throw err;

    console.log('trips', body);

    api.getTripDetails(trips[0].id, function (err, res, tripDetails) {
      console.log('gotDetails', res)
      if (err) throw err;

      console.log('details', tripDetails);
    });
  });
});

