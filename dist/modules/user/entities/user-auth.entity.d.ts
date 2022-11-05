import { AbstractEntity } from '../../../common/entities';
import { RoleType } from '../constants/role-type.constant';
import { UserAuthDto } from '../dtos';
import { UserEntity } from './user.entity';
export declare class UserAuthEntity extends AbstractEntity<UserAuthDto> {
    role: RoleType;
    pinCode: number;
    email: string;
    password: string;
    lastSuccessfulLoggedDate?: Date;
    lastFailedLoggedDate?: Date;
    lastLogoutDate?: Date;
    updatedAt: Date;
    currentHashedRefreshToken?: string;
    isEmailConfirmed: boolean;
    user: UserEntity;
    dtoClass: typeof UserAuthDto;
    constructor(role: RoleType, email?: string, password?: string, isEmailConfirmed?: boolean, currentHashedRefreshToken?: string, user?: UserEntity);
    constructor(role: RoleType, email: string, password: string, isEmailConfirmed?: boolean, currentHashedRefreshToken?: string, user?: UserEntity);
    constructor(role: RoleType, email: string, password: string, isEmailConfirmed: boolean, currentHashedRefreshToken?: string, user?: UserEntity);
    constructor(role: RoleType, email: string, password: string, isEmailConfirmed: boolean, currentHashedRefreshToken: string, user?: UserEntity);
    constructor(role?: RoleType, email?: string, password?: string, isEmailConfirmed?: boolean, currentHashedRefreshToken?: string, user?: UserEntity);
}
