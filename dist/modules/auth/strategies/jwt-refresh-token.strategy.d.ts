import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { UserEntity } from '../../../modules/user/entities';
import { UserService } from '../../../modules/user/services';
import { TokenPayloadInterface } from '../interfaces';
import { AuthService } from '../services';
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    private readonly _configService;
    private readonly _userService;
    private readonly _authService;
    constructor(_configService: ConfigService, _userService: UserService, _authService: AuthService);
    validate(request: Request, { uuid }: TokenPayloadInterface): Promise<UserEntity>;
}
export {};
