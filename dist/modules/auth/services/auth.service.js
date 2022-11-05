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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const exceptions_1 = require("../exceptions");
const services_1 = require("../../user/services");
const utils_1 = require("../../../common/utils");
let AuthService = class AuthService {
    constructor(_userService, _userAuthService, _jwtService, _configService) {
        this._userService = _userService;
        this._userAuthService = _userAuthService;
        this._jwtService = _jwtService;
        this._configService = _configService;
    }
    async register(userRegistrationDto) {
        return this._userService.createUser(userRegistrationDto);
    }
    async login(user) {
        const data = await this._userService.getUserByMail(user.identifier);
        const accessTokenCookie = await this._getCookieWithJwtToken(data.uuid);
        const { cookie: refreshTokenCookie, token: refreshToken } = this._getCookieWithJwtRefreshToken(data.uuid);
        await this._userAuthService.updateRefreshToken(data.userAuth.id, refreshToken);
        return [accessTokenCookie, refreshTokenCookie];
    }
    async logout(user) {
        await this._userAuthService.updateRefreshToken(user.userAuth.id, null);
    }
    async validateUser(userLoginDto) {
        const { identifier, password } = userLoginDto;
        const user = await this._userService.findUser({
            pinCode: +identifier,
            email: identifier,
            uuid: identifier,
        });
        if (!user) {
            throw new exceptions_1.WrongCredentialsProvidedException();
        }
        const isPasswordValid = await (0, utils_1.validateHash)(password, user.userAuth.password);
        if (!isPasswordValid) {
            throw new exceptions_1.WrongCredentialsProvidedException();
        }
        return user;
    }
    refreshToken(user) {
        return this._getCookieWithJwtToken(user.uuid);
    }
    getCookiesForLogout() {
        return [
            'Authentication=; HttpOnly; Path=/; Max-Age=0',
            'Refresh=; HttpOnly; Path=/; Max-Age=0',
        ];
    }
    async getUserIfRefreshTokenMatches(refreshToken, user) {
        const isRefreshTokenMatching = await (0, utils_1.validateHash)(refreshToken, user.userAuth.currentHashedRefreshToken);
        if (!isRefreshTokenMatching) {
            throw new exceptions_1.RefreshTokenNotMatchingException();
        }
        return user;
    }
    getJwtConfirmToken(email) {
        const payload = { email };
        return this._jwtService.sign(payload, {
            secret: this._configService.get('JWT_VERIFICATION_TOKEN_SECRET_KEY'),
            expiresIn: `${this._configService.get('JWT_VERIFICATION_TOKEN_EXPIRATION_TIME')}s`,
        });
    }
    async resendConfirmationLink(user) {
        if (user.userAuth.isEmailConfirmed) {
            throw new common_1.BadRequestException('Email already confirmed');
        }
    }
    async confirm(user) {
        await this._userAuthService.markEmailAsConfirmed(user.userAuth.email);
    }
    _getCookieWithJwtToken(uuid) {
        const payload = { uuid };
        const token = this._jwtService.sign(payload, {
            secret: this._configService.get('JWT_ACCESS_TOKEN_SECRET_KEY'),
            expiresIn: `${this._configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}s`,
        });
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this._configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}`;
    }
    _getCookieWithJwtRefreshToken(uuid) {
        const payload = { uuid };
        const token = this._jwtService.sign(payload, {
            secret: this._configService.get('JWT_REFRESH_TOKEN_SECRET_KEY'),
            expiresIn: `${this._configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`,
        });
        const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this._configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}`;
        return { cookie, token };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.UserService,
        services_1.UserAuthService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map