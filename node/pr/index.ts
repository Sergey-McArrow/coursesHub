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

export const Environment = {
  TEST: "test",
  PRODUCTION: "production",
} as const

type TEnvironment = (typeof Environment)[keyof typeof Environment]

export const env: TEnvironment = Environment.PRODUCTION
