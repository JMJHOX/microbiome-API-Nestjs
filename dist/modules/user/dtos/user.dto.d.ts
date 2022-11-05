import { AbstractDto } from '../../../common/dtos';
import { UserAuthDto } from '../dtos';
import { UserEntity } from '../entities';
export declare class UserDto extends AbstractDto {
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly motherName?: string;
    get shortName(): string;
    readonly birthdate?: Date;
    readonly avatar?: string;
    readonly userAuth?: UserAuthDto;
    constructor(user: UserEntity);
}
