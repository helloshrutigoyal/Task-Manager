const PROXY_CONFIG = {
    "/task": {
      "target": "http://localhost:8080",
      "secure": false
    }
}
module.exports = PROXY_CONFIG;