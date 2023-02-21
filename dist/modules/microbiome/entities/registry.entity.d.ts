import { BaseEntity } from "typeorm";
export declare class MicroSampleEntity extends BaseEntity {
    uuid: string;
    username: string;
    image?: Uint8Array;
    sample_qty?: string;
    created_at: Date;
    updated_at: Date;
    constructor(username: string, image: Uint8Array, sample_qty: string);
}
