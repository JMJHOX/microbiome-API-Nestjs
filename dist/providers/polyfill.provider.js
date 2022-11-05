"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const lodash_1 = require("lodash");
Array.prototype.toDtos = function (options) {
    return (0, lodash_1.default)(this)
        .map((item) => item.toDto(options))
        .compact()
        .value();
};
//# sourceMappingURL=polyfill.provider.js.map