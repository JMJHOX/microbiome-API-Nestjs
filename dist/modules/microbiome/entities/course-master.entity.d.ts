import { UserEntity } from 'src/modules/user/entities';
import { BaseEntity } from 'typeorm';
export declare class CourseMaster extends BaseEntity {
    uuid: string;
    courseCollectionName: string;
    authorUser: string;
    authorEmail: string;
    courseCollectionDesc: string;
    courseCollectionCategory: string;
    courseCollectionReq: string;
    courseCollectionRating?: string;
    courseCollectionMisc?: string;
    courseCollectionIdiom: string;
    createdAt: Date;
    updatedAt: Date;
    courseAuthor: CourseMaster[];
    User: UserEntity;
    constructor(courseCollectionName: string, courseCollectionDesc: string, courseCollectionCategory: string, courseCollectionReq: string, authorUser: string, authorEmail: string, courseCollectionIdiom: string, courseCollectionRating?: string, courseCollectionMisc?: string);
}
