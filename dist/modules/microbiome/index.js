"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroBiomeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../user/entities");
const services_1 = require("../user/services");
const courses_controller_1 = require("./controller/courses.controller");
const registry_entity_1 = require("./entities/registry.entity");
const micro_service_1 = require("./services/micro.service");
let MicroBiomeModule = class MicroBiomeModule {
};
MicroBiomeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([registry_entity_1.MicroSampleEntity, entities_1.UserEntity, entities_1.UserAuthEntity]),
        ],
        controllers: [courses_controller_1.MicroBiomeController],
        providers: [micro_service_1.microService, services_1.UserService, services_1.UserAuthService],
        exports: [],
    })
], MicroBiomeModule);
exports.MicroBiomeModule = MicroBiomeModule;
//# sourceMappingURL=index.js.map