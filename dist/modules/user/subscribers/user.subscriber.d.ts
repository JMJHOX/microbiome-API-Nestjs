import { EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { UserEntity } from '../../user/entities';
export declare class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
    listenTo(): any;
    beforeInsert({ entity }: InsertEvent<UserEntity>): void;
    beforeUpdate({ entity, databaseEntity }: UpdateEvent<UserEntity>): void;
}
