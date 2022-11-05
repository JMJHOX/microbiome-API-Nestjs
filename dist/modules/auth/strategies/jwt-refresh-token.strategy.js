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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtRefreshTokenStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const services_1 = require("../../../modules/user/services");
const utils_1 = require("../../../common/utils");
const exceptions_1 = require("../exceptions");
const services_2 = require("../services");
let JwtRefreshTokenStrategy = class JwtRefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh-token') {
    constructor(_configService, _userService, _authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (request) => {
                    var _a;
                    return (_a = request === null || request === void 0 ? void 0 : request.cookies) === null || _a === void 0 ? void 0 : _a.Refresh;
                },
            ]),
            secretOrKey: _configService.get('JWT_REFRESH_TOKEN_SECRET_KEY'),
            ignoreExpiration: false,
            passReqToCallback: true,
        });
        this._configService = _configService;
        this._userService = _userService;
        this._authService = _authService;
    }
    async validate(request, { uuid }) {
        var _a;
        const refreshToken = (_a = request.cookies) === null || _a === void 0 ? void 0 : _a.Refresh;
        const encodedRefreshToken = (0, utils_1.encodeString)(refreshToken);
        const user = await this._userService.getUser(uuid);
        if (!user) {
            throw new exceptions_1.WrongCredentialsProvidedException();
        }
        return this._authService.getUserIfRefreshTokenMatches(encodedRefreshToken, user);
    }
};
JwtRefreshTokenStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        services_1.UserService,
        services_2.AuthService])
], JwtRefreshTokenStrategy);
exports.JwtRefreshTokenStrategy = JwtRefreshTokenStrategy;
//# sourceMappingURL=jwt-refresh-token.strategy.js.map