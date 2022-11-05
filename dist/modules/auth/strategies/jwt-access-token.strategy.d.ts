import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserEntity } from '../../../modules/user/entities';
import { UserService } from '../../../modules/user/services';
import { TokenPayloadInterface } from '../interfaces';
declare const JwtAccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAccessTokenStrategy extends JwtAccessTokenStrategy_base {
    private readonly _configService;
    private readonly _userService;
    constructor(_configService: ConfigService, _userService: UserService);
    validate({ uuid }: TokenPayloadInterface): Promise<UserEntity>;
}
export {};
