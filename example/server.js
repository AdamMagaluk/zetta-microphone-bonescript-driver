var zetta = require('zetta');
var Microphone = require('../index');

zetta()
  .use(Microphone, 'P9_36')
  .listen(1337);
