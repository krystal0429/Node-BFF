import SafeRequest from '../utils/safeFetch';
class Books {
    /**
     * Books类 获取后台有关于图书相关的数据类
     * @class
     */
    /**
     * @constructor
     * @param {object} app KOA2执行的上下文
     */
    constructor(app) {
        
    }
    /**
     * 获取后台全部图书列表
     * @param {*} options 配置项
     * @example
     * return new Promise
     * getData(options)
     */
    getData(options) {
        const safeRequest = new SafeRequest(options.url);
        return safeRequest.fetch();
    }
}
export default Books;