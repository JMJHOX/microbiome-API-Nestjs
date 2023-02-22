import { BaseEntity } from "typeorm";
export declare class MicroSampleEntity extends BaseEntity {
    uuid: string;
    username: string;
    image_route_file?: string;
    sample_qty?: number;
    created_at: Date;
    updated_at: Date;
    constructor(username: string, image_route_file: string, sample_qty: number);
}
