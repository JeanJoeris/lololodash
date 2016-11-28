var _ = require("lodash");

var countedComments = function(comments) {
  // var usersComments = _.groupBy(comments, 'username');
  //
  // var counted =  _.map(usersComments, function(userComments, name){
  //   return {"username": name, "comment_count": _.size(userComments)};
  // });
  // return _.sortBy(counted, function(item){
  //   return -item.comment_count;
  // });

  // done using chain, doesn't seem clearer than the solution above
  return _.chain(comments)
  .groupBy('username')
  .map(function(userComments, name){
    return {"username": name, "comment_count": _.size(userComments)};
  })
  .sortBy(function(item){
    return -item.comment_count;
  });
};

module.exports = countedComments;
