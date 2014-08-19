var Device = require('zetta').Device;
var util = require('util');
var bone = require('bonescript');

var Microphone = module.exports = function(pin) {
  Device.call(this);
  this.pin = pin || 'P9_40';
  bone.pinMode(this.pin, bone.INPUT);
};
util.inherits(Microphone, Device);

Microphone.prototype.init = function(config) {
  config
    .state('ready')
    .type('microphone')
    .name('Microphone')
    .monitor('amplitude');

  var self = this;
  setInterval(function() {
    bone.analogRead(self.pin, function(x) {
      if (x.err) {
        return;
      }
      
      x.value = (x.value === 0) ? 1 : x.value;

      x.value = Number((100 * x.value).toFixed(3));
      self.amplitude = x.value;
    });
  }, 50);

};


