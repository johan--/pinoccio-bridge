// combine bridge and serial event stream
var bridge = require('pinoccio-server/bridge');
var serial = require('./serial.js');

module.exports = function(com,options,readycb){
  var s = serial(com,readycb);
  var b = bridge(options)

  s.bridge = b;

  s.pipe(b).pipe(s);

  return s;
}
