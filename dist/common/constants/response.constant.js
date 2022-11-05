"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseKey = exports.ResponseName = exports.ResponseCode = void 0;
var ResponseCode;
(function (ResponseCode) {
    ResponseCode["SUCCESS_CODE"] = "200";
    ResponseCode["FAIL_CODE"] = "500";
    ResponseCode["CATASTROFIC_CODE"] = "404";
})(ResponseCode = exports.ResponseCode || (exports.ResponseCode = {}));
var ResponseName;
(function (ResponseName) {
    ResponseName["SUCCESS"] = "SUCCESS";
    ResponseName["FAIL"] = "FAILED";
    ResponseName["CATASTROFIC"] = "DAMN";
})(ResponseName = exports.ResponseName || (exports.ResponseName = {}));
var responseKey;
(function (responseKey) {
    responseKey["STATUS"] = "status";
    responseKey["MESSAGE"] = "message";
    responseKey["DATA"] = "data";
})(responseKey = exports.responseKey || (exports.responseKey = {}));
//# sourceMappingURL=response.constant.js.map