import { AbstractEntity } from '../../../common/entities';
import { UserDto } from '../dtos';
import { UserAuthEntity } from '../entities';
export declare class UserEntity extends AbstractEntity<UserDto> {
    firstName: string;
    middleName?: string;
    lastName: string;
    motherName?: string;
    birthdate?: Date;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
    userAuth: UserAuthEntity;
    dtoClass: typeof UserDto;
    constructor(firstName?: string, middleName?: string, lastName?: string, motherName?: string, birthdate?: Date, avatar?: string, userAuth?: UserAuthEntity);
}
