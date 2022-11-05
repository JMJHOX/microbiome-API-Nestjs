import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserRegistrationDto, UserLoginDto } from '../dtos';
import { UserEntity } from '../../user/entities';
import { UserAuthService, UserService } from '../../user/services';
export declare class AuthService {
    private readonly _userService;
    private readonly _userAuthService;
    private readonly _jwtService;
    private readonly _configService;
    constructor(_userService: UserService, _userAuthService: UserAuthService, _jwtService: JwtService, _configService: ConfigService);
    register(userRegistrationDto: UserRegistrationDto): Promise<UserEntity>;
    login(user: UserLoginDto): Promise<string[]>;
    logout(user: UserEntity): Promise<void>;
    validateUser(userLoginDto: UserLoginDto): Promise<UserEntity>;
    refreshToken(user: UserEntity): string;
    getCookiesForLogout(): string[];
    getUserIfRefreshTokenMatches(refreshToken: string, user: UserEntity): Promise<UserEntity>;
    getJwtConfirmToken(email: string): string;
    resendConfirmationLink(user: UserEntity): Promise<void>;
    confirm(user: UserEntity): Promise<void>;
    private _getCookieWithJwtToken;
    private _getCookieWithJwtRefreshToken;
}
