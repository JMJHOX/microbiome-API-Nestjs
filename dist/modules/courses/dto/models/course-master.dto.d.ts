import { UserEntity } from 'src/modules/user/entities';
export declare class CourseMasterDto {
    readonly courseCollectionName: string;
    readonly courseCollectionUserEmail: string;
    readonly courseCollectionDesc: string;
    readonly courseCollectionCategory: string;
    readonly courseCollectionReq: string;
    readonly courseCollectionRating: string;
    readonly courseCollectionIdiom: string;
    readonly authorUser: string;
    readonly authorEmail: string;
    readonly User: UserEntity;
    constructor(User: UserEntity);
}
