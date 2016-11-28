var _ = require("lodash");

var sayHello = function(loginDetails) {
  // var loginCount = loginDetails.login.length;
  // return _.template('Hello <%= name %> (logins: <%= loginCount %>)')({name: loginDetails.name, loginCount: loginCount})
  var helloTemplate = 'Hello <%= name %> (logins: <%= login.length %>)'
  return _.template(helloTemplate)(loginDetails)
};

module.exports = sayHello;
