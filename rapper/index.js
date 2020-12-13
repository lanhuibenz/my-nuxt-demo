"use strict";
/* md5: b018edba2df60b405e358073ed542713 */
/* Rap仓库id: 273126 */
/* Rapper版本: 1.1.5 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
exports.__esModule = true;
exports.defaultFetch = exports.createFetch = exports.fetch = exports.overrideFetch = void 0;
/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=273126
 */
var request_1 = require("./request");
exports.createFetch = request_1.createFetch;
var commonLib = require("rap/runtime/commonLib");
var defaultFetch = commonLib.defaultFetch;
exports.defaultFetch = defaultFetch;
var fetch = request_1.createFetch({}, { fetchType: commonLib.FetchType.BASE });
exports.fetch = fetch;
var overrideFetch = function (fetchConfig) {
    exports.fetch = fetch = request_1.createFetch(fetchConfig, { fetchType: commonLib.FetchType.AUTO });
};
exports.overrideFetch = overrideFetch;
