"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroBiomeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_constant_1 = require("../../../common/constants/response.constant");
const http_response_dto_1 = require("../../../common/dtos/http-response.dto");
const micro_create_dto_1 = require("../dto/models/micro-create.dto");
const micro_service_1 = require("../services/micro.service");
let MicroBiomeController = class MicroBiomeController {
    async register(courserRegistrationDto, res) {
        const resultAdded = await this.microService.createRegistry(courserRegistrationDto);
        res
            .status(common_1.HttpStatus.OK)
            .json({
            [response_constant_1.responseKey.STATUS]: response_constant_1.ResponseCode.SUCCESS_CODE,
            [response_constant_1.responseKey.MESSAGE]: response_constant_1.ResponseName.SUCCESS,
            [response_constant_1.responseKey.DATA]: resultAdded,
        })
            .send();
    }
};
__decorate([
    (0, common_1.Inject)(micro_service_1.microService),
    __metadata("design:type", micro_service_1.microService)
], MicroBiomeController.prototype, "microService", void 0);
__decorate([
    (0, common_1.Post)("createRegistry"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: "Successfully Registered the information",
        status: common_1.HttpStatus.OK,
        type: http_response_dto_1.SuccessResponse,
    }),
    (0, swagger_1.ApiOperation)({ summary: "Registers a register information" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [micro_create_dto_1.RegistryCreateDto, Object]),
    __metadata("design:returntype", Promise)
], MicroBiomeController.prototype, "register", null);
MicroBiomeController = __decorate([
    (0, common_1.Controller)({ path: "micro", version: "1" }),
    (0, swagger_1.ApiTags)("micro"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor)
], MicroBiomeController);
exports.MicroBiomeController = MicroBiomeController;
//# sourceMappingURL=courses.controller.js.map