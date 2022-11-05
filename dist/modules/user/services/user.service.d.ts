import { UserDto } from '../dtos';
import { UserEntity } from '../entities';
import { PageDto, PageOptionsDto } from '../../../common/dtos';
import { DataSource, Repository } from 'typeorm';
import { RoleType } from '../constants/role-type.constant';
import { UserRegistrationDto } from 'src/modules/auth/dtos';
export declare class UserService {
    private readonly _userRepository;
    private DataSourceService;
    constructor(_userRepository: Repository<UserEntity>, DataSourceService: DataSource);
    createUser(userCreateDto: UserRegistrationDto): Promise<any>;
    private _createPinCode;
    private _generatePinCode;
    findUserAuth(options: Partial<{
        pinCode: number;
        role: RoleType;
    }>): Promise<UserEntity | undefined>;
    findUser(options: Partial<{
        uuid: string;
        email: string;
        pinCode: number;
    }>): Promise<UserEntity>;
    getUser(uuid: string): Promise<UserEntity | undefined>;
    getUserByMail(email: string): Promise<any>;
    getUsers(options: PageOptionsDto): Promise<PageDto<UserDto>>;
}
