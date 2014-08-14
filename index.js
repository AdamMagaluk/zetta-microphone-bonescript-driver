var AutoScout = require('zetta-auto-scout');
var Microphone = require('./microphone_driver');

module.exports = new AutoScout('microphone', Microphone);
