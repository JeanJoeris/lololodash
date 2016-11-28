var _ = require("lodash");

var citySizer = function(cities) {
  return _.forEach(cities, function(city) {
    if (city.population < 0.5) {
      var size = 'small'
    } else if (city.population < 1) {
      var size = 'med'
    } else {
      var size = 'big';
    };
    city.size = size;
  });
};

module.exports = citySizer;
