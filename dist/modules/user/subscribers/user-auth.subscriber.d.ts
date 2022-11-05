import { EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { UserAuthEntity } from '../entities';
export declare class UserAuthSubscriber implements EntitySubscriberInterface<UserAuthEntity> {
    listenTo(): typeof UserAuthEntity;
    beforeInsert({ entity }: InsertEvent<UserAuthEntity>): Promise<void>;
    beforeUpdate({ entity, databaseEntity, }: UpdateEvent<UserAuthEntity>): Promise<void>;
}
