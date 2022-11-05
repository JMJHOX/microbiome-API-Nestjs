import { AbstractDto } from '../dtos';
export declare abstract class AbstractEntity<T extends AbstractDto = AbstractDto> {
    id: number;
    uuid: string;
    createdAt: Date;
    abstract dtoClass: new (entity: AbstractEntity, options?: any) => T;
    toDto(options?: any): T;
    constructor(id: number, uuid?: string, createdAt?: Date);
    constructor(id: number, uuid: string, createdAt?: Date);
    constructor(id?: number, uuid?: string, createdAt?: Date);
}
