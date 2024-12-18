// enum Environment {
//   TEST = "test",
//   PRODUCTION = "production",
// }
// "use strict"
// var Environment
// ;(function (Environment) {
//   Environment["PRODUCTION"] = "production"
//   Environment["TEST"] = "test"
// })(Environment || (Environment = {}))
var Environment = {
    TEST: "test",
    PRODUCTION: "production",
};
var env = Environment.PRODUCTION;
