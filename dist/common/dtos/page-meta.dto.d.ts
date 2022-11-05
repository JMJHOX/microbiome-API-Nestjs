import { PageMetaDtoParameters } from '../interfaces';
export declare class PageMetaDto {
    readonly page: number;
    readonly take: number;
    readonly itemCount: number;
    readonly pageCount: number;
    readonly hasNextPage: boolean;
    readonly hasPreviousPage: boolean;
    constructor({ options, itemCount }: PageMetaDtoParameters);
}
