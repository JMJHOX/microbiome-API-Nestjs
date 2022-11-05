import { RoleType } from '../../../modules/user/constants/role-type.constant';
export declare function Authorization(...roles: RoleType[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
