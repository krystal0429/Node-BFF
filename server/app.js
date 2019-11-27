import Koa from "koa";
import serve from "koa-static";
import render from "koa-swig";
import config from "./config";
const app = new Koa();
import { wrap } from 'co';
import errorHandler from "./middlewares/errorHandler";
import { configure, getLogger } from 'log4js';
import Router from 'koa-router';
const router = new Router();

import controllers from './controllers';

configure({
    appenders: { cheese: { type: 'file', filename: __dirname + '/logs/jp.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
app.use(serve(config.staticDir));



controllers(app, router);
app.use(router.routes());
app.use(router.allowedMethods());


app.context.render = wrap(render({
    root: config.viewDir,
    autoescape: true, //注意这个配置项目
    cache: false,
    ext: 'html',
    writeBody: false
}));
//先让他next 再次的判断当前的业务情况
const logger = getLogger('cheese');
errorHandler.error(app, logger);
app.listen(config.port, () => {
    console.log("图书管理平台启动成功, port:" + config.port);
});