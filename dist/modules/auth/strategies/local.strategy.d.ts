import { Strategy } from 'passport-local';
import { UserEntity } from '../../../modules/user/entities';
import { AuthService } from '../services';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly _authService;
    constructor(_authService: AuthService);
    validate(identifier: string, password: string): Promise<UserEntity>;
}
export {};
