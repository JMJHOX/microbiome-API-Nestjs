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
exports.UserAuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../user/entities");
const exceptions_1 = require("../../user/exceptions");
const services_1 = require("../../user/services");
const utils_1 = require("../../../common/utils");
const typeorm_2 = require("@nestjs/typeorm");
let UserAuthService = class UserAuthService {
    constructor(_userAuthRepository, _userService) {
        this._userAuthRepository = _userAuthRepository;
        this._userService = _userService;
    }
    async findUserAuth(options) {
        return this._userService.findUser(options);
    }
    async markEmailAsConfirmed(email) {
        return this._userAuthRepository.update({ email }, { isEmailConfirmed: true });
    }
    async updateRefreshToken(userAuthId, currentHashedRefreshToken) {
        return this._userAuthRepository.update(userAuthId, {
            currentHashedRefreshToken,
        });
    }
    async _createPinCode() {
        const pinCode = this._generatePinCode();
        const user = await this.findUserAuth({ pinCode });
        try {
            return user ? await this._createPinCode() : pinCode;
        }
        catch (error) {
            throw new exceptions_1.PinCodeGenerationErrorException(error);
        }
    }
    _generatePinCode() {
        return (0, utils_1.generateRandomInteger)(1, 10e5 - 1);
    }
};
UserAuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.UserAuthEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => services_1.UserService))),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.UserService])
], UserAuthService);
exports.UserAuthService = UserAuthService;
//# sourceMappingURL=user-auth.service.js.map