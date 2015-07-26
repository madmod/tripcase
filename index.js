// tripcase
// By John Wells (https://github.com/madmod)
//
// Unofficial TripCase API client.
//

'use strict';

var debug = require('debug')('tripcase');

var uuid = require('node-uuid');
var hardwareId = uuid.v4().toUpperCase();

debug('hardwareId', hardwareId);

var request = require('request');
var cookies = require('tough-cookie');

var api = request.defaults({
  baseUrl: 'https://www.tripcase.com/mapi',
  headers: {
    'App-Agent': 'TripCase/5 {"touch":true,"device":"iOS","app_version":"4.0.0","osv":"8.3","locale":"en-us","screen_size":"414x716","device_type":"1","device_hwid":"'+ hardwareId +'","native":"PhoneGap"}',
    'Accept': 'application/json',
    'Accept-Language': 'en-us',
    'Content-Type': 'application/json',
    'Origin': 'file://',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F70 (5046860304)'
  },
  json: true,
  jar: true
});


// TripCase API client constructor
// Requires an email and password in options
function TripCase (options) {
  if (!options || !options.email || !options.password) throw 'Missing required options';

  this.email = options.email;
  this.password = options.password;
  this.session = null;

  return this;
};


// Login to TripCase and save the session
TripCase.prototype.login = function login (callback) {
  return api.post(
    '/sessions.json?v=20150105',
    {
      body: {
        email: this.email,
        password: this.password
      }
    },
    callback
  );
};


// Get upcoming TripCase trips
TripCase.prototype.getTrips = function getTrips (callback) {
  return api(
    '/trips.json?active=true',
    callback
  );
};


// Get a TripCase trip's details by id
TripCase.prototype.getTripDetails = function getTripDetails (id, callback) {
  // TODO: Make parameters optional
  return api(
    '/trips/'+ id +'.json?suppress_messages=true&destination=true',
    callback
  );
};


module.exports = TripCase;

