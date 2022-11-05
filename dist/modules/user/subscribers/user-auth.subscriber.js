"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthSubscriber = void 0;
const utils_1 = require("../../../common/utils");
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
let UserAuthSubscriber = class UserAuthSubscriber {
    listenTo() {
        return entities_1.UserAuthEntity;
    }
    async beforeInsert({ entity }) {
        if (entity.password) {
            entity.password = await (0, utils_1.generateHash)(entity.password);
        }
        if (entity.email) {
            entity.email = entity.email.toLowerCase();
        }
    }
    async beforeUpdate({ entity, databaseEntity, }) {
        if (entity.password) {
            const password = await (0, utils_1.generateHash)(entity.password);
            if (password !== (databaseEntity === null || databaseEntity === void 0 ? void 0 : databaseEntity.password)) {
                entity.password = (0, utils_1.generateHash)(entity.password);
            }
        }
        if (entity.email) {
            if (entity.email !== databaseEntity.email) {
                entity.email = entity.email.toLowerCase();
            }
        }
        if (entity.currentHashedRefreshToken) {
            const currentHashedRefreshToken = (0, utils_1.encodeString)(entity.currentHashedRefreshToken);
            entity.currentHashedRefreshToken = await (0, utils_1.generateHash)(currentHashedRefreshToken);
        }
    }
};
UserAuthSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], UserAuthSubscriber);
exports.UserAuthSubscriber = UserAuthSubscriber;
//# sourceMappingURL=user-auth.subscriber.js.map