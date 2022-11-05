export declare class UtilsService {
    static toDto<T, E>(model: new (entity: E, options?: any) => T, entity: E, options?: any): T;
    static toDto<T, E>(model: new (entity: E, options?: any) => T, entity: E[], options?: any): T[];
}
