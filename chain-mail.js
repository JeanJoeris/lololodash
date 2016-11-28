var _ = require("lodash");

var chainMailer = function(strings) {
  var results = _
    .chain(strings)
    .map(function(string){return (string+'chained').toUpperCase();})
    .sortBy();

  return results
};

module.exports = chainMailer;
