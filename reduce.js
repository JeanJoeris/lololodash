var _ = require("lodash");

var orderTotals = function(orders){
  var groupedOrders = _.groupBy(orders, 'article');

  var countedOrders = _.map(groupedOrders, function(orders, articleID){
    var articleID = parseInt(articleID);
    var counted = _.reduce(orders, function(result, order){
      oldQuantity = (result.total_orders || 0)
      return result = {article: articleID, total_orders: oldQuantity+order.quantity}
    }, {});
    return counted;
  });

  return _.sortBy(countedOrders, 'quantity').reverse();
};

module.exports = orderTotals;
