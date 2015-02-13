var util = require('util');
var AutoScout = require('zetta-auto-scout');
var Microphone = require('./microphone_driver');

var BoneScout = module.exports = function(pin, interval) {
  AutoScout.call(this, 'microphone', Microphone, pin, interval);
};
util.inherits(BoneScout, AutoScout);
