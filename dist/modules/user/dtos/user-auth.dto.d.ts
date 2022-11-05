import { AbstractDto } from '../../../common/dtos';
import { RoleType } from '../constants/role-type.constant';
import { UserAuthEntity } from '../entities';
export declare class UserAuthDto extends AbstractDto {
    readonly pinCode: number;
    readonly role: RoleType;
    readonly email: string;
    readonly lastSuccessfulLoggedDate: Date;
    readonly lastFailedLoggedDate: Date;
    readonly lastLogoutDate: Date;
    constructor(userAuth: UserAuthEntity);
}
