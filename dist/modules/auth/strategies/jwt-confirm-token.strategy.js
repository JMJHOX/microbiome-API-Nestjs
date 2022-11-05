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
exports.JwtConfirmTokenStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const services_1 = require("../../../modules/user/services");
const exceptions_1 = require("../exceptions");
let JwtConfirmTokenStrategy = class JwtConfirmTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-confirm-token') {
    constructor(_configService, _userService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: _configService.get('JWT_VERIFICATION_TOKEN_SECRET_KEY'),
            ignoreExpiration: false,
        });
        this._configService = _configService;
        this._userService = _userService;
    }
    async validate({ email, }) {
        const user = await this._userService.findUser({ email });
        if (!user) {
            throw new exceptions_1.WrongCredentialsProvidedException();
        }
        if (user.userAuth.isEmailConfirmed) {
            throw new common_1.BadRequestException('Email already confirmed');
        }
        return user;
    }
};
JwtConfirmTokenStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        services_1.UserService])
], JwtConfirmTokenStrategy);
exports.JwtConfirmTokenStrategy = JwtConfirmTokenStrategy;
//# sourceMappingURL=jwt-confirm-token.strategy.js.map