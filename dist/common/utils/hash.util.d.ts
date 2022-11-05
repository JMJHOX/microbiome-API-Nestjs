export declare function generateHash(password: string): Promise<string>;
export declare function validateHash(password: string, hash: string): Promise<boolean>;
export declare function encodeString(text: string): string;
