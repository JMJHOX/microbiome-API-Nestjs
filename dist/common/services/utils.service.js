"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
const _ = require("lodash");
class UtilsService {
    static toDto(model, entity, options) {
        if (_.isArray(entity)) {
            return entity.map((u) => new model(u, options));
        }
        return new model(entity, options);
    }
}
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.service.js.map