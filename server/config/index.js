const _ = require('lodash');
const path = require('path');
let config = {
    "viewDir": path.join(__dirname, "../..", "views"),
    "staticDir": path.join(__dirname, "../..", "static")
}

//if (process.env.NODE_ENV == "development") {
    const localConfig = {
        port: 8082,
        baseUrl: "http://localhost:8080/"
    }
    config = _.extend(config, localConfig);
//}
// if (process.env.NODE_ENV == "production") {
//     const prodConfig = {
//         port: 80
//     }
//     config = _.extend(config, prodConfig);
// }
module.exports = config;