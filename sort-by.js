var _ = require("lodash");

var sortDesc = function(items) {
  return _.sortBy(items, function(item) {
    return -item.quantity;
  });
};

module.exports = sortDesc;
