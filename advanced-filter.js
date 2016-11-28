var _ = require("lodash");

var calcAvgPay = function(workers){
  totalPay = _.reduce(workers, function(result, worker){
    return result += worker.income;
  }, 0);
  return totalPay / workers.length;
};

var payPerformanceAnalysis = function(workers) {
  avgPay = calcAvgPay(workers);
  workers = _.sortBy(workers, 'income');
  var result = {average: avgPay};

  underperformers = _.filter(workers, function(worker){
    return worker.income <= avgPay
  });
  overperformers = _.filter(workers, function(worker){
    return worker.income > avgPay
  });

  result.underperform = underperformers
  result.overperform = overperformers
  return result;
};

module.exports = payPerformanceAnalysis;
