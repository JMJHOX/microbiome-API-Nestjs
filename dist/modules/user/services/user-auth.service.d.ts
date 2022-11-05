import { Repository, UpdateResult } from 'typeorm';
import { RoleType } from '../constants/role-type.constant';
import { UserAuthEntity, UserEntity } from '../../user/entities';
import { UserService } from '../../user/services';
export declare class UserAuthService {
    private readonly _userAuthRepository;
    private readonly _userService;
    constructor(_userAuthRepository: Repository<UserAuthEntity>, _userService: UserService);
    findUserAuth(options: Partial<{
        pinCode: number;
        role: RoleType;
    }>): Promise<UserEntity | undefined>;
    markEmailAsConfirmed(email: string): Promise<UpdateResult>;
    updateRefreshToken(userAuthId: number, currentHashedRefreshToken: string): Promise<UpdateResult>;
    _createPinCode(): Promise<number>;
    private _generatePinCode;
}
