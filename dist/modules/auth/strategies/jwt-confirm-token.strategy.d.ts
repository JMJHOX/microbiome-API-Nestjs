import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserEntity } from '../../../modules/user/entities';
import { UserService } from '../../../modules/user/services';
import { VerificationTokenPayload } from '../interfaces';
declare const JwtConfirmTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtConfirmTokenStrategy extends JwtConfirmTokenStrategy_base {
    private readonly _configService;
    private readonly _userService;
    constructor(_configService: ConfigService, _userService: UserService);
    validate({ email, }: VerificationTokenPayload): Promise<UserEntity>;
}
export {};
