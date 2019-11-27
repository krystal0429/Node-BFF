import config from "../config";
import fetch from "node-fetch";
class SafeRequest {
    constructor(url) {
        this.url = url;
        this.baseUrl = config.baseUrl;
    }
    fetch() {
        let result = {
            code: 0,
            message: "",
            data: []
        }
        return new Promise((resolve, reject) => {
            let jpfetch = fetch(this.baseUrl + this.url);
            console.log("🍊🍊🍊🍊🍊",this.baseUrl + this.url);
            jpfetch.then(res => res.json())
                .then((json) => {
                    console.log(json)
                    result.data = json;
                    resolve(result);
                }).catch((error) => {
                    console.log(error);
                    result.code = 1;
                    result.message = "❎node-fetch请求数据失败";
                    reject(result)
                })
        })
    }
}
export default SafeRequest;