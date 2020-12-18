"use strict";
/* md5: a1c9355301ff98e1be6ade2153e4dfa5 */
/* Rap仓库id: 273126 */
/* Rapper版本: 1.1.5 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
exports.__esModule = true;
exports.createFetch = void 0;
/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=273126
 */
var commonLib = require("rap/runtime/commonLib");
function createFetch(fetchConfig, extraConfig) {
    if (!extraConfig || !extraConfig.fetchType) {
        console.warn('Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch');
    }
    var rapperFetch = commonLib.getRapperRequest(fetchConfig);
    return {
        /**
         * 接口名：首页-栏目分类列表
         * Rap 地址: http://rap2.taobao.org/repository/editor?id=273126&mod=429431&itf=1822486
         * @param req 请求参数
         * @param extra 请求配置项
         */
        'GET/home/layouts/list': function (req, extra) {
            return rapperFetch({
                url: '/home/layouts/list',
                method: 'GET',
                params: req,
                extra: extra
            });
        }
    };
}
exports.createFetch = createFetch;
