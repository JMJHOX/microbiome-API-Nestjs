/// <reference types="node" />
import { BaseEntity } from "typeorm";
export declare class MicroSampleEntity extends BaseEntity {
    uuid: string;
    username: string;
    image?: Buffer;
    sample_qty?: string;
    created_at: Date;
    updated_at: Date;
    constructor(username: string, image: Buffer, sample_qty: string);
}
