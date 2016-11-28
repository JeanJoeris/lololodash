var _ = require("lodash");

var groupByTemp = function(cities) {
  var groupedCities = {
    hot: [],
    warm: []
  };
  var isHot, isWarm;

  _.forEach(cities, function(temps, cityName) {
    isHot = _.every(temps, function(temp) {
      return temp > 19;
    });
    isWarm = _.some(temps, function(temp) {
      return temp > 19;
    });
    if (isHot && isWarm) {
      groupedCities.hot.push(cityName);
    } else if (isWarm) {
      groupedCities.warm.push(cityName);
    }
  });
  return groupedCities;
};

module.exports = groupByTemp;
