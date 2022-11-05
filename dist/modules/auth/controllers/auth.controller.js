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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_constant_1 = require("../../../common/constants/response.constant");
const http_response_dto_1 = require("../../../common/dtos/http-response.dto");
const dtos_1 = require("../../../modules/user/dtos");
const services_1 = require("../../../modules/user/services");
const dtos_2 = require("../dtos");
const guards_1 = require("../guards");
const services_2 = require("../services");
let AuthController = class AuthController {
    async register(userRegistrationDto, res) {
        await this._authService.register(userRegistrationDto);
        res
            .status(common_1.HttpStatus.OK)
            .json({
            [response_constant_1.responseKey.STATUS]: response_constant_1.ResponseCode.SUCCESS_CODE,
            [response_constant_1.responseKey.MESSAGE]: response_constant_1.ResponseName.SUCCESS,
        })
            .send();
    }
    async login(req, userLogin, res) {
        const [accessTokenCookie, refreshTokenCookie] = await this._authService.login(userLogin);
        res
            .setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie])
            .json({
            [response_constant_1.responseKey.STATUS]: response_constant_1.ResponseCode.SUCCESS_CODE,
            [response_constant_1.responseKey.MESSAGE]: response_constant_1.ResponseName.SUCCESS,
        })
            .send();
    }
    async userProfile({ user }) {
        const userEntity = await this._userService.getUser(user.uuid);
        return userEntity.toDto();
    }
    async logout(request) {
        await this._authService.logout(request.user);
        request.res.setHeader('Set-Cookie', this._authService.getCookiesForLogout());
    }
};
__decorate([
    (0, common_1.Inject)(services_2.AuthService),
    __metadata("design:type", services_2.AuthService)
], AuthController.prototype, "_authService", void 0);
__decorate([
    (0, common_1.Inject)(services_1.UserService),
    __metadata("design:type", services_1.UserService)
], AuthController.prototype, "_userService", void 0);
__decorate([
    (0, common_1.Post)('signup'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successfully Registered',
        status: common_1.HttpStatus.OK,
        type: http_response_dto_1.SuccessResponse,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Allows new users registration' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_2.UserRegistrationDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.LocalAuthenticationGuard),
    (0, common_1.Post)('signin'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'An user logged in and a session cookie',
        status: common_1.HttpStatus.OK,
        type: http_response_dto_1.SuccessResponse,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Starts a new user session' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_2.UserLoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtRefreshTokenGuard),
    (0, common_1.Get)('profile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Get current user profile',
        type: dtos_1.UserDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user profile' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userProfile", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAccessTokenGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Patch)('signout'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete current user session' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, common_1.Controller)({ path: 'Auth', version: '1' }),
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor)
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map